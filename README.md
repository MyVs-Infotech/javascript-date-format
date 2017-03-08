# javascript-date-format
##Purpose:
####Various date format function in javascript.
#####Release-1 Feature
	-	Date Format Prototype
#####Supported Formats
		1.	dd-mm-yyyy
		2.	mm-dd-yyyy
		3.	yyyy-mm-dd
		4.	yyyy-dd-mm
		5.	dd-mm-yyyy hh:mm
		6.	dd/mm/yyyy
		7.	mm/dd/yyyy
		8.	yyyy/mm/dd
		9.	yyyy/dd/mm
		10.	dd/mm/yyyy hh:mm

#####How to Install
1. Import javascript library named "myvs-date-format.js"
		<script src="[PATH]/myvs-date-format.js"></script>
2. Call method in code where you require date format
	
		new Date().toMyVsFormat("dd-mm-yyyy");
		This will return current date in "dd-mm-yyyy" format.

		var date = new Date(1989, 9, 28);
		date.toMyVsFormat("dd-mm-yyyy");
		This will return specified date in "dd-mm-yyyy" format.