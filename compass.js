// The watch id references the current `watchHeading`
			var watchID = null;

			// Wait for device API libraries to load
			//
			document.addEventListener("deviceready", onDeviceReady, false);

			// device APIs are available
			//
			function onDeviceReady() {
				startWatch();
			}

			// Start watching the compass
			//
			function startWatch() {

				// Update compass 60 times / second form smooth animation
				var options = {
					frequency : 16
				};

				watchID = navigator.compass.watchHeading(onSuccess, onError, options);
			}

			// Stop watching the compass
			//
			function stopWatch() {
				if (watchID) {
					navigator.compass.clearWatch(watchID);
					watchID = null;
				}
			}

			// onSuccess: Get the current heading
			//
			function onSuccess(heading) {
				//var element = document.getElementById('heading');
				//element.innerHTML = 'Heading: ' + heading.magneticHeading;
				var needle = document.getElementById("needle");
				var transform = "rotate(-" + heading.magneticHeading + "deg)";
				needle.style.webkitTransform = transform;
			}

			// onError: Failed to get the heading
			//
			function onError(compassError) {
				alert('Compass error: ' + compassError.code);
			}