class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }
  
  // static titleize(string){
  //   const exceptions = ["a", "an", "but", "of", "and", "for", "at", "by", "from"]
  //   let result = []
  //   let arrayOfWords = string.split(" ")
  //   for (let i=0; i <arrayOfWords.length; i++){
  //     if (i == 0){
  //       result.push(this.capitalize(arrayOfWords[i]))
  //     } else {
  //       if (exceptions.includes(arrayOfWords[i])){
  //         result.push(arrayOfWords[i])
  //       } else {
  //         result.push(this.capitalize(arrayOfWords[i]))
  //       }
  //     }
  //   }

  //   return result.join(" ")

  // }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}


