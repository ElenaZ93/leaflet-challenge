# Leaflet Challenge

## Background

The United States Geological Survey (USGS) is tasked with providing scientific data about natural hazards, ecosystem health, and the impacts of climate and land-use changes. To better visualize the massive amount of earthquake data collected daily, the USGS seeks to develop tools that enhance public education and governmental outreach, ultimately aiming to secure additional funding for their initiatives.

## Project Overview

In this challenge, you will create a visualization of USGS earthquake data using the Leaflet JavaScript library. Your goal is to develop an interactive map that illustrates earthquake occurrences, allowing users to gain insights into seismic activity.

## Before You Begin

1. Create a new repository called `leaflet-challenge`. 
2. Clone the repository to your local machine.
3. Create a directory structure for the Leaflet challenge:
   - `Leaflet-Part-1`
   - `Leaflet-Part-2`
4. Ensure all necessary HTML and JavaScript files are included for analysis.
5. Push your changes to GitHub.

## Files

Download the following files to help you get started:

- [Module 15 Challenge files](link-to-files)

## Instructions

The instructions are divided into two parts:

### Part 1: Create the Earthquake Visualization

#### Step 1: Get Your Dataset

- Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson) page and select a dataset (e.g., "All Earthquakes from the Past 7 Days").
- Use the JSON URL to access the earthquake data.

#### Step 2: Visualize the Data

- Using Leaflet, create a map that plots earthquakes based on their longitude and latitude.
- Adjust the markers to reflect:
  - **Size**: Magnitude of the earthquake.
  - **Color**: Depth of the earthquake (darker colors for greater depths).
- Include popups for additional earthquake information upon clicking the markers.
- Create a legend for context.

### Part 2: Gather and Plot More Data (Optional)

For an additional challenge, plot a second dataset that illustrates the relationship between tectonic plates and seismic activity.

#### Step 1: Find Tectonic Plates Data

- Data on tectonic plates can be found [here](https://github.com/fraxen/tectonicplates).

#### Step 2: Visualize Additional Data

- Overlay the tectonic plates dataset on your earthquake map.
- Add controls to toggle each dataset on and off independently.
- Include options for different base maps.

## Usage

To view the map, open the `index.html` file in your web browser.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- USGS for providing the earthquake data.
- Leaflet for the mapping library.
