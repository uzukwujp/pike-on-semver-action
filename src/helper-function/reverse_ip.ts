



export const reverseIp  = (ip: string) => {

  const ipv6PrefixRegex = /^::ffff:/;

  const clientIp = ip.replace(ipv6PrefixRegex, '');

  return clientIp.split('.').reverse().join('.');

}