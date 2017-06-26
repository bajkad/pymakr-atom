// installing and re-compiling serialport
// not needed on windows, for which a pre-compiled version is included in the lib/connections/serialport-win folder

function installPrecompiledSerialLib(){
  // var precompiles = {'win32': 'win', 'darwin': 'osx', 'linux': 'linux', 'aix': 'linux'}
  // if(process.platform in precompiles) { // always returns win32 on windows, even on 64bit
  //   var seperator = process.platform == 'win32' ? "&" : ";"
  //   exec('cd precompiles/serialport-'+precompiles[process.platform]+seperator+" npm install",function(error,stdout,stderr){
  //     if(error){
  //       console.log(error)
  //     }
  //   })
  // }
}

if (process.platform != 'win32') {
  exec('npm install electron-rebuild',
  function(error,stdout,stderr){
    if(error){
      console.log(error)
      installPrecompiledSerialLib()
    }else{
      exec('npm install serialport',
      function(error,stdout,stderr){
        if(error){
          console.log(error)
          installPrecompiledSerialLib()
        }else{
          exec('$(npm bin)/electron-rebuild -f -w serialport -v 1.3.13',
          function(error,stout,stderr){
            if(error){
              console.log(error)
            }else{
              exec('$(npm bin)/electron-rebuild -f -w serialport -v 1.3.13',
              function(error,stout,stderr){
                if(error){
                  console.log(error)
                }
              })
            }
          }
        )
      }
    }
  )
}
