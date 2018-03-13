function validateRequest(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validUriRegex =/([A-Za-z0-9.]+)|(\*)/;
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidMessageSymbols = ['<', '>', '&', '"', "'", '\\'];

    if (obj.method === undefined || !validMethods.includes(obj.method)) throw new Error('Invalid request header: Invalid Method');
    if (obj.uri === undefined || obj.uri === '' || !validUriRegex.test(obj.uri) || obj.uri.includes(' ')) throw  new Error('Invalid request header: Invalid URI');
    if (obj.version === undefined || !validVersion.includes(obj.version)) throw  new Error('Invalid request header: Invalid Version');
    if (obj.message === undefined ) throw new Error('Invalid request header: Invalid Message');

    for (let i = 0; i < invalidMessageSymbols.length; i++) {
        if(obj.message.includes(invalidMessageSymbols[i]))  throw new Error('Invalid request header: Invalid Message');
    }
    return obj;
}