(()=>{

    console.log("hi")

    document.querySelectorAll('td').forEach(td => {
        td.addEventListener('click', () => {
          const x = td.querySelector('.class-x');
          if (x) {
            x.classList.toggle('visible-x');
          }
        });
      });

    // load the bingo card
    fetch("./bingo_cells.txt").then(res => res.text()).then(res => {
        console.log(res)
        let tiles = res.split('\n')
        console.log(tiles.length)
        let bingoboard = document.querySelectorAll('.card')
        let alreadypicked = [];
        for(let i = 0; i < bingoboard.length; i++)
        {
            if(bingoboard[i].id === 'td-ignore') continue;
            //choose random
            let randNum = Math.floor(Math.random() * tiles.length)
            bingoboard[i].innerText = tiles[randNum]
            alreadypicked.push(tiles[randNum])
            tiles.splice(randNum, 1)
        }
    })

})();