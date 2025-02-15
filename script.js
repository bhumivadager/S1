// Tobacco facts
const facts = [
    'Tobacco use is the leading cause of preventable death worldwide.',
    'Smoking can cause lung cancer, heart disease, and stroke.',
    'Secondhand smoke can cause serious health problems in nonsmokers.',
];

// Health risks of tobacco
const risks = [
    'Lung cancer',
    'Heart disease',
    'Stroke',
    'Chronic obstructive pulmonary disease (COPD)',
];

// Quit smoking resources
const resources = [
    'National Quitline: 1-800-QUIT-NOW (1-800-784-8669)',
    'Smokefree.gov: smokefree.gov',
    'American Cancer Society: cancer.org',
];

// Display tobacco facts
const factList = document.getElementById('fact-list');
facts.forEach((fact) => {
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    factList.appendChild(listItem);
});

// Display health risks of tobacco
const riskList = document.getElementById('risk-list');
risks.forEach((risk) => {
    const listItem = document.createElement('li');
    listItem.textContent = risk;
    riskList.appendChild(listItem);
});

// Display quit smoking resources
const resourceList = document.getElementById('resource-list');
resources.forEach((resource) => {
    const listItem = document.createElement('li');
    listItem.textContent = resource;
    resourceList.appendChild(listItem);
});
