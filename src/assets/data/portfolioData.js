const getData = async () => {
  try {
    const response = await fetch(
      'https://mocki.io/v1/f1147e6c-f2c7-4609-8a48-f3d6a6b76547',
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
};
export const xyz = getData();
console.log(xyz);
export const portfolioData = [
  {
    id: 'TPBT-23030095',
    client: 'Edgard',
    status: 'Investment in progress',
  },
  {
    id: 'TPBT-22040002',
    client: 'Edgard',
    status: 'Investment in progress',
  },
  {
    id: 'TPBBTL-23030001',
    client: 'RFID SG OP',
    status: 'Paid',
    date: '2023-04-01',
  },
  {
    id: 'TPBT-23020043',
    client: 'Sang Weng',
    status: 'In Progress',
    date: '2023-03-15',
  },
  {
    id: 'TPBT-23010011',
    client: 'Tom yum goong',
    status: 'Partial',
    date: '2023-01-19',
  },
  {
    id: 'TPBBTL-23035001',
    client: 'RFID SG OP',
    status: 'Paid',
    date: '2023-04-01',
  },
  {
    id: 'TPBT-23020803',
    client: 'Sang Weng',
    status: 'In Progress',
    date: '2023-03-15',
  },
  {
    id: 'TPBT-1001',
    client: 'Yaw Hua',
    status: 'Successful',
  },
  {
    id: 'TPBT-1002',
    client: 'Yaw Hua',
    status: 'Successful',
  },
  {
    id: 'TPBT-1003',
    client: 'Yaw Hua',
    status: 'Successful',
  },
  {
    id: 'TPBT-1004',
    client: 'Yaw Hua',
    status: 'Successful',
  },
  {
    id: 'TPBT-1005',
    client: 'Yaw Hua',
    status: 'Successful',
  },
  {
    id: 'TPBT-1006',
    client: 'Yaw Hua',
    status: 'Successful',
  },
  {
    id: 'TPBT-1007',
    client: 'Yaw Hua',
    status: 'Successful',
  },
];
