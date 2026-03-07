document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const techDiffRadios = document.getElementsByName("tech-diff");
    const procDiffRadios = document.getElementsByName("proc-diff");

    const needsDeploymentCb = document.getElementById("needs-deployment");
    const dependentModulesCb = document.getElementById("dependent-modules");
    const needsTestsCb = document.getElementById("needs-tests");
    const multipleTechCb = document.getElementById("multiple-tech");
    const multipleBusCb = document.getElementById("multiple-bus");

    const resultPointsEl = document.getElementById("result-points");
    const form = document.getElementById("estimator-form");

    // Constants for Scoring
    const MULTI_TECH_TESTS = 1.15; // Low impact
    const MULTI_TECH_DOMAINS = 1.30; // Medium impact
    const MULTI_BUS_DOMAINS = 1.50; // High impact
    const MULTI_DEPENDENT = 1.15; // Low impact
    const ADD_DEPLOYMENT = 1; // Low impact

    function getRadioValue(radios) {
        for (const radio of radios) {
            if (radio.checked) {
                return parseInt(radio.value, 10);
            }
        }
        return 5; // default fallback
    }

    function calculateStoryPoints() {
        // Base values (2 = Easy, 5 = Medium, 10 = Hard)
        const techDiff = getRadioValue(techDiffRadios);
        const procDiff = getRadioValue(procDiffRadios);

        // Modifiers
        const needsDeployment = needsDeploymentCb.checked;
        const dependentModules = dependentModulesCb.checked;
        const needsTests = needsTestsCb.checked;
        const multipleTech = multipleTechCb.checked;
        const multipleBus = multipleBusCb.checked;

        // Apply Multipliers
        const techMult = (needsTests ? MULTI_TECH_TESTS : 1) * (multipleTech ? MULTI_TECH_DOMAINS : 1);
        const procMult = (multipleBus ? MULTI_BUS_DOMAINS : 1);

        const adjustedTech = techDiff * techMult;
        const adjustedProc = procDiff * procMult;

        // Combine
        let totalDifficulty = adjustedTech + adjustedProc;

        // Overall Modifiers
        if (dependentModules) {
            totalDifficulty *= MULTI_DEPENDENT;
        }

        if (needsDeployment) {
            totalDifficulty += ADD_DEPLOYMENT;
        }

        let score = totalDifficulty;
        let storyPoints = 1;

        // Map score mapped to fibonacci sequence
        if (score <= 4.0) storyPoints = 1;
        else if (score <= 7.0) storyPoints = 2;
        else if (score <= 11.0) storyPoints = 3;
        else if (score <= 16.0) storyPoints = 5;
        else if (score <= 22.0) storyPoints = 8;
        else if (score <= 29.0) storyPoints = 13;
        else storyPoints = 21;

        // Rule: user task that has at least one variable that increases difficulty cannot be evaluated as 1.
        const hasIncreasingVariable = needsDeployment || dependentModules || needsTests || multipleTech || multipleBus;
        if (hasIncreasingVariable && storyPoints === 1) {
            storyPoints = 2; // Bump up to 2
        }

        updateUI(storyPoints);
    }

    function updateUI(points) {
        // Update Points with animation if changed
        if (resultPointsEl.innerText !== points.toString()) {
            resultPointsEl.classList.remove('pop');
            // Trigger reflow to restart animation
            void resultPointsEl.offsetWidth;
            resultPointsEl.classList.add('pop');
            resultPointsEl.innerText = points;
        }
    }

    // Attach Event Listeners
    form.addEventListener("input", calculateStoryPoints);
    form.addEventListener("change", calculateStoryPoints);

    // Initial Calculation
    calculateStoryPoints();
});
