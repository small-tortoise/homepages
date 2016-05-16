function bigFishFuritDistance() {
	for (var i = 0; i < fruit.num; i++) {
		if (!data.gameOver) {
			if (fruit.alive[i]) {
				var l = distance(fruit.x[i], fruit.y[i], bigFish.x, bigFish.y);
				if (l < 900) {
					fruit.dead(i);
					data.fruitNum++;
					bigFish.bigFishBodyCount++;
					if (bigFish.bigFishBodyCount > 7) {
						bigFish.bigFishBodyCount = 7;
					}
					if (fruit.fruitType[i] == "blue") {
						data.double = 2;
					}
					wave.born(fruit.x[i], fruit.y[i])
				}
			}

		}

	}
}

function bigFishBabyFishDistance() {
	if (data.fruitNum > 0 && !data.gameOver) {
		var l = distance(bigFish.x, bigFish.y, babyFish.x, babyFish.y);
		if (l < 900) {
			babyFish.babyFishBodyCount = 0;
			bigFish.bigFishBodyCount = 0;
			data.addScore();
			halo.born(babyFish.x, babyFish.y);
		}
	}
}