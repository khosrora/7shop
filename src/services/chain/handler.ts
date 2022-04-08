interface Handler {
    setNext(handler: Handler): Handler;
    process(request: object): object;
}
export default Handler;