var SkuModel = require('../persistence/sku/Sku.model');

var callback = function(err, html, url, response){
              console.log('Crawled url:');
              console.log(url);
              // console.log(response); // If you need see more details about request 
              if(!err){
                data = {};
                data.item_id = html.attr('data-cms-itemid');
                data.detail_url = html.children('div').eq(0).children('a').attr('href');
                data.title = html.children('div').eq(0).children('a').attr('title');
                data.image_url = html.children('div').eq(1).children('div').children('img').attr('src');
                if(typeof data.item_id == 'undefined'){
                  delete data.item_id;
                }

                // console.log(data);

                SkuModel.create(data);
                console.log('insert one sku: ' + JSON.stringify(data));

              }else{
                console.log(err);
              }
            };


var callback2 = function(err, html, url, response){
              console.log('Crawled url:');
              console.log(url);
              // console.log(response); // If you need see more details about request 
              if(!err){
                data = {};
                var productHtml = html.children('div').eq(4);
                var productListHtml =  html.children('div').eq(4).text();
                data.class = productHtml.attr('id');
                data.bont = productListHtml;
                // if(!data.bont) {
                //   data.bont = 'null';
                // }
                if(typeof data.class == 'undefined'){
                  delete data.class;
                }

                // console.log(data);

                // SkuModel.create(data);
                console.log('insert one sku: ' + JSON.stringify(data));

              }else{
                console.log(err);
              }
            };            


module.exports = {
  interval: 10000,
  // getSample: 'http://www.fengqu.com/activity/5.html',
  // get: 'http://www.fengqu.com/activity/5.html',
  // getSample: 'http://www.fengqu.com',
  // get: 'http://www.fengqu.com',

  // getSample: 'http://www.fengqu.com/activity/4.html',
  // get: 'http://www.fengqu.com/activity/4.html',

  // getSample: 'http://www.fengqu.com/activity/6.html',
  // get: 'http://www.fengqu.com/activity/6.html',

  // getSample: 'http://www.fengqu.com/activity/2009.html',
  // get: 'http://www.fengqu.com/activity/2009.html',

  // getSample: 'http://www.fengqu.com/activity/2013.html',
  // get: 'http://www.fengqu.com/activity/2013.html',

  getSample: 'http://www.fengqu.com/other/search.html?_spm=0.sear1.0.0&keyword=奶粉#!&page=1',
  get: 'http://www.fengqu.com/other/search.html?_spm=0.sear1.0.0&keyword=%E7%BA%B8%E5%B0%BF%E8%A3%A4#!&page=1',
  
  encodeget: false,
  preview: 0,
  extractors: [
    {
      // selector: 'ul.product-1-list li',
      selector: 'body',
      callback: callback2
    }
  ]
};