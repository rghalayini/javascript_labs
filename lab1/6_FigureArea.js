function CalculateArea(w, h, W, H) {
    let WidthRight = parseInt(w);
    let HeightRight = parseInt(h);
    let WidthLeft = parseInt(W);
    let HeightLeft = parseInt(H);

    let areaLeft = (Math.max(WidthLeft, WidthRight) - Math.min(WidthLeft, WidthRight)) * Math.min(HeightLeft, HeightRight);
    let areaRight = Math.min(WidthLeft, WidthRight) * (Math.max(HeightLeft, HeightRight) - Math.min(HeightLeft, HeightRight));
    let areaCenter = Math.min(WidthLeft, WidthRight) * Math.min(HeightLeft, HeightRight);

    console.log(areaLeft + areaCenter + areaRight);
}

CalculateArea('13', '2', '5', '8');