import * as React from "react"
import { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react";

const UiBUBMarcusLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg height={17} width={24} viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.105 13.676v-.082a.15.15 0 0 0-.001-.018q-.005-.041-.029-.141a6.184 6.184 0 0 0-.011-.046 1 1 0 0 1-.017-.1q-.024-.17-.024-.469v-.937q.059-.106.082-.229a1.344 1.344 0 0 0 .024-.252q0-.328-.053-.632a3.684 3.684 0 0 1-.052-.592 4.056 4.056 0 0 1-.001-.041v-.141a.276.276 0 0 1 .021-.046.339.339 0 0 1 .015-.024 1.852 1.852 0 0 0 .011-.017q.029-.045.034-.06a.017.017 0 0 0 .001-.005q.012-.012.024-.117a3.129 3.129 0 0 0 .01-.112 4.193 4.193 0 0 0 .007-.123 5.712 5.712 0 0 1 .018-.258 6.871 6.871 0 0 1 .006-.061q.007-.076.015-.132a2.259 2.259 0 0 1 .003-.018v-.035a2.275 2.275 0 0 0-.005-.132q-.006-.117-.025-.26a1.042 1.042 0 0 0-.039-.183q-.035-.111-.096-.198V6.164a.053.053 0 0 0 .013-.009q.018-.017.038-.057a.536.536 0 0 0 .002-.004q.022-.045.028-.082a.165.165 0 0 0 .001-.024.11.11 0 0 0-.001-.018q-.006-.033-.029-.096a1.741 1.741 0 0 0-.011-.026 2.377 2.377 0 0 1-.013-.037q-.028-.073-.028-.092v-.364a.097.097 0 0 1 .004-.023q.006-.023.022-.053a.453.453 0 0 1 .01-.017l.046-.071a.026.026 0 0 0-.002-.011q-.003-.006-.009-.012a.06.06 0 0 1-.006-.007q-.009-.012-.023-.04a.908.908 0 0 1-.006-.012.321.321 0 0 1-.024-.041.264.264 0 0 1-.012-.029v-.82a.515.515 0 0 1-.006-.02l-.021-.081a5.237 5.237 0 0 1-.008-.034 3.269 3.269 0 0 0-.026-.104 4.272 4.272 0 0 0-.032-.113 4.272 4.272 0 0 1-.033-.113 3.269 3.269 0 0 1-.026-.104q-.02-.086-.032-.124a.413.413 0 0 0-.003-.01q0-.036-.041-.071a.463.463 0 0 1-.019-.017q-.025-.024-.034-.041h-.082l-.094.093q-.058.059-.111.118a3.155 3.155 0 0 1-.051.055 2.434 2.434 0 0 1-.049.05l-.058.059-.012.052q-.012.053-.029.112a1.701 1.701 0 0 0-.02.071 1.41 1.41 0 0 0-.009.04 1.821 1.821 0 0 0-.004.018q-.008.036-.008.046-.188.551-.457 1.073a14.05 14.05 0 0 1-.526.931 12.846 12.846 0 0 1-.037.059 28.89 28.89 0 0 0-.369.745 31.861 31.861 0 0 0-.053.111 12.565 12.565 0 0 1-.445.855 25.926 25.926 0 0 1-.557.967 6.839 6.839 0 0 0-.498 1.002q-.022.011-.062.122a1.652 1.652 0 0 0-.002.007 2.141 2.141 0 0 0-.014.041q-.021.063-.026.095a.11.11 0 0 0-.001.016.057.057 0 0 0-.005.007q-.013.018-.043.072a2.887 2.887 0 0 0-.005.009 42.155 42.155 0 0 0-.042.079 52.069 52.069 0 0 0-.046.085 52.069 52.069 0 0 1-.045.085 42.155 42.155 0 0 1-.043.079 2.471 2.471 0 0 1-.014.026q-.029.052-.038.062-.059.187-.106.41a1.393 1.393 0 0 1-.164.422 3.306 3.306 0 0 1-.083.139q-.044.07-.098.15a7.783 7.783 0 0 1-.118.168 4.953 4.953 0 0 0-.187.28 3.794 3.794 0 0 0-.135.236.092.092 0 0 1-.001.011q-.004.027-.02.093a3.722 3.722 0 0 1-.008.03 7.485 7.485 0 0 0-.007.027q-.018.068-.021.089a.055.055 0 0 0-.001.007 1.34 1.34 0 0 1-.013.019l-.087.122a75.68 75.68 0 0 1-.081.111 102.378 102.378 0 0 1-.089.123q-.094.129-.182.258a4.517 4.517 0 0 1-.052.075q-.046.065-.083.11a1.235 1.235 0 0 1-.011.014l-.059.071a.164.164 0 0 1 0 .013l-.008.053a1.706 1.706 0 0 1-.003.022 4.657 4.657 0 0 0-.012.067 5.94 5.94 0 0 0-.012.073q-.012.076-.029.141-.018.064-.029.076 0 .012-.071.111-.07.1-.094.147-.175.252-.222.495a.967.967 0 0 0-.006.032q-.041.258-.135.551a.059.059 0 0 1-.002.013q-.006.026-.033.081a1.997 1.997 0 0 0-.008.016q-.027.056-.027.066a.08.08 0 0 0-.011.015q-.016.026-.038.088a1.798 1.798 0 0 0-.016.043l-.087.264a20.934 20.934 0 0 1-.046.135 16.054 16.054 0 0 1-.042.123l-.053.152q-.024.106-.106.141a.429.429 0 0 1-.11.03.56.56 0 0 1-.077.005.152.152 0 0 1-.061-.014q-.058-.025-.127-.097a2.237 2.237 0 0 1-.118-.137 2.857 2.857 0 0 1-.093-.121 2.857 2.857 0 0 1-.12-.181 2.383 2.383 0 0 1-.061-.106 16.303 16.303 0 0 1-.036-.066l-.052-.1a3.561 3.561 0 0 1-.023-.045q-.118-.399-.2-.797a4.484 4.484 0 0 0-.18-.639 4.049 4.049 0 0 0-.042-.111q-.031-.031-.084-.138a2.36 2.36 0 0 1-.016-.032 21.258 21.258 0 0 1-.066-.139 25.31 25.31 0 0 1-.069-.148 25.31 25.31 0 0 0-.069-.148 21.258 21.258 0 0 0-.066-.139q-.061-.129-.074-.167a.183.183 0 0 1-.002-.003.087.087 0 0 1-.011-.015q-.016-.025-.038-.081a1.628 1.628 0 0 1-.015-.039 12.529 12.529 0 0 1-.043-.117 16.513 16.513 0 0 1-.045-.129 153.25 153.25 0 0 0-.045-.13 124.41 124.41 0 0 0-.043-.122q-.041-.117-.064-.152a2.184 2.184 0 0 0-.034-.095q-.03-.078-.06-.134a2.42 2.42 0 0 0-.1-.17 3.35 3.35 0 0 1-.077-.127 3.878 3.878 0 0 1-.028-.049q-.041-.073-.079-.174a1.956 1.956 0 0 1-.021-.06 1.659 1.659 0 0 1-.211-.445 3.289 3.289 0 0 0-.108-.306 2.81 2.81 0 0 0-.056-.128l-.035-.047-.054-.073a12.999 12.999 0 0 1-.028-.038 9.09 9.09 0 0 1-.045-.063 7.734 7.734 0 0 1-.043-.06.986.986 0 0 0-.03-.041l-.029-.034a.462.462 0 0 0-.017-.019l-.082-.082a.188.188 0 0 1-.006-.012l-.036-.101a7.583 7.583 0 0 1-.011-.033l-.088-.264a7.117 7.117 0 0 1-.044-.136 5.711 5.711 0 0 1-.038-.128q-.033-.117-.035-.144a.041.041 0 0 1 0-.002 2.065 2.065 0 0 0-.122-.2 2.622 2.622 0 0 0-.118-.158q-.134-.165-.214-.316a1.395 1.395 0 0 1-.015-.029.134.134 0 0 0-.001-.019q-.007-.045-.04-.157a3.477 3.477 0 0 1-.014-.049q-.027-.098-.027-.127a.204.204 0 0 1-.01-.011q-.026-.031-.083-.112a.695.695 0 0 1-.031-.047q-.028-.048-.036-.084a.125.125 0 0 1-.004-.027 1.506 1.506 0 0 1-.216-.336 1.698 1.698 0 0 1-.018-.039 7.173 7.173 0 0 1-.176-.434q-.082-.222-.158-.451-.076-.228-.182-.439a.049.049 0 0 0-.002-.014q-.006-.021-.029-.058a.8.8 0 0 0-.01-.016.487.487 0 0 1-.018-.031q-.023-.043-.023-.069a4.248 4.248 0 0 1-.233-.543 4.952 4.952 0 0 1-.066-.201 4.035 4.035 0 0 0-.322-.768l-.082-.07a3.308 3.308 0 0 1-.155-.234 2.619 2.619 0 0 1-.097-.176q-.099-.199-.187-.404a18.205 18.205 0 0 1-.17-.411 3.528 3.528 0 0 0-.143-.31 4.035 4.035 0 0 0-.057-.106H4.582q-.02 0-.066.039a.67.67 0 0 0-.016.014 5.663 5.663 0 0 0-.027.025l-.051.047a.619.619 0 0 0-.004.004 2.592 2.592 0 0 0-.168.28q-.077.147-.146.318a4.451 4.451 0 0 0-.026.064 4.472 4.472 0 0 0-.129.38 3.31 3.31 0 0 0-.082.353v1.828q0 .01-.008.067a5.495 5.495 0 0 1-.004.021 3.337 3.337 0 0 1-.013.079 4.184 4.184 0 0 1-.016.085q-.017.088-.029.164a5.186 5.186 0 0 0-.004.026l-.008.058a.052.052 0 0 0 0 .004v.082q0 .033.01.153a11.191 11.191 0 0 0 .002.017q.012.135.029.287.018.152.029.287a9.665 9.665 0 0 1 .004.047q.008.087.008.118a.274.274 0 0 1 0 .005 2.075 2.075 0 0 0 .002.073q.004.123.022.325a6.125 6.125 0 0 1 .019.318 7.741 7.741 0 0 1 .004.268 8.012 8.012 0 0 1-.006.314 6 6 0 0 1-.017.284 11.544 11.544 0 0 0-.011.125q-.011.156-.013.242a1.36 1.36 0 0 0 0 .02q.035.023.065.123a1.034 1.034 0 0 0 .02.063q.011.03.023.055a.443.443 0 0 0 .021.04v.059a.768.768 0 0 1-.105.392.782.782 0 0 0-.101.316.971.971 0 0 0-.005.1.674.674 0 0 0 .001.025q.001.04.007.114a8.437 8.437 0 0 0 .004.049 7.956 7.956 0 0 0 .029.287 12.703 12.703 0 0 1 .016.14 9.745 9.745 0 0 1 .013.129 10.826 10.826 0 0 1 .004.043q.007.073.008.098a.173.173 0 0 1 0 .006.762.762 0 0 0 .003.062l.008.069a1.924 1.924 0 0 0 .013.08 1.726 1.726 0 0 1 .014.091q.009.073.009.131a6.961 6.961 0 0 1-.01.387 5.609 5.609 0 0 1-.019.246 5.694 5.694 0 0 0-.022.308 7.429 7.429 0 0 0-.008.337 12.472 12.472 0 0 0 .021.726 11.417 11.417 0 0 0 .003.047 3.711 3.711 0 0 0 .117.727q.012.105.082.181a.715.715 0 0 0 .158.129q.088.053.182.088a6.284 6.284 0 0 0 .067.025l.051.018a3.476 3.476 0 0 0 .046.016q.033 0 .163.01a14.317 14.317 0 0 1 .019.002 12.248 12.248 0 0 1 .152.013 15.347 15.347 0 0 1 .164.016 6.4 6.4 0 0 1 .164.019 5.18 5.18 0 0 1 .152.022 2.014 2.014 0 0 1 .052.009q.078.014.113.029a.103.103 0 0 1 .017.009q.141.011.311.035a1.386 1.386 0 0 1 .241.055 1.231 1.231 0 0 1 .075.027q.147.058.252.176.106.117.106.316a.228.228 0 0 1-.077.174.312.312 0 0 1-.023.019.884.884 0 0 1-.138.086 1.103 1.103 0 0 1-.096.043 1.402 1.402 0 0 1-.253.073 1.302 1.302 0 0 1-.017.004 2.564 2.564 0 0 1-.063.01q-.089.013-.142.013H1.746q-.187.058-.28.082-.064.016-.154.021a1.629 1.629 0 0 1-.093.002q-.199 0-.422-.023a2.177 2.177 0 0 1-.211-.032 1.636 1.636 0 0 1-.188-.05q-.051-.017-.114-.053a1.215 1.215 0 0 1-.05-.029q-.093-.059-.093-.082a.667.667 0 0 1-.077-.1Q0 16.345 0 16.242a.405.405 0 0 1 .006-.068q.008-.043.023-.09a.332.332 0 0 1 .065-.112.435.435 0 0 1 .047-.046q0-.07.278-.111a2.472 2.472 0 0 1 .003-.001 10.724 10.724 0 0 0 .261-.041q.132-.023.279-.051a18.037 18.037 0 0 0 .099-.019q.357-.07.685-.187a1.154 1.154 0 0 0 .166-.074q.086-.046.146-.103a.467.467 0 0 0 .11-.151q.018-.028.029-.069a.395.395 0 0 0 .006-.025 2.417 2.417 0 0 1 .013-.062 3.227 3.227 0 0 1 .016-.067q.018-.07.047-.141.025-.059.062-.093a.184.184 0 0 1 .014-.012.072.072 0 0 0 .011-.015q.015-.026.032-.084a1.295 1.295 0 0 0 .01-.036 9.906 9.906 0 0 0 .044-.174 11.395 11.395 0 0 0 .015-.06 3.314 3.314 0 0 0 .032-.15 2.785 2.785 0 0 0 .015-.085 3.652 3.652 0 0 0 .007-.045q.008-.06.01-.09a.216.216 0 0 0 0-.011 2.312 2.312 0 0 0 .006-.055q.008-.075.017-.202a20.496 20.496 0 0 0 .007-.083 32.433 32.433 0 0 1 .029-.382 37.227 37.227 0 0 1 .012-.134 34.754 34.754 0 0 0 .031-.391 30.206 30.206 0 0 0 .01-.124q.016-.227.017-.334a1.475 1.475 0 0 0 0-.018q0-.038.02-.108a1.183 1.183 0 0 1 .009-.033 2.2 2.2 0 0 0 .01-.032q.015-.049.018-.072a.087.087 0 0 0 .002-.013V11.883a.244.244 0 0 1-.026-.053.302.302 0 0 1-.009-.029l-.024-.094V11.625a2.642 2.642 0 0 0 .123-.75 16.039 16.039 0 0 1 .03-.75.299.299 0 0 1 .001-.023q.001-.024.007-.056a1.213 1.213 0 0 1 .003-.021q.012-.064.03-.14.017-.076.029-.141a1.614 1.614 0 0 0 .005-.028q.007-.042.007-.06a1.989 1.989 0 0 0 .005-.061q.007-.086.014-.231a18.237 18.237 0 0 0 .004-.094q.012-.282.023-.598a119.63 119.63 0 0 1 .012-.306 97.191 97.191 0 0 1 .012-.286q.009-.225.011-.329a2.435 2.435 0 0 0 .001-.04l.082-.223a15.988 15.988 0 0 1 .146-1.593 13.875 13.875 0 0 0 .128-1.399 15.288 15.288 0 0 0 .007-.207l.082-.07v-.34a2.891 2.891 0 0 0-.02-.341 2.475 2.475 0 0 0-.021-.145 2.632 2.632 0 0 1-.038-.344 3.091 3.091 0 0 1-.003-.143v-.023a.136.136 0 0 1 .005-.037q.01-.033.034-.072a.457.457 0 0 1 .002-.003.747.747 0 0 0 .014-.022q.021-.036.026-.056a.042.042 0 0 0 .001-.009v-.422q0-.305-.082-.487-.082-.181-.235-.287-.152-.105-.363-.17-.211-.064-.457-.134-.045-.028-.136-.058a1.991 1.991 0 0 0-.057-.019 89.786 89.786 0 0 1-.139-.042 107.94 107.94 0 0 1-.148-.045 5.166 5.166 0 0 1-.276-.094A4.743 4.743 0 0 1 1.512.92Q1.404.88 1.338.849a1.06 1.06 0 0 1-.037-.017.125.125 0 0 1-.038-.025Q1.233.78 1.205.729a.613.613 0 0 1-.016-.032.969.969 0 0 1-.023-.052Q1.145.593 1.139.556a.175.175 0 0 1-.002-.029q0-.07.047-.129A.717.717 0 0 1 1.26.317a.843.843 0 0 1 .035-.03.665.665 0 0 1 .068-.049.521.521 0 0 1 .061-.033.953.953 0 0 1 .045-.019q.036-.015.066-.022h1.184a13.361 13.361 0 0 1 1.318.065 13.361 13.361 0 0 0 1.318.064A2.354 2.354 0 0 0 5.59.281 2.393 2.393 0 0 1 5.772.27a2.741 2.741 0 0 1 .064 0q.234 0 .41.164a1.488 1.488 0 0 1 .265.333 1.709 1.709 0 0 1 .034.059 4.014 4.014 0 0 1 .217.475 6.358 6.358 0 0 0 .068.173q.035.083.068.154a2.983 2.983 0 0 0 .04.083q0 .01.025.067a2.342 2.342 0 0 0 .01.021 2.815 2.815 0 0 0 .038.079 3.64 3.64 0 0 0 .044.085 7.511 7.511 0 0 1 .067.128 6.618 6.618 0 0 1 .021.042l.052.105q0 .011.011.058a2.117 2.117 0 0 0 .001.007q.012.052.029.111.017.055.028.099a1.663 1.663 0 0 1 .002.007 1.312 1.312 0 0 1 .004.016q.007.033.007.042a.051.051 0 0 0 .002.013q.006.021.026.058a.916.916 0 0 0 .013.023 7.003 7.003 0 0 0 .065.109 8.039 8.039 0 0 0 .023.037 12.415 12.415 0 0 0 .046.074 9.811 9.811 0 0 0 .042.067l.041.064a1.016 1.016 0 0 1 .006.017l.042.142a27.474 27.474 0 0 1 .005.017q.041.141.088.287a7.37 7.37 0 0 1 .044.142 5.968 5.968 0 0 1 .038.134q.035.129.047.152a.738.738 0 0 1 .019.035q.033.063.086.182.07.158.158.334a27.476 27.476 0 0 0 .087.171 23.713 23.713 0 0 0 .083.163 13.727 13.727 0 0 0 .039.074l.066.123a3.297 3.297 0 0 0 .024.043.014.014 0 0 0 .003.006q.008.015.049.053a1.718 1.718 0 0 0 .018.017 2.039 2.039 0 0 0 .025.023q.039.034.059.047a.099.099 0 0 0 .01.006.276.276 0 0 0 .021.047.339.339 0 0 0 .014.024.877.877 0 0 1 .016.024q.031.05.031.069a100.323 100.323 0 0 1 .211.592q.106.299.258.592a.015.015 0 0 0 .003.007q.01.018.067.075l.094.094q.02.02.058.089a1.791 1.791 0 0 1 .012.022 2.764 2.764 0 0 1 .043.083l.042.09a4.719 4.719 0 0 1 .015.032l.105.229q.044.092.075.147a.947.947 0 0 0 .013.023.034.034 0 0 0 .002.007q.004.018.026.075a4.657 4.657 0 0 0 .013.035.987.987 0 0 1 .018.05q.018.053.022.092a.207.207 0 0 1 .001.022 3.181 3.181 0 0 0 .036.132q.031.104.064.184.053.129.123.235a10.862 10.862 0 0 0 .073.108 13.03 13.03 0 0 0 .079.114q.082.118.176.282 0 .011.029.064l.059.106q.029.052.053.105a.903.903 0 0 0 .008.018q.017.037.027.046a10.769 10.769 0 0 0 .276.629 12.376 12.376 0 0 0 .105.215 5.424 5.424 0 0 1 .308.745 4.916 4.916 0 0 1 .038.122q0 .01.008.059a3.416 3.416 0 0 0 .003.018 4.657 4.657 0 0 1 .012.067 5.94 5.94 0 0 1 .012.073 1.638 1.638 0 0 0 .025.129 1.494 1.494 0 0 0 .004.018q.018.07.018.082a.019.019 0 0 0 .001.006q.006.016.035.057a1.405 1.405 0 0 0 .005.007q.041.059.099.129l.117.141a1.034 1.034 0 0 0 .036.04l.036.037a.422.422 0 0 0 .034.028q.094.129.193.205a.351.351 0 0 0 .126.06q.062.016.138.016a.076.076 0 0 0 .029-.007q.039-.016.093-.074a.728.728 0 0 0 .001-.001 1.8 1.8 0 0 0 .09-.105 2.255 2.255 0 0 0 .062-.082 6.852 6.852 0 0 0 .147-.211q.07-.106.094-.164a2.271 2.271 0 0 0 .24-.537 2.129 2.129 0 0 0 .006-.02 13.841 13.841 0 0 1 .123-.409 16.317 16.317 0 0 1 .064-.194l.094-.059a.284.284 0 0 1 .001-.024q.003-.029.011-.07a1.284 1.284 0 0 1 .029-.117l.028-.099a1.663 1.663 0 0 0 .001-.006l.012-.047a.157.157 0 0 1 .002-.023q.003-.024.014-.058a.846.846 0 0 1 .007-.025q.024-.07.059-.14l.064-.129a1.31 1.31 0 0 1 .011-.021q.021-.04.03-.05.011-.011.048-.057a4.017 4.017 0 0 0 .005-.007.965.965 0 0 0 .041-.057 1.298 1.298 0 0 0 .041-.066 1.298 1.298 0 0 1 .041-.066.965.965 0 0 1 .041-.057.962.962 0 0 0 .014-.018q.027-.037.027-.047a.008.008 0 0 0 .006-.003q.01-.01.023-.055a1.119 1.119 0 0 0 .027-.107 1.242 1.242 0 0 0 .003-.016 2.018 2.018 0 0 0 .01-.062 1.471 1.471 0 0 0 .007-.055 3.459 3.459 0 0 0 .002-.019l.004-.046a.735.735 0 0 0 .014-.021l.045-.076a6.137 6.137 0 0 0 .017-.032 7.461 7.461 0 0 0 .055-.098 9.434 9.434 0 0 0 .057-.107 107.156 107.156 0 0 1 .057-.108 90.874 90.874 0 0 1 .054-.103 3.194 3.194 0 0 0 .025-.047q.034-.067.051-.111a20.038 20.038 0 0 0 .645-1.26 54.817 54.817 0 0 1 .609-1.26q.012-.011.053-.076a9.811 9.811 0 0 0 .042-.067 12.415 12.415 0 0 0 .046-.073 12.415 12.415 0 0 1 .045-.074 9.811 9.811 0 0 1 .043-.067q.041-.064.052-.088a.992.992 0 0 0 .007-.013l.028-.06a14.055 14.055 0 0 0 .012-.026 2.815 2.815 0 0 1 .038-.08 3.64 3.64 0 0 1 .044-.085 3.64 3.64 0 0 0 .044-.084 2.815 2.815 0 0 0 .038-.08 1.152 1.152 0 0 0 .012-.026q.023-.054.023-.073a6.284 6.284 0 0 0 .329-.721 17.318 17.318 0 0 1 .293-.721.067.067 0 0 1 .001-.012q.007-.032.038-.114a2.965 2.965 0 0 1 .002-.002 2.377 2.377 0 0 0 .014-.037q.027-.073.027-.092.02-.02.113-.101a17.368 17.368 0 0 1 .033-.028 2.03 2.03 0 0 0 .049-.044q.066-.06.09-.095a.124.124 0 0 0 .008-.014.052.052 0 0 1 0-.006q.002-.015.011-.052a3.584 3.584 0 0 0 .012-.049 4.236 4.236 0 0 0 .012-.051l.023-.105a1.821 1.821 0 0 0 .004-.019q.008-.036.008-.045a1.121 1.121 0 0 1 .033-.071l.039-.071a2.171 2.171 0 0 1 .027-.046 3.712 3.712 0 0 1 .135-.205q.071-.1.129-.188.056-.083.09-.14a1.91 1.91 0 0 0 .004-.006 2.019 2.019 0 0 0 .141-.293q.058-.153.128-.299a2.672 2.672 0 0 1 .132-.243 2.442 2.442 0 0 1 .021-.033.637.637 0 0 1 .205-.2.746.746 0 0 1 .017-.01.392.392 0 0 1 .04-.028q.059-.036.16-.078a3.997 3.997 0 0 1 .048-.02q.083-.033.109-.038a.039.039 0 0 1 .007-.001h2.215q.043-.021.162-.058a4.224 4.224 0 0 1 .019-.006 2.301 2.301 0 0 1 .055-.016q.078-.022.116-.025a.142.142 0 0 1 .011 0h.082q.129 0 .269.053a.859.859 0 0 0 .147.041.682.682 0 0 0 .123.011.465.465 0 0 0 .139-.022.6.6 0 0 0 .078-.03.574.574 0 0 1 .11-.04A.451.451 0 0 1 22.02 0h.093a.624.624 0 0 1 .028.001q.048.002.136.011a6.424 6.424 0 0 1 .12.013 7.458 7.458 0 0 1 .126.016 19.298 19.298 0 0 1 .187.026 16.755 16.755 0 0 1 .06.009q.107.016.156.028a.483.483 0 0 1 .008.001.165.165 0 0 1 .035.017.098.098 0 0 1 .047.066.666.666 0 0 1 .008.049q.003.025.003.048a.388.388 0 0 1 0 .008 1.169 1.169 0 0 1-.002.083q-.003.041-.009.075a.502.502 0 0 1-.012.053q-.024.082-.07.211-.036.012-.112.041-.076.029-.158.053a8.281 8.281 0 0 0-.139.041 7.466 7.466 0 0 0-.019.005 1.493 1.493 0 0 1-.027.008q-.042.013-.063.015a.08.08 0 0 1-.01.001q-.093.012-.31.029a54.077 54.077 0 0 1-.223.018 63.016 63.016 0 0 1-.234.017 26.043 26.043 0 0 1-.235.016 22.288 22.288 0 0 1-.222.014 16.812 16.812 0 0 1-.097.005q-.107.005-.169.006a1.722 1.722 0 0 1-.033 0 2.421 2.421 0 0 0-.201.211 2.957 2.957 0 0 0-.116.147q-.152.205-.152.463v2.484q.024.34.106.656.082.317.082.657v.257a2.095 2.095 0 0 1-.005.137 1.881 1.881 0 0 1-.001.022.235.235 0 0 1-.031.097.324.324 0 0 1-.034.049V8.66q.059.141.065.229a2.317 2.317 0 0 1 .003.071q.003.065.003.145v.211q-.059.446-.176.879a3.394 3.394 0 0 0-.106.63 4.066 4.066 0 0 0-.011.308q0 .129.035.234a4.564 4.564 0 0 0 .076.211 2.901 2.901 0 0 1 .063.179 3.262 3.262 0 0 1 .013.044.801.801 0 0 1 .027.13q.008.066.008.139v2.86q.012.023.065.088a4.052 4.052 0 0 1 .104.133 3.926 3.926 0 0 1 .001.001q.053.071.106.135a3.327 3.327 0 0 0 .024.03l.048.054a.316.316 0 0 0 .004.004.51.51 0 0 0 .182.137q.068.031.152.049a.906.906 0 0 0 .006.001 2.805 2.805 0 0 0 .307.047 3.394 3.394 0 0 0 .173.012 22.282 22.282 0 0 0 .527.018q.27.006.487.076a.833.833 0 0 1 .246.126.76.76 0 0 1 .111.102.506.506 0 0 1 .101.181q.025.075.034.167a1.144 1.144 0 0 1 .006.115q0 .27-.217.381a.975.975 0 0 1-.451.111h-.246a.164.164 0 0 1-.013 0l-.053-.007a1.706 1.706 0 0 1-.022-.004q-.065-.012-.141-.03-.065-.015-.118-.03a1.569 1.569 0 0 1-.016-.005q-.059-.017-.059-.029a2.16 2.16 0 0 1-.032 0l-.146-.004a28.847 28.847 0 0 1-.062-.002 16.113 16.113 0 0 1-.191-.007 21.04 21.04 0 0 1-.208-.01q-.217-.012-.416-.03a18.975 18.975 0 0 1-.093-.008q-.129-.012-.2-.021-.11 0-.194-.005a1.6 1.6 0 0 1-.075-.007.928.928 0 0 1-.06-.009q-.098-.017-.257-.061h-.586a19.745 19.745 0 0 0-1.277.041 19.745 19.745 0 0 1-1.277.041h-.95q-.093 0-.205-.029a.739.739 0 0 1-.205-.088q-.093-.059-.158-.147a.333.333 0 0 1-.064-.187.414.414 0 0 1 0-.018q0-.281.152-.439a.79.79 0 0 1 .278-.185 1.001 1.001 0 0 1 .115-.038 2.166 2.166 0 0 1 .28-.055 2.861 2.861 0 0 1 .259-.021 15.25 15.25 0 0 1 .597-.012 9.083 9.083 0 0 0 .36-.007 7.547 7.547 0 0 0 .203-.01q.19-.013.329-.06a.759.759 0 0 0 .099-.04q0-.058.011-.198a9.913 9.913 0 0 1 .006-.066 19.683 19.683 0 0 1 .03-.3 22.49 22.49 0 0 1 .011-.104 21.042 21.042 0 0 0 .032-.306 18.376 18.376 0 0 0 .009-.098q.018-.194.029-.264 0-.011.011-.058a2.117 2.117 0 0 1 .001-.006q.012-.053.029-.112a1.284 1.284 0 0 0 .03-.117 2.449 2.449 0 0 0 .004-.02q.007-.039.007-.05Z"
      vectorEffect="non-scaling-stroke"
      strokeLinecap="round"
      fillRule="evenodd"
      fontSize={12}
      stroke="currentcolor"
      strokeWidth={0.945}
      style={{
        stroke: "currentcolor",
        strokeWidth: ".25mm",
        fill: "currentcolor",
      }}
    />
  </svg>
)

const ForwardRef = forwardRef(UiBUBMarcusLogo);
const Memo = memo(ForwardRef);
export default Memo;
