function modifyWorker(worker){
    if (worker.handsShaking == true){
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
    }
    return worker;
}