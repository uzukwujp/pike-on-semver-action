"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseIp = void 0;
const reverseIp = (ip) => {
    const ipv6PrefixRegex = /^::ffff:/;
    const clientIp = ip.replace(ipv6PrefixRegex, '');
    return clientIp.split('.').reverse().join('.');
};
exports.reverseIp = reverseIp;
