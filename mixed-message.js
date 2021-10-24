const styles = () => {
    let variable0 = ['offensive', 'deffensive', 'pragmatic', 'catious', 'creative'];
    let pos0 = variable0[Math.floor(Math.random()*5)]
    let artigo = []
    
    if (pos0[0] === 'o') {
        artigo.push('an')
    } else {
        artigo.push('a')
    }
   
    let variable1 = ['4-3-3', '4-4-2', '4-5-1', '3-6-1', '3-5-2'];

    let pos1 = variable1[Math.floor(Math.random()*5)]
    let pos2 = variable1[Math.floor(Math.random()*5)]
    while (pos1 == pos2) {
        return pos2
    }

    let variable2 = ['Kaka', 'Ronaldinho Gauucho', 'Ronaldo Fenomeno', 'Neymar', 'Adriano Imperador'];

    let pos3 = variable2[Math.floor(Math.random()*5)]
  
    console.log(`Our team plays ${artigo} ${pos0} football. 
We usually innitiate with the ${pos1} formation, however if needed we change it to ${pos2}.
We are looking to hire ${pos3}, so we can beat the top teams this season.`)
} 
styles()
