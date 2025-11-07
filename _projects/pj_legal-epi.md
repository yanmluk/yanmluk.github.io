---
title: "Machine Learning Approach in Legal Epidemiology"
collection: projects
permalink: /project/project4
excerpt: 'Applied Bayesian machine learning methods in epidemiology to estimate the effectiveness of public health policies on adverse health outcomes using observational data.'
date: 2023-08-01
end_date: "Present"
image: '/files/images/project4.png'
buttons:
  - text: "Demo"
    link: 'http://webserv01.cs.stonybrook.edu:5002/dashboard/default'
---

<div style="margin-top: 30px;"></div>
<img src="/files/images/legal_poster.png" alt="Legal-Epi-Explorer" style="border: .5px solid #000;">
<center><i>Poster: Legal-Epi-Explorer</i></center>
<br>

**Background**: Public health laws aimed at reducing opioid-related mortality are often implemented broadly, despite potentially varying effects across counties with different demographic and socioeconomic characteristics. Traditional evaluation approaches may overlook subgroup-specific outcomes critical to equitable policymaking.

**Objective/Purpose**: We developed an interactive platform to support exploratory epidemiologic analysis of public health interventions. The tool enables users to examine the effectiveness of opioid-related laws across specific subgroups of U.S. counties defined by social determinants of health. Methods: The platform allows users to define subgroups of counties by selecting ranges of variables such as poverty, unemployment, and insurance coverage. Users then select a public health law (e.g., Good Samaritan or Naloxone access law) and specify an outcome (e.g., opioid mortality). To evaluate subgroup-specific effects, we apply Bayesian Additive Regression Trees (BART) to estimate counterfactual outcomes, comparing counties with and without the selected law. Results are visualized through histograms and a geographic map that supports inspection of individual counties.

**Results**: Our analysis revealed that while certain Good Samaritan and Naloxone laws were associated with reduced opioid mortality, these effects were concentrated in counties with specific demographic and socioeconomic profiles. The platform enabled rapid, visual identification of these heterogeneous effects and guided deeper investigation. 

**Discussion/Conclusions**: This exploratory tool supports subgroup-level causal inference and helps epidemiologists and policymakers identify which interventions are effective for which populations. By revealing variation in policy outcomes across U.S. counties, the tool can inform more equitable and data-driven public health strategies and serve as a precursor to more advanced statistical analyses.