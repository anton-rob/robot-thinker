const { mouse, left, right, up, down,  straightTo, Point, getActiveWindow, centerOf, Region, Button, screen } = require("@nut-tree/nut-js");

// (async () => {
//     await mouse.move(left(500));
//     await mouse.move(up(500));
//     await mouse.move(right(500));
//     await mouse.move(down(500))
// })();

const updateTimeSwish = 1000 * 60 * 4;


const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getW () {
    const windowRef = await getActiveWindow();
    const title = await windowRef.title
    const region = await windowRef.region
    console.log(title, region)
}

async function updateSwish () {
    await mouse.setPosition(new Point(200, 270))
    await sleep(100)
    await mouse.click(Button.LEFT);
    await sleep(400)
    await mouse.drag(straightTo(new Point(200, 550)))
}

async function getColor () {
    let c = await screen.colorAt(new Point(246, 100))
    if (c.R < 100) {
        console.log(new Date(), 'SWISH')
    }
}


(async () => {
    // let c = await screen.colorAt(new Point(246, 100))
    // console.log(c)
    setInterval(updateSwish, updateTimeSwish)
    setInterval(getColor, 100)

})();
