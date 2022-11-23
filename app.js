const os = require('os');

const server = {
    'type': os.type(),
    'architecture': os.arch(),
    'endianness': os.endianness(),
    'hostname': os.hostname(),
    'network': os.networkInterfaces(),
    'uptime': os.uptime()
  }
  
  console.log(server);