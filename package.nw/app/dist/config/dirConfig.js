"use strict";function init(){var e=require("path"),p=require("mkdir-p"),o=e.join(nw.App.getDataPath(),"..");_exports={},_exports.WeappStorage=e.join(o,"WeappStorage"),p.sync(_exports.WeappStorage),_exports.WeappFileCache=e.join(o,"WeappFileCache"),p.sync(_exports.WeappFileCache),_exports.Weappdest=e.join(o,"Weappdest"),p.sync(_exports.Weappdest),_exports.WeappApplication=e.join(o,"WeappApplication"),p.sync(_exports.WeappApplication),_exports.WeappVendor=e.join(o,"WeappVendor"),p.sync(_exports.WeappVendor),_exports.WeappBuildCache=e.join(o,"WeappBuildCache"),p.sync(_exports.WeappBuildCache),_exports.WeappLog=e.join(o,"WeappLog"),p.sync(_exports.WeappLog),_exports.WeappProjectInfo=e.join(o,"WeappProject"),p.sync(_exports.WeappProjectInfo),_exports.ProxyCache=e.join(o,"ProxyCache"),p.sync(_exports.ProxyCache),_exports.WeappTraceFiles=e.join(o,"WeappTraceFiles"),p.sync(_exports.WeappTraceFiles)}var _exports;init(),module.exports=_exports;