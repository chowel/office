exports.ArrayList = function() {
	var array = [];
	this.insert = function(e) {
		array.push(e)
	}
	this.toString = function() {
		return array.join();
	};
	var swap = function(index1, index2) {
		var aux = array[index1];
		array[index1] = array[index2];
		array[index2] = aux;
	};
	this.modifiedBubbleSort = function() {
		var length = array.length;
		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length - 1 - i; j++) { //{1}
				if (array[j] > array[j + 1]) {
					swap(j, j + 1);
				}
			}
		}
	};
	this.selectionSort = function() {
		var length = array.length, //{1}
			indexMin;
		for (var i = 0; i < length - 1; i++) { //{2}
			indexMin = i; //{3}
			for (var j = i; j < length; j++) { //{4}
				if (array[indexMin] > array[j]) { //{5}
					indexMin = j; //{6}
					console.log(array[indexMin] + '>' + array[j]);
				}
			}
			if (i !== indexMin) { //{7}
				swap(i, indexMin);
				console.log(array)
			}
		}
	};
	this.insertionSort = function() {
		var length = array.length, //{1}
			j, temp;
		for (var i = 1; i < length; i++) { //{2}
			j = i; //{3}
			temp = array[i]; //{4}
			while (j > 0 && array[j - 1] > temp) { //{5}
				array[j] = array[j - 1]; //{6}
				j--;
			}
			array[j] = temp; //{7}
		}
	};
}