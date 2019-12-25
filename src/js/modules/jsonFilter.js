export default function(json, q) {

  // JSON を任意の値でフィルタリング
  //const json = [
  //  { "a": "a", "b": "b", "c": "c" },
  //  { "a": "a", "b": "b", "c": "2" },
  //]
  //console.log(jsonFilter(json, {'a': 'a', 'c': '2'}))

	let filtered = json;
	for(key in q) {
		filtered = filtered.filter(function(filterItem, index) {
			if(filterItem[key] == q[key]) {
				return true;
			}
		});
	}
	return filtered;
};


