const os = require('os');

const macaddress = async (req, res) => {
  try {
    const networkInterfaces = os.networkInterfaces();
    const macAddresses = [];

    // Collect unique MAC addresses
    Object.keys(networkInterfaces).forEach((interfaceName) => {
      networkInterfaces[interfaceName].forEach((details) => {
        // Check if the MAC address is valid and not already added
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

    // Return the unique MAC addresses as a JSON response
    res.json(macAddresses);

  } catch (error) {
    res.status(500).json({ error: "Error fetching MAC addresses" });
  }
};

module.exports = macaddress;
