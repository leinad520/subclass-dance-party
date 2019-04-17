var MakePopDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = MakeDancer.prototype.step;
  this.$node = $('<span class="popDancer"></span>');
}

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

MakePopDancer.prototype.oldStep = MakeDancer.prototype.step;
MakePopDancer.prototype.step = function() {
  // debugger;
  this.oldStep();

  this.$node.toggle();
}