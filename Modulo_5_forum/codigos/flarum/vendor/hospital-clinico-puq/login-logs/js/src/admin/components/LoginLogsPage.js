import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Chart from 'chart.js/auto';

export default class LoginLogsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
    this.selectedTimeRange = 'day'; // Default: Day
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.selectedUser = null;
    this.graphData = null;
    //this.logs = [];
    //this.users = [];
    //this.total = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;

    // Fetch data for the table and graph
    this.fetchData();
  }

  fetchData() {
    // Create filters based on selected options
    let url_stats = app.forum.attribute('apiUrl') + '/loginLogStats';
    const filters = [];

    let offset = (this.currentPage - 1) * this.itemsPerPage;

    if (this.selectedTimeRange) filters.push(`timeRange=${this.selectedTimeRange}`);
    if (this.selectedStartDate) filters.push(`startDate=${this.selectedStartDate}`);
    if (this.selectedEndDate) filters.push(`endDate=${this.selectedEndDate}`);
    if (this.selectedUser) filters.push(`user=${this.selectedUser}`);

    let url_logs = app.forum.attribute('apiUrl') + '/loginLogs';

    if (filters.length) url_logs += '?' + filters.join('&');
    url_logs += '&offset=' + offset;

    // Fetch logs for the table (implement similar filtering for logs if needed)
    app.request({
      method: 'GET',
      url: url_logs,
    }).then((response) => {
      this.logs = response.data;
      m.redraw();
    });

    let url_total = app.forum.attribute('apiUrl') + '/loginLogsTotal';
    if (filters.length) url_total += '?' + filters.join('&');

    app.request({
      method: 'GET',
      url: url_total,
    }).then((response) => {
      this.total = response.data;
      m.redraw();
    });


    app.request({
      method: 'GET',
      url: app.forum.attribute('apiUrl') + '/users',
    }).then((response) => {
      this.users = response.data.map(user => ({
        id: user.id,
        username: user.attributes.username,
      }));
      m.redraw();
    });

    if (filters.length) url_stats += '?' + filters.join('&');

    // Fetch data
    app.request({
      method: 'GET',
      url: url_stats,
    }).then((response) => {
      this.graphData = response.data;
      m.redraw();
      this.waitForCanvasAndCreateChart();
    });
  }

  waitForCanvasAndCreateChart() {
    const interval = setInterval(() => {
      const chartElement = document.getElementById('loginsChart');
      if (chartElement) {
        clearInterval(interval);
        const ctx = chartElement.getContext('2d');
        if (ctx) {
          this.createChart(ctx); // Call your chart creation logic
        }
      }
    }, 100); // Check every 100ms
  }

  createChart(ctx) {
    if (!this.graphData) return;

    // Extract labels and data for the chart
    const labels = this.graphData.map((log) => log.attributes.date);
    const data = this.graphData.map((log) => log.attributes.logins);

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Logins per Day',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  content() {
    if (!this.users || !this.logs || !this.total) {
      return <div>Cargando...</div>; // Show loading while data is being fetched
    }
    console.log(this.users);
    console.log(this.logs);
    console.log(this.total);

    const totalPages = Math.ceil(this.total[0].attributes.total / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const visibleLogs = this.logs.slice(start, end);

    console.log(totalPages);
    console.log(this.currentPage);
    return (
      <div className="LoginLogsPage">
        <div className="container">
          {/* Register List */}
          <h2>Login Logs</h2>
          <div style="display: flex; gap: 10px; width: 30%; margin-bottom: 5px;">

            <input type="date" class="FormControl FormControl"  onchange={(event) => {
              this.selectedStartDate = event.target.value;
              this.fetchData();
            }}/>

            <input type="date" class="FormControl FormControl" onchange={(event) => {
              this.selectedEndDate = event.target.value;
              this.fetchData();
            }}/>

            {this.users.length > 0 && (
              <span class="Select">
              <select class="Select-input FormControl" onchange={(event) => {
                this.selectedUser = event.target.value;
                this.fetchData();
              }}>
              <option value="">Todos los usuarios</option>
                {this.users.map((user) => (
                  <option value={user.id}>{user.username}</option>
                ))}
              </select>
            </span>
            )}
          </div>
            <table className="DashboardWidget Widget LoginLogsTable">
              <thead>
              <tr>
                <th>Usuario</th>
                <th>Tiempo de conexión</th>
                <th>Tiempo de desconexión</th>
              </tr>
              </thead>
              <tbody>
              {this.logs.map((log) => (
                <tr>
                  <td>{log.attributes.username}</td>
                  <td>{log.attributes.logged_in_at}</td>
                  <td>{log.attributes.logged_out_at || 'N/A'}</td>
                </tr>
              ))}
              </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="pagination-controls">
              <nav class="UserListPage-gridPagination">
                <button onclick={() => {
                  this.currentPage = 1;
                  this.tempPage = this.currentPage;
                  this.fetchData();
                }}
                        disabled={this.currentPage === 1} class="Button Button--icon UserListPage-firstPageBtn hasIcon"
                        type="button"
                        aria-label="core.admin.users.pagination.first_page_button"><i aria-hidden="true"
                                                                                      class="icon fas fa-step-backward Button-icon"></i><span
                  class="Button-label"></span></button>
                <button onclick={() => {
                  this.currentPage -= 1
                  this.tempPage = this.currentPage;
                  this.fetchData();
                }}
                        disabled={this.currentPage === 1}
                        class="Button Button--icon UserListPage-backBtn hasIcon" type="button"
                        aria-label="Previous page"><i aria-hidden="true"
                                                      class="icon fas fa-chevron-left Button-icon"></i><span
                  class="Button-label"></span></button>
                <span class="UserListPage-pageNumber">Página <input
                  oninput={(event) => {
                    this.tempPage = event.target.value; // Track the temporary input value
                  }}
                  onkeydown={(event) => {
                    if (event.key === "Enter") {
                      const pageNumber = parseInt(this.tempPage, 10); // Use the temporary value
                      if (!isNaN(pageNumber)) {
                        this.currentPage = pageNumber;
                        this.fetchData();
                      } else if (this.tempPage === "") {
                        this.tempPage = null; // Allow empty input without triggering
                      }
                    }
                  }}
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  aria-label="Go directly to page number"
                  autocomplete="off"
                  class="FormControl UserListPage-pageNumberInput"
                  value={this.tempPage !== undefined ? this.tempPage : this.currentPage}
                /> de {totalPages}</span>
                <button onclick={() => {
                  this.currentPage += 1;
                  this.tempPage = this.currentPage;
                  this.fetchData();
                }}
                        disabled={this.currentPage === totalPages}
                        class="Button Button--icon UserListPage-nextBtn hasIcon" type="button"
                        aria-label="Next page"><i aria-hidden="true"
                                                  class="icon fas fa-chevron-right Button-icon"></i><span
                  class="Button-label"></span></button>
                <button onclick={() => {
                  this.currentPage = totalPages;
                  this.tempPage = this.currentPage;
                  this.fetchData();
                }}
                        disabled="" class="Button Button--icon UserListPage-lastPageBtn hasIcon" type="button"
                        aria-label="core.admin.users.pagination.last_page_button"><i aria-hidden="true"
                                                                                     class="icon fas fa-step-forward Button-icon"></i><span
                  class="Button-label"></span></button>
              </nav>
            </div>
            {/* Graph */}
            <h2>Logins Chart</h2>
            <div>
              <canvas id="loginsChart"></canvas>
            </div>
          </div>
        </div>
        );
        }

        }
