const os = require('os');

const macaddress = async (req, res) => {
  try {
    const networkInterfaces = os.networkInterfaces();
    const macAddresses = [];
    Object.keys(networkInterfaces).forEach((interfaceName) => {
      networkInterfaces[interfaceName].forEach((details) => {
   
        if (details.mac && details.mac !== '00:00:00:00:00:00') {
          const alreadyExists = macAddresses.some(
            (item) => item.mac === details.mac && item.interface === interfaceName
          );

          if (!alreadyExists) {
            macAddresses.push({
              interface: interfaceName,
              mac: details.mac,
            });
          }
        }
      });
    });

    res.json(macAddresses);

  } catch (error) {
    res.status(500).json({ error: "Error fetching MAC addresses" });
  }
};

module.exports = macaddress;
