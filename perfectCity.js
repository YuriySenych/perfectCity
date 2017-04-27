const perfectCity = ([x1,y1], [x2,y2]) => {

	const countPath =(point1, point2) => {
		const axis1 = Math.floor(point1)
		const axis2 = Math.floor(point2)
		if (axis1 === axis2) {
			const decimal1 = point1 - Math.floor(point1) 
			const decimal2 = point2 - Math.floor(point2)
			if((decimal1 + decimal2) <= 1){
				return decimal1 + decimal2
			}
			return (1 - decimal1) + (1 - decimal2)
		} 
		return Math.abs(point2 - point1)
	}
	return countPath(x1,x2) + countPath(y1,y2)
}