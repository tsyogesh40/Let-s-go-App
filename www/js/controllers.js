angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
/*
.controller('homeCtrl', function($scope,$state) {
     $scope.start = function() {
    $state.go('app.play');
  }
})
.controller('PlayCtrl', function($scope,$state) {
     $scope.onClick = function() {
    $state.go('app.register');
  }
  $scope.onClick1 = function(){
    $scope.uname = this.uname;
    $scope.password = this.password;
    if($scope.uname == null && $scope.password == null)
    {
     alert("Invalid Username or Password");
       
    }
    else
    {
       $state.go('app.booking');
    }
  }                                         
})
.controller('RegCtrl', function($scope,$state,$http){

     
      //$http.get('http://jsonplaceholder.typicode.com/posts/1').
      //then(function(response){
       // $scope.fan=response.data;
        //$scope.title=$scope.fan.title;
        //console.log("Title:" +$scope.fan.title);
 
      //a})-->
      $scope.onClick5 = function() {
     $state.go('app.booking');
  }

$scope.onClick5 = function(){
    $scope.name = this.name;
    $scope.usname = this.usname;
     $scope.eid = this.eid;
    $scope.pwd = this.pwd;
     $scope.cpwd = this.cpwd;
    if($scope.name == null || $scope.usname == null || $scope.eid == null || $scope.pwd == null || $scope.cpwd== null)
    {
     alert("You must fill all fields");
       
    }
    else
    {
       $state.go('app.booking');
    }
  }
})*/
.controller('firstCtrl', function($scope,$state) {
     $scope.onclick = function() {
    $state.go('app.district');
  }
})
.controller('districtCtrl', function($scope,$state) {
     $scope.ariyalur = function() {
    $state.go('app.ariyalur');
  }
   $scope.chennai = function() {
    $state.go('app.chennai');
  }
   $scope.coimbatore = function() {
    $state.go('app.coimbatore');
  }
   $scope.cuddalore = function() {
    $state.go('app.cuddalore');
  }
   $scope.dharmapuri = function() {
    $state.go('app.dharmapuri');
  }
   $scope.dindigul = function() {
    $state.go('app.dindigul');
  }
   $scope.erode = function() {
    $state.go('app.erode');
  }
   $scope.kanchipuram = function() {
    $state.go('app.kanchipuram');
  }
 $scope.kanniyakumari = function() {
    $state.go('app.kanniyakumari');
  }
   $scope.karur= function() {
    $state.go('app.karur');
  }
   $scope.krishnagiri = function() {
    $state.go('app.krishnagiri');
  }
   $scope.madurai = function() {
    $state.go('app.madurai');
  }
   $scope.nagapattinam = function() {
    $state.go('app.nagapattinam');
  }
   $scope.namakkal = function() {
    $state.go('app.namakkal');
  }
   $scope.perambalur = function() {
    $state.go('app.perambalur');
  }
   $scope.pudukottai = function() {
    $state.go('app.pudukottai');
  }
   $scope.ramanadhapuram = function() {
    $state.go('app.ramanadhapuram');
  }
   $scope.selam = function() {
    $state.go('app.selam');
  }
   $scope.sivagangai = function() {
    $state.go('app.sivagangai');
  }
   $scope.thanjavur = function() {
    $state.go('app.thanjavur');
  }
   $scope.theni = function() {
    $state.go('app.theni');
  }
   $scope.thiruvallur = function() {
    $state.go('app.thiruvallur');
  }
   $scope.thiruvarur = function() {
    $state.go('app.thiruvarur');
  }
   $scope.thoothukudi = function() {
    $state.go('app.thoothukudi');
  }
   $scope.tiruchirapalli = function() {
    $state.go('app.tiruchirapalli');
  }
   $scope.thirunelveli = function() {
    $state.go('app.thirunelveli');
  }
   $scope.tiruppur = function() {
    $state.go('app.tiruppur');
  }
   $scope.tiruvannamalai = function() {
    $state.go('app.tiruvannamalai');
  }
   $scope.udagamandalam = function() {
    $state.go('app.udagamandalam');
  }
   $scope.vellore = function() {
    $state.go('app.vellore');
  }
   $scope.vilupuram = function() {
    $state.go('app.vilupuram');
  }
   $scope.virudhunagar = function() {
    $state.go('app.virudhunagar');
  }
})
.controller('ariyalurCtrl', function($scope,$state) {
     $scope.ssk = function() {
    $state.go('app.ssk');
  }
   $scope.skt = function() {
    $state.go('app.skt');
  }
   $scope.mk = function() {
    $state.go('app.mk');
  }
   $scope.gkc= function() {
    $state.go('app.gkc');
  }
   $scope.ak= function() {
    $state.go('app.ak');
  }
   $scope.skv = function() {
    $state.go('app.skv');
  } 
  $scope.eam = function() {
    $state.go('app.eam');
  }
   $scope.vkl = function() {
    $state.go('app.vkl');
  }
})
.controller('sskCtrl', function($scope,$state) {

})
    .controller('sktCtrl', function($scope,$state) {

}
  ) 
   .controller('mkCtrl', function($scope,$state) {

})
   
   .controller('gkcCtrl', function($scope,$state) {

})
   
   .controller('akCtrl', function($scope,$state) {

})
   
   .controller('skvCtrl', function($scope,$state) {

})
   
   .controller('eamCtrl', function($scope,$state) {

})
   
   .controller('vklCtrl', function($scope,$state) {

})
   .controller('chennaiCtrl', function($scope,$state) {
     $scope.cvp = function() {
    $state.go('app.cvp');
  }
   $scope.ckp = function() {
    $state.go('app.ckp');
  }
   $scope.cmb = function() {
    $state.go('app.cmb');
  }
   $scope.ccb= function() {
    $state.go('app.ccb');
  }
   $scope.ceb= function() {
    $state.go('app.ceb');
  }
   $scope.cfg= function() {
    $state.go('app.cfg');
  } 
 $scope.cst = function() {
    $state.go('app.cst');
  }
   $scope.cpt = function() {
    $state.go('app.cpt');
  }
  $scope.clm = function() {
    $state.go('app.clm');
  }

$scope.ccmk = function() {
    $state.go('app.ccmk');
  }

$scope.cmbp = function() {
    $state.go('app.cmbp');
  }

$scope.cctm = function() {
    $state.go('app.cctm');
  }
  $scope.csmp = function() {
    $state.go('app.csmp');
  }
  $scope.cmgm = function() {
    $state.go('app.cmgm');
  }
  $scope.cds = function() {
    $state.go('app.cds');
  }
  $scope.cpc = function() {
    $state.go('app.cpc');
  }
  $scope.csd = function() {
    $state.go('app.csd');
  }

$scope.cvs = function() {
    $state.go('app.cvs');
  }
  $scope.cnbs = function() {
    $state.go('app.cnbs');
  }
  $scope.cmh = function() {
    $state.go('app.cmh');
  }
  $scope.cuw = function() {
    $state.go('app.cuw');
  }
   $scope.cpm = function() {
    $state.go('app.cpm');
  }
   $scope.cna = function() {
    $state.go('app.cna');
  }
   $scope.ccp = function() {
    $state.go('app.ccp');
  }
   $scope.crm = function() {
    $state.go('app.crm');
  }
  
})
   .controller('cvpCtrl', function($scope,$state) {

})
    .controller('ckpCtrl', function($scope,$state) {

})
     .controller('cmbCtrl', function($scope,$state) {

})
     .controller('ccbCtrl', function($scope,$state) {

})
     .controller('cebCtrl', function($scope,$state) {

})
      .controller('cfgCtrl', function($scope,$state) {

})
       .controller('cstCtrl', function($scope,$state) {

})
       .controller('cptCtrl', function($scope,$state) {

})
.controller('clmCtrl', function($scope,$state) {

})
.controller('ccmkCtrl', function($scope,$state) {

})
.controller('cmbpCtrl', function($scope,$state) {

})
.controller('cctmCtrl', function($scope,$state) {

})
.controller('csmpCtrl', function($scope,$state) {

})
.controller('cmgmCtrl', function($scope,$state) {

})
.controller('cdsCtrl', function($scope,$state) {

})
.controller('cpcCtrl', function($scope,$state) {
})
.controller('csdCtrl', function($scope,$state) {
})
.controller('cvsCtrl', function($scope,$state) {
})

.controller('cnbsCtrl', function($scope,$state) {
})
.controller('cmhCtrl', function($scope,$state) {
})
.controller('cuwCtrl', function($scope,$state) {
})
.controller('cpmCtrl', function($scope,$state) {
})
.controller('cnaCtrl', function($scope,$state) {
})
.controller('ccpCtrl', function($scope,$state) {
})
.controller('crmCtrl', function($scope,$state) {
})


 .controller('coimbatoreCtrl', function($scope,$state) {
     $scope.mat = function() {
    $state.go('app.mat');
  }
   $scope.cdt = function() {
    $state.go('app.cdt');
  }
   $scope.cbm = function() {
    $state.go('app.cbm');
  }
   $scope.cap = function() {
    $state.go('app.cap');
  }
   $scope.cet = function() {
    $state.go('app.cet');
  }
   $scope.cct = function() {
    $state.go('app.cct');
  }
   $scope.cwt = function() {
    $state.go('app.cwt');
  }
   $scope.cgt = function() {
    $state.go('app.cgt');
  }
   $scope.cbt = function() {
    $state.go('app.cbt');
  }
  $scope.cvt = function() {
    $state.go('app.cvt');
  }
   $scope.cmt = function() {
    $state.go('app.cmt');
  }
   $scope.cmtt = function() {
    $state.go('app.cmtt');
  }
   $scope.cat = function() {
    $state.go('app.cat');
  }
   $scope.cft = function() {
    $state.go('app.cft');
  }
   $scope.cit = function() {
    $state.go('app.cit');
  }
   $scope.ckt = function() {
    $state.go('app.ckt');
  }
   $scope.csrt = function() {
    $state.go('app.csrt');

  
  }
   $scope.cadt = function() {
    $state.go('app.cadt');

  
  }
   $scope.cnt = function() {
    $state.go('app.cnt');

  
  }
   $scope.ckd = function() {
    $state.go('app.ckd');

  
  }
   $scope.cbvt = function() {
    $state.go('app.cbvt');

  
  }
   $scope.cmwt = function() {
    $state.go('app.cmwt');

  
  }
   $scope.ckkt = function() {
    $state.go('app.ckkt');

  
  }
  $scope.cad = function() {
    $state.go('app.cad');

  
  }
  $scope.cspt = function() {
    $state.go('app.cspt');

  }
  })

  .controller('matCtrl', function($scope,$state) {
})
  .controller('cdtCtrl', function($scope,$state) {
})
   .controller('cbmCtrl', function($scope,$state) {
})
   .controller('capCtrl', function($scope,$state) {
})
   .controller('cetCtrl', function($scope,$state) {
})
   .controller('cctCtrl', function($scope,$state) {
})
   .controller('cwtCtrl', function($scope,$state) {
})
    .controller('cgtCtrl', function($scope,$state) {
})
    .controller('cbtCtrl', function($scope,$state) {
})
     .controller('cvtCtrl', function($scope,$state) {
})
       .controller('cmtCtrl', function($scope,$state) {
})
         .controller('cmttCtrl', function($scope,$state) {
})
         .controller('catCtrl', function($scope,$state) {
})
          .controller('cftCtrl', function($scope,$state) {
})
           .controller('citCtrl', function($scope,$state) {
})
           .controller('cktCtrl', function($scope,$state) {
})
           .controller('csrtCtrl', function($scope,$state) {
})
             .controller('cadtCtrl', function($scope,$state) {
})
               .controller('cntCtrl', function($scope,$state) {
})
                .controller('ckdCtrl', function($scope,$state) {
})
                   .controller('cbvtCtrl', function($scope,$state) {
})
                     .controller('cmwtCtrl', function($scope,$state) {
})
                     .controller('ckktCtrl', function($scope,$state) {
})
                     .controller('cadCtrl', function($scope,$state) {
})
                      .controller('csptCtrl', function($scope,$state) {
})

                     




                      .controller('cuddaloreCtrl', function($scope,$state) {
     $scope.dt = function() {
    $state.go('app.dt');
  }
   $scope.pt = function() {
    $state.go('app.pt');
  }
  $scope.sb = function() {
    $state.go('app.sb');
  }
   $scope.bst = function() {
    $state.go('app.bst');
  }
  $scope.vt = function() {
    $state.go('app.vt');
  }
  $scope.lt = function() {
    $state.go('app.lt');
  }
   $scope.vlt = function() {
    $state.go('app.vlt');
  }
})
                      .controller('dtCtrl', function($scope,$state) {
})
                       .controller('ptCtrl', function($scope,$state) {
})
                        .controller('sbCtrl', function($scope,$state) {
})
                         .controller('bstCtrl', function($scope,$state) {
})
                          .controller('vtCtrl', function($scope,$state) {
})
                           .controller('ltCtrl', function($scope,$state) {
})
                           .controller('vltCtrl', function($scope,$state) {
})



    .controller('dharmapuriCtrl', function($scope,$state) {
     $scope.dh = function() {
    $state.go('app.dh');
  }
   $scope.ds = function() {
    $state.go('app.ds');
  }
  $scope.dc = function() {
    $state.go('app.dc');
  }
   $scope.dm = function() {
    $state.go('app.dm');
  }
 
})
     .controller('dhCtrl', function($scope,$state) {
})
      .controller('dsCtrl', function($scope,$state) {
})
       .controller('dcCtrl', function($scope,$state) {
})
       .controller('dmCtrl', function($scope,$state) {
})

        .controller('pudukottaiCtrl', function($scope,$state) {
     $scope.ps = function() {
    $state.go('app.ps');
  }
   $scope.ptf = function() {
    $state.go('app.ptf');
  }
  $scope.pb = function() {
    $state.go('app.pb');
  }
   $scope.pa = function() {
   $state.go('app.pa');
  }
   $scope.pk = function() {
   $state.go('app.pk');
  }
  $scope.pst = function() {
   $state.go('app.pst');
  }
  $scope.pat = function() {
   $state.go('app.pat');
  }
 

})


          .controller('psCtrl', function($scope,$state) {
})
          .controller('ptfCtrl', function($scope,$state) {
})
          .controller('pbCtrl', function($scope,$state) {
})
          .controller('paCtrl', function($scope,$state) {
})
          .controller('pkCtrl', function($scope,$state) {
})
           .controller('pstCtrl', function($scope,$state) {
})
            .controller('patCtrl', function($scope,$state) {
})
            .controller('ramanadhapuramCtrl', function($scope,$state) {
     $scope.rm = function() {
    $state.go('app.rm');
  }
   $scope.rk = function() {
    $state.go('app.rk');
  }
  $scope.rmp = function() {
    $state.go('app.rmp');
  }
   $scope.rff = function() {
   $state.go('app.rff');
  }
  $scope.rv = function() {
   $state.go('app.rv');
  }
 $scope.rt = function() {
  $state.go('app.rt');
  }
  $scope.rd = function() {
   $state.go('app.rd');
  }
   $scope.rig = function() {
   $state.go('app.rig');
  }
 

})

            .controller('rmCtrl', function($scope,$state) {
})
            .controller('rkCtrl', function($scope,$state) {
})
             .controller('rmpCtrl', function($scope,$state) {
})
              .controller('rffCtrl', function($scope,$state) {
})
              .controller('rvCtrl', function($scope,$state) {
})
               .controller('rtCtrl', function($scope,$state) {
})
                .controller('rdCtrl', function($scope,$state) {
})
           .controller('rigCtrl', function($scope,$state) {
})

           .controller('selamCtrl', function($scope,$state) {
     $scope.sy = function() {
    $state.go('app.sy');
  }
   $scope.sl = function() {
    $state.go('app.sl');
  }
  $scope.smd = function() {
    $state.go('app.smd');
  }
   $scope.ss = function() {
   $state.go('app.ss');
  }
  $scope.si = function() {
   $state.go('app.si');
  }
 $scope.sst = function() {
  $state.go('app.sst');
  }
 $scope.skz = function() {
   $state.go('app.skz');
  }
   $scope.sg = function() {
   $state.go('app.sg');
  }
   $scope.sf = function() {
   $state.go('app.sf');
  }
   $scope.sr = function() {
   $state.go('app.sr');
  }
   $scope.se = function() {
   $state.go('app.se');
  }
   $scope.spk = function() {
   $state.go('app.spk');
  }
  $scope.spu = function() {
   $state.go('app.spu');
  }
 

})

            .controller('syCtrl', function($scope,$state) {
})
            .controller('slCtrl', function($scope,$state) {
})
             .controller('smdCtrl', function($scope,$state) {
})
              .controller('ssCtrl', function($scope,$state) {
})
               .controller('siCtrl', function($scope,$state) {
})
               .controller('sstCtrl', function($scope,$state) {
})
               .controller('skzCtrl', function($scope,$state) {
})
               .controller('sgCtrl', function($scope,$state) {
})
               .controller('sfCtrl', function($scope,$state) {
})
                .controller('srCtrl', function($scope,$state) {
})
                .controller('seCtrl', function($scope,$state) {
})
                .controller('spkCtrl', function($scope,$state) {
})
                 .controller('spuCtrl', function($scope,$state) {
})


                 .controller('sivagangaiCtrl', function($scope,$state) {
     $scope.pil = function() {
    $state.go('app.pil');
  }
  $scope.ath = function() {
    $state.go('app.ath');
  }
  $scope.kkt = function() {
    $state.go('app.kkt');
  }
  $scope.ccl = function() {
    $state.go('app.ccl');
  }
})

        .controller('pilCtrl', function($scope,$state) {
})
        .controller('athCtrl', function($scope,$state) {
})
        .controller('kktCtrl', function($scope,$state) {
})
        .controller('cclCtrl', function($scope,$state) {
})


 .controller('thanjavurCtrl', function($scope,$state) {
     $scope.tbt = function() {
    $state.go('app.tbt');
  }
  $scope.tgc = function() {
    $state.go('app.tgc');
  }
  $scope.ssm = function() {
    $state.go('app.ssm');
  }
  $scope.smt = function() {
    $state.go('app.smt');
  }
  $scope.trp = function() {
    $state.go('app.trp');
  }
  $scope.tat = function() {
    $state.go('app.tat');
  }
    $scope.ts = function() {
    $state.go('app.ts');
  }
   $scope.tsm = function() {
    $state.go('app.tsm');
  }
  $scope.tmf = function() {
    $state.go('app.tmf');
  }
})
     .controller('tbtCtrl', function($scope,$state) {
})
      .controller('tgcCtrl', function($scope,$state) {
})
      .controller('ssmCtrl', function($scope,$state) {
})
      .controller('smtCtrl', function($scope,$state) {
})
      .controller('trpCtrl', function($scope,$state) {
})
      .controller('tatCtrl', function($scope,$state) {
})
       .controller('tsCtrl', function($scope,$state) {
})
       .controller('tsmCtrl', function($scope,$state) {
})
        .controller('tmfCtrl', function($scope,$state) {
})


        .controller('dindigulCtrl', function($scope,$state) {
     $scope.dsc = function() {
    $state.go('app.dsc');
  }
  $scope.dtp = function() {
    $state.go('app.dtp');
  }
  $scope.dsr = function() {
    $state.go('app.dsr');
  }
  $scope.ddf = function() {
    $state.go('app.ddf');
  }
  $scope.dk = function() {
    $state.go('app.dk');
  }
  $scope.dsk = function() {
    $state.go('app.dsk');
  }
   $scope.dav = function() {
    $state.go('app.dav');
  }
   $scope.dks = function() {
    $state.go('app.dks');
  }
  $scope.dtf = function() {
    $state.go('app.dtf');
  }
   $scope.dmp = function() {
    $state.go('app.dmp');
  }
   $scope.dgv = function() {
    $state.go('app.dgv');
  }
  $scope.dmm = function() {
    $state.go('app.dmm');
  }
  $scope.dp = function() {
    $state.go('app.dp');
  }
  $scope.dat = function() {
    $state.go('app.dat');
  }
   $scope.dmd = function() {
    $state.go('app.dmd');
  }
   $scope.dst = function() {
    $state.go('app.dst');
  }
   $scope.dhl = function() {
    $state.go('app.dhl');
  }
  $scope.db = function() {
    $state.go('app.db');
  }
   $scope.dbb = function() {
    $state.go('app.dbb');
  }
})
        .controller('dscCtrl', function($scope,$state) {
})
        .controller('dtpCtrl', function($scope,$state) {
})
        .controller('dsrCtrl', function($scope,$state) {
})
        .controller('ddfCtrl', function($scope,$state) {
})
        .controller('dkCtrl', function($scope,$state) {
})
        .controller('dskCtrl', function($scope,$state) {
})

        .controller('davCtrl', function($scope,$state) {
})
         .controller('dksCtrl', function($scope,$state) {
})
         .controller('dtfCtrl', function($scope,$state) {
})
          .controller('dmpCtrl', function($scope,$state) {
})
           .controller('dgvCtrl', function($scope,$state) {
})
            .controller('dmmCtrl', function($scope,$state) {
})
              .controller('dpCtrl', function($scope,$state) {
})
              .controller('datCtrl', function($scope,$state) {
})
              .controller('dmdCtrl', function($scope,$state) {
})
               .controller('dstCtrl', function($scope,$state) {
})
               .controller('dhlCtrl', function($scope,$state) {
})
               .controller('dbCtrl', function($scope,$state) {
})
               .controller('dbbCtrl', function($scope,$state) {
})
 

 .controller('erodeCtrl', function($scope,$state) {
     $scope.edt = function() {
    $state.go('app.edt');
  }
   $scope.ecm = function() {
    $state.go('app.ecm');
  }
   $scope.evb = function() {
    $state.go('app.evb');
  }
  $scope.est = function() {
    $state.go('app.est');
  }
  $scope.ebc = function() {
    $state.go('app.ebc');
  }
  $scope.ekt = function() {
    $state.go('app.ekt');
  }
  $scope.esa = function() {
    $state.go('app.esa');
  }
  $scope.eak = function() {
    $state.go('app.eak');
  }
  $scope.ep = function() {
    $state.go('app.ep');
  }
  $scope.eb = function() {
    $state.go('app.eb');
  }
  $scope.em = function() {
    $state.go('app.em');
  }
   $scope.ek = function() {
    $state.go('app.ek');
  }
  $scope.eko = function() {
    $state.go('app.eko');
  }
  $scope.esl = function() {
    $state.go('app.esl');
  }
  $scope.eba = function() {
    $state.go('app.eba');
  }
  $scope.ebs = function() {
    $state.go('app.ebs');
  }
})
 .controller('edtCtrl', function($scope,$state) {
})
 .controller('ecmCtrl', function($scope,$state) {
})
 .controller('evbCtrl', function($scope,$state) {
})
  .controller('estCtrl', function($scope,$state) {
})
   .controller('ebcCtrl', function($scope,$state) {
})
   .controller('ektCtrl', function($scope,$state) {
})
   .controller('esaCtrl', function($scope,$state) {
})
   .controller('eakCtrl', function($scope,$state) {
})
    .controller('epCtrl', function($scope,$state) {
})
     .controller('ebCtrl', function($scope,$state) {
})
      .controller('emCtrl', function($scope,$state) {
})
      .controller('ekCtrl', function($scope,$state) {
})
       .controller('ekoCtrl', function($scope,$state) {
})
        .controller('eslCtrl', function($scope,$state) {
})
        .controller('ebaCtrl', function($scope,$state) {
})
        .controller('ebsCtrl', function($scope,$state) {
})

        .controller('kanchipuramCtrl', function($scope,$state) {
     $scope.ket = function() {
    $state.go('app.ket');
  }  
   $scope.kct = function() {
    $state.go('app.kct');
  }  
   $scope.kks = function() {
    $state.go('app.kks');
  }  
 $scope.kvp = function() {
  $state.go('app.kvp');
  }  
   $scope.kkk = function() {
    $state.go('app.kkk');
  }  
$scope.kvb = function() {
    $state.go('app.kvb');
  }  
  $scope.kvt = function() {
    $state.go('app.kvt');
  } 
   $scope.kut = function() {
    $state.go('app.kut');
  }  
   $scope.kka = function() {
    $state.go('app.kka');
  }  
  $scope.ktp = function() {
    $state.go('app.ktp');
  }  
 $scope.kkt = function() {
    $state.go('app.kkt');
  }  
 $scope.kkp = function() {
    $state.go('app.kkp');
  }  
 $scope.kd = function() {
    $state.go('app.kd');
  }  
   $scope.kaf = function() {
    $state.go('app.kaf');
  }  
 $scope.kak = function() {
    $state.go('app.kak');
  }  
 $scope.kpv = function() {
    $state.go('app.kpv');
  }  
 $scope.ksa = function() {
    $state.go('app.ksa');
  } 
   $scope.kst = function() {
    $state.go('app.kst');
  }  
 $scope.kku = function() {
    $state.go('app.kku');
  }  
 


})
  .controller('ketCtrl', function($scope,$state) {
})
  .controller('kctCtrl', function($scope,$state) {
})
  .controller('kksCtrl', function($scope,$state) {
})
  .controller('kvpCtrl', function($scope,$state) {
})
  .controller('kkkCtrl', function($scope,$state) {
})
  .controller('kvbCtrl', function($scope,$state) {
})
   .controller('kvtCtrl', function($scope,$state) {
})
    .controller('kutCtrl', function($scope,$state) {
})
     .controller('kkaCtrl', function($scope,$state) {
})

     .controller('ktpCtrl', function($scope,$state) {
})

     .controller('kkpCtrl', function($scope,$state) {
})

     .controller('kdCtrl', function($scope,$state) {
})

     .controller('kafCtrl', function($scope,$state) {
})

     .controller('kakCtrl', function($scope,$state) {
})

     .controller('kpvCtrl', function($scope,$state) {
})
     .controller('ksaCtrl', function($scope,$state) {
})
      .controller('kstCtrl', function($scope,$state) {
})
      .controller('kkuCtrl', function($scope,$state) {
})


      .controller('kanniyakumariCtrl', function($scope,$state) {
     $scope.kvr = function() {
    $state.go('app.kvr');
  }  
   $scope.kp = function() {
    $state.go('app.kp');
  } 
  $scope.kt = function() {
    $state.go('app.kt');
  }
   $scope.ktt = function() {
    $state.go('app.ktt');
  } 
   $scope.kb = function() {
    $state.go('app.kb');
  } 
  $scope.kba = function() {
    $state.go('app.kba');
  } 
   $scope.ksv = function() {
    $state.go('app.ksv');
  }  
  $scope.kv = function() {
    $state.go('app.kv');
  }
   $scope.ktf = function() {
    $state.go('app.ktf');
  }  
  $scope.kr = function() {
    $state.go('app.kr');
  } 
   $scope.km = function() {
    $state.go('app.km');
  } 
  $scope.kw = function() {
    $state.go('app.kw');
  } 
   $scope.kc = function() {
    $state.go('app.kc');
  }
   $scope.kf = function() {
    $state.go('app.kf');
  }  
   $scope.ks = function() {
    $state.go('app.ks');
  } 
  $scope.kj = function() {
    $state.go('app.kj');
  }   
$scope.kpr = function() {
    $state.go('app.kpr');
  }
  $scope.kkm = function() {
    $state.go('app.kkm');
  }
   $scope.kbp = function() {
    $state.go('app.kbp');
  } 
  $scope.kkw = function() {
    $state.go('app.kkw');
  } 
  $scope.ktn = function() {
    $state.go('app.ktn');
  } 
  $scope.kuf = function() {
    $state.go('app.kuf');
  } 
  
   $scope.ksx = function() {
    $state.go('app.ksx');
  }  
  $scope.kot = function() {
    $state.go('app.kot');
  } 
  $scope.koc = function() {
    $state.go('app.koc');
  }     

})
.controller('kvrCtrl', function($scope,$state) {
})
.controller('kpCtrl', function($scope,$state) {
})
.controller('ktCtrl', function($scope,$state) {
})
.controller('kttCtrl', function($scope,$state) {
})
.controller('kbCtrl', function($scope,$state) {
})
.controller('kbaCtrl', function($scope,$state) {
})
.controller('ksvCtrl', function($scope,$state) {
})
.controller('kvCtrl', function($scope,$state) {
})
.controller('ktfCtrl', function($scope,$state) {
})
.controller('krCtrl', function($scope,$state) {
})
.controller('kmCtrl', function($scope,$state) {
})
.controller('kwCtrl', function($scope,$state) {
})
.controller('kcCtrl', function($scope,$state) {
})
.controller('kfCtrl', function($scope,$state) {
})
.controller('ksCtrl', function($scope,$state) {
})
.controller('kjCtrl', function($scope,$state) {
})
.controller('kprCtrl', function($scope,$state) {
})
.controller('kkmCtrl', function($scope,$state) {
})
.controller('kbpCtrl', function($scope,$state) {
})
.controller('kkwCtrl', function($scope,$state) {
})
.controller('ktnCtrl', function($scope,$state) {
})
.controller('kufCtrl', function($scope,$state) {
})
.controller('ksxCtrl', function($scope,$state) {
})
.controller('kotCtrl', function($scope,$state) {
})
.controller('kocCtrl', function($scope,$state) {
})

 .controller('karurCtrl', function($scope,$state) {
     $scope.kap = function() {
    $state.go('app.kap');
  }  
   $scope.ksb = function() {
    $state.go('app.ksb');
  }  
  $scope.kad = function() {
    $state.go('app.kad');
  }
  $scope.ktd = function() {
    $state.go('app.ktd');
  }  
  })
 .controller('kapCtrl', function($scope,$state) {
})
 .controller('ksbCtrl', function($scope,$state) {
})
 .controller('kadCtrl', function($scope,$state) {
})
  .controller('ktdCtrl', function($scope,$state) {
})

  .controller('krishnagiriCtrl', function($scope,$state) {
     $scope.krp = function() {
    $state.go('app.krp');
  }  
   $scope.kkv = function() {
    $state.go('app.kkv');
  } 
  $scope.kkr = function() {
    $state.go('app.kkr');
  } 
   $scope.kkf = function() {
    $state.go('app.kkf');
  } 
   $scope.kkd = function() {
    $state.go('app.kkd');
  }
   $scope.krk = function() {
    $state.go('app.krk');
  } 
   $scope.kac = function() {
    $state.go('app.kac');
  }  
})
  .controller('krpCtrl', function($scope,$state) {
})
  .controller('kkvCtrl', function($scope,$state) {
})
  .controller('kkrCtrl', function($scope,$state) {
})
  .controller('kkfCtrl', function($scope,$state) {
})
   .controller('kkdCtrl', function($scope,$state) {
})
   .controller('krkCtrl', function($scope,$state) {
})
   .controller('kacCtrl', function($scope,$state) {
})

    .controller('nagapattinamCtrl', function($scope,$state) {
     $scope.nv = function() {
    $state.go('app.nv');
  } 
   $scope.nvr = function() {
    $state.go('app.nvr');
  } 
  $scope.nt = function() {
    $state.go('app.nt');
  } 
  $scope.ns = function() {
    $state.go('app.ns');
  }
   $scope.ntm = function() {
    $state.go('app.ntm');
  } 
  $scope.ntk = function() {
   $state.go('app.ntk');
  } 
   $scope.nk = function() {
   $state.go('app.nk');
  } 
   $scope.nss = function() {
   $state.go('app.nss');
  } 
  $scope.nm= function() {
   $state.go('app.nm');
  } 
  $scope.nw = function() {
   $state.go('app.nw');
  } 
  $scope.ng = function() {
   $state.go('app.ng');
  } 
   $scope.ng = function() {
   $state.go('app.ng');
  } 
   $scope.np = function() {
   $state.go('app.np');
  } 
   $scope.nsp = function() {
   $state.go('app.nsp');
  } 
   $scope.nn = function() {
   $state.go('app.nn');
  } 
   $scope.nsk = function() {
   $state.go('app.nsk');
  } 
   $scope.ngt = function() {
   $state.go('app.ngt');
  } 
   $scope.nat = function() {
   $state.go('app.nat');
  } 
   $scope.nkt = function() {
   $state.go('app.nkt');
  } 
   $scope.nmt = function() {
   $state.go('app.nmt');
  } 
   $scope.npc = function() {
   $state.go('app.npc');
  } 
   $scope.nrg = function() {
   $state.go('app.nrg');
  } 
   $scope.nem = function() {
   $state.go('app.nem');
  } 
   $scope.ngp = function() {
   $state.go('app.ngp');
  }  
  $scope.nts = function() {
   $state.go('app.nts');
  } 
   $scope.nam = function() {
   $state.go('app.nam');
  }   
})
     .controller('nvCtrl', function($scope,$state) {
})
.controller('nvrCtrl', function($scope,$state) {
})
.controller('ntCtrl', function($scope,$state) {
})

.controller('nsCtrl', function($scope,$state) {
})
.controller('ntmCtrl', function($scope,$state) {
})
.controller('ntkCtrl', function($scope,$state) {
})
.controller('nkCtrl', function($scope,$state) {
})
.controller('nssCtrl', function($scope,$state) {
})
.controller('nmCtrl', function($scope,$state) {
})
.controller('nwCtrl', function($scope,$state) {
})
.controller('ngCtrl', function($scope,$state) {
})
.controller('npCtrl', function($scope,$state) {
})
.controller('nspCtrl', function($scope,$state) {
})
.controller('nnCtrl', function($scope,$state) {
})
.controller('nskCtrl', function($scope,$state) {
})
.controller('ngtCtrl', function($scope,$state) {
})
.controller('natCtrl', function($scope,$state) {
})
.controller('nktCtrl', function($scope,$state) {
})
.controller('nmtCtrl', function($scope,$state) {
})
.controller('npcCtrl', function($scope,$state) {
})
.controller('nrgCtrl', function($scope,$state) {
})
.controller('nemCtrl', function($scope,$state) {
})
.controller('ngpCtrl', function($scope,$state) {
})
.controller('ntsCtrl', function($scope,$state) {
})
.controller('namCtrl', function($scope,$state) {
})

.controller('namakkalCtrl', function($scope,$state) {
     $scope.naa = function() {
    $state.go('app.naa');
  } 
   $scope.nan = function() {
    $state.go('app.nan');
  } 
  $scope.nak = function() {
    $state.go('app.nak');
  } 
  $scope.nav = function() {
    $state.go('app.nav');
  } 
  $scope.nap = function() {
    $state.go('app.nap');
  } 
  $scope.nca = function() {
    $state.go('app.nca');
  } 
  $scope.nrp = function() {
    $state.go('app.nrp');
  } 
  $scope.nbh = function() {
    $state.go('app.nbh');
  } 
  $scope.nnm = function() {
    $state.go('app.nnm');
  } 
  $scope.nnf = function() {
    $state.go('app.nnf');
  } 
  })
.controller('naaCtrl', function($scope,$state) {
})
.controller('nanCtrl', function($scope,$state) {
})
.controller('nakCtrl', function($scope,$state) {
})
.controller('navCtrl', function($scope,$state) {
})
.controller('napCtrl', function($scope,$state) {
})
.controller('ncaCtrl', function($scope,$state) {
})
.controller('nrpCtrl', function($scope,$state) {
})
.controller('nbhCtrl', function($scope,$state) {
})
.controller('nnmCtrl', function($scope,$state) {
})
.controller('nnfCtrl', function($scope,$state) {
})

.controller('perambalurCtrl', function($scope,$state) {
     $scope.pr = function() {
    $state.go('app.pr');
  } 
   $scope.pe = function() {
    $state.go('app.pe');
  } 
   $scope.pl = function() {
    $state.go('app.pl');
  } 
   $scope.pss = function() {
    $state.go('app.pss');
  } 
   $scope.pf = function() {
    $state.go('app.pf');
  } 
  })
.controller('prCtrl', function($scope,$state) {
})
.controller('peCtrl', function($scope,$state) {
})

.controller('plCtrl', function($scope,$state) {
})

.controller('pssCtrl', function($scope,$state) {
})
.controller('pfCtrl', function($scope,$state) {
})


.controller('tiruppurCtrl', function($scope,$state) {
     $scope.ta = function() {
    $state.go('app.ta');
  } 
   $scope.tc = function() {
    $state.go('app.tc');
  } 
   $scope.td = function() {
    $state.go('app.td');
  } 
   $scope.tf = function() {
    $state.go('app.tf');
  } 
   $scope.tak = function() {
    $state.go('app.tak');
  }
  $scope.to = function() {
    $state.go('app.to');
  }  
   $scope.tn = function() {
    $state.go('app.tn');
  } 
   $scope.tj = function() {
    $state.go('app.tj');
  }
   $scope.tu = function() {
    $state.go('app.tu');
  }  
})
.controller('taCtrl', function($scope,$state) {
})
.controller('tcCtrl', function($scope,$state) {
})
.controller('tdCtrl', function($scope,$state) {
})
.controller('tfCtrl', function($scope,$state) {
})
.controller('takCtrl', function($scope,$state) {
})
.controller('toCtrl', function($scope,$state) {
})
.controller('tnCtrl', function($scope,$state) {
})
.controller('tjCtrl', function($scope,$state) {
})
.controller('tuCtrl', function($scope,$state) {
})
.controller('thiruvallurCtrl', function($scope,$state) {
     $scope.tl = function() {
    $state.go('app.tl');
  }
   $scope.tv = function() {
    $state.go('app.tv');
  }
   $scope.tm = function() {
    $state.go('app.tm');
  }
   $scope.tp = function() {
    $state.go('app.tp');
  }
   $scope.tq = function() {
    $state.go('app.tq');
  }
   $scope.tt = function() {
    $state.go('app.tt');
  }
   $scope.trr = function() {
    $state.go('app.trr');
  }
   $scope.tb = function() {
    $state.go('app.tb');
  }
   $scope.tcl = function() {
    $state.go('app.tcl');
  }
   $scope.tg = function() {
    $state.go('app.tg');
  }
})
.controller('tlCtrl', function($scope,$state) {
})
.controller('tvCtrl', function($scope,$state) {
})
.controller('tmCtrl', function($scope,$state) {
})
.controller('tpCtrl', function($scope,$state) {
})
.controller('tqCtrl', function($scope,$state) {
})
.controller('ttCtrl', function($scope,$state) {
})
.controller('trrCtrl', function($scope,$state) {
})
.controller('tbCtrl', function($scope,$state) {
})
.controller('tclCtrl', function($scope,$state) {
})
.controller('tgCtrl', function($scope,$state) {
})
.controller('thirunelveliCtrl', function($scope,$state) {
     $scope.tvk = function() {
    $state.go('app.tvk');
  }
   $scope.taf = function() {
    $state.go('app.taf');
  }
   $scope.tmp = function() {
    $state.go('app.tmp');
  }
   $scope.tmw = function() {
    $state.go('app.tmw');
  }
   $scope.tkt = function() {
    $state.go('app.tkt');
  }
   $scope.tkp = function() {
    $state.go('app.tkp');
  }
   $scope.tks = function() {
    $state.go('app.tks');
  }
   $scope.tkv = function() {
    $state.go('app.tkv');
  }
   $scope.tsl = function() {
    $state.go('app.tsl');
  }
   $scope.tst = function() {
    $state.go('app.tst');
  }
   $scope.tkm = function() {
    $state.go('app.tkm');
  }
   $scope.tbf = function() {
    $state.go('app.tbf');
  }
   $scope.tbd = function() {
    $state.go('app.tbd');
  }
   $scope.tag = function() {
    $state.go('app.tag');
  }
   $scope.tap = function() {
    $state.go('app.tap');
  }
   $scope.tam = function() {
    $state.go('app.tam');
  }
   $scope.tms = function() {
    $state.go('app.tms');
  }
  $scope.tmd = function() {
    $state.go('app.tmd');
  }
   $scope.tkf = function() {
    $state.go('app.tkf');
  }
  })
.controller('tvkCtrl', function($scope,$state) {
})
.controller('tafCtrl', function($scope,$state) {
})
.controller('tmpCtrl', function($scope,$state) {
})
.controller('tmwCtrl', function($scope,$state) {
})
.controller('tktCtrl', function($scope,$state) {
})
.controller('tkpCtrl', function($scope,$state) {
})
.controller('tksCtrl', function($scope,$state) {
})
.controller('tkvCtrl', function($scope,$state) {
})
.controller('tslCtrl', function($scope,$state) {
})
.controller('tstCtrl', function($scope,$state) {
})
.controller('tkmCtrl', function($scope,$state) {
})
.controller('tbfCtrl', function($scope,$state) {
})
.controller('tbdCtrl', function($scope,$state) {
})
.controller('tagCtrl', function($scope,$state) {
})
.controller('tapCtrl', function($scope,$state) {
})
.controller('tamCtrl', function($scope,$state) {
})
.controller('tmsCtrl', function($scope,$state) {
})
.controller('tmdCtrl', function($scope,$state) {
})
.controller('tkfCtrl', function($scope,$state) {
})

.controller('tiruvannamalaiCtrl', function($scope,$state) {
     $scope.tra = function() {
    $state.go('app.tra');
  }
  $scope.tru = function() {
    $state.go('app.tru');
  }
  $scope.trv = function() {
    $state.go('app.trv');
  }
  $scope.trs = function() {
    $state.go('app.trs');
  }
  $scope.tvp = function() {
    $state.go('app.tvp');
  }
  $scope.tsa = function() {
    $state.go('app.tsa');
  }
  $scope.tsr = function() {
    $state.go('app.tsr');
  }
  $scope.tpm = function() {
    $state.go('app.tpm');
  }
 
})

.controller('traCtrl', function($scope,$state) {
})
.controller('truCtrl', function($scope,$state) {
})
.controller('trvCtrl', function($scope,$state) {
})
.controller('trsCtrl', function($scope,$state) {
})
.controller('tvpCtrl', function($scope,$state) {
})
.controller('tsaCtrl', function($scope,$state) {
})
.controller('tsrCtrl', function($scope,$state) {
})
.controller('tpmCtrl', function($scope,$state) {
})


.controller('thiruvarurCtrl', function($scope,$state) {
     $scope.trt = function() {
    $state.go('app.trt');
  }
   $scope.tsw = function() {
    $state.go('app.tsw');
  }
   $scope.tsb = function() {
    $state.go('app.tsb');
  }
  $scope.tsc = function() {
    $state.go('app.tsc');
  }
  $scope.tsk = function() {
    $state.go('app.tsk');
  }
   $scope.tsp = function() {
    $state.go('app.tsp');
  }
  $scope.tsg = function() {
    $state.go('app.tsg');
  }
  $scope.tud = function() {
    $state.go('app.tud');
  }
  $scope.tmt = function() {
    $state.go('app.tmt');
  }
  $scope.tpa = function() {
    $state.go('app.tpa');
  }
  $scope.tpe = function() {
    $state.go('app.tpe');
  }
  $scope.tmu = function() {
    $state.go('app.tmu');
  }
  $scope.tmm = function() {
    $state.go('app.tmm');
  }
  $scope.tac = function() {
    $state.go('app.tac');
  }
})
.controller('trtCtrl', function($scope,$state) {
})
.controller('tswCtrl', function($scope,$state) {
})
.controller('tsbCtrl', function($scope,$state) {
})
.controller('tscCtrl', function($scope,$state) {
})
.controller('tskCtrl', function($scope,$state) {
})
.controller('tspCtrl', function($scope,$state) {
})
.controller('tsgCtrl', function($scope,$state) {
})
.controller('tudCtrl', function($scope,$state) {
})
.controller('tmtCtrl', function($scope,$state) {
})
.controller('tpaCtrl', function($scope,$state) {
})
.controller('tpeCtrl', function($scope,$state) {
})
.controller('tmuCtrl', function($scope,$state) {
})
.controller('tmmCtrl', function($scope,$state) {
})
.controller('tacCtrl', function($scope,$state) {
})


.controller('theniCtrl', function($scope,$state) {
     $scope.tk = function() {
    $state.go('app.tk');
  }
  $scope.sur = function() {
    $state.go('app.sur');
  }
  $scope.top = function() {
    $state.go('app.top');
  }
  $scope.vai = function() {
    $state.go('app.vai');
  }
  $scope.kur = function() {
    $state.go('app.kur');
  }
  $scope.man = function() {
    $state.go('app.man');
  }
  $scope.fun = function() {
    $state.go('app.fun');
  }
  $scope.tir = function() {
    $state.go('app.tir');
  }
  $scope.tpea = function() {
    $state.go('app.tpea');
  }
  $scope.meg = function() {
    $state.go('app.meg');
  }
  $scope.mew = function() {
    $state.go('app.mew');
  }
  $scope.gt = function() {
    $state.go('app.gt');
  }
  $scope.abt = function() {
    $state.go('app.abt');
  }
  $scope.kum = function() {
    $state.go('app.kum');
  }
   $scope.sot = function() {
    $state.go('app.sot');
  }
   $scope.kai = function() {
    $state.go('app.kai');
  }
})
.controller('tkCtrl', function($scope,$state) {
})
.controller('surCtrl', function($scope,$state) {
})
.controller('topCtrl', function($scope,$state) {
})
.controller('vaiCtrl', function($scope,$state) {
})
.controller('kurCtrl', function($scope,$state) {
})
.controller('manCtrl', function($scope,$state) {
})
.controller('funCtrl', function($scope,$state) {
})
.controller('tirCtrl', function($scope,$state) {
})
.controller('tpeaCtrl', function($scope,$state) {
})
.controller('megCtrl', function($scope,$state) {
})
.controller('mewCtrl', function($scope,$state) {
})
.controller('gtCtrl', function($scope,$state) {
})
.controller('abtCtrl', function($scope,$state) {
})
.controller('kumCtrl', function($scope,$state) {
})
.controller('sotCtrl', function($scope,$state) {
})
.controller('kaiCtrl', function($scope,$state) {
})
.controller('velloreCtrl', function($scope,$state) {
     $scope.vsgt = function() {
    $state.go('app.vsgt');
  }
  $scope.vjt = function() {
    $state.go('app.vjt');
  }
  $scope.vvf = function() {
    $state.go('app.vvf');
  }
  $scope.vab = function() {
    $state.go('app.vab');
  }
 
  $scope.vsy = function() {
    $state.go('app.vsy');
  }
  $scope.vam = function() {
    $state.go('app.vam');
  }
  $scope.vaz = function() {
    $state.go('app.vaz');
  }
  $scope.vpl = function() {
    $state.go('app.vpl');
  }
  $scope.vmm = function() {
    $state.go('app.vmm');
  }
  $scope.vmt = function() {
    $state.go('app.vmt');
  }
  $scope.vm = function() {
    $state.go('app.vm');
  }
  $scope.vsj = function() {
    $state.go('app.vsj');
  }
  
})
.controller('vsgtCtrl', function($scope,$state) {
})
.controller('vjtCtrl', function($scope,$state) {
})
.controller('vvfCtrl', function($scope,$state) {
})
.controller('vabCtrl', function($scope,$state) {
})

.controller('vsyCtrl', function($scope,$state) {
})
.controller('vamCtrl', function($scope,$state) {
})
.controller('vazCtrl', function($scope,$state) {
})
.controller('vplCtrl', function($scope,$state) {
})
.controller('vmmCtrl', function($scope,$state) {
})
.controller('vmtCtrl', function($scope,$state) {
})
.controller('vmCtrl', function($scope,$state) {
})
.controller('vsjCtrl', function($scope,$state) {
})
.controller('vilupuramCtrl', function($scope,$state) {
     $scope.va = function() {
    $state.go('app.va');
  }
  $scope.vg = function() {
    $state.go('app.vg');
  }
  $scope.vu = function() {
    $state.go('app.vu');
  }
  $scope.vp = function() {
    $state.go('app.vp');
  }
 
  $scope.vl = function() {
    $state.go('app.vl');
  }
  $scope.vi = function() {
    $state.go('app.vi');
  }
  $scope.vn = function() {
    $state.go('app.vn');
  }
  $scope.vb = function() {
    $state.go('app.vb');
  }
  
})
.controller('vaCtrl', function($scope,$state) {
})
.controller('vgCtrl', function($scope,$state) {
})
.controller('vuCtrl', function($scope,$state) {
})
.controller('vpCtrl', function($scope,$state) {
})

.controller('vlCtrl', function($scope,$state) {
})
.controller('viCtrl', function($scope,$state) {
})
.controller('vnCtrl', function($scope,$state) {
})
.controller('vbCtrl', function($scope,$state) {
})
.controller('virudhunagarCtrl', function($scope,$state) {
     $scope.via = function() {
    $state.go('app.via');
  }
  $scope.vim = function() {
    $state.go('app.vim');
  }
  $scope.vip = function() {
    $state.go('app.vip');
  }
  $scope.vik = function() {
    $state.go('app.vik');
  }
 
  $scope.vii = function() {
    $state.go('app.vii');
  } 
})
.controller('viaCtrl', function($scope,$state) {
})

.controller('vimCtrl', function($scope,$state) {
})
.controller('vipCtrl', function($scope,$state) {
})
.controller('vikCtrl', function($scope,$state) {
})
.controller('viiCtrl', function($scope,$state) {
})
.controller('maduraiCtrl', function($scope,$state) {
     $scope.mma = function() {
    $state.go('app.mma');
  }
   $scope.mtnm = function() {
    $state.go('app.mtnm');
  }
  $scope.mmgm = function() {
    $state.go('app.mmgm');
  }
   $scope.mkat= function() {
    $state.go('app.mkat');
  }
   $scope.mvmt= function() {
    $state.go('app.mvmt');
  }
   $scope.matp= function() {
    $state.go('app.matp');
  } 
 $scope.mtmt= function() {
    $state.go('app.mtmt');
  }
   $scope.mmq = function() {
    $state.go('app.mmq');
  }
  $scope.mpk = function() {
    $state.go('app.mpk');
  }

$scope.mrp = function() {
    $state.go('app.mrp');
  }

$scope.mpm = function() {
    $state.go('app.mpm');
  }

$scope.mvt = function() {
    $state.go('app.mvt');
  }
  $scope.mcep = function() {
    $state.go('app.mcep');
  }
  $scope.msmc = function() {
    $state.go('app.msmc');
  }
  $scope.mmgr = function() {
    $state.go('app.mmgr');
  }
  $scope.mkp = function() {
    $state.go('app.mkp');
  }
  $scope.msmg = function() {
    $state.go('app.msmg');
  }

$scope.myk = function() {
    $state.go('app.myk');
  }
  $scope.mapk = function() {
    $state.go('app.mapk');
  }
  $scope.mvd = function() {
    $state.go('app.mvd');
  }
  $scope.mkt = function() {
    $state.go('app.mkt');
  }
   $scope.msh = function() {
    $state.go('app.msh');
  }
   $scope.mic = function() {
    $state.go('app.mic');
  }
  $scope.mgd  = function() {
    $state.go('app.mgd');
  }
   $scope.macri = function() {
    $state.go('app.macri');
  }
   $scope.mkf = function() {
    $state.go('app.mkf');
  }
   $scope.msrm = function() {
    $state.go('app.msrm');
  }
   $scope.mast = function() {
    $state.go('app.mast');
  }
   $scope.mitt = function() {
    $state.go('app.mitt');
  }
  $scope.gm = function() {
    $state.go('app.gm');
  }
   $scope.mbm = function() {
    $state.go('app.mbm');
  }
   $scope.mvm = function() {
    $state.go('app.mvm');
  }
   $scope.mmm = function() {
    $state.go('app.mmm');
  }
})
  .controller('mmaCtrl', function($scope,$state) {
})
  .controller('mtnmCtrl', function($scope,$state) {
})
  .controller('mmgmCtrl', function($scope,$state) {
})
  .controller('mkatCtrl', function($scope,$state) {
})
  .controller('mvmtCtrl', function($scope,$state) {
})
  .controller('matpCtrl', function($scope,$state) {
})
  .controller('mtmtCtrl', function($scope,$state) {
})
  .controller('mmqCtrl', function($scope,$state) {
})
  .controller('mpkCtrl', function($scope,$state) {
})
  .controller('mrpCtrl', function($scope,$state) {
})
  .controller('mpmCtrl', function($scope,$state) {
})
  .controller('mvtCtrl', function($scope,$state) {
})
  .controller('mcepCtrl', function($scope,$state) {
})
  .controller('msmcCtrl', function($scope,$state) {
})
  .controller('mmgrCtrl', function($scope,$state) {
})
  .controller('mkpCtrl', function($scope,$state) {
})
  .controller('msmgCtrl', function($scope,$state) {
})
  .controller('mykCtrl', function($scope,$state) {
})
  .controller('mapkCtrl', function($scope,$state) {
})
  .controller('mvdCtrl', function($scope,$state) {
})
  .controller('mktCtrl', function($scope,$state) {
})
  .controller('mshCtrl', function($scope,$state) {
})
  .controller('micCtrl', function($scope,$state) {
})
  .controller('mgdCtrl', function($scope,$state) {
})
  .controller('macriCtrl', function($scope,$state) {
})
  .controller('mkfCtrl', function($scope,$state) {
})
  .controller('msrmCtrl', function($scope,$state) {
})
  .controller('mastCtrl', function($scope,$state) {
})
  .controller('mittCtrl', function($scope,$state) {
})
  .controller('gmCtrl', function($scope,$state) {
})
  .controller('mbmCtrl', function($scope,$state) {
})
  .controller('mvmCtrl', function($scope,$state) {
})
  .controller('mmmCtrl', function($scope,$state) {
})
  .controller('udagamandalamCtrl', function($scope,$state) {
    $scope.onr = function() {
    $state.go('app.onr');
  }
   $scope.obg = function() {
    $state.go('app.obg');
  }
  $scope.opl = function() {
    $state.go('app.opl');
  }
   $scope.odp= function() {
    $state.go('app.odp');
  }
   $scope.oal= function() {
    $state.go('app.oal');
  }
   $scope.org = function() {
    $state.go('app.org');
  } 
 $scope.oubl= function() {
    $state.go('app.oubl');
  }
   $scope.osp = function() {
    $state.go('app.osp');
  }
  $scope.ool = function() {
    $state.go('app.ool');
  }

$scope.osc = function() {
    $state.go('app.osc');
  }

$scope.oel = function() {
    $state.go('app.oel');
  }

$scope.otw = function() {
    $state.go('app.otw');
  }
  $scope.okv = function() {
    $state.go('app.okv');
  }
  $scope.otg = function() {
    $state.go('app.otg');
  }
  $scope.omt = function() {
    $state.go('app.omt');
  }
  $scope.omb = function() {
    $state.go('app.omb');
  }
  $scope.oeh = function() {
    $state.go('app.oeh');
  }

$scope.och = function() {
    $state.go('app.och');
  }
  $scope.olc = function() {
    $state.go('app.olc');
  }
  $scope.owm = function() {
    $state.go('app.owm');
  }
  $scope.owc = function() {
    $state.go('app.owc');
  }
   $scope.oml = function() {
    $state.go('app.oml');
  }
   $scope.oamt = function() {
    $state.go('app.oamt');
  }
  $scope.omk = function() {
    $state.go('app.omk');
  }
   $scope.ohtc = function() {
    $state.go('app.ohtc');
  }
   $scope.olp = function() {
    $state.go('app.olp');
  }
   $scope.otrc = function() {
    $state.go('app.otrc');
  }
   $scope.omnp = function() {
    $state.go('app.omnp');
  }
   $scope.okcc = function() {
    $state.go('app.okcc');
  }
  $scope.orb= function() {
    $state.go('app.orb');
  }
   $scope.obv = function() {
    $state.go('app.obv');
  }
   $scope.omp = function() {
    $state.go('app.omp');
  }
   $scope.ohv = function() {
    $state.go('app.ohv');
  }
  $scope.onl = function() {
    $state.go('app.onl');
  }
  $scope.ouc = function() {
    $state.go('app.ouc');
  }
  $scope.oap = function() {
    $state.go('app.oap');
  }
  $scope.obl = function() {
    $state.go('app.obl');
  }
  $scope.ohpf = function() {
    $state.go('app.ohpf');
  }
  $scope.oav = function() {
    $state.go('app.oav');
  }
  $scope.ort = function() {
    $state.go('app.ort');
  }
  $scope.ojp = function() {
    $state.go('app.ojp');
  }

})
.controller('onrCtrl', function($scope,$state) {
})
.controller('obgCtrl', function($scope,$state) {
})
.controller('oplCtrl', function($scope,$state) {
})
.controller('odpCtrl', function($scope,$state) {
})
.controller('oalCtrl', function($scope,$state) {
})
.controller('orgCtrl', function($scope,$state) {
})
.controller('oublCtrl', function($scope,$state) {
})
.controller('ospCtrl', function($scope,$state) {
})
.controller('oolCtrl', function($scope,$state) {
})
.controller('oscCtrl', function($scope,$state) {
})
.controller('oelCtrl', function($scope,$state) {
})
.controller('otwCtrl', function($scope,$state) {
})
.controller('okvCtrl', function($scope,$state) {
})
.controller('otgCtrl', function($scope,$state) {
})
.controller('omtCtrl', function($scope,$state) {
})
.controller('ombCtrl', function($scope,$state) {
})
.controller('oehCtrl', function($scope,$state) {
})
.controller('ochCtrl', function($scope,$state) {
})
.controller('olcCtrl', function($scope,$state) {
})
.controller('owmCtrl', function($scope,$state) {
})
.controller('owcCtrl', function($scope,$state) {
})
.controller('omlCtrl', function($scope,$state) {
})
.controller('oamtCtrl', function($scope,$state) {
})

.controller('ohtcCtrl', function($scope,$state) {
})
.controller('olpCtrl', function($scope,$state) {
})
.controller('otrcCtrl', function($scope,$state) {
})
.controller('okccCtrl', function($scope,$state) {
})
.controller('orbCtrl', function($scope,$state) {
})
.controller('obvCtrl', function($scope,$state) {
})
.controller('ompCtrl', function($scope,$state) {
})
.controller('ohvCtrl', function($scope,$state) {
})
.controller('onlCtrl', function($scope,$state) {
})
.controller('oucCtrl', function($scope,$state) {
})
.controller('oapCtrl', function($scope,$state) {
})
.controller('oblCtrl', function($scope,$state) {
})
.controller('ohpfCtrl', function($scope,$state) {
})
.controller('oavCtrl', function($scope,$state) {
})
.controller('ortCtrl', function($scope,$state) {
})
.controller('ojpCtrl', function($scope,$state) {
})
.controller('tiruchirapalliCtrl', function($scope,$state) {
     $scope.tris = function() {
    $state.go('app.tris');
  }  
   $scope.tup = function() {
    $state.go('app.tup');
  }  
  $scope.trf = function() {
    $state.go('app.trf');
  }
  $scope.tkd = function() {
    $state.go('app.tkd');
  }  
  $scope.tsi = function() {
    $state.go('app.tsi');
  }  
  $scope.tjt = function() {
    $state.go('app.tjt');
  }  
  $scope.ttk = function() {
    $state.go('app.ttk');
  }  
  $scope.tat = function() {
    $state.go('app.tayt');
  }  
  $scope.takm = function() {
    $state.go('app.takm');
  }  
  $scope.trmd = function() {
    $state.go('app.trmd');
  }  
  $scope.tfm = function() {
    $state.go('app.tfm');
  }  
 $scope.trim = function() {
    $state.go('app.trim');
  }  
   $scope.tpf = function() {
    $state.go('app.tpf');
  }  
   $scope.tbp = function() {
    $state.go('app.tbp');
  }  

  })
 .controller('trtCtrl', function($scope,$state) {
})
.controller('tupCtrl', function($scope,$state) {
})
.controller('trfCtrl', function($scope,$state) {
})

.controller('tkdCtrl', function($scope,$state) {
})
.controller('tsiCtrl', function($scope,$state) {
})
.controller('tjtCtrl', function($scope,$state) {
})
.controller('ttkCtrl', function($scope,$state) {
})
.controller('taytCtrl', function($scope,$state) {
})
.controller('takmCtrl', function($scope,$state) {
})
.controller('trmdCtrl', function($scope,$state) {
})
.controller('tfmCtrl', function($scope,$state) {
})
.controller('tmCtrl', function($scope,$state) {
})
.controller('tpfCtrl', function($scope,$state) {
})
.controller('tbpCtrl', function($scope,$state) {
})

 .controller('placesCtrl', function($scope)
 {
  $scope.places= [
  {data: 'ariyalur'},
 {data: 'chennai'},
 {data: 'coimbatore'},
 {data: 'cuddolore'}
 ]
})
 
 
 
.controller('shareCtrl', ['$scope', function($scope){
    $scope.share = function(t, msg, img, link){  
        if(t == 'w')
            window.plugins.socialsharing
            .shareViaWhatsApp(msg, '', link);
        else if(t == 'f')
            window.plugins.socialsharing
            .shareViaFacebook(msg, img, link);    
        else if(t == 't')
            window.plugins.socialsharing
            .shareViaTwitter(msg, img, link);    
        else if(t == 'sms')
            window.plugins.socialsharing
            .shareViaSMS(msg+' '+img+' '+link);    
        else
        {
            var sub = 'Beautiful images inside ..';
            window.plugins.socialsharing
            .shareViaEmail(msg, sub, '');        
        }    
    }
}]);