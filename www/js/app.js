// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
/*.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
      controller:'homeCtrl'
      }
    }
  })
  
  .state('app.play', {
    url: '/play',
    views: {
      'menuContent': {
        templateUrl: 'templates/play.html',
      controller:'PlayCtrl'
      }
    }
  })
  .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegCtrl'
      }
    }
  })                                                                 
  .state('app.booking', {                                                                 
    url: '/booking',                                                                 
    views: {                                                                 
      'menuContent': {                                                                 
        templateUrl: 'templates/booking.html',                                                                 
        controller: 'ResCtrl'                                                                 
      }                                                                 
    }                                                                 
  })
  .state('app.reserve', {
    url: '/reserve',
    views: {
      'menuContent': {
        templateUrl: 'templates/reserve.html'
      
      }
    }
  })*/
.state('app.first', {
    url: '/first',
    views: {
      'menuContent': {
        templateUrl: 'templates/first.html',
       controller: 'firstCtrl'
      }
    }
  })
.state('app.district', {
    url: '/district',
    views: {
      'menuContent': {
        templateUrl: 'templates/district.html',
       controller: 'districtCtrl'
      }
    }
  })
.state('app.ariyalur', {
    url: '/ariyalur',
    views: {
      'menuContent': {
        templateUrl: 'templates/ariyalur.html',
       controller: 'ariyalurCtrl'
      }
    }
  })
.state('app.ssk', {
    url: '/ssk',
    views: {
      'menuContent': {
        templateUrl: 'templates/ssk.html',
       controller: 'sskCtrl'
      }
    }
  })
.state('app.skt', {
    url: '/skt',
    views: {
      'menuContent': {
        templateUrl: 'templates/skt.html',
       controller: 'sktCtrl'
      }
    }
  })
.state('app.mk', {
    url: '/mk',
    views: {
      'menuContent': {
        templateUrl: 'templates/mk.html',
       controller: 'mkCtrl'
      }
    }
  })
.state('app.gkc', {
    url: '/gkc',
    views: {
      'menuContent': {
        templateUrl: 'templates/gkc.html',
       controller: 'gkcCtrl'
      }
    }
  })
.state('app.ak', {
    url: '/ak',
    views: {
      'menuContent': {
        templateUrl: 'templates/ak.html',
       controller: 'akCtrl'
      }
    }
  })
.state('app.skv', {
    url: '/skv',
    views: {
      'menuContent': {
        templateUrl: 'templates/skv.html',
       controller: 'skvCtrl'
      }
    }
  })
.state('app.eam', {
    url: '/eam',
    views: {
      'menuContent': {
        templateUrl: 'templates/eam.html',
       controller: 'eamCtrl'
      }
    }
  })
.state('app.vkl', {
    url: '/vkl',
    views: {
      'menuContent': {
        templateUrl: 'templates/vkl.html',
       controller: 'vklCtrl'
      }
    }
  })
.state('app.chennai', {
    url: '/chennai',
    views: {
      'menuContent': {
        templateUrl: 'templates/chennai.html',
       controller: 'chennaiCtrl'
      }
    }
  })

.state('app.cvp', {
    url: '/cvp',
    views: {
      'menuContent': {
        templateUrl: 'templates/cvp.html',
       controller: 'cvpCtrl'
      }
    }
  })

.state('app.ckp', {
    url: '/ckp',
    views: {
      'menuContent': {
        templateUrl: 'templates/ckp.html',
       controller: 'ckpCtrl'
      }
    }
  })
.state('app.cmb', {
    url: '/cmb',
    views: {
      'menuContent': {
        templateUrl: 'templates/cmb.html',
       controller: 'cmbCtrl'
      }
    }
  })

 .state('app.ccb', {
    url: '/ccb',
    views: {
      'menuContent': {
        templateUrl: 'templates/ccb.html',
       controller: 'ccbCtrl'
      }
    }
  })
.state('app.ceb', {
    url: '/ceb',
    views: {
      'menuContent': {
        templateUrl: 'templates/ceb.html',
       controller: 'cebCtrl'
      }
    }
  })
.state('app.cfg', {
    url: '/cfg',
    views: {
      'menuContent': {
        templateUrl: 'templates/cfg.html',
       controller: 'cfgCtrl'
      }
    }
  })
.state('app.cst', {
    url: '/cst',
    views: {
      'menuContent': {
        templateUrl: 'templates/cst.html',
       controller: 'cstCtrl'
      }
    }
  })
.state('app.cpt', {
    url: '/cpt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cpt.html',
       controller: 'cptCtrl'
      }
    }
  })
.state('app.clm', {
    url: '/clm',
    views: {
      'menuContent': {
        templateUrl: 'templates/clm.html',
       controller: 'clmCtrl'
      }
    }
  })
.state('app.ccmk', {
    url: '/ccmk',
    views: {
      'menuContent': {
        templateUrl: 'templates/ccmk.html',
       controller: 'ccmkCtrl'
      }
    }
  })
.state('app.cmbp', {
    url: '/cmbp',
    views: {
      'menuContent': {
        templateUrl: 'templates/cmbp.html',
       controller: 'cmbpCtrl'
      }
    }
  })
.state('app.cctm', {
    url: '/cctm',
    views: {
      'menuContent': {
        templateUrl: 'templates/cctm.html',
       controller: 'cctmCtrl'
      }
    }
  })
.state('app.csmp', {
    url: '/csmp',
    views: {
      'menuContent': {
        templateUrl: 'templates/csmp.html',
       controller: 'csmpCtrl'
      }
    }
  })
.state('app.cmgm', {
    url: '/cmgm',
    views: {
      'menuContent': {
        templateUrl: 'templates/cmgm.html',
       controller: 'cmgmCtrl'
      }
    }
  })
.state('app.cds', {
    url: '/cds',
    views: {
      'menuContent': {
        templateUrl: 'templates/cds.html',
       controller: 'cdsCtrl'
      }
    }
  })
.state('app.cpc', {
    url: '/cpc',
    views: {
      'menuContent': {
        templateUrl: 'templates/cpc.html',
       controller: 'cpcCtrl'
      }
    }
  })

.state('app.csd', {
    url: '/csd',
    views: {
      'menuContent': {
        templateUrl: 'templates/csd.html',
       controller: 'csdCtrl'
      }
    }
  })
.state('app.cvs', {
    url: '/cvs',
    views: {
      'menuContent': {
        templateUrl: 'templates/cvs.html',
       controller: 'cvsCtrl'
      }
    }
  })
.state('app.cnbs', {
    url: '/cnbs',
    views: {
      'menuContent': {
        templateUrl: 'templates/cnbs.html',
       controller: 'cnbsCtrl'
      }
    }
  })
.state('app.cmh', {
    url: '/cmh',
    views: {
      'menuContent': {
        templateUrl: 'templates/cmh.html',
       controller: 'cmhCtrl'
      }
    }
  })

.state('app.cuw', {
    url: '/cuw',
    views: {
      'menuContent': {
        templateUrl: 'templates/cuw.html',
       controller: 'cuwCtrl'
      }
    }
  })
.state('app.cpm', {
    url: '/cpm',
    views: {
      'menuContent': {
        templateUrl: 'templates/cpm.html',
       controller: 'cpmCtrl'
      }
    }
  })
.state('app.cna', {
    url: '/cna',
    views: {
      'menuContent': {
        templateUrl: 'templates/cna.html',
       controller: 'cnaCtrl'
      }
    }
  })
.state('app.ccp', {
    url: '/ccp',
    views: {
      'menuContent': {
        templateUrl: 'templates/ccp.html',
       controller: 'ccpCtrl'
      }
    }
  })

.state('app.crm', {
    url: '/crm',
    views: {
      'menuContent': {
        templateUrl: 'templates/crm.html',
       controller: 'crmCtrl'
      }
    }
  })
.state('app.coimbatore', {
    url: '/coimbatore',
    views: {
      'menuContent': {
        templateUrl: 'templates/coimbatore.html',
       controller: 'coimbatoreCtrl'
      }
    }
  })
.state('app.mat', {
    url: '/mat',
    views: {
      'menuContent': {
        templateUrl: 'templates/mat.html',
       controller: 'matCtrl'
      }
    }
  })
.state('app.cdt', {
    url: '/cdt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cdt.html',
       controller: 'cdtCtrl'
      }
    }
  })
.state('app.cbm', {
    url: '/cbm',
    views: {
      'menuContent': {
        templateUrl: 'templates/cbm.html',
       controller: 'cbmCtrl'
      }
    }
  })


.state('app.cap', {
    url: '/cap',
    views: {
      'menuContent': {
        templateUrl: 'templates/cap.html',
       controller: 'capCtrl'
      }
    }
  })



.state('app.cet', {
    url: '/cet',
    views: {
      'menuContent': {
        templateUrl: 'templates/cet.html',
       controller: 'cetCtrl'
      }
    }
  })



.state('app.cct', {
    url: '/cct',
    views: {
      'menuContent': {
        templateUrl: 'templates/cct.html',
       controller: 'cctCtrl'
      }
    }
  })



.state('app.cwt', {
    url: '/cwt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cwt.html',
       controller: 'cwtCtrl'
      }
    }
  })
.state('app.cgt', {
    url: '/cgt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cgt.html',
       controller: 'cgtCtrl'
      }
    }
  })

.state('app.cbt', {
    url: '/cbt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cbt.html',
       controller: 'cbtCtrl'
      }
    }
  })
.state('app.cvt', {
    url: '/cvt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cvt.html',
       controller: 'cvtCtrl'
      }
    }
  })
.state('app.cmt', {
    url: '/cmt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cmt.html',
       controller: 'cmtCtrl'
      }
    }
  })
.state('app.cmtt', {
    url: '/cmtt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cmtt.html',
       controller: 'cmttCtrl'
      }
    }
  })
.state('app.cat', {
    url: '/cat',
    views: {
      'menuContent': {
        templateUrl: 'templates/cat.html',
       controller: 'catCtrl'
      }
    }
  })
.state('app.cft', {
    url: '/cft',
    views: {
      'menuContent': {
        templateUrl: 'templates/cft.html',
       controller: 'cftCtrl'
      }
    }
  })
.state('app.cit', {
    url: '/cit',
    views: {
      'menuContent': {
        templateUrl: 'templates/cit.html',
       controller: 'citCtrl'
      }
    }
  })

.state('app.ckt', {
    url: '/ckt',
    views: {
      'menuContent': {
        templateUrl: 'templates/ckt.html',
       controller: 'cktCtrl'
      }
    }
  })
.state('app.csrt', {
    url: '/csrt',
    views: {
      'menuContent': {
        templateUrl: 'templates/csrt.html',
       controller: 'csrtCtrl'
      }
    }
  })
.state('app.cadt', {
    url: '/cadt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadt.html',
       controller: 'cadtCtrl'
      }
    }
  })
.state('app.cnt', {
    url: '/cnt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cnt.html',
       controller: 'cntCtrl'
      }
    }
  })
.state('app.ckd', {
    url: '/ckd',
    views: {
      'menuContent': {
        templateUrl: 'templates/ckd.html',
       controller: 'ckdCtrl'
      }
    }
  })
.state('app.cbvt', {
    url: '/cbvt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cbvt.html',
       controller: 'cbvtCtrl'
      }
    }
  })
.state('app.cmwt', {
    url: '/cmwt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cmwt.html',
       controller: 'cmwtCtrl'
      }
    }
  })
.state('app.ckkt', {
    url: '/ckkt',
    views: {
      'menuContent': {
        templateUrl: 'templates/ckkt.html',
       controller: 'ckktCtrl'
      }
    }
  })
.state('app.cad', {
    url: '/cad',
    views: {
      'menuContent': {
        templateUrl: 'templates/cad.html',
       controller: 'cadCtrl'
      }
    }
  })

.state('app.cspt', {
    url: '/cspt',
    views: {
      'menuContent': {
        templateUrl: 'templates/cspt.html',
       controller: 'csptCtrl'
      }
    }
  })
.state('app.cuddalore', {
    url: '/cuddalore',
    views: {
      'menuContent': {
        templateUrl: 'templates/cuddalore.html',
       controller: 'cuddaloreCtrl'
      }
    }
  })

.state('app.dt', {
    url: '/dt',
    views: {
      'menuContent': {
        templateUrl: 'templates/dt.html',
       controller: 'dtCtrl'
      }
    }
  })
.state('app.pt', {
    url: '/pt',
    views: {
      'menuContent': {
        templateUrl: 'templates/pt.html',
       controller: 'ptCtrl'
      }
    }
  })

.state('app.sb', {
    url: '/sb',
    views: {
      'menuContent': {
        templateUrl: 'templates/sb.html',
       controller: 'sbCtrl'
      }
    }
  })


.state('app.bst', {
    url: '/bst',
    views: {
      'menuContent': {
        templateUrl: 'templates/bst.html',
       controller: 'bstCtrl'
      }
    }
  })
.state('app.vt', {
    url: '/vt',
    views: {
      'menuContent': {
        templateUrl: 'templates/vt.html',
       controller: 'vtCtrl'
      }
    }
  })
.state('app.lt', {
    url: '/lt',
    views: {
      'menuContent': {
        templateUrl: 'templates/lt.html',
       controller: 'ltCtrl'
      }
    }
  })
.state('app.vlt', {
    url: '/vlt',
    views: {
      'menuContent': {
        templateUrl: 'templates/vlt.html',
       controller: 'vltCtrl'
      }
    }
  })

.state('app.dharmapuri', {
    url: '/dharmapuri',
    views: {
      'menuContent': {
        templateUrl: 'templates/dharmapuri.html',
       controller: 'dharmapuriCtrl'
      }
    }
  })


.state('app.dh', {
    url: '/dh',
    views: {
      'menuContent': {
        templateUrl: 'templates/dh.html',
       controller: 'dhCtrl'
      }
    }
  })
.state('app.ds', {
    url: '/ds',
    views: {
      'menuContent': {
        templateUrl: 'templates/ds.html',
       controller: 'dsCtrl'
      }
    }
  })


.state('app.dc', {
    url: '/dc',
    views: {
      'menuContent': {
        templateUrl: 'templates/dc.html',
       controller: 'dcCtrl'
      }
    }
  })

.state('app.dm', {
    url: '/dm',
    views: {
      'menuContent': {
        templateUrl: 'templates/dm.html',
       controller: 'dmCtrl'
      }
    }
  })
.state('app.pudukottai', {
    url: '/pudukottai',
    views: {
      'menuContent': {
        templateUrl: 'templates/pudukottai.html',
       controller: 'pudukottaiCtrl'
      }
    }
  })

.state('app.ps', {
    url: '/ps',
    views: {
      'menuContent': {
        templateUrl: 'templates/ps.html',
       controller: 'psCtrl'
      }
    }
  })
.state('app.ptf', {
    url: '/ptf',
    views: {
      'menuContent': {
        templateUrl: 'templates/ptf.html',
       controller: 'ptfCtrl'
      }
    }
  })

.state('app.pb', {
    url: '/pb',
    views: {
      'menuContent': {
        templateUrl: 'templates/pb.html',
       controller: 'pbCtrl'
      }
    }
  })
.state('app.pa', {
    url: '/pa',
    views: {
      'menuContent': {
        templateUrl: 'templates/pa.html',
       controller: 'paCtrl'
      }
    }
  })

.state('app.pk', {
    url: '/pk',
    views: {
      'menuContent': {
        templateUrl: 'templates/pk.html',
       controller: 'pkCtrl'
      }
    }
  })

.state('app.pst', {
    url: '/pst',
    views: {
      'menuContent': {
        templateUrl: 'templates/pst.html',
       controller: 'pstCtrl'
      }
    }
  })
.state('app.pat', {
    url: '/pat',
    views: {
      'menuContent': {
        templateUrl: 'templates/pat.html',
       controller: 'patCtrl'
      }
    }
  })
.state('app.ramanadhapuram', {
    url: '/ramanadhapuram',
    views: {
      'menuContent': {
        templateUrl: 'templates/ramanadhapuram.html',
       controller: 'ramanadhapuramCtrl'
      }
    }
  })
.state('app.rm', {
    url: '/rm',
    views: {
      'menuContent': {
        templateUrl: 'templates/rm.html',
       controller: 'rmCtrl'
      }
    }
  })


.state('app.rk', {
    url: '/rk',
    views: {
      'menuContent': {
        templateUrl: 'templates/rk.html',
       controller: 'rkCtrl'
      }
    }
  })
.state('app.rmp', {
    url: '/rmp',
    views: {
      'menuContent': {
        templateUrl: 'templates/rmp.html',
       controller: 'rmpCtrl'
      }
    }
  })

.state('app.rff', {
    url: '/rff',
    views: {
      'menuContent': {
        templateUrl: 'templates/rff.html',
       controller: 'rffCtrl'
      }
    }
  })
.state('app.rv', {
    url: '/rv',
    views: {
      'menuContent': {
        templateUrl: 'templates/rv.html',
       controller: 'rvCtrl'
      }
    }
  })
  
  .state('app.rt', {
    url: '/rt',
    views: {
      'menuContent': {
        templateUrl: 'templates/rt.html',
       controller: 'rtCtrl'
      }
    }
  })

.state('app.rd', {
    url: '/rd',
    views: {
      'menuContent': {
        templateUrl: 'templates/rd.html',
       controller: 'rdCtrl'
      }
    }
  })
.state('app.rig', {
    url: '/rig',
    views: {
      'menuContent': {
        templateUrl: 'templates/rig.html',
       controller: 'rigCtrl'
      }
    }
  })
.state('app.selam', {
    url: '/selam',
    views: {
      'menuContent': {
        templateUrl: 'templates/selam.html',
       controller: 'selamCtrl'
      }
    }
  })

.state('app.sy', {
    url: '/sy',
    views: {
      'menuContent': {
        templateUrl: 'templates/sy.html',
       controller: 'syCtrl'
      }
    }
  })

.state('app.sl', {
    url: '/sl',
    views: {
      'menuContent': {
        templateUrl: 'templates/sl.html',
       controller: 'slCtrl'
      }
    }
  })
.state('app.smd', {
    url: '/smd',
    views: {
      'menuContent': {
        templateUrl: 'templates/smd.html',
       controller: 'smdCtrl'
      }
    }
  })
.state('app.ss', {
    url: '/ss',
    views: {
      'menuContent': {
        templateUrl: 'templates/ss.html',
       controller: 'ssCtrl'
      }
    }
  })

.state('app.si', {
    url: '/si',
    views: {
      'menuContent': {
        templateUrl: 'templates/si.html',
       controller: 'siCtrl'
      }
    }
  })


.state('app.sst', {
    url: '/sst',
    views: {
      'menuContent': {
        templateUrl: 'templates/sst.html',
       controller: 'sstCtrl'
      }
    }
  })
.state('app.skz', {
    url: '/skz',
    views: {
      'menuContent': {
        templateUrl: 'templates/skz.html',
       controller: 'skzCtrl'
      }
    }
  })
.state('app.sg', {
    url: '/sg',
    views: {
      'menuContent': {
        templateUrl: 'templates/sg.html',
       controller: 'sgCtrl'
      }
    }
  })
.state('app.sf', {
    url: '/sf',
    views: {
      'menuContent': {
        templateUrl: 'templates/sf.html',
       controller: 'sfCtrl'
      }
    }
  })
.state('app.sr', {
    url: '/sr',
    views: {
      'menuContent': {
        templateUrl: 'templates/sr.html',
       controller: 'srCtrl'
      }
    }
  })
.state('app.se', {
    url: '/se',
    views: {
      'menuContent': {
        templateUrl: 'templates/se.html',
       controller: 'seCtrl'
      }
    }
  })
.state('app.spk', {
    url: '/spk',
    views: {
      'menuContent': {
        templateUrl: 'templates/spk.html',
       controller: 'spkCtrl'
      }
    }
  })

.state('app.spu', {
    url: '/spu',
    views: {
      'menuContent': {
        templateUrl: 'templates/spu.html',
       controller: 'spuCtrl'
      }
    }
  })

.state('app.sivagangai', {
    url: '/sivagangai',
    views: {
      'menuContent': {
        templateUrl: 'templates/sivagangai.html',
       controller: 'sivagangaiCtrl'
      }
    }
  })

.state('app.pil', {
    url: '/pil',
    views: {
      'menuContent': {
        templateUrl: 'templates/pil.html',
       controller: 'pilCtrl'
      }
    }
  })
.state('app.ath', {
    url: '/ath',
    views: {
      'menuContent': {
        templateUrl: 'templates/ath.html',
       controller: 'athCtrl'
      }
    }
  })
.state('app.kkt', {
    url: '/kkt',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkt.html',
       controller: 'kktCtrl'
      }
    }
  })
.state('app.ccl', {
    url: '/ccl',
    views: {
      'menuContent': {
        templateUrl: 'templates/ccl.html',
       controller: 'cclCtrl'
      }
    }
  })
.state('app.thanjavur', {
    url: '/thanjavur',
    views: {
      'menuContent': {
        templateUrl: 'templates/thanjavur.html',
       controller: 'thanjavurCtrl'
      }
    }
  })
.state('app.tbt', {
    url: '/tbt',
    views: {
      'menuContent': {
        templateUrl: 'templates/tbt.html',
       controller: 'tbtCtrl'
      }
    }
  })

.state('app.tgc', {
    url: '/tgc',
    views: {
      'menuContent': {
        templateUrl: 'templates/tgc.html',
       controller: 'tgcCtrl'
      }
    }
  })
.state('app.ssm', {
    url: '/ssm',
    views: {
      'menuContent': {
        templateUrl: 'templates/ssm.html',
       controller: 'ssmCtrl'
      }
    }
  })
.state('app.smt', {
    url: '/smt',
    views: {
      'menuContent': {
        templateUrl: 'templates/smt.html',
       controller: 'smtCtrl'
      }
    }
  })
.state('app.trp', {
    url: '/trp',
    views: {
      'menuContent': {
        templateUrl: 'templates/trp.html',
       controller: 'trpCtrl'
      }
    }
  })
.state('app.tat', {
    url: '/tat',
    views: {
      'menuContent': {
        templateUrl: 'templates/tat.html',
       controller: 'tatCtrl'
      }
    }
  })
.state('app.ts', {
    url: '/ts',
    views: {
      'menuContent': {
        templateUrl: 'templates/ts.html',
       controller: 'tsCtrl'
      }
    }
  })

.state('app.tsm', {
    url: '/tsm',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsm.html',
       controller: 'tsmCtrl'
      }
    }
  })

.state('app.tmf', {
    url: '/tmf',
    views: {
      'menuContent': {
        templateUrl: 'templates/tmf.html',
       controller: 'tmfCtrl'
      }
    }
  })
.state('app.dindigul', {
    url: '/dindigul',
    views: {
      'menuContent': {
        templateUrl: 'templates/dindigul.html',
       controller: 'dindigulCtrl'
      }
    }
  })
.state('app.dsc', {
    url: '/dsc',
    views: {
      'menuContent': {
        templateUrl: 'templates/dsc.html',
       controller: 'dscCtrl'
      }
    }
  })
.state('app.dsr', {
    url: '/dsr',
    views: {
      'menuContent': {
        templateUrl: 'templates/dsr.html',
       controller: 'dsrCtrl'
      }
    }
  })
.state('app.dtp', {
    url: '/dtp',
    views: {
      'menuContent': {
        templateUrl: 'templates/dtp.html',
       controller: 'dtpCtrl'
      }
    }
  })
.state('app.ddf', {
    url: '/ddf',
    views: {
      'menuContent': {
        templateUrl: 'templates/ddf.html',
       controller: 'ddfCtrl'
      }
    }
  })
.state('app.dk', {
    url: '/dk',
    views: {
      'menuContent': {
        templateUrl: 'templates/dk.html',
       controller: 'dkCtrl'
      }
    }
  })
.state('app.dsk', {
    url: '/dsk',
    views: {
      'menuContent': {
        templateUrl: 'templates/dsk.html',
       controller: 'dskCtrl'
      }
    }
  })
.state('app.dav', {
    url: '/dav',
    views: {
      'menuContent': {
        templateUrl: 'templates/dav.html',
       controller: 'davCtrl'
      }
    }
  })


.state('app.dks', {
    url: '/dks',
    views: {
      'menuContent': {
        templateUrl: 'templates/dks.html',
       controller: 'dksCtrl'
      }
    }
  })
.state('app.dtf', {
    url: '/dtf',
    views: {
      'menuContent': {
        templateUrl: 'templates/dtf.html',
       controller: 'dtfCtrl'
      }
    }
  })
.state('app.dmp', {
    url: '/dmp',
    views: {
      'menuContent': {
        templateUrl: 'templates/dmp.html',
       controller: 'dmpCtrl'
      }
    }
  })
.state('app.dgv', {
    url: '/dgv',
    views: {
      'menuContent': {
        templateUrl: 'templates/dgv.html',
       controller: 'dgvCtrl'
      }
    }
  })
.state('app.dmm', {
    url: '/dmm',
    views: {
      'menuContent': {
        templateUrl: 'templates/dmm.html',
       controller: 'dmmCtrl'
      }
    }
  })
.state('app.dp', {
    url: '/dp',
    views: {
      'menuContent': {
        templateUrl: 'templates/dp.html',
       controller: 'dpCtrl'
      }
    }
  })
.state('app.dat', {
    url: '/dat',
    views: {
      'menuContent': {
        templateUrl: 'templates/dat.html',
       controller: 'datCtrl'
      }
    }
  })
.state('app.dmd', {
    url: '/dmd',
    views: {
      'menuContent': {
        templateUrl: 'templates/dmd.html',
       controller: 'dmdCtrl'
      }
    }
  })

.state('app.dst', {
    url: '/dst',
    views: {
      'menuContent': {
        templateUrl: 'templates/dst.html',
       controller: 'dstCtrl'
      }
    }
  })
.state('app.dhl', {
    url: '/dhl',
    views: {
      'menuContent': {
        templateUrl: 'templates/dhl.html',
       controller: 'dhlCtrl'
      }
    }
  })

.state('app.db', {
    url: '/db',
    views: {
      'menuContent': {
        templateUrl: 'templates/db.html',
       controller: 'dbCtrl'
      }
    }
  })
.state('app.dbb', {
    url: '/dbb',
    views: {
      'menuContent': {
        templateUrl: 'templates/dbb.html',
       controller: 'dbbCtrl'
      }
    }
  })
.state('app.erode', {
    url: '/erode',
    views: {
      'menuContent': {
        templateUrl: 'templates/erode.html',
       controller: 'erodeCtrl'
      }
    }
  })
.state('app.edt', {
    url: '/edt',
    views: {
      'menuContent': {
        templateUrl: 'templates/edt.html',
       controller: 'edtCtrl'
      }
    }
  })
.state('app.ecm', {
    url: '/ecm',
    views: {
      'menuContent': {
        templateUrl: 'templates/ecm.html',
       controller: 'ecmCtrl'
      }
    }
  })
.state('app.evb', {
    url: '/evb',
    views: {
      'menuContent': {
        templateUrl: 'templates/evb.html',
       controller: 'evbCtrl'
      }
    }
  })

.state('app.est', {
    url: '/est',
    views: {
      'menuContent': {
        templateUrl: 'templates/est.html',
       controller: 'estCtrl'
      }
    }
  })
.state('app.ebc', {
    url: '/ebc',
    views: {
      'menuContent': {
        templateUrl: 'templates/ebc.html',
       controller: 'ebcCtrl'
      }
    }
  })
.state('app.ekt', {
    url: '/ekt',
    views: {
      'menuContent': {
        templateUrl: 'templates/ekt.html',
       controller: 'ektCtrl'
      }
    }
  })


.state('app.esa', {
    url: '/esa',
    views: {
      'menuContent': {
        templateUrl: 'templates/esa.html',
       controller: 'esaCtrl'
      }
    }
  })
.state('app.eak', {
    url: '/eak',
    views: {
      'menuContent': {
        templateUrl: 'templates/eak.html',
       controller: 'eakCtrl'
      }
    }
  })


.state('app.ep', {
    url: '/ep',
    views: {
      'menuContent': {
        templateUrl: 'templates/ep.html',
       controller: 'epCtrl'
      }
    }
  })

.state('app.eb', {
    url: '/eb',
    views: {
      'menuContent': {
        templateUrl: 'templates/eb.html',
       controller: 'ebCtrl'
      }
    }
  })
.state('app.em', {
    url: '/em',
    views: {
      'menuContent': {
        templateUrl: 'templates/em.html',
       controller: 'emCtrl'
      }
    }
  })

.state('app.ek', {
    url: '/ek',
    views: {
      'menuContent': {
        templateUrl: 'templates/ek.html',
       controller: 'ekCtrl'
      }
    }
  })
.state('app.eko', {
    url: '/eko',
    views: {
      'menuContent': {
        templateUrl: 'templates/eko.html',
       controller: 'ekoCtrl'
      }
    }
  })
.state('app.esl', {
    url: '/esl',
    views: {
      'menuContent': {
        templateUrl: 'templates/esl.html',
       controller: 'eslCtrl'
      }
    }
  })

.state('app.eba', {
    url: '/eba',
    views: {
      'menuContent': {
        templateUrl: 'templates/eba.html',
       controller: 'ebaCtrl'
      }
    }
  })


.state('app.ebs', {
    url: '/ebs',
    views: {
      'menuContent': {
        templateUrl: 'templates/ebs.html',
       controller: 'ebsCtrl'
      }
    }
  })

.state('app.kanchipuram', {
    url: '/kanchipuram',
    views: {
      'menuContent': {
        templateUrl: 'templates/kanchipuram.html',
       controller: 'kanchipuramCtrl'
      }
    }
  })


.state('app.ket', {
    url: '/ket',
    views: {
      'menuContent': {
        templateUrl: 'templates/ket.html',
       controller: 'ketCtrl'
      }
    }
  })
.state('app.kct', {
    url: '/kct',
    views: {
      'menuContent': {
        templateUrl: 'templates/kct.html',
       controller: 'kctCtrl'
      }
    }
  })

.state('app.kks', {
    url: '/kks',
    views: {
      'menuContent': {
        templateUrl: 'templates/kks.html',
       controller: 'kksCtrl'
      }
    }
  })

.state('app.kvp', {
    url: '/kvp',
    views: {
      'menuContent': {
        templateUrl: 'templates/kvp.html',
       controller: 'kvpCtrl'
      }
    }
  })

.state('app.kkk', {
    url: '/kkk',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkk.html',
       controller: 'kkkCtrl'
      }
    }
  })

.state('app.kvb', {
    url: '/kvb',
    views: {
      'menuContent': {
        templateUrl: 'templates/kvb.html',
       controller: 'kvbCtrl'
      }
    }
  })
.state('app.kvt', {
    url: '/kvt',
    views: {
      'menuContent': {
        templateUrl: 'templates/kvt.html',
       controller: 'kvtCtrl'
      }
    }
  })
.state('app.kut', {
    url: '/kut',
    views: {
      'menuContent': {
        templateUrl: 'templates/kut.html',
       controller: 'kutCtrl'
      }
    }
  })
.state('app.kka', {
    url: '/kka',
    views: {
      'menuContent': {
        templateUrl: 'templates/kka.html',
       controller: 'kkaCtrl'
      }
    }
  })
.state('app.ktp', {
    url: '/ktp',
    views: {
      'menuContent': {
        templateUrl: 'templates/ktp.html',
       controller: 'ktpCtrl'
      }
    }
  })
.state('app.kkp', {
    url: '/kkp',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkp.html',
       controller: 'kkpCtrl'
      }
    }
  })
  
.state('app.kd', {
    url: '/kd',
    views: {
      'menuContent': {
        templateUrl: 'templates/kd.html',
       controller: 'kdCtrl'
      }
    }
  })
  
.state('app.kaf', {
    url: '/kaf',
    views: {
      'menuContent': {
        templateUrl: 'templates/kaf.html',
       controller: 'kafCtrl'
      }
    }
  })
.state('app.kak', {
    url: '/kak',
    views: {
      'menuContent': {
        templateUrl: 'templates/kak.html',
       controller: 'kakCtrl'
      }
    }
  })
.state('app.kpv', {
    url: '/kpv',
    views: {
      'menuContent': {
        templateUrl: 'templates/kpv.html',
       controller: 'kpvCtrl'
      }
    }
  })
.state('app.ksa', {
    url: '/ksa',
    views: {
      'menuContent': {
        templateUrl: 'templates/ksa.html',
       controller: 'ksaCtrl'
      }
    }
  })

.state('app.kst', {
    url: '/kst',
    views: {
      'menuContent': {
        templateUrl: 'templates/kst.html',
       controller: 'kstCtrl'
      }
    }
  })
.state('app.kku', {
    url: '/kku',
    views: {
      'menuContent': {
        templateUrl: 'templates/kku.html',
       controller: 'kkuCtrl'
      }
    }
  })
.state('app.kanniyakumari', {
    url: '/kanniyakumari',
    views: {
      'menuContent': {
        templateUrl: 'templates/kanniyakumari.html',
       controller: 'kanniyakumariCtrl'
      }
    }
  })
.state('app.kvr', {
    url: '/kvr',
    views: {
      'menuContent': {
        templateUrl: 'templates/kvr.html',
       controller: 'kvrCtrl'
      }
    }
  })
.state('app.kp', {
    url: '/kp',
    views: {
      'menuContent': {
        templateUrl: 'templates/kp.html',
       controller: 'kpCtrl'
      }
    }
  })
.state('app.kt', {
    url: '/kt',
    views: {
      'menuContent': {
        templateUrl: 'templates/kt.html',
       controller: 'ktCtrl'
      }
    }
  })
.state('app.ktt', {
    url: '/ktt',
    views: {
      'menuContent': {
        templateUrl: 'templates/ktt.html',
       controller: 'kttCtrl'
      }
    }
  })
.state('app.kb', {
    url: '/kb',
    views: {
      'menuContent': {
        templateUrl: 'templates/kb.html',
       controller: 'kbCtrl'
      }
    }
  })

.state('app.kba', {
    url: '/kba',
    views: {
      'menuContent': {
        templateUrl: 'templates/kba.html',
       controller: 'kbaCtrl'
      }
    }
  })
.state('app.ksv', {
    url: '/ksv',
    views: {
      'menuContent': {
        templateUrl: 'templates/ksv.html',
       controller: 'ksvCtrl'
      }
    }
  })
.state('app.kv', {
    url: '/kv',
    views: {
      'menuContent': {
        templateUrl: 'templates/kv.html',
       controller: 'kvCtrl'
      }
    }
  })

.state('app.ktf', {
    url: '/ktf',
    views: {
      'menuContent': {
        templateUrl: 'templates/ktf.html',
       controller: 'ktfCtrl'
      }
    }
  })
.state('app.kr', {
    url: '/kr',
    views: {
      'menuContent': {
        templateUrl: 'templates/kr.html',
       controller: 'krCtrl'
      }
    }
  })

.state('app.km', {
    url: '/km',
    views: {
      'menuContent': {
        templateUrl: 'templates/km.html',
       controller: 'kmCtrl'
      }
    }
  })
.state('app.kw', {
    url: '/kw',
    views: {
      'menuContent': {
        templateUrl: 'templates/kw.html',
       controller: 'kwCtrl'
      }
    }
  })
.state('app.kc', {
    url: '/kc',
    views: {
      'menuContent': {
        templateUrl: 'templates/kc.html',
       controller: 'kcCtrl'
      }
    }
  })
.state('app.kf', {
    url: '/kf',
    views: {
      'menuContent': {
        templateUrl: 'templates/kf.html',
       controller: 'kfCtrl'
      }
    }
  })
.state('app.ks', {
    url: '/ks',
    views: {
      'menuContent': {
        templateUrl: 'templates/ks.html',
       controller: 'ksCtrl'
      }
    }
  })
.state('app.kj', {
    url: '/kj',
    views: {
      'menuContent': {
        templateUrl: 'templates/kj.html',
       controller: 'kjCtrl'
      }
    }
  })
.state('app.kpr', {
    url: '/kpr',
    views: {
      'menuContent': {
        templateUrl: 'templates/kpr.html',
       controller: 'kprCtrl'
      }
    }
  })
.state('app.kkm', {
    url: '/kkm',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkm.html',
       controller: 'kkmCtrl'
      }
    }
  })

.state('app.kbp', {
    url: '/kbp',
    views: {
      'menuContent': {
        templateUrl: 'templates/kbp.html',
       controller: 'kbpCtrl'
      }
    }
  })
.state('app.kkw', {
    url: '/kkw',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkw.html',
       controller: 'kkwCtrl'
      }
    }
  })
.state('app.ktn', {
    url: '/ktn',
    views: {
      'menuContent': {
        templateUrl: 'templates/ktn.html',
       controller: 'ktnCtrl'
      }
    }
  })
.state('app.kuf', {
    url: '/kuf',
    views: {
      'menuContent': {
        templateUrl: 'templates/kuf.html',
       controller: 'kufCtrl'
      }
    }
  })

.state('app.ksx', {
    url: '/ksx',
    views: {
      'menuContent': {
        templateUrl: 'templates/ksx.html',
       controller: 'ksxCtrl'
      }
    }
  })
.state('app.kot', {
    url: '/kot',
    views: {
      'menuContent': {
        templateUrl: 'templates/kot.html',
       controller: 'kotCtrl'
      }
    }
  })
.state('app.koc', {
    url: '/koc',
    views: {
      'menuContent': {
        templateUrl: 'templates/koc.html',
       controller: 'kocCtrl'
      }
    }
  })
.state('app.karur', {
    url: '/karur',
    views: {
      'menuContent': {
        templateUrl: 'templates/karur.html',
       controller: 'karurCtrl'
      }
    }
  })
.state('app.kap', {
    url: '/kap',
    views: {
      'menuContent': {
        templateUrl: 'templates/kap.html',
       controller: 'kapCtrl'
      }
    }
  })
.state('app.ksb', {
    url: '/ksb',
    views: {
      'menuContent': {
        templateUrl: 'templates/ksb.html',
       controller: 'ksbCtrl'
      }
    }
  })
.state('app.kad', {
    url: '/kad',
    views: {
      'menuContent': {
        templateUrl: 'templates/kad.html',
       controller: 'kadCtrl'
      }
    }
  })
.state('app.ktd', {
    url: '/ktd',
    views: {
      'menuContent': {
        templateUrl: 'templates/ktd.html',
       controller: 'ktdCtrl'
      }
    }
  })
.state('app.krishnagiri', {
    url: '/krishnagiri',
    views: {
      'menuContent': {
        templateUrl: 'templates/krishnagiri.html',
       controller: 'krishnagiriCtrl'
      }
    }
  })
.state('app.krp', {
    url: '/krp',
    views: {
      'menuContent': {
        templateUrl: 'templates/krp.html',
       controller: 'krpCtrl'
      }
    }
  })
.state('app.kkv', {
    url: '/kkv',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkv.html',
       controller: 'kkvCtrl'
      }
    }
  })
.state('app.kkr', {
    url: '/kkr',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkr.html',
       controller: 'kkrCtrl'
      }
    }
  })
.state('app.kkf', {
    url: '/kkf',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkf.html',
       controller: 'kkfCtrl'
      }
    }
  })
.state('app.kkd', {
    url: '/kkd',
    views: {
      'menuContent': {
        templateUrl: 'templates/kkd.html',
       controller: 'kkdCtrl'
      }
    }
  })
.state('app.krk', {
    url: '/krk',
    views: {
      'menuContent': {
        templateUrl: 'templates/krk.html',
       controller: 'krkCtrl'
      }
    }
  })
.state('app.kac', {
    url: '/kac',
    views: {
      'menuContent': {
        templateUrl: 'templates/kac.html',
       controller: 'kacCtrl'
      }
    }
  })
.state('app.nagapattinam', {
    url: '/nagapattinam',
    views: {
      'menuContent': {
        templateUrl: 'templates/nagapattinam.html',
       controller: 'nagapattinamCtrl'
      }
    }
  })
.state('app.nv', {
    url: '/nv',
    views: {
      'menuContent': {
        templateUrl: 'templates/nv.html',
       controller: 'nvCtrl'
      }
    }
  })
.state('app.nvr', {
    url: '/nvr',
    views: {
      'menuContent': {
        templateUrl: 'templates/nvr.html',
       controller: 'nvrCtrl'
      }
    }
  })
.state('app.nt', {
    url: '/nt',
    views: {
      'menuContent': {
        templateUrl: 'templates/nt.html',
       controller: 'ntCtrl'
      }
    }
  })
.state('app.ns', {
    url: '/ns',
    views: {
      'menuContent': {
        templateUrl: 'templates/ns.html',
       controller: 'nsCtrl'
      }
    }
  })
.state('app.ntm', {
    url: '/ntm',
    views: {
      'menuContent': {
        templateUrl: 'templates/ntm.html',
       controller: 'ntmCtrl'
      }
    }
  })
.state('app.ntk', {
    url: '/ntk',
    views: {
      'menuContent': {
        templateUrl: 'templates/ntk.html',
       controller: 'ntkCtrl'
      }
    }
  })
.state('app.nk', {
    url: '/nk',
    views: {
      'menuContent': {
        templateUrl: 'templates/nk.html',
       controller: 'nkCtrl'
      }
    }
  })
.state('app.nss', {
    url: '/nss',
    views: {
      'menuContent': {
        templateUrl: 'templates/nss.html',
       controller: 'nssCtrl'
      }
    }
  })
.state('app.nm', {
    url: '/nm',
    views: {
      'menuContent': {
        templateUrl: 'templates/nm.html',
       controller: 'nmCtrl'
      }
    }
  })
.state('app.nw', {
    url: '/nw',
    views: {
      'menuContent': {
        templateUrl: 'templates/nw.html',
       controller: 'nwCtrl'
      }
    }
  })
.state('app.ng', {
    url: '/ng',
    views: {
      'menuContent': {
        templateUrl: 'templates/ng.html',
       controller: 'ngCtrl'
      }
    }
  })

.state('app.np', {
    url: '/np',
    views: {
      'menuContent': {
        templateUrl: 'templates/np.html',
       controller: 'npCtrl'
      }
    }
  })


.state('app.nsp', {
    url: '/nsp',
    views: {
      'menuContent': {
        templateUrl: 'templates/nsp.html',
       controller: 'nspCtrl'
      }
    }
  })


.state('app.nn', {
    url: '/nn',
    views: {
      'menuContent': {
        templateUrl: 'templates/nn.html',
       controller: 'nnCtrl'
      }
    }
  })


.state('app.nsk', {
    url: '/nsk',
    views: {
      'menuContent': {
        templateUrl: 'templates/nsk.html',
       controller: 'nskCtrl'
      }
    }
  })


.state('app.ngt', {
    url: '/ngt',
    views: {
      'menuContent': {
        templateUrl: 'templates/ngt.html',
       controller: 'ngtCtrl'
      }
    }
  })


.state('app.nat', {
    url: '/nat',
    views: {
      'menuContent': {
        templateUrl: 'templates/nat.html',
       controller: 'natCtrl'
      }
    }
  })


.state('app.nkt', {
    url: '/nkt',
    views: {
      'menuContent': {
        templateUrl: 'templates/nkt.html',
       controller: 'nktCtrl'
      }
    }
  })


.state('app.nmt', {
    url: '/nmt',
    views: {
      'menuContent': {
        templateUrl: 'templates/nmt.html',
       controller: 'nmtCtrl'
      }
    }
  })


.state('app.npc', {
    url: '/npc',
    views: {
      'menuContent': {
        templateUrl: 'templates/npc.html',
       controller: 'npcCtrl'
      }
    }
  })


.state('app.nrg', {
    url: '/nrg',
    views: {
      'menuContent': {
        templateUrl: 'templates/nrg.html',
       controller: 'nrgCtrl'
      }
    }
  })


.state('app.nem', {
    url: '/nem',
    views: {
      'menuContent': {
        templateUrl: 'templates/nem.html',
       controller: 'nemCtrl'
      }
    }
  })


.state('app.ngp', {
    url: '/ngp',
    views: {
      'menuContent': {
        templateUrl: 'templates/ngp.html',
       controller: 'ngpCtrl'
      }
    }
  })


.state('app.nts', {
    url: '/nts',
    views: {
      'menuContent': {
        templateUrl: 'templates/nts.html',
       controller: 'ntsCtrl'
      }
    }
  })


.state('app.nam', {
    url: '/nam',
    views: {
      'menuContent': {
        templateUrl: 'templates/nam.html',
       controller: 'namCtrl'
      }
    }
  })
.state('app.namakkal', {
    url: '/namakkal',
    views: {
      'menuContent': {
        templateUrl: 'templates/namakkal.html',
       controller: 'namakkalCtrl'
      }
    }
  })

.state('app.naa', {
    url: '/naa',
    views: {
      'menuContent': {
        templateUrl: 'templates/naa.html',
       controller: 'naaCtrl'
      }
    }
  })

.state('app.nak', {
    url: '/nak',
    views: {
      'menuContent': {
        templateUrl: 'templates/nak.html',
       controller: 'nakCtrl'
      }
    }
  })

.state('app.nav', {
    url: '/nav',
    views: {
      'menuContent': {
        templateUrl: 'templates/nav.html',
       controller: 'navCtrl'
      }
    }
  })

.state('app.nap', {
    url: '/nap',
    views: {
      'menuContent': {
        templateUrl: 'templates/nap.html',
       controller: 'napCtrl'
      }
    }
  })

.state('app.nca', {
    url: '/nca',
    views: {
      'menuContent': {
        templateUrl: 'templates/nca.html',
       controller: 'ncaCtrl'
      }
    }
  })

.state('app.nrp', {
    url: '/nrp',
    views: {
      'menuContent': {
        templateUrl: 'templates/nrp.html',
       controller: 'nrpCtrl'
      }
    }
  })

.state('app.nbh', {
    url: '/nbh',
    views: {
      'menuContent': {
        templateUrl: 'templates/nbh.html',
       controller: 'nbhCtrl'
      }
    }
  })

.state('app.nan', {
    url: '/nan',
    views: {
      'menuContent': {
        templateUrl: 'templates/nan.html',
       controller: 'nanCtrl'
      }
    }
  })

.state('app.nnm', {
    url: '/nnm',
    views: {
      'menuContent': {
        templateUrl: 'templates/nnm.html',
       controller: 'nnmCtrl'
      }
    }
  })

.state('app.nnf', {
    url: '/nnf',
    views: {
      'menuContent': {
        templateUrl: 'templates/nnf.html',
       controller: 'nnfCtrl'
      }
    }
  })

.state('app.perambalur', {
    url: '/perambalur',
    views: {
      'menuContent': {
        templateUrl: 'templates/perambalur.html',
       controller: 'perambalurCtrl'
      }
    }
  })


.state('app.pr', {
    url: '/pr',
    views: {
      'menuContent': {
        templateUrl: 'templates/pr.html',
       controller: 'prCtrl'
      }
    }
  })


.state('app.pe', {
    url: '/pe',
    views: {
      'menuContent': {
        templateUrl: 'templates/pe.html',
       controller: 'peCtrl'
      }
    }
  })


.state('app.pl', {
    url: '/pl',
    views: {
      'menuContent': {
        templateUrl: 'templates/pl.html',
       controller: 'plCtrl'
      }
    }
  })


.state('app.pss', {
    url: '/pss',
    views: {
      'menuContent': {
        templateUrl: 'templates/pss.html',
       controller: 'pssCtrl'
      }
    }
  })

.state('app.pf', {
    url: '/pf',
    views: {
      'menuContent': {
        templateUrl: 'templates/pf.html',
       controller: 'pfCtrl'
      }
    }
  })
.state('app.tiruppur', {
    url: '/tiruppur',
    views: {
      'menuContent': {
        templateUrl: 'templates/tiruppur.html',
       controller: 'tiruppurCtrl'
      }
    }
  })
.state('app.ta', {
    url: '/ta',
    views: {
      'menuContent': {
        templateUrl: 'templates/ta.html',
       controller: 'taCtrl'
      }
    }
  })
.state('app.tc', {
    url: '/tc',
    views: {
      'menuContent': {
        templateUrl: 'templates/tc.html',
       controller: 'tcCtrl'
      }
    }
  })
.state('app.td', {
    url: '/td',
    views: {
      'menuContent': {
        templateUrl: 'templates/td.html',
       controller: 'tdCtrl'
      }
    }
  })
.state('app.tf', {
    url: '/tf',
    views: {
      'menuContent': {
        templateUrl: 'templates/tf.html',
       controller: 'tfCtrl'
      }
    }
  })
.state('app.tak', {
    url: '/tak',
    views: {
      'menuContent': {
        templateUrl: 'templates/tak.html',
       controller: 'takCtrl'
      }
    }
  })

.state('app.to', {
    url: '/to',
    views: {
      'menuContent': {
        templateUrl: 'templates/to.html',
       controller: 'toCtrl'
      }
    }
  })
.state('app.tn', {
    url: '/tn',
    views: {
      'menuContent': {
        templateUrl: 'templates/tn.html',
       controller: 'tnCtrl'
      }
    }
  })
.state('app.tj', {
    url: '/tj',
    views: {
      'menuContent': {
        templateUrl: 'templates/tj.html',
       controller: 'tjCtrl'
      }
    }
  })

.state('app.tu', {
    url: '/tu',
    views: {
      'menuContent': {
        templateUrl: 'templates/tu.html',
       controller: 'tuCtrl'
      }
    }
  })

.state('app.thiruvallur', {
    url: '/thiruvallur',
    views: {
      'menuContent': {
        templateUrl: 'templates/thiruvallur.html',
       controller: 'thiruvallurCtrl'
      }
    }
  })

.state('app.tl', {
    url: '/tl',
    views: {
      'menuContent': {
        templateUrl: 'templates/tl.html',
       controller: 'tlCtrl'
      }
    }
  })

.state('app.tv', {
    url: '/tv',
    views: {
      'menuContent': {
        templateUrl: 'templates/tv.html',
       controller: 'tvCtrl'
      }
    }
  })

.state('app.tm', {
    url: '/tm',
    views: {
      'menuContent': {
        templateUrl: 'templates/tm.html',
       controller: 'tmCtrl'
      }
    }
  })

.state('app.tp', {
    url: '/tp',
    views: {
      'menuContent': {
        templateUrl: 'templates/tp.html',
       controller: 'tpCtrl'
      }
    }
  })

.state('app.tq', {
    url: '/tq',
    views: {
      'menuContent': {
        templateUrl: 'templates/tq.html',
       controller: 'tqCtrl'
      }
    }
  })

.state('app.tt', {
    url: '/tt',
    views: {
      'menuContent': {
        templateUrl: 'templates/tt.html',
       controller: 'ttCtrl'
      }
    }
  })

.state('app.trr', {
    url: '/trr',
    views: {
      'menuContent': {
        templateUrl: 'templates/trr.html',
       controller: 'trrCtrl'
      }
    }
  })

.state('app.tb', {
    url: '/tb',
    views: {
      'menuContent': {
        templateUrl: 'templates/tb.html',
       controller: 'tbCtrl'
      }
    }
  })
.state('app.tcl', {
    url: '/tcl',
    views: {
      'menuContent': {
        templateUrl: 'templates/tcl.html',
       controller: 'tclCtrl'
      }
    }
  })
.state('app.tg', {
    url: '/tg',
    views: {
      'menuContent': {
        templateUrl: 'templates/tg.html',
       controller: 'tgCtrl'
      }
    }
  })
.state('app.thirunelveli', {
    url: '/thirunelveli',
    views: {
      'menuContent': {
        templateUrl: 'templates/thirunelveli.html',
       controller: 'thirunelveliCtrl'
      }
    }
  })

.state('app.tvk', {
    url: '/tvk',
    views: {
      'menuContent': {
        templateUrl: 'templates/tvk.html',
       controller: 'tvkCtrl'
      }
    }
  })
.state('app.taf', {
    url: '/taf',
    views: {
      'menuContent': {
        templateUrl: 'templates/taf.html',
       controller: 'tafCtrl'
      }
    }
  })
.state('app.tmp', {
    url: '/tmp',
    views: {
      'menuContent': {
        templateUrl: 'templates/tmp.html',
       controller: 'tmpCtrl'
      }
    }
  })
.state('app.tmw', {
    url: '/tmw',
    views: {
      'menuContent': {
        templateUrl: 'templates/tmw.html',
       controller: 'tmwCtrl'
      }
    }
  })
.state('app.tkt', {
    url: '/tkt',
    views: {
      'menuContent': {
        templateUrl: 'templates/tkt.html',
       controller: 'tktCtrl'
      }
    }
  })
.state('app.tkp', {
    url: '/tkp',
    views: {
      'menuContent': {
        templateUrl: 'templates/tkp.html',
       controller: 'tkpCtrl'
      }
    }
  })
.state('app.tks', {
    url: '/tks',
    views: {
      'menuContent': {
        templateUrl: 'templates/tks.html',
       controller: 'tksCtrl'
      }
    }
  })
.state('app.tkv', {
    url: '/tkv',
    views: {
      'menuContent': {
        templateUrl: 'templates/tkv.html',
       controller: 'tkvCtrl'
      }
    }
  })
.state('app.tsl', {
    url: '/tsl',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsl.html',
       controller: 'tslCtrl'
      }
    }
  })
.state('app.tst', {
    url: '/tst',
    views: {
      'menuContent': {
        templateUrl: 'templates/tst.html',
       controller: 'tstCtrl'
      }
    }
  })
.state('app.tkm', {
    url: '/tkm',
    views: {
      'menuContent': {
        templateUrl: 'templates/tkm.html',
       controller: 'tkmCtrl'
      }
    }
  })
.state('app.tbf', {
    url: '/tbf',
    views: {
      'menuContent': {
        templateUrl: 'templates/tbf.html',
       controller: 'tbfCtrl'
      }
    }
  })
.state('app.tbd', {
    url: '/tbd',
    views: {
      'menuContent': {
        templateUrl: 'templates/tbd.html',
       controller: 'tbdCtrl'
      }
    }
  })
.state('app.tag', {
    url: '/tag',
    views: {
      'menuContent': {
        templateUrl: 'templates/tag.html',
       controller: 'tagCtrl'
      }
    }
  })
.state('app.tap', {
    url: '/tap',
    views: {
      'menuContent': {
        templateUrl: 'templates/tap.html',
       controller: 'tapCtrl'
      }
    }
  })
.state('app.tam', {
    url: '/tam',
    views: {
      'menuContent': {
        templateUrl: 'templates/tam.html',
       controller: 'tamCtrl'
      }
    }
  })
.state('app.tms', {
    url: '/tms',
    views: {
      'menuContent': {
        templateUrl: 'templates/tms.html',
       controller: 'tmsCtrl'
      }
    }
  })
.state('app.tmd', {
    url: '/tmd',
    views: {
      'menuContent': {
        templateUrl: 'templates/tmd.html',
       controller: 'tmdCtrl'
      }
    }
  })
.state('app.tkf', {
    url: '/tkf',
    views: {
      'menuContent': {
        templateUrl: 'templates/tkf.html',
       controller: 'tkfCtrl'
      }
    }
  })
.state('app.tiruvannamalai', {
    url: '/ttiruvannamalai',
    views: {
      'menuContent': {
        templateUrl: 'templates/tiruvannamalai.html',
       controller: 'tiruvannamalaiCtrl'
      }
    }
  })

.state('app.tra', {
    url: '/tra',
    views: {
      'menuContent': {
        templateUrl: 'templates/tra.html',
       controller: 'traCtrl'
      }
    }
  })

.state('app.tru', {
    url: '/tru',
    views: {
      'menuContent': {
        templateUrl: 'templates/tru.html',
       controller: 'truCtrl'
      }
    }
  })

.state('app.trv', {
    url: '/trv',
    views: {
      'menuContent': {
        templateUrl: 'templates/trv.html',
       controller: 'trvCtrl'
      }
    }
  })

.state('app.trs', {
    url: '/trs',
    views: {
      'menuContent': {
        templateUrl: 'templates/trs.html',
       controller: 'trsCtrl'
      }
    }
  })

.state('app.tvp', {
    url: '/tvp',
    views: {
      'menuContent': {
        templateUrl: 'templates/tvp.html',
       controller: 'tvpCtrl'
      }
    }
  })

.state('app.tsa', {
    url: '/tsa',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsa.html',
       controller: 'tsaCtrl'
      }
    }
  })

.state('app.tsr', {
    url: '/tsr',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsr.html',
       controller: 'tsrCtrl'
      }
    }
  })

.state('app.tpm', {
    url: '/tpm',
    views: {
      'menuContent': {
        templateUrl: 'templates/tpm.html',
       controller: 'tpmCtrl'
      }
    }
  })
.state('app.thiruvarur', {
    url: '/thiruvarur',
    views: {
      'menuContent': {
        templateUrl: 'templates/thiruvarur.html',
       controller: 'thiruvarurCtrl'
      }
    }
  })
.state('app.trt', {
    url: '/trt',
    views: {
      'menuContent': {
        templateUrl: 'templates/trt.html',
       controller: 'trtCtrl'
      }
    }
  })

.state('app.tsw', {
    url: '/tsw',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsw.html',
       controller: 'tswCtrl'
      }
    }
  })
.state('app.tsb', {
    url: '/tsb',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsb.html',
       controller: 'tsbCtrl'
      }
    }
  })
.state('app.tsc', {
    url: '/tsc',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsc.html',
       controller: 'tscCtrl'
      }
    }
  })
.state('app.tsk', {
    url: '/tsk',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsk.html',
       controller: 'tskCtrl'
      }
    }
  })
.state('app.tsp', {
    url: '/tsp',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsp.html',
       controller: 'tspCtrl'
      }
    }
  })
.state('app.tsg', {
    url: '/tsg',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsg.html',
       controller: 'tsgCtrl'
      }
    }
  })
.state('app.tud', {
    url: '/tud',
    views: {
      'menuContent': {
        templateUrl: 'templates/tud.html',
       controller: 'tudCtrl'
      }
    }
  })
.state('app.tmt', {
    url: '/tmt',
    views: {
      'menuContent': {
        templateUrl: 'templates/tmt.html',
       controller: 'tmtCtrl'
      }
    }
  })
.state('app.tpa', {
    url: '/tpa',
    views: {
      'menuContent': {
        templateUrl: 'templates/tpa.html',
       controller: 'tpaCtrl'
      }
    }
  })
.state('app.tpe', {
    url: '/tpe',
    views: {
      'menuContent': {
        templateUrl: 'templates/tpe.html',
       controller: 'tpeCtrl'
      }
    }
  })
.state('app.tmu', {
    url: '/tmu',
    views: {
      'menuContent': {
        templateUrl: 'templates/tmu.html',
       controller: 'tmuCtrl'
      }
    }
  })
.state('app.tmm', {
    url: '/tmm',
    views: {
      'menuContent': {
        templateUrl: 'templates/tmm.html',
       controller: 'tmmCtrl'
      }
    }
  })
.state('app.tac', {
    url: '/tac',
    views: {
      'menuContent': {
        templateUrl: 'templates/tac.html',
       controller: 'tacCtrl'
      }
    }
  })
.state('app.theni', {
    url: '/theni',
    views: {
      'menuContent': {
        templateUrl: 'templates/theni.html',
       controller: 'theniCtrl'
      }
    }
  })
.state('app.tk', {
    url: '/tk',
    views: {
      'menuContent': {
        templateUrl: 'templates/tk.html',
       controller: 'tkCtrl'
      }
    }
  })
.state('app.sur', {
    url: '/sur',
    views: {
      'menuContent': {
        templateUrl: 'templates/sur.html',
       controller: 'surCtrl'
      }
    }
  })
.state('app.top', {
    url: '/top',
    views: {
      'menuContent': {
        templateUrl: 'templates/top.html',
       controller: 'topCtrl'
      }
    }
  })
.state('app.vai', {
    url: '/vai',
    views: {
      'menuContent': {
        templateUrl: 'templates/vai.html',
       controller: 'vaiCtrl'
      }
    }
  })
.state('app.kur', {
    url: '/kur',
    views: {
      'menuContent': {
        templateUrl: 'templates/kur.html',
       controller: 'kurCtrl'
      }
    }
  })
.state('app.man', {
    url: '/man',
    views: {
      'menuContent': {
        templateUrl: 'templates/man.html',
       controller: 'manCtrl'
      }
    }
  })
.state('app.fun', {
    url: '/fun',
    views: {
      'menuContent': {
        templateUrl: 'templates/fun.html',
       controller: 'funCtrl'
      }
    }
  })
.state('app.tir', {
    url: '/tir',
    views: {
      'menuContent': {
        templateUrl: 'templates/tir.html',
       controller: 'tirCtrl'
      }
    }
  })
.state('app.tpea', {
    url: '/tpea',
    views: {
      'menuContent': {
        templateUrl: 'templates/tpea.html',
       controller: 'tpeaCtrl'
      }
    }
  })
.state('app.meg', {
    url: '/meg',
    views: {
      'menuContent': {
        templateUrl: 'templates/meg.html',
       controller: 'megCtrl'
      }
    }
  })
.state('app.mew', {
    url: '/mew',
    views: {
      'menuContent': {
        templateUrl: 'templates/mew.html',
       controller: 'mewCtrl'
      }
    }
  })
.state('app.gt', {
    url: '/gt',
    views: {
      'menuContent': {
        templateUrl: 'templates/gt.html',
       controller: 'gtCtrl'
      }
    }
  })
.state('app.abt', {
    url: '/abt',
    views: {
      'menuContent': {
        templateUrl: 'templates/abt.html',
       controller: 'abtCtrl'
      }
    }
  })
.state('app.kum', {
    url: '/kum',
    views: {
      'menuContent': {
        templateUrl: 'templates/kum.html',
       controller: 'kumCtrl'
      }
    }
  })
.state('app.sot', {
    url: '/sot',
    views: {
      'menuContent': {
        templateUrl: 'templates/sot.html',
       controller: 'sotCtrl'
      }
    }
  })
.state('app.kai', {
    url: '/kai',
    views: {
      'menuContent': {
        templateUrl: 'templates/kai.html',
       controller: 'kaiCtrl'
      }
    }
  })
.state('app.vellore', {
    url: '/vellore',
    views: {
      'menuContent': {
        templateUrl: 'templates/vellore.html',
       controller: 'velloreCtrl'
      }
    }
  })
.state('app.vsgt', {
    url: '/vsgt',
    views: {
      'menuContent': {
        templateUrl: 'templates/vsgt.html',
       controller: 'vsgtCtrl'
      }
    }
  })
.state('app.vjt', {
    url: '/vjt',
    views: {
      'menuContent': {
        templateUrl: 'templates/vjt.html',
       controller: 'vjtCtrl'
      }
    }
  })
.state('app.vvf', {
    url: '/vvf',
    views: {
      'menuContent': {
        templateUrl: 'templates/vvf.html',
       controller: 'vvfCtrl'
      }
    }
  })
.state('app.vab', {
    url: '/vab',
    views: {
      'menuContent': {
        templateUrl: 'templates/vab.html',
       controller: 'vabCtrl'
      }
    }
  })

.state('app.vsy', {
    url: '/vsy',
    views: {
      'menuContent': {
        templateUrl: 'templates/vsy.html',
       controller: 'vsyCtrl'
      }
    }
  })

.state('app.vam', {
    url: '/vam',
    views: {
      'menuContent': {
        templateUrl: 'templates/vam.html',
       controller: 'vamCtrl'
      }
    }
  })
.state('app.vaz', {
    url: '/vaz',
    views: {
      'menuContent': {
        templateUrl: 'templates/vaz.html',
       controller: 'vazCtrl'
      }
    }
  })
.state('app.vpl', {
    url: '/vpl',
    views: {
      'menuContent': {
        templateUrl: 'templates/vpl.html',
       controller: 'vplCtrl'
      }
    }
  })
.state('app.vmm', {
    url: '/vmm',
    views: {
      'menuContent': {
        templateUrl: 'templates/vmm.html',
       controller: 'vmmCtrl'
      }
    }
  })
.state('app.vmt', {
    url: '/vmt',
    views: {
      'menuContent': {
        templateUrl: 'templates/vmt.html',
       controller: 'vmtCtrl'
      }
    }
  })
.state('app.vm', {
    url: '/vm',
    views: {
      'menuContent': {
        templateUrl: 'templates/vm.html',
       controller: 'vmCtrl'
      }
    }
  })

.state('app.vsj', {
    url: '/vsj',
    views: {
      'menuContent': {
        templateUrl: 'templates/vsj.html',
       controller: 'vsjCtrl'
      }
    }
  })

.state('app.share', {
    url: '/share',
    views: {
      'menuContent': {
        templateUrl: 'templates/share.html',
       controller: 'shareCtrl'
      }
    }
  })
.state('app.vilupuram', {
    url: '/vilupuram',
    views: {
      'menuContent': {
        templateUrl: 'templates/vilupuram.html',
       controller: 'vilupuramCtrl'
      }
    }
  })
.state('app.va', {
    url: '/va',
    views: {
      'menuContent': {
        templateUrl: 'templates/va.html',
       controller: 'vaCtrl'
      }
    }
  })
.state('app.vg', {
    url: '/vg',
    views: {
      'menuContent': {
        templateUrl: 'templates/vg.html',
       controller: 'vgCtrl'
      }
    }
  })
.state('app.vu', {
    url: '/vu',
    views: {
      'menuContent': {
        templateUrl: 'templates/vu.html',
       controller: 'vuCtrl'
      }
    }
  })
.state('app.vp', {
    url: '/vp',
    views: {
      'menuContent': {
        templateUrl: 'templates/vp.html',
       controller: 'vpCtrl'
      }
    }
  })
  .state('app.vl', {
    url: '/vl',
    views: {
      'menuContent': {
        templateUrl: 'templates/vl.html',
       controller: 'vlCtrl'
      }
    }
  })
  .state('app.vi', {
    url: '/vi',
    views: {
      'menuContent': {
        templateUrl: 'templates/vi.html',
       controller: 'viCtrl'
      }
    }
  })
  .state('app.vn', {
    url: '/vn',
    views: {
      'menuContent': {
        templateUrl: 'templates/vn.html',
       controller: 'vnCtrl'
      }
    }
  })
  .state('app.vb', {
    url: '/vb',
    views: {
      'menuContent': {
        templateUrl: 'templates/vb.html',
       controller: 'vbCtrl'
      }
    }
  })
  .state('app.virudhunagar', {
    url: '/virudhunagar',
    views: {
      'menuContent': {
        templateUrl: 'templates/virudhunagar.html',
       controller: 'virudhunagarCtrl'
      }
    }
  })
  .state('app.via', {
    url: '/via',
    views: {
      'menuContent': {
        templateUrl: 'templates/via.html',
       controller: 'viaCtrl'
      }
    }
  })
  .state('app.vim', {
    url: '/vim',
    views: {
      'menuContent': {
        templateUrl: 'templates/vim.html',
       controller: 'vimCtrl'
      }
    }
  })
  .state('app.vip', {
    url: '/vip',
    views: {
      'menuContent': {
        templateUrl: 'templates/vip.html',
       controller: 'vipCtrl'
      }
    }
  })
  .state('app.vik', {
    url: '/vik',
    views: {
      'menuContent': {
        templateUrl: 'templates/vik.html',
       controller: 'vikCtrl'
      }
    }
  })
  .state('app.vii', {
    url: '/vii',
    views: {
      'menuContent': {
        templateUrl: 'templates/vii.html',
       controller: 'viiCtrl'
      }
    }
  })
  .state('app.madurai', {
    url: '/madurai',
    views: {
      'menuContent': {
        templateUrl: 'templates/madurai.html',
       controller: 'maduraiCtrl'
      }
    }
  })
.state('app.mma', {
    url: '/mma',
    views: {
      'menuContent': {
        templateUrl: 'templates/mma.html',
       controller: 'mmaCtrl'
      }
    }
  })
.state('app.mtnm', {
    url: '/mtnm',
    views: {
      'menuContent': {
        templateUrl: 'templates/mtnm.html',
       controller: 'mtnmCtrl'
      }
    }
  })
.state('app.mmgm', {
    url: '/mmgm',
    views: {
      'menuContent': {
        templateUrl: 'templates/mmgm.html',
       controller: 'mmgmCtrl'
      }
    }
  })
.state('app.mkat', {
    url: '/mkat',
    views: {
      'menuContent': {
        templateUrl: 'templates/mkat.html',
       controller: 'mkatCtrl'
      }
    }
  })
.state('app.mvmt', {
    url: '/mvmt',
    views: {
      'menuContent': {
        templateUrl: 'templates/mvmt.html',
       controller: 'mvmtCtrl'
      }
    }
  })
.state('app.matp', {
    url: '/matp',
    views: {
      'menuContent': {
        templateUrl: 'templates/matp.html',
       controller: 'matpCtrl'
      }
    }
  })
.state('app.mtmt', {
    url: '/mtmt',
    views: {
      'menuContent': {
        templateUrl: 'templates/mtmt.html',
       controller: 'mtmtCtrl'
      }
    }
  })
.state('app.mmq', {
    url: '/mmq',
    views: {
      'menuContent': {
        templateUrl: 'templates/mmq.html',
       controller: 'mmqCtrl'
      }
    }
  })
.state('app.mpk', {
    url: '/mpk',
    views: {
      'menuContent': {
        templateUrl: 'templates/mpk.html',
       controller: 'mpkCtrl'
      }
    }
  })
.state('app.mrp', {
    url: '/mrp',
    views: {
      'menuContent': {
        templateUrl: 'templates/mrp.html',
       controller: 'mrpCtrl'
      }
    }
  })
.state('app.mpm', {
    url: '/mpm',
    views: {
      'menuContent': {
        templateUrl: 'templates/mpm.html',
       controller: 'mpmCtrl'
      }
    }
  })
.state('app.mvt', {
    url: '/mvt',
    views: {
      'menuContent': {
        templateUrl: 'templates/mvt.html',
       controller: 'mvtCtrl'
      }
    }
  })
.state('app.mcep', {
    url: '/mcep',
    views: {
      'menuContent': {
        templateUrl: 'templates/mcep.html',
       controller: 'mcepCtrl'
      }
    }
  })
.state('app.msmc', {
    url: '/msmc',
    views: {
      'menuContent': {
        templateUrl: 'templates/msmc.html',
       controller: 'msmcCtrl'
      }
    }
  })
.state('app.mmgr', {
    url: '/mmgr',
    views: {
      'menuContent': {
        templateUrl: 'templates/mmgr.html',
       controller: 'mmgrCtrl'
      }
    }
  })
.state('app.mkp', {
    url: '/mkp',
    views: {
      'menuContent': {
        templateUrl: 'templates/mkp.html',
       controller: 'mkpCtrl'
      }
    }
  })
.state('app.msmg', {
    url: '/msmg',
    views: {
      'menuContent': {
        templateUrl: 'templates/msmg.html',
       controller: 'msmgCtrl'
      }
    }
  })
.state('app.myk', {
    url: '/myk',
    views: {
      'menuContent': {
        templateUrl: 'templates/myk.html',
       controller: 'mykCtrl'
      }
    }
  })
.state('app.mapk', {
    url: '/mapk',
    views: {
      'menuContent': {
        templateUrl: 'templates/mapk.html',
       controller: 'mapkCtrl'
      }
    }
  })
.state('app.mvd', {
    url: '/mvd',
    views: {
      'menuContent': {
        templateUrl: 'templates/mvd.html',
       controller: 'mvdCtrl'
      }
    }
  })
.state('app.mkt', {
    url: '/mkt',
    views: {
      'menuContent': {
        templateUrl: 'templates/mkt.html',
       controller: 'mktCtrl'
      }
    }
  })
.state('app.msh', {
    url: '/msh',
    views: {
      'menuContent': {
        templateUrl: 'templates/msh.html',
       controller: 'mshCtrl'
      }
    }
  })
.state('app.mic', {
    url: '/mic',
    views: {
      'menuContent': {
        templateUrl: 'templates/mic.html',
       controller: 'micCtrl'
      }
    }
  })
.state('app.mgd', {
    url: '/mgd',
    views: {
      'menuContent': {
        templateUrl: 'templates/mgd.html',
       controller: 'mgdCtrl'
      }
    }
  })
.state('app.macri', {
    url: '/macri',
    views: {
      'menuContent': {
        templateUrl: 'templates/macri.html',
       controller: 'macriCtrl'
      }
    }
  })
.state('app.mkf', {
    url: '/mkf',
    views: {
      'menuContent': {
        templateUrl: 'templates/mkf.html',
       controller: 'mkfCtrl'
      }
    }
  })

.state('app.msrm', {
    url: '/msrm',
    views: {
      'menuContent': {
        templateUrl: 'templates/msrm.html',
       controller: 'msrmCtrl'
      }
    }
  })
.state('app.mast', {
    url: '/mast',
    views: {
      'menuContent': {
        templateUrl: 'templates/mast.html',
       controller: 'mastCtrl'
      }
    }
  })
.state('app.mitt', {
    url: '/mitt',
    views: {
      'menuContent': {
        templateUrl: 'templates/mitt.html',
       controller: 'mittCtrl'
      }
    }
  })
.state('app.gm', {
    url: '/gm',
    views: {
      'menuContent': {
        templateUrl: 'templates/gm.html',
       controller: 'gmCtrl'
      }
    }
  })
.state('app.mbm', {
    url: '/mbm',
    views: {
      'menuContent': {
        templateUrl: 'templates/mbm.html',
       controller: 'mbmCtrl'
      }
    }
  })
.state('app.mvm', {
    url: '/mvm',
    views: {
      'menuContent': {
        templateUrl: 'templates/mvm.html',
       controller: 'mvmCtrl'
      }
    }
  })
.state('app.mmm', {
    url: '/mmm',
    views: {
      'menuContent': {
        templateUrl: 'templates/mmm.html',
       controller: 'mmmCtrl'
      }
    }
  })
.state('app.udagamandalam', {
    url: '/udagamandalam',
    views: {
      'menuContent': {
        templateUrl: 'templates/udagamandalam.html',
       controller: 'udagamandalamCtrl'
      }
    }
  })
.state('app.onr', {
    url: '/onr',
    views: {
      'menuContent': {
        templateUrl: 'templates/onr.html',
       controller: 'onrCtrl'
      }
    }
  })
.state('app.obg', {
    url: '/obg',
    views: {
      'menuContent': {
        templateUrl: 'templates/obg.html',
       controller: 'obgCtrl'
      }
    }
  })
.state('app.opl', {
    url: '/opl',
    views: {
      'menuContent': {
        templateUrl: 'templates/opl.html',
       controller: 'oplCtrl'
      }
    }
  })
.state('app.odp', {
    url: '/odp',
    views: {
      'menuContent': {
        templateUrl: 'templates/odp.html',
       controller: 'odpCtrl'
      }
    }
  })
.state('app.oal', {
    url: '/oal',
    views: {
      'menuContent': {
        templateUrl: 'templates/oal.html',
       controller: 'oalCtrl'
      }
    }
  })
.state('app.org', {
    url: '/org',
    views: {
      'menuContent': {
        templateUrl: 'templates/org.html',
       controller: 'orgCtrl'
      }
    }
  })
.state('app.oubl', {
    url: '/oubl',
    views: {
      'menuContent': {
        templateUrl: 'templates/oubl.html',
       controller: 'oublCtrl'
      }
    }
  })
.state('app.osp', {
    url: '/osp',
    views: {
      'menuContent': {
        templateUrl: 'templates/osp.html',
       controller: 'ospCtrl'
      }
    }
  })
.state('app.ool', {
    url: '/ool',
    views: {
      'menuContent': {
        templateUrl: 'templates/ool.html',
       controller: 'oolCtrl'
      }
    }
  })
.state('app.osc', {
    url: '/osc',
    views: {
      'menuContent': {
        templateUrl: 'templates/osc.html',
       controller: 'oscCtrl'
      }
    }
  })
.state('app.oel', {
    url: '/oel',
    views: {
      'menuContent': {
        templateUrl: 'templates/oel.html',
       controller: 'oelCtrl'
      }
    }
  })
.state('app.otw', {
    url: '/otw',
    views: {
      'menuContent': {
        templateUrl: 'templates/otw.html',
       controller: 'otwCtrl'
      }
    }
  })
.state('app.okv', {
    url: '/okv',
    views: {
      'menuContent': {
        templateUrl: 'templates/okv.html',
       controller: 'okvCtrl'
      }
    }
  })
.state('app.otg', {
    url: '/otg',
    views: {
      'menuContent': {
        templateUrl: 'templates/otg.html',
       controller: 'otgCtrl'
      }
    }
  })
.state('app.omt', {
    url: '/omt',
    views: {
      'menuContent': {
        templateUrl: 'templates/omt.html',
       controller: 'omtCtrl'
      }
    }
  })
.state('app.omb', {
    url: '/omb',
    views: {
      'menuContent': {
        templateUrl: 'templates/omb.html',
       controller: 'ombCtrl'
      }
    }
  })
.state('app.oeh', {
    url: '/oeh',
    views: {
      'menuContent': {
        templateUrl: 'templates/oeh.html',
       controller: 'oehCtrl'
      }
    }
  })
.state('app.och', {
    url: '/och',
    views: {
      'menuContent': {
        templateUrl: 'templates/och.html',
       controller: 'ochCtrl'
      }
    }
  })
.state('app.olc', {
    url: '/olc',
    views: {
      'menuContent': {
        templateUrl: 'templates/olc.html',
       controller: 'olcCtrl'
      }
    }
  })
.state('app.owm', {
    url: '/owm',
    views: {
      'menuContent': {
        templateUrl: 'templates/owm.html',
       controller: 'owmCtrl'
      }
    }
  })
.state('app.owc', {
    url: '/owc',
    views: {
      'menuContent': {
        templateUrl: 'templates/owc.html',
       controller: 'owcCtrl'
      }
    }
  })
.state('app.oml', {
    url: '/oml',
    views: {
      'menuContent': {
        templateUrl: 'templates/oml.html',
       controller: 'omlCtrl'
      }
    }
  })
.state('app.oamt', {
    url: '/oamt',
    views: {
      'menuContent': {
        templateUrl: 'templates/oamt.html',
       controller: 'oamtCtrl'
      }
    }
  })
.state('app.ohtc', {
    url: '/ohtc',
    views: {
      'menuContent': {
        templateUrl: 'templates/ohtc.html',
       controller: 'ohtcCtrl'
      }
    }
  })
.state('app.olp', {
    url: '/olp',
    views: {
      'menuContent': {
        templateUrl: 'templates/olp.html',
       controller: 'olpCtrl'
      }
    }
  })
.state('app.otrc', {
    url: '/otrc',
    views: {
      'menuContent': {
        templateUrl: 'templates/otrc.html',
       controller: 'otrcCtrl'
      }
    }
  })
.state('app.okcc', {
    url: '/okcc',
    views: {
      'menuContent': {
        templateUrl: 'templates/okcc.html',
       controller: 'okccCtrl'
      }
    }
  })
.state('app.orb', {
    url: '/orb',
    views: {
      'menuContent': {
        templateUrl: 'templates/orb.html',
       controller: 'orbCtrl'
      }
    }
  })
.state('app.obv', {
    url: '/obv',
    views: {
      'menuContent': {
        templateUrl: 'templates/obv.html',
       controller: 'obvCtrl'
      }
    }
  })
.state('app.omp', {
    url: '/omp',
    views: {
      'menuContent': {
        templateUrl: 'templates/omp.html',
       controller: 'ompCtrl'
      }
    }
  })
.state('app.ohv', {
    url: '/ohv',
    views: {
      'menuContent': {
        templateUrl: 'templates/ohv.html',
       controller: 'ohvCtrl'
      }
    }
  })
.state('app.onl', {
    url: '/onl',
    views: {
      'menuContent': {
        templateUrl: 'templates/onl.html',
       controller: 'onlCtrl'
      }
    }
  })
.state('app.ouc', {
    url: '/ouc',
    views: {
      'menuContent': {
        templateUrl: 'templates/ouc.html',
       controller: 'oucCtrl'
      }
    }
  })
.state('app.oap', {
    url: '/oap',
    views: {
      'menuContent': {
        templateUrl: 'templates/oap.html',
       controller: 'oapCtrl'
      }
    }
  })
.state('app.obl', {
    url: '/obl',
    views: {
      'menuContent': {
        templateUrl: 'templates/obl.html',
       controller: 'oblCtrl'
      }
    }
  })
.state('app.ohpf', {
    url: '/ohpf',
    views: {
      'menuContent': {
        templateUrl: 'templates/ohpf.html',
       controller: 'ohpfCtrl'
      }
    }
  })
.state('app.oav', {
    url: '/oav',
    views: {
      'menuContent': {
        templateUrl: 'templates/oav.html',
       controller: 'oavCtrl'
      }
    }
  })
.state('app.ort', {
    url: '/ort',
    views: {
      'menuContent': {
        templateUrl: 'templates/ort.html',
       controller: 'ortCtrl'
      }
    }
  })
.state('app.ojp', {
    url: '/ojp',
    views: {
      'menuContent': {
        templateUrl: 'templates/ojp.html',
       controller: 'ojpCtrl'
      }
    }
  })
.state('app.tiruchirapalli', {
    url: '/tiruchirapalli',
    views: {
      'menuContent': {
        templateUrl: 'templates/tiruchirapalli.html',
       controller: 'tiruchirapalliCtrl'
      }
    }
  })
.state('app.tris', {
    url: '/tris',
    views: {
      'menuContent': {
        templateUrl: 'templates/tris.html',
       controller: 'trisCtrl'
      }
    }
  })
.state('app.tup', {
    url: '/tup',
    views: {
      'menuContent': {
        templateUrl: 'templates/tup.html',
       controller: 'tupCtrl'
      }
    }
  })
.state('app.trf', {
    url: '/trf',
    views: {
      'menuContent': {
        templateUrl: 'templates/trf.html',
       controller: 'trfCtrl'
      }
    }
  })
.state('app.tkd', {
    url: '/tkd',
    views: {
      'menuContent': {
        templateUrl: 'templates/tkd.html',
       controller: 'tkdCtrl'
      }
    }
  })
.state('app.tsi', {
    url: '/tsi',
    views: {
      'menuContent': {
        templateUrl: 'templates/tsi.html',
       controller: 'tsiCtrl'
      }
    }
  })
.state('app.tjt', {
    url: '/tjt',
    views: {
      'menuContent': {
        templateUrl: 'templates/tjt.html',
       controller: 'tjtCtrl'
      }
    }
  })
.state('app.ttk', {
    url: '/ttk',
    views: {
      'menuContent': {
        templateUrl: 'templates/ttk.html',
       controller: 'ttkCtrl'
      }
    }
  })
.state('app.tayt', {
    url: '/tayt',
    views: {
      'menuContent': {
        templateUrl: 'templates/tayt.html',
       controller: 'taytCtrl'
      }
    }
  })
.state('app.takm', {
    url: '/takm',
    views: {
      'menuContent': {
        templateUrl: 'templates/takm.html',
       controller: 'takmCtrl'
      }
    }
  })
.state('app.trmd', {
    url: '/trmd',
    views: {
      'menuContent': {
        templateUrl: 'templates/trmd.html',
       controller: 'trmdCtrl'
      }
    }
  })
.state('app.tfm', {
    url: '/tfm',
    views: {
      'menuContent': {
        templateUrl: 'templates/tfm.html',
       controller: 'tfmCtrl'
      }
    }
  })
.state('app.trim', {
    url: '/trim',
    views: {
      'menuContent': {
        templateUrl: 'templates/trim.html',
       controller: 'trimCtrl'
      }
    }
  })
.state('app.tpf', {
    url: '/tpf',
    views: {
      'menuContent': {
        templateUrl: 'templates/tpf.html',
       controller: 'tpfCtrl'
      }
    }
  })
.state('app.tbp', {
    url: '/tbp',
    views: {
      'menuContent': {
        templateUrl: 'templates/tbp.html',
       controller: 'tbpCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/first');
});
