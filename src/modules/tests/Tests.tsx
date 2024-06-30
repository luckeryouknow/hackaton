"use client"

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Tests() {
  const [data, setData] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState<{ index: any, isCorrect: any }>({ index: null, isCorrect: null });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const audioRefs = useRef<any>();
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    axios("http://127.0.0.1:8001/question_with_answer/")
      .then(response => {
        const results = response.data.results;
        setData(results);
        setNextUrl(response.data.next);

        console.log(results);
        console.log(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const nextButtonHandler = () => {
    axios(nextUrl)
      .then(response => {
        const results = response.data.results;
        setData(results);
        setNextUrl(response.data.next);

        console.log(results);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

    setPlayingIndex(null);
    setSelectedOption({ index: null, isCorrect: null });
    setFeedbackMessage("");
  }

  const handlePlayPause = (index: any, event: any) => {
    const isPlaying = playingIndex === index;
    if (isPlaying) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
      }
      audioRefs.current[index].play();
      setPlayingIndex(index);

      // Convert event.target.id to boolean correctly
      const isCorrect = event.currentTarget.id === "true";
      console.log(event.currentTarget.id);// Compare with string "true"
      setSelectedOption({ index, isCorrect });
      setFeedbackMessage(isCorrect ? "Correct answer!" : "Wrong answer!");
      console.log({ feedbackMessage, isCorrect });
    }
  };

  return (
    <section className={"py-5"}>
      <div className={"relative h-screen container mx-auto"}>
        <div className={"xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 mx-auto xl:mx-0 w-[300px] xl:w-[1000px] py-[20px] px-[20px] xl:px-[120px] xl:py-[100px] bg-white border-[8px] border-[#63CAE0] rounded-[30px]"}>
          {data.map((test: any, testIndex) => (
            <div key={test.id}>
              <h2 className={"font-extrabold text-center text-[30px] xl:text-[48px] mb-10"}>{test.question}</h2>
              <div className={"flex flex-col xl:flex-row items-center xl:gap-[120px]"}>
                <img src={test.image_upload} alt={"Tiger"} width={330} height={350} />
                <div className={"flex flex-col gap-3"}>
                  {test.answers.map((option, optionIndex) => {
                    const audioRef = el => {
                      audioRefs.current[testIndex * test.answers.length + optionIndex] = el;
                    };

                    const isSelected = selectedOption.index === testIndex * test.answers.length + optionIndex;
                    const borderColor = isSelected ? (selectedOption.isCorrect ? 'border-green-600' : 'border-red-600') : 'border-transparent';

                    return (
                      <div key={option.id} className={`flex w-fit gap-5 ${borderColor} border-4 p-2`}>
                        <button
                          id={`${option.is_correct}`}
                          className={`audio-button ${playingIndex === testIndex * test.answers.length + optionIndex ? 'playing' : ''}`}
                          onClick={(event) => handlePlayPause(testIndex * test.answers.length + optionIndex, event)}
                        >
                          <svg width="63" height="68" viewBox="0 0 63 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_134_41349" maskUnits="userSpaceOnUse" x="0.0322266" y="0.693848" width="62" height="67" fill="black">
                              <rect fill="white" x="0.0322266" y="0.693848" width="62" height="67"/>
                              <path d="M0.0322266 10.6938C0.0322266 5.171 4.50938 0.693848 10.0322 0.693848H52.0322C57.5551 0.693848 62.0322 5.171 62.0322 10.6938V52.6938C62.0322 58.2167 57.5551 62.6938 52.0322 62.6938H10.0322C4.50938 62.6938 0.0322266 58.2167 0.0322266 52.6938V10.6938Z" fill="#34A853"/>
                            </mask>
                            <path d="M0.0322266 10.6938C0.0322266 5.171 4.50938 0.693848 10.0322 0.693848H52.0322C57.5551 0.693848 62.0322 5.171 62.0322 10.6938V52.6938C62.0322 58.2167 57.5551 62.6938 52.0322 62.6938H10.0322C4.50938 62.6938 0.0322266 58.2167 0.0322266 52.6938V10.6938Z" fill="#34A853"/>
                            <path d="M0.0322266 0.693848H62.0322H0.0322266ZM62.0322 52.6938C62.0322 60.9781 55.3165 67.6938 47.0322 67.6938H15.0322C6.74796 67.6938 0.0322266 60.9781 0.0322266 52.6938C0.0322266 55.4553 4.50938 57.6938 10.0322 57.6938H52.0322C57.5551 57.6938 62.0322 55.4553 62.0322 52.6938ZM0.0322266 62.6938V0.693848V62.6938ZM62.0322 0.693848V62.6938V0.693848Z" fill="#126227" mask="url(#path-1-outside-1_134_41349)"/>
                            <path d="M19.0322 29.0296V34.3629C19.0322 35.0963 19.6322 35.6963 20.3656 35.6963H24.3656L28.7522 40.0829C29.5922 40.9229 31.0322 40.3229 31.0322 39.1363V24.2429C31.0322 23.0563 29.5922 22.4563 28.7522 23.2963L24.3656 27.6963H20.3656C19.6322 27.6963 19.0322 28.2963 19.0322 29.0296ZM37.0322 31.6963C37.0322 29.3363 35.6722 27.3096 33.6989 26.3229V37.0563C35.6722 36.0829 37.0322 34.0563 37.0322 31.6963ZM33.6989 21.6296V21.8963C33.6989 22.4029 34.0322 22.8429 34.4989 23.0296C37.9389 24.4029 40.3656 27.7763 40.3656 31.6963C40.3656 35.6163 37.9389 38.9896 34.4989 40.3629C34.0189 40.5496 33.6989 40.9896 33.6989 41.4963V41.7629C33.6989 42.6029 34.5389 43.1896 35.3122 42.8963C39.8322 41.1763 43.0322 36.8163 43.0322 31.6963C43.0322 26.5763 39.8322 22.2163 35.3122 20.4963C34.5389 20.1896 33.6989 20.7896 33.6989 21.6296Z" fill="white"/>
                          </svg>
                        </button>
                        <audio ref={audioRef} src={option.audio_file} style={{ display: 'none' }}></audio>
                        <h3 className={"w-fit text-[30px] xl:text-[36px] font-extrabold"}>{option.answer}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
              {playingIndex !== null && (
                <div className="text-center mt-5">
                  <p className={`text-2xl font-bold ${feedbackMessage === "Correct answer!" ? 'text-green-600' : 'text-red-600'}`}>
                    {feedbackMessage === "Correct answer!" ? "Правильно!" : "Неправильно"}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className={"flex items-center flex-row-reverse w-full"}>
            <button className={"block w-fit ml-auto mr-0"} onClick={() => nextButtonHandler()}>
              <svg width="151" height="67" viewBox="0 0 151 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_134_40560" maskUnits="userSpaceOnUse" x="0.791992" y="0" width="150"
                      height="67" fill="black">
                  <rect fill="white" x="0.791992" width="150" height="67"/>
                  <path
                    d="M0.791992 10C0.791992 4.47715 5.26915 0 10.792 0H140.792C146.315 0 150.792 4.47715 150.792 10V52C150.792 57.5228 146.315 62 140.792 62H10.792C5.26914 62 0.791992 57.5228 0.791992 52V10Z"/>
                </mask>
                <path
                  d="M0.791992 10C0.791992 4.47715 5.26915 0 10.792 0H140.792C146.315 0 150.792 4.47715 150.792 10V52C150.792 57.5228 146.315 62 140.792 62H10.792C5.26914 62 0.791992 57.5228 0.791992 52V10Z"
                  fill="#E0A326"/>
                <path
                  d="M0.791992 0H150.792H0.791992ZM150.792 52C150.792 60.2843 144.076 67 135.792 67H15.792C7.50772 67 0.791992 60.2843 0.791992 52C0.791992 54.7614 5.26914 57 10.792 57H140.792C146.315 57 150.792 54.7614 150.792 52ZM0.791992 62V0V62ZM150.792 0V62V0Z"
                  fill="#C56E0D" mask="url(#path-1-outside-1_134_40560)"/>
                <path
                  d="M32.4288 41.06C31.9755 41.06 31.6288 40.94 31.3888 40.7C31.1621 40.4733 31.0488 40.1333 31.0488 39.68V36.46C31.0488 35.5267 31.5221 35.06 32.4688 35.06H33.7488L32.0288 35.52C32.7755 34.8267 33.3288 33.7867 33.6888 32.4C34.0621 31.0133 34.2488 29.2533 34.2488 27.12V25.02C34.2488 24.5 34.3888 24.1 34.6688 23.82C34.9488 23.54 35.3555 23.4 35.8888 23.4H42.9688C43.4888 23.4 43.8888 23.54 44.1688 23.82C44.4488 24.1 44.5888 24.5 44.5888 25.02V36.2L43.4488 35.06H45.1888C45.6421 35.06 45.9888 35.18 46.2288 35.42C46.4688 35.66 46.5888 36.0067 46.5888 36.46V39.68C46.5888 40.6 46.1421 41.06 45.2488 41.06C44.8088 41.06 44.4688 40.94 44.2288 40.7C43.9888 40.4733 43.8688 40.1333 43.8688 39.68V37.5H33.7888V39.68C33.7888 40.6 33.3355 41.06 32.4288 41.06ZM35.5888 35.06H41.4688V25.82H37.1088V27.42C37.1088 29.2067 36.9821 30.7267 36.7288 31.98C36.4755 33.22 36.0955 34.2467 35.5888 35.06ZM52.2597 37.72C51.5397 37.72 50.8931 37.58 50.3197 37.3C49.7464 37.02 49.2997 36.64 48.9797 36.16C48.6597 35.68 48.4997 35.14 48.4997 34.54C48.4997 33.82 48.6864 33.2533 49.0597 32.84C49.4331 32.4133 50.0397 32.1133 50.8797 31.94C51.7197 31.7533 52.8331 31.66 54.2197 31.66H55.2797V33.22H54.2397C53.5597 33.22 53.0064 33.26 52.5797 33.34C52.1664 33.4067 51.8664 33.5267 51.6797 33.7C51.5064 33.8733 51.4197 34.1133 51.4197 34.42C51.4197 34.7933 51.5464 35.1 51.7997 35.34C52.0664 35.58 52.4464 35.7 52.9397 35.7C53.3264 35.7 53.6664 35.6133 53.9597 35.44C54.2664 35.2533 54.5064 35.0067 54.6797 34.7C54.8531 34.38 54.9397 34.02 54.9397 33.62V31.32C54.9397 30.7333 54.8064 30.32 54.5397 30.08C54.2731 29.8267 53.8197 29.7 53.1797 29.7C52.8197 29.7 52.4264 29.7467 51.9997 29.84C51.5864 29.92 51.1264 30.06 50.6197 30.26C50.3264 30.3933 50.0664 30.4267 49.8397 30.36C49.6131 30.28 49.4397 30.1467 49.3197 29.96C49.1997 29.76 49.1397 29.5467 49.1397 29.32C49.1397 29.08 49.2064 28.8533 49.3397 28.64C49.4731 28.4133 49.6931 28.2467 49.9997 28.14C50.6264 27.8867 51.2131 27.7133 51.7597 27.62C52.3197 27.5267 52.8331 27.48 53.2997 27.48C54.3264 27.48 55.1664 27.6333 55.8197 27.94C56.4864 28.2333 56.9864 28.6933 57.3197 29.32C57.6531 29.9333 57.8197 30.7267 57.8197 31.7V36.14C57.8197 36.6333 57.6997 37.0133 57.4597 37.28C57.2197 37.5467 56.8731 37.68 56.4197 37.68C55.9664 37.68 55.6131 37.5467 55.3597 37.28C55.1197 37.0133 54.9997 36.6333 54.9997 36.14V35.4L55.1397 35.52C55.0597 35.9733 54.8864 36.3667 54.6197 36.7C54.3664 37.02 54.0397 37.2733 53.6397 37.46C53.2397 37.6333 52.7797 37.72 52.2597 37.72ZM69.0646 37.68C68.5712 37.68 68.1912 37.5467 67.9246 37.28C67.6712 37.0133 67.5446 36.6333 67.5446 36.14V30.02H64.9846V31.12C64.9846 31.9733 64.9246 32.7467 64.8046 33.44C64.6846 34.1333 64.5046 34.7467 64.2646 35.28C64.0246 35.8133 63.7179 36.2667 63.3446 36.64C62.9712 37 62.5246 37.2867 62.0046 37.5C61.6579 37.6467 61.3446 37.6867 61.0646 37.62C60.7846 37.5533 60.5512 37.4267 60.3646 37.24C60.1912 37.0533 60.0779 36.8333 60.0246 36.58C59.9846 36.3133 60.0179 36.0533 60.1246 35.8C60.2446 35.5333 60.4579 35.3067 60.7646 35.12C61.0579 34.96 61.2979 34.7533 61.4846 34.5C61.6712 34.2467 61.8179 33.9467 61.9246 33.6C62.0312 33.2533 62.1046 32.8733 62.1446 32.46C62.1979 32.0333 62.2246 31.5533 62.2246 31.02V29.38C62.2246 28.8333 62.3646 28.4133 62.6446 28.12C62.9379 27.8267 63.3579 27.68 63.9046 27.68H68.8846C69.4312 27.68 69.8446 27.8267 70.1246 28.12C70.4179 28.4133 70.5646 28.8333 70.5646 29.38V36.14C70.5646 36.6333 70.4312 37.0133 70.1646 37.28C69.9112 37.5467 69.5446 37.68 69.0646 37.68ZM75.3316 37.66C74.8383 37.66 74.4583 37.52 74.1916 37.24C73.9383 36.9467 73.8116 36.54 73.8116 36.02V29.18C73.8116 28.6467 73.9383 28.24 74.1916 27.96C74.4583 27.6667 74.8383 27.52 75.3316 27.52C75.8116 27.52 76.1783 27.6667 76.4316 27.96C76.6983 28.24 76.8316 28.6467 76.8316 29.18V36.02C76.8316 36.54 76.7049 36.9467 76.4516 37.24C76.1983 37.52 75.8249 37.66 75.3316 37.66ZM75.3316 25.88C74.7716 25.88 74.3383 25.7533 74.0316 25.5C73.7383 25.2333 73.5916 24.86 73.5916 24.38C73.5916 23.8867 73.7383 23.5133 74.0316 23.26C74.3383 22.9933 74.7716 22.86 75.3316 22.86C75.8916 22.86 76.3183 22.9933 76.6116 23.26C76.9049 23.5133 77.0516 23.8867 77.0516 24.38C77.0516 24.86 76.9049 25.2333 76.6116 25.5C76.3183 25.7533 75.8916 25.88 75.3316 25.88Z"
                  fill="white"/>
                <path
                  d="M118.126 31C118.126 23.64 112.152 17.6666 104.792 17.6666C97.4323 17.6666 91.459 23.64 91.459 31C91.459 38.36 97.4323 44.3333 104.792 44.3333C112.152 44.3333 118.126 38.36 118.126 31ZM94.1257 31C94.1257 25.1066 98.899 20.3333 104.792 20.3333C110.686 20.3333 115.459 25.1066 115.459 31C115.459 36.8933 110.686 41.6666 104.792 41.6666C98.899 41.6666 94.1257 36.8933 94.1257 31ZM110.126 31L104.792 36.3333L102.912 34.4533L105.019 32.3333H99.459V29.6666H105.019L102.899 27.5466L104.792 25.6666L110.126 31Z"
                  fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tests;
