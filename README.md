# irish-weather-windows
Visualisation tool for percentage availability of weather windows around Ireland for Hs [1.5, 2, 2.5], wind speed (10m/s) and duration [3, 6, 12, 24, 48, 72] hours.


******************
*** Input Data ***
******************
All calculations use open-source data from the Copernicus store and the open-source software Python. The Python xarray library is used to read the data.

Hourly Data from 2000 to 2019

- Wind -
Copernicus ERA5 dataset
17 by 27.5 km grid 
10m wind speed

- Wave -
Copernicus Atlantic -Iberian Biscay Irish - Ocean Wave Reanalysis dataset
3 by 5 km grid

**********************
*** Weather Window ***
**********************
The weather window availability is the percentage of possible x-duration windows where weather conditions (Hs, wind speed) are below maximum limits for the 
given duration for the month.

The resolution of the wave dataset (0.05° × 0.05°) is higher than that of the wind dataset 
(0.25° x 0.25°), so the nearest wind value is used for each wave data point. The weather window layer is at the resolution of the wave layer.
 
The first step in calculating the weather window for a particular set of inputs (Hs, wind speed and duration) is to calculate the accessibility at each timestep. 
The accessibility is based on a simple boolean evaluation: are the wave and wind conditions within the required limits at the given timestep?

Once the time series of accessibility is calculated, the next step is to look for periods of sustained favourable environmental conditions, i.e. the weather 
windows. Here all possible operating periods with a duration matching the required weather-window value are assessed to see if the weather conditions remain 
suitable for the entire period. The percentage availability of the weather window is calculated based on the percentage of x-duration windows with suitable 
weather conditions for their entire duration.The weather window availability can be considered as the probability of having the required weather window available 
at any given point in the month.



