
var myUI = maptalks.ui.UIComponent.extend({

  options :{
    'content'  : 'UI Component'
  },

  buildOn: function (map) {
    var dom = maptalks.DomUtil.createEl('div', 'my-ui');
    dom.innerText = this.options['content'];
    return dom;
  }
});


var map = new maptalks.Map('map', {
  center: [121.48542888885189, 31.228541533313702],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var ui = new myUI({
  'content'   : 'My customized UI.'
});
ui.addTo(map).show(map.getCenter());