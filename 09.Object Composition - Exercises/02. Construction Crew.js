function solve(worker) {
    if(worker.handsShaking){
        worker.bloodAlcoholLevel += 0.1 * worker.experience * worker.weight;
        worker.handsShaking = false;
    }

    return worker;
}

solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
);