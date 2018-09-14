const DynArray = require('./entity/DynArray');

(() => {

  let da = new DynArray();

  da.makeArray();
  //console.log(da);

  for (let i = 0; i < 14; i++) {
    da.append(i+9);
  }

  console.log(da);
  da.append(1111111);
  da.append(2222222);
  da.append(3333333);

  console.log(da);

  /*da.makeArray(25);

  console.log(da);*/

  /*console.log(da.getItem(1));
  console.log(da.getItem(112));*/

})();