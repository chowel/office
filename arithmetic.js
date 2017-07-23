(function(w) {
	var Arith = function() {
		if (!(this instanceof Arith)) {
			return new Arith(a);
		}
	}

	//并归排序
	var mergeSortRec = function(array) {
		var length = array.length;
		if (length === 1) {
			return array;
		}
		var mid = Math.floor(length / 2),
			left = array.slice(0, mid),
			right = array.slice(mid, length);
		return merge(mergeSortRec(left), mergeSortRec(right));
	};

	var merge = function(left, right) {
		console.log('left: ' + left.toString() + '****' + 'right: ' + right.toString());
		var result = [],
			il = 0,
			ir = 0;
		while (il < left.length && ir < right.length) {
			if (left[il] < right[ir]) {
				result.push(left[il++]);
			} else {
				result.push(right[ir++]);
			}
		}
		while (il < left.length) {
			result.push(left[il++]);
		}
		while (ir < right.length) {
			result.push(right[ir++]);
		}

		return result;
	};

	var mergeSortRec = function(array) {
		var length = array.length;
		if (length === 1) { //{1}
			return array; //{2}
		}
		var mid = Math.floor(length / 2), //{3}
			left = array.slice(0, mid), //{4}
			right = array.slice(mid, length); //{5}
		return merge(mergeSortRec(left), mergeSortRec(right)); //{6}
	};


	//快速排序
	var quick = function(array, left, right) {
		var index; //{1}
		if (array.length > 1) { //{2}
			index = partition(array, left, right); //{3}
			if (left < index - 1) { //{4}
				quick(array, left, index - 1); //{5}
			}
			if (index < right) { //{6}
				quick(array, index, right); //{7}
			}
		}
	};

	var partition = function(array, left, right) {
		var pivot = array[Math.floor((right + left) / 2)], //{8}
			i = left, //{9}
			j = right; //{10}
		while (i <= j) { //{11}
			while (array[i] < pivot) { //{12}
				i++;
			}
			while (array[j] > pivot) { //{13}
				j--;
			}
			if (i <= j) { //{14}
				swapQuickStort(array, i, j); //{15}
				i++;
				j--;
			}
			// console.log(array.toString())
		}
		// console.log('index: '+i)
		return i;
	};

	var swapQuickStort = function(array, index1, index2) {
		var aux = array[index1];
		array[index1] = array[index2];
		array[index2] = aux;
	};
	Arith.prototype = {
		insertionSort: function(a) {
			var length = a.length,
				j, temp;
			for (var i = 1; i < length; i++) {
				j = i;
				temp = a[i];
				while (j > 0 && a[j - 1] > temp) {
					a[j] = a[j - 1];
					j--;
				}
				a[j] = temp;
			}
		},
		mergeSortRec: mergeSortRec,
		quick: quick
	}

	w.Arith = Arith
})(window)