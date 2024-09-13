function timeToSeconds(time) {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let video_num = timeToSeconds(video_len);
    let pos_num = timeToSeconds(pos);
    let op_start_num = timeToSeconds(op_start);
    let op_end_num = timeToSeconds(op_end);
    
    if (pos_num >= op_start_num && pos_num <= op_end_num) {
        pos_num = op_end_num;
    }

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === "next") {
            pos_num += 10;
            if (pos_num > video_num) {
                pos_num = video_num;
            } else if (pos_num >= op_start_num && pos_num <= op_end_num) {
                pos_num = op_end_num;
            }
        } else if (commands[i] === "prev") {
            pos_num -= 10;
            if (pos_num < 0 ) {
                pos_num = 0;
                if(pos_num >= op_start_num && pos_num <= op_end_num){
                    pos_num = op_end_num
                }
            } else if (pos_num >= op_start_num && pos_num <= op_end_num) {
                pos_num = op_end_num;
            }
        }
    }

    let minutes = Math.floor(pos_num / 60);
    let seconds = pos_num % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
}