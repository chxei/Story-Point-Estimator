document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const techDiffRadios = document.getElementsByName("tech-diff");
    const procDiffRadios = document.getElementsByName("proc-diff");

    const needsDeploymentRadios = document.getElementsByName("needs-deployment");
    const needsTestsRadios = document.getElementsByName("needs-tests");
    const dependentModulesRadios = document.getElementsByName("dependent-modules");
    const multipleTechRadios = document.getElementsByName("multiple-tech");
    const multipleBusRadios = document.getElementsByName("multiple-bus");

    const resultPointsEl = document.getElementById("result-points");
    const form = document.getElementById("estimator-form");

    function getRadioValue(radios, defaultValue = 2) {
        for (const radio of radios) {
            if (radio.checked) {
                return parseFloat(radio.value);
            }
        }
        return defaultValue;
    }

    function calculateStoryPoints() {
        // Base values
        const techDiff = getRadioValue(techDiffRadios, 2);
        const procDiff = getRadioValue(procDiffRadios, 2);

        // Modifiers
        const needsDeployment = getRadioValue(needsDeploymentRadios, 0);
        const needsTests = getRadioValue(needsTestsRadios, 1.0);
        const dependentModules = getRadioValue(dependentModulesRadios, 1.0);
        const multipleTech = getRadioValue(multipleTechRadios, 1.0);
        const multipleBus = getRadioValue(multipleBusRadios, 1.0);

        // Apply Multipliers
        const techMult = needsTests * multipleTech;
        const procMult = multipleBus;

        const adjustedTech = techDiff * techMult;
        const adjustedProc = procDiff * procMult;

        // Combine
        let totalDifficulty = adjustedTech + adjustedProc;

        // Overall Modifiers
        totalDifficulty *= dependentModules;
        totalDifficulty += needsDeployment;

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
        const hasIncreasingVariable = needsDeployment > 0 || dependentModules > 1.0 || needsTests > 1.0 || multipleTech > 1.0 || multipleBus > 1.0;
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
    form.addEventListener("reset", () => {
        setTimeout(calculateStoryPoints, 0);
    });

    // Initial Calculation
    calculateStoryPoints();
});
