var f1Stats = new Vue({
	el: '#app',
	data: {
		races: '',
		seasons: '',
		seasonSelect: '',
		driverStandings: ''
	},
	created: function(){
		this.getData('seasons.json?limit=100');
		//this.getData('current/results.json?limit=1000');
	},
	methods: {
		showAll: function(item){
			console.log(item);
			Vue.set(item,'showAll',true)
		},
		getData: function(api_endpoint){
			var $this = this;
			
			$.ajax({
				url: 'https://ergast.com/api/f1/'+api_endpoint,
				dataType: 'json',
				crossDomain: 'true',
				success: function(ajax_data){
					if(ajax_data.MRData.RaceTable){
						$this.races = ajax_data.MRData.RaceTable.Races;
					}
					
					if(ajax_data.MRData.SeasonTable){
						let all_seasons = ajax_data.MRData.SeasonTable.Seasons;
						
						$this.seasons = all_seasons;
						$this.seasonSelect = all_seasons[all_seasons.length-1].season;
					}
					
					if(ajax_data.MRData.StandingsTable){
						$this.driverStandings = ajax_data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
					}
				}
			});

		},
		gridFinishDiff: function(gridStart,finishPos){
			let gridDiff = (gridStart - finishPos);
			
			if(gridDiff > 0){
				return gridStart + ' ⬆︎' + gridDiff;
			} else if(gridDiff < 0){
				return gridStart + ' ⬇︎' + Math.abs(gridDiff);
			} else {
				return gridStart;
			}
			
		},
		formatDate: function(raceDate){
			let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			let raceUTC = new Date(raceDate);
			
			return months[raceUTC.getMonth()] + ' ' + raceUTC.getDate() + ', ' + raceUTC.getFullYear();
		},
		constructorsList: function(items){
			let c_list = [];
			for (var i = 0; i < items.length; i++) {
				c_list[i] = items[i].name;	
			}
			return c_list.join(', ');
		}
	},
	watch: {
		seasonSelect: function(newYear){
			this.getData(newYear+'/results.json?limit=1000');
			this.getData(newYear+'/driverStandings.json?limit=1000')
		}
	}
});