# Lead Predictor Dashboard

## Overview
Lead Predictor is a static web dashboard that calculates and visualizes marketing funnel metrics. By inputting marketing goals and expected conversion rates, it automatically predicts the volume of prospects, leads, and customers required over a 6-month campaign.

## Features
- **Interactive Parameters**: Set Total Revenue, Average Order Value (AOV), and conversion rates (via percentage sliders).
- **Real-Time Calculation**: Immediately computes required Customers, Leads, and Prospects without page reloads.
- **Data Visualization**: A horizontal, stacked bar chart simulating progressive accumulation over a 6-month campaign.
- **Performance Cards**: Quick overview metrics with dynamically updating progress trackers.
- **Fault-Tolerant Logic**: Built-in boundary checks to handle empty inputs, negative numbers, and prevent division-by-zero errors.

## Project Structure
- index.html: The dashboard layout including the settings sidebar, chart canvas, and summary cards.
- styles.css: Dark-mode themed styling powered by CSS Grid, Flexbox, and native CSS variables. No external CSS frameworks are used.
- pp.js: Core application script handling DOM events, slider gradients, calculations, and chart drawing.

## Calculations
The predictor runs three reverse-funnel equations:
1. **Customers** = Total Revenue / Average Order Value
2. **Leads** = (Customers * 100) / Lead Response Rate
3. **Prospects** = (Leads * 100) / Prospect Response Rate

## Getting Started
To use or preview the dashboard, simply open index.html in any modern web browser. There are no build steps, dependencies, or package managers required.
