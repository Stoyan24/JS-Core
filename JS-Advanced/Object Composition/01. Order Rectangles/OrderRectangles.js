function orderRectangles(arr){
    let allRects = [];
    for (let rectangle of arr){
        let rect = {
            width: rectangle[0],
            height: rectangle[1],
            area:  () => rect.width * rect.height,      // important to use rect. instead of this.
            compareTo : function (other){
                if (this.area() > other.area())              // DESCENDING SORT
                    return -1;
                if (this.area() < other.area())
                    return 1;
                if (this.width > other.width)                // DESCENDING SORT
                    return -1;
                if (this.width < other.width)
                    return 1;
                return 0;
            }
        };
        allRects.push(rect);
    }
    return allRects.sort((r1, r2) => r1.compareTo(r2));
}