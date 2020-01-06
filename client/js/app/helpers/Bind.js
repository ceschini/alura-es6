class Bind {
  // '...' -> Rest Operator (tem que ser ultimo param)
  constructor(model, view, ...props) {
    let proxy = ProxyFactory.create(model, props, model =>
      view.update(model));

    view.update(model);

    return proxy;
  }
}