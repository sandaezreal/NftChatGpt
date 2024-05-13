
import { FC } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  
  
  import Chart from "react-apexcharts";

  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
// import dynamic from 'next/dynamic'
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
 
interface Transaction {
  name: string;
  icon: string;
  abbr: string;
  price: string | number;
  date: string;
}
interface ChartData {
  name: string;
  data: number[];
}

interface ChartOptions {
  chart: {
    toolbar: {
      show: boolean;
    };
  };
  title: {
    show: string;
  };
  dataLabels: {
    enabled: boolean;
  };
  colors: string[];
  stroke: {
    lineCap: string;
    curve: string;
  };
  markers: {
    size: number;
  };
  xaxis: {
    axisTicks: {
      show: boolean;
    };
    axisBorder: {
      show: boolean;
    };
    labels: {
      style: {
        colors: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: number;
      };
    };
    categories: string[];
  };
  yaxis: {
    labels: {
      style: {
        colors: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: number;
      };
    };
  };
  grid: {
    show: boolean;
    borderColor: string;
    strokeDashArray: number;
    xaxis: {
      lines: {
        show: boolean;
      };
    };
    padding: {
      top: number;
      right: number;
    };
  };
  fill: {
    opacity: number;
  };
  tooltip: {
    theme: string;
  };
}

const chartConfig: {
  type: string;
  height: number;
  series: ChartData[];
  options: ChartOptions;
} = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Price",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#f7931a"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "0",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "0",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};


const chartConfig2: {
    type: string;
    height: number;
    series: ChartData2[];
    options: ChartOptions;
  } = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Price",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 200],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#345d9d"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "0",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "0",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: false,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  
  interface ChartData2 {
    name: string;
    data: number[];
  }

  const chartConfig3: {
    type: string;
    height: number;
    series: ChartData3[];
    options: ChartOptions;
  } = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Price",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 100],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#d9327c"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "0",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "0",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: false,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  
  interface ChartData3 {
    name: string;
    data: number[];
  }


  interface ChartConfig {
    type: string;
    height: number;
    series: {
      name: string;
      data: number[];
    }[];
    options: {
      chart: {
        toolbar: {
          show: boolean;
        };
      };
      title: {
        show: string;
      };
      dataLabels: {
        enabled: boolean;
      };
      colors: string[];
      plotOptions: {
        bar: {
          columnWidth: string;
          borderRadius: number;
        };
      };
      xaxis: {
        axisTicks: {
          show: boolean;
        };
        axisBorder: {
          show: boolean;
        };
        labels: {
          style: {
            colors: string;
            fontSize: string;
            fontFamily: string;
            fontWeight: number;
          };
        };
        categories: string[];
      };
      yaxis: {
        labels: {
          style: {
            colors: string;
            fontSize: string;
            fontFamily: string;
            fontWeight: number;
          };
        };
      };
      grid: {
        show: boolean;
        borderColor: string;
        strokeDashArray: number;
        xaxis: {
          lines: {
            show: boolean;
          };
        };
        padding: {
          top: number;
          right: number;
        };
      };
      fill: {
        opacity: number;
      };
      tooltip: {
        theme: string;
      };
    };
  }
  
  const marketCap: ChartConfig  = {
    type: "bar",
    height: 340,
    series: [
      {
        name: "Market Cap",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
const SidePanel: FC = () => {
  const transactions: Transaction[] = [
    { name: 'Bitcoin', icon: 'fab fa-btc', abbr: 'BTC', price: '1,849.32', date: '19 Aug 2021' },
    { name: 'Ethereum', icon: 'fab fa-ethereum', abbr: 'ETH', price: '143.12', date: '19 Aug 2021' },
    { name: 'Bitcoin', icon: 'fab fa-btc', abbr: 'BTC', price: '43.19', date: '17 Aug 2021' },
  ];
  const transactions_list = transactions.map((item: Transaction, key: number) => {
    return (
      <div className="transaction-item flex-row text-medium">
        <i className={item.icon}></i>
        <div className="flex-row flex-apart">
          <div>
            <span className="text-small"></span>
            {item.name}
            <div className="text-small">{item.abbr}</div>
          </div>
          <div className="transaction-price">
            <div>
              <span className="text-small">£</span>
              {item.price}
            </div>
            <div className="text-small">{item.date}</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div id="">
    </div>
  );
};


interface CardProps {
    chartConfig: any;
  }

const Dashboard: FC = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  return (
    <div className="flex-column" id="app-dashboard">
      <div className="flex-row flex-apart" id="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <h2>{formattedDate}</h2>
        </div>
        <div>
          <input placeholder="Search.." id="app-search"></input>
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="flex-apart flex-column" id="dashboard-charts">
        <div className="flex-row dashboard-row">
          <div className="dashboard-container">
            <div className="dashboard-item">
              <div className="dashboard-container-logo">
                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=013"></img>
              </div>
              <div className="flex-row flex-apart">
                <div className="text-small">
                  BTC <i style={{ margin: '0 5px' }} className="fas fa-arrows-alt-h"></i> GBP
                </div>
                <div className="text-small success">5.23%</div>
              </div>
              <div className="text-large">
                <span className="text-small">£ </span>62,305.7
              </div>
              <div className="chart-container">
                 <Chart {...(chartConfig as any)} /> 
              </div>
            </div>
          </div>
          <div className="dashboard-container">
            <div className="dashboard-item">
              <div className="dashboard-container-logo">
                <img src="https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=013"></img>
              </div>
              <div className="flex-row flex-apart">
                <div className="text-small">
                  LTC <i style={{ margin: '0 5px' }} className="fas fa-arrows-alt-h"></i> GBP
                </div>
                <div className="text-small alert">2.83%%</div>
              </div>
              <div className="text-large">
                <span className="text-small">£ </span>103.26
              </div>
              <div className="chart-container">
                  <Chart {...(chartConfig2 as any)} /> 
              </div>
            </div>
          </div>
          <div className="dashboard-container">
            <div className="dashboard-item">
              <div className="dashboard-container-logo">
                <img src="https://cryptologos.cc/logos/amp-amp-logo.png?v=013"></img>
              </div>
              <div className="flex-row flex-apart">
                <div className="text-small">
                  AMP <i style={{ margin: '0 5px' }} className="fas fa-arrows-alt-h"></i> GBP
                </div>
                <div className="text-small success">11.13%%</div>
              </div>
              <div className="text-large">
                <span className="text-small">£ </span>259.42
              </div>
              <div className="chart-container">
                 <Chart {...(chartConfig3 as any)} /> 
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row dashboard-row-large">
          <div className="dashboard-container dashboard-container-large">
            <div className="dashboard-item flex-column">
              <div className="chart-header flex-row flex-apart">
                <h3 className="text-medium">Market Overview</h3>
                <div className="text-small dropdown">
                  Yearly <i className="fa fa-chevron-down"></i>
                </div>
              </div>
              <Chart {...marketCap  as any} />
              <div className="flex-center flex-row text-medium">
                <div className="flex-row">
                  <span className="chart-legend-circle" style={{ background: '#f79319' }}></span> BTC
                </div>
                <div className="flex-row">
                  <span className="chart-legend-circle" style={{ background: '#345d9d' }}></span> LTC
                </div>
                <div className="flex-row">
                  <span className="chart-legend-circle" style={{ background: '#d9327b' }}></span> AMP
                </div>
              </div>
            </div>
          </div>
          <div className="flex-column dashboard-column">
            <div className="dashboard-container">
              <div className="dashboard-item">
                <div className="chart-header flex-row flex-apart">
                  <h3 className="text-medium">Top Gainer</h3>
                </div>
                <div className="flex-column">
                  <div className="profit-item flex-row text-medium">
                  <div className="dashboard-crypto-icon">
                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=013"/>
                 </div>
                    <span> 
                      <span className="text-small">$</span>62,308.87
                      <div className="text-small success">5.23%</div>
                    </span>
                  </div>
                  <div className="profit-item flex-row text-medium">
                  <div className="dashboard-crypto-icon">
                <img src=" https://cryptologos.cc/logos/amp-amp-logo.png?v=032"/>
                 </div>
                    <span>
                    <span className="text-small">$</span>259.42
                      <div className="text-small success">3.23%</div>
                    </span>
                  </div>
                  <div className="profit-item flex-row text-medium">
                  <div className="dashboard-crypto-icon">
                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032"/>
                 </div>
                    <span>
                    <span className="text-small">$</span>3000.42
                      <div className="text-small success">2.23%</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-container">
              <div className="dashboard-item">
                <div className="chart-header flex-row flex-apart">
                  <h3 className="text-medium">Top Losers</h3>
                </div>
                <div className="flex-column">
                  <div className="profit-item flex-row text-medium">
                  <div className="dashboard-crypto-icon">
                <img src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=032"/>
                 </div>
                    <span>
                      <span className="text-small">$</span>0.1482
                      <div className="text-small alert">7.23%</div>
                    </span>
                  </div>
                  <div className="profit-item flex-row text-medium">
                  <div className="dashboard-crypto-icon">
                <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=032"/>
                 </div>
                    <span>
                      <span className="text-small">$</span>145.12
                      <div className="text-small alert">5.23%</div>
                    </span>
                  </div>
                  <div className="profit-item flex-row text-medium">
                  <div className="dashboard-crypto-icon">
                <img src="https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=032"/>
                 </div>
                    <span>
                      <span className="text-small">$</span>71.12
                      <div className="text-small alert">3.23%</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Nav: FC = () => {
  const nav_items = [
    { name: 'Home', icon: 'fa fa fa-home', active: true },
    { name: 'Reports', icon: 'fa fa-chart-pie' },
    { name: 'Statistics', icon: 'fa fa-chart-bar' },
    { name: 'Trade', icon: 'fas fa-coins' },
    { name: 'Wallet', icon: 'fa fa-wallet' },
    { name: 'Settings', icon: 'fa fa-cog' },
  ];
  const nav = nav_items.map((item, key) => {
    return (
      <div key={key} className={'nav-item flex-center ' + (item.active ? 'active' : '')}>
        <i className={item.icon}></i>
      </div>
    );
  });
  return (
    <div id="app-nav">
      <div className="flex-center">
        <img id="logo" src="https://image.flaticon.com/icons/png/512/187/187902.png"></img>
      </div>
      <div>{nav}</div>
    </div>
  );
};

const Main: FC = () => {
  return (
    <div className="app-container flex-container">
      <Dashboard></Dashboard>
      <SidePanel></SidePanel>
    </div>
  );
};

export default Main;
