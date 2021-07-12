export class Logger {
  _namespace = "";
  _context;

  constructor(namespace = "", context) {
    this._context = context;
    this._namespace = namespace;
  }

  log(...args) {
    console.log.bind(console, [this._namespace, " :: ", args]);
  }
}
