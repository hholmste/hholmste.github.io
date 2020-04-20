/*
	clearly, I need som simple vector math
*/
class Vector {
constructor(x, y) {
	this.x = x;
	this.y = y;
}
// divides each component by n and returns a new vector
divide(n) {
	return new Vector(this.x / n, this.y / n);
}
// a new vector with the same direction, but and magnitude 1
normalized() {
	const mag = this.magnitude();
	return this.divide(mag);
}
// the length of the vector
magnitude() {
	return Math.sqrt((this.x * this.x) + (this.y * this.y));
}
// the dot product of two vectors, a scalar
dot(other) {
	return this.x * other.x + this.y * other.y;
}
rotate(radians) {
	const newX = Math.cos(radians) * this.x - Math.sin(radians) * this.y;
	const newY = Math.sin(radians) * this.x + Math.cos(radians) * this.y;
	return new Vector(newX, newY);
}
angleBetween(that) {
	return Math.acos((this.dot(that)) / this.magnitude() * that.magnitude() );
}
plus(that, coefficient) {
	return new Vector(this.x + (coefficient * that.x), this.y + (coefficient * that.y));
}
}