define(["dojo/_base/declare", "esri/layers/TiledMapServiceLayer", "esri/geometry/Extent", "esri/SpatialReference", "esri/layers/TileInfo"],
    function (declare, TiledMapServiceLayer, Extent, SpatialReference, TileInfo) {
        return declare(TiledMapServiceLayer, {
            mapType: "BaiDu",//地图类型
            layerType: "vector",//图层类型
            // 构造函数
            constructor: function (map_type, layer_type) {
                this.mapType = map_type;
                this.layerType = layer_type;
                //定义百度地图
                if (this.mapType == "BaiDu") {
                    //定义空间参考
                    this.spatialReference = new SpatialReference({
                        wkid: 102100
                    });
                    // 图层提供的起始显示范围以及整个图层的地理范围
                    this.fullExtent = new Extent({
                        xmin: -20037508.3427892,
                        ymin: -20037508.3427892,
                        xmax: 20037508.3427892,
                        ymax: 20037508.3427892,
                        spatialReference: this.spatialReference
                    }); //整个图层的地理范围
                    this.initialExtent = new Extent({
                        xmin: 7877382.758357699,
                        ymin: 2736509.35402308,
                        xmax: 8461361.654645403,
                        ymax: 3026052.818699912,
                        spatialReference: this.spatialReference
                    });  //图层的起始显示范围
                    //定义图层的切片信息
                    this.tileInfo = new TileInfo({
                        rows: 256,
                        cols: 256,
                        compressionQuality: 0,  //当前压缩质量值
                        origin: {
                            "x": -20037508.3427892,
                            "y": 20037508.3427892
                        },
                        spatialReference: {
                            "wkid": 102100
                        },
                        lods: [{ "level": 0, "resolution": 156543.033928, "scale": 591657527.591555 },
                               { "level": 1, "resolution": 78271.5169639999, "scale": 295828763.795777 },
                               { "level": 2, "resolution": 39135.7584820001, "scale": 147914381.897889 },
                               { "level": 3, "resolution": 19567.8792409999, "scale": 73957190.948944 },
                               { "level": 4, "resolution": 9783.93962049996, "scale": 36978595.474472 },
                               { "level": 5, "resolution": 4891.96981024998, "scale": 18489297.737236 },
                               { "level": 6, "resolution": 2445.98490512499, "scale": 9244648.868618 },
                               { "level": 7, "resolution": 1222.99245256249, "scale": 4622324.434309 },
                               { "level": 8, "resolution": 611.49622628138, "scale": 2311162.217155 },
                               { "level": 9, "resolution": 305.748113140558, "scale": 1155581.108577 },
                               { "level": 10, "resolution": 152.874056570411, "scale": 577790.554289 },
                               { "level": 11, "resolution": 76.4370282850732, "scale": 288895.277144 },
                               { "level": 12, "resolution": 38.2185141425366, "scale": 144447.638572 },
                               { "level": 13, "resolution": 19.1092570712683, "scale": 72223.819286 },
                               { "level": 14, "resolution": 9.55462853563415, "scale": 36111.909643 },
                               { "level": 15, "resolution": 4.77731426794937, "scale": 18055.954822 },
                               { "level": 16, "resolution": 2.38865713397468, "scale": 9027.977411 },
                               { "level": 17, "resolution": 1.19432856685505, "scale": 4513.988705 },
                               { "level": 18, "resolution": 0.597164283559817, "scale": 2256.994353 },
                               { "level": 19, "resolution": 0.298582141647617, "scale": 1128.497176 }]
                    });
                }
                    //定义高德地图
                else if (this.mapType == "GaoDe") {
                    //定义空间参考
                    this.spatialReference = new SpatialReference({
                        wkid: 102100
                    });
                    // 图层提供的起始显示范围以及整个图层的地理范围
                    this.fullExtent = new Extent({
                        xmin: -20037508.342787,
                        ymin: -20037508.342787,
                        xmax: 20037508.342787,
                        ymax: 20037508.342787,
                        spatialReference: this.spatialReference
                    }); //整个图层的地理范围
                    this.initialExtent = new Extent({
                        xmin: 13414320.252357699,
                        ymin: 4652239.13502308,
                        xmax: 13909632.195645403,
                        ymax: 4921603.222699912,
                        spatialReference: this.spatialReference
                    });  //图层的起始显示范围
                    //定义图层的切片信息
                    this.tileInfo = new TileInfo({
                        rows: 256,
                        cols: 256,
                        compressionQuality: 0,  //当前压缩质量值
                        origin: {
                            "x": -20037508.342787,
                            "y": 20037508.342787
                        },
                        spatialReference: {
                            "wkid": 102100
                        },
                        lods: [{ "level": 0, "resolution": 156543.033928, "scale": 591657527.591555 },
                               { "level": 1, "resolution": 78271.5169639999, "scale": 295828763.795777 },
                               { "level": 2, "resolution": 39135.7584820001, "scale": 147914381.897889 },
                               { "level": 3, "resolution": 19567.8792409999, "scale": 73957190.948944 },
                               { "level": 4, "resolution": 9783.93962049996, "scale": 36978595.474472 },
                               { "level": 5, "resolution": 4891.96981024998, "scale": 18489297.737236 },
                               { "level": 6, "resolution": 2445.98490512499, "scale": 9244648.868618 },
                               { "level": 7, "resolution": 1222.99245256249, "scale": 4622324.434309 },
                               { "level": 8, "resolution": 611.49622628138, "scale": 2311162.217155 },
                               { "level": 9, "resolution": 305.748113140558, "scale": 1155581.108577 },
                               { "level": 10, "resolution": 152.874056570411, "scale": 577790.554289 },
                               { "level": 11, "resolution": 76.4370282850732, "scale": 288895.277144 },
                               { "level": 12, "resolution": 38.2185141425366, "scale": 144447.638572 },
                               { "level": 13, "resolution": 19.1092570712683, "scale": 72223.819286 },
                               { "level": 14, "resolution": 9.55462853563415, "scale": 36111.909643 },
                               { "level": 15, "resolution": 4.77731426794937, "scale": 18055.954822 },
                               { "level": 16, "resolution": 2.38865713397468, "scale": 9027.977411 },
                               { "level": 17, "resolution": 1.19432856685505, "scale": 4513.988705 },
                               { "level": 18, "resolution": 0.597164283559817, "scale": 2256.994353 },
                               { "level": 19, "resolution": 0.298582141647617, "scale": 1128.497176 }]
                    });
                }
                    //定义天地图
                else if (this.mapType == "TianDiTu") {
                    //定义空间参考
                    this.spatialReference = new SpatialReference({
                        wkid: 4326
                    });
                    // 图层提供的起始显示范围以及整个图层的地理范围
                    this.fullExtent = new Extent({
                        xmin: -180.0,
                        ymin: -90.0,
                        xmax: 180.0,
                        ymax: 90.0,
                        spatialReference: this.spatialReference
                    }); //整个图层的地理范围
                    this.initialExtent = this.fullExtent;  //图层的起始显示范围
                    //定义图层的切片信息
                    this.tileInfo = new TileInfo({
                        rows: 256,
                        cols: 256,
                        compressionQuality: 0,  //当前压缩质量值
                        origin: {
                            "x": -180.0,
                            "y": 90.0
                        },
                        spatialReference: {
                            "wkid": 4326
                        },
                        lods: [{ "level": 2, "resolution": 0.3515625, "scale": 147748796.52937502 },
                               { "level": 3, "resolution": 0.17578125, "scale": 73874398.264687508 },
                               { "level": 4, "resolution": 0.087890625, "scale": 36937199.132343754 },
                               { "level": 5, "resolution": 0.0439453125, "scale": 18468599.566171877 },
                               { "level": 6, "resolution": 0.02197265625, "scale": 9234299.7830859385 },
                               { "level": 7, "resolution": 0.010986328125, "scale": 4617149.8915429693 },
                               { "level": 8, "resolution": 0.0054931640625, "scale": 2308574.9457714846 },
                               { "level": 9, "resolution": 0.00274658203125, "scale": 1154287.4728857423 },
                               { "level": 10, "resolution": 0.001373291015625, "scale": 577143.73644287116 },
                               { "level": 11, "resolution": 0.0006866455078125, "scale": 288571.86822143558 },
                               { "level": 12, "resolution": 0.00034332275390625, "scale": 144285.93411071779 },
                               { "level": 13, "resolution": 0.000171661376953125, "scale": 72142.967055358895 },
                               { "level": 14, "resolution": 8.58306884765625e-005, "scale": 36071.483527679447 },
                               { "level": 15, "resolution": 4.291534423828125e-005, "scale": 18035.741763839724 },
                               { "level": 16, "resolution": 2.1457672119140625e-005, "scale": 9017.8708819198619 },
                               { "level": 17, "resolution": 1.0728836059570313e-005, "scale": 4508.9354409599309 },
                               { "level": 18, "resolution": 5.3644180297851563e-006, "scale": 2254.4677204799655 }]
                    });
                }
                    //定义谷歌地图
                else if (this.mapType == "Google") {
                    //定义空间参考
                    this.spatialReference = new SpatialReference({
                        wkid: 102113
                    });
                    // 图层提供的起始显示范围以及整个图层的地理范围
                    this.fullExtent = new Extent({
                        xmin: -20037508.342787,
                        ymin: -20037508.342787,
                        xmax: 20037508.342787,
                        ymax: 20037508.342787,
                        spatialReference: this.spatialReference
                    }); //整个图层的地理范围
                    this.initialExtent = new Extent({
                        xmin: 5916776.8,
                        ymin: 1877209.3,
                        xmax: 19242502.6,
                        ymax: 7620381.8,
                        spatialReference: this.spatialReference
                    });  //图层的起始显示范围
                    //定义图层的切片信息
                    this.tileInfo = new TileInfo({
                        rows: 256,
                        cols: 256,
                        compressionQuality: 0,  //当前压缩质量值
                        origin: {
                            "x": -20037508.342787,
                            "y": 20037508.342787
                        },
                        spatialReference: {
                            "wkid": 102113
                        },
                        lods: [{ "level": 0, "resolution": 156543.033928, "scale": 591657527.591555 },
                                { "level": 1, "resolution": 78271.5169639999, "scale": 295828763.795777 },
                                { "level": 2, "resolution": 39135.7584820001, "scale": 147914381.897889 },
                                { "level": 3, "resolution": 19567.8792409999, "scale": 73957190.948944 },
                                { "level": 4, "resolution": 9783.93962049996, "scale": 36978595.474472 },
                                { "level": 5, "resolution": 4891.96981024998, "scale": 18489297.737236 },
                                { "level": 6, "resolution": 2445.98490512499, "scale": 9244648.868618 },
                                { "level": 7, "resolution": 1222.99245256249, "scale": 4622324.434309 },
                                { "level": 8, "resolution": 611.49622628138, "scale": 2311162.217155 },
                                { "level": 9, "resolution": 305.748113140558, "scale": 1155581.108577 },
                                { "level": 10, "resolution": 152.874056570411, "scale": 577790.554289 },
                                { "level": 11, "resolution": 76.4370282850732, "scale": 288895.277144 },
                                { "level": 12, "resolution": 38.2185141425366, "scale": 144447.638572 },
                                { "level": 13, "resolution": 19.1092570712683, "scale": 72223.819286 },
                                { "level": 14, "resolution": 9.55462853563415, "scale": 36111.909643 },
                                { "level": 15, "resolution": 4.77731426794937, "scale": 18055.954822 },
                                { "level": 16, "resolution": 2.38865713397468, "scale": 9027.977411 },
                                { "level": 17, "resolution": 1.19432856685505, "scale": 4513.988705 },
                                { "level": 18, "resolution": 0.597164283559817, "scale": 2256.994353 },
                                { "level": 19, "resolution": 0.298582141647617, "scale": 1128.497176 }]
                    });
                }

                // 设置图层的loaded属性，并触发onLoad事件
                this.loaded = true;
                this.onLoad(this);
            },

            getTileUrl: function (level, row, col) {
                var url = "";
                //百度
                if (this.mapType == "BaiDu") {
                    var zoom = level - 1;
                    var offsetX = parseInt(Math.pow(2, zoom));
                    var offsetY = offsetX - 1;
                    var numX = col - offsetX, numY = (-row) + offsetY;
                    var num = (col + row) % 8 + 1;
                    zoom = level + 1;
                    //矢量
                    if (this.layerType == "vector") {
                        url = "http://online" + num + ".map.bdimg.com/tile/?qt=tile&x=" +
                        numX + "&y=" + numY + "&z=" + zoom + "&styles=pl&scaler=1&udt=20141103";
                    }
                        //影像
                    else if (this.layerType == "image") {
                        url = "http://shangetu" + num + ".map.bdimg.com/it/u=x=" +
                        numX + ";y=" + numY + ";z=" + zoom + ";v=009;type=sate&fm=46&udt=20141015";
                    }
                        //标注
                    else if (this.layerType == "label") {
                        url = "http://online" + num + ".map.bdimg.com/tile/?qt=tile&x=" +
                        numX + "&y=" + numY + "&z=" + zoom + "&styles=sl&udt=20141015";
                    }
                }
                    //高德
                else if (this.mapType == "GaoDe") {
                    //矢量
                    if (this.layerType == "vector") {
                        url = 'http://webrd0' + (col % 4 + 1) + '.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x='
                            + col + '&y=' + row + '&z=' + level;
                    }
                        //影像
                    else if (this.layerType == "image") {
                        url = 'http://webst0' + (col % 4 + 1) + '.is.autonavi.com/appmaptile?style=6&x='
                            + col + '&y=' + row + '&z=' + level;
                    }
                        //标注
                    else if (this.layerType == "label") {
                        url = 'http://webst0' + (col % 4 + 1) + '.is.autonavi.com/appmaptile?style=8&x='
                            + col + '&y=' + row + '&z=' + level;
                    }
                }
                    //天地图
                else if (this.mapType == "TianDiTu") {
                    //矢量
                    if (this.layerType == "vector") {
                        url = "http://t" + col % 8 + ".tianditu.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&TILEMATRIX="
                            + level + "&TILEROW=" + row + "&TILECOL=" + col + "&FORMAT=tiles";
                    }
                        //矢量标注
                    else if (this.layerType == "vector_label") {
                        url = "http://t" + row % 8 + ".tianditu.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&TILEMATRIX="
                            + level + "&TILEROW=" + row + "&TILECOL=" + col + "&FORMAT=tiles";
                    }
                        //影像
                    else if (this.layerType == "image") {
                        url = "http://t" + row % 8 + ".tianditu.cn/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&TILEMATRIX="
                            + level + "&TILEROW=" + row + "&TILECOL=" + col + "&FORMAT=tiles";
                    }
                        //影像标注
                    else if (this.layerType == "image_label") {
                        url = "http://t" + row % 8 + ".tianditu.cn/cia_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=c&TILEMATRIX="
                            + level + "&TILEROW=" + row + "&TILECOL=" + col + "&FORMAT=tiles";
                    }
                }
                    //谷歌地图
                else if (this.mapType == "Google") {
                    //矢量
                    if (this.layerType == "vector") {
                        var zoom = level - 1;
                        var offsetX = Math.pow(2, zoom);
                        var offsetY = offsetX - 1;
                        var numX = col - offsetX;
                        var numY = (-row) + offsetY;
                        zoom = level + 1;
                        var num = (col + row) % 8 + 1;
                        url = "https://mt" + (col % 4) + ".google.cn/vt/lyrs=m@226000000&hl=zh-CN&gl=cn&x="
                            + col + "&y=" + row + "&z=" + level + "&s=Gali";
                    }
                    //影像
                    else if (this.layerType == "image") {
                        url = "http://mt" + (col % 4) + ".google.cn/vt/lyrs=s@112&hl=zh-CN&gl=cn&"
                            + "x=" + col + "&" + "y=" + row + "&" + "z=" + level + "&s=";
                    }
                }
                return url;
            },


        });
    }
)