Function.prototype._bind = function(context, ...args) {
  let func = this
  return function(...newArgs) {
    func.apply(context, args.concat(newArgs))
  }
}
