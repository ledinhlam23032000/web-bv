export type ArticleDetailSection = {
  heading: string;
  paragraphs: string[];
};

export type ArticleDetail = {
  sourceFile: string;
  title: string;
  excerpt: string;
  intro: string[];
  sections: ArticleDetailSection[];
};

export const articleDetails: Record<string, ArticleDetail> = {
  "tong-quan-benh-vien-da-khoa-hong-phuc": {
    "sourceFile": "1. Tổng quan bệnh viện đa khoa Hồng Phúc.docx",
    "title": "Bệnh viện Đa khoa Hồng Phúc – Hành trình chăm sóc sức khỏe bằng chuyên môn và sự tận tâm",
    "excerpt": "Được thành lập từ năm 2011, Bệnh viện Đa khoa Hồng Phúc đã trải qua hơn một thập kỷ xây dựng và phát triển, từng bước trở thành địa chỉ chăm sóc sức khỏe được đông đảo người dân Hải Phòng và các tỉnh thành lân cận tin tưởng lựa chọn.",
    "intro": [
      "Được thành lập từ năm 2011, Bệnh viện Đa khoa Hồng Phúc đã trải qua hơn một thập kỷ xây dựng và phát triển, từng bước trở thành địa chỉ chăm sóc sức khỏe được đông đảo người dân Hải Phòng và các tỉnh thành lân cận tin tưởng lựa chọn.",
      "Tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, bệnh viện sở hữu vị trí thuận tiện, đáp ứng nhu cầu thăm khám, chẩn đoán, điều trị và chăm sóc sức khỏe của người dân trong khu vực, người bệnh từ các địa phương khác cũng như khách hàng quốc tế đang sinh sống và làm việc tại Việt Nam."
    ],
    "sections": [
      {
        "heading": "Nội dung chính",
        "paragraphs": [
          "Với định hướng phát triển theo mô hình bệnh viện đa khoa quốc tế, Hồng Phúc không chỉ chú trọng nâng cao chất lượng chuyên môn mà còn hướng đến một trải nghiệm khám chữa bệnh chuyên nghiệp, thuận tiện và thân thiện. Mỗi người bệnh khi đến Hồng Phúc đều được tiếp đón, tư vấn và chăm sóc dựa trên tình trạng sức khỏe cụ thể, thay vì áp dụng một quy trình cứng nhắc cho tất cả mọi người.",
          "Trong suốt hành trình hoạt động, Bệnh viện Đa khoa Hồng Phúc đã đồng hành cùng hàng triệu lượt người bệnh và gia đình trong việc kiểm tra, bảo vệ và phục hồi sức khỏe. Sự tin tưởng ấy không chỉ được tạo nên từ năng lực khám chữa bệnh mà còn đến từ tinh thần trách nhiệm, thái độ phục vụ tận tâm và nỗ lực cải thiện chất lượng mỗi ngày.",
          "Hồng Phúc hướng đến xây dựng một môi trường y tế nơi chuyên môn được đặt lên hàng đầu, công nghệ được ứng dụng hợp lý và người bệnh luôn là trung tâm của mọi hoạt động. Từ khâu tiếp đón, thăm khám đến chẩn đoán, điều trị và theo dõi sau điều trị, bệnh viện không ngừng hoàn thiện quy trình nhằm mang lại sự an tâm và thuận tiện cho người bệnh.",
          "Không dừng lại ở nhiệm vụ điều trị khi bệnh đã xuất hiện, Bệnh viện Đa khoa Hồng Phúc còn mong muốn trở thành người bạn đồng hành lâu dài của mỗi gia đình trong chăm sóc sức khỏe chủ động, tầm soát bệnh sớm và duy trì chất lượng cuộc sống.",
          "Trên nền tảng kinh nghiệm được tích lũy từ năm 2011, Bệnh viện Đa khoa Hồng Phúc tiếp tục đổi mới, nâng cao năng lực chuyên môn và hoàn thiện chất lượng dịch vụ, hướng đến mục tiêu trở thành một trong những địa chỉ chăm sóc sức khỏe uy tín, hiện đại và thân thiện tại Hải Phòng cũng như khu vực duyên hải Bắc Bộ.",
          "Bệnh viện Đa khoa Hồng Phúc – Tận tâm chăm sóc, vững vàng chuyên môn, đồng hành vì sức khỏe cộng đồng."
        ]
      }
    ]
  },
  "mo-hinh-benh-vien-da-khoa-chuyen-sau-giup-nguoi-benh-duoc-cham-soc-toan-dien-hon-nhu-the-nao": {
    "sourceFile": "2.Vì sao mô hình Bệnh viện Đa khoa Hồng Phúc giúp người bệnh được chăm sóc toàn diện hơn.docx",
    "title": "Vì sao mô hình Bệnh viện Đa khoa Hồng Phúc giúp người bệnh được chăm sóc toàn diện hơn?",
    "excerpt": "Một người đến bệnh viện vì đau ngực chưa chắc chỉ cần khám Tim mạch. Một cơn chóng mặt cũng có thể liên quan đến huyết áp, thiếu máu, tai trong, thần kinh hoặc tác dụng của thuốc đang sử dụng. Cơ thể con người là một hệ thống có nhiều bộ phận liên kết chặt chẽ, vì vậy không phải vấn đề sức khỏe nào cũng nằm gọn trong phạm vi của một chuyên khoa.",
    "intro": [
      "Một người đến bệnh viện vì đau ngực chưa chắc chỉ cần khám Tim mạch. Một cơn chóng mặt cũng có thể liên quan đến huyết áp, thiếu máu, tai trong, thần kinh hoặc tác dụng của thuốc đang sử dụng. Cơ thể con người là một hệ thống có nhiều bộ phận liên kết chặt chẽ, vì vậy không phải vấn đề sức khỏe nào cũng nằm gọn trong phạm vi của một chuyên khoa.",
      "Đó là lý do mô hình bệnh viện đa khoa phát huy lợi thế. Thay vì để người bệnh tự tìm từng khoa và ghép nối những kết quả rời rạc, các bác sĩ thuộc nhiều chuyên ngành có thể cùng đánh giá, trao đổi và xây dựng hướng chăm sóc phù hợp hơn.",
      "Tại Bệnh viện Đa khoa Hồng Phúc, phối hợp liên chuyên khoa không đơn thuần là “khám nhiều khoa”. Mục tiêu quan trọng hơn là giúp người bệnh được nhìn nhận như một tổng thể, từ triệu chứng ban đầu, bệnh nền, kết quả xét nghiệm đến khả năng đáp ứng điều trị và nhu cầu chăm sóc lâu dài."
    ],
    "sections": [
      {
        "heading": "Chăm sóc toàn diện không có nghĩa là làm thật nhiều xét nghiệm",
        "paragraphs": [
          "Khi nghe đến “chăm sóc toàn diện”, nhiều người hình dung mình sẽ phải khám hàng loạt chuyên khoa hoặc thực hiện rất nhiều xét nghiệm. Trên thực tế, toàn diện không đồng nghĩa với kiểm tra tràn lan.",
          "Chăm sóc toàn diện là quá trình bác sĩ đánh giá đầy đủ những yếu tố có thể ảnh hưởng đến sức khỏe của người bệnh, sau đó lựa chọn các bước kiểm tra thực sự cần thiết. Người bệnh được xem xét không chỉ dựa trên một triệu chứng đơn lẻ mà còn dựa vào:",
          "Tuổi tác và thể trạng hiện tại.",
          "Tiền sử bệnh của bản thân và gia đình.",
          "Các bệnh nền đang được điều trị.",
          "Thuốc và thực phẩm chức năng đang sử dụng.",
          "Thói quen sinh hoạt, ăn uống và vận động.",
          "Kết quả khám, xét nghiệm hoặc chẩn đoán hình ảnh.",
          "Những nguy cơ có thể xuất hiện trong quá trình điều trị.",
          "Theo định hướng chăm sóc tích hợp, lấy người bệnh làm trung tâm, các dịch vụ y tế cần được phối hợp xung quanh nhu cầu tổng thể của mỗi người, bảo đảm tính an toàn, hiệu quả và kịp thời thay vì chỉ tập trung riêng vào từng căn bệnh.",
          "Nói một cách dễ hiểu, bác sĩ không chỉ đặt câu hỏi: “Người bệnh đang đau ở đâu?” mà còn cần tìm hiểu: “Vì sao lại đau, tình trạng này có liên quan đến vấn đề nào khác và hướng xử trí nào phù hợp nhất với người bệnh?”",
          "Phối hợp liên chuyên khoa là gì?",
          "Phối hợp liên chuyên khoa là hình thức nhiều bác sĩ và nhân viên y tế thuộc các lĩnh vực chuyên môn khác nhau cùng tham gia đánh giá, trao đổi hoặc đưa ra kế hoạch chăm sóc cho một người bệnh.",
          "Tùy từng trường hợp, quá trình này có thể có sự tham gia của bác sĩ lâm sàng, điều dưỡng, dược sĩ, kỹ thuật viên xét nghiệm, chẩn đoán hình ảnh, phục hồi chức năng, dinh dưỡng và các bộ phận liên quan.",
          "Mỗi chuyên khoa nhìn vấn đề từ một góc độ riêng:",
          "Bác sĩ Nội khoa đánh giá tình trạng sức khỏe tổng quát và các bệnh nền.",
          "Bác sĩ chuyên khoa tập trung vào cơ quan hoặc hệ cơ quan có dấu hiệu bất thường.",
          "Bộ phận xét nghiệm cung cấp dữ liệu về máu, nước tiểu và các chỉ số sinh học.",
          "Bác sĩ chẩn đoán hình ảnh hỗ trợ phát hiện những tổn thương không thể nhận biết chỉ bằng khám bên ngoài.",
          "Dược sĩ và nhân viên y tế góp phần kiểm soát việc sử dụng thuốc, theo dõi đáp ứng và hướng dẫn chăm sóc.",
          "Bộ phận phục hồi chức năng hoặc dinh dưỡng có thể tham gia khi người bệnh cần khôi phục vận động, điều chỉnh chế độ ăn và duy trì sức khỏe lâu dài.",
          "Đội ngũ đa chuyên khoa được hiểu là nhóm nhân viên y tế thuộc nhiều ngành nghề hoặc lĩnh vực khác nhau cùng làm việc và đưa ra quyết định liên quan đến quá trình điều trị của từng người bệnh.",
          "Điểm quan trọng nằm ở chữ “phối hợp”. Người bệnh không chỉ lần lượt gặp nhiều bác sĩ, mà thông tin từ các lần thăm khám cần được kết nối để tạo thành một bức tranh sức khỏe thống nhất.",
          "Vì sao một triệu chứng có thể cần nhiều chuyên khoa cùng đánh giá?",
          "Cơ thể không hoạt động theo kiểu “mỗi khoa quản lý một phần và các phần không liên quan đến nhau”. Khi một cơ quan gặp vấn đề, những bộ phận khác cũng có thể bị ảnh hưởng.",
          "Ví dụ, một người bệnh tiểu đường đến khám vì vết thương ở chân lâu lành. Trường hợp này có thể không chỉ liên quan đến Da liễu hoặc Ngoại khoa. Bác sĩ còn cần đánh giá đường huyết, tuần hoàn mạch máu, nguy cơ nhiễm trùng, chức năng thận và chế độ dinh dưỡng.",
          "Tương tự, một người lớn tuổi thường xuyên chóng mặt có thể cần được kiểm tra huyết áp, tim mạch, thiếu máu, hệ thần kinh, tai trong và danh sách các loại thuốc đang sử dụng. Nếu chỉ tập trung xử lý cảm giác chóng mặt mà bỏ qua nguyên nhân phía sau, triệu chứng có thể tiếp tục tái diễn.",
          "Phụ nữ mang thai mắc bệnh tuyến giáp, người chuẩn bị phẫu thuật nhưng có bệnh tim mạch, hay người đau bụng kéo dài kèm sụt cân cũng là những tình huống cần sự phối hợp cẩn thận giữa các chuyên khoa phù hợp.",
          "Chính vì thế, mô hình đa khoa giúp bác sĩ có thêm điều kiện nhìn rộng hơn, thay vì chỉ xử lý phần biểu hiện rõ nhất."
        ]
      },
      {
        "heading": "Những lợi ích của phối hợp liên chuyên khoa đối với người bệnh",
        "paragraphs": [
          "1. Hạn chế bỏ sót những vấn đề liên quan",
          "Một triệu chứng có thể xuất phát từ nhiều nguyên nhân. Khi thông tin được xem xét bởi các bác sĩ có chuyên môn phù hợp, những dấu hiệu nằm ngoài phạm vi của một chuyên khoa sẽ có cơ hội được nhận diện sớm hơn.",
          "Điều này đặc biệt có ý nghĩa với người cao tuổi, người mắc nhiều bệnh nền hoặc những trường hợp có triệu chứng không điển hình.",
          "Chẳng hạn, cảm giác mệt mỏi kéo dài có thể liên quan đến thiếu ngủ và căng thẳng, nhưng cũng có thể xuất hiện khi người bệnh thiếu máu, rối loạn tuyến giáp, bệnh tim, bệnh gan, bệnh thận hoặc gặp tác dụng không mong muốn của thuốc. Đánh giá toàn diện giúp bác sĩ từng bước thu hẹp nguyên nhân thay vì vội vàng kết luận từ một dấu hiệu.",
          "2. Xây dựng kế hoạch điều trị phù hợp với từng người",
          "Hai người mắc cùng một bệnh chưa chắc được điều trị giống nhau. Tuổi tác, bệnh nền, chức năng gan thận, tiền sử dị ứng, thuốc đang dùng và khả năng đáp ứng đều có thể ảnh hưởng đến lựa chọn điều trị.",
          "Ví dụ, một loại thuốc phù hợp với người trẻ khỏe mạnh chưa chắc đã thích hợp cho người lớn tuổi đang điều trị tăng huyết áp và suy giảm chức năng thận. Trước một ca phẫu thuật, bác sĩ cũng cần đánh giá không chỉ bệnh cần mổ mà còn cả khả năng gây mê, nguy cơ chảy máu, nhiễm trùng và quá trình hồi phục.",
          "Phối hợp liên chuyên khoa giúp các yếu tố này được cân nhắc cùng nhau, từ đó hỗ trợ xây dựng kế hoạch điều trị sát với tình trạng thực tế hơn.",
          "3. Tăng mức độ an toàn trong quá trình điều trị",
          "Khi người bệnh có nhiều vấn đề sức khỏe, điều trị một bệnh đôi khi có thể ảnh hưởng đến bệnh khác. Một số thuốc cũng có khả năng tương tác hoặc làm thay đổi kết quả điều trị đang có.",
          "Việc chia sẻ thông tin giữa các chuyên khoa giúp bác sĩ biết người bệnh đang dùng thuốc gì, từng gặp phản ứng nào và đang được theo dõi những chỉ số nào. Nhờ đó, nguy cơ chỉ định trùng lặp, sử dụng thuốc chưa phù hợp hoặc bỏ qua bệnh nền có thể được hạn chế.",
          "Người bệnh cũng không nên giấu các loại thuốc, thảo dược hoặc thực phẩm chức năng đang sử dụng. Một danh sách đầy đủ sẽ giúp bác sĩ đánh giá an toàn chính xác hơn.",
          "4. Giảm những lần kiểm tra trùng lặp không cần thiết",
          "Khi đi khám tại nhiều cơ sở khác nhau, người bệnh có thể phải mang theo nhiều tập hồ sơ, chụp lại hình ảnh hoặc thực hiện lại một số xét nghiệm vì thông tin cũ chưa được kết nối đầy đủ.",
          "Trong mô hình bệnh viện đa khoa, kết quả khám và cận lâm sàng có thể được sử dụng để hỗ trợ nhiều chuyên khoa đánh giá, tùy tình trạng và yêu cầu chuyên môn. Điều này giúp hành trình khám chữa bệnh trở nên liền mạch hơn, đồng thời hạn chế phần nào việc phải bắt đầu lại từ đầu mỗi khi chuyển sang bác sĩ khác.",
          "Tuy nhiên, bác sĩ vẫn có thể chỉ định kiểm tra lại nếu kết quả đã cũ, chất lượng chưa phù hợp hoặc tình trạng sức khỏe đã thay đổi.",
          "5. Tiết kiệm thời gian và công sức đi lại",
          "Đối với một vấn đề cần nhiều chuyên khoa tham gia, việc phải tìm từng cơ sở riêng biệt có thể khiến người bệnh mất nhiều thời gian, đặc biệt với người cao tuổi, trẻ nhỏ hoặc người ở xa.",
          "Tại bệnh viện đa khoa, các hoạt động khám lâm sàng, xét nghiệm, chẩn đoán hình ảnh, tư vấn chuyên khoa và theo dõi điều trị được tổ chức trong cùng một hệ thống. Người bệnh có thể được hướng dẫn đến bộ phận phù hợp khi phát hiện vấn đề cần đánh giá thêm.",
          "Lợi ích không chỉ nằm ở việc đi lại ít hơn mà còn ở chỗ người bệnh có một hành trình rõ ràng hơn: bắt đầu từ đâu, cần kiểm tra gì và bước tiếp theo là gì.",
          "6. Theo dõi người bệnh xuyên suốt hơn",
          "Chăm sóc sức khỏe không kết thúc ngay khi có kết quả xét nghiệm hoặc sau khi triệu chứng tạm thời giảm bớt. Với bệnh mạn tính, quá trình theo dõi có thể kéo dài nhiều năm. Với người sau phẫu thuật, điều trị còn liên quan đến kiểm soát đau, chăm sóc vết mổ, dinh dưỡng và phục hồi vận động.",
          "Phối hợp liên chuyên khoa giúp kế hoạch chăm sóc có tính tiếp nối từ giai đoạn phát hiện bệnh, điều trị đến theo dõi và phục hồi. Khi tình trạng thay đổi, hướng chăm sóc cũng có thể được điều chỉnh dựa trên đánh giá mới."
        ]
      },
      {
        "heading": "Hành trình chăm sóc liên chuyên khoa tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, người bệnh được tiếp cận theo hướng đánh giá tình trạng thực tế và lựa chọn chuyên khoa phù hợp, thay vì tự mình “đoán bệnh rồi chọn khoa”.",
          "Thông thường, hành trình chăm sóc có thể bao gồm các bước:"
        ]
      },
      {
        "heading": "Tiếp nhận và đánh giá ban đầu",
        "paragraphs": [
          "Bác sĩ khai thác triệu chứng, tiền sử bệnh, thuốc đang sử dụng và thực hiện thăm khám. Từ những thông tin ban đầu, bác sĩ xác định vấn đề cần ưu tiên và các nguy cơ cần lưu ý."
        ]
      },
      {
        "heading": "Thực hiện kiểm tra cần thiết",
        "paragraphs": [
          "Tùy từng trường hợp, người bệnh có thể được chỉ định xét nghiệm, siêu âm, chụp X-quang hoặc các phương pháp chẩn đoán hình ảnh khác. Các kiểm tra được lựa chọn dựa trên tình trạng cụ thể, không phải ai cũng cần thực hiện giống nhau."
        ]
      },
      {
        "heading": "Kết nối chuyên khoa phù hợp",
        "paragraphs": [
          "Nếu kết quả cho thấy vấn đề liên quan đến lĩnh vực khác hoặc tình trạng cần đánh giá sâu hơn, người bệnh có thể được chuyển khám hay phối hợp với chuyên khoa phù hợp.",
          "Với những trường hợp phức tạp, ý kiến từ nhiều bác sĩ giúp bổ sung các góc nhìn khác nhau trước khi xây dựng hướng xử trí."
        ]
      },
      {
        "heading": "Thống nhất kế hoạch chăm sóc",
        "paragraphs": [
          "Kết quả khám lâm sàng, cận lâm sàng, bệnh nền và nhu cầu của người bệnh được tổng hợp để đưa ra kế hoạch. Bác sĩ sẽ tư vấn về phương pháp điều trị, cách sử dụng thuốc, chế độ sinh hoạt và lịch theo dõi phù hợp."
        ]
      },
      {
        "heading": "Theo dõi và điều chỉnh",
        "paragraphs": [
          "Khi người bệnh tái khám, bác sĩ đánh giá mức độ đáp ứng, diễn biến triệu chứng và các chỉ số liên quan. Kế hoạch có thể được duy trì hoặc điều chỉnh tùy theo kết quả thực tế.",
          "Cách tổ chức này giúp người bệnh không cảm thấy mình bị “chuyền từ khoa này sang khoa khác” mà không biết mục đích. Mỗi bước cần hướng đến một câu hỏi cụ thể trong quá trình tìm nguyên nhân và lựa chọn phương án chăm sóc.",
          "Những ai đặc biệt được hưởng lợi từ mô hình đa khoa?",
          "Phối hợp liên chuyên khoa có thể cần thiết với nhiều nhóm người bệnh, trong đó đặc biệt hữu ích khi:",
          "Người bệnh có từ hai bệnh nền trở lên.",
          "Người cao tuổi đang sử dụng nhiều loại thuốc.",
          "Triệu chứng kéo dài nhưng chưa xác định được nguyên nhân.",
          "Bệnh có biểu hiện liên quan đến nhiều cơ quan.",
          "Người bệnh cần phẫu thuật hoặc thực hiện thủ thuật.",
          "Phụ nữ mang thai có bệnh lý kèm theo.",
          "Người cần chăm sóc và phục hồi sau điều trị.",
          "Kết quả khám sức khỏe phát hiện nhiều chỉ số bất thường.",
          "Người bệnh cần theo dõi dài hạn đối với bệnh mạn tính.",
          "Ngay cả người đang cảm thấy khỏe cũng có thể hưởng lợi từ mô hình này khi khám sức khỏe định kỳ. Nếu phát hiện chỉ số bất thường, việc kết nối với chuyên khoa phù hợp giúp người bệnh được tư vấn bước tiếp theo rõ ràng hơn.",
          "Người bệnh cần làm gì để việc phối hợp đạt hiệu quả?",
          "Để bác sĩ có đủ thông tin, người bệnh nên chuẩn bị:",
          "Hồ sơ khám và kết quả xét nghiệm trước đây.",
          "Danh sách thuốc, thực phẩm chức năng đang sử dụng.",
          "Thông tin về tiền sử dị ứng thuốc hoặc phản ứng bất thường.",
          "Các bệnh đã được chẩn đoán và phương pháp đang điều trị.",
          "Mốc thời gian xuất hiện triệu chứng.",
          "Những thay đổi gần đây về ăn uống, giấc ngủ, cân nặng và sinh hoạt.",
          "Người bệnh cũng nên chủ động hỏi khi chưa hiểu rõ chỉ định hoặc kế hoạch điều trị. Trao đổi thẳng thắn giúp bác sĩ hiểu thêm nhu cầu, điều kiện và mong muốn của từng người để tư vấn phù hợp hơn.",
          "Khi nào cần đến bệnh viện ngay?",
          "Phối hợp chuyên khoa giúp đánh giá toàn diện, nhưng trong tình huống khẩn cấp, ưu tiên đầu tiên vẫn là xử trí kịp thời. Người bệnh cần đến cơ sở y tế ngay hoặc gọi hỗ trợ cấp cứu khi xuất hiện các dấu hiệu như:",
          "Đau ngực dữ dội, khó thở hoặc vã mồ hôi.",
          "Đột ngột méo miệng, yếu liệt tay chân hoặc nói khó.",
          "Mất ý thức, co giật hoặc lú lẫn bất thường.",
          "Chảy máu nhiều hoặc nôn ra máu.",
          "Đau bụng dữ dội, bụng cứng hoặc choáng váng.",
          "Phản ứng dị ứng kèm sưng môi, sưng lưỡi và khó thở.",
          "Chấn thương nghiêm trọng.",
          "Trẻ nhỏ li bì, khó đánh thức, tím tái hoặc khó thở.",
          "Trong các trường hợp này, không nên chờ đến lịch khám thông thường hoặc tự theo dõi kéo dài tại nhà."
        ]
      },
      {
        "heading": "Bệnh viện đa khoa – nơi người bệnh được nhìn nhận như một tổng thể",
        "paragraphs": [
          "Giá trị của bệnh viện đa khoa không chỉ nằm ở số lượng chuyên khoa. Điều quan trọng hơn là khả năng kết nối chuyên môn, dữ liệu và quá trình chăm sóc xung quanh nhu cầu của từng người bệnh.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến xây dựng một hệ thống chăm sóc sức khỏe nơi người bệnh được đánh giá đầy đủ, tư vấn rõ ràng và đồng hành trong suốt quá trình khám, điều trị và phục hồi.",
          "Khi các chuyên khoa không hoạt động như những “ốc đảo” riêng biệt mà cùng nhìn về một mục tiêu chung, người bệnh có cơ hội được chăm sóc an toàn, thuận tiện và phù hợp hơn.",
          "Bệnh viện Đa khoa Hồng Phúc – Kết nối chuyên môn, chăm sóc toàn diện, đồng hành cùng sức khỏe mỗi gia đình.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "hop-tac-quoc-te-trong-y-te-nguoi-benh-duoc-huong-loi-gi": {
    "sourceFile": "3.Hợp tác quốc tế trong y tế Người bệnh được hưởng lợi gì.docx",
    "title": "Hợp tác quốc tế trong y tế: Người bệnh được hưởng lợi gì?",
    "excerpt": "Nhắc đến hợp tác quốc tế trong y tế, nhiều người thường hình dung đến những bản ký kết trang trọng, bác sĩ nước ngoài đến thăm bệnh viện hoặc các thiết bị hiện đại được nhập khẩu từ nước ngoài. Tuy nhiên, giá trị thực sự của hợp tác quốc tế không nằm ở một buổi lễ hay một cái tên nổi tiếng xuất hiện trên bảng giới thiệu.",
    "intro": [
      "Nhắc đến hợp tác quốc tế trong y tế, nhiều người thường hình dung đến những bản ký kết trang trọng, bác sĩ nước ngoài đến thăm bệnh viện hoặc các thiết bị hiện đại được nhập khẩu từ nước ngoài. Tuy nhiên, giá trị thực sự của hợp tác quốc tế không nằm ở một buổi lễ hay một cái tên nổi tiếng xuất hiện trên bảng giới thiệu.",
      "Một chương trình hợp tác có ý nghĩa phải giúp kiến thức, kỹ thuật và kinh nghiệm được đưa vào thực tế khám chữa bệnh. Khi được triển khai bài bản, người hưởng lợi cuối cùng không chỉ là bệnh viện hay đội ngũ nhân viên y tế, mà chính là người bệnh.",
      "Thông qua chuyển giao chuyên môn, hội chẩn với chuyên gia và đào tạo liên tục, các cơ sở y tế có thêm điều kiện tiếp cận những phương pháp mới, chuẩn hóa quy trình và nâng cao khả năng xử lý các trường hợp phức tạp. Người bệnh nhờ đó có thể được chăm sóc ngay tại địa phương với chất lượng ngày càng hoàn thiện, thay vì luôn phải nghĩ đến việc đi xa hoặc ra nước ngoài.",
      "Hợp tác quốc tế trong y tế là gì?",
      "Hợp tác quốc tế trong y tế là quá trình các bệnh viện, trường đại học, viện nghiên cứu, tổ chức y tế hoặc chuyên gia ở nhiều quốc gia cùng chia sẻ kiến thức, kinh nghiệm và nguồn lực để nâng cao chất lượng chăm sóc sức khỏe.",
      "Tùy mục tiêu, hoạt động hợp tác có thể được thực hiện dưới nhiều hình thức:",
      "Chuyển giao kỹ thuật khám, chẩn đoán, điều trị hoặc chăm sóc.",
      "Đào tạo bác sĩ, điều dưỡng và kỹ thuật viên.",
      "Hội chẩn những trường hợp khó hoặc hiếm gặp.",
      "Xây dựng và chuẩn hóa quy trình chuyên môn.",
      "Trao đổi kinh nghiệm về quản lý chất lượng và an toàn người bệnh.",
      "Hợp tác nghiên cứu và cập nhật bằng chứng y khoa.",
      "Ứng dụng công nghệ số trong đào tạo, tư vấn và kết nối chuyên gia.",
      "Tổ chức Y tế Thế giới nhấn mạnh rằng hợp tác, đào tạo và phát triển năng lực nhân viên y tế là những yếu tố quan trọng để nâng cao chất lượng dịch vụ. Các chương trình hợp tác bệnh viện cũng có thể hỗ trợ cải thiện quy trình an toàn, đào tạo nhân viên và khả năng học hỏi giữa các hệ thống y tế.",
      "Nói một cách dễ hiểu, hợp tác quốc tế giúp một bệnh viện không phải tự mình đi lại toàn bộ hành trình từ điểm xuất phát. Những kinh nghiệm đã được tích lũy ở nơi khác có thể được chọn lọc, điều chỉnh và ứng dụng sao cho phù hợp với điều kiện thực tế tại Việt Nam."
    ],
    "sections": [
      {
        "heading": "Chuyển giao chuyên môn không chỉ là mang máy móc về bệnh viện",
        "paragraphs": [
          "Một thiết bị hiện đại chỉ thực sự phát huy giá trị khi có đội ngũ biết sử dụng đúng, lựa chọn đúng người bệnh và xử lý được những tình huống phát sinh. Vì vậy, chuyển giao chuyên môn không đơn thuần là mua máy móc hoặc nhận một bộ tài liệu kỹ thuật.",
          "Quá trình này thường bao gồm nhiều bước:",
          "Đánh giá nhu cầu và khả năng triển khai của bệnh viện.",
          "Đào tạo kiến thức lý thuyết.",
          "Hướng dẫn kỹ thuật trực tiếp.",
          "Thực hành trên mô hình hoặc dưới sự giám sát.",
          "Xây dựng tiêu chí lựa chọn người bệnh.",
          "Chuẩn hóa quy trình trước, trong và sau can thiệp.",
          "Theo dõi kết quả và xử lý biến chứng.",
          "Đánh giá năng lực trước khi triển khai độc lập.",
          "Chuyển giao công nghệ trong y tế được hiểu là quá trình phổ biến kiến thức và năng lực kỹ thuật từ nơi đã làm chủ phương pháp đến những đơn vị có nhu cầu ứng dụng. Để duy trì hiệu quả, hoạt động chuyển giao cần gắn với đào tạo, giám sát và xây dựng năng lực tại chỗ, thay vì chỉ thực hiện một vài ca kỹ thuật ngắn hạn."
        ]
      },
      {
        "heading": "Người bệnh được tiếp cận thêm các phương pháp phù hợp",
        "paragraphs": [
          "Khi một kỹ thuật mới được chuyển giao thành công, người bệnh có thể có thêm lựa chọn trong chẩn đoán và điều trị. Tùy từng lĩnh vực, đó có thể là phương pháp chẩn đoán chính xác hơn, kỹ thuật can thiệp ít xâm lấn hơn hoặc quy trình phục hồi được tổ chức tốt hơn.",
          "Điều này không có nghĩa phương pháp mới luôn tốt hơn phương pháp cũ. Bác sĩ vẫn cần đánh giá dựa trên bệnh lý, thể trạng, nguy cơ và khả năng đáp ứng của từng người. Giá trị của chuyển giao chuyên môn nằm ở việc mở rộng năng lực để bác sĩ có thêm phương án phù hợp, chứ không phải áp dụng kỹ thuật mới cho tất cả người bệnh."
        ]
      },
      {
        "heading": "Người bệnh có thể giảm việc phải di chuyển xa",
        "paragraphs": [
          "Trước đây, với một số bệnh lý hoặc kỹ thuật chuyên sâu, người bệnh có thể phải đến thành phố lớn hay cân nhắc điều trị ở nước ngoài. Việc đi xa không chỉ tốn chi phí mà còn kéo theo nhiều khó khăn về ăn ở, người chăm sóc, ngôn ngữ và quá trình tái khám.",
          "Khi đội ngũ trong nước được đào tạo và làm chủ kỹ thuật, một số dịch vụ có thể được triển khai gần nơi người bệnh sinh sống hơn. Người bệnh nhờ đó thuận tiện hơn trong việc thăm khám, điều trị và theo dõi lâu dài.",
          "Tuy nhiên, không phải trường hợp nào cũng phù hợp để điều trị tại địa phương. Nếu bệnh vượt quá năng lực chuyên môn hoặc điều kiện an toàn của cơ sở, bác sĩ vẫn cần tư vấn chuyển tuyến phù hợp."
        ]
      },
      {
        "heading": "Quy trình điều trị được chuẩn hóa hơn",
        "paragraphs": [
          "Một chương trình chuyển giao chuyên môn bài bản không chỉ dạy bác sĩ cách thực hiện kỹ thuật. Các nội dung về chỉ định, chống chỉ định, kiểm soát nhiễm khuẩn, sử dụng thuốc, theo dõi biến chứng và đánh giá kết quả cũng cần được thống nhất.",
          "Nhờ đó, chất lượng điều trị không phụ thuộc hoàn toàn vào kinh nghiệm riêng của một cá nhân. Đội ngũ có thể phối hợp theo quy trình rõ ràng hơn, biết khi nào cần tiếp tục, khi nào cần dừng và khi nào phải xin thêm ý kiến chuyên gia."
        ]
      },
      {
        "heading": "Hội chẩn quốc tế giúp bổ sung góc nhìn cho những trường hợp phức tạp",
        "paragraphs": [
          "Không phải bệnh nào cũng có biểu hiện điển hình. Có những trường hợp đã thực hiện nhiều xét nghiệm nhưng nguyên nhân vẫn chưa rõ, bệnh diễn biến không như dự kiến hoặc người bệnh đồng thời mắc nhiều bệnh nền.",
          "Khi đó, hội chẩn có thể giúp tập hợp ý kiến từ nhiều bác sĩ và nhiều lĩnh vực chuyên môn. Nếu cần thiết và có điều kiện, bệnh viện có thể kết nối với chuyên gia quốc tế để trao đổi thêm về hồ sơ, hình ảnh chẩn đoán, hướng xử trí hoặc những nguy cơ cần lưu ý.",
          "Công nghệ y tế từ xa cho phép chuyên gia và bác sĩ điều trị trao đổi khi khoảng cách địa lý ngăn họ gặp trực tiếp. Hình thức này có thể được sử dụng để hỗ trợ tư vấn chuyên khoa, xem xét hình ảnh và bổ sung ý kiến cho quá trình chẩn đoán hoặc xây dựng kế hoạch điều trị."
        ]
      },
      {
        "heading": "Người bệnh có thêm một góc nhìn chuyên môn",
        "paragraphs": [
          "Trong một ca bệnh phức tạp, ý kiến từ chuyên gia khác có thể giúp:",
          "Bổ sung khả năng chẩn đoán cần xem xét.",
          "Đánh giá lại kết quả xét nghiệm hoặc hình ảnh.",
          "So sánh các phương án điều trị.",
          "Nhận diện nguy cơ và biến chứng.",
          "Xác định có cần làm thêm kiểm tra hay không.",
          "Đề xuất phương án theo dõi sau điều trị.",
          "Ý kiến hội chẩn không nhất thiết phủ nhận đánh giá ban đầu. Trong nhiều trường hợp, hội chẩn giúp củng cố hướng điều trị đang được lựa chọn hoặc làm rõ những điểm còn chưa chắc chắn."
        ]
      },
      {
        "heading": "Hạn chế những chuyến đi chưa thực sự cần thiết",
        "paragraphs": [
          "Trước khi quyết định điều trị ở nước ngoài, người bệnh thường cần biết cơ sở đó có phương pháp phù hợp hay không và việc di chuyển có thực sự mang lại lợi ích. Hội chẩn từ xa có thể giúp chuyên gia xem xét hồ sơ ban đầu trước khi người bệnh đưa ra quyết định.",
          "Nếu phương pháp điều trị có thể thực hiện an toàn trong nước, người bệnh có thể tránh được một chuyến đi tốn kém. Ngược lại, nếu cần can thiệp tại cơ sở chuyên sâu hơn, kết quả hội chẩn cũng giúp người bệnh chuẩn bị hồ sơ và kế hoạch rõ ràng hơn."
        ]
      },
      {
        "heading": "Hỗ trợ bác sĩ điều trị, không thay thế thăm khám trực tiếp",
        "paragraphs": [
          "Hội chẩn quốc tế không phải là việc gửi vài kết quả xét nghiệm rồi nhận về một “đáp án tuyệt đối”. Chất lượng hội chẩn phụ thuộc vào độ đầy đủ của hồ sơ, hình ảnh, kết quả kiểm tra và thông tin lâm sàng.",
          "Chuyên gia ở xa có thể đưa ra nhận định hoặc khuyến nghị, nhưng bác sĩ trực tiếp thăm khám vẫn cần đối chiếu với tình trạng thực tế của người bệnh. Phương án cuối cùng phải tính đến điều kiện triển khai, thuốc và thiết bị sẵn có, khả năng theo dõi cũng như mong muốn của người bệnh và gia đình.",
          "Với trường hợp cấp cứu, hội chẩn từ xa không được làm chậm quá trình xử trí cần thiết."
        ]
      },
      {
        "heading": "Đào tạo quốc tế giúp kiến thức mới đi vào thực hành hằng ngày",
        "paragraphs": [
          "Kiến thức y khoa luôn thay đổi. Những hướng dẫn chẩn đoán, phương pháp điều trị, công nghệ và tiêu chuẩn an toàn có thể được cập nhật khi có thêm bằng chứng mới.",
          "Vì vậy, bằng cấp ban đầu là nền tảng nhưng không phải điểm kết thúc của quá trình học tập. Bác sĩ, điều dưỡng, kỹ thuật viên và các bộ phận liên quan đều cần được đào tạo liên tục.",
          "WHO cho rằng phát triển đội ngũ y tế không chỉ cần đủ về số lượng mà còn phải bảo đảm chất lượng, năng lực và mức độ phù hợp với nhu cầu chăm sóc. Các hình thức cố vấn lâm sàng, đào tạo thực hành và hỗ trợ sau đào tạo có thể giúp nhân viên duy trì kỹ năng và xử lý những khó khăn phát sinh trong quá trình áp dụng."
        ]
      },
      {
        "heading": "Đào tạo không chỉ dành cho bác sĩ",
        "paragraphs": [
          "Một ca điều trị an toàn là kết quả của cả hệ thống. Bác sĩ có thể đưa ra chỉ định đúng, nhưng nếu khâu chuẩn bị, chăm sóc, sử dụng thuốc hoặc theo dõi chưa phù hợp thì kết quả vẫn có thể bị ảnh hưởng.",
          "Do đó, các chương trình hợp tác quốc tế có thể bao gồm đào tạo cho:",
          "Bác sĩ khám và điều trị.",
          "Bác sĩ gây mê, hồi sức hoặc chẩn đoán hình ảnh.",
          "Điều dưỡng và hộ sinh.",
          "Dược sĩ.",
          "Kỹ thuật viên xét nghiệm và thiết bị y tế.",
          "Nhân viên kiểm soát nhiễm khuẩn.",
          "Bộ phận quản lý chất lượng.",
          "Nhân viên tiếp nhận và chăm sóc khách hàng.",
          "Khi các vị trí cùng hiểu quy trình, phối hợp giữa các bộ phận sẽ liền mạch hơn. Người bệnh không chỉ được hưởng lợi ở phòng khám hay phòng mổ mà còn từ những khâu tưởng như rất nhỏ: xác nhận thông tin, dùng thuốc, bàn giao, vệ sinh tay và hướng dẫn sau khi ra viện."
        ]
      },
      {
        "heading": "Đào tạo thực hành giúp xử lý tình huống tốt hơn",
        "paragraphs": [
          "Một bài giảng có thể giúp cập nhật kiến thức, nhưng kỹ năng lâm sàng cần được luyện tập. Vì vậy, chương trình đào tạo hiệu quả thường kết hợp giữa lý thuyết, mô phỏng, quan sát ca bệnh, thực hành có giám sát và đánh giá sau đào tạo.",
          "Các chương trình đào tạo về an toàn người bệnh và mô phỏng lâm sàng có thể hỗ trợ nâng cao kỹ năng thủ thuật, giao tiếp trong nhóm và khả năng ứng phó với tình huống bất thường.",
          "Điều này đặc biệt quan trọng với những tình huống ít gặp nhưng nguy hiểm, chẳng hạn phản ứng thuốc nghiêm trọng, ngừng tuần hoàn, khó đặt đường thở hoặc biến chứng trong quá trình phẫu thuật. Đội ngũ đã luyện tập trước thường có khả năng phối hợp chủ động hơn khi tình huống thật xảy ra."
        ]
      },
      {
        "heading": "Kiến thức có thể được lan tỏa trong toàn bệnh viện",
        "paragraphs": [
          "Một chương trình hợp tác tốt không nên dừng lại ở một vài người được cử đi học. Sau đào tạo, kiến thức cần được chia sẻ lại thông qua sinh hoạt khoa học, hướng dẫn nội bộ, giám sát thực hành và xây dựng quy trình chung.",
          "Cách làm này giúp năng lực mới trở thành tài sản của bệnh viện, thay vì chỉ gắn với một cá nhân. Ngay cả khi nhân sự thay đổi, quy trình và hệ thống đào tạo vẫn có thể tiếp tục được duy trì.",
          "Hợp tác quốc tế còn mang lại những lợi ích nào?",
          "Ngoài ba nội dung chính là chuyển giao chuyên môn, hội chẩn và đào tạo, hợp tác quốc tế còn có thể góp phần cải thiện nhiều mặt trong hoạt động bệnh viện."
        ]
      },
      {
        "heading": "Nâng cao an toàn người bệnh",
        "paragraphs": [
          "Thông qua trao đổi kinh nghiệm, bệnh viện có thể học hỏi cách kiểm soát nhiễm khuẩn, phòng ngừa sai sót, quản lý thuốc, xác định đúng người bệnh và cải thiện quy trình phẫu thuật.",
          "Các chương trình hợp tác về an toàn người bệnh do WHO ghi nhận đã hỗ trợ bệnh viện xây dựng hoạt động đào tạo, nâng cao tuân thủ quy trình và thúc đẩy việc học hỏi từ các sự cố.",
          "Mục tiêu không phải là khẳng định môi trường y tế có thể hoàn toàn không xảy ra rủi ro. Điều quan trọng là rủi ro được nhận diện, báo cáo, phân tích và có biện pháp hạn chế tái diễn."
        ]
      },
      {
        "heading": "Cải thiện trải nghiệm của người bệnh",
        "paragraphs": [
          "Kinh nghiệm quốc tế không chỉ liên quan đến kỹ thuật điều trị. Cách tổ chức lịch khám, cung cấp thông tin, bảo vệ sự riêng tư, hỗ trợ ngôn ngữ và hướng dẫn sau ra viện cũng có thể được trao đổi và cải tiến.",
          "Một bệnh viện hiện đại không chỉ quan tâm bệnh được điều trị như thế nào mà còn chú ý người bệnh có hiểu kế hoạch điều trị hay không, có được tôn trọng hay không và có biết mình cần làm gì sau khi rời bệnh viện hay không."
        ]
      },
      {
        "heading": "Thúc đẩy tư duy học hỏi và cải tiến liên tục",
        "paragraphs": [
          "Khi thường xuyên trao đổi với các chuyên gia và tổ chức bên ngoài, đội ngũ y tế có thêm cơ hội nhìn lại cách làm hiện tại. Những câu hỏi như “Vì sao quy trình này được thực hiện như vậy?”, “Có cách nào an toàn hơn không?” hay “Kết quả đã được đo lường chưa?” sẽ giúp bệnh viện hình thành văn hóa cải tiến.",
          "Đây là một lợi ích khó nhìn thấy ngay bằng mắt, nhưng có ảnh hưởng lâu dài đến chất lượng chăm sóc."
        ]
      },
      {
        "heading": "Không phải hoạt động mang yếu tố nước ngoài nào cũng là hợp tác có chiều sâu",
        "paragraphs": [
          "Người bệnh nên phân biệt giữa hoạt động giao lưu và một chương trình hợp tác chuyên môn thực sự.",
          "Một buổi tham quan, hội thảo hoặc ký kết có thể là bước khởi đầu, nhưng chưa đủ để chứng minh kỹ thuật đã được chuyển giao hay đội ngũ đã làm chủ quy trình. Tương tự, việc sử dụng thiết bị nhập khẩu không đồng nghĩa bệnh viện đang áp dụng đầy đủ tiêu chuẩn của quốc gia sản xuất thiết bị đó.",
          "Một chương trình hợp tác có giá trị cần thể hiện được những yếu tố như:",
          "Mục tiêu chuyên môn cụ thể.",
          "Đơn vị và chuyên gia tham gia rõ ràng.",
          "Nội dung đào tạo hoặc chuyển giao có hệ thống.",
          "Thời gian thực hiện đủ để hình thành năng lực.",
          "Có đánh giá kết quả và giám sát sau đào tạo.",
          "Bảo đảm an toàn và quyền lợi của người bệnh.",
          "Phù hợp với quy định pháp luật và điều kiện thực tế tại Việt Nam.",
          "Giá trị không nằm ở quốc tịch của chuyên gia mà ở chất lượng kiến thức được chia sẻ và khả năng áp dụng vào chăm sóc người bệnh.",
          "Người bệnh cần lưu ý gì khi tham gia hội chẩn hoặc chương trình hợp tác quốc tế?",
          "Trước khi đồng ý, người bệnh có thể trao đổi với bệnh viện về:",
          "Mục đích của buổi hội chẩn.",
          "Chuyên gia tham gia thuộc lĩnh vực nào.",
          "Những hồ sơ nào sẽ được chia sẻ.",
          "Thông tin cá nhân được bảo mật ra sao.",
          "Có phát sinh chi phí hay không.",
          "Ý kiến hội chẩn được sử dụng như thế nào.",
          "Ai là bác sĩ chịu trách nhiệm điều trị trực tiếp.",
          "Có cần phiên dịch hoặc giải thích lại thuật ngữ chuyên môn không.",
          "Người bệnh có quyền được cung cấp thông tin dễ hiểu trước khi hồ sơ được chia sẻ cho bên liên quan. Việc bảo mật dữ liệu, xin ý kiến đồng thuận và xác định trách nhiệm chuyên môn cần được thực hiện rõ ràng."
        ]
      },
      {
        "heading": "Hợp tác để năng lực quốc tế trở thành giá trị tại địa phương",
        "paragraphs": [
          "Với định hướng phát triển theo mô hình bệnh viện đa khoa quốc tế, hợp tác chuyên môn là một trong những nền tảng giúp Bệnh viện Đa khoa Hồng Phúc từng bước tiếp cận thêm kinh nghiệm, kiến thức và phương pháp chăm sóc tiên tiến.",
          "Mục tiêu của hợp tác không phải là sao chép nguyên vẹn một mô hình từ nước ngoài. Mỗi quốc gia có đặc điểm dân số, bệnh tật, nguồn lực và quy định khác nhau. Kiến thức quốc tế cần được chọn lọc, kiểm chứng và điều chỉnh để phù hợp với người bệnh Việt Nam.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến xây dựng môi trường y tế nơi đội ngũ không ngừng học hỏi, tăng cường kết nối chuyên môn và lấy lợi ích thực tế của người bệnh làm thước đo cho mỗi hoạt động hợp tác.",
          "Khi một kỹ thuật mới được làm chủ, một ca bệnh khó có thêm ý kiến chuyên gia hoặc một quy trình an toàn được áp dụng tốt hơn, hợp tác quốc tế lúc đó mới thực sự đi từ văn bản đến phòng khám, buồng bệnh và cuộc sống của mỗi gia đình.",
          "Bệnh viện Đa khoa Hồng Phúc – Kết nối tri thức, nâng cao chuyên môn, chăm sóc người bệnh bằng những giá trị thiết thực.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "quy-trinh-kham-tai-hong-phuc-tu-dat-lich-den-nhan-ket-qua": {
    "sourceFile": "4.Quy trình khám tại Bệnh viện Đa khoa Hồng Phúc Từ đặt lịch đến nhận kết quả.docx",
    "title": "Quy trình khám tại Bệnh viện Đa khoa Hồng Phúc: Từ đặt lịch đến nhận kết quả",
    "excerpt": "Đi khám bệnh đôi khi khiến nhiều người cảm thấy bối rối: nên đăng ký ở đâu, cần mang theo giấy tờ gì, khám xong có phải tự tìm phòng xét nghiệm hay kết quả sẽ được hướng dẫn như thế nào? Với người lớn tuổi, người lần đầu đến bệnh viện hoặc gia đình đưa trẻ nhỏ đi khám, những câu hỏi tưởng chừng đơn giản này lại có thể tạo ra không ít áp lực.",
    "intro": [
      "Đi khám bệnh đôi khi khiến nhiều người cảm thấy bối rối: nên đăng ký ở đâu, cần mang theo giấy tờ gì, khám xong có phải tự tìm phòng xét nghiệm hay kết quả sẽ được hướng dẫn như thế nào? Với người lớn tuổi, người lần đầu đến bệnh viện hoặc gia đình đưa trẻ nhỏ đi khám, những câu hỏi tưởng chừng đơn giản này lại có thể tạo ra không ít áp lực.",
      "Hiểu được điều đó, Bệnh viện Đa khoa Hồng Phúc hướng đến xây dựng quy trình khám rõ ràng, thuận tiện và có sự hướng dẫn trong từng bước. Từ lúc đặt lịch, tiếp nhận, gặp bác sĩ đến khi nhận kết quả và được tư vấn hướng chăm sóc, người bệnh có thể chủ động hơn trong hành trình khám chữa bệnh của mình.",
      "Bài viết dưới đây sẽ giúp bạn hình dung quy trình khám thông thường tại Hồng Phúc và chuẩn bị tốt hơn trước khi đến bệnh viện."
    ],
    "sections": [
      {
        "heading": "Bước 1: Xác định nhu cầu khám trước khi đặt lịch",
        "paragraphs": [
          "Trước khi liên hệ đặt lịch, người bệnh nên xác định sơ bộ nhu cầu của mình. Bạn không cần tự chẩn đoán bệnh, nhưng nên mô tả được triệu chứng chính hoặc mục đích đến bệnh viện.",
          "Chẳng hạn:",
          "Đau bụng, đầy hơi hoặc rối loạn tiêu hóa.",
          "Đau đầu, chóng mặt hoặc mất ngủ kéo dài.",
          "Ho, khó thở hoặc đau tức ngực.",
          "Đau xương khớp, hạn chế vận động.",
          "Khám thai hoặc kiểm tra sức khỏe phụ nữ.",
          "Khám sức khỏe định kỳ.",
          "Tái khám theo lịch hẹn.",
          "Kiểm tra lại kết quả bất thường đã phát hiện trước đó.",
          "Khám cho trẻ nhỏ hoặc người cao tuổi.",
          "Tư vấn trước phẫu thuật, thủ thuật hoặc điều trị chuyên sâu.",
          "Nếu chưa biết nên khám chuyên khoa nào, người bệnh có thể mô tả triệu chứng với bộ phận tiếp nhận. Nhân viên bệnh viện sẽ hỗ trợ hướng dẫn đến khoa phù hợp hoặc đăng ký khám ban đầu để bác sĩ đánh giá.",
          "Điều quan trọng là không nên tự chọn chuyên khoa chỉ dựa trên phỏng đoán. Một triệu chứng có thể liên quan đến nhiều nguyên nhân khác nhau và đôi khi cần sự phối hợp giữa nhiều bác sĩ."
        ]
      },
      {
        "heading": "Bước 2: Đặt lịch khám qua kênh tiếp nhận của bệnh viện",
        "paragraphs": [
          "Người bệnh có thể chủ động đặt lịch trước thông qua các kênh tiếp nhận chính thức của Bệnh viện Đa khoa Hồng Phúc. Khi đăng ký, bạn nên cung cấp những thông tin cơ bản như:",
          "Họ và tên.",
          "Năm sinh.",
          "Số điện thoại liên hệ.",
          "Triệu chứng hoặc nhu cầu khám.",
          "Chuyên khoa hoặc bác sĩ mong muốn, nếu có.",
          "Ngày và khung giờ dự kiến đến bệnh viện.",
          "Thông tin tái khám, nếu đã từng điều trị tại Hồng Phúc.",
          "Đặt lịch trước giúp bệnh viện chủ động tiếp nhận thông tin và giúp người bệnh sắp xếp thời gian thuận tiện hơn. Tuy nhiên, thời gian khám thực tế có thể thay đổi tùy tình trạng của từng ca bệnh, số lượng người đến khám và các trường hợp cấp cứu cần được ưu tiên.",
          "Sau khi đăng ký, người bệnh nên kiểm tra lại ngày khám, giờ dự kiến, địa điểm và những giấy tờ cần mang theo."
        ]
      },
      {
        "heading": "Bước 3: Chuẩn bị giấy tờ và hồ sơ y tế",
        "paragraphs": [
          "Chuẩn bị đầy đủ trước khi đến bệnh viện giúp bác sĩ có thêm dữ liệu để đánh giá và hạn chế việc phải bổ sung hồ sơ nhiều lần.",
          "Người bệnh nên mang theo:",
          "Căn cước công dân, hộ chiếu hoặc giấy tờ tùy thân phù hợp.",
          "Thẻ bảo hiểm y tế và giấy chuyển tuyến, nếu sử dụng.",
          "Giấy hẹn khám hoặc thông tin lịch đã đăng ký.",
          "Sổ khám bệnh, đơn thuốc và giấy ra viện trước đây.",
          "Kết quả xét nghiệm, nội soi hoặc chẩn đoán hình ảnh đã thực hiện.",
          "Danh sách thuốc và thực phẩm chức năng đang sử dụng.",
          "Thông tin về tiền sử dị ứng thuốc.",
          "Hồ sơ bệnh nền đang được theo dõi.",
          "Nếu mang theo phim chụp, đĩa dữ liệu hoặc kết quả từ cơ sở y tế khác, bạn nên sắp xếp theo thứ tự thời gian. Điều này giúp bác sĩ dễ theo dõi diễn biến bệnh và so sánh các kết quả.",
          "Người bệnh cũng nên ghi lại thời điểm xuất hiện triệu chứng, mức độ khó chịu, những yếu tố làm tình trạng tăng hoặc giảm và các phương pháp đã tự áp dụng tại nhà.",
          "Có cần nhịn ăn trước khi đến khám không?",
          "Không phải buổi khám nào cũng cần nhịn ăn. Tuy nhiên, một số xét nghiệm máu, siêu âm bụng hoặc thủ thuật có thể yêu cầu người bệnh tạm ngừng ăn trong khoảng thời gian nhất định.",
          "Nếu chưa có hướng dẫn cụ thể, người bệnh không nên tự ý nhịn ăn quá lâu, đặc biệt là:",
          "Trẻ nhỏ.",
          "Phụ nữ mang thai.",
          "Người cao tuổi.",
          "Người mắc tiểu đường.",
          "Người đang sử dụng thuốc hằng ngày.",
          "Người có tiền sử tụt huyết áp hoặc hạ đường huyết.",
          "Khi đặt lịch, bạn nên hỏi rõ có cần nhịn ăn, ngừng thuốc hay chuẩn bị đặc biệt hay không. Không tự ý dừng thuốc điều trị nếu chưa được bác sĩ hướng dẫn."
        ]
      },
      {
        "heading": "Bước 4: Đến bệnh viện và làm thủ tục tiếp nhận",
        "paragraphs": [
          "Bệnh viện Đa khoa Hồng Phúc tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng. Người bệnh nên đến trước giờ hẹn một khoảng thời gian hợp lý để gửi xe, tìm khu vực tiếp nhận và hoàn tất thủ tục.",
          "Tại quầy đăng ký, nhân viên có thể kiểm tra:",
          "Thông tin cá nhân.",
          "Lịch hẹn.",
          "Nhu cầu khám.",
          "Hồ sơ bảo hiểm, nếu có.",
          "Hồ sơ khám trước đây.",
          "Chuyên khoa cần tiếp nhận.",
          "Sau khi hoàn tất đăng ký, người bệnh sẽ được hướng dẫn đến phòng khám hoặc khu vực chờ phù hợp.",
          "Người lớn tuổi, người gặp khó khăn trong di chuyển, phụ nữ mang thai hoặc gia đình có trẻ nhỏ nên thông báo với nhân viên để được hướng dẫn thuận tiện hơn."
        ]
      },
      {
        "heading": "Bước 5: Sàng lọc và kiểm tra ban đầu",
        "paragraphs": [
          "Tùy chuyên khoa và tình trạng sức khỏe, người bệnh có thể được kiểm tra một số chỉ số trước khi gặp bác sĩ, chẳng hạn:",
          "Huyết áp.",
          "Mạch.",
          "Nhiệt độ.",
          "Cân nặng và chiều cao.",
          "Nồng độ oxy trong máu.",
          "Đường huyết nhanh trong trường hợp cần thiết.",
          "Mức độ đau hoặc các dấu hiệu bất thường.",
          "Bước kiểm tra ban đầu giúp nhân viên y tế nhận biết những trường hợp cần được ưu tiên hoặc có dấu hiệu không an toàn.",
          "Nếu đang có triệu chứng đau ngực dữ dội, khó thở, lơ mơ, co giật, chảy máu nhiều hoặc yếu liệt đột ngột, người bệnh cần thông báo ngay. Những trường hợp có dấu hiệu cấp cứu sẽ được tiếp nhận theo quy trình riêng, không chờ khám như lịch thông thường."
        ]
      },
      {
        "heading": "Bước 6: Gặp bác sĩ và trao đổi về tình trạng sức khỏe",
        "paragraphs": [
          "Trong phòng khám, bác sĩ sẽ hỏi về triệu chứng, tiền sử bệnh, thuốc đang sử dụng và những vấn đề liên quan. Sau đó, bác sĩ tiến hành thăm khám để đánh giá tình trạng hiện tại.",
          "Để buổi khám hiệu quả hơn, người bệnh nên mô tả rõ:",
          "Triệu chứng bắt đầu từ khi nào.",
          "Xuất hiện liên tục hay từng cơn.",
          "Mức độ nặng lên hoặc giảm đi trong hoàn cảnh nào.",
          "Có kèm sốt, nôn, sụt cân, khó thở hoặc dấu hiệu khác không.",
          "Đã sử dụng thuốc hoặc phương pháp nào.",
          "Có từng gặp tình trạng tương tự không.",
          "Đang điều trị những bệnh nền nào.",
          "Không nên giấu việc sử dụng thuốc nam, thuốc không kê đơn hoặc thực phẩm chức năng. Những sản phẩm này vẫn có thể ảnh hưởng đến kết quả xét nghiệm, tương tác với thuốc điều trị hoặc làm thay đổi triệu chứng.",
          "Sau khi thăm khám, bác sĩ có thể đưa ra nhận định ban đầu, tư vấn theo dõi hoặc chỉ định thêm các phương pháp kiểm tra cần thiết."
        ]
      },
      {
        "heading": "Bước 7: Thực hiện xét nghiệm và chẩn đoán hình ảnh khi cần",
        "paragraphs": [
          "Không phải người bệnh nào cũng cần làm đầy đủ các xét nghiệm. Chỉ định phụ thuộc vào triệu chứng, kết quả thăm khám, độ tuổi, bệnh nền và những nguy cơ bác sĩ đang cần loại trừ.",
          "Các kiểm tra có thể bao gồm:",
          "Xét nghiệm máu.",
          "Xét nghiệm nước tiểu.",
          "Siêu âm.",
          "Chụp X-quang.",
          "Điện tim.",
          "Nội soi.",
          "Các phương pháp chẩn đoán hình ảnh phù hợp.",
          "Thăm dò chức năng hoặc xét nghiệm chuyên khoa.",
          "Sau khi nhận chỉ định, người bệnh sẽ được hướng dẫn đến khu vực thực hiện. Trước một số thủ thuật, nhân viên y tế có thể giải thích về mục đích, cách chuẩn bị, thời gian thực hiện và những lưu ý an toàn.",
          "Người bệnh nên hỏi lại nếu chưa hiểu:",
          "Vì sao cần thực hiện kiểm tra này?",
          "Có cần nhịn ăn hay chuẩn bị gì không?",
          "Quá trình thực hiện kéo dài bao lâu?",
          "Khi nào có kết quả?",
          "Có cần quay lại gặp bác sĩ trong ngày không?",
          "Sau thủ thuật có cần người nhà đi cùng không?",
          "Việc hiểu rõ từng bước giúp người bệnh bớt căng thẳng và phối hợp tốt hơn với nhân viên y tế."
        ]
      },
      {
        "heading": "Bước 8: Chờ và nhận kết quả",
        "paragraphs": [
          "Thời gian trả kết quả phụ thuộc vào từng loại xét nghiệm hoặc kỹ thuật. Một số kết quả có thể có trong buổi khám, trong khi những kiểm tra chuyên sâu cần nhiều thời gian hơn để xử lý và đọc kết quả.",
          "Khi nhận kết quả, người bệnh nên kiểm tra:",
          "Họ tên và ngày sinh.",
          "Ngày thực hiện.",
          "Loại xét nghiệm hoặc chẩn đoán hình ảnh.",
          "Số lượng tài liệu được trả.",
          "Lịch quay lại gặp bác sĩ.",
          "Không nên tự kết luận bệnh chỉ dựa vào một chỉ số được đánh dấu cao hoặc thấp. Khoảng tham chiếu có thể thay đổi theo phương pháp xét nghiệm, độ tuổi, giới tính và tình trạng cụ thể.",
          "Một chỉ số bất thường chưa chắc đồng nghĩa với bệnh nghiêm trọng. Ngược lại, một kết quả nằm trong giới hạn thông thường cũng không phải lúc nào cũng loại trừ hoàn toàn bệnh lý. Bác sĩ cần kết hợp kết quả với triệu chứng và quá trình thăm khám để đưa ra nhận định."
        ]
      },
      {
        "heading": "Bước 9: Quay lại phòng khám để bác sĩ đọc kết quả",
        "paragraphs": [
          "Sau khi có đủ kết quả, người bệnh quay lại gặp bác sĩ theo hướng dẫn. Đây là bước rất quan trọng nhưng đôi khi bị bỏ qua vì người bệnh nghĩ rằng chỉ cần tự xem phiếu xét nghiệm là đủ.",
          "Bác sĩ sẽ:",
          "Giải thích các kết quả chính.",
          "Đối chiếu với triệu chứng và tiền sử bệnh.",
          "Đưa ra chẩn đoán hoặc nhận định phù hợp.",
          "Chỉ định kiểm tra bổ sung nếu cần.",
          "Tư vấn phương pháp điều trị.",
          "Hướng dẫn dùng thuốc.",
          "Đề xuất chế độ ăn uống, vận động hoặc theo dõi.",
          "Hẹn tái khám.",
          "Nếu tình trạng liên quan đến nhiều cơ quan, bác sĩ có thể đề nghị khám thêm chuyên khoa hoặc phối hợp liên chuyên khoa. Việc chuyển khám không nhất thiết có nghĩa bệnh nặng hơn, mà nhằm giúp vấn đề được đánh giá đầy đủ hơn.",
          "Người bệnh nên hỏi rõ ba nội dung trước khi rời phòng khám:",
          "Tình trạng hiện tại được bác sĩ nhận định như thế nào?",
          "Cần điều trị hoặc theo dõi ra sao?",
          "Dấu hiệu nào cần quay lại bệnh viện sớm?"
        ]
      },
      {
        "heading": "Bước 10: Thanh toán, nhận thuốc hoặc hoàn tất thủ tục điều trị",
        "paragraphs": [
          "Tùy kết quả khám, người bệnh có thể được kê đơn thuốc, chỉ định điều trị ngoại trú, nhập viện hoặc hẹn thực hiện thủ thuật.",
          "Khi nhận thuốc, người bệnh cần kiểm tra:",
          "Tên thuốc.",
          "Liều dùng.",
          "Thời điểm uống.",
          "Thời gian sử dụng.",
          "Những tác dụng không mong muốn cần lưu ý.",
          "Có cần uống trước hay sau ăn không.",
          "Có loại thuốc hoặc thực phẩm nào cần tránh không.",
          "Không tự ý tăng liều, giảm liều hoặc dùng lại đơn thuốc cho lần bệnh sau. Nếu gặp phản ứng bất thường, người bệnh nên liên hệ với bác sĩ hoặc quay lại cơ sở y tế để được đánh giá.",
          "Đối với người cần theo dõi tiếp, nhân viên bệnh viện sẽ hướng dẫn lịch tái khám, xét nghiệm lại hoặc chăm sóc tại nhà.",
          "Sau khi về nhà, người bệnh nên làm gì?",
          "Hành trình chăm sóc không kết thúc ngay khi rời bệnh viện. Người bệnh nên lưu giữ hồ sơ, uống thuốc đúng hướng dẫn và theo dõi diễn biến triệu chứng.",
          "Bạn có thể ghi lại:",
          "Thời điểm dùng thuốc.",
          "Mức độ cải thiện.",
          "Triệu chứng mới xuất hiện.",
          "Phản ứng bất thường.",
          "Huyết áp, đường huyết hoặc các chỉ số cần theo dõi.",
          "Những câu hỏi muốn trao đổi trong lần tái khám.",
          "Nếu bác sĩ đã hẹn tái khám, người bệnh nên quay lại đúng lịch ngay cả khi triệu chứng đã giảm. Một số bệnh có thể cải thiện biểu hiện bên ngoài nhưng vẫn cần kiểm tra để đánh giá hiệu quả điều trị.",
          "Khi nào không nên chờ đến lịch khám?",
          "Người bệnh cần đến bệnh viện ngay hoặc gọi hỗ trợ cấp cứu nếu xuất hiện:",
          "Đau ngực dữ dội hoặc cảm giác đè nặng ở ngực.",
          "Khó thở, tím tái hoặc thở nhanh bất thường.",
          "Đột ngột méo miệng, nói khó hoặc yếu liệt tay chân.",
          "Mất ý thức, co giật hoặc lú lẫn.",
          "Chảy máu nhiều.",
          "Nôn ra máu hoặc đi ngoài phân đen.",
          "Đau bụng dữ dội, bụng cứng.",
          "Phản ứng dị ứng kèm sưng môi, sưng lưỡi hoặc khó thở.",
          "Sốt cao kèm li bì, cổ cứng hoặc khó đánh thức.",
          "Chấn thương nghiêm trọng.",
          "Trong tình huống cấp cứu, không nên chờ đặt lịch hoặc cố gắng hoàn thiện đầy đủ hồ sơ trước khi đến bệnh viện."
        ]
      },
      {
        "heading": "Một số lưu ý giúp buổi khám thuận tiện hơn",
        "paragraphs": [
          "Để quá trình thăm khám diễn ra chủ động, người bệnh nên:",
          "Đặt lịch trước khi có điều kiện.",
          "Đến sớm hơn giờ dự kiến.",
          "Mang đầy đủ giấy tờ và kết quả cũ.",
          "Mặc trang phục thuận tiện cho việc thăm khám.",
          "Không sử dụng rượu bia trước buổi khám.",
          "Không tự ý dừng thuốc.",
          "Ghi sẵn các câu hỏi cần trao đổi.",
          "Có người thân đi cùng nếu lớn tuổi, sức khỏe yếu hoặc cần làm thủ thuật.",
          "Thông báo ngay nếu cảm thấy khó chịu hơn trong lúc chờ.",
          "Người bệnh nước ngoài hoặc người gặp khó khăn về giao tiếp nên thông báo trước để bệnh viện có phương án hỗ trợ phù hợp với điều kiện thực tế."
        ]
      },
      {
        "heading": "Trải nghiệm khám chữa bệnh bắt đầu từ sự rõ ràng",
        "paragraphs": [
          "Một quy trình tốt không chỉ giúp bệnh viện vận hành thuận lợi mà còn giúp người bệnh giảm bớt cảm giác lo lắng. Khi biết mình cần chuẩn bị gì, đang ở bước nào và tiếp theo phải làm gì, người bệnh có thể tập trung hơn vào việc trao đổi với bác sĩ và chăm sóc sức khỏe.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, quy trình khám được định hướng theo hành trình liền mạch: từ tiếp nhận nhu cầu, thăm khám, thực hiện các kiểm tra cần thiết đến giải thích kết quả và hướng dẫn theo dõi.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến mang lại môi trường khám chữa bệnh chuyên nghiệp, thuận tiện và thân thiện, nơi mỗi người bệnh được lắng nghe và hướng dẫn dựa trên tình trạng cụ thể.",
          "Bệnh viện Đa khoa Hồng Phúc – Rõ ràng trong từng bước, tận tâm trong từng hành trình chăm sóc.",
          "Quy trình thực tế có thể được điều chỉnh tùy chuyên khoa, dịch vụ, tình trạng người bệnh và yêu cầu chuyên môn tại từng thời điểm. Nội dung trong bài viết mang tính chất tham khảo, không thay thế hướng dẫn trực tiếp từ bệnh viện hoặc bác sĩ."
        ]
      }
    ]
  },
  "khi-nao-nen-di-kham-tong-quat-thay-vi-tu-theo-doi-tai-nha": {
    "sourceFile": "5.Khi nào nên đi khám tổng quát thay vì tiếp tục tự theo dõi tại nhà.docx",
    "title": "Khi nào nên đi khám tổng quát thay vì tiếp tục tự theo dõi tại nhà?",
    "excerpt": "Đau đầu sau một đêm thiếu ngủ, mệt mỏi vì làm việc căng thẳng hay đầy bụng sau bữa ăn quá nhiều thường có thể cải thiện khi cơ thể được nghỉ ngơi. Tuy nhiên, nếu những biểu hiện này kéo dài, thường xuyên quay lại hoặc xuất hiện cùng nhiều dấu hiệu khác, việc tiếp tục tự theo dõi tại nhà có thể khiến bạn bỏ lỡ thời điểm phát hiện vấn đề sức khỏe.",
    "intro": [
      "Đau đầu sau một đêm thiếu ngủ, mệt mỏi vì làm việc căng thẳng hay đầy bụng sau bữa ăn quá nhiều thường có thể cải thiện khi cơ thể được nghỉ ngơi. Tuy nhiên, nếu những biểu hiện này kéo dài, thường xuyên quay lại hoặc xuất hiện cùng nhiều dấu hiệu khác, việc tiếp tục tự theo dõi tại nhà có thể khiến bạn bỏ lỡ thời điểm phát hiện vấn đề sức khỏe.",
      "Khám tổng quát không chỉ dành cho người đang mắc bệnh. Đây còn là cơ hội để bác sĩ nhìn nhận sức khỏe một cách toàn diện, kiểm tra các yếu tố nguy cơ và phát hiện một số bất thường chưa biểu hiện rõ thành triệu chứng.",
      "Vậy khi nào bạn có thể tiếp tục theo dõi tại nhà, khi nào nên đặt lịch khám tổng quát và trường hợp nào cần đến bệnh viện ngay?",
      "Khám tổng quát là gì?",
      "Khám tổng quát là quá trình đánh giá sức khỏe chung thay vì chỉ tập trung vào một triệu chứng hoặc một cơ quan cụ thể.",
      "Tùy độ tuổi, giới tính, tiền sử bệnh và nguy cơ cá nhân, buổi khám có thể bao gồm:",
      "Trao đổi về tình trạng sức khỏe hiện tại.",
      "Khai thác tiền sử bệnh của bản thân và gia đình.",
      "Kiểm tra huyết áp, cân nặng và một số chỉ số cơ bản.",
      "Khám lâm sàng các cơ quan cần thiết.",
      "Đánh giá chế độ ăn uống, giấc ngủ và vận động.",
      "Xem lại thuốc và thực phẩm chức năng đang sử dụng.",
      "Chỉ định xét nghiệm hoặc chẩn đoán hình ảnh khi có lý do phù hợp.",
      "Tư vấn các chương trình sàng lọc theo độ tuổi và nguy cơ.",
      "Hướng dẫn theo dõi hoặc chuyển khám chuyên khoa khi phát hiện bất thường.",
      "Khám sức khỏe định kỳ khác với buổi khám vì một bệnh hoặc chấn thương cụ thể. Hoạt động chăm sóc dự phòng có thể bao gồm thăm khám, tiêm chủng, tư vấn và những xét nghiệm sàng lọc nhằm tìm bệnh trước khi triệu chứng xuất hiện.",
      "Nói một cách dễ hiểu, khám tổng quát không nhằm “tìm cho ra một căn bệnh”, mà giúp trả lời ba câu hỏi:",
      "Sức khỏe hiện tại của bạn đang ở mức nào?",
      "Có yếu tố nguy cơ hoặc dấu hiệu bất thường nào cần quan tâm không?",
      "Bạn nên làm gì tiếp theo để bảo vệ sức khỏe?",
      "Khi nào có thể tiếp tục theo dõi tại nhà?",
      "Một số khó chịu nhẹ có thể xuất hiện do thay đổi sinh hoạt và cải thiện sau khi nghỉ ngơi, ăn uống điều độ hoặc điều chỉnh thói quen.",
      "Bạn có thể theo dõi thêm tại nhà khi triệu chứng:",
      "Mức độ nhẹ và không tăng dần.",
      "Có nguyên nhân tương đối rõ, chẳng hạn thiếu ngủ hoặc vận động quá sức.",
      "Mới xuất hiện trong thời gian ngắn.",
      "Không ảnh hưởng đáng kể đến ăn uống, vận động và sinh hoạt.",
      "Cải thiện sau khi nghỉ ngơi.",
      "Không đi kèm dấu hiệu cảnh báo.",
      "Không xảy ra ở người thuộc nhóm nguy cơ cao.",
      "Ví dụ, cảm giác mệt nhẹ sau một chuyến đi dài, đau cơ sau buổi tập thể thao hoặc đầy bụng sau bữa ăn quá nhiều có thể chưa cần lập tức đến bệnh viện nếu tình trạng giảm dần.",
      "Trong thời gian theo dõi, bạn nên:",
      "Nghỉ ngơi và ngủ đủ.",
      "Uống đủ nước.",
      "Ăn uống đều đặn.",
      "Hạn chế rượu bia và chất kích thích.",
      "Ghi lại diễn biến triệu chứng.",
      "Theo dõi nhiệt độ, huyết áp hoặc đường huyết nếu đã được hướng dẫn.",
      "Tránh tự dùng thuốc kê đơn hoặc dùng lại đơn thuốc cũ.",
      "Điểm quan trọng không nằm ở việc cố chờ đủ bao nhiêu ngày, mà ở diễn biến của cơ thể. Nếu triệu chứng không giảm, thường xuyên quay lại hoặc bắt đầu ảnh hưởng đến cuộc sống, bạn nên chuyển từ “chờ xem sao” sang chủ động đi khám."
    ],
    "sections": [
      {
        "heading": "Những trường hợp nên đi khám tổng quát",
        "paragraphs": [
          "1. Cơ thể thường xuyên mệt mỏi nhưng không rõ nguyên nhân",
          "Mệt mỏi có thể đơn giản do thiếu ngủ, làm việc quá sức hoặc căng thẳng. Tuy nhiên, tình trạng này cũng có thể liên quan đến thiếu máu, rối loạn tuyến giáp, đường huyết, huyết áp, dinh dưỡng, bệnh gan, bệnh thận hoặc tác dụng của thuốc.",
          "Bạn nên cân nhắc khám tổng quát nếu:",
          "Mệt dù đã nghỉ ngơi đầy đủ.",
          "Khó tập trung hoặc giảm hiệu suất làm việc.",
          "Hay chóng mặt, hồi hộp hoặc hụt hơi khi vận động.",
          "Thường xuyên buồn ngủ vào ban ngày.",
          "Cảm giác kiệt sức tái diễn nhiều lần.",
          "Tình trạng ảnh hưởng đến sinh hoạt thông thường.",
          "Khám tổng quát giúp bác sĩ xem xét đồng thời nhiều yếu tố thay vì chỉ tập trung vào cảm giác mệt.",
          "2. Có nhiều triệu chứng nhẹ xuất hiện cùng lúc",
          "Một biểu hiện riêng lẻ có thể chưa đáng ngại, nhưng nhiều thay đổi xuất hiện cùng lúc lại là lý do để kiểm tra sức khỏe.",
          "Ví dụ:",
          "Mệt mỏi kèm sụt cân.",
          "Đầy bụng kèm thay đổi đại tiện.",
          "Đau đầu kèm chóng mặt và mất ngủ.",
          "Khát nước nhiều kèm tiểu nhiều.",
          "Phù chân kèm hụt hơi.",
          "Đau xương khớp kèm cứng khớp buổi sáng.",
          "Da xanh, móng giòn kèm giảm khả năng vận động.",
          "Những dấu hiệu này không khẳng định bạn đang mắc một bệnh cụ thể. Tuy nhiên, chúng cho thấy cơ thể cần được đánh giá kỹ hơn thay vì tiếp tục xử lý từng triệu chứng riêng lẻ tại nhà.",
          "3. Triệu chứng kéo dài hoặc thường xuyên tái diễn",
          "Một cơn đau đầu thỉnh thoảng có thể liên quan đến thiếu ngủ. Nhưng đau đầu xuất hiện liên tục, thường xuyên phải dùng thuốc giảm đau hoặc ngày càng ảnh hưởng đến công việc thì không nên chỉ tự theo dõi.",
          "Nguyên tắc tương tự cũng áp dụng với:",
          "Đau bụng hoặc rối loạn tiêu hóa tái diễn.",
          "Ho kéo dài.",
          "Đau lưng, đau cổ vai gáy thường xuyên.",
          "Khó ngủ nhiều đêm.",
          "Tim đập nhanh không rõ nguyên nhân.",
          "Chóng mặt lặp lại.",
          "Nổi ban hoặc ngứa nhiều lần.",
          "Tiểu đêm, tiểu buốt hoặc thay đổi thói quen đi tiểu.",
          "Khám tổng quát có thể là bước khởi đầu hợp lý khi bạn chưa biết triệu chứng thuộc chuyên khoa nào. Sau đánh giá ban đầu, bác sĩ sẽ hướng dẫn kiểm tra hoặc chuyển đến chuyên khoa phù hợp.",
          "4. Cân nặng thay đổi ngoài dự kiến",
          "Cân nặng có thể thay đổi theo chế độ ăn và mức độ vận động. Tuy nhiên, tăng hoặc giảm cân rõ rệt mà không chủ động điều chỉnh là dấu hiệu nên được kiểm tra.",
          "Bạn cần chú ý nếu cân nặng thay đổi kèm:",
          "Chán ăn.",
          "Mệt mỏi.",
          "Khát nước hoặc tiểu nhiều.",
          "Tim đập nhanh, run tay.",
          "Phù mặt hoặc phù chân.",
          "Rối loạn tiêu hóa.",
          "Thay đổi tâm trạng.",
          "Rối loạn kinh nguyệt.",
          "Không nên vội kết luận đây là dấu hiệu của một căn bệnh nguy hiểm. Bác sĩ cần đánh giá cả chế độ ăn, vận động, sức khỏe tinh thần, thuốc đang sử dụng và các nguyên nhân y khoa khác.",
          "5. Các chỉ số tự đo tại nhà thường xuyên bất thường",
          "Máy đo huyết áp, máy đo đường huyết và thiết bị theo dõi sức khỏe giúp người dùng chủ động hơn. Tuy nhiên, kết quả tại nhà cần được hiểu đúng và không thể thay thế hoàn toàn cho đánh giá y tế.",
          "Bạn nên đi khám nếu:",
          "Huyết áp thường xuyên cao hoặc thấp bất thường.",
          "Đường huyết nhiều lần vượt ngưỡng đã được bác sĩ hướng dẫn.",
          "Nhịp tim thường xuyên quá nhanh, quá chậm hoặc không đều.",
          "Nồng độ oxy thấp hoặc dao động bất thường.",
          "Cân nặng tăng nhanh kèm phù.",
          "Kết quả khác nhiều so với mức thông thường của chính bạn.",
          "Một số tình trạng như tăng huyết áp, đường huyết cao hoặc cholesterol cao có thể chưa gây triệu chứng rõ trong giai đoạn đầu. Việc kiểm tra định kỳ giúp phát hiện những vấn đề này thay vì chờ cơ thể “lên tiếng”.",
          "Trước khi đi khám, bạn nên mang theo thiết bị đang dùng hoặc ghi lại kết quả, thời điểm đo và điều kiện đo để bác sĩ tham khảo.",
          "6. Bạn đã lâu chưa kiểm tra sức khỏe",
          "Cảm thấy khỏe không có nghĩa tất cả chỉ số đều đang bình thường. Nhiều yếu tố nguy cơ chỉ được nhận biết khi đo huyết áp, xét nghiệm hoặc thực hiện chương trình sàng lọc phù hợp.",
          "Khám định kỳ có thể giúp:",
          "Đánh giá nguy cơ bệnh trong tương lai.",
          "Phát hiện một số vấn đề chưa gây triệu chứng.",
          "Kiểm tra tình trạng tiêm chủng.",
          "Tư vấn lối sống.",
          "Cập nhật kế hoạch sàng lọc.",
          "Thiết lập dữ liệu sức khỏe để so sánh trong những lần sau.",
          "Các chương trình sàng lọc được thực hiện khi chưa có triệu chứng và có thể phát hiện một số bệnh ở giai đoạn sớm hơn. Tuy nhiên, loại sàng lọc cần thiết phải được lựa chọn dựa trên tuổi, giới tính, tiền sử và nguy cơ cá nhân, không phải ai cũng cần thực hiện giống nhau.",
          "Không có một khoảng thời gian khám tổng quát duy nhất phù hợp với tất cả mọi người. Bác sĩ sẽ tư vấn lịch kiểm tra dựa trên tình trạng cụ thể.",
          "7. Gia đình có tiền sử bệnh mạn tính hoặc ung thư",
          "Tiền sử gia đình không có nghĩa bạn chắc chắn sẽ mắc cùng một bệnh. Tuy nhiên, yếu tố này có thể làm thay đổi mức độ nguy cơ và kế hoạch theo dõi.",
          "Bạn nên chủ động trao đổi với bác sĩ nếu người thân gần từng mắc:",
          "Tăng huyết áp sớm.",
          "Bệnh tim mạch hoặc đột quỵ.",
          "Tiểu đường.",
          "Rối loạn mỡ máu.",
          "Ung thư.",
          "Bệnh thận.",
          "Bệnh tuyến giáp.",
          "Một số bệnh di truyền.",
          "Hãy ghi lại người mắc bệnh, loại bệnh và độ tuổi khi được chẩn đoán nếu có thể. Những thông tin này giúp bác sĩ xác định bạn có cần kiểm tra sớm hơn hay thực hiện phương pháp sàng lọc khác với thông thường hay không.",
          "8. Bạn đang bước vào một giai đoạn mới của cuộc sống",
          "Một số giai đoạn làm thay đổi nhu cầu chăm sóc sức khỏe, chẳng hạn:",
          "Chuẩn bị mang thai.",
          "Sau sinh.",
          "Bước vào tuổi trung niên.",
          "Tiền mãn kinh hoặc mãn kinh.",
          "Chuẩn bị bắt đầu một công việc có yêu cầu sức khỏe đặc biệt.",
          "Thay đổi chế độ ăn hoặc luyện tập mạnh.",
          "Chuẩn bị phẫu thuật.",
          "Sau một thời gian điều trị kéo dài.",
          "Khám tổng quát trong những thời điểm này giúp bác sĩ đánh giá thể trạng, xem lại thuốc đang dùng và tư vấn những vấn đề cần chuẩn bị.",
          "9. Bạn đang sử dụng nhiều loại thuốc",
          "Người mắc nhiều bệnh nền có thể được kê thuốc từ nhiều chuyên khoa. Nếu thông tin giữa các lần khám không được kết nối, người bệnh dễ nhầm liều, dùng trùng hoạt chất hoặc gặp tương tác.",
          "Bạn nên đi kiểm tra và mang theo toàn bộ danh sách:",
          "Thuốc kê đơn.",
          "Thuốc không kê đơn.",
          "Vitamin.",
          "Thực phẩm chức năng.",
          "Thuốc nam hoặc thảo dược.",
          "Thuốc dùng ngoài da hoặc thuốc nhỏ.",
          "Không nên tự ngừng thuốc trước khi khám. Bác sĩ sẽ xem xét loại nào cần tiếp tục, điều chỉnh hoặc theo dõi thêm.",
          "10. Sức khỏe tinh thần bắt đầu ảnh hưởng đến cơ thể",
          "Căng thẳng có thể biểu hiện bằng mất ngủ, đau đầu, hồi hộp, khó tập trung, đầy bụng hoặc mệt mỏi. Ngược lại, một số vấn đề thể chất cũng có thể ảnh hưởng đến tâm trạng.",
          "Bạn nên tìm kiếm hỗ trợ nếu:",
          "Thường xuyên căng thẳng hoặc buồn bã.",
          "Mất hứng thú với những hoạt động từng yêu thích.",
          "Khó ngủ kéo dài.",
          "Cảm thấy lo lắng quá mức.",
          "Khó làm việc, học tập hoặc chăm sóc bản thân.",
          "Thường xuyên dùng rượu bia hoặc thuốc để dễ ngủ.",
          "Có thay đổi rõ về ăn uống và cân nặng.",
          "Khám tổng quát có thể giúp loại trừ một số nguyên nhân thể chất và kết nối người bệnh với hỗ trợ chuyên môn phù hợp.",
          "Ai nên chủ động khám sớm hơn?",
          "Một số người không nên chờ đến khi triệu chứng rõ ràng mới kiểm tra sức khỏe, bao gồm:",
          "Người cao tuổi.",
          "Người có bệnh nền.",
          "Người thừa cân hoặc béo phì.",
          "Người hút thuốc.",
          "Người thường xuyên sử dụng rượu bia.",
          "Người ít vận động.",
          "Người làm việc trong môi trường có nguy cơ nghề nghiệp.",
          "Phụ nữ chuẩn bị mang thai.",
          "Người có tiền sử gia đình mắc bệnh mạn tính.",
          "Người từng có kết quả xét nghiệm bất thường.",
          "Người đang sử dụng nhiều thuốc.",
          "Chăm sóc sức khỏe ban đầu và dự phòng hướng đến việc hỗ trợ nhu cầu của mỗi người trong suốt cuộc đời, từ phòng bệnh, điều trị đến phục hồi, thay vì chỉ can thiệp khi bệnh đã tiến triển.",
          "Khi nào nên khám chuyên khoa thay vì khám tổng quát?",
          "Khám tổng quát phù hợp khi bạn muốn đánh giá toàn thân, chưa rõ nguyên nhân hoặc có nhiều vấn đề cần kết nối. Tuy nhiên, nếu đã có một triệu chứng khu trú rõ ràng, bạn có thể cần khám trực tiếp tại chuyên khoa phù hợp.",
          "Ví dụ:",
          "Đau mắt hoặc giảm thị lực: khám Mắt.",
          "Đau răng, sưng lợi: khám Răng Hàm Mặt.",
          "Tổn thương da rõ ràng: khám Da liễu.",
          "Chấn thương xương khớp: khám Chấn thương chỉnh hình.",
          "Đang mang thai hoặc có dấu hiệu sản khoa: khám Sản.",
          "Trẻ có vấn đề sức khỏe: khám Nhi.",
          "Đang điều trị bệnh mạn tính: tái khám đúng chuyên khoa.",
          "Nếu chưa biết nên bắt đầu ở đâu, bác sĩ khám tổng quát hoặc bộ phận tiếp nhận có thể giúp định hướng."
        ]
      },
      {
        "heading": "Những dấu hiệu không nên chờ khám tổng quát",
        "paragraphs": [
          "Khám tổng quát là hoạt động có kế hoạch, không thay thế quy trình cấp cứu. Người bệnh cần đến cơ sở y tế ngay hoặc gọi hỗ trợ cấp cứu khi xuất hiện:",
          "Đau hoặc đè nặng ở ngực, nhất là khi đau lan ra tay, cổ hoặc hàm.",
          "Khó thở dữ dội, tím tái hoặc không thể nói thành câu.",
          "Đột ngột méo miệng, yếu tay chân hoặc nói khó.",
          "Mất ý thức, co giật hoặc lú lẫn.",
          "Chảy máu nhiều.",
          "Nôn ra máu hoặc đi ngoài phân đen.",
          "Đau bụng dữ dội, bụng cứng.",
          "Phản ứng dị ứng kèm sưng môi, lưỡi hoặc khó thở.",
          "Chấn thương nghiêm trọng.",
          "Trẻ li bì, tím tái hoặc khó đánh thức.",
          "Đau ngực kiểu bóp nghẹt, khó thở nghiêm trọng và dấu hiệu đột quỵ cần được xem là tình huống khẩn cấp, không nên tự lái xe hoặc chờ xem triệu chứng có tự hết hay không.",
          "Khám tổng quát có phải làm càng nhiều xét nghiệm càng tốt?",
          "Không. Một gói kiểm tra dài chưa chắc phù hợp hơn một kế hoạch được cá nhân hóa.",
          "Xét nghiệm chỉ thực sự có giá trị khi:",
          "Có mục tiêu rõ ràng.",
          "Phù hợp với tuổi và giới tính.",
          "Liên quan đến triệu chứng hoặc yếu tố nguy cơ.",
          "Kết quả có thể làm thay đổi hướng chăm sóc.",
          "Lợi ích lớn hơn nguy cơ và chi phí.",
          "Có bác sĩ giải thích và theo dõi sau kiểm tra.",
          "Làm quá nhiều xét nghiệm không cần thiết có thể dẫn đến kết quả bất thường tình cờ, gây lo lắng và kéo theo những kiểm tra tiếp theo. Vì vậy, người bệnh không nên tự chọn toàn bộ danh mục chỉ vì nghĩ rằng “càng nhiều càng yên tâm”.",
          "Khám tổng quát nên bắt đầu bằng trao đổi và thăm khám. Từ đó, bác sĩ mới lựa chọn các kiểm tra cần thiết.",
          "Cần chuẩn bị gì trước khi đi khám?",
          "Để buổi khám hiệu quả hơn, bạn nên chuẩn bị:",
          "Giấy tờ tùy thân và hồ sơ bảo hiểm, nếu sử dụng.",
          "Kết quả khám, xét nghiệm và chẩn đoán hình ảnh trước đây.",
          "Danh sách thuốc đang dùng.",
          "Tiền sử dị ứng.",
          "Thông tin bệnh của người thân trong gia đình.",
          "Các triệu chứng và thời điểm xuất hiện.",
          "Kết quả đo huyết áp, đường huyết hoặc cân nặng tại nhà.",
          "Những câu hỏi muốn trao đổi với bác sĩ.",
          "Bạn cũng nên hỏi trước có cần nhịn ăn hay chuẩn bị đặc biệt không. Không tự ý ngừng thuốc điều trị, đặc biệt là thuốc tim mạch, tiểu đường hoặc chống đông, nếu chưa có hướng dẫn chuyên môn."
        ]
      },
      {
        "heading": "Khám tổng quát tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, người bệnh có thể bắt đầu hành trình kiểm tra sức khỏe bằng việc trao đổi nhu cầu, tiền sử và những biểu hiện đang gặp phải. Dựa trên đánh giá ban đầu, bác sĩ có thể tư vấn các nội dung khám, xét nghiệm hoặc chuyên khoa cần thiết.",
          "Lợi thế của mô hình bệnh viện đa khoa là khả năng kết nối nhiều lĩnh vực trong cùng một hành trình chăm sóc. Khi phát hiện dấu hiệu cần đánh giá sâu hơn, người bệnh có thể được hướng dẫn đến chuyên khoa phù hợp thay vì tự tìm kiếm và ghép nối các kết quả rời rạc.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến trải nghiệm khám chữa bệnh rõ ràng, thuận tiện và lấy nhu cầu thực tế của người bệnh làm trung tâm."
        ]
      },
      {
        "heading": "Đừng chờ cơ thể phải “lên tiếng thật to”",
        "paragraphs": [
          "Theo dõi tại nhà là phù hợp với những khó chịu nhẹ, có xu hướng cải thiện và không kèm dấu hiệu cảnh báo. Nhưng khi triệu chứng kéo dài, tái diễn, xuất hiện cùng nhiều thay đổi khác hoặc bạn đã lâu chưa kiểm tra sức khỏe, khám tổng quát là một bước chủ động và hợp lý.",
          "Mục tiêu không phải là tìm bệnh bằng mọi giá. Điều quan trọng là hiểu đúng tình trạng hiện tại, nhận biết nguy cơ và có kế hoạch chăm sóc phù hợp trước khi vấn đề trở nên phức tạp hơn.",
          "Bệnh viện Đa khoa Hồng Phúc – Kiểm tra chủ động, chăm sóc toàn diện, an tâm hơn trong mỗi chặng đường sức khỏe.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "kham-suc-khoe-dinh-ky-cho-doanh-nghiep-doanh-nghiep-nen-chuan-bi-gi": {
    "sourceFile": "6.Khám sức khỏe định kỳ cho doanh nghiệp.docx",
    "title": "Khám sức khỏe định kỳ cho doanh nghiệp: Doanh nghiệp cần chuẩn bị những gì?",
    "excerpt": "Tổ chức khám sức khỏe định kỳ cho người lao động không đơn giản là chọn một gói khám, gửi danh sách nhân sự rồi chờ ngày triển khai. Với doanh nghiệp có vài chục người, quy trình có thể tương đối gọn. Nhưng khi số lượng nhân sự lên đến hàng trăm, làm việc theo ca hoặc phân bố tại nhiều bộ phận, chỉ một khâu chuẩn bị thiếu rõ ràng cũng có thể dẫn đến ùn tắc, bỏ sót người khám, nhầm thông tin hoặc ảnh hưởng đến hoạt động sản xuất.",
    "intro": [
      "Tổ chức khám sức khỏe định kỳ cho người lao động không đơn giản là chọn một gói khám, gửi danh sách nhân sự rồi chờ ngày triển khai. Với doanh nghiệp có vài chục người, quy trình có thể tương đối gọn. Nhưng khi số lượng nhân sự lên đến hàng trăm, làm việc theo ca hoặc phân bố tại nhiều bộ phận, chỉ một khâu chuẩn bị thiếu rõ ràng cũng có thể dẫn đến ùn tắc, bỏ sót người khám, nhầm thông tin hoặc ảnh hưởng đến hoạt động sản xuất.",
      "Một chương trình khám sức khỏe doanh nghiệp hiệu quả cần đạt được hai mục tiêu cùng lúc: người lao động được kiểm tra sức khỏe phù hợp và doanh nghiệp tổ chức thuận tiện, đúng kế hoạch.",
      "Vậy trước một đợt khám sức khỏe định kỳ, bộ phận nhân sự và ban lãnh đạo cần chuẩn bị những gì?",
      "Vì sao doanh nghiệp nên chuẩn bị sớm cho đợt khám sức khỏe?",
      "Khám sức khỏe định kỳ là một phần trong hoạt động chăm sóc và quản lý sức khỏe người lao động. Theo quy định hiện hành, người sử dụng lao động phải tổ chức khám sức khỏe ít nhất một lần mỗi năm cho người lao động. Một số nhóm như người làm công việc nặng nhọc, độc hại, nguy hiểm, người lao động cao tuổi, chưa thành niên hoặc người khuyết tật cần được khám ít nhất sáu tháng một lần.",
      "Khi được chuẩn bị bài bản, chương trình khám sức khỏe có thể giúp doanh nghiệp:",
      "Thực hiện trách nhiệm chăm sóc sức khỏe người lao động.",
      "Phát hiện những vấn đề sức khỏe cần được theo dõi.",
      "Nhận diện xu hướng sức khỏe chung của lực lượng lao động.",
      "Có cơ sở xây dựng hoạt động chăm sóc sức khỏe phù hợp hơn.",
      "Hạn chế ảnh hưởng đến sản xuất và vận hành trong ngày khám.",
      "Thể hiện sự quan tâm thiết thực đối với nhân viên.",
      "Xây dựng môi trường làm việc an toàn và bền vững hơn.",
      "Ngược lại, nếu chỉ xem khám định kỳ là một thủ tục phải hoàn thành, doanh nghiệp có thể lựa chọn danh mục chưa phù hợp, truyền thông không đầy đủ hoặc nhận về một tập kết quả nhưng không biết nên làm gì tiếp theo."
    ],
    "sections": [
      {
        "heading": "Bước 1: Xác định mục tiêu của chương trình khám",
        "paragraphs": [
          "Trước khi liên hệ cơ sở y tế, doanh nghiệp cần xác định rõ mục tiêu của đợt khám.",
          "Mục tiêu cơ bản có thể là thực hiện khám sức khỏe định kỳ theo quy định. Tuy nhiên, tùy đặc điểm nhân sự, doanh nghiệp có thể muốn tập trung thêm vào:",
          "Sàng lọc các vấn đề sức khỏe thường gặp ở nhân viên văn phòng.",
          "Đánh giá sức khỏe người lao động làm việc theo ca.",
          "Kiểm tra nhóm thường xuyên tiếp xúc với tiếng ồn, bụi, hóa chất hoặc nhiệt độ cao.",
          "Theo dõi sức khỏe nhân sự trung niên và cao tuổi.",
          "Xây dựng dữ liệu sức khỏe qua từng năm.",
          "Tư vấn phòng ngừa các bệnh không lây nhiễm.",
          "Phát hiện nguy cơ bệnh nghề nghiệp.",
          "Nâng cao nhận thức chăm sóc sức khỏe trong doanh nghiệp.",
          "Khi mục tiêu rõ ràng, cơ sở y tế mới có đủ căn cứ để đề xuất nội dung khám, quy trình tổ chức và phương án trả kết quả phù hợp.",
          "Nói một cách dễ hiểu, doanh nghiệp không nên bắt đầu bằng câu hỏi “Gói nào rẻ nhất?” mà nên bắt đầu bằng câu hỏi “Đội ngũ của chúng tôi đang cần được kiểm tra những gì?”"
        ]
      },
      {
        "heading": "Bước 2: Lập danh sách người lao động chính xác",
        "paragraphs": [
          "Danh sách nhân sự là dữ liệu nền của toàn bộ chương trình. Doanh nghiệp nên chuẩn bị danh sách theo biểu mẫu thống nhất giữa hai bên và kiểm tra kỹ trước ngày khám.",
          "Thông tin có thể bao gồm:",
          "Họ và tên.",
          "Ngày tháng năm sinh.",
          "Giới tính.",
          "Mã nhân viên.",
          "Phòng ban hoặc bộ phận.",
          "Vị trí công việc.",
          "Ca làm việc.",
          "Số điện thoại liên hệ khi cần.",
          "Nhóm công việc hoặc yếu tố nguy cơ nghề nghiệp.",
          "Nhu cầu hỗ trợ đặc biệt, nếu có.",
          "Doanh nghiệp cần rà soát các trường hợp:",
          "Nhân viên mới vào làm.",
          "Nhân viên đã nghỉ việc nhưng còn trong danh sách.",
          "Nhân sự nghỉ thai sản hoặc nghỉ dài ngày.",
          "Người làm việc tại chi nhánh khác.",
          "Nhân sự đi công tác trong thời gian khám.",
          "Người cần bố trí khám bù.",
          "Người nước ngoài cần hỗ trợ ngôn ngữ.",
          "Người lao động lớn tuổi hoặc gặp khó khăn khi di chuyển.",
          "Đối với khám sức khỏe định kỳ theo hợp đồng, người lao động có thể được xác nhận thông qua danh sách do cơ quan hoặc tổ chức nơi làm việc lập. Hồ sơ khám định kỳ được thực hiện theo mẫu quy định tại Thông tư 32/2023/TT-BYT.",
          "Một danh sách chính xác giúp giảm nguy cơ nhầm hồ sơ, thiếu kết quả hoặc mất thời gian điều chỉnh sau chương trình."
        ]
      },
      {
        "heading": "Bước 3: Phân nhóm nhân sự theo công việc và nguy cơ",
        "paragraphs": [
          "Đây là bước nhiều doanh nghiệp dễ bỏ qua.",
          "Hai nhân viên cùng làm trong một công ty chưa chắc cần nội dung kiểm tra hoàn toàn giống nhau. Người làm việc tại văn phòng có nguy cơ khác với người vận hành máy móc, làm việc trong kho, tiếp xúc hóa chất hoặc thường xuyên lái xe.",
          "Doanh nghiệp nên phối hợp với bộ phận an toàn, vệ sinh lao động và cơ sở y tế để phân nhóm như:"
        ]
      },
      {
        "heading": "Nhóm nhân viên văn phòng",
        "paragraphs": [
          "Các vấn đề thường được quan tâm có thể liên quan đến:",
          "Ít vận động.",
          "Thừa cân.",
          "Rối loạn mỡ máu.",
          "Đường huyết.",
          "Huyết áp.",
          "Thị lực.",
          "Đau cổ vai gáy và cột sống.",
          "Căng thẳng, mất ngủ."
        ]
      },
      {
        "heading": "Nhóm lao động sản xuất",
        "paragraphs": [
          "Tùy môi trường, cần xem xét các yếu tố:",
          "Tiếng ồn.",
          "Bụi.",
          "Hóa chất.",
          "Rung.",
          "Nhiệt độ.",
          "Tư thế lao động.",
          "Mang vác nặng.",
          "Vận hành thiết bị."
        ]
      },
      {
        "heading": "Nhóm làm việc theo ca",
        "paragraphs": [
          "Làm ca đêm hoặc luân phiên ca có thể ảnh hưởng đến giấc ngủ, thời gian ăn uống và khả năng phục hồi. Doanh nghiệp nên bố trí thời gian khám hợp lý để người lao động không phải khám ngay sau một ca làm việc quá dài."
        ]
      },
      {
        "heading": "Nhóm lái xe hoặc vận hành phương tiện",
        "paragraphs": [
          "Có thể cần chú ý đến:",
          "Thị lực.",
          "Thính lực.",
          "Tim mạch.",
          "Huyết áp.",
          "Khả năng vận động.",
          "Tiền sử mất ý thức hoặc co giật.",
          "Việc sử dụng thuốc có thể gây buồn ngủ."
        ]
      },
      {
        "heading": "Nhóm lao động nữ",
        "paragraphs": [
          "Khi khám sức khỏe định kỳ, lao động nữ được khám chuyên khoa phụ sản theo danh mục quy định. Người làm việc trong môi trường có yếu tố nguy cơ gây bệnh nghề nghiệp cũng cần được khám phát hiện bệnh nghề nghiệp phù hợp.",
          "Phân nhóm đúng giúp doanh nghiệp tránh hai tình trạng: khám quá ít nên không phản ánh được nguy cơ, hoặc thêm quá nhiều danh mục không thực sự cần thiết."
        ]
      },
      {
        "heading": "Bước 4: Cung cấp thông tin về môi trường làm việc",
        "paragraphs": [
          "Cơ sở y tế không thể tư vấn nội dung khám sát với thực tế nếu chỉ nhận được số lượng nhân sự.",
          "Doanh nghiệp nên cung cấp thông tin về:",
          "Ngành nghề hoạt động.",
          "Mô tả công việc của từng nhóm.",
          "Số lượng nhân sự tại mỗi vị trí.",
          "Thời gian làm việc và cách bố trí ca.",
          "Các yếu tố nguy hiểm hoặc có hại.",
          "Kết quả quan trắc môi trường lao động, nếu có.",
          "Danh mục nghề hoặc công việc đặc thù.",
          "Tiền sử bệnh nghề nghiệp đã ghi nhận.",
          "Những vấn đề sức khỏe xuất hiện nhiều trong các năm trước.",
          "Thông tin càng rõ, chương trình khám càng có khả năng phản ánh đúng nhu cầu.",
          "Ví dụ, nếu một nhóm thường xuyên làm việc trong môi trường tiếng ồn nhưng doanh nghiệp không thông báo, danh mục khám có thể thiếu nội dung đánh giá thính lực phù hợp. Nếu người lao động tiếp xúc với bụi hoặc hóa chất, bác sĩ cũng cần biết loại tác nhân và thời gian tiếp xúc để xem xét hướng kiểm tra."
        ]
      },
      {
        "heading": "Bước 5: Thống nhất danh mục khám",
        "paragraphs": [
          "Sau khi phân tích dữ liệu, doanh nghiệp và cơ sở y tế cần thống nhất danh mục khám.",
          "Một chương trình có thể gồm:",
          "Đo chiều cao, cân nặng và huyết áp.",
          "Khám thể lực.",
          "Khám Nội khoa.",
          "Khám Ngoại khoa.",
          "Khám Mắt.",
          "Khám Tai Mũi Họng.",
          "Khám Răng Hàm Mặt.",
          "Khám Da liễu.",
          "Khám phụ sản đối với lao động nữ.",
          "Xét nghiệm.",
          "Chẩn đoán hình ảnh.",
          "Thăm dò chức năng.",
          "Các nội dung liên quan đến nguy cơ nghề nghiệp.",
          "Danh mục cụ thể cần được lựa chọn dựa trên quy định, đặc điểm công việc, độ tuổi và mục tiêu của doanh nghiệp.",
          "Thông tư 32/2023/TT-BYT quy định khám sức khỏe định kỳ thực hiện theo nội dung trong sổ khám sức khỏe định kỳ; các chuyên khoa cần được khám đầy đủ theo phạm vi áp dụng. Trường hợp cần thiết, bác sĩ có thể chỉ định cận lâm sàng hoặc hội chẩn để làm rõ tình trạng sức khỏe.",
          "Doanh nghiệp có thể đề xuất thêm nội dung kiểm tra, nhưng không nên chọn xét nghiệm chỉ vì tên gọi nghe “chuyên sâu”. Mỗi danh mục bổ sung cần trả lời được:",
          "Kiểm tra nhằm phát hiện vấn đề gì?",
          "Có phù hợp với nhóm nhân sự hay không?",
          "Kết quả bất thường sẽ được xử lý thế nào?",
          "Có cần tư vấn hoặc kiểm tra tiếp theo không?"
        ]
      },
      {
        "heading": "Bước 6: Chọn hình thức tổ chức phù hợp",
        "paragraphs": [
          "Tùy quy mô, vị trí và hoạt động sản xuất, doanh nghiệp có thể trao đổi với cơ sở y tế về hình thức tổ chức phù hợp."
        ]
      },
      {
        "heading": "Khám tại bệnh viện",
        "paragraphs": [
          "Hình thức này giúp người lao động tiếp cận hệ thống phòng khám, xét nghiệm và chẩn đoán hình ảnh sẵn có. Phù hợp khi:",
          "Số lượng nhân sự không quá lớn.",
          "Doanh nghiệp ở gần bệnh viện.",
          "Danh mục khám có nhiều kỹ thuật cần thiết bị cố định.",
          "Có thể chia nhân viên thành nhiều khung giờ."
        ]
      },
      {
        "heading": "Tổ chức một số nội dung tại doanh nghiệp",
        "paragraphs": [
          "Phương án này có thể thuận tiện với đơn vị đông nhân sự hoặc khó bố trí di chuyển. Tuy nhiên, doanh nghiệp cần bảo đảm không gian phù hợp, điện, nước, vệ sinh, riêng tư và luồng di chuyển.",
          "Một số kỹ thuật vẫn có thể cần thực hiện tại cơ sở y tế tùy điều kiện thiết bị và yêu cầu chuyên môn."
        ]
      },
      {
        "heading": "Phương án kết hợp",
        "paragraphs": [
          "Doanh nghiệp có thể tổ chức một phần nội dung tại nơi làm việc, sau đó bố trí những nhóm cần kiểm tra chuyên sâu đến bệnh viện.",
          "Hình thức nào cũng cần được thống nhất rõ trong hợp đồng, bao gồm phạm vi công việc, địa điểm, nhân sự, thiết bị và trách nhiệm của mỗi bên."
        ]
      },
      {
        "heading": "Bước 7: Xây dựng lịch khám không làm gián đoạn vận hành",
        "paragraphs": [
          "Đối với doanh nghiệp sản xuất, việc để quá nhiều người rời vị trí cùng lúc có thể ảnh hưởng đến dây chuyền. Với văn phòng, khung giờ tập trung đông cũng dễ tạo thời gian chờ kéo dài.",
          "Bộ phận nhân sự nên:",
          "Chia lịch theo phòng ban hoặc ca làm việc.",
          "Giới hạn số người trong mỗi khung giờ.",
          "Ưu tiên các nhóm cần nhịn ăn vào buổi sáng.",
          "Bố trí nhân sự dự phòng.",
          "Chuẩn bị lịch khám bù.",
          "Thông báo sớm cho quản lý bộ phận.",
          "Có đầu mối điều phối trong ngày khám.",
          "Hạn chế thay đổi danh sách vào phút cuối.",
          "Lịch khám nên tính cả thời gian đăng ký, lấy mẫu, khám chuyên khoa và chờ thực hiện các kỹ thuật cần thiết. Không nên sắp xếp quá sát khiến người lao động phải vội vàng hoặc bỏ dở một nội dung khám để quay lại làm việc."
        ]
      },
      {
        "heading": "Bước 8: Truyền thông rõ cho người lao động",
        "paragraphs": [
          "Một chương trình được thiết kế tốt vẫn có thể gặp khó khăn nếu nhân viên không biết cần chuẩn bị gì.",
          "Doanh nghiệp nên gửi thông báo trước ngày khám, trong đó nêu rõ:",
          "Ngày, giờ và địa điểm.",
          "Khung giờ của từng bộ phận.",
          "Giấy tờ cần mang theo.",
          "Có cần nhịn ăn hay không.",
          "Có được uống nước không.",
          "Cách sử dụng thuốc đang điều trị.",
          "Trang phục phù hợp.",
          "Quy trình di chuyển giữa các khu vực.",
          "Người liên hệ khi cần hỗ trợ.",
          "Cách nhận kết quả.",
          "Thông báo cần nhấn mạnh rằng người lao động không nên tự ý ngừng thuốc điều trị chỉ để thực hiện khám sức khỏe. Người đang mang thai, nghi ngờ mang thai, có bệnh nền, tiền sử dị ứng hoặc vừa thực hiện xét nghiệm, chụp chiếu gần đây nên thông báo cho nhân viên y tế.",
          "Với lao động nữ, doanh nghiệp nên có cách truyền thông tế nhị về nội dung khám phụ sản và bảo đảm sự riêng tư."
        ]
      },
      {
        "heading": "Bước 9: Chuẩn bị địa điểm nếu khám tại doanh nghiệp",
        "paragraphs": [
          "Nếu một phần chương trình được tổ chức tại doanh nghiệp, khu vực khám cần đáp ứng yêu cầu vận hành và sự riêng tư.",
          "Doanh nghiệp có thể cần chuẩn bị:",
          "Khu vực tiếp nhận và kiểm tra danh sách.",
          "Khu vực chờ.",
          "Phòng khám kín đáo.",
          "Khu vực lấy mẫu.",
          "Bàn, ghế và nguồn điện.",
          "Nước sạch và khu vệ sinh.",
          "Lối đi thuận tiện.",
          "Vị trí để thiết bị.",
          "Khu vực xử lý chất thải y tế theo phương án của đơn vị thực hiện.",
          "Nhân sự hỗ trợ điều phối.",
          "Các phòng khám không nên bố trí tại nơi quá ồn, nhiều người qua lại hoặc không bảo đảm quyền riêng tư. Người lao động cần có không gian đủ kín để trao đổi về bệnh sử và tình trạng sức khỏe.",
          "Trước ngày triển khai, hai bên nên khảo sát địa điểm và thống nhất sơ đồ luồng khám. Một tuyến di chuyển hợp lý sẽ giảm tình trạng người lao động phải quay lại nhiều lần hoặc tập trung quá đông tại một vị trí."
        ]
      },
      {
        "heading": "Bước 10: Thống nhất cách trả kết quả và bảo mật thông tin",
        "paragraphs": [
          "Kết quả khám sức khỏe có thông tin cá nhân và thông tin y tế cần được quản lý thận trọng.",
          "Trước khi ký hợp đồng, doanh nghiệp nên thống nhất:",
          "Hình thức trả kết quả cho từng người lao động.",
          "Hình thức bàn giao hồ sơ cho doanh nghiệp.",
          "Người hoặc bộ phận được phép tiếp nhận.",
          "Thời gian trả kết quả.",
          "Cách xử lý hồ sơ cần bổ sung.",
          "Nguyên tắc bảo mật và lưu trữ dữ liệu.",
          "Cách thông báo kết quả cần theo dõi.",
          "Báo cáo tổng hợp dành cho doanh nghiệp.",
          "Đối với chương trình khám tập thể, thời hạn trả hồ sơ được thực hiện theo thỏa thuận ghi trong hợp đồng. Hồ sơ khám sức khỏe định kỳ do đơn vị quản lý người được khám bảo quản và lưu trữ theo quy định.",
          "Doanh nghiệp nên ưu tiên báo cáo tổng hợp ở cấp độ phù hợp để phục vụ quản lý sức khỏe tập thể, đồng thời hạn chế việc chia sẻ rộng rãi thông tin bệnh lý cá nhân.",
          "Kết quả cá nhân cần được giải thích rõ cho người lao động, đặc biệt khi có chỉ số bất thường hoặc khuyến nghị tái khám."
        ]
      },
      {
        "heading": "Bước 11: Chuẩn bị phương án xử lý sau khám",
        "paragraphs": [
          "Một đợt khám không nên kết thúc ở việc bàn giao hồ sơ.",
          "Doanh nghiệp cần trao đổi trước về cách xử lý các trường hợp:",
          "Thiếu một hoặc nhiều nội dung khám.",
          "Không thể lấy mẫu.",
          "Có kết quả cần kiểm tra lại.",
          "Phát hiện chỉ số bất thường.",
          "Cần chuyển khám chuyên khoa.",
          "Cần khám phát hiện bệnh nghề nghiệp.",
          "Người lao động vắng mặt.",
          "Kết quả chưa đủ căn cứ kết luận.",
          "Sau khi có báo cáo tổng hợp, doanh nghiệp có thể cân nhắc:",
          "Tổ chức tư vấn sức khỏe.",
          "Truyền thông về dinh dưỡng và vận động.",
          "Cải thiện bữa ăn ca.",
          "Điều chỉnh không gian và tư thế làm việc.",
          "Xây dựng chương trình kiểm soát thuốc lá.",
          "Tăng cường quản lý tiếng ồn, bụi hoặc hóa chất.",
          "Khuyến khích nhân viên tái khám khi có khuyến nghị.",
          "Theo dõi xu hướng sức khỏe qua các năm.",
          "Kết quả khám chỉ có giá trị lâu dài khi được chuyển thành hành động phù hợp.",
          "Người lao động cần chuẩn bị gì?",
          "Ngoài phần việc của doanh nghiệp, mỗi nhân viên cũng cần phối hợp để kết quả phản ánh đúng tình trạng sức khỏe.",
          "Người lao động nên:",
          "Có mặt đúng khung giờ.",
          "Mang giấy tờ theo hướng dẫn.",
          "Thực hiện đúng yêu cầu nhịn ăn nếu có.",
          "Không uống rượu bia trước ngày khám.",
          "Không thức quá khuya.",
          "Không tự ý ngừng thuốc.",
          "Thông báo bệnh nền và thuốc đang dùng.",
          "Thông báo tình trạng mang thai hoặc nghi ngờ mang thai.",
          "Mang theo kết quả khám gần đây nếu cần đối chiếu.",
          "Trao đổi trung thực với bác sĩ.",
          "Không nên cố tình che giấu bệnh vì lo ảnh hưởng đến công việc. Việc cung cấp thông tin đầy đủ giúp bác sĩ đưa ra nhận định và khuyến nghị phù hợp hơn."
        ]
      },
      {
        "heading": "Chọn một gói giống nhau cho tất cả nhân viên",
        "paragraphs": [
          "Cách làm này thuận tiện nhưng có thể bỏ qua sự khác biệt về tuổi, giới tính, vị trí công việc và nguy cơ nghề nghiệp."
        ]
      },
      {
        "heading": "Chốt danh sách quá muộn",
        "paragraphs": [
          "Danh sách thay đổi liên tục dễ gây nhầm hồ sơ, thiếu vật tư và kéo dài thời gian trả kết quả."
        ]
      },
      {
        "heading": "Không cung cấp thông tin môi trường lao động",
        "paragraphs": [
          "Khi thiếu dữ liệu về tiếng ồn, bụi, hóa chất hoặc tư thế làm việc, cơ sở y tế khó đề xuất nội dung kiểm tra sát với thực tế."
        ]
      },
      {
        "heading": "Truyền thông chung chung",
        "paragraphs": [
          "Thông báo chỉ ghi “ngày mai đi khám sức khỏe” là chưa đủ. Người lao động cần biết có phải nhịn ăn, mang giấy tờ gì và đi theo khung giờ nào."
        ]
      },
      {
        "heading": "Không có đầu mối điều phối",
        "paragraphs": [
          "Khi nhiều bộ phận cùng trao đổi riêng với bệnh viện, thông tin dễ bị chồng chéo. Doanh nghiệp nên chỉ định một đầu mối chính và một người dự phòng."
        ]
      },
      {
        "heading": "Chỉ quan tâm đến giá",
        "paragraphs": [
          "Chi phí là yếu tố quan trọng, nhưng cần được đánh giá cùng phạm vi khám, năng lực triển khai, quy trình trả kết quả, tư vấn sau khám và khả năng xử lý những trường hợp bất thường."
        ]
      },
      {
        "heading": "Không sử dụng báo cáo sau khám",
        "paragraphs": [
          "Nếu kết quả chỉ được cất vào hồ sơ, doanh nghiệp sẽ bỏ lỡ cơ hội cải thiện môi trường làm việc và xây dựng chương trình chăm sóc sức khỏe phù hợp."
        ]
      },
      {
        "heading": "Quy trình phối hợp khám sức khỏe doanh nghiệp tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Với định hướng cung cấp dịch vụ khám, chẩn đoán và chăm sóc sức khỏe đa chuyên khoa, Bệnh viện Đa khoa Hồng Phúc có thể phối hợp cùng doanh nghiệp xây dựng chương trình dựa trên quy mô nhân sự, đặc điểm ngành nghề và nhu cầu thực tế.",
          "Một quy trình phối hợp có thể gồm:",
          "Tiếp nhận nhu cầu và thông tin doanh nghiệp.",
          "Phân tích cơ cấu nhân sự và môi trường làm việc.",
          "Tư vấn nội dung khám phù hợp.",
          "Thống nhất báo giá, hợp đồng và kế hoạch triển khai.",
          "Tiếp nhận danh sách người lao động.",
          "Truyền thông hướng dẫn trước khám.",
          "Tổ chức khám theo lịch.",
          "Hoàn thiện và bàn giao kết quả.",
          "Báo cáo tổng hợp và khuyến nghị.",
          "Hỗ trợ định hướng khám chuyên khoa khi cần.",
          "Quy trình cụ thể sẽ được điều chỉnh tùy số lượng nhân sự, địa điểm, danh mục chuyên môn và điều kiện tổ chức của từng doanh nghiệp.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến trở thành đối tác chăm sóc sức khỏe đáng tin cậy cho các cơ quan, doanh nghiệp và tổ chức trong khu vực."
        ]
      },
      {
        "heading": "Chuẩn bị tốt để ngày khám nhẹ nhàng hơn",
        "paragraphs": [
          "Một chương trình khám sức khỏe doanh nghiệp thành công không được đánh giá chỉ bằng số người đã hoàn thành khám. Điều quan trọng hơn là danh mục có phù hợp không, nhân viên có được hướng dẫn rõ ràng không, kết quả có được bàn giao đầy đủ không và doanh nghiệp có thể sử dụng dữ liệu đó để chăm sóc đội ngũ tốt hơn hay không.",
          "Khi danh sách nhân sự, lịch khám, nội dung chuyên môn và trách nhiệm của mỗi bên được thống nhất từ sớm, ngày khám sẽ diễn ra gọn gàng hơn, giảm ảnh hưởng đến công việc và mang lại giá trị thực tế cho cả doanh nghiệp lẫn người lao động.",
          "Bệnh viện Đa khoa Hồng Phúc – Đồng hành cùng doanh nghiệp xây dựng đội ngũ khỏe mạnh và môi trường làm việc bền vững.",
          "Nội dung trong bài viết mang tính chất tham khảo. Quy trình, danh mục khám và hồ sơ thực tế cần được xây dựng theo quy định hiện hành, điều kiện lao động và thỏa thuận giữa doanh nghiệp với cơ sở y tế."
        ]
      }
    ]
  },
  "tam-soat-tim-mach-ai-nen-thuc-hien-va-nen-kiem-tra-nhung-gi": {
    "sourceFile": "7.Tầm soát tim mạch ai nên thực hiện và nên kiểm tra những gì.docx",
    "title": "Tầm soát tim mạch: Ai nên thực hiện và nên kiểm tra những gì?",
    "excerpt": "Tim vẫn đập đều, cơ thể vẫn sinh hoạt bình thường nên nhiều người cho rằng mình chưa cần kiểm tra tim mạch. Tuy nhiên, một số yếu tố nguy cơ như tăng huyết áp, rối loạn mỡ máu hoặc đường huyết cao có thể tồn tại trong thời gian dài mà chưa tạo ra biểu hiện rõ ràng.",
    "intro": [
      "Tim vẫn đập đều, cơ thể vẫn sinh hoạt bình thường nên nhiều người cho rằng mình chưa cần kiểm tra tim mạch. Tuy nhiên, một số yếu tố nguy cơ như tăng huyết áp, rối loạn mỡ máu hoặc đường huyết cao có thể tồn tại trong thời gian dài mà chưa tạo ra biểu hiện rõ ràng.",
      "Tầm soát tim mạch giúp nhận diện những yếu tố nguy cơ này trước khi chúng góp phần gây tổn thương tim và mạch máu. Việc kiểm tra không nhằm tìm bệnh bằng mọi giá, mà giúp mỗi người hiểu rõ tình trạng hiện tại và có kế hoạch phòng ngừa phù hợp hơn.",
      "Tuy vậy, tầm soát tim mạch không có nghĩa ai cũng cần điện tim, siêu âm tim, nghiệm pháp gắng sức và chụp mạch vành. Một chương trình hợp lý phải bắt đầu từ khai thác tiền sử, đo huyết áp, đánh giá lối sống và kiểm tra các chỉ số nguy cơ cơ bản, sau đó bác sĩ mới quyết định có cần thực hiện kỹ thuật chuyên sâu hay không.",
      "Tầm soát tim mạch là gì?",
      "Tầm soát tim mạch là quá trình đánh giá sức khỏe tim và hệ thống mạch máu ở người chưa có triệu chứng rõ ràng hoặc chưa được chẩn đoán mắc bệnh tim mạch.",
      "Mục tiêu của tầm soát là:",
      "Phát hiện các yếu tố làm tăng nguy cơ bệnh tim và đột quỵ.",
      "Ước tính nguy cơ tim mạch trong tương lai.",
      "Nhận diện một số bất thường cần được theo dõi.",
      "Tư vấn thay đổi lối sống.",
      "Xác định người cần điều trị hoặc khám chuyên sâu hơn.",
      "Thiết lập dữ liệu nền để so sánh trong những lần kiểm tra sau.",
      "Theo Hiệp hội Tim mạch Hoa Kỳ, các nội dung quan trọng trong đánh giá sức khỏe tim mạch gồm huyết áp, cholesterol, đường huyết, cân nặng, tình trạng hút thuốc, mức độ vận động, chế độ ăn và chất lượng giấc ngủ.",
      "Nói một cách dễ hiểu, tầm soát không chỉ trả lời câu hỏi “Tim có bệnh hay không?” mà còn giúp bác sĩ đánh giá “Nguy cơ trong tương lai đang ở mức nào và có thể làm gì từ bây giờ?”",
      "Tầm soát tim mạch khác với khám chẩn đoán như thế nào?",
      "Tầm soát thường dành cho người chưa có triệu chứng rõ ràng. Các kiểm tra được lựa chọn dựa trên tuổi, tiền sử gia đình, lối sống và các yếu tố nguy cơ.",
      "Khám chẩn đoán lại được thực hiện khi người bệnh đã có biểu hiện như:",
      "Đau hoặc tức ngực.",
      "Khó thở.",
      "Tim đập nhanh hoặc không đều.",
      "Ngất hoặc gần ngất.",
      "Phù chân.",
      "Mệt bất thường khi vận động.",
      "Đau ngực khi leo cầu thang hoặc đi bộ nhanh.",
      "Giảm khả năng gắng sức so với trước đây.",
      "Trong những tình huống này, mục tiêu không còn đơn thuần là tầm soát. Bác sĩ cần đánh giá nguyên nhân và có thể chỉ định các kỹ thuật phù hợp với triệu chứng.",
      "Sự phân biệt này rất quan trọng. Một gói tầm soát dành cho người khỏe mạnh không thể thay thế quá trình khám chuyên khoa ở người đang đau ngực, khó thở hoặc có biểu hiện nghi ngờ bệnh tim.",
      "Vì sao cần tầm soát khi chưa có triệu chứng?",
      "Một số yếu tố nguy cơ tim mạch không tạo ra cảm giác đau hay khó chịu trong giai đoạn đầu. Tăng huyết áp là ví dụ điển hình: người bệnh có thể vẫn cảm thấy bình thường và chỉ phát hiện khi được đo huyết áp.",
      "USPSTF khuyến nghị người trưởng thành từ 18 tuổi trở lên nên được kiểm tra huyết áp. Khi kết quả tại cơ sở y tế tăng, huyết áp tại nhà hoặc huyết áp lưu động có thể được sử dụng để xác nhận trước khi bác sĩ đưa ra chẩn đoán và kế hoạch điều trị.",
      "Cholesterol và đường huyết cũng thường được đánh giá trong chương trình chăm sóc dự phòng. Kết quả chưa tối ưu không có nghĩa người được khám chắc chắn sẽ mắc bệnh tim, nhưng đó là cơ sở để điều chỉnh chế độ ăn, vận động, cân nặng hoặc điều trị khi cần thiết.",
      "Phát hiện sớm một yếu tố nguy cơ thường dễ xử lý hơn so với chờ đến khi cơ thể xuất hiện biến chứng. Tuy nhiên, tầm soát chỉ mang lại giá trị khi kết quả được bác sĩ giải thích và chuyển thành kế hoạch chăm sóc cụ thể.",
      "Ai nên thực hiện tầm soát tim mạch?",
      "1. Người trưởng thành chưa từng kiểm tra sức khỏe tim mạch",
      "Ngay cả người trẻ và không có triệu chứng cũng nên biết những chỉ số cơ bản như huyết áp, cân nặng, vòng eo và tiền sử gia đình.",
      "Đặc biệt, tất cả người trưởng thành nên được đo huyết áp định kỳ. Tần suất kiểm tra có thể khác nhau tùy tuổi, kết quả lần trước và mức độ nguy cơ. Người có huyết áp sát ngưỡng cao, thừa cân hoặc nhiều yếu tố nguy cơ thường cần theo dõi thường xuyên hơn.",
      "Tầm soát lần đầu cũng giúp thiết lập dữ liệu nền. Khi sức khỏe thay đổi, bác sĩ có thể so sánh với kết quả trước đó thay vì chỉ nhìn vào một con số tại một thời điểm.",
      "2. Người bước vào tuổi trung niên",
      "Nguy cơ tim mạch thường tăng dần theo tuổi. Vì vậy, người bước vào tuổi trung niên hoặc đã lâu chưa kiểm tra sức khỏe nên chủ động đánh giá toàn diện hơn.",
      "Ngoài huyết áp và cân nặng, bác sĩ có thể xem xét:",
      "Mỡ máu.",
      "Đường huyết hoặc HbA1c.",
      "Chức năng thận.",
      "Tiền sử hút thuốc.",
      "Mức độ vận động.",
      "Chế độ ăn uống.",
      "Giấc ngủ.",
      "Tiền sử bệnh của cha mẹ và anh chị em ruột.",
      "Sau tuổi 40, nhiều hướng dẫn sử dụng các công cụ tổng hợp nhiều chỉ số để ước tính nguy cơ tim mạch trong một khoảng thời gian nhất định. Kết quả chỉ mang tính hỗ trợ; bác sĩ vẫn phải điều chỉnh theo đặc điểm dân số và tình trạng thực tế của mỗi người.",
      "3. Người có người thân mắc bệnh tim mạch sớm",
      "Tiền sử gia đình là thông tin quan trọng trong đánh giá nguy cơ, đặc biệt khi cha mẹ hoặc anh chị em ruột từng:",
      "Nhồi máu cơ tim khi còn tương đối trẻ.",
      "Đột quỵ sớm.",
      "Đột tử không rõ nguyên nhân.",
      "Mắc bệnh cơ tim.",
      "Có rối loạn nhịp tim di truyền.",
      "Có cholesterol rất cao.",
      "Được chẩn đoán bệnh tim bẩm sinh hoặc bệnh động mạch chủ.",
      "Tiền sử gia đình không có nghĩa bạn chắc chắn sẽ mắc cùng một bệnh. Tuy nhiên, bác sĩ có thể đề nghị kiểm tra sớm hơn, theo dõi thường xuyên hơn hoặc làm thêm xét nghiệm chuyên biệt.",
      "Khi đi khám, bạn nên cung cấp loại bệnh, độ tuổi người thân được chẩn đoán và các thông tin liên quan nếu biết.",
      "4. Người có tăng huyết áp",
      "Tăng huyết áp làm tăng áp lực lên thành mạch và khiến tim phải hoạt động nhiều hơn. Người đã được chẩn đoán tăng huyết áp cần được theo dõi không chỉ con số huyết áp mà còn các yếu tố nguy cơ đi kèm.",
      "Nội dung kiểm tra có thể gồm:",
      "Huyết áp tại phòng khám và tại nhà.",
      "Mỡ máu.",
      "Đường huyết.",
      "Chức năng thận.",
      "Điện giải khi cần.",
      "Điện tim.",
      "Đánh giá tổn thương cơ quan đích theo chỉ định.",
      "Không nên tự ý ngừng thuốc khi huyết áp trở về mức ổn định. Kết quả tốt có thể chính là dấu hiệu cho thấy thuốc và thay đổi lối sống đang phát huy tác dụng.",
      "5. Người mắc tiểu đường hoặc tiền tiểu đường",
      "Đường huyết cao thường đi cùng các vấn đề như thừa cân, tăng huyết áp và rối loạn mỡ máu. Sự kết hợp này làm nguy cơ tim mạch tăng lên.",
      "USPSTF khuyến nghị tầm soát tiền tiểu đường và tiểu đường type 2 ở người trưởng thành 35–70 tuổi có thừa cân hoặc béo phì. Xét nghiệm có thể sử dụng đường huyết lúc đói, HbA1c hoặc nghiệm pháp dung nạp glucose tùy tình huống.",
      "Người đã mắc tiểu đường cần theo dõi các chỉ số tim mạch theo kế hoạch riêng, không chỉ tập trung vào đường huyết.",
      "6. Người có rối loạn mỡ máu",
      "Cholesterol LDL và một số thành phần lipid có liên quan đến quá trình hình thành mảng xơ vữa trong động mạch.",
      "Xét nghiệm mỡ máu thường cung cấp các chỉ số như:",
      "Cholesterol toàn phần.",
      "LDL cholesterol.",
      "HDL cholesterol.",
      "Triglyceride.",
      "Non-HDL cholesterol trong một số trường hợp.",
      "Kết quả không nên được đánh giá bằng cách nhìn riêng một con số. Bác sĩ cần đặt chỉ số mỡ máu trong bức tranh chung gồm tuổi, huyết áp, hút thuốc, tiểu đường, bệnh thận và tiền sử gia đình.",
      "Hướng dẫn ACC/AHA năm 2026 tiếp tục nhấn mạnh việc cá nhân hóa mục tiêu kiểm soát LDL theo mức nguy cơ của từng người thay vì sử dụng một mục tiêu duy nhất cho tất cả.",
      "7. Người thừa cân, béo phì hoặc vòng eo tăng",
      "Cân nặng không trực tiếp cho biết tim có khỏe hay không, nhưng thừa cân và béo phì thường đi cùng:",
      "Huyết áp cao.",
      "Đường huyết tăng.",
      "Rối loạn mỡ máu.",
      "Gan nhiễm mỡ.",
      "Ngưng thở khi ngủ.",
      "Giảm khả năng vận động.",
      "Vì vậy, tầm soát không nên chỉ dựa vào cân nặng. Bác sĩ có thể kết hợp chỉ số khối cơ thể, vòng eo, huyết áp và kết quả xét nghiệm chuyển hóa để đánh giá đầy đủ hơn.",
      "8. Người hút thuốc hoặc từng hút thuốc trong thời gian dài",
      "Khói thuốc gây ảnh hưởng đến mạch máu và làm tăng nguy cơ tim mạch. Người đang hút thuốc nên trao đổi trung thực với bác sĩ về số lượng, thời gian sử dụng và những lần đã thử cai thuốc.",
      "Người đã bỏ thuốc vẫn nên cung cấp tiền sử này. Nguy cơ có thể giảm dần sau khi ngừng hút, nhưng không trở về mức ban đầu ngay lập tức.",
      "Tư vấn cai thuốc là một phần quan trọng trong phòng ngừa tim mạch, không kém việc kiểm tra huyết áp hay mỡ máu.",
      "9. Người ít vận động hoặc thường xuyên căng thẳng",
      "Ngồi nhiều, ít vận động, ăn uống thất thường, thiếu ngủ và căng thẳng kéo dài có thể ảnh hưởng gián tiếp đến huyết áp, cân nặng, đường huyết và thói quen sử dụng rượu bia, thuốc lá.",
      "Tầm soát tim mạch không chỉ gồm xét nghiệm. Bác sĩ cũng cần hỏi về:",
      "Thời gian vận động mỗi tuần.",
      "Số giờ ngồi liên tục.",
      "Chất lượng giấc ngủ.",
      "Công việc theo ca.",
      "Mức độ căng thẳng.",
      "Chế độ ăn.",
      "Lượng rượu bia sử dụng.",
      "Những thông tin này giúp kế hoạch phòng ngừa sát với đời sống thực tế hơn.",
      "10. Người có bệnh thận mạn hoặc nhiều bệnh nền",
      "Tim, mạch máu, thận và chuyển hóa có mối liên hệ chặt chẽ. Người mắc bệnh thận, tiểu đường, tăng huyết áp hoặc nhiều bệnh nền thường cần được đánh giá nguy cơ toàn diện hơn.",
      "Bác sĩ có thể xem xét thêm:",
      "Creatinine và mức lọc cầu thận.",
      "Protein hoặc albumin trong nước tiểu.",
      "Điện giải.",
      "Thuốc đang sử dụng.",
      "Khả năng tương tác thuốc.",
      "Dấu hiệu giữ nước hoặc suy tim.",
      "Danh mục cụ thể phụ thuộc vào bệnh nền và không nên tự thực hiện theo một gói chung.",
      "11. Người chuẩn bị tập luyện cường độ cao",
      "Phần lớn mọi người được khuyến khích vận động đều đặn. Tuy nhiên, người lâu ngày ít vận động, có nhiều yếu tố nguy cơ hoặc dự định bắt đầu một chương trình tập nặng nên trao đổi với bác sĩ trước.",
      "Nếu có đau ngực, khó thở bất thường, ngất, hồi hộp hoặc tiền sử gia đình đột tử, người tập có thể cần đánh giá chuyên sâu hơn trước khi tăng cường độ.",
      "Không phải ai chuẩn bị tập thể thao cũng cần nghiệm pháp gắng sức. Bác sĩ sẽ dựa trên tuổi, triệu chứng, loại hình vận động và mức nguy cơ để quyết định.",
      "Tầm soát tim mạch nên kiểm tra những gì?",
      "Không có một danh mục duy nhất phù hợp với tất cả mọi người. Một chương trình thường được xây dựng theo hai tầng: đánh giá nguy cơ cơ bản và kiểm tra chuyên sâu khi có chỉ định."
    ],
    "sections": [
      {
        "heading": "Nhóm kiểm tra cơ bản",
        "paragraphs": [
          "1. Khai thác tiền sử và thói quen sinh hoạt",
          "Đây là bước đầu tiên nhưng thường bị đánh giá thấp.",
          "Bác sĩ cần biết:",
          "Bạn có từng đau ngực, khó thở, hồi hộp hoặc ngất không.",
          "Người thân có mắc bệnh tim mạch sớm không.",
          "Bạn có hút thuốc hoặc thường xuyên sử dụng rượu bia không.",
          "Công việc có ít vận động hay nhiều căng thẳng không.",
          "Bạn đang dùng thuốc gì.",
          "Đã từng mắc tăng huyết áp, tiểu đường hoặc rối loạn mỡ máu chưa.",
          "Giấc ngủ có ngáy lớn, ngừng thở hoặc thức giấc nhiều lần không.",
          "Thông tin chính xác giúp bác sĩ lựa chọn xét nghiệm phù hợp và tránh những kiểm tra không cần thiết.",
          "2. Đo huyết áp",
          "Đo huyết áp là một trong những bước tầm soát quan trọng nhất vì tăng huyết áp thường không có biểu hiện rõ.",
          "Kết quả nên được đo đúng kỹ thuật, sau khi người bệnh nghỉ ngơi, ngồi đúng tư thế và sử dụng băng quấn phù hợp. Nếu huyết áp tăng tại phòng khám, một lần đo chưa đủ để kết luận trong mọi trường hợp.",
          "Bác sĩ có thể đề nghị:",
          "Đo lại trong buổi khám.",
          "Theo dõi huyết áp tại nhà.",
          "Đeo máy theo dõi huyết áp 24 giờ.",
          "Tái khám vào thời điểm khác.",
          "Việc đo ngoài cơ sở y tế giúp phân biệt huyết áp tăng thực sự với tình trạng huyết áp tăng do căng thẳng khi đi khám.",
          "3. Đo nhịp tim và khám tim mạch",
          "Bác sĩ có thể bắt mạch, nghe tim, nghe phổi và kiểm tra các dấu hiệu như phù chân hoặc tiếng thổi bất thường.",
          "Nhịp tim nhanh tại một thời điểm chưa chắc là rối loạn nhịp. Lo lắng, vận động, sốt, thiếu nước hoặc sử dụng cà phê cũng có thể ảnh hưởng. Bác sĩ cần kết hợp với triệu chứng và các kiểm tra khác.",
          "4. Cân nặng, chỉ số khối cơ thể và vòng eo",
          "Cân nặng và vòng eo giúp đánh giá nguy cơ chuyển hóa, nhưng không nên sử dụng riêng lẻ để kết luận sức khỏe tim mạch.",
          "Người có cân nặng bình thường vẫn có thể tăng huyết áp, hút thuốc hoặc rối loạn mỡ máu. Ngược lại, một người có chỉ số khối cơ thể cao chưa chắc đã có cùng mức nguy cơ với tất cả những người khác.",
          "5. Xét nghiệm mỡ máu",
          "Xét nghiệm mỡ máu giúp bác sĩ đánh giá nguy cơ xơ vữa động mạch và xây dựng kế hoạch phòng ngừa.",
          "Người được khám có thể được xét nghiệm khi đói hoặc không đói tùy mục đích và hướng dẫn của cơ sở y tế. Trong một số trường hợp, triglyceride tăng hoặc kết quả chưa rõ có thể cần kiểm tra lại sau khi nhịn ăn.",
          "Không nên tự mua thuốc hạ mỡ máu chỉ vì thấy LDL cao trên phiếu xét nghiệm. Quyết định điều trị còn phụ thuộc mức nguy cơ tổng thể.",
          "6. Đường huyết và HbA1c",
          "Đường huyết lúc đói phản ánh lượng glucose tại thời điểm lấy mẫu. HbA1c giúp đánh giá mức đường huyết trung bình trong khoảng thời gian dài hơn.",
          "Bác sĩ có thể chỉ định một hoặc cả hai tùy tuổi, cân nặng, tiền sử gia đình và kết quả trước đây.",
          "Đường huyết bất thường cần được xác nhận và đánh giá theo tiêu chuẩn chuyên môn. Một kết quả tăng sau đêm mất ngủ, bệnh cấp tính hoặc sử dụng một số thuốc chưa đủ để tự kết luận tiểu đường.",
          "7. Chức năng thận và một số xét nghiệm liên quan",
          "Chức năng thận có thể được kiểm tra ở người tăng huyết áp, tiểu đường, bệnh tim hoặc đang sử dụng một số thuốc.",
          "Tùy trường hợp, bác sĩ có thể xem xét:",
          "Creatinine.",
          "Mức lọc cầu thận ước tính.",
          "Điện giải.",
          "Albumin trong nước tiểu.",
          "Xét nghiệm chức năng gan trước hoặc trong quá trình sử dụng một số thuốc.",
          "Đây không phải danh mục bắt buộc giống nhau cho mọi người."
        ]
      },
      {
        "heading": "Những kiểm tra chuyên sâu có thể được chỉ định",
        "paragraphs": [
          "1. Điện tâm đồ",
          "Điện tâm đồ ghi lại hoạt động điện của tim trong một khoảng thời gian ngắn. Phương pháp này có thể hỗ trợ phát hiện:",
          "Một số rối loạn nhịp.",
          "Dấu hiệu dẫn truyền bất thường.",
          "Biểu hiện gợi ý tim to hoặc thiếu máu cơ tim.",
          "Thay đổi liên quan đến thuốc hoặc điện giải.",
          "Tuy nhiên, điện tâm đồ bình thường không loại trừ mọi bệnh tim. Ngược lại, một thay đổi nhỏ cũng chưa chắc là bệnh nghiêm trọng.",
          "USPSTF không khuyến nghị sử dụng điện tâm đồ lúc nghỉ hoặc điện tâm đồ gắng sức để sàng lọc đại trà cho người không triệu chứng và có nguy cơ tim mạch thấp. Việc làm rộng rãi có thể dẫn đến kiểm tra tiếp theo không cần thiết, can thiệp quá mức và lo lắng không đáng có.",
          "Điện tâm đồ nên được chỉ định dựa trên tuổi, triệu chứng, bệnh nền và đánh giá của bác sĩ.",
          "2. Siêu âm tim",
          "Siêu âm tim sử dụng sóng âm để tạo hình ảnh của tim, giúp bác sĩ đánh giá:",
          "Kích thước các buồng tim.",
          "Khả năng co bóp.",
          "Hoạt động của van tim.",
          "Một số bất thường cấu trúc.",
          "Dịch quanh tim.",
          "Dấu hiệu tăng áp lực trong tim.",
          "Siêu âm tim là kỹ thuật hữu ích khi bác sĩ nghe thấy tiếng tim bất thường, nghi ngờ bệnh van tim, suy tim hoặc cần theo dõi một bệnh đã biết. Phương pháp này không nhất thiết phải thực hiện định kỳ cho mọi người khỏe mạnh.",
          "3. Holter điện tâm đồ",
          "Holter là thiết bị nhỏ ghi điện tâm đồ liên tục trong ít nhất 24 giờ hoặc lâu hơn. Phương pháp này phù hợp khi triệu chứng hồi hộp, chóng mặt hoặc rối loạn nhịp xuất hiện từng lúc và không được ghi nhận trong điện tâm đồ ngắn tại phòng khám.",
          "Người đeo máy thường được yêu cầu ghi lại thời điểm xuất hiện triệu chứng và hoạt động đang thực hiện. Bác sĩ sẽ đối chiếu nhật ký với nhịp tim để tìm mối liên quan.",
          "Holter không phải xét nghiệm cần làm thường quy nếu người được khám không có triệu chứng hoặc nghi ngờ rối loạn nhịp.",
          "4. Nghiệm pháp gắng sức",
          "Nghiệm pháp gắng sức theo dõi hoạt động của tim khi cơ thể vận động, thường bằng máy chạy bộ hoặc xe đạp.",
          "Bác sĩ có thể chỉ định để:",
          "Đánh giá đau ngực hoặc khó thở khi gắng sức.",
          "Tìm rối loạn nhịp xuất hiện khi vận động.",
          "Đánh giá khả năng vận động.",
          "Hỗ trợ xây dựng chương trình phục hồi tim mạch.",
          "Theo dõi đáp ứng sau điều trị.",
          "Nghiệm pháp gắng sức cần được thực hiện tại cơ sở có nhân viên theo dõi và phương tiện xử trí phù hợp. Nó không phải bài kiểm tra thể lực thông thường và không nên được thực hiện đại trà chỉ để “xem tim khỏe đến đâu”.",
          "5. Chụp cắt lớp đo vôi hóa động mạch vành",
          "Chụp điểm vôi hóa động mạch vành, thường gọi là CAC, sử dụng CT liều thấp để đo lượng canxi trong các động mạch nuôi tim.",
          "Phương pháp này có thể được cân nhắc khi:",
          "Nguy cơ tim mạch chưa rõ.",
          "Bác sĩ và người bệnh chưa thống nhất có cần dùng thuốc dự phòng hay không.",
          "Cần thêm dữ liệu để cá nhân hóa kế hoạch kiểm soát cholesterol.",
          "CAC không phù hợp để thay thế đánh giá cấp cứu ở người đang đau ngực. Người nguy cơ rất thấp, người đã biết mắc bệnh động mạch vành hoặc người đã có kế hoạch điều trị rõ cũng có thể không cần làm xét nghiệm này.",
          "Do sử dụng tia X, người mang thai hoặc nghi ngờ mang thai cần thông báo trước cho nhân viên y tế.",
          "6. Xét nghiệm Lipoprotein(a) và ApoB",
          "Đây là những xét nghiệm mỡ máu mở rộng, không phải lúc nào cũng có trong gói tầm soát cơ bản.",
          "Lipoprotein(a), viết tắt là Lp(a), chịu ảnh hưởng nhiều bởi yếu tố di truyền. Hướng dẫn ACC/AHA năm 2026 khuyến nghị cân nhắc đo Lp(a) ít nhất một lần ở tuổi trưởng thành, đặc biệt hữu ích khi có tiền sử gia đình mắc bệnh tim mạch sớm hoặc mức nguy cơ chưa được giải thích đầy đủ bằng các chỉ số thông thường.",
          "ApoB có thể được xem xét ở một số người có triglyceride cao, tiểu đường, bệnh tim mạch hoặc hội chứng tim mạch–thận–chuyển hóa. Việc có cần xét nghiệm hay không nên do bác sĩ quyết định.",
          "Có phải càng làm nhiều xét nghiệm càng yên tâm?",
          "Không.",
          "Một gói có nhiều kỹ thuật chưa chắc phù hợp hơn một kế hoạch được cá nhân hóa. Mỗi xét nghiệm đều có khả năng xuất hiện kết quả bất thường tình cờ, dẫn đến lo lắng hoặc kéo theo các kiểm tra khác.",
          "Một xét nghiệm chỉ thực sự có giá trị khi:",
          "Phù hợp với tuổi và nguy cơ.",
          "Có khả năng phát hiện vấn đề cần quan tâm.",
          "Kết quả có thể làm thay đổi hướng chăm sóc.",
          "Lợi ích lớn hơn nguy cơ và chi phí.",
          "Có bác sĩ giải thích sau khi thực hiện.",
          "Ví dụ, điện tâm đồ đại trà ở người nguy cơ thấp có thể không cải thiện khả năng phòng ngừa nhưng lại dẫn đến các thủ thuật tiếp theo không cần thiết.",
          "Tầm soát tốt không phải là “quét toàn bộ cơ thể”, mà là chọn đúng câu hỏi và dùng đúng phương pháp để trả lời.",
          "Bao lâu nên tầm soát tim mạch một lần?",
          "Không có một lịch duy nhất phù hợp với tất cả mọi người.",
          "Tần suất phụ thuộc vào:",
          "Tuổi.",
          "Kết quả lần khám trước.",
          "Tiền sử gia đình.",
          "Huyết áp.",
          "Mỡ máu.",
          "Đường huyết.",
          "Cân nặng.",
          "Tình trạng hút thuốc.",
          "Bệnh nền.",
          "Thuốc đang sử dụng.",
          "Người trưởng thành cần được đo huyết áp định kỳ. Người từ 40 tuổi trở lên hoặc có nguy cơ tăng huyết áp thường cần kiểm tra thường xuyên hơn; người trẻ, nguy cơ thấp và kết quả trước bình thường có thể được bác sĩ hẹn khoảng cách dài hơn.",
          "Mỡ máu và đường huyết cũng được theo dõi theo mức nguy cơ. Người đã có bất thường hoặc đang điều trị sẽ cần kiểm tra gần hơn so với người có kết quả ổn định.",
          "Không nên tự đặt lịch làm lại tất cả xét nghiệm mỗi vài tháng nếu bác sĩ không yêu cầu.",
          "Cần chuẩn bị gì trước khi tầm soát tim mạch?",
          "Trước khi đi khám, bạn nên chuẩn bị:",
          "Căn cước công dân và giấy tờ bảo hiểm nếu sử dụng.",
          "Kết quả khám tim mạch trước đây.",
          "Đơn thuốc đang dùng.",
          "Danh sách thuốc không kê đơn và thực phẩm chức năng.",
          "Kết quả đo huyết áp, đường huyết hoặc nhịp tim tại nhà.",
          "Thông tin bệnh của cha mẹ, anh chị em ruột.",
          "Thời điểm từng xuất hiện đau ngực, khó thở hoặc hồi hộp.",
          "Những câu hỏi muốn trao đổi với bác sĩ.",
          "Bạn nên hỏi trước có cần nhịn ăn hay không. Không tự ý ngừng thuốc tim mạch, thuốc huyết áp, thuốc tiểu đường hoặc thuốc chống đông để đi xét nghiệm.",
          "Trước khi đo huyết áp, nên tránh vận động gắng sức, hút thuốc hoặc uống nhiều cà phê trong thời gian gần buổi đo. Hãy ngồi nghỉ và giữ tinh thần thoải mái.",
          "Nếu có triệu chứng xuất hiện từng cơn, bạn có thể ghi lại:",
          "Thời điểm xảy ra.",
          "Kéo dài bao lâu.",
          "Hoạt động đang thực hiện.",
          "Nhịp tim đo được.",
          "Triệu chứng đi kèm.",
          "Yếu tố giúp giảm khó chịu.",
          "Nhật ký này có thể cung cấp thêm thông tin hữu ích cho bác sĩ.",
          "Đọc kết quả tầm soát như thế nào?",
          "Kết quả tầm soát không nên được đọc từng chỉ số một cách tách rời.",
          "Ví dụ, cùng một mức LDL cholesterol nhưng kế hoạch chăm sóc có thể khác nhau giữa:",
          "Người trẻ không có yếu tố nguy cơ.",
          "Người hút thuốc và tăng huyết áp.",
          "Người mắc tiểu đường.",
          "Người đã từng nhồi máu cơ tim.",
          "Người sóc có thể khác nhau giữa:",
          "Người trẻ không có yếu tố nguy cơ.",
          "Người có tiền sử gia đình bệnh tim mạch sớm.",
          "Một kết quả được đánh dấu cao hoặc thấp chưa chắc đồng nghĩa với bệnh. Ngược lại, tất cả chỉ số nằm trong giới hạn tham chiếu cũng không bảo đảm nguy cơ bằng không.",
          "Sau khi nhận kết quả, người được khám nên biết:",
          "Những chỉ số nào đang bình thường?",
          "Yếu tố nào cần theo dõi?",
          "Có cần thay đổi chế độ ăn hoặc vận động không?",
          "Có cần dùng thuốc không?",
          "Khi nào cần xét nghiệm lại?",
          "Có cần khám chuyên khoa Tim mạch không?",
          "Dấu hiệu nào cần đến bệnh viện ngay?"
        ]
      },
      {
        "heading": "Những dấu hiệu không nên chờ lịch tầm soát",
        "paragraphs": [
          "Tầm soát là hoạt động có kế hoạch và không thay thế cấp cứu.",
          "Người bệnh cần đến cơ sở y tế ngay khi xuất hiện:",
          "Đau, đè nặng hoặc bóp nghẹt vùng ngực.",
          "Đau lan lên cổ, hàm, vai, cánh tay hoặc lưng.",
          "Khó thở rõ rệt.",
          "Vã mồ hôi lạnh.",
          "Buồn nôn kèm đau ngực.",
          "Choáng váng hoặc ngất.",
          "Tim đập rất nhanh hoặc không đều kèm khó thở, đau ngực.",
          "Đột ngột méo miệng, nói khó hoặc yếu một bên cơ thể.",
          "Các biểu hiện của cơn đau tim có thể xuất hiện đột ngột hoặc bắt đầu từ từ, nhẹ rồi tăng dần. Người bệnh không nên chủ quan hoặc chờ xem triệu chứng có tự hết hay không.",
          "Đột quỵ cũng là tình trạng cấp cứu. Khi đột ngột xuất hiện méo mặt, yếu tay chân, nói khó, mất thăng bằng hoặc rối loạn thị lực, người bệnh cần đến viện ngay cả khi triệu chứng có vẻ giảm sau vài phút."
        ]
      },
      {
        "heading": "Tầm soát tim mạch tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, quá trình đánh giá sức khỏe tim mạch được định hướng bắt đầu từ nhu cầu và mức nguy cơ của từng người.",
          "Người bệnh có thể được bác sĩ:",
          "Khai thác triệu chứng và tiền sử gia đình.",
          "Đánh giá thuốc đang sử dụng.",
          "Kiểm tra huyết áp, mạch và thể trạng.",
          "Xem xét các yếu tố nguy cơ chuyển hóa.",
          "Chỉ định xét nghiệm phù hợp.",
          "Tư vấn kỹ thuật tim mạch chuyên sâu khi có lý do.",
          "Kết nối với chuyên khoa liên quan nếu phát hiện bệnh nền.",
          "Hướng dẫn theo dõi và tái khám.",
          "Lợi thế của mô hình bệnh viện đa khoa là khả năng phối hợp giữa Tim mạch với Nội khoa, Nội tiết, Thận – Tiết niệu, Dinh dưỡng, Chẩn đoán hình ảnh và các lĩnh vực liên quan. Điều này đặc biệt cần thiết với người có nhiều yếu tố nguy cơ hoặc nhiều bệnh nền cùng lúc.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến xây dựng hành trình kiểm tra sức khỏe rõ ràng, thuận tiện và dựa trên tình trạng cụ thể của mỗi người bệnh."
        ]
      },
      {
        "heading": "Chủ động kiểm tra để bảo vệ trái tim lâu dài",
        "paragraphs": [
          "Tầm soát tim mạch không chỉ dành cho người lớn tuổi hoặc người đã có bệnh. Bất kỳ người trưởng thành nào cũng nên biết huyết áp và những yếu tố nguy cơ cơ bản của mình.",
          "Những người có tiền sử gia đình, tăng huyết áp, tiểu đường, rối loạn mỡ máu, thừa cân, hút thuốc hoặc ít vận động cần chủ động kiểm tra hơn. Khi có triệu chứng như đau ngực, khó thở, hồi hộp hoặc ngất, người bệnh không nên chỉ đăng ký một gói tầm soát mà cần được bác sĩ thăm khám trực tiếp.",
          "Quan trọng nhất, hãy nhớ rằng tầm soát hiệu quả không được đo bằng số lượng xét nghiệm. Giá trị thực sự nằm ở việc đánh giá đúng nguy cơ, lựa chọn đúng phương pháp và có kế hoạch hành động rõ ràng sau khi nhận kết quả.",
          "Bệnh viện Đa khoa Hồng Phúc – Chủ động đánh giá nguy cơ, chăm sóc trái tim bằng những lựa chọn phù hợp.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "dau-nguc-co-phai-luon-la-dau-hieu-benh-tim-khong": {
    "sourceFile": "8.Đau ngực có phải luôn là dấu hiệu bệnh tim không.docx",
    "title": "Đau ngực có phải luôn là dấu hiệu bệnh tim không?",
    "excerpt": "Đau ngực thường khiến nhiều người lập tức nghĩ đến bệnh tim hoặc nhồi máu cơ tim. Đây là phản ứng dễ hiểu, bởi vùng ngực chứa tim, phổi và nhiều cơ quan quan trọng. Tuy nhiên, không phải mọi cơn đau ngực đều xuất phát từ tim.",
    "intro": [
      "Đau ngực thường khiến nhiều người lập tức nghĩ đến bệnh tim hoặc nhồi máu cơ tim. Đây là phản ứng dễ hiểu, bởi vùng ngực chứa tim, phổi và nhiều cơ quan quan trọng. Tuy nhiên, không phải mọi cơn đau ngực đều xuất phát từ tim.",
      "Đau ngực có thể liên quan đến cơ thành ngực, xương sườn, phổi, thực quản, dạ dày, dây thần kinh hoặc trạng thái căng thẳng. Một số nguyên nhân tương đối nhẹ và có thể cải thiện sau khi nghỉ ngơi, nhưng cũng có những tình trạng cần được cấp cứu ngay.",
      "Điều quan trọng không phải là cố gắng tự đoán bệnh dựa trên cảm giác đau. Người bệnh cần chú ý đến thời điểm xuất hiện, tính chất cơn đau, triệu chứng đi kèm và các yếu tố nguy cơ để biết khi nào có thể theo dõi và khi nào phải đến bệnh viện.",
      "Đau ngực là cảm giác như thế nào?",
      "Đau ngực không phải lúc nào cũng là cảm giác đau nhói rõ ràng. Người bệnh có thể mô tả tình trạng bằng nhiều cách:",
      "Nặng hoặc đè ép ở giữa ngực.",
      "Bóp nghẹt, siết chặt.",
      "Nóng rát sau xương ức.",
      "Đau nhói như kim châm.",
      "Đau âm ỉ.",
      "Căng tức hoặc đầy ngực.",
      "Khó chịu lan ra vai, cánh tay, cổ, hàm hoặc lưng.",
      "Cảm giác không thể hít sâu.",
      "Tức ngực kèm hồi hộp hoặc tim đập nhanh.",
      "Theo hướng dẫn đánh giá đau ngực của Hiệp hội Tim mạch Hoa Kỳ và Trường môn Tim mạch Hoa Kỳ, triệu chứng liên quan đến tim không chỉ giới hạn ở một điểm đau trước ngực. Người bệnh có thể cảm thấy khó chịu ở vai, cánh tay, cổ, hàm, lưng hoặc vùng bụng trên.",
      "Vì cảm giác đau rất khác nhau giữa từng người, chỉ dựa vào các từ như “đau nhói”, “đau âm ỉ” hay “nóng rát” thường chưa đủ để xác định nguyên nhân.",
      "Đau ngực có phải luôn do bệnh tim không?",
      "Không. Đau ngực có nhiều nguyên nhân khác nhau, từ căng cơ sau vận động đến bệnh lý tim mạch, phổi hoặc mạch máu nghiêm trọng.",
      "Các nhóm nguyên nhân thường được xem xét gồm:",
      "Tim và hệ mạch máu.",
      "Phổi và màng phổi.",
      "Thực quản và hệ tiêu hóa.",
      "Cơ, xương và thành ngực.",
      "Dây thần kinh và da.",
      "Căng thẳng, lo âu hoặc cơn hoảng sợ.",
      "MedlinePlus, nguồn thông tin của Thư viện Y khoa Quốc gia Hoa Kỳ, ghi nhận đau ngực có thể liên quan đến đau thắt ngực, trào ngược hoặc bệnh thực quản, căng cơ, viêm sụn sườn, viêm phổi, viêm màng phổi, thuyên tắc phổi và cơn hoảng sợ. Một số nguyên nhân không liên quan trực tiếp đến tim vẫn có thể nguy hiểm.",
      "Do đó, câu hỏi cần đặt ra không chỉ là “Có phải bệnh tim không?” mà còn là “Cơn đau này có dấu hiệu nguy hiểm cần xử trí ngay hay không?”"
    ],
    "sections": [
      {
        "heading": "Đau thắt ngực do thiếu máu cơ tim",
        "paragraphs": [
          "Đau thắt ngực xảy ra khi cơ tim không nhận đủ lượng máu giàu oxy cần thiết. Tình trạng này thường liên quan đến bệnh động mạch vành.",
          "Cơn đau có thể được mô tả là:",
          "Đè nặng hoặc bóp nghẹt giữa ngực.",
          "Căng tức hoặc cảm giác có vật nặng đặt lên ngực.",
          "Lan đến vai, một hoặc hai cánh tay, cổ, hàm, lưng hoặc vùng bụng trên.",
          "Xuất hiện khi đi nhanh, leo cầu thang, mang vật nặng hoặc căng thẳng.",
          "Giảm khi nghỉ trong một số trường hợp đau thắt ngực ổn định.",
          "Đau thắt ngực là biểu hiện của tình trạng cơ tim không được cung cấp đủ máu và oxy. Tuy nhiên, triệu chứng có thể giống khó tiêu hoặc chỉ biểu hiện bằng khó thở, mệt khi vận động.",
          "Cơn đau mới xuất hiện, xảy ra khi nghỉ, kéo dài hơn trước hoặc ngày càng dễ khởi phát cần được đánh giá khẩn cấp."
        ]
      },
      {
        "heading": "Hội chứng vành cấp và nhồi máu cơ tim",
        "paragraphs": [
          "Nhồi máu cơ tim xảy ra khi dòng máu đến một phần cơ tim bị cản trở nghiêm trọng, khiến mô tim có nguy cơ tổn thương.",
          "Các biểu hiện cảnh báo có thể gồm:",
          "Đau, ép hoặc bóp nghẹt giữa ngực.",
          "Cảm giác khó chịu kéo dài vài phút hoặc hết rồi quay lại.",
          "Đau lan ra cánh tay, vai, cổ, hàm, lưng hoặc vùng dạ dày.",
          "Khó thở.",
          "Vã mồ hôi lạnh.",
          "Buồn nôn.",
          "Choáng váng hoặc gần ngất.",
          "Mệt bất thường.",
          "Cơn nhồi máu cơ tim không phải lúc nào cũng bắt đầu bằng một cơn đau dữ dội. Triệu chứng có thể xuất hiện từ từ, ở mức độ nhẹ rồi tăng lên.",
          "Cả nam và nữ đều thường có biểu hiện đau hoặc khó chịu ở ngực khi mắc hội chứng vành cấp. Tuy nhiên, phụ nữ có thể nổi bật thêm những triệu chứng như khó thở, buồn nôn, đau lưng hoặc mệt bất thường."
        ]
      },
      {
        "heading": "Viêm màng ngoài tim",
        "paragraphs": [
          "Màng ngoài tim là lớp màng bao quanh tim. Khi lớp màng này bị viêm, người bệnh có thể đau ngực, đôi khi đau tăng khi hít sâu, ho hoặc nằm xuống.",
          "Cảm giác đau do viêm màng ngoài tim có thể giống bệnh phổi hoặc đau cơ thành ngực. Người bệnh thường cần điện tâm đồ, xét nghiệm và các kiểm tra phù hợp để xác định nguyên nhân."
        ]
      },
      {
        "heading": "Bệnh van tim hoặc bệnh cơ tim",
        "paragraphs": [
          "Một số bệnh van tim và bệnh cơ tim có thể gây tức ngực, khó thở, hồi hộp, chóng mặt hoặc giảm khả năng vận động.",
          "Những bệnh này không phải lúc nào cũng gây đau rõ ràng. Vì vậy, nếu cảm thấy hụt hơi, nhanh mệt, ngất hoặc phù chân, người bệnh vẫn nên kiểm tra tim mạch ngay cả khi không có cơn đau điển hình."
        ]
      },
      {
        "heading": "Bóc tách động mạch chủ",
        "paragraphs": [
          "Bóc tách động mạch chủ là tình trạng nghiêm trọng khi các lớp của thành động mạch chủ bị tách ra. Cơn đau thường bắt đầu đột ngột, dữ dội và có thể lan từ ngực ra sau lưng.",
          "Người bệnh có thể mô tả cảm giác đau như xé, rách hoặc đâm xuyên. Một số trường hợp đi kèm ngất, vã mồ hôi, yếu tay chân, mạch yếu hoặc chênh lệch huyết áp. Đây là tình trạng cần cấp cứu ngay."
        ]
      },
      {
        "heading": "Trào ngược dạ dày – thực quản",
        "paragraphs": [
          "Trào ngược xảy ra khi dịch từ dạ dày đi ngược lên thực quản. Người bệnh có thể cảm thấy:",
          "Nóng rát sau xương ức.",
          "Chua hoặc đắng miệng.",
          "Ợ hơi, ợ nóng.",
          "Đau tăng sau khi ăn no.",
          "Khó chịu khi cúi người hoặc nằm ngay sau bữa ăn.",
          "Cảm giác thức ăn hoặc dịch trào lên cổ.",
          "Nóng rát do trào ngược đôi khi rất giống đau thắt ngực. Ngược lại, đau tim cũng có thể bị nhầm với khó tiêu. Vì vậy, người bệnh không nên tự kết luận rằng cơn đau chỉ do dạ dày, nhất là khi đau mới xuất hiện, kéo dài hoặc kèm khó thở, vã mồ hôi và chóng mặt."
        ]
      },
      {
        "heading": "Co thắt hoặc bệnh lý thực quản",
        "paragraphs": [
          "Thực quản nằm gần tim và có thể tạo ra cảm giác đau ở giữa ngực. Co thắt thực quản, viêm thực quản hoặc rối loạn nuốt đôi khi gây đau khi ăn, nuốt nghẹn hoặc cảm giác thức ăn mắc lại.",
          "Do vị trí và tính chất tương đối giống đau tim, bác sĩ thường cần loại trừ nguyên nhân nguy hiểm trước khi kết luận đau xuất phát từ thực quản."
        ]
      },
      {
        "heading": "Căng cơ thành ngực",
        "paragraphs": [
          "Đau cơ thành ngực có thể xuất hiện sau khi:",
          "Mang hoặc kéo vật nặng.",
          "Tập luyện quá sức.",
          "Ho nhiều.",
          "Vặn người đột ngột.",
          "Làm việc lâu ở tư thế không phù hợp.",
          "Bị va đập vào vùng ngực.",
          "Cơn đau thường khu trú tại một vị trí, tăng khi vận động thân trên, xoay người hoặc ấn vào vùng cơ bị tổn thương.",
          "Tuy nhiên, việc ấn vào thấy đau không đủ để loại trừ hoàn toàn bệnh tim, đặc biệt ở người có nhiều yếu tố nguy cơ hoặc đồng thời có khó thở, vã mồ hôi và choáng váng."
        ]
      },
      {
        "heading": "Viêm sụn sườn",
        "paragraphs": [
          "Sụn sườn là phần kết nối xương sườn với xương ức. Khi khu vực này bị viêm, người bệnh có thể đau nhói hoặc đau âm ỉ trước ngực.",
          "Đau thường tăng khi:",
          "Ấn vào vị trí nối giữa xương sườn và xương ức.",
          "Ho hoặc hắt hơi.",
          "Hít sâu.",
          "Vận động phần thân trên.",
          "Viêm sụn sườn là một trong những nguyên nhân ngoài tim có thể gây đau ngực, nhưng vẫn cần thăm khám nếu đây là cơn đau đầu tiên hoặc có biểu hiện bất thường."
        ]
      },
      {
        "heading": "Viêm phổi hoặc viêm màng phổi",
        "paragraphs": [
          "Viêm phổi và viêm màng phổi có thể gây đau nhói, đặc biệt khi hít sâu hoặc ho. Người bệnh thường có thêm:",
          "Sốt.",
          "Ho.",
          "Khạc đờm.",
          "Khó thở.",
          "Mệt mỏi.",
          "Rét run.",
          "Đau màng phổi thường tăng khi hít sâu, ho hoặc hắt hơi. Tuy nhiên, tính chất này cũng có thể gặp trong thuyên tắc phổi, vì vậy không nên chỉ dựa vào kiểu đau để tự phân biệt."
        ]
      },
      {
        "heading": "Thuyên tắc phổi",
        "paragraphs": [
          "Thuyên tắc phổi xảy ra khi cục máu đông làm tắc một động mạch trong phổi. Đây là tình trạng nguy hiểm cần được xử trí sớm.",
          "Các dấu hiệu có thể gồm:",
          "Khó thở xuất hiện đột ngột.",
          "Thở nhanh.",
          "Đau ngực tăng khi hít sâu hoặc ho.",
          "Tim đập nhanh.",
          "Ho ra máu.",
          "Choáng váng hoặc ngất.",
          "Đau, sưng hoặc nóng một bên chân.",
          "Nguy cơ có thể tăng sau thời gian bất động kéo dài, phẫu thuật, chấn thương, nằm viện, chuyến đi dài, trong thai kỳ hoặc ở người có tiền sử huyết khối. Khi đau ngực đi kèm khó thở đột ngột, người bệnh cần được cấp cứu."
        ]
      },
      {
        "heading": "Tràn khí màng phổi",
        "paragraphs": [
          "Tràn khí màng phổi xảy ra khi không khí lọt vào khoang giữa phổi và thành ngực, có thể khiến phổi bị xẹp một phần hoặc hoàn toàn.",
          "Người bệnh có thể đột ngột đau nhói một bên ngực, khó thở và cảm thấy không thể hít sâu. Tình trạng này cần được bác sĩ đánh giá ngay, đặc biệt khi khó thở tăng nhanh."
        ]
      },
      {
        "heading": "Cơn hoảng sợ hoặc lo âu",
        "paragraphs": [
          "Căng thẳng và cơn hoảng sợ có thể gây:",
          "Tức ngực.",
          "Tim đập nhanh.",
          "Thở gấp.",
          "Run tay.",
          "Chóng mặt.",
          "Tê quanh miệng hoặc đầu ngón tay.",
          "Cảm giác sắp có chuyện nguy hiểm xảy ra.",
          "Triệu chứng có thể rất giống bệnh tim. Vì vậy, không nên tự kết luận đau ngực là do lo âu trước khi các nguyên nhân thể chất quan trọng được loại trừ, nhất là trong lần đầu xuất hiện."
        ]
      },
      {
        "heading": "Zona thần kinh",
        "paragraphs": [
          "Zona có thể gây đau rát, châm chích hoặc tăng nhạy cảm ở một bên ngực. Sau đó, các mụn nước thường xuất hiện thành dải dọc theo đường đi của dây thần kinh.",
          "Trong một số trường hợp, cảm giác đau xuất hiện trước ban da vài ngày nên dễ bị nhầm với đau tim hoặc đau phổi.",
          "Có thể phân biệt đau tim và đau ngoài tim bằng cảm giác không?",
          "Một số đặc điểm có thể giúp định hướng, nhưng không có dấu hiệu đơn lẻ nào đủ để người bệnh tự loại trừ bệnh tim tại nhà."
        ]
      },
      {
        "heading": "Đặc điểm có thể gợi ý đau liên quan đến tim",
        "paragraphs": [
          "Cần thận trọng hơn nếu cơn đau:",
          "Có cảm giác đè nặng, siết hoặc bóp nghẹt.",
          "Nằm ở giữa ngực hoặc lan rộng, khó chỉ đúng bằng một ngón tay.",
          "Lan đến vai, tay, cổ, hàm hoặc lưng.",
          "Xuất hiện khi vận động hoặc căng thẳng.",
          "Kéo dài vài phút hoặc hết rồi tái diễn.",
          "Đi kèm khó thở, vã mồ hôi, buồn nôn hoặc chóng mặt.",
          "Xuất hiện ở người có tăng huyết áp, tiểu đường, rối loạn mỡ máu hoặc hút thuốc.",
          "Có xu hướng xảy ra thường xuyên hơn hoặc với mức vận động nhẹ hơn trước.",
          "Đau thắt ngực do thiếu máu cơ tim thường tạo cảm giác áp lực hoặc bóp nghẹt và có thể lan ra ngoài ngực. Tuy nhiên, biểu hiện của mỗi người không hoàn toàn giống nhau."
        ]
      },
      {
        "heading": "Đặc điểm có thể gợi ý đau cơ, xương hoặc thành ngực",
        "paragraphs": [
          "Nguyên nhân cơ xương có thể được nghĩ đến khi:",
          "Đau rõ tại một điểm.",
          "Đau tăng khi ấn vào.",
          "Đau tăng khi xoay người hoặc cử động cánh tay.",
          "Xuất hiện sau vận động, mang vác hoặc ho nhiều.",
          "Cơn đau thay đổi rõ theo tư thế.",
          "Dù vậy, người có nguy cơ tim mạch hoặc triệu chứng toàn thân vẫn cần được bác sĩ đánh giá."
        ]
      },
      {
        "heading": "Đặc điểm có thể gợi ý trào ngược",
        "paragraphs": [
          "Trào ngược có thể gây:",
          "Nóng rát sau xương ức.",
          "Ợ chua hoặc đắng miệng.",
          "Đau sau khi ăn no.",
          "Khó chịu tăng khi nằm.",
          "Cải thiện khi ngồi dậy trong một số trường hợp.",
          "Nhưng đau tim cũng có thể tạo cảm giác giống đầy bụng hoặc khó tiêu. Khi không chắc chắn, lựa chọn an toàn là đi khám thay vì tự dùng thuốc dạ dày để “thử xem có hết không”."
        ]
      },
      {
        "heading": "Đặc điểm có thể gợi ý bệnh phổi hoặc màng phổi",
        "paragraphs": [
          "Cần nghĩ đến nguyên nhân hô hấp khi đau:",
          "Tăng khi hít sâu.",
          "Tăng khi ho.",
          "Đi kèm sốt hoặc khạc đờm.",
          "Đi kèm khó thở.",
          "Xuất hiện đột ngột sau thời gian bất động hoặc chuyến đi dài.",
          "Kèm ho ra máu hoặc sưng một bên chân.",
          "Một số tình trạng như viêm màng phổi có thể không quá nguy hiểm, nhưng thuyên tắc phổi hoặc tràn khí màng phổi cần được cấp cứu.",
          "Khi nào đau ngực cần gọi cấp cứu?",
          "Người bệnh nên gọi cấp cứu 115 hoặc đến cơ sở y tế gần nhất ngay khi có một trong các biểu hiện sau:",
          "Đau, ép hoặc bóp nghẹt giữa ngực kéo dài vài phút.",
          "Cơn đau hết rồi quay lại.",
          "Đau lan đến cánh tay, vai, cổ, hàm hoặc lưng.",
          "Đau ngực kèm khó thở.",
          "Vã mồ hôi lạnh.",
          "Buồn nôn hoặc nôn.",
          "Choáng váng, ngất hoặc lú lẫn.",
          "Tim đập nhanh bất thường kèm đau ngực.",
          "Đau dữ dội, đột ngột và lan ra sau lưng.",
          "Khó thở đột ngột kèm đau tăng khi hít sâu.",
          "Ho ra máu.",
          "Môi hoặc đầu ngón tay tím tái.",
          "Yếu liệt tay chân hoặc nói khó.",
          "Cơn đau xuất hiện khi vận động và không giảm sau khi nghỉ.",
          "Người đã mắc bệnh mạch vành có cơn đau khác với những lần trước.",
          "Các dấu hiệu cảnh báo nhồi máu cơ tim thường gồm khó chịu giữa ngực, đau lan đến các vùng khác của phần trên cơ thể, khó thở, vã mồ hôi, buồn nôn hoặc choáng váng. Người bệnh không nên chờ cơn đau trở nên dữ dội mới tìm kiếm hỗ trợ.",
          "Trong lúc chờ hỗ trợ:",
          "Hạn chế vận động.",
          "Ngồi hoặc nằm ở tư thế dễ thở.",
          "Nới lỏng quần áo chật.",
          "Nhờ người khác hỗ trợ.",
          "Không tự lái xe nếu đang đau nhiều, khó thở hoặc choáng.",
          "Không tự dùng lại đơn thuốc cũ hoặc thuốc của người khác.",
          "Chuẩn bị danh sách thuốc, bệnh nền và tiền sử dị ứng nếu có thể.",
          "Khi nào nên đặt lịch khám sớm?",
          "Ngay cả khi chưa có dấu hiệu cấp cứu, người bệnh nên sắp xếp đi khám nếu:",
          "Đau ngực lần đầu nhưng không rõ nguyên nhân.",
          "Cơn đau thường xuyên tái diễn.",
          "Đau xuất hiện khi đi bộ nhanh hoặc leo cầu thang.",
          "Khả năng vận động giảm so với trước đây.",
          "Thường xuyên hụt hơi hoặc hồi hộp.",
          "Đau kèm khó nuốt, ho kéo dài hoặc sụt cân.",
          "Đau thành ngực không cải thiện sau nghỉ ngơi.",
          "Có tăng huyết áp, tiểu đường hoặc rối loạn mỡ máu.",
          "Hút thuốc hoặc từng hút thuốc trong thời gian dài.",
          "Gia đình có người mắc bệnh tim mạch sớm.",
          "Đã được chẩn đoán bệnh tim nhưng triệu chứng thay đổi.",
          "Người bệnh cảm thấy lo lắng và không thể xác định nguyên nhân.",
          "Không nên chờ đến lịch khám sức khỏe tổng quát thông thường nếu cơn đau mới xuất hiện, tăng dần hoặc có triệu chứng cảnh báo.",
          "Người trẻ bị đau ngực có cần lo lắng không?",
          "Người trẻ ít có nguy cơ bệnh động mạch vành hơn người lớn tuổi, nhưng điều đó không có nghĩa mọi cơn đau ngực ở người trẻ đều vô hại.",
          "Các nguyên nhân thường gặp có thể là:",
          "Căng cơ.",
          "Viêm sụn sườn.",
          "Trào ngược.",
          "Lo âu.",
          "Nhiễm trùng hô hấp.",
          "Vận động quá sức.",
          "Tuy nhiên, người trẻ vẫn có thể mắc viêm cơ tim, viêm màng ngoài tim, rối loạn nhịp, bệnh tim bẩm sinh, thuyên tắc phổi hoặc các vấn đề mạch máu khác.",
          "Cần đi khám sớm nếu đau ngực xảy ra khi tập luyện, đi kèm ngất, khó thở, tim đập bất thường hoặc gia đình có người đột tử khi còn trẻ.",
          "Phụ nữ bị đau ngực có biểu hiện khác nam giới không?",
          "Đau hoặc khó chịu ở ngực vẫn là biểu hiện thường gặp nhất của nhồi máu cơ tim ở cả nam và nữ.",
          "Tuy nhiên, phụ nữ có thể gặp thêm những biểu hiện nổi bật như:",
          "Khó thở.",
          "Buồn nôn hoặc nôn.",
          "Đau lưng, vai, cánh tay hoặc hàm.",
          "Mệt mỏi bất thường.",
          "Chóng mặt.",
          "Khó chịu giống rối loạn tiêu hóa.",
          "Vì triệu chứng đôi khi không giống hình dung quen thuộc về một cơn đau tim dữ dội, người bệnh có thể trì hoãn việc đi khám. Những biểu hiện mới, bất thường hoặc xuất hiện cùng khó thở và vã mồ hôi cần được đánh giá khẩn cấp.",
          "Bác sĩ chẩn đoán nguyên nhân đau ngực như thế nào?",
          "Quá trình đánh giá thường bắt đầu bằng việc xác định người bệnh có đang gặp tình trạng nguy hiểm hay không.",
          "Bác sĩ sẽ hỏi:",
          "Cơn đau bắt đầu khi nào.",
          "Xuất hiện đột ngột hay từ từ.",
          "Đau tại vị trí nào và có lan không.",
          "Cảm giác là đè nặng, nóng rát hay đau nhói.",
          "Cơn đau kéo dài bao lâu.",
          "Đau liên quan đến vận động, ăn uống, tư thế hay hô hấp không.",
          "Có khó thở, vã mồ hôi, buồn nôn hoặc ngất không.",
          "Người bệnh có bệnh nền hoặc yếu tố nguy cơ nào.",
          "Đang sử dụng thuốc gì.",
          "Sau đó, bác sĩ có thể kiểm tra huyết áp, mạch, nhịp thở, nồng độ oxy, nghe tim phổi và khám thành ngực.",
          "Tùy mức độ nguy cơ, các phương pháp kiểm tra có thể gồm:",
          "Điện tâm đồ.",
          "Xét nghiệm men tim, trong đó có troponin.",
          "Xét nghiệm máu khác.",
          "Chụp X-quang ngực.",
          "Siêu âm tim.",
          "Theo dõi điện tâm đồ.",
          "Chụp cắt lớp vi tính.",
          "Nghiệm pháp gắng sức.",
          "Chụp động mạch vành hoặc kiểm tra chuyên sâu khác.",
          "Hướng dẫn AHA/ACC khuyến nghị việc đánh giá đau ngực cần dựa trên quy trình phân tầng nguy cơ thay vì chỉ dựa vào cảm giác đau. Người nguy cơ thấp, trung bình và cao sẽ có chiến lược kiểm tra khác nhau.",
          "Không phải ai đau ngực cũng cần thực hiện toàn bộ danh mục trên. Bác sĩ lựa chọn kiểm tra dựa trên triệu chứng, kết quả khám và mức độ nguy cơ.",
          "Điện tâm đồ bình thường có loại trừ bệnh tim không?",
          "Không hoàn toàn.",
          "Điện tâm đồ ghi lại hoạt động điện của tim tại thời điểm thực hiện. Kết quả có thể giúp phát hiện một số tình trạng thiếu máu cơ tim, rối loạn nhịp hoặc dẫn truyền bất thường.",
          "Tuy nhiên:",
          "Một số bệnh tim không tạo ra thay đổi rõ trên điện tâm đồ ban đầu.",
          "Rối loạn nhịp có thể xuất hiện từng lúc.",
          "Cơn đau có thể do bệnh mạch vành dù điện tâm đồ lúc nghỉ bình thường.",
          "Bác sĩ có thể cần đo lại điện tâm đồ hoặc kết hợp xét nghiệm troponin.",
          "Vì vậy, người bệnh không nên tự yên tâm tuyệt đối chỉ vì một lần điện tâm đồ chưa phát hiện bất thường.",
          "Có nên tự uống thuốc khi đau ngực?",
          "Không nên tự dùng thuốc tim mạch, thuốc chống đông, thuốc cũ hoặc đơn thuốc của người khác để xử lý một cơn đau chưa rõ nguyên nhân.",
          "Thuốc giảm đau hoặc thuốc dạ dày có thể làm triệu chứng tạm thời giảm nhưng không loại trừ được bệnh nghiêm trọng. Việc cơn đau cải thiện sau một loại thuốc cũng chưa đủ để xác định nguyên nhân.",
          "Người đã được bác sĩ kê thuốc sử dụng khi lên cơn đau thắt ngực cần làm đúng kế hoạch đã được hướng dẫn. Nếu cơn đau không giảm, khác với bình thường hoặc kèm dấu hiệu nguy hiểm, cần gọi cấp cứu.",
          "Người bệnh cần chuẩn bị gì khi đi khám đau ngực?",
          "Nếu tình trạng không phải cấp cứu và có thể đến khám theo lịch, người bệnh nên chuẩn bị:",
          "Thời điểm cơn đau đầu tiên xuất hiện.",
          "Mỗi cơn kéo dài bao lâu.",
          "Hoạt động đang thực hiện khi đau.",
          "Vị trí và hướng lan.",
          "Các triệu chứng đi kèm.",
          "Yếu tố làm cơn đau tăng hoặc giảm.",
          "Kết quả đo huyết áp và nhịp tim nếu có.",
          "Danh sách thuốc đang sử dụng.",
          "Hồ sơ bệnh tim, phổi hoặc tiêu hóa trước đây.",
          "Tiền sử hút thuốc.",
          "Tiền sử tim mạch của gia đình.",
          "Nếu cơn đau xuất hiện từng lúc, người bệnh có thể ghi nhật ký. Tuy nhiên, không nên cố chờ cơn đau tiếp theo chỉ để thu thập thêm thông tin nếu đã có dấu hiệu đáng lo."
        ]
      },
      {
        "heading": "Khám đau ngực tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Đau ngực có thể liên quan đến nhiều hệ cơ quan, vì vậy người bệnh cần được tiếp cận theo hướng đánh giá toàn diện thay vì chỉ kiểm tra riêng tim hoặc dạ dày.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, người bệnh có thể được bác sĩ khai thác triệu chứng, kiểm tra các dấu hiệu ban đầu và định hướng chuyên khoa phù hợp. Tùy kết quả thăm khám, bác sĩ sẽ cân nhắc các xét nghiệm, chẩn đoán hình ảnh hoặc phối hợp liên chuyên khoa khi cần thiết.",
          "Mô hình bệnh viện đa khoa giúp quá trình đánh giá có thể kết nối giữa Tim mạch, Nội khoa, Hô hấp, Tiêu hóa, Chẩn đoán hình ảnh và các lĩnh vực liên quan. Điều này đặc biệt có ý nghĩa khi triệu chứng chưa điển hình hoặc người bệnh đồng thời có nhiều bệnh nền.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến hành trình khám chữa bệnh rõ ràng, thuận tiện và dựa trên tình trạng thực tế của từng người."
        ]
      },
      {
        "heading": "Không phải mọi cơn đau ngực đều do tim, nhưng không nên tự chủ quan",
        "paragraphs": [
          "Đau ngực có thể bắt nguồn từ cơ thành ngực, dạ dày, thực quản, phổi, dây thần kinh hoặc căng thẳng. Tuy nhiên, đau ngực cũng có thể là biểu hiện đầu tiên của nhồi máu cơ tim, thuyên tắc phổi hoặc bóc tách động mạch chủ.",
          "Không có cách tự kiểm tra tại nhà nào có thể loại trừ hoàn toàn những tình trạng này chỉ dựa vào vị trí hoặc tính chất cơn đau.",
          "Nếu cơn đau mới xuất hiện, kéo dài, tái diễn khi vận động hoặc đi kèm khó thở, vã mồ hôi, buồn nôn, chóng mặt hay ngất, người bệnh cần được đánh giá y tế sớm. Với cơn đau dữ dội hoặc có dấu hiệu cấp cứu, hãy gọi hỗ trợ ngay thay vì chờ xem cơ thể có tự ổn định hay không.",
          "Bệnh viện Đa khoa Hồng Phúc – Đánh giá đúng nguyên nhân, xử trí kịp thời, bảo vệ sức khỏe từ những dấu hiệu đầu tiên.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "tang-huyet-ap-am-tham-nguy-hiem-nhu-the-nao": {
    "sourceFile": "9.Tăng huyết áp âm thầm nguy hiểm như thế nào.docx",
    "title": "Tăng huyết áp âm thầm nguy hiểm như thế nào?",
    "excerpt": "Nhiều người chỉ nghĩ mình bị tăng huyết áp khi đau đầu, chóng mặt hoặc cảm thấy tim đập mạnh. Thực tế, phần lớn người có huyết áp cao vẫn sinh hoạt bình thường và không nhận thấy dấu hiệu rõ ràng.",
    "intro": [
      "Nhiều người chỉ nghĩ mình bị tăng huyết áp khi đau đầu, chóng mặt hoặc cảm thấy tim đập mạnh. Thực tế, phần lớn người có huyết áp cao vẫn sinh hoạt bình thường và không nhận thấy dấu hiệu rõ ràng.",
      "Chính sự “im lặng” này khiến tăng huyết áp trở nên nguy hiểm. Trong lúc người bệnh vẫn cảm thấy khỏe, áp lực máu tăng kéo dài có thể âm thầm làm tổn thương thành mạch, buộc tim hoạt động nhiều hơn và ảnh hưởng đến não, thận, mắt cùng nhiều cơ quan khác.",
      "Theo Tổ chức Y tế Thế giới, khoảng 1,4 tỷ người trưởng thành từ 30–79 tuổi trên toàn cầu mắc tăng huyết áp vào năm 2024, nhưng khoảng 44% không biết mình đang có bệnh. Đây cũng là lý do tăng huyết áp thường được gọi là “kẻ giết người thầm lặng”.",
      "Tăng huyết áp là gì?",
      "Huyết áp là lực của dòng máu tác động lên thành động mạch khi tim bơm máu đi khắp cơ thể.",
      "Kết quả đo huyết áp gồm hai con số:",
      "Huyết áp tâm thu là số phía trên, thể hiện áp lực khi tim co bóp.",
      "Huyết áp tâm trương là số phía dưới, thể hiện áp lực khi tim nghỉ giữa hai nhịp đập.",
      "Ví dụ, kết quả 120/80 mmHg được đọc là huyết áp tâm thu 120 và huyết áp tâm trương 80.",
      "Tăng huyết áp xảy ra khi áp lực trong mạch máu duy trì ở mức cao trong thời gian dài. Theo WHO, tăng huyết áp lâm sàng ở người trưởng thành được xác định khi huyết áp tâm thu từ 140 mmHg trở lên và/hoặc huyết áp tâm trương từ 90 mmHg trở lên trong các lần đo vào hai ngày khác nhau. Một số hướng dẫn hiện hành sử dụng ngưỡng thấp hơn để phân loại nguy cơ, vì vậy người bệnh không nên tự chẩn đoán chỉ dựa trên một con số đơn lẻ.",
      "Vì sao tăng huyết áp thường không có triệu chứng?",
      "Cơ thể có khả năng thích nghi với những thay đổi diễn ra từ từ. Khi huyết áp tăng dần theo thời gian, người bệnh có thể không cảm thấy đau hoặc khó chịu, dù thành mạch và các cơ quan đang phải chịu áp lực lớn hơn bình thường.",
      "Phần lớn người mắc tăng huyết áp không có triệu chứng. Cách đáng tin cậy nhất để phát hiện là đo huyết áp đúng kỹ thuật, không phải chờ đến khi cơ thể xuất hiện đau đầu, chóng mặt hay chảy máu cam.",
      "Một số người tình cờ phát hiện huyết áp cao khi:",
      "Khám sức khỏe định kỳ.",
      "Khám tuyển dụng hoặc khám sức khỏe doanh nghiệp.",
      "Đến bệnh viện vì một vấn đề không liên quan.",
      "Đo huyết áp tại nhà hoặc tại hiệu thuốc.",
      "Kiểm tra trước phẫu thuật, thủ thuật.",
      "Khám thai.",
      "Theo dõi tiểu đường, bệnh thận hoặc mỡ máu.",
      "Cảm thấy khỏe không có nghĩa huyết áp chắc chắn đang bình thường. Ngược lại, đau đầu hoặc chóng mặt cũng không đồng nghĩa người bệnh chắc chắn bị tăng huyết áp, bởi những triệu chứng này có thể xuất phát từ nhiều nguyên nhân khác.",
      "Tăng huyết áp âm thầm làm tổn thương cơ thể như thế nào?",
      "Có thể hình dung mạch máu giống như một hệ thống đường ống liên tục đưa máu đến các cơ quan. Khi áp lực trong hệ thống này tăng cao kéo dài, thành mạch dễ trở nên cứng, dày và tổn thương.",
      "Tim cũng phải dùng nhiều sức hơn để đẩy máu đi. Ban đầu, cơ thể có thể vẫn bù trừ được. Nhưng theo thời gian, những thay đổi nhỏ tích tụ có thể dẫn đến biến chứng nghiêm trọng."
    ],
    "sections": [
      {
        "heading": "Tổn thương tim",
        "paragraphs": [
          "Khi huyết áp cao, tim phải co bóp mạnh hơn để đưa máu qua hệ thống mạch. Hoạt động quá sức kéo dài có thể khiến cơ tim dày lên và giảm khả năng bơm máu hiệu quả.",
          "Tăng huyết áp có thể làm tăng nguy cơ:",
          "Bệnh động mạch vành.",
          "Đau thắt ngực.",
          "Nhồi máu cơ tim.",
          "Suy tim.",
          "Rối loạn nhịp tim.",
          "Phì đại cơ tim.",
          "Hướng dẫn tăng huyết áp năm 2025 của AHA và ACC xác định huyết áp cao là một trong những yếu tố nguy cơ phổ biến và có thể điều chỉnh quan trọng nhất đối với bệnh động mạch vành, suy tim, rung nhĩ và nhiều biến cố tim mạch khác.",
          "Đáng chú ý, người bệnh không nhất thiết phải cảm thấy đau ngực trong giai đoạn tim đang chịu áp lực. Một số trường hợp chỉ phát hiện tổn thương khi siêu âm tim, điện tâm đồ hoặc khi khả năng vận động bắt đầu giảm."
        ]
      },
      {
        "heading": "Tăng nguy cơ đột quỵ",
        "paragraphs": [
          "Não cần được cung cấp máu liên tục. Huyết áp cao có thể làm tổn thương hoặc thúc đẩy xơ vữa các mạch máu đưa máu lên não.",
          "Biến chứng có thể xảy ra theo hai hướng:",
          "Mạch máu bị tắc, làm một vùng não thiếu máu.",
          "Mạch máu bị vỡ, gây xuất huyết não.",
          "Cả hai đều có thể dẫn đến đột quỵ, để lại hậu quả như yếu liệt, rối loạn ngôn ngữ, khó nuốt, suy giảm trí nhớ hoặc mất khả năng tự chăm sóc. Tăng huyết áp là một trong những nguyên nhân hàng đầu có thể phòng ngừa của đột quỵ.",
          "Huyết áp cao kéo dài còn có liên quan đến tổn thương các mạch máu nhỏ trong não và suy giảm chức năng nhận thức. Người bệnh có thể không nhận thấy thay đổi ngay lập tức, nhưng nguy cơ tích lũy theo thời gian nếu huyết áp không được kiểm soát."
        ]
      },
      {
        "heading": "Ảnh hưởng đến thận",
        "paragraphs": [
          "Thận có hệ thống mạch máu nhỏ giúp lọc chất thải và lượng nước dư thừa ra khỏi cơ thể. Khi các mạch này bị tổn thương do huyết áp cao, khả năng lọc của thận có thể suy giảm.",
          "Điều đáng nói là tăng huyết áp và bệnh thận có thể tạo thành một vòng tròn:",
          "Huyết áp cao gây tổn thương thận.",
          "Thận suy giảm chức năng khiến việc kiểm soát huyết áp khó khăn hơn.",
          "Huyết áp tiếp tục tăng và làm tổn thương thận nặng thêm.",
          "Người bệnh thường không cảm thấy đau thận trong giai đoạn đầu. Bất thường có thể chỉ được phát hiện qua xét nghiệm creatinine, mức lọc cầu thận hoặc protein trong nước tiểu. WHO xác định bệnh thận là một trong những biến chứng quan trọng của tăng huyết áp không được điều trị."
        ]
      },
      {
        "heading": "Gây tổn thương mắt",
        "paragraphs": [
          "Các mạch máu nhỏ tại võng mạc cũng có thể bị ảnh hưởng khi huyết áp tăng kéo dài. Người bệnh có nguy cơ gặp:",
          "Mờ mắt.",
          "Thay đổi thị lực.",
          "Chảy máu hoặc tổn thương võng mạc.",
          "Giảm thị lực trong trường hợp nghiêm trọng.",
          "Tổn thương mắt do tăng huyết áp thường không gây đau. Vì vậy, người có huyết áp cao lâu năm, tiểu đường hoặc thị lực thay đổi cần được đánh giá phù hợp, thay vì chỉ đổi kính và tiếp tục theo dõi tại nhà."
        ]
      },
      {
        "heading": "Làm tổn thương động mạch",
        "paragraphs": [
          "Áp lực cao kéo dài có thể khiến thành động mạch mất dần tính đàn hồi. Các vùng bị tổn thương tạo điều kiện để cholesterol và các chất khác tích tụ, góp phần hình thành mảng xơ vữa.",
          "Mạch máu có thể:",
          "Trở nên hẹp hơn.",
          "Cứng hơn.",
          "Dễ hình thành cục máu đông.",
          "Phình ra tại một số vị trí yếu.",
          "Giảm khả năng đưa máu đến các cơ quan.",
          "Tổn thương mạch máu không chỉ xảy ra ở tim và não mà còn có thể ảnh hưởng đến chân, thận, mắt và nhiều khu vực khác.",
          "Tăng huyết áp có gây đau đầu, chóng mặt không?",
          "Tăng huyết áp thường không gây triệu chứng rõ ràng. Một số người có thể đau đầu, chóng mặt, ù tai hoặc chảy máu cam, nhưng những biểu hiện này không đủ để xác định huyết áp đang cao.",
          "Đau đầu có thể liên quan đến thiếu ngủ, căng thẳng, bệnh về mắt, viêm xoang, đau nửa đầu hoặc nhiều nguyên nhân khác. Chóng mặt cũng có thể xuất hiện khi mất nước, hạ đường huyết, rối loạn tiền đình hoặc do tác dụng của thuốc.",
          "Ở người có huyết áp rất cao, các triệu chứng có thể gồm:",
          "Đau đầu dữ dội.",
          "Đau ngực.",
          "Khó thở.",
          "Chóng mặt.",
          "Buồn nôn hoặc nôn.",
          "Nhìn mờ.",
          "Lú lẫn.",
          "Nhịp tim bất thường.",
          "Chảy máu cam.",
          "Những triệu chứng trên, đặc biệt khi đi cùng kết quả huyết áp khoảng 180/120 mmHg hoặc cao hơn, cần được đánh giá y tế khẩn cấp.",
          "Ai có nguy cơ bị tăng huyết áp?",
          "Bất kỳ ai cũng có thể bị tăng huyết áp, kể cả người trẻ. Tuy nhiên, nguy cơ thường cao hơn ở những người:",
          "Tuổi ngày càng cao.",
          "Gia đình có người bị tăng huyết áp.",
          "Thừa cân hoặc béo phì.",
          "Ít vận động.",
          "Ăn nhiều muối.",
          "Ăn ít rau và trái cây.",
          "Thường xuyên sử dụng rượu bia.",
          "Hút thuốc.",
          "Thường xuyên căng thẳng.",
          "Ngủ không đủ hoặc có ngưng thở khi ngủ.",
          "Mắc tiểu đường.",
          "Có bệnh thận.",
          "Có rối loạn mỡ máu.",
          "Đang sử dụng một số loại thuốc có thể ảnh hưởng đến huyết áp.",
          "WHO xác định tuổi cao, yếu tố di truyền, thừa cân, ít vận động, chế độ ăn nhiều muối, uống nhiều rượu, tiểu đường và bệnh thận là những yếu tố nguy cơ đáng chú ý.",
          "Người không thuộc nhóm trên vẫn nên biết chỉ số huyết áp của mình. Không ít trường hợp tăng huyết áp xuất hiện mà không có một yếu tố nguy cơ nổi bật nào.",
          "Người trẻ có bị tăng huyết áp không?",
          "Có. Tăng huyết áp không chỉ là bệnh của người lớn tuổi.",
          "Ở người trẻ, huyết áp cao có thể liên quan đến:",
          "Thừa cân và ít vận động.",
          "Ăn nhiều thực phẩm chế biến sẵn.",
          "Hút thuốc hoặc sử dụng chất kích thích.",
          "Thiếu ngủ kéo dài.",
          "Căng thẳng.",
          "Bệnh thận.",
          "Rối loạn nội tiết.",
          "Ngưng thở khi ngủ.",
          "Tác dụng của thuốc.",
          "Một số nguyên nhân thứ phát khác.",
          "Người trẻ thường chủ quan vì nghĩ mình “còn khỏe”. Tuy nhiên, nếu huyết áp tăng từ sớm và kéo dài nhiều năm, thời gian tim, mạch máu, não và thận phải chịu tổn thương cũng dài hơn.",
          "Người được phát hiện tăng huyết áp khi còn trẻ, đặc biệt trước tuổi 40 hoặc có mức huyết áp cao rõ rệt, có thể được bác sĩ đánh giá thêm để tìm nguyên nhân phía sau.",
          "Bao nhiêu là huyết áp cao?",
          "Ngưỡng phân loại huyết áp có thể khác nhau giữa các hướng dẫn.",
          "WHO định nghĩa tăng huyết áp lâm sàng khi kết quả từ 140/90 mmHg trở lên trong các lần đo vào hai ngày khác nhau. Trong khi đó, hướng dẫn AHA/ACC năm 2025 phân loại huyết áp từ 130–139 mmHg hoặc 80–89 mmHg là tăng huyết áp giai đoạn 1.",
          "Sự khác biệt này không có nghĩa một hướng dẫn đúng còn hướng dẫn kia sai. Các hệ thống có thể sử dụng ngưỡng khác nhau để phân loại nguy cơ, quyết định thời điểm thay đổi lối sống hoặc cân nhắc điều trị.",
          "Vì vậy:",
          "Không nên tự mua thuốc chỉ vì một lần đo cao.",
          "Không nên bỏ qua chỉ số tăng nhẹ vì “chưa đến 140/90”.",
          "Cần xem xét nhiều lần đo.",
          "Cần đánh giá tuổi, bệnh nền và nguy cơ tim mạch.",
          "Bác sĩ có thể yêu cầu đo tại nhà hoặc đeo máy theo dõi 24 giờ.",
          "Một lần huyết áp cao có thể bị ảnh hưởng bởi lo lắng, đau, vận động, cà phê, thuốc lá, thiếu ngủ hoặc cách đo chưa đúng.",
          "Vì sao một lần đo cao chưa đủ để kết luận?",
          "Huyết áp thay đổi trong ngày và chịu ảnh hưởng của nhiều yếu tố.",
          "Một người có thể đo cao tại bệnh viện vì hồi hộp nhưng kết quả tại nhà bình thường. Hiện tượng này thường được gọi là tăng huyết áp áo choàng trắng.",
          "Ngược lại, có người đo bình thường tại phòng khám nhưng huyết áp lại cao khi sinh hoạt hằng ngày. Đây có thể là tăng huyết áp ẩn giấu.",
          "USPSTF khuyến nghị người trưởng thành được sàng lọc huyết áp tại cơ sở y tế và sử dụng kết quả đo ngoài phòng khám để hỗ trợ xác nhận chẩn đoán trước khi bắt đầu điều trị.",
          "Các phương pháp có thể gồm:",
          "Tự đo huyết áp tại nhà.",
          "Đeo máy theo dõi huyết áp lưu động trong 24 giờ.",
          "Đo lại trong nhiều ngày.",
          "Tái khám theo lịch của bác sĩ."
        ]
      },
      {
        "heading": "Cách đo huyết áp tại nhà đúng hơn",
        "paragraphs": [
          "Máy đo hiện đại khá dễ sử dụng, nhưng tư thế sai có thể khiến kết quả chênh lệch đáng kể.",
          "Để đo huyết áp tại nhà, người bệnh nên:",
          "Dùng máy đo bắp tay đã được kiểm định.",
          "Chọn vòng bít phù hợp với kích thước cánh tay.",
          "Tránh hút thuốc, uống cà phê, rượu bia hoặc vận động trong khoảng 30 phút trước khi đo.",
          "Đi vệ sinh trước khi đo.",
          "Ngồi nghỉ ít nhất 5 phút.",
          "Ngồi tựa lưng vào ghế.",
          "Đặt hai bàn chân trên sàn, không bắt chéo chân.",
          "Đặt cánh tay lên bàn ngang mức ngực.",
          "Quấn vòng bít trên da, không quấn ngoài áo.",
          "Không nói chuyện trong lúc đo.",
          "Đo ít nhất hai lần, cách nhau khoảng 1–2 phút.",
          "Ghi lại ngày, giờ và kết quả.",
          "CDC khuyến nghị đo vào những thời điểm tương đối ổn định, ghi nhật ký và thực hiện ít nhất hai lần đo cách nhau 1–2 phút. Tư thế ngồi, cà phê, thuốc lá, vận động và cảm giác lo lắng đều có thể làm thay đổi kết quả.",
          "Không nên đo liên tục nhiều lần chỉ vì lo lắng. Việc càng căng thẳng càng có thể làm kết quả tăng thêm.",
          "Khi nào người trưởng thành nên kiểm tra huyết áp?",
          "Mọi người trưởng thành nên biết huyết áp của mình, kể cả khi không có triệu chứng.",
          "USPSTF khuyến nghị sàng lọc tăng huyết áp ở tất cả người từ 18 tuổi trở lên. Người từ 40 tuổi, người thừa cân hoặc có nguy cơ tăng huyết áp thường nên được kiểm tra ít nhất hằng năm. Người từ 18–39 tuổi, nguy cơ thấp và kết quả trước đó bình thường có thể được kiểm tra với khoảng cách dài hơn theo tư vấn của nhân viên y tế.",
          "Nên chủ động kiểm tra thường xuyên hơn nếu:",
          "Từng có kết quả sát ngưỡng cao.",
          "Đang mang thai.",
          "Có bệnh tim, tiểu đường hoặc bệnh thận.",
          "Đang sử dụng thuốc điều trị huyết áp.",
          "Đã từng bị đột quỵ hoặc nhồi máu cơ tim.",
          "Thừa cân hoặc béo phì.",
          "Có tiền sử gia đình tăng huyết áp.",
          "Thường xuyên hút thuốc hoặc sử dụng rượu bia.",
          "Làm việc căng thẳng hoặc theo ca.",
          "Tăng huyết áp có chữa khỏi hoàn toàn không?",
          "Tăng huyết áp nguyên phát thường là tình trạng cần được kiểm soát lâu dài. Người bệnh có thể duy trì huyết áp ở mức phù hợp thông qua thay đổi lối sống, thuốc và theo dõi đều đặn.",
          "Một số trường hợp huyết áp tăng do bệnh lý hoặc thuốc đang sử dụng. Nếu nguyên nhân được xác định và xử lý, huyết áp có thể cải thiện đáng kể. Tuy nhiên, người bệnh không nên tự ngừng thuốc để “thử xem đã khỏi chưa”.",
          "Kiểm soát tốt không có nghĩa bệnh đã tự biến mất. Huyết áp trở về mức mục tiêu có thể chính là kết quả của:",
          "Thuốc đang phát huy hiệu quả.",
          "Chế độ ăn đã được điều chỉnh.",
          "Cân nặng giảm.",
          "Vận động đều đặn hơn.",
          "Hạn chế rượu bia.",
          "Theo dõi và tái khám đúng lịch.",
          "WHO và AHA đều nhấn mạnh thay đổi lối sống là nền tảng quan trọng, nhưng nhiều người vẫn cần sử dụng thuốc để kiểm soát huyết áp và giảm nguy cơ biến chứng.",
          "Có nên tự ngừng thuốc khi huyết áp đã bình thường?",
          "Không.",
          "Một trong những sai lầm thường gặp là ngừng thuốc sau vài tuần vì thấy huyết áp đã ổn định hoặc cơ thể không còn khó chịu. Việc ngừng thuốc đột ngột có thể khiến huyết áp tăng trở lại, đôi khi tăng nhanh và khó kiểm soát.",
          "Người bệnh nên dùng thuốc đúng:",
          "Loại thuốc.",
          "Liều lượng.",
          "Thời điểm.",
          "Tần suất.",
          "Thời gian bác sĩ đã hướng dẫn.",
          "Nếu gặp ho, phù chân, chóng mặt, mệt hoặc tác dụng không mong muốn khác, người bệnh nên trao đổi với bác sĩ. Có nhiều nhóm thuốc điều trị huyết áp; bác sĩ có thể điều chỉnh thay vì để người bệnh tự bỏ thuốc.",
          "Không dùng chung thuốc với người thân, kể cả khi cả hai cùng được chẩn đoán tăng huyết áp.",
          "Người tăng huyết áp nên thay đổi lối sống như thế nào?",
          "Thay đổi lối sống không chỉ dành cho người chưa phải dùng thuốc. Đây vẫn là một phần quan trọng trong quá trình điều trị của người đang sử dụng thuốc.",
          "Các biện pháp thường được khuyến nghị gồm:"
        ]
      },
      {
        "heading": "Giảm lượng muối",
        "paragraphs": [
          "Muối không chỉ có trong nước mắm hoặc muối chấm. Lượng natri đáng kể có thể đến từ:",
          "Đồ ăn chế biến sẵn.",
          "Thịt nguội, xúc xích.",
          "Mì ăn liền.",
          "Đồ hộp.",
          "Thực phẩm muối chua.",
          "Nước chấm.",
          "Đồ ăn nhanh.",
          "Các loại snack.",
          "Nên giảm từ từ để vị giác có thời gian thích nghi, thay vì ăn quá nhạt đột ngột rồi nhanh chóng bỏ cuộc."
        ]
      },
      {
        "heading": "Ăn đa dạng hơn",
        "paragraphs": [
          "Ưu tiên rau, trái cây phù hợp, ngũ cốc nguyên hạt, cá và các nguồn đạm lành mạnh. Hạn chế thực phẩm nhiều chất béo bão hòa, đường và muối.",
          "Người có bệnh thận, tiểu đường hoặc đang dùng một số thuốc cần trao đổi với bác sĩ trước khi thay đổi chế độ ăn quá nhiều."
        ]
      },
      {
        "heading": "Vận động thường xuyên",
        "paragraphs": [
          "Đi bộ, đạp xe, bơi hoặc các hình thức vận động phù hợp có thể hỗ trợ kiểm soát huyết áp, cân nặng và sức khỏe tim mạch.",
          "Người lâu ngày không vận động, có bệnh tim hoặc huyết áp chưa kiểm soát nên tăng cường độ từ từ và hỏi bác sĩ trước khi tập nặng."
        ]
      },
      {
        "heading": "Kiểm soát cân nặng",
        "paragraphs": [
          "Không cần chờ giảm rất nhiều cân mới có lợi. Giảm một phần cân nặng ở người thừa cân cũng có thể hỗ trợ cải thiện huyết áp và các chỉ số chuyển hóa."
        ]
      },
      {
        "heading": "Hạn chế rượu bia và ngừng hút thuốc",
        "paragraphs": [
          "Rượu bia có thể làm huyết áp tăng và ảnh hưởng đến hiệu quả của một số thuốc. Thuốc lá làm tổn thương mạch máu và tăng nguy cơ biến cố tim mạch."
        ]
      },
      {
        "heading": "Chăm sóc giấc ngủ",
        "paragraphs": [
          "Ngủ không đủ, làm việc theo ca hoặc ngưng thở khi ngủ có thể liên quan đến huyết áp khó kiểm soát. Người ngủ ngáy lớn, có lúc ngừng thở, thường xuyên thức giấc hoặc buồn ngủ ban ngày nên trao đổi với bác sĩ."
        ]
      },
      {
        "heading": "Quản lý căng thẳng",
        "paragraphs": [
          "Căng thẳng không phải nguyên nhân duy nhất của tăng huyết áp, nhưng có thể khiến người bệnh ngủ kém, ăn uống thất thường, hút thuốc hoặc sử dụng rượu bia nhiều hơn.",
          "WHO và AHA khuyến nghị chế độ ăn cân bằng, vận động, kiểm soát cân nặng, tránh thuốc lá, giảm rượu bia và dùng thuốc đúng hướng dẫn để phòng ngừa và kiểm soát huyết áp cao."
        ]
      },
      {
        "heading": "Những hiểu lầm thường gặp về tăng huyết áp",
        "paragraphs": [
          "“Không đau đầu thì huyết áp không cao”",
          "Không đúng. Phần lớn người tăng huyết áp không có dấu hiệu cảnh báo. Chỉ đo huyết áp mới biết được kết quả thực tế.",
          "“Huyết áp tăng là do căng thẳng, nghỉ một lúc sẽ hết”",
          "Căng thẳng có thể làm huyết áp tăng tạm thời, nhưng không nên mặc định mọi chỉ số cao đều do tâm lý. Nếu kết quả lặp lại nhiều lần, người bệnh cần được đánh giá.",
          "“Người gầy không bị tăng huyết áp”",
          "Người thừa cân có nguy cơ cao hơn, nhưng người cân nặng bình thường vẫn có thể tăng huyết áp do tuổi, di truyền, bệnh thận, nội tiết hoặc nhiều yếu tố khác.",
          "“Uống thuốc huyết áp lâu ngày sẽ hại thận”",
          "Tăng huyết áp không kiểm soát mới là nguyên nhân quan trọng gây tổn thương thận. Một số thuốc còn được sử dụng để bảo vệ thận ở những nhóm người bệnh phù hợp. Thuốc vẫn có thể có tác dụng không mong muốn, vì vậy cần được bác sĩ lựa chọn và theo dõi.",
          "“Huyết áp ổn rồi thì có thể ngừng thuốc”",
          "Kết quả ổn định thường cho thấy kế hoạch điều trị đang hiệu quả. Việc tự ngừng thuốc có thể làm huyết áp tăng trở lại.",
          "“Chỉ số phía trên mới quan trọng”",
          "Cả huyết áp tâm thu và tâm trương đều cung cấp thông tin. Bác sĩ sẽ xem xét cả hai con số cùng với tuổi, bệnh nền và nguy cơ tim mạch.",
          "Khi nào huyết áp cao cần cấp cứu?",
          "Nếu máy đo hiển thị kết quả trên 180/120 mmHg, người bệnh nên:",
          "Ngồi yên, giữ bình tĩnh.",
          "Chờ ít nhất một phút.",
          "Đo lại đúng kỹ thuật.",
          "Nếu kết quả vẫn rất cao và đi kèm một trong những dấu hiệu sau, cần gọi cấp cứu 115 hoặc đến cơ sở y tế ngay:",
          "Đau ngực.",
          "Khó thở.",
          "Đau dữ dội ở lưng.",
          "Yếu hoặc tê tay chân.",
          "Méo miệng, nói khó.",
          "Thay đổi thị lực.",
          "Lú lẫn.",
          "Co giật.",
          "Ngất.",
          "Đau đầu dữ dội bất thường.",
          "Đây có thể là tình trạng cấp cứu tăng huyết áp kèm tổn thương cơ quan. Không nên tự lái xe, tự tăng gấp đôi liều thuốc hoặc uống thuốc của người khác để cố hạ huyết áp thật nhanh.",
          "Nếu huyết áp trên 180/120 mmHg nhưng chưa có triệu chứng mới đáng lo, người bệnh vẫn cần liên hệ nhân viên y tế sớm để được hướng dẫn.",
          "Bác sĩ kiểm tra gì khi phát hiện huyết áp cao?",
          "Khi kết quả huyết áp tăng, bác sĩ có thể:",
          "Đo lại huyết áp đúng kỹ thuật.",
          "So sánh huyết áp ở các thời điểm khác nhau.",
          "Hướng dẫn theo dõi tại nhà.",
          "Xem xét máy đo và kích thước vòng bít.",
          "Khai thác tiền sử gia đình.",
          "Kiểm tra thuốc đang sử dụng.",
          "Đánh giá chế độ ăn, vận động và giấc ngủ.",
          "Khám tim, phổi và mạch máu.",
          "Chỉ định xét nghiệm phù hợp.",
          "Đánh giá nguy cơ tim mạch tổng thể.",
          "Tùy từng trường hợp, các kiểm tra có thể gồm:",
          "Đường huyết hoặc HbA1c.",
          "Mỡ máu.",
          "Chức năng thận.",
          "Điện giải.",
          "Xét nghiệm nước tiểu.",
          "Điện tâm đồ.",
          "Siêu âm tim.",
          "Khám mắt.",
          "Các kiểm tra tìm nguyên nhân thứ phát.",
          "Không phải người bệnh nào cũng cần thực hiện toàn bộ danh mục. Bác sĩ lựa chọn dựa trên độ tuổi, mức huyết áp, bệnh nền và dấu hiệu tổn thương cơ quan."
        ]
      },
      {
        "heading": "Khám và theo dõi tăng huyết áp tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, người có kết quả huyết áp cao có thể được bác sĩ đánh giá dựa trên nhiều yếu tố thay vì chỉ nhìn vào một lần đo.",
          "Quá trình thăm khám có thể bao gồm:",
          "Đo và kiểm tra lại huyết áp.",
          "Khai thác triệu chứng, bệnh nền và tiền sử gia đình.",
          "Xem xét thuốc đang sử dụng.",
          "Đánh giá các yếu tố nguy cơ tim mạch.",
          "Chỉ định xét nghiệm hoặc thăm dò phù hợp.",
          "Kiểm tra những cơ quan có thể bị ảnh hưởng.",
          "Hướng dẫn theo dõi huyết áp tại nhà.",
          "Xây dựng lịch tái khám dựa trên tình trạng thực tế.",
          "Lợi thế của mô hình bệnh viện đa khoa là khả năng phối hợp giữa Tim mạch, Nội khoa, Nội tiết, Thận – Tiết niệu, Dinh dưỡng, Mắt và các lĩnh vực liên quan khi người bệnh có nhiều bệnh nền hoặc phát hiện dấu hiệu bất thường.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến giúp người bệnh hiểu rõ chỉ số huyết áp, nhận diện nguy cơ và chủ động theo dõi sức khỏe lâu dài."
        ]
      },
      {
        "heading": "Đừng chờ có triệu chứng mới đo huyết áp",
        "paragraphs": [
          "Điểm nguy hiểm nhất của tăng huyết áp là người bệnh có thể cảm thấy hoàn toàn bình thường trong nhiều năm. Trong thời gian đó, tim, não, thận, mắt và mạch máu vẫn có thể âm thầm chịu tổn thương.",
          "Kiểm tra huyết áp thường xuyên, đo đúng kỹ thuật và tuân thủ kế hoạch điều trị là những bước đơn giản nhưng có ý nghĩa lớn. Khi được phát hiện sớm và kiểm soát phù hợp, phần lớn biến chứng liên quan đến tăng huyết áp có thể được phòng ngừa hoặc giảm đáng kể.",
          "Bệnh viện Đa khoa Hồng Phúc – Biết sớm chỉ số, kiểm soát đúng cách, bảo vệ sức khỏe dài lâu.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "roi-loan-mo-mau-nguyen-nhan-xet-nghiem-va-huong-dieu-tri": {
    "sourceFile": "10. Rối loạn mỡ máu nguyên nhân, xét nghiệm và hướng điều trị.docx",
    "title": "Rối loạn mỡ máu: Nguyên nhân, xét nghiệm và hướng điều trị",
    "excerpt": "Rối loạn mỡ máu thường không gây đau, không làm người bệnh sốt và cũng hiếm khi tạo ra biểu hiện rõ ràng trong giai đoạn đầu. Nhiều người chỉ phát hiện cholesterol hoặc triglyceride tăng khi khám sức khỏe định kỳ, xét nghiệm trước phẫu thuật hoặc kiểm tra một bệnh lý khác.",
    "intro": [
      "Rối loạn mỡ máu thường không gây đau, không làm người bệnh sốt và cũng hiếm khi tạo ra biểu hiện rõ ràng trong giai đoạn đầu. Nhiều người chỉ phát hiện cholesterol hoặc triglyceride tăng khi khám sức khỏe định kỳ, xét nghiệm trước phẫu thuật hoặc kiểm tra một bệnh lý khác.",
      "Dù diễn biến âm thầm, mỡ máu bất thường kéo dài có thể góp phần hình thành mảng xơ vữa trong động mạch. Theo thời gian, mạch máu có thể trở nên hẹp và cứng hơn, làm tăng nguy cơ nhồi máu cơ tim, đột quỵ cùng nhiều bệnh lý tim mạch khác.",
      "Tuy nhiên, một kết quả cholesterol cao không đồng nghĩa tất cả người bệnh đều phải uống cùng một loại thuốc. Hướng điều trị cần dựa trên thành phần mỡ máu bị rối loạn, nguyên nhân phía sau và nguy cơ tim mạch tổng thể của từng người.",
      "Rối loạn mỡ máu là gì?",
      "Rối loạn mỡ máu, còn được gọi là rối loạn lipid máu, là tình trạng một hoặc nhiều thành phần chất béo trong máu nằm ngoài mức phù hợp.",
      "Tình trạng này có thể bao gồm:",
      "LDL cholesterol tăng.",
      "Triglyceride tăng.",
      "HDL cholesterol thấp.",
      "Cholesterol toàn phần tăng.",
      "Nhiều chỉ số bất thường cùng lúc.",
      "Cholesterol không hoàn toàn là chất có hại. Cơ thể cần cholesterol để xây dựng tế bào và tạo ra một số hormone. Vấn đề xuất hiện khi lượng cholesterol được vận chuyển trong máu, đặc biệt là LDL cholesterol, tăng quá cao trong thời gian dài.",
      "Triglyceride cũng là một dạng chất béo bình thường của cơ thể. Khi lượng năng lượng đưa vào nhiều hơn nhu cầu sử dụng, cơ thể có thể chuyển phần dư thành triglyceride và dự trữ trong mô mỡ. Triglyceride tăng quá cao không chỉ liên quan đến nguy cơ tim mạch mà còn có thể làm tăng nguy cơ viêm tụy cấp.",
      "Rối loạn mỡ máu có giống gan nhiễm mỡ không?",
      "Không hoàn toàn.",
      "Rối loạn mỡ máu là sự bất thường của cholesterol, triglyceride hoặc các thành phần lipid khác trong máu. Gan nhiễm mỡ là tình trạng chất béo tích tụ quá mức trong tế bào gan.",
      "Hai vấn đề này có thể xuất hiện cùng nhau, đặc biệt ở người thừa cân, tiểu đường, ít vận động hoặc có hội chứng chuyển hóa. Tuy nhiên:",
      "Người bị rối loạn mỡ máu chưa chắc có gan nhiễm mỡ.",
      "Người có gan nhiễm mỡ chưa chắc tất cả chỉ số mỡ máu đều tăng.",
      "Điều trị hai tình trạng có những điểm chung nhưng không hoàn toàn giống nhau.",
      "Vì vậy, không nên nhìn kết quả siêu âm gan để tự kết luận mỡ máu, cũng không nên chỉ dựa vào xét nghiệm cholesterol để đánh giá tình trạng gan.",
      "Vì sao rối loạn mỡ máu nguy hiểm?",
      "LDL cholesterol có thể tham gia vào quá trình hình thành mảng bám bên trong thành động mạch. Khi mảng xơ vữa phát triển, lòng mạch hẹp dần và lưu lượng máu đến các cơ quan bị ảnh hưởng.",
      "Nếu mảng xơ vữa bị nứt hoặc vỡ, cục máu đông có thể hình thành và làm tắc dòng máu. Tùy vị trí, người bệnh có thể gặp:",
      "Nhồi máu cơ tim.",
      "Đột quỵ thiếu máu não.",
      "Bệnh động mạch ngoại biên.",
      "Thiếu máu đến các cơ quan khác.",
      "Cholesterol cao là một trong những yếu tố nguy cơ quan trọng của bệnh tim và đột quỵ. Tuy nhiên, nguy cơ thực tế còn phụ thuộc vào huyết áp, đường huyết, hút thuốc, bệnh thận, tuổi tác và tiền sử gia đình.",
      "Điểm đáng chú ý là quá trình xơ vữa có thể diễn ra trong nhiều năm mà không gây triệu chứng. Người bệnh thường chỉ cảm thấy bất thường khi mạch máu đã hẹp đáng kể hoặc xuất hiện biến cố cấp tính.",
      "Rối loạn mỡ máu có biểu hiện gì?",
      "Phần lớn người bị rối loạn mỡ máu không có triệu chứng rõ ràng. Không thể biết chắc mỡ máu đang cao hay thấp chỉ dựa vào cảm giác của cơ thể.",
      "Một số người cho rằng các biểu hiện như đau đầu, chóng mặt, tê tay hoặc mệt mỏi đồng nghĩa với mỡ máu cao. Trên thực tế, những triệu chứng này có thể liên quan đến rất nhiều nguyên nhân khác và không đủ để chẩn đoán rối loạn lipid máu.",
      "Trong một số tình trạng di truyền hoặc khi chỉ số tăng rất cao, người bệnh có thể xuất hiện:",
      "Những nốt hoặc mảng mỡ dưới da.",
      "Vùng vàng quanh mí mắt.",
      "Vòng màu trắng hoặc xám quanh giác mạc khi còn trẻ.",
      "Đau bụng dữ dội do viêm tụy khi triglyceride tăng rất cao.",
      "Những dấu hiệu này không phổ biến. Cách đáng tin cậy để phát hiện rối loạn mỡ máu vẫn là xét nghiệm máu.",
      "Xét nghiệm mỡ máu gồm những chỉ số nào?",
      "Xét nghiệm mỡ máu, còn gọi là bảng lipid máu, thường cung cấp bốn chỉ số cơ bản:"
    ],
    "sections": [
      {
        "heading": "Cholesterol toàn phần",
        "paragraphs": [
          "Cholesterol toàn phần phản ánh tổng lượng cholesterol được vận chuyển trong máu.",
          "Con số này giúp đánh giá sơ bộ nhưng không thể cho biết đầy đủ nguy cơ nếu đứng một mình. Hai người có cùng cholesterol toàn phần có thể có mức LDL, HDL và nguy cơ tim mạch hoàn toàn khác nhau.",
          "LDL cholesterol",
          "LDL thường được gọi là cholesterol “xấu” vì lượng LDL cao có thể góp phần hình thành mảng xơ vữa trong thành động mạch.",
          "Đây là một trong những chỉ số quan trọng nhất khi bác sĩ đánh giá nguy cơ và lựa chọn hướng điều trị. Nhìn chung, LDL càng thấp thì nguy cơ do xơ vữa càng giảm, nhưng mục tiêu cụ thể phụ thuộc vào từng người.",
          "Người đã từng nhồi máu cơ tim, đột quỵ hoặc mắc bệnh động mạch do xơ vữa thường cần mục tiêu LDL chặt chẽ hơn người trẻ, khỏe mạnh và không có yếu tố nguy cơ.",
          "HDL cholesterol",
          "HDL thường được gọi là cholesterol “tốt” vì giúp vận chuyển một phần cholesterol từ các mô trở lại gan để xử lý.",
          "HDL thấp có thể đi kèm nguy cơ tim mạch cao hơn, đặc biệt khi đồng thời có triglyceride tăng, béo bụng, tăng huyết áp hoặc đường huyết cao. Tuy nhiên, HDL cao không thể “xóa” hoàn toàn tác động của LDL cao.",
          "Mục tiêu điều trị hiện nay không phải là cố tăng HDL bằng mọi giá. Bác sĩ thường tập trung vào giảm LDL, kiểm soát triglyceride và xử lý toàn bộ các yếu tố nguy cơ.",
          "Triglyceride",
          "Triglyceride là dạng chất béo được cơ thể sử dụng để dự trữ năng lượng.",
          "Chỉ số này có thể tăng khi:",
          "Ăn quá nhiều năng lượng.",
          "Dùng nhiều đường và tinh bột tinh chế.",
          "Uống nhiều rượu bia.",
          "Thừa cân.",
          "Tiểu đường chưa được kiểm soát.",
          "Có một số bệnh lý hoặc yếu tố di truyền.",
          "Triglyceride dưới 150 mg/dL, tương đương khoảng 1,7 mmol/L, thường được xem là mức tham khảo thông thường. Tuy nhiên, kết quả cần được đánh giá cùng LDL, HDL, bệnh nền và tình trạng nhịn ăn khi lấy mẫu.",
          "Non-HDL cholesterol là gì?",
          "Non-HDL cholesterol được tính bằng cách lấy cholesterol toàn phần trừ HDL cholesterol.",
          "Chỉ số này phản ánh tổng lượng cholesterol nằm trong các hạt lipoprotein có khả năng thúc đẩy xơ vữa, không chỉ riêng LDL. Non-HDL có thể đặc biệt hữu ích khi triglyceride tăng hoặc người bệnh có tiểu đường, béo phì và hội chứng chuyển hóa.",
          "Một số phòng xét nghiệm tự động báo cáo non-HDL. Nếu phiếu kết quả chưa có, bác sĩ vẫn có thể tính toán dựa trên hai chỉ số sẵn có.",
          "ApoB và Lipoprotein(a) có cần xét nghiệm không?",
          "Không phải người bệnh nào cũng cần xét nghiệm mở rộng.",
          "ApoB",
          "Apolipoprotein B, viết tắt là ApoB, phản ánh số lượng các hạt lipoprotein có khả năng gây xơ vữa. Chỉ số này có thể bổ sung thông tin khi LDL trông tương đối bình thường nhưng người bệnh có:",
          "Triglyceride cao.",
          "Tiểu đường.",
          "Béo bụng.",
          "Hội chứng chuyển hóa.",
          "Nguy cơ tim mạch chưa được giải thích đầy đủ.",
          "Hướng dẫn năm 2026 nhấn mạnh ApoB có thể giúp đánh giá rõ hơn nguy cơ ở một số nhóm người bệnh, nhưng đây chưa phải xét nghiệm bắt buộc cho mọi người.",
          "Lipoprotein(a)",
          "Lipoprotein(a), hay Lp(a), là một loại hạt lipid chịu ảnh hưởng nhiều bởi di truyền. Lp(a) cao có thể làm tăng nguy cơ nhồi máu cơ tim và đột quỵ, ngay cả khi các chỉ số thông thường không quá cao.",
          "Hướng dẫn ACC/AHA năm 2026 khuyến nghị cân nhắc đo Lp(a) ít nhất một lần trong tuổi trưởng thành để hỗ trợ đánh giá nguy cơ. Xét nghiệm đặc biệt hữu ích với người có tiền sử gia đình mắc bệnh tim sớm, LDL tăng cao hoặc biến cố tim mạch chưa rõ nguyên nhân.",
          "Do Lp(a) chủ yếu chịu ảnh hưởng của gene, thay đổi ăn uống thường không làm chỉ số này giảm đáng kể. Nếu Lp(a) cao, bác sĩ có thể tập trung kiểm soát chặt hơn các yếu tố nguy cơ còn lại.",
          "Các chỉ số mỡ máu bao nhiêu là bình thường?",
          "Ở người trưởng thành khỏe mạnh, một số mức thường được sử dụng để tham khảo gồm:",
          "Cholesterol toàn phần dưới 200 mg/dL, tương đương khoảng 5,2 mmol/L.",
          "LDL cholesterol dưới 100 mg/dL, tương đương khoảng 2,6 mmol/L.",
          "Triglyceride dưới 150 mg/dL, tương đương khoảng 1,7 mmol/L.",
          "Đây chỉ là mức tham khảo chung, không phải mục tiêu điều trị áp dụng cho mọi người.",
          "Ví dụ, LDL 90 mg/dL có thể tương đối phù hợp với một người nguy cơ thấp nhưng vẫn chưa đạt mục tiêu ở người đã từng nhồi máu cơ tim. Ngược lại, một người trẻ có LDL tăng nhẹ chưa chắc cần dùng thuốc ngay nếu nguy cơ tổng thể thấp và không có yếu tố đặc biệt.",
          "Hướng dẫn quản lý lipid năm 2026 nhấn mạnh mục tiêu LDL và non-HDL cần được cá nhân hóa theo mức nguy cơ tim mạch, thay vì sử dụng duy nhất một con số cho tất cả mọi người.",
          "Nguyên nhân nào gây rối loạn mỡ máu?",
          "Rối loạn mỡ máu thường không xuất phát từ một nguyên nhân duy nhất. Gene, tuổi tác, chế độ ăn, vận động, cân nặng, bệnh nền và thuốc đang sử dụng có thể cùng tác động."
        ]
      },
      {
        "heading": "Chế độ ăn chưa phù hợp",
        "paragraphs": [
          "Ăn nhiều chất béo bão hòa và thực phẩm chế biến sẵn có thể góp phần làm LDL tăng.",
          "Những nguồn thường gặp gồm:",
          "Thịt nhiều mỡ.",
          "Da và nội tạng động vật.",
          "Bơ, mỡ động vật.",
          "Một số sản phẩm sữa nguyên béo.",
          "Thịt chế biến sẵn.",
          "Đồ chiên rán.",
          "Bánh ngọt và thực phẩm đóng gói.",
          "Triglyceride lại thường tăng rõ khi người bệnh dùng nhiều đường, nước ngọt, bánh kẹo, tinh bột tinh chế hoặc rượu bia.",
          "Điều này không có nghĩa phải loại bỏ hoàn toàn mọi chất béo khỏi bữa ăn. Cơ thể vẫn cần chất béo lành mạnh từ cá, hạt và dầu thực vật phù hợp. Vấn đề nằm ở loại chất béo, số lượng và tổng thể chế độ ăn."
        ]
      },
      {
        "heading": "Thừa cân và ít vận động",
        "paragraphs": [
          "Thừa cân, đặc biệt là tích tụ mỡ quanh bụng, thường đi kèm triglyceride tăng, HDL thấp, tăng huyết áp và đường huyết bất thường.",
          "Những yếu tố này có thể kết hợp thành hội chứng chuyển hóa, làm tăng nguy cơ tiểu đường, bệnh tim và đột quỵ.",
          "Người có cân nặng bình thường vẫn có thể rối loạn mỡ máu. Vì vậy, không nên dùng vóc dáng bên ngoài để thay thế xét nghiệm."
        ]
      },
      {
        "heading": "Uống nhiều rượu bia",
        "paragraphs": [
          "Rượu bia có thể làm triglyceride tăng, đặc biệt ở người đồng thời thừa cân, tiểu đường hoặc có yếu tố di truyền.",
          "Với một số người có triglyceride rất cao, bác sĩ có thể yêu cầu tránh hoàn toàn rượu bia trong giai đoạn kiểm soát. Không nên cho rằng rượu vang hoặc một loại đồ uống có cồn nào đó có thể dùng như thuốc bảo vệ tim mạch.",
          "Hút thuốc",
          "Hút thuốc làm tổn thương mạch máu và làm tăng nguy cơ tim mạch. Người hút thuốc có thể đồng thời có HDL thấp hoặc nhiều yếu tố nguy cơ khác.",
          "Ngay cả khi LDL không quá cao, việc hút thuốc vẫn có thể làm nguy cơ nhồi máu cơ tim và đột quỵ tăng đáng kể."
        ]
      },
      {
        "heading": "Tiểu đường và đường huyết chưa kiểm soát",
        "paragraphs": [
          "Tiểu đường type 2 thường đi kèm triglyceride cao, HDL thấp và sự gia tăng của các hạt lipid có khả năng gây xơ vữa.",
          "Do đó, điều trị rối loạn mỡ máu ở người tiểu đường cần kết hợp với kiểm soát đường huyết, huyết áp, cân nặng và chức năng thận.",
          "Suy giáp",
          "Suy giáp có thể làm cholesterol toàn phần và LDL tăng.",
          "Trong một số trường hợp, người bệnh uống thuốc hạ mỡ máu nhưng kết quả chưa cải thiện như mong đợi vì tình trạng suy giáp chưa được phát hiện hoặc kiểm soát. Khi điều trị nguyên nhân tuyến giáp, chỉ số lipid có thể thay đổi."
        ]
      },
      {
        "heading": "Bệnh thận và bệnh gan",
        "paragraphs": [
          "Bệnh thận mạn, hội chứng thận hư và một số bệnh lý gan có thể làm thay đổi cách cơ thể sản xuất hoặc xử lý lipid.",
          "Hội chứng thận hư, chẳng hạn, có thể đi kèm cholesterol và triglyceride tăng, phù cùng protein trong nước tiểu.",
          "Bác sĩ có thể kiểm tra chức năng gan, thận và nước tiểu khi kết quả mỡ máu bất thường hoặc trước khi lựa chọn một số thuốc điều trị."
        ]
      },
      {
        "heading": "Thuốc đang sử dụng",
        "paragraphs": [
          "Một số thuốc có thể ảnh hưởng đến cholesterol hoặc triglyceride. Mức độ tác động phụ thuộc vào loại thuốc, liều lượng, thời gian sử dụng và cơ địa.",
          "Người bệnh nên cung cấp đầy đủ:",
          "Thuốc kê đơn.",
          "Thuốc không kê đơn.",
          "Thuốc nội tiết.",
          "Thuốc điều trị da.",
          "Thuốc chống viêm.",
          "Thảo dược và thực phẩm chức năng.",
          "Không tự ý dừng thuốc chỉ vì nghi ngờ thuốc làm tăng mỡ máu. Bác sĩ cần đánh giá lợi ích, nguy cơ và lựa chọn phương án thay thế nếu thực sự cần thiết."
        ]
      },
      {
        "heading": "Rối loạn mỡ máu do di truyền",
        "paragraphs": [
          "Một số người có LDL rất cao từ khi còn trẻ do tăng cholesterol máu gia đình, còn gọi là familial hypercholesterolemia.",
          "Đây là tình trạng di truyền làm LDL tăng cao từ sớm, khiến nguy cơ bệnh động mạch vành hoặc nhồi máu cơ tim xuất hiện ở độ tuổi trẻ hơn. CDC ước tính tình trạng này gặp ở khoảng 1 trên 311 người.",
          "Bác sĩ có thể nghĩ đến yếu tố di truyền khi:",
          "LDL từ 190 mg/dL trở lên.",
          "Cholesterol tăng cao từ khi còn trẻ.",
          "Cha mẹ hoặc anh chị em có LDL rất cao.",
          "Gia đình có người nhồi máu cơ tim hoặc đột quỵ sớm.",
          "Người bệnh có u vàng gân hoặc biểu hiện tích tụ cholesterol.",
          "Nếu xác định hoặc nghi ngờ tăng cholesterol máu gia đình, người thân cùng huyết thống cũng nên được tư vấn kiểm tra. Việc phát hiện sớm và điều trị phù hợp có thể giúp giảm nguy cơ bệnh tim về sau.",
          "Ai nên xét nghiệm mỡ máu?",
          "Theo khuyến nghị của Hiệp hội Tim mạch Hoa Kỳ năm 2026, người trưởng thành từ 19 tuổi trở lên nên thực hiện bảng xét nghiệm cholesterol gồm cholesterol toàn phần, LDL, HDL và triglyceride.",
          "Với người trưởng thành nguy cơ thấp và kết quả bình thường, kiểm tra khoảng năm năm một lần có thể là điểm khởi đầu. Tần suất thực tế cần điều chỉnh dựa trên tuổi, bệnh nền và kết quả trước đó.",
          "Nên kiểm tra sớm hoặc thường xuyên hơn nếu:",
          "Có tăng huyết áp.",
          "Mắc tiểu đường hoặc tiền tiểu đường.",
          "Thừa cân, béo phì hoặc vòng eo tăng.",
          "Hút thuốc.",
          "Có bệnh thận.",
          "Gia đình có người bệnh tim sớm.",
          "Đã từng nhồi máu cơ tim hoặc đột quỵ.",
          "Đang dùng thuốc hạ mỡ máu.",
          "Có LDL hoặc triglyceride từng tăng cao.",
          "Ít vận động hoặc thường xuyên sử dụng rượu bia.",
          "Chuẩn bị điều trị một bệnh có thể ảnh hưởng đến lipid.",
          "Trẻ em và thanh thiếu niên có tiền sử gia đình đặc biệt hoặc nghi ngờ rối loạn lipid di truyền cần được bác sĩ Nhi khoa tư vấn lịch kiểm tra riêng.",
          "Xét nghiệm mỡ máu có cần nhịn ăn không?",
          "Không phải mọi xét nghiệm mỡ máu đều bắt buộc phải nhịn ăn.",
          "Bảng lipid có thể được thực hiện khi nhịn ăn hoặc không nhịn ăn, tùy mục tiêu xét nghiệm và tình trạng người bệnh. Xét nghiệm không nhịn ăn thường đủ để sàng lọc ban đầu ở nhiều người.",
          "Bác sĩ có thể yêu cầu nhịn ăn khi:",
          "Triglyceride từng tăng cao.",
          "Kết quả không nhịn ăn khó giải thích.",
          "Cần đánh giá chính xác hơn trước điều trị.",
          "Nghi ngờ rối loạn lipid di truyền.",
          "Người bệnh đồng thời làm những xét nghiệm khác cần nhịn ăn.",
          "Nếu triglyceride không nhịn ăn trên 400 mg/dL, thường cần xét nghiệm lại khi nhịn ăn để đánh giá chính xác hơn.",
          "Khi được yêu cầu nhịn ăn, người bệnh thường chỉ uống nước lọc trong khoảng thời gian cơ sở y tế hướng dẫn. Không nên tự ý nhịn ăn kéo dài, đặc biệt ở người tiểu đường, phụ nữ mang thai, trẻ nhỏ hoặc người đang dùng thuốc.",
          "Không tự ngừng thuốc trước xét nghiệm nếu chưa có chỉ dẫn của bác sĩ.",
          "Cần chuẩn bị gì trước khi xét nghiệm mỡ máu?",
          "Người bệnh nên:",
          "Hỏi rõ có cần nhịn ăn không.",
          "Thông báo thuốc đang sử dụng.",
          "Hạn chế rượu bia trước ngày lấy mẫu.",
          "Tránh ăn uống quá khác thường chỉ để “làm đẹp” kết quả.",
          "Không tập luyện quá sức ngay trước xét nghiệm.",
          "Mang theo kết quả cũ để so sánh.",
          "Thông báo nếu đang sốt, nhiễm trùng hoặc mắc bệnh cấp tính.",
          "Cho nhân viên y tế biết nếu đang mang thai hoặc mới sinh.",
          "Một bữa ăn đặc biệt nhiều chất béo hoặc rượu bia có thể ảnh hưởng rõ đến triglyceride. Tuy nhiên, người bệnh cũng không nên cố ăn kiêng cực đoan vài ngày trước xét nghiệm vì kết quả cần phản ánh tương đối đúng thói quen thường ngày.",
          "Bác sĩ đánh giá kết quả mỡ máu như thế nào?",
          "Bác sĩ không chỉ nhìn vào phiếu xét nghiệm rồi xác định “cao hay thấp”. Quá trình đánh giá thường bao gồm:",
          "Tuổi và giới tính.",
          "Huyết áp.",
          "Đường huyết.",
          "Tình trạng hút thuốc.",
          "Tiền sử tim mạch.",
          "Bệnh thận.",
          "Tiền sử gia đình.",
          "Cân nặng và vòng eo.",
          "Thuốc đang sử dụng.",
          "Mức độ vận động.",
          "Chế độ ăn uống.",
          "Kết quả LDL, HDL và triglyceride.",
          "Một số yếu tố tăng cường nguy cơ khác.",
          "Trong trường hợp cần thiết, bác sĩ có thể chỉ định thêm:",
          "Đường huyết hoặc HbA1c.",
          "Chức năng gan.",
          "Chức năng thận.",
          "Xét nghiệm tuyến giáp.",
          "Xét nghiệm nước tiểu.",
          "ApoB.",
          "Lipoprotein(a).",
          "Điện tâm đồ.",
          "Siêu âm tim hoặc kiểm tra tim mạch khác.",
          "Đánh giá vôi hóa động mạch vành ở nhóm phù hợp.",
          "Mục tiêu là xác định không chỉ mỡ máu đang bất thường ở đâu, mà còn tìm nguyên nhân và biết mức độ nguy hiểm đối với người bệnh cụ thể.",
          "Rối loạn mỡ máu điều trị như thế nào?",
          "Điều trị có thể bao gồm thay đổi lối sống, xử lý bệnh nền và dùng thuốc. Không phải người bệnh nào cũng cần áp dụng cả ba ngay từ đầu."
        ]
      },
      {
        "heading": "Điều chỉnh chế độ ăn",
        "paragraphs": [
          "Chế độ ăn nên hướng đến giảm chất béo bão hòa, thực phẩm siêu chế biến, đường bổ sung và tổng năng lượng dư thừa.",
          "Có thể ưu tiên:",
          "Rau xanh.",
          "Trái cây với lượng phù hợp.",
          "Ngũ cốc nguyên hạt.",
          "Các loại đậu.",
          "Cá.",
          "Thịt nạc.",
          "Các loại hạt.",
          "Dầu thực vật giàu chất béo không bão hòa.",
          "Nên hạn chế:",
          "Thịt nhiều mỡ và da động vật.",
          "Nội tạng.",
          "Thịt chế biến sẵn.",
          "Đồ chiên ngập dầu.",
          "Bánh ngọt.",
          "Nước ngọt.",
          "Đồ ăn nhanh.",
          "Thực phẩm chứa nhiều chất béo bão hòa.",
          "Rượu bia, đặc biệt khi triglyceride tăng.",
          "Hướng dẫn năm 2026 khuyến khích chế độ ăn giàu rau, trái cây, ngũ cốc nguyên hạt, đậu, hạt, chất béo không bão hòa và nguồn protein nạc; đồng thời hạn chế thực phẩm siêu chế biến nhiều chất béo bão hòa, đường và natri.",
          "Không cần loại bỏ hoàn toàn trứng, thịt hoặc mọi món ăn có chất béo nếu bác sĩ không yêu cầu. Một chế độ ăn có thể duy trì lâu dài thường hiệu quả hơn việc kiêng khem quá mức trong vài tuần."
        ]
      },
      {
        "heading": "Tăng cường vận động",
        "paragraphs": [
          "Vận động đều đặn có thể hỗ trợ kiểm soát cân nặng, triglyceride, đường huyết, huyết áp và sức khỏe tim mạch.",
          "Người bệnh có thể bắt đầu từ:",
          "Đi bộ nhanh.",
          "Đạp xe.",
          "Bơi.",
          "Tập sức mạnh phù hợp.",
          "Giảm thời gian ngồi liên tục.",
          "Tăng hoạt động trong sinh hoạt hằng ngày.",
          "Người lâu ngày không vận động, có đau ngực, khó thở, bệnh tim hoặc nhiều bệnh nền nên trao đổi với bác sĩ trước khi tập cường độ cao."
        ]
      },
      {
        "heading": "Giảm cân khi thừa cân",
        "paragraphs": [
          "Giảm một phần cân nặng có thể giúp triglyceride và các chỉ số chuyển hóa cải thiện.",
          "Mục tiêu không phải giảm cân càng nhanh càng tốt. Chế độ nhịn ăn cực đoan hoặc sử dụng thuốc giảm cân không rõ nguồn gốc có thể ảnh hưởng đến gan, tim và sức khỏe tổng thể."
        ]
      },
      {
        "heading": "Ngừng hút thuốc và hạn chế rượu bia",
        "paragraphs": [
          "Ngừng hút thuốc giúp giảm nguy cơ tim mạch ngay cả khi cholesterol chưa thay đổi nhiều.",
          "Với triglyceride tăng, giảm hoặc tránh rượu bia có thể tạo ra sự khác biệt rõ rệt. Người có triglyceride rất cao cần tuân thủ hướng dẫn cụ thể của bác sĩ."
        ]
      },
      {
        "heading": "Điều trị bệnh nền",
        "paragraphs": [
          "Nếu rối loạn mỡ máu liên quan đến suy giáp, tiểu đường, bệnh thận hoặc thuốc đang dùng, việc xử lý nguyên nhân là một phần quan trọng của kế hoạch.",
          "Chỉ uống thuốc hạ mỡ máu nhưng bỏ qua đường huyết, cân nặng hoặc tuyến giáp có thể khiến kết quả khó đạt mục tiêu."
        ]
      },
      {
        "heading": "Thuốc điều trị rối loạn mỡ máu",
        "paragraphs": [
          "Statin",
          "Statin thường là nhóm thuốc được lựa chọn đầu tiên để giảm LDL và nguy cơ biến cố tim mạch ở những người có chỉ định.",
          "Thuốc hoạt động bằng cách giảm quá trình sản xuất cholesterol tại gan. Statin không chỉ được kê dựa trên con số cholesterol mà còn dựa vào nguy cơ nhồi máu cơ tim và đột quỵ của người bệnh.",
          "Không phải ai có LDL tăng nhẹ cũng phải dùng statin. Ngược lại, người đã mắc bệnh động mạch do xơ vữa có thể cần dùng thuốc dù cholesterol toàn phần không quá cao."
        ]
      },
      {
        "heading": "Ezetimibe và các thuốc giảm LDL khác",
        "paragraphs": [
          "Nếu statin chưa giúp đạt mục tiêu, người bệnh không dung nạp liều cần thiết hoặc thuộc nhóm nguy cơ rất cao, bác sĩ có thể cân nhắc thêm thuốc khác.",
          "Các nhóm có thể bao gồm:",
          "Ezetimibe.",
          "Thuốc ức chế PCSK9.",
          "Bempedoic acid.",
          "Thuốc gắn acid mật.",
          "Một số phương pháp chuyên sâu dành cho rối loạn di truyền nặng.",
          "Lựa chọn phụ thuộc vào mức LDL, bệnh nền, khả năng dung nạp, tương tác thuốc và nguy cơ của từng người. Hướng dẫn hiện hành nhấn mạnh việc kết hợp thuốc khi statin đơn độc chưa đủ ở nhóm phù hợp."
        ]
      },
      {
        "heading": "Thuốc điều trị triglyceride",
        "paragraphs": [
          "Với triglyceride tăng, ưu tiên ban đầu thường là điều chỉnh chế độ ăn, giảm rượu bia, kiểm soát đường huyết, giảm cân và xử lý nguyên nhân thứ phát.",
          "Trong một số trường hợp, bác sĩ có thể sử dụng:",
          "Fibrate.",
          "Omega-3 dạng thuốc kê đơn.",
          "Statin.",
          "Các thuốc khác tùy nguy cơ tim mạch và viêm tụy.",
          "Dầu cá hoặc omega-3 thực phẩm chức năng không tương đương thuốc kê đơn về hàm lượng, độ tinh khiết và bằng chứng điều trị. Người bệnh không nên tự mua nhiều loại uống cùng lúc.",
          "Triglyceride cao bao nhiêu thì nguy hiểm?",
          "Triglyceride từ 500 mg/dL trở lên được xem là tăng nặng trong nhiều hướng dẫn. Nguy cơ viêm tụy đặc biệt đáng chú ý khi chỉ số tiến gần hoặc vượt 1.000 mg/dL.",
          "Người có triglyceride rất cao cần được bác sĩ đánh giá sớm để:",
          "Tìm nguyên nhân.",
          "Kiểm tra đường huyết.",
          "Xem xét rượu bia và thuốc đang dùng.",
          "Điều chỉnh chế độ ăn.",
          "Cân nhắc điều trị bằng thuốc.",
          "Theo dõi nguy cơ viêm tụy.",
          "Nếu xuất hiện đau dữ dội vùng bụng trên, đau lan ra sau lưng, nôn nhiều hoặc bụng chướng, người bệnh cần đến cơ sở y tế ngay.",
          "Uống thuốc mỡ máu có hại gan không?",
          "Thuốc hạ mỡ máu có thể gây tác dụng không mong muốn, nhưng không nên vì lo ngại mà tự từ chối hoặc ngừng điều trị.",
          "Trước và trong quá trình dùng thuốc, bác sĩ có thể xem xét:",
          "Tiền sử bệnh gan.",
          "Thuốc đang dùng.",
          "Kết quả men gan.",
          "Triệu chứng đau cơ hoặc yếu cơ.",
          "Khả năng tương tác thuốc.",
          "Mức độ giảm LDL đạt được.",
          "Đa số người bệnh có thể sử dụng statin theo kế hoạch phù hợp. Nếu xuất hiện đau cơ nhiều, yếu bất thường, nước tiểu sẫm màu, vàng da hoặc triệu chứng đáng lo khác, người bệnh nên liên hệ bác sĩ thay vì tự đổi thuốc.",
          "Đôi khi cần thử loại statin khác, giảm liều hoặc phối hợp thuốc để đạt hiệu quả mà vẫn bảo đảm khả năng dung nạp.",
          "Khi chỉ số về bình thường có được ngừng thuốc không?",
          "Không nên tự ngừng.",
          "Kết quả trở về mức mục tiêu có thể là dấu hiệu thuốc, chế độ ăn và vận động đang phát huy tác dụng. Khi dừng thuốc, LDL hoặc triglyceride có thể tăng trở lại.",
          "Bác sĩ có thể điều chỉnh liều trong một số trường hợp, nhưng quyết định cần dựa trên:",
          "Nguyên nhân rối loạn mỡ máu.",
          "Nguy cơ tim mạch.",
          "Kết quả xét nghiệm theo thời gian.",
          "Mức độ thay đổi lối sống.",
          "Tác dụng không mong muốn.",
          "Các bệnh nền kèm theo.",
          "Người có rối loạn lipid do di truyền hoặc đã mắc bệnh tim mạch thường cần điều trị lâu dài.",
          "Rối loạn mỡ máu có chữa khỏi hoàn toàn không?",
          "Điều này phụ thuộc vào nguyên nhân.",
          "Nếu mỡ máu tăng chủ yếu do chế độ ăn, cân nặng, rượu bia hoặc một bệnh nền có thể điều chỉnh, chỉ số có thể cải thiện rõ sau khi xử lý nguyên nhân.",
          "Với rối loạn lipid do di truyền, người bệnh thường cần theo dõi và kiểm soát lâu dài. Điều trị không làm thay đổi gene, nhưng có thể giúp giảm đáng kể lượng LDL và nguy cơ biến cố tim mạch.",
          "Mục tiêu thực tế là kiểm soát lipid ở mức phù hợp và giảm nguy cơ lâu dài, không phải chỉ làm cho phiếu xét nghiệm “đẹp” trong một lần.",
          "Bao lâu nên xét nghiệm lại?",
          "Thời điểm xét nghiệm lại phụ thuộc vào:",
          "Mức độ bất thường ban đầu.",
          "Có bắt đầu hoặc thay đổi thuốc hay không.",
          "Nguy cơ tim mạch.",
          "Triglyceride cao đến mức nào.",
          "Bệnh nền.",
          "Khả năng tuân thủ điều trị.",
          "Sau khi thay đổi thuốc hoặc điều chỉnh kế hoạch, bác sĩ thường hẹn kiểm tra sớm hơn để đánh giá đáp ứng. Khi chỉ số đã ổn định, khoảng cách giữa các lần xét nghiệm có thể dài hơn.",
          "Không nên tự xét nghiệm vài tuần một lần nếu chưa được hướng dẫn, cũng không nên để nhiều năm không kiểm tra khi đang dùng thuốc.",
          "Khi nào cần đi khám sớm?",
          "Người bệnh nên đặt lịch khám nếu:",
          "LDL hoặc triglyceride cao trong nhiều lần xét nghiệm.",
          "LDL từ 190 mg/dL trở lên.",
          "Triglyceride từ 500 mg/dL trở lên.",
          "Mỡ máu tăng dù đã điều chỉnh ăn uống.",
          "Gia đình có người nhồi máu cơ tim hoặc đột quỵ sớm.",
          "Đang mắc tiểu đường, tăng huyết áp hoặc bệnh thận.",
          "Đang dùng thuốc nhưng chỉ số không đạt mục tiêu.",
          "Có đau cơ hoặc triệu chứng bất thường khi uống thuốc.",
          "Phát hiện chỉ số lipid tăng khi còn trẻ.",
          "Có nhiều bệnh nền và đang sử dụng nhiều thuốc.",
          "Người bệnh cần được cấp cứu nếu xuất hiện:",
          "Đau hoặc bóp nghẹt ngực.",
          "Khó thở.",
          "Vã mồ hôi lạnh.",
          "Đau lan ra tay, vai, cổ hoặc hàm.",
          "Đột ngột méo miệng, yếu tay chân hoặc nói khó.",
          "Đau bụng dữ dội kèm nôn nhiều.",
          "Những biểu hiện này không phải triệu chứng trực tiếp để chẩn đoán mỡ máu cao, nhưng có thể liên quan đến biến chứng tim mạch, đột quỵ hoặc viêm tụy."
        ]
      },
      {
        "heading": "Khám rối loạn mỡ máu tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, người có kết quả mỡ máu bất thường có thể được tiếp cận theo hướng kết hợp giữa xét nghiệm và đánh giá lâm sàng.",
          "Quá trình thăm khám có thể gồm:",
          "Khai thác chế độ ăn và sinh hoạt.",
          "Kiểm tra cân nặng, vòng eo và huyết áp.",
          "Đánh giá tiền sử gia đình.",
          "Xem xét thuốc đang sử dụng.",
          "Thực hiện bảng xét nghiệm lipid.",
          "Kiểm tra đường huyết, gan, thận hoặc tuyến giáp khi cần.",
          "Đánh giá nguy cơ tim mạch tổng thể.",
          "Tư vấn dinh dưỡng và vận động.",
          "Chỉ định thuốc khi lợi ích phù hợp.",
          "Theo dõi đáp ứng qua các lần tái khám.",
          "Sự phối hợp giữa Khoa Xét nghiệm, Nội tổng quát, Tim mạch, Nội tiết và các chuyên khoa liên quan giúp bác sĩ không chỉ phát hiện mỡ máu tăng mà còn tìm những nguyên nhân hoặc bệnh nền có thể đi kèm.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến giúp người bệnh hiểu đúng kết quả xét nghiệm và xây dựng kế hoạch kiểm soát phù hợp với tình trạng thực tế."
        ]
      },
      {
        "heading": "Đừng chỉ nhìn một con số trên phiếu xét nghiệm",
        "paragraphs": [
          "Rối loạn mỡ máu là tình trạng phổ biến nhưng thường không có dấu hiệu cảnh báo. Việc phát hiện sớm chủ yếu dựa vào xét nghiệm định kỳ, đặc biệt ở người có tăng huyết áp, tiểu đường, thừa cân, hút thuốc hoặc tiền sử gia đình mắc bệnh tim mạch.",
          "Khi nhận kết quả bất thường, người bệnh không nên quá hoảng sợ nhưng cũng không nên bỏ qua. LDL, HDL, triglyceride và cholesterol toàn phần cần được đánh giá trong cùng một bức tranh sức khỏe.",
          "Điều trị hiệu quả không chỉ là uống thuốc. Chế độ ăn, vận động, cân nặng, kiểm soát bệnh nền và tái khám đúng lịch đều góp phần giảm nguy cơ lâu dài.",
          "Bệnh viện Đa khoa Hồng Phúc – Xét nghiệm đúng, đánh giá toàn diện, chủ động bảo vệ tim mạch từ những chỉ số âm thầm.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "sieu-am-tim-va-dien-tim-khac-nhau-the-nao": {
    "sourceFile": "11.Siêu âm tim và điện tim khác nhau thế nào.docx",
    "title": "Siêu âm tim và điện tim khác nhau thế nào? Khi nào cần thực hiện?",
    "excerpt": "Siêu âm tim và điện tim đều là những phương pháp thường gặp khi kiểm tra sức khỏe tim mạch. Vì tên gọi khá giống nhau, nhiều người nghĩ hai kỹ thuật này có cùng chức năng hoặc chỉ cần chọn một trong hai.",
    "intro": [
      "Siêu âm tim và điện tim đều là những phương pháp thường gặp khi kiểm tra sức khỏe tim mạch. Vì tên gọi khá giống nhau, nhiều người nghĩ hai kỹ thuật này có cùng chức năng hoặc chỉ cần chọn một trong hai.",
      "Thực tế, điện tim và siêu âm tim quan sát trái tim theo hai góc độ hoàn toàn khác nhau. Điện tim ghi lại hoạt động điện tạo ra từng nhịp tim, trong khi siêu âm tim sử dụng sóng âm để tạo hình ảnh về cấu trúc và chuyển động của tim.",
      "Nói một cách dễ hình dung, điện tim giúp bác sĩ “đọc nhịp hoạt động” của trái tim, còn siêu âm tim giúp “nhìn” trái tim đang co bóp, đóng mở van và bơm máu như thế nào.",
      "Hai phương pháp không thay thế nhau. Tùy triệu chứng và vấn đề cần kiểm tra, bác sĩ có thể chỉ định điện tim, siêu âm tim hoặc thực hiện cả hai.",
      "Điện tim là gì?",
      "Điện tim, còn gọi là điện tâm đồ và thường được viết tắt là ECG hoặc EKG, là phương pháp ghi lại hoạt động điện của tim.",
      "Mỗi lần tim đập, một tín hiệu điện sẽ đi qua các buồng tim, kích thích cơ tim co bóp và bơm máu. Máy điện tim tiếp nhận các tín hiệu này qua những điện cực nhỏ dán trên da rồi chuyển thành các đường sóng trên màn hình hoặc giấy.",
      "Điện tim có thể cung cấp thông tin về tốc độ tim đập, nhịp tim có đều hay không, cũng như thời gian và cách tín hiệu điện di chuyển qua từng phần của tim.",
      "Điểm quan trọng là máy điện tim chỉ ghi nhận tín hiệu do cơ thể tạo ra, không truyền điện vào người bệnh. Vì vậy, phương pháp này không gây điện giật.",
      "Điện tim kiểm tra được những gì?",
      "Dựa trên hình dạng và khoảng cách giữa các sóng điện tim, bác sĩ có thể tìm kiếm những dấu hiệu gợi ý:",
      "Tim đập quá nhanh hoặc quá chậm.",
      "Nhịp tim không đều.",
      "Rối loạn dẫn truyền điện trong tim.",
      "Một số dạng rối loạn nhịp.",
      "Dấu hiệu gợi ý thiếu máu cơ tim.",
      "Nhồi máu cơ tim đang xảy ra hoặc đã từng xảy ra.",
      "Một số biểu hiện của tim to hoặc cơ tim dày.",
      "Ảnh hưởng của thuốc lên nhịp tim.",
      "Hoạt động của máy tạo nhịp.",
      "Một số thay đổi liên quan đến rối loạn điện giải.",
      "Điện tim thường là một trong những kiểm tra ban đầu khi người bệnh có đau ngực, hồi hộp, tim đập nhanh, khó thở, chóng mặt, ngất hoặc giảm khả năng vận động. Phương pháp này cũng có thể được sử dụng trước phẫu thuật hoặc để theo dõi người đã mắc bệnh tim.",
      "Tuy nhiên, một kết quả điện tim bất thường chưa đủ để tự kết luận một căn bệnh cụ thể. Bác sĩ cần kết hợp với triệu chứng, thăm khám, xét nghiệm máu và những phương pháp khác.",
      "Điện tim được thực hiện như thế nào?",
      "Khi thực hiện điện tim lúc nghỉ, người bệnh thường nằm trên giường khám. Nhân viên y tế sẽ gắn các điện cực nhỏ lên vùng ngực, tay và chân. Các điện cực được nối với máy bằng dây dẫn.",
      "Người bệnh cần nằm yên và thở bình thường trong khi máy ghi lại tín hiệu. Quá trình ghi thường chỉ kéo dài trong vài phút và không cần chuẩn bị đặc biệt.",
      "Một số người có thể cảm thấy hơi khó chịu khi bóc miếng dán điện cực hoặc bị kích ứng da nhẹ. Đây thường là khó chịu tạm thời, không phải do điện truyền vào cơ thể.",
      "Điện tim bình thường có nghĩa tim hoàn toàn khỏe không?",
      "Không.",
      "Điện tim thông thường chỉ ghi lại hoạt động của tim trong một khoảng thời gian rất ngắn. Nếu tình trạng hồi hộp hoặc rối loạn nhịp chỉ xuất hiện thỉnh thoảng, cơn bất thường có thể không xảy ra đúng lúc đang đo.",
      "Trong trường hợp triệu chứng đến rồi đi, bác sĩ có thể đề nghị người bệnh đeo Holter điện tim hoặc thiết bị theo dõi nhịp trong thời gian dài hơn. Holter giúp ghi lại hoạt động điện của tim khi người bệnh sinh hoạt bình thường.",
      "Ngoài ra, điện tim bình thường không loại trừ hoàn toàn:",
      "Bệnh van tim.",
      "Suy tim giai đoạn sớm.",
      "Một số bệnh cơ tim.",
      "Bệnh động mạch vành.",
      "Dị tật cấu trúc của tim.",
      "Rối loạn nhịp xuất hiện từng cơn.",
      "Do đó, người bệnh không nên bỏ qua triệu chứng chỉ vì một lần điện tim chưa phát hiện bất thường.",
      "Siêu âm tim là gì?",
      "Siêu âm tim là phương pháp sử dụng sóng âm có tần số cao để tạo ra hình ảnh của tim. Kỹ thuật này còn được gọi là siêu âm tim Doppler hoặc echocardiography, tùy nội dung kiểm tra.",
      "Đầu dò siêu âm phát sóng âm vào cơ thể và nhận lại tín hiệu phản hồi. Máy tính xử lý các tín hiệu này để tạo thành hình ảnh trái tim đang đập trên màn hình.",
      "Nhờ đó, bác sĩ có thể quan sát kích thước các buồng tim, chuyển động của thành tim, khả năng co bóp và hoạt động đóng mở của van tim. Siêu âm Doppler còn giúp đánh giá hướng và tốc độ dòng máu đi qua tim.",
      "Siêu âm tim qua thành ngực không sử dụng tia X và không gây phơi nhiễm bức xạ.",
      "Siêu âm tim kiểm tra được những gì?",
      "Siêu âm tim cung cấp thông tin chủ yếu về cấu trúc và chức năng cơ học của tim.",
      "Phương pháp này có thể giúp bác sĩ đánh giá:",
      "Kích thước và hình dạng của tim.",
      "Độ dày cơ tim.",
      "Khả năng co bóp và bơm máu.",
      "Chuyển động của các thành tim.",
      "Hoạt động của van tim.",
      "Tình trạng hẹp hoặc hở van.",
      "Dòng máu đi qua các buồng và van tim.",
      "Dịch quanh tim.",
      "Một số khối bất thường hoặc cục máu đông.",
      "Dị tật tim bẩm sinh.",
      "Một số vấn đề ở các mạch máu lớn gần tim.",
      "Áp lực trong tim và dấu hiệu gợi ý tăng áp động mạch phổi.",
      "Siêu âm tim thường được chỉ định khi bác sĩ nghe thấy tiếng thổi ở tim, nghi ngờ bệnh van tim, suy tim, bệnh cơ tim, dịch màng tim hoặc bất thường cấu trúc.",
      "Siêu âm tim được thực hiện như thế nào?",
      "Loại phổ biến nhất là siêu âm tim qua thành ngực.",
      "Người bệnh thường nằm trên giường, cởi trang phục phần thân trên và được yêu cầu nằm nghiêng sang trái trong một số thời điểm. Nhân viên y tế bôi gel lên vùng ngực rồi di chuyển đầu dò ở nhiều vị trí để thu hình ảnh của tim.",
      "Trong quá trình thực hiện, người bệnh có thể được yêu cầu:",
      "Nằm nghiêng sang trái.",
      "Hít vào hoặc nín thở trong thời gian ngắn.",
      "Thay đổi tư thế.",
      "Giữ yên để hình ảnh rõ hơn.",
      "Đầu dò có thể tạo cảm giác hơi ép lên thành ngực, nhưng siêu âm tim qua thành ngực thông thường không gây đau và không có nguy cơ đã biết từ sóng siêu âm.",
      "Phần lớn trường hợp không cần nhịn ăn hay chuẩn bị đặc biệt trước siêu âm tim qua thành ngực.",
      "Siêu âm tim có những loại nào?"
    ],
    "sections": [
      {
        "heading": "Siêu âm tim qua thành ngực",
        "paragraphs": [
          "Đây là loại được sử dụng phổ biến nhất. Đầu dò được đặt bên ngoài vùng ngực để tạo hình ảnh tim.",
          "Phương pháp này phù hợp để đánh giá nhiều vấn đề như chức năng co bóp, bệnh van tim, kích thước buồng tim và dịch màng tim."
        ]
      },
      {
        "heading": "Siêu âm tim Doppler",
        "paragraphs": [
          "Doppler thường được kết hợp trong cùng buổi siêu âm để đánh giá dòng máu đi qua tim và các van.",
          "Thông tin Doppler giúp bác sĩ xem xét:",
          "Dòng máu có đi đúng hướng không.",
          "Có hiện tượng máu chảy ngược qua van không.",
          "Van tim có bị hẹp không.",
          "Áp lực trong các buồng tim có dấu hiệu bất thường không."
        ]
      },
      {
        "heading": "Siêu âm tim qua thực quản",
        "paragraphs": [
          "Với siêu âm tim qua thực quản, một đầu dò chuyên dụng được đưa qua miệng xuống thực quản. Do thực quản nằm gần tim, phương pháp này có thể tạo hình ảnh rõ hơn ở một số vùng mà siêu âm qua thành ngực khó quan sát.",
          "Kỹ thuật này có thể được chỉ định khi cần đánh giá chi tiết van tim, tìm cục máu đông hoặc khi hình ảnh qua thành ngực chưa đủ rõ. Người bệnh thường phải nhịn ăn và được sử dụng thuốc gây tê vùng họng hoặc thuốc an thần theo quy trình.",
          "Đây là kỹ thuật xâm lấn hơn siêu âm qua thành ngực và có những nguy cơ riêng, vì vậy chỉ được thực hiện khi có chỉ định phù hợp."
        ]
      },
      {
        "heading": "Siêu âm tim gắng sức",
        "paragraphs": [
          "Siêu âm tim gắng sức ghi nhận hoạt động của tim trước và sau khi vận động hoặc sau khi sử dụng thuốc làm tim hoạt động mạnh hơn.",
          "Phương pháp này có thể được sử dụng để đánh giá khả năng co bóp của cơ tim khi nhu cầu oxy tăng và hỗ trợ phát hiện một số tình trạng giảm tưới máu cơ tim.",
          "Siêu âm tim gắng sức không giống siêu âm tim thông thường và cần được thực hiện trong môi trường có nhân viên theo dõi chuyên môn.",
          "Siêu âm tim và điện tim khác nhau thế nào?",
          "Có thể tóm tắt đơn giản:",
          "Điện tim trả lời: Tim đập nhanh hay chậm? Nhịp có đều không? Tín hiệu điện đi qua tim như thế nào?",
          "Siêu âm tim trả lời: Tim có kích thước ra sao? Co bóp tốt không? Van tim đóng mở thế nào? Máu chảy qua tim có bất thường không?",
          "Khi nào bác sĩ thường chỉ định điện tim?",
          "Điện tim có thể được cân nhắc khi người bệnh có:",
          "Đau hoặc tức ngực.",
          "Hồi hộp, đánh trống ngực.",
          "Tim đập nhanh hoặc không đều.",
          "Chóng mặt.",
          "Ngất hoặc gần ngất.",
          "Khó thở.",
          "Mệt bất thường.",
          "Giảm khả năng vận động.",
          "Tiền sử nhồi máu cơ tim.",
          "Đang dùng thuốc có thể ảnh hưởng đến nhịp tim.",
          "Máy tạo nhịp hoặc thiết bị tim mạch cần theo dõi.",
          "Nhu cầu đánh giá tim trước một số phẫu thuật.",
          "Điện tim cũng có thể được thực hiện trong quá trình cấp cứu vì phương pháp nhanh và cung cấp thông tin quan trọng về nhịp tim hoặc dấu hiệu gợi ý nhồi máu cơ tim.",
          "Tuy nhiên, điện tim không nên được xem là xét nghiệm bắt buộc hằng năm cho tất cả những người khỏe mạnh. Bác sĩ sẽ cân nhắc dựa trên triệu chứng, tuổi và mức độ nguy cơ.",
          "Khi nào bác sĩ thường chỉ định siêu âm tim?",
          "Siêu âm tim có thể được chỉ định khi người bệnh có:",
          "Tiếng thổi tim khi nghe bằng ống nghe.",
          "Khó thở kéo dài.",
          "Phù chân.",
          "Nhanh mệt khi vận động.",
          "Nghi ngờ suy tim.",
          "Tăng huyết áp lâu năm cần đánh giá ảnh hưởng lên tim.",
          "Đau ngực trong một số tình huống.",
          "Bệnh van tim.",
          "Bệnh cơ tim.",
          "Dị tật tim bẩm sinh.",
          "Dịch màng ngoài tim.",
          "Tiền sử điều trị có thể ảnh hưởng đến cơ tim.",
          "Nhu cầu theo dõi một bệnh tim đã được chẩn đoán.",
          "Siêu âm tim giúp bác sĩ đánh giá trực tiếp hơn về kích thước, khả năng bơm máu, chuyển động cơ tim và hoạt động của van.",
          "Tương tự điện tim, siêu âm tim không nhất thiết phải làm định kỳ cho mọi người không có triệu chứng hoặc yếu tố nguy cơ.",
          "Khi nào cần làm cả điện tim và siêu âm tim?",
          "Bác sĩ có thể chỉ định cả hai vì mỗi phương pháp trả lời một nhóm câu hỏi khác nhau.",
          "Ví dụ, một người thường xuyên hồi hộp và khó thở có thể cần:",
          "Điện tim để kiểm tra nhịp và dẫn truyền điện.",
          "Siêu âm tim để đánh giá cơ tim, van tim và khả năng bơm máu.",
          "Người tăng huyết áp lâu năm có thể được làm điện tim để tìm dấu hiệu gợi ý cơ tim dày hoặc rối loạn nhịp, đồng thời siêu âm tim để đo độ dày thành tim và đánh giá chức năng co bóp.",
          "Người đau ngực cũng có thể cần điện tim sớm để tìm dấu hiệu thiếu máu cơ tim. Tùy kết quả và mức độ nguy cơ, bác sĩ sẽ cân nhắc thêm xét nghiệm men tim, siêu âm tim, nghiệm pháp gắng sức hoặc phương pháp chẩn đoán mạch vành khác.",
          "Việc chỉ định cả hai không có nghĩa tình trạng chắc chắn nghiêm trọng. Đây có thể đơn giản là cách bác sĩ ghép thông tin về nhịp điện và cấu trúc cơ học để có bức tranh đầy đủ hơn.",
          "Siêu âm tim bình thường có loại trừ bệnh động mạch vành không?",
          "Không hoàn toàn.",
          "Siêu âm tim qua thành ngực lúc nghỉ có thể cho thấy tim co bóp bình thường, nhưng vẫn không nhìn thấy trực tiếp mọi chỗ hẹp trong các động mạch vành.",
          "Ở giai đoạn chưa gây tổn thương rõ cho cơ tim, bệnh động mạch vành có thể không tạo ra thay đổi trên siêu âm lúc nghỉ. Khi nghi ngờ, bác sĩ có thể cần thêm:",
          "Xét nghiệm máu.",
          "Điện tim.",
          "Nghiệm pháp gắng sức.",
          "Siêu âm tim gắng sức.",
          "Chụp cắt lớp động mạch vành.",
          "Chụp động mạch vành.",
          "Các kỹ thuật tưới máu cơ tim.",
          "Do đó, không nên tự kết luận rằng “siêu âm tim bình thường thì chắc chắn không có bệnh mạch vành”.",
          "Điện tim bất thường có phải luôn là bệnh nguy hiểm không?",
          "Không.",
          "Một số thay đổi trên điện tim có thể liên quan đến tư thế đặt điện cực, thể trạng, thuốc đang sử dụng, tuổi tác hoặc biến thể cá nhân. Có những bất thường nhỏ không gây ảnh hưởng đáng kể nhưng cũng có những thay đổi cần được đánh giá ngay.",
          "Bác sĩ cần xem xét:",
          "Triệu chứng của người bệnh.",
          "Điện tim cũ để so sánh.",
          "Bệnh nền.",
          "Thuốc đang dùng.",
          "Huyết áp và nhịp tim.",
          "Xét nghiệm máu.",
          "Kết quả siêu âm hoặc phương pháp khác.",
          "Người bệnh không nên tự tra cứu từng thuật ngữ trên bản kết luận rồi suy đoán mức độ nguy hiểm.",
          "Điện tim và siêu âm tim có đau hoặc gây hại không?",
          "Điện tim và siêu âm tim qua thành ngực đều là các phương pháp không xâm lấn, thường không gây đau.",
          "Điện tim không truyền điện vào cơ thể. Siêu âm tim qua thành ngực không sử dụng tia X và không có tác dụng phụ đã biết từ sóng siêu âm trong điều kiện thực hiện thông thường.",
          "Một số khó chịu nhẹ có thể xảy ra:",
          "Da hơi rát khi bóc điện cực điện tim.",
          "Cảm giác đầu dò ép nhẹ lên ngực khi siêu âm.",
          "Gel siêu âm tạo cảm giác lạnh.",
          "Phải nằm nghiêng hoặc giữ tư thế trong một khoảng thời gian.",
          "Các loại siêu âm đặc biệt như siêu âm qua thực quản hoặc siêu âm gắng sức có quy trình, cách chuẩn bị và nguy cơ khác. Người bệnh sẽ được giải thích trước khi thực hiện.",
          "Trẻ em và phụ nữ mang thai có thực hiện được không?",
          "Điện tim và siêu âm tim qua thành ngực không sử dụng tia X. Hai phương pháp này có thể được bác sĩ sử dụng để đánh giá tim ở nhiều nhóm người bệnh, bao gồm trẻ em và phụ nữ mang thai khi có chỉ định.",
          "Tuy nhiên, lý do kiểm tra, cách thực hiện và cách đọc kết quả có thể khác giữa người lớn, trẻ em và thai phụ. Người bệnh nên thông báo đầy đủ tình trạng mang thai, bệnh nền và thuốc đang sử dụng để được hướng dẫn phù hợp.",
          "Cần chuẩn bị gì trước khi kiểm tra?",
          "Với điện tim lúc nghỉ và siêu âm tim qua thành ngực thông thường, người bệnh thường không cần nhịn ăn.",
          "Để buổi khám thuận tiện hơn, nên chuẩn bị:",
          "Hồ sơ khám tim mạch trước đây.",
          "Điện tim hoặc kết quả siêu âm cũ.",
          "Danh sách thuốc đang sử dụng.",
          "Thông tin về máy tạo nhịp nếu có.",
          "Nhật ký huyết áp và nhịp tim.",
          "Thời điểm xuất hiện đau ngực, hồi hộp hoặc khó thở.",
          "Tiền sử bệnh tim của gia đình.",
          "Không tự ý ngừng thuốc tim mạch trước khi kiểm tra. Nếu chuẩn bị thực hiện siêu âm qua thực quản hoặc siêu âm gắng sức, người bệnh cần tuân theo hướng dẫn riêng của cơ sở y tế.",
          "Khi nào không nên chờ lịch kiểm tra thông thường?",
          "Điện tim và siêu âm tim là công cụ hỗ trợ chẩn đoán, nhưng người bệnh không nên chờ đặt lịch thông thường nếu đang có dấu hiệu cấp cứu.",
          "Cần gọi cấp cứu 115 hoặc đến cơ sở y tế ngay khi xuất hiện:",
          "Đau, đè nặng hoặc bóp nghẹt giữa ngực.",
          "Đau lan ra tay, vai, lưng, cổ hoặc hàm.",
          "Khó thở rõ rệt.",
          "Vã mồ hôi lạnh.",
          "Buồn nôn kèm đau ngực.",
          "Choáng váng hoặc ngất.",
          "Tim đập nhanh bất thường kèm đau ngực.",
          "Tím tái hoặc mất ý thức.",
          "Đau ngực kéo dài, hết rồi quay lại, khó thở và đau lan đến phần trên cơ thể có thể là dấu hiệu cảnh báo nhồi máu cơ tim. Người bệnh cần được đánh giá khẩn cấp thay vì tự tìm nơi làm riêng một kỹ thuật."
        ]
      },
      {
        "heading": "Kiểm tra điện tim và siêu âm tim tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi đến Bệnh viện Đa khoa Hồng Phúc, người bệnh nên bắt đầu bằng việc trao đổi triệu chứng và tiền sử với bác sĩ. Dựa trên kết quả thăm khám, bác sĩ sẽ lựa chọn điện tim, siêu âm tim hoặc các kiểm tra khác phù hợp.",
          "Quá trình đánh giá có thể bao gồm:",
          "Đo huyết áp, mạch và nồng độ oxy.",
          "Khai thác triệu chứng.",
          "Nghe tim và phổi.",
          "Thực hiện điện tim khi cần đánh giá nhịp.",
          "Siêu âm tim khi cần kiểm tra cấu trúc và chức năng.",
          "Xét nghiệm máu hoặc kiểm tra chuyên sâu nếu có chỉ định.",
          "Phối hợp với Nội tổng quát, Tim mạch và Chẩn đoán hình ảnh.",
          "Điều quan trọng không phải là làm càng nhiều kỹ thuật càng tốt. Giá trị của buổi kiểm tra nằm ở việc chọn đúng phương pháp để trả lời đúng vấn đề sức khỏe.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến quy trình khám rõ ràng, giúp người bệnh hiểu mục đích của từng chỉ định và biết bước chăm sóc tiếp theo."
        ]
      },
      {
        "heading": "Điện tim đọc “nhịp”, siêu âm tim nhìn “hình”",
        "paragraphs": [
          "Điện tim và siêu âm tim đều quan trọng nhưng không giống nhau.",
          "Điện tim ghi lại hoạt động điện, đặc biệt hữu ích trong đánh giá nhịp tim và rối loạn dẫn truyền. Siêu âm tim tạo hình ảnh để bác sĩ quan sát cấu trúc, cơ tim, van tim và khả năng bơm máu.",
          "Một kết quả bình thường của phương pháp này không tự động thay thế kết quả của phương pháp kia. Khi có đau ngực, hồi hộp, khó thở, chóng mặt, ngất hoặc giảm khả năng vận động, người bệnh nên được bác sĩ thăm khám trước khi quyết định cần kiểm tra gì.",
          "Bệnh viện Đa khoa Hồng Phúc – Kiểm tra đúng phương pháp, hiểu rõ hoạt động của trái tim, chủ động chăm sóc sức khỏe lâu dài.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "dau-hieu-can-di-kham-tim-mach-som-o-nguoi-tre": {
    "sourceFile": "12.Dấu hiệu cần đi khám tim mạch sớm ở người trẻ.docx",
    "title": "Dấu hiệu cần đi khám tim mạch sớm ở người trẻ",
    "excerpt": "“Còn trẻ thì tim chắc vẫn khỏe” là suy nghĩ khá phổ biến. Thực tế, người trẻ thường có nguy cơ bệnh động mạch vành thấp hơn người lớn tuổi, nhưng vẫn có thể gặp rối loạn nhịp tim, bệnh cơ tim, bệnh van tim, tim bẩm sinh hoặc viêm cơ tim.",
    "intro": [
      "“Còn trẻ thì tim chắc vẫn khỏe” là suy nghĩ khá phổ biến. Thực tế, người trẻ thường có nguy cơ bệnh động mạch vành thấp hơn người lớn tuổi, nhưng vẫn có thể gặp rối loạn nhịp tim, bệnh cơ tim, bệnh van tim, tim bẩm sinh hoặc viêm cơ tim.",
      "Một số vấn đề tim mạch ở người trẻ chỉ gây những biểu hiện khá mơ hồ như nhanh mệt, hồi hộp, hụt hơi hoặc chóng mặt. Những triệu chứng này dễ bị cho là do thiếu ngủ, áp lực công việc, ít vận động hay uống quá nhiều cà phê.",
      "Phần lớn các cơn hồi hộp hoặc mệt mỏi thoáng qua không đồng nghĩa với bệnh tim nguy hiểm. Tuy nhiên, nếu triệu chứng xuất hiện khi vận động, thường xuyên tái diễn, làm giảm khả năng sinh hoạt hoặc đi kèm ngất, đau ngực và khó thở, người trẻ nên đi khám tim mạch sớm.",
      "Người trẻ có thể mắc những bệnh tim mạch nào?",
      "Bệnh tim mạch không chỉ là nhồi máu cơ tim hoặc xơ vữa động mạch. Ở người trẻ, bác sĩ có thể cần xem xét nhiều nhóm vấn đề khác nhau như:",
      "Rối loạn nhịp tim.",
      "Bệnh cơ tim phì đại hoặc bệnh cơ tim giãn.",
      "Viêm cơ tim.",
      "Viêm màng ngoài tim.",
      "Bệnh van tim.",
      "Tăng huyết áp.",
      "Bệnh tim bẩm sinh được phát hiện muộn.",
      "Một số rối loạn dẫn truyền điện có tính di truyền.",
      "Biến chứng tim mạch liên quan đến bệnh nền hoặc thuốc đang sử dụng.",
      "Rối loạn nhịp có thể biểu hiện bằng tim đập nhanh, chậm, bỏ nhịp, hồi hộp, chóng mặt, khó thở hoặc ngất. Trong khi đó, bệnh cơ tim phì đại ở người trẻ có thể gây đau ngực khi gắng sức, hụt hơi, mệt, đánh trống ngực và ngất.",
      "Điều này không có nghĩa người trẻ cần làm hàng loạt xét nghiệm tim mạch mỗi năm. Việc kiểm tra nên dựa trên triệu chứng, tiền sử gia đình, kết quả khám và mức độ nguy cơ của từng người.",
      "1. Đau hoặc tức ngực, đặc biệt khi vận động",
      "Đau ngực ở người trẻ thường có thể liên quan đến cơ thành ngực, trào ngược dạ dày, căng thẳng hoặc viêm đường hô hấp. Tuy nhiên, không nên mặc định mọi cơn đau đều vô hại chỉ vì người bệnh còn trẻ.",
      "Người trẻ nên đi khám sớm nếu cơn đau:",
      "Xuất hiện khi chạy, đá bóng, tập gym hoặc leo cầu thang.",
      "Có cảm giác đè nặng, siết chặt hoặc bóp nghẹt.",
      "Lan đến vai, cánh tay, cổ, hàm hoặc lưng.",
      "Kéo dài nhiều phút hoặc thường xuyên tái diễn.",
      "Đi kèm khó thở, hồi hộp, vã mồ hôi hoặc choáng váng.",
      "Làm người bệnh phải dừng hoạt động đang thực hiện.",
      "Xuất hiện sau một đợt sốt hoặc nhiễm trùng.",
      "Đau ngực khi gắng sức có thể gặp trong bệnh cơ tim phì đại và một số bệnh lý tim khác. Đau ngực dữ dội hoặc kèm khó thở, buồn nôn, vã mồ hôi, chóng mặt cần được đánh giá khẩn cấp, bất kể tuổi tác.",
      "Đau tăng khi ấn vào thành ngực hoặc thay đổi theo cử động có thể nghiêng nhiều hơn về nguyên nhân cơ xương, nhưng không đủ để tự loại trừ bệnh tim nếu đồng thời có những dấu hiệu cảnh báo.",
      "2. Tim đập nhanh, bỏ nhịp hoặc hồi hộp thường xuyên",
      "Hồi hộp là cảm giác tim đập mạnh, rung, chạy nhanh hoặc như bị “hẫng” một nhịp. Triệu chứng có thể xuất hiện thoáng qua khi căng thẳng, thiếu ngủ, vận động hoặc sử dụng chất kích thích.",
      "Người trẻ nên đi khám nếu:",
      "Hồi hộp thường xuyên tái diễn.",
      "Cơn kéo dài hoặc xuất hiện đột ngột không rõ lý do.",
      "Nhịp tim rất nhanh dù đang nghỉ.",
      "Cảm giác tim đập không đều.",
      "Cơn hồi hộp xuất hiện khi vận động.",
      "Triệu chứng làm người bệnh phải ngồi hoặc nằm xuống.",
      "Đi kèm đau ngực, khó thở, chóng mặt hoặc ngất.",
      "Gia đình có người mắc rối loạn nhịp hoặc đột tử sớm.",
      "Rối loạn nhịp có thể không gây triệu chứng, nhưng khi có biểu hiện, người bệnh có thể cảm thấy tim đập nhanh hoặc chậm, bỏ nhịp, đau ngực, chóng mặt, ngất, khó thở và mệt yếu. Điện tâm đồ là một trong những phương pháp thường được sử dụng để ghi nhận hoạt động điện của tim.",
      "Một điện tâm đồ lúc nghỉ bình thường chưa chắc loại trừ được rối loạn nhịp xuất hiện từng cơn. Nếu triệu chứng đến rồi đi, bác sĩ có thể cân nhắc Holter điện tim hoặc thiết bị theo dõi trong thời gian dài hơn.",
      "3. Ngất hoặc gần ngất",
      "Ngất có thể xảy ra do đứng lâu, mất nước, đói, căng thẳng hoặc phản xạ của hệ thần kinh. Tuy nhiên, trong một số trường hợp, ngất có thể liên quan đến rối loạn nhịp hoặc bệnh cấu trúc của tim.",
      "Những đặc điểm cần đặc biệt lưu ý gồm:",
      "Ngất khi đang chạy, tập luyện hoặc thi đấu.",
      "Ngất khi đang nằm.",
      "Đột ngột mất ý thức mà không có dấu hiệu báo trước.",
      "Ngất sau một cơn hồi hộp hoặc đau ngực.",
      "Ngất nhiều lần.",
      "Sau tỉnh vẫn đau ngực, khó thở hoặc lú lẫn.",
      "Gia đình có người đột tử khi còn trẻ.",
      "Người bệnh đã biết có bệnh tim bẩm sinh hoặc bệnh cơ tim.",
      "Hiệp hội Tim mạch Hoa Kỳ xác định ngất khi gắng sức, ngất khi nằm, hồi hộp ngay trước khi mất ý thức và tiền sử gia đình đột tử sớm là những yếu tố làm tăng nghi ngờ nguyên nhân tim mạch. Người từng ngất nên được đánh giá ban đầu bằng khai thác bệnh sử, khám lâm sàng, đo huyết áp, nhịp tim và điện tâm đồ.",
      "Người trẻ bị ngất khi tập thể thao không nên lập tức quay lại vận động cường độ cao chỉ vì đã tỉnh và cảm thấy bình thường. Cần được bác sĩ đánh giá trước khi tiếp tục thi đấu hoặc tập nặng.",
      "4. Khó thở hoặc hụt hơi không tương xứng với mức vận động",
      "Hụt hơi sau khi chạy nhanh hoặc tập nặng là phản ứng bình thường. Điều đáng lưu ý là khi khả năng vận động giảm rõ so với trước đây.",
      "Ví dụ:",
      "Trước đây có thể leo vài tầng cầu thang nhưng nay phải dừng nghỉ.",
      "Đi bộ cùng bạn bè nhưng thường xuyên bị tụt lại.",
      "Khó thở khi tập ở cường độ từng thực hiện dễ dàng.",
      "Cảm thấy không hít đủ không khí dù chỉ vận động nhẹ.",
      "Khó thở khi nằm hoặc phải kê cao gối để dễ ngủ.",
      "Thức giấc ban đêm vì cảm giác thiếu hơi.",
      "Khó thở kèm hồi hộp, đau ngực, chóng mặt hoặc phù chân.",
      "Khó thở có thể liên quan đến hen, thiếu máu, bệnh phổi, thể lực kém hoặc lo âu. Tuy nhiên, đây cũng là triệu chứng có thể gặp trong bệnh cơ tim, bệnh van tim, rối loạn nhịp và suy giảm khả năng bơm máu của tim.",
      "Nếu khó thở xuất hiện đột ngột, tăng nhanh, kèm đau ngực, tím tái hoặc ngất, người bệnh cần được cấp cứu thay vì chờ đặt lịch khám thông thường.",
      "5. Nhanh mệt hoặc giảm khả năng tập luyện rõ rệt",
      "Mệt mỏi rất phổ biến ở người trẻ và có thể xuất phát từ thiếu ngủ, làm việc quá sức, dinh dưỡng chưa phù hợp, thiếu máu hoặc căng thẳng tinh thần.",
      "Tuy nhiên, nên đi khám nếu:",
      "Mệt kéo dài dù đã nghỉ ngơi đầy đủ.",
      "Khả năng tập luyện giảm rõ trong thời gian ngắn.",
      "Thường xuyên phải dừng lại vì hụt hơi hoặc tim đập quá nhanh.",
      "Mệt đi kèm chóng mặt, đau ngực hoặc ngất.",
      "Chân tay lạnh, da nhợt hoặc tím môi.",
      "Mệt xuất hiện sau một đợt nhiễm trùng.",
      "Người bệnh cảm thấy “khác hẳn thể trạng trước đây”.",
      "Bệnh cơ tim, bệnh van tim và suy giảm khả năng bơm máu có thể làm người bệnh mệt, yếu và không duy trì được mức hoạt động thông thường. Triệu chứng đôi khi tiến triển từ từ nên người trẻ dễ thích nghi và không nhận ra mình đang vận động ít dần.",
      "Bác sĩ cần kết hợp khám tim mạch với những nguyên nhân khác như thiếu máu, rối loạn tuyến giáp, bệnh hô hấp hoặc dinh dưỡng để xác định hướng kiểm tra phù hợp.",
      "6. Chóng mặt thường xuyên, đặc biệt khi vận động",
      "Chóng mặt có thể liên quan đến mất nước, hạ đường huyết, rối loạn tiền đình, huyết áp thấp hoặc lo âu. Tuy nhiên, rối loạn nhịp tim và một số bệnh tim cấu trúc cũng có thể làm lượng máu lên não giảm tạm thời.",
      "Người trẻ nên khám tim mạch nếu chóng mặt:",
      "Xuất hiện khi chạy hoặc tập luyện.",
      "Đi kèm tim đập nhanh hoặc không đều.",
      "Có cảm giác sắp ngất.",
      "Kèm đau ngực hoặc khó thở.",
      "Xảy ra đột ngột không rõ nguyên nhân.",
      "Thường xuyên tái diễn.",
      "Có tiền sử gia đình mắc bệnh cơ tim hoặc đột tử.",
      "Chóng mặt và gần ngất là những triệu chứng có thể gặp trong rối loạn nhịp, bệnh cơ tim phì đại và bệnh van tim. Đặc biệt, nếu triệu chứng xuất hiện khi gắng sức, người bệnh không nên tiếp tục cố tập để “xem có quen dần không”.",
      "7. Đau ngực, khó thở hoặc tim nhanh sau một đợt nhiễm trùng",
      "Sau khi sốt, cảm cúm hoặc nhiễm trùng, cơ thể có thể cần một khoảng thời gian để hồi phục. Tuy nhiên, người trẻ nên lưu ý nếu sau đợt bệnh xuất hiện:",
      "Đau hoặc nặng ngực.",
      "Tim đập nhanh kéo dài dù đang nghỉ.",
      "Khó thở khi vận động nhẹ.",
      "Mệt bất thường.",
      "Phù chân.",
      "Choáng hoặc ngất.",
      "Khả năng tập luyện giảm đột ngột.",
      "Đây có thể là các biểu hiện liên quan đến viêm cơ tim. Tình trạng này có thể không gây triệu chứng, giống một đợt cúm hoặc biểu hiện bằng đau ngực, sốt, khó thở, nhịp tim nhanh, phù chân và ngất do rối loạn nhịp.",
      "Không nên cố quay lại tập luyện cường độ cao khi cơ thể vẫn còn đau ngực, hồi hộp hoặc hụt hơi sau nhiễm trùng. Người bệnh cần được thăm khám để xác định triệu chứng xuất phát từ tim, phổi hay quá trình phục hồi thông thường.",
      "8. Phù chân hoặc tăng cân nhanh không rõ nguyên nhân",
      "Phù chân ở người trẻ có thể liên quan đến việc đứng lâu, ăn mặn, chấn thương, bệnh thận, bệnh gan hoặc một số loại thuốc.",
      "Dấu hiệu cần được kiểm tra gồm:",
      "Phù cả hai bàn chân hoặc mắt cá chân.",
      "Phù tăng dần về cuối ngày.",
      "Ấn vào da để lại vết lõm.",
      "Tăng cân nhanh trong vài ngày.",
      "Phù kèm khó thở.",
      "Bụng căng hơn hoặc quần áo chật bất thường.",
      "Khó thở khi nằm.",
      "Mệt và giảm khả năng vận động.",
      "Khi tim không bơm máu hiệu quả, dịch có thể tích tụ trong các mô, gây phù bàn chân, mắt cá, chân hoặc vùng bụng. Phù kèm khó thở, mệt và tim đập nhanh cần được đánh giá sớm.",
      "Không nên tự uống thuốc lợi tiểu hoặc thuốc “thải nước” khi chưa xác định nguyên nhân.",
      "9. Huyết áp hoặc nhịp tim thường xuyên bất thường",
      "Một lần đo huyết áp cao sau khi chạy, uống cà phê, mất ngủ hoặc căng thẳng chưa đủ để kết luận tăng huyết áp. Nhịp tim cũng thay đổi theo vận động, cảm xúc, nhiệt độ và tình trạng sức khỏe.",
      "Người trẻ nên đi khám nếu:",
      "Huyết áp cao lặp lại trong nhiều lần đo đúng kỹ thuật.",
      "Nhịp tim lúc nghỉ thường xuyên nhanh bất thường.",
      "Nhịp quá chậm kèm mệt, chóng mặt hoặc ngất.",
      "Máy đo nhiều lần báo nhịp không đều.",
      "Huyết áp tăng kèm đau đầu dữ dội, đau ngực hoặc khó thở.",
      "Đang sử dụng thuốc nhưng huyết áp vẫn khó kiểm soát.",
      "Huyết áp cao xuất hiện khi còn rất trẻ.",
      "Bác sĩ có thể kiểm tra lại kỹ thuật đo, đánh giá thiết bị, yêu cầu theo dõi tại nhà hoặc sử dụng máy đo huyết áp 24 giờ. Với nhịp bất thường, điện tâm đồ, Holter điện tim và xét nghiệm tìm nguyên nhân như bệnh tuyến giáp hoặc rối loạn điện giải có thể được cân nhắc.",
      "10. Gia đình có người mắc bệnh tim hoặc đột tử khi còn trẻ",
      "Đây là yếu tố rất quan trọng nhưng thường bị bỏ qua. Người trẻ nên chủ động trao đổi với bác sĩ nếu cha mẹ, anh chị em ruột hoặc họ hàng gần từng:",
      "Đột tử không rõ nguyên nhân.",
      "Ngừng tim khi đang tập thể thao.",
      "Qua đời trong lúc ngủ khi còn trẻ.",
      "Được chẩn đoán bệnh cơ tim phì đại.",
      "Mắc bệnh cơ tim giãn.",
      "Có rối loạn nhịp di truyền.",
      "Được đặt máy tạo nhịp hoặc máy khử rung khi còn trẻ.",
      "Nhồi máu cơ tim hoặc suy tim sớm.",
      "Có dị tật tim bẩm sinh.",
      "Thường xuyên ngất chưa rõ nguyên nhân.",
      "Bệnh cơ tim phì đại có thể mang tính di truyền. Khi một người trong gia đình được chẩn đoán, cha mẹ, anh chị em và con cái có thể được khuyến nghị kiểm tra. Tiền sử gia đình mắc bệnh cơ tim, ngừng tim hoặc đột tử là thông tin quan trọng giúp bác sĩ nhận diện nguy cơ sớm hơn.",
      "Nếu có thể, người bệnh nên ghi lại tên bệnh, độ tuổi khi người thân được chẩn đoán hoặc qua đời và các kết quả xét nghiệm di truyền đã thực hiện.",
      "11. Được phát hiện có tiếng thổi tim hoặc điện tim bất thường",
      "Tiếng thổi tim là âm thanh xuất hiện khi máu đi qua tim và được bác sĩ nghe bằng ống nghe. Một số tiếng thổi lành tính có thể gặp ở người trẻ khỏe mạnh, nhưng một số khác liên quan đến bệnh van tim hoặc bất thường cấu trúc.",
      "Người trẻ nên khám chuyên khoa nếu:",
      "Bác sĩ phát hiện tiếng thổi chưa được đánh giá.",
      "Từng được thông báo điện tim bất thường.",
      "Siêu âm trước đây phát hiện vấn đề nhưng chưa theo dõi.",
      "Có tiếng thổi kèm khó thở, đau ngực, hồi hộp hoặc ngất.",
      "Được khuyến nghị kiểm tra lại nhưng đã bỏ tái khám.",
      "Bệnh van tim đôi khi không gây triệu chứng hoặc triệu chứng không phản ánh chính xác mức độ nghiêm trọng. Khi có đau ngực, hồi hộp, khó thở, nhanh mệt, chóng mặt, ngất hoặc phù, người bệnh cần trao đổi với bác sĩ.",
      "12. Có bệnh tim bẩm sinh nhưng đã ngừng theo dõi",
      "Một số người được phát hiện bệnh tim bẩm sinh từ nhỏ, đã phẫu thuật hoặc can thiệp và cảm thấy sức khỏe bình thường khi trưởng thành. Tuy nhiên, điều trị thời thơ ấu không phải lúc nào cũng có nghĩa người bệnh không cần theo dõi thêm.",
      "Người có tiền sử tim bẩm sinh nên tái khám nếu:",
      "Đã nhiều năm chưa kiểm tra.",
      "Xuất hiện hồi hộp hoặc rối loạn nhịp.",
      "Khó thở hoặc nhanh mệt hơn.",
      "Ngất hoặc chóng mặt.",
      "Môi, đầu ngón tay có màu tím bất thường.",
      "Phù chân.",
      "Chuẩn bị mang thai.",
      "Muốn bắt đầu tập luyện hoặc thi đấu cường độ cao.",
      "Dị tật tim bẩm sinh ảnh hưởng đến cấu trúc và hoạt động của tim, đồng thời có thể cần chăm sóc chuyên khoa trong suốt cuộc đời. Người trưởng thành có bệnh tim bẩm sinh cũng có nguy cơ gặp các vấn đề tim mạch như rối loạn nhịp hoặc suy tim.",
      "Người bệnh không nên chỉ dựa vào cảm giác khỏe để tự kết luận tình trạng đã ổn định lâu dài.",
      "Người tập gym hoặc chơi thể thao cần đặc biệt chú ý dấu hiệu nào?",
      "Tập luyện đều đặn nhìn chung mang lại lợi ích cho tim mạch. Tuy nhiên, vận động có thể làm bộc lộ triệu chứng của một số bệnh tim chưa được phát hiện.",
      "Người tập thể thao nên dừng buổi tập và đi kiểm tra nếu xuất hiện:",
      "Đau hoặc tức ngực khi gắng sức.",
      "Ngất hoặc gần ngất.",
      "Tim đập nhanh bất thường.",
      "Khó thở vượt quá mức thông thường.",
      "Chóng mặt, mất thăng bằng.",
      "Khả năng vận động giảm đột ngột.",
      "Mệt khác thường kéo dài sau tập.",
      "Triệu chứng xuất hiện sau một đợt nhiễm trùng.",
      "Tiền sử gia đình đột tử hoặc bệnh cơ tim.",
      "Bệnh cơ tim phì đại ở người trẻ có thể gây đau ngực, khó thở, hồi hộp, chóng mặt và ngất, đặc biệt trong lúc vận động. Những người có triệu chứng hoặc tiền sử gia đình liên quan cần được đánh giá trước khi tiếp tục tập luyện cường độ cao.",
      "Người trẻ không nên dùng việc “vẫn nâng được tạ” hoặc “vẫn chạy được vài kilômét” để tự chứng minh tim hoàn toàn khỏe.",
      "Căng thẳng có thể gây hồi hộp và đau ngực không?",
      "Có. Lo âu, thiếu ngủ và căng thẳng có thể làm nhịp tim tăng, gây tức ngực, thở nhanh hoặc cảm giác hồi hộp.",
      "Tuy nhiên, không nên tự kết luận mọi triệu chứng là do tâm lý khi:",
      "Triệu chứng xuất hiện trong lúc vận động.",
      "Có ngất hoặc gần ngất.",
      "Cơn hồi hộp kéo dài.",
      "Đau ngực kèm khó thở.",
      "Khả năng vận động giảm.",
      "Có tiền sử gia đình đột tử.",
      "Triệu chứng mới xuất hiện và ngày càng tăng.",
      "Bác sĩ có thể vừa đánh giá nguyên nhân tim mạch, vừa xem xét sức khỏe tinh thần, thiếu máu, tuyến giáp, giấc ngủ và những yếu tố khác. Hai nhóm nguyên nhân này cũng có thể xuất hiện cùng lúc.",
      "Khi nào người trẻ cần cấp cứu ngay?",
      "Người bệnh cần gọi cấp cứu 115 hoặc đến cơ sở y tế ngay nếu có:",
      "Đau hoặc đè nặng giữa ngực kéo dài nhiều phút.",
      "Đau lan ra tay, vai, cổ, hàm hoặc lưng.",
      "Đau ngực kèm khó thở, vã mồ hôi hoặc buồn nôn.",
      "Tim đập rất nhanh hoặc không đều kèm đau ngực.",
      "Ngất khi vận động.",
      "Đột ngột mất ý thức.",
      "Khó thở dữ dội hoặc tím tái.",
      "Co giật sau khi ngất.",
      "Đau ngực dữ dội sau một đợt nhiễm trùng.",
      "Người đang vận động đột ngột ngã quỵ và không phản ứng.",
      "Triệu chứng nhồi máu cơ tim có thể bắt đầu bằng cảm giác đè ép, đầy hoặc đau giữa ngực, khó thở, đau lan lên phần trên cơ thể, vã mồ hôi, buồn nôn, nhịp tim bất thường và choáng váng. Dù nhồi máu cơ tim ít phổ biến hơn ở người trẻ, dấu hiệu nghi ngờ vẫn cần được xử trí khẩn cấp.",
      "Nếu một người bất tỉnh, không phản ứng và không thở bình thường, những người xung quanh cần gọi cấp cứu ngay, thực hiện hồi sinh tim phổi nếu đã được hướng dẫn và sử dụng máy khử rung tự động nếu có.",
      "Khám tim mạch ở người trẻ thường gồm những gì?",
      "Buổi khám thường bắt đầu từ việc bác sĩ tìm hiểu:",
      "Triệu chứng xuất hiện khi nào.",
      "Có liên quan đến vận động hay không.",
      "Mỗi cơn kéo dài bao lâu.",
      "Nhịp tim có nhanh hoặc không đều không.",
      "Có ngất hoặc gần ngất không.",
      "Người bệnh đang dùng thuốc hoặc sản phẩm bổ sung nào.",
      "Mức sử dụng cà phê, nước tăng lực, nicotine hoặc chất kích thích.",
      "Có vừa mắc bệnh nhiễm trùng không.",
      "Tiền sử gia đình về bệnh tim và đột tử.",
      "Mức độ tập luyện hiện tại.",
      "Bác sĩ có thể kiểm tra huyết áp, mạch, nồng độ oxy, nghe tim phổi và đánh giá dấu hiệu phù.",
      "Tùy từng trường hợp, những kiểm tra có thể được chỉ định gồm:",
      "Điện tâm đồ.",
      "Siêu âm tim.",
      "Holter điện tim.",
      "Xét nghiệm máu.",
      "Xét nghiệm men tim khi nghi ngờ tổn thương cơ tim.",
      "Nghiệm pháp gắng sức.",
      "Theo dõi huyết áp 24 giờ.",
      "Cộng hưởng từ tim.",
      "Đánh giá di truyền trong một số gia đình có nguy cơ.",
      "Người trẻ bị ngất có thể cần điện tâm đồ, Holter, siêu âm tim hoặc nghiệm pháp gắng sức tùy đặc điểm cơn ngất. Với viêm cơ tim, bác sĩ có thể sử dụng điện tâm đồ, siêu âm tim, xét nghiệm máu và cộng hưởng từ tim để hỗ trợ chẩn đoán.",
      "Không phải ai cũng cần làm toàn bộ danh mục. Việc lựa chọn phụ thuộc vào triệu chứng và kết quả đánh giá ban đầu.",
      "Cần chuẩn bị gì trước khi đi khám?",
      "Để buổi khám hiệu quả hơn, người bệnh nên chuẩn bị:",
      "Kết quả điện tim, siêu âm tim hoặc xét nghiệm trước đây.",
      "Danh sách thuốc và thực phẩm bổ sung đang dùng.",
      "Nhật ký nhịp tim hoặc dữ liệu từ đồng hồ thông minh, nếu có.",
      "Thời điểm xuất hiện triệu chứng.",
      "Mức độ vận động khi triệu chứng bắt đầu.",
      "Thời gian kéo dài của mỗi cơn.",
      "Triệu chứng đi kèm.",
      "Tiền sử bệnh của người thân.",
      "Thông tin về những lần từng ngất.",
      "Mức sử dụng cà phê, nước tăng lực, thuốc lá hoặc sản phẩm hỗ trợ tập luyện.",
      "Thiết bị đeo tay có thể cung cấp thông tin tham khảo nhưng không thay thế điện tâm đồ y tế hoặc chẩn đoán của bác sĩ. Người bệnh nên mang theo dữ liệu nhưng không tự kết luận chỉ dựa trên cảnh báo của thiết bị."
    ],
    "sections": [
      {
        "heading": "Khám Tim mạch tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, người trẻ có triệu chứng nghi ngờ tim mạch có thể được bác sĩ đánh giá dựa trên bệnh sử, hoạt động thể lực, tiền sử gia đình và những yếu tố nguy cơ cụ thể.",
          "Tùy tình trạng, quá trình thăm khám có thể bao gồm:",
          "Kiểm tra huyết áp, mạch và nồng độ oxy.",
          "Khám tim, phổi và hệ tuần hoàn.",
          "Thực hiện điện tâm đồ khi cần đánh giá nhịp tim.",
          "Siêu âm tim khi cần kiểm tra cấu trúc và khả năng co bóp.",
          "Theo dõi Holter nếu triệu chứng xuất hiện từng cơn.",
          "Xét nghiệm tìm những nguyên nhân liên quan.",
          "Phối hợp với Nội tổng quát, Nội tiết, Hô hấp hoặc chuyên khoa khác.",
          "Tư vấn mức độ vận động phù hợp trong thời gian chờ kết quả.",
          "Lợi thế của mô hình bệnh viện đa khoa là người bệnh có thể được đánh giá đồng thời nhiều nguyên nhân. Hồi hộp và mệt mỏi không chỉ liên quan đến tim mà còn có thể gặp trong thiếu máu, bệnh tuyến giáp, rối loạn giấc ngủ hoặc bệnh hô hấp.",
          "Được thành lập từ năm 2011 và tọa lạc tại số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng, Bệnh viện Đa khoa Hồng Phúc hướng đến giúp người trẻ tiếp cận việc kiểm tra tim mạch theo cách rõ ràng, phù hợp và không thực hiện xét nghiệm tràn lan."
        ]
      },
      {
        "heading": "Trẻ không có nghĩa là có thể bỏ qua mọi tín hiệu của tim",
        "paragraphs": [
          "Một cơn hồi hộp thoáng qua hoặc cảm giác mệt sau đêm thiếu ngủ thường không phải dấu hiệu của bệnh tim nghiêm trọng. Nhưng người trẻ không nên chủ quan khi triệu chứng tái diễn, xuất hiện lúc vận động hoặc đi cùng đau ngực, khó thở, chóng mặt và ngất.",
          "Đặc biệt, ngất khi tập luyện và tiền sử gia đình đột tử khi còn trẻ là những thông tin cần được trao đổi với bác sĩ sớm.",
          "Khám tim mạch không nhằm ngăn người trẻ vận động hay khiến mọi người lo lắng quá mức. Mục tiêu là xác định triệu chứng có đáng ngại hay không, phát hiện vấn đề nếu có và giúp người bệnh tiếp tục học tập, làm việc, tập luyện một cách an toàn hơn.",
          "Bệnh viện Đa khoa Hồng Phúc – Lắng nghe tín hiệu của trái tim, kiểm tra đúng lúc, an tâm sống khỏe ở mọi độ tuổi.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "tam-soat-ung-thu-nen-bat-dau-tu-do-tuoi-nao": {
    "sourceFile": "13.Tầm soát ung thư nên bắt đầu từ độ tuổi nào.docx",
    "title": "Tầm soát ung thư nên bắt đầu từ độ tuổi nào?",
    "excerpt": "Ung thư có thể xuất hiện ở nhiều độ tuổi, nhưng điều đó không có nghĩa ai cũng cần thực hiện tất cả xét nghiệm tầm soát ngay từ khi còn trẻ. Mỗi loại ung thư có nhóm nguy cơ, phương pháp kiểm tra và thời điểm bắt đầu khác nhau.",
    "intro": [
      "Ung thư có thể xuất hiện ở nhiều độ tuổi, nhưng điều đó không có nghĩa ai cũng cần thực hiện tất cả xét nghiệm tầm soát ngay từ khi còn trẻ. Mỗi loại ung thư có nhóm nguy cơ, phương pháp kiểm tra và thời điểm bắt đầu khác nhau.",
      "Nói một cách dễ hiểu, không có một độ tuổi chung dành cho mọi loại tầm soát ung thư. Với người có nguy cơ trung bình, một số chương trình bắt đầu từ tuổi 21–25, một số bắt đầu ở tuổi 40–45, trong khi nhiều loại ung thư chỉ nên được tầm soát ở nhóm có nguy cơ cao.",
      "Tầm soát ung thư là gì?",
      "Tầm soát ung thư là việc sử dụng các phương pháp kiểm tra ở người chưa có triệu chứng rõ ràng, nhằm phát hiện tổn thương tiền ung thư hoặc ung thư ở giai đoạn sớm. Tầm soát khác với chẩn đoán: khi một người đã có triệu chứng bất thường, bác sĩ sẽ chỉ định quy trình khám và xét nghiệm chẩn đoán, thay vì chỉ thực hiện một gói tầm soát thông thường.",
      "Phát hiện sớm có thể giúp người bệnh có thêm lựa chọn điều trị và cải thiện kết quả điều trị. Tuy nhiên, tầm soát không phải cứ làm càng nhiều càng tốt. Mỗi phương pháp đều có thể xuất hiện kết quả dương tính giả, âm tính giả hoặc phát hiện những bất thường không gây hại nhưng lại dẫn đến kiểm tra thêm. Vì vậy, tầm soát cần đúng người, đúng thời điểm và đúng phương pháp.",
      "Vậy nên bắt đầu tầm soát ung thư từ bao nhiêu tuổi?",
      "Câu trả lời phụ thuộc vào ba yếu tố chính:",
      "Loại ung thư cần tầm soát.",
      "Giới tính và tình trạng sức khỏe.",
      "Nguy cơ cá nhân như tiền sử gia đình, hút thuốc, viêm gan, tổn thương tiền ung thư hoặc đột biến gene di truyền.",
      "Đối với người khỏe mạnh, không có triệu chứng và không thuộc nhóm nguy cơ cao, có thể tham khảo các mốc tuổi dưới đây."
    ],
    "sections": [
      {
        "heading": "Từ 20 đến 29 tuổi: chú ý tầm soát ung thư cổ tử cung",
        "paragraphs": [
          "Ở độ tuổi 20, phần lớn mọi người chưa cần thực hiện một “gói tầm soát toàn thân”. Việc quan trọng hơn là đánh giá tiền sử gia đình, tiêm phòng phù hợp, xây dựng lối sống lành mạnh và bắt đầu tầm soát ung thư cổ tử cung theo hướng dẫn."
        ]
      },
      {
        "heading": "Tầm soát ung thư cổ tử cung",
        "paragraphs": [
          "Các hướng dẫn hiện hành có sự khác nhau nhỏ về thời điểm bắt đầu:",
          "Một số hướng dẫn khuyến nghị xét nghiệm tế bào cổ tử cung, thường gọi là Pap test, từ 21 tuổi.",
          "Hướng dẫn của Hiệp hội Ung thư Hoa Kỳ khuyến nghị bắt đầu từ 25 tuổi, ưu tiên xét nghiệm HPV định kỳ.",
          "Nhìn chung, phụ nữ hoặc người có cổ tử cung nên trao đổi với bác sĩ về tầm soát trong khoảng 21–25 tuổi, tùy phương pháp xét nghiệm, tiền sử sức khỏe và hướng dẫn đang được áp dụng. Việc đã kết hôn hay chưa không phải là yếu tố duy nhất quyết định có cần tầm soát hay không.",
          "Người đã cắt toàn bộ tử cung và cổ tử cung vì nguyên nhân lành tính hoặc người trên 65 tuổi đã được tầm soát đầy đủ trước đó có thể không cần tiếp tục. Tuy nhiên, quyết định này cần dựa trên hồ sơ khám và đánh giá của bác sĩ."
        ]
      },
      {
        "heading": "Từ 30 đến 39 tuổi: tiếp tục tầm soát theo nguy cơ",
        "paragraphs": [
          "Trong độ tuổi này, tầm soát ung thư cổ tử cung vẫn cần được duy trì đúng lịch. Tùy phương pháp, bác sĩ có thể chỉ định:",
          "Pap test định kỳ.",
          "Xét nghiệm HPV nguy cơ cao.",
          "Kết hợp HPV và Pap test.",
          "Khoảng cách giữa các lần kiểm tra có thể từ 3 đến 5 năm nếu kết quả bình thường, tùy loại xét nghiệm. Không nên tự quyết định kéo dài lịch kiểm tra khi từng có HPV nguy cơ cao, tổn thương tiền ung thư hoặc kết quả xét nghiệm bất thường.",
          "Phụ nữ dưới 40 tuổi có nguy cơ ung thư vú trung bình thường chưa cần chụp nhũ ảnh định kỳ. Tuy nhiên, người có mẹ, chị em gái hoặc con gái mắc ung thư vú khi còn trẻ, mang đột biến gene liên quan ung thư hoặc từng chiếu xạ vùng ngực có thể cần được theo dõi sớm hơn bằng phương pháp chuyên biệt."
        ]
      },
      {
        "heading": "Tầm soát ung thư vú",
        "paragraphs": [
          "Với phụ nữ có nguy cơ trung bình, mốc 40 tuổi là thời điểm phù hợp để trao đổi với bác sĩ về chụp nhũ ảnh. Khuyến nghị của Lực lượng Đặc nhiệm Dịch vụ Dự phòng Hoa Kỳ năm 2024 đề xuất chụp nhũ ảnh hai năm một lần cho phụ nữ từ 40 đến 74 tuổi.",
          "Lịch kiểm tra thực tế có thể là một hoặc hai năm một lần, tùy tuổi, mô tuyến vú, kết quả lần khám trước và nguy cơ cá nhân.",
          "Không nên đợi đến tuổi tầm soát nếu xuất hiện các dấu hiệu như:",
          "Sờ thấy khối bất thường ở vú hoặc nách.",
          "Núm vú tụt vào trong mới xuất hiện.",
          "Chảy dịch núm vú, nhất là dịch có máu.",
          "Da vú lõm, dày hoặc thay đổi giống vỏ cam.",
          "Một bên vú thay đổi hình dạng bất thường.",
          "Khi đã có những biểu hiện này, người bệnh cần đi khám để được chẩn đoán, thay vì chỉ đăng ký một gói kiểm tra định kỳ."
        ]
      },
      {
        "heading": "Từ 45 tuổi: bắt đầu tầm soát ung thư đại trực tràng",
        "paragraphs": [
          "Người có nguy cơ trung bình nên bắt đầu tầm soát ung thư đại trực tràng từ 45 tuổi. Việc tầm soát thường được tiếp tục đến khoảng 75 tuổi nếu sức khỏe còn phù hợp. Từ 76 đến 85 tuổi, quyết định có tiếp tục hay không cần dựa trên sức khỏe tổng thể, tiền sử tầm soát và mong muốn của từng người.",
          "Các phương pháp có thể gồm:",
          "Xét nghiệm tìm máu ẩn trong phân.",
          "Xét nghiệm phân chuyên biệt.",
          "Nội soi đại tràng.",
          "Một số phương pháp quan sát hoặc xét nghiệm khác theo chỉ định.",
          "Nội soi đại tràng có ưu điểm là vừa quan sát niêm mạc đại tràng, vừa có thể phát hiện và loại bỏ một số polyp trước khi chúng tiến triển. Tần suất thực hiện phụ thuộc vào phương pháp được lựa chọn và kết quả của lần kiểm tra trước.",
          "Người có người thân trực hệ mắc ung thư đại trực tràng, có polyp đại tràng, bệnh viêm ruột mạn tính hoặc hội chứng ung thư di truyền có thể cần bắt đầu sớm hơn tuổi 45."
        ]
      },
      {
        "heading": "Tầm soát ung thư phổi",
        "paragraphs": [
          "Không phải tất cả người trên 50 tuổi đều cần chụp CT phổi. Tầm soát ung thư phổi chủ yếu dành cho người có tiền sử hút thuốc đáng kể.",
          "Một nhóm thường được khuyến nghị chụp CT ngực liều thấp hằng năm là người:",
          "Từ 50 đến 80 tuổi.",
          "Có tiền sử hút thuốc từ 20 “gói-năm” trở lên.",
          "Đang hút thuốc hoặc đã bỏ thuốc chưa quá 15 năm.",
          "Một gói-năm tương đương hút trung bình một gói thuốc mỗi ngày trong một năm. Ví dụ, hút một gói mỗi ngày trong 20 năm hoặc hai gói mỗi ngày trong 10 năm đều tương đương 20 gói-năm.",
          "X-quang ngực thông thường không thay thế CT liều thấp trong chương trình tầm soát dành cho nhóm nguy cơ cao. Người chưa từng hút thuốc hoặc có nguy cơ thấp không nên tự chụp CT phổi định kỳ chỉ để “kiểm tra cho chắc”, bởi phương pháp này có thể phát hiện các nốt lành tính và dẫn đến nhiều lần theo dõi không cần thiết."
        ]
      },
      {
        "heading": "Tầm soát ung thư tuyến tiền liệt",
        "paragraphs": [
          "Tầm soát ung thư tuyến tiền liệt không phải là xét nghiệm bắt buộc cho mọi nam giới. Trước khi làm xét nghiệm PSA, người bệnh nên trao đổi với bác sĩ về lợi ích, giới hạn và khả năng phải làm thêm thủ thuật nếu kết quả bất thường.",
          "Các mốc tham khảo thường được sử dụng là:",
          "50 tuổi đối với nam giới có nguy cơ trung bình.",
          "45 tuổi nếu có nguy cơ cao, chẳng hạn cha hoặc anh em trai mắc bệnh khi còn trẻ.",
          "Khoảng 40 tuổi nếu có nhiều người thân trực hệ mắc ung thư tuyến tiền liệt sớm.",
          "Việc có thực hiện PSA hay không còn phụ thuộc vào sức khỏe tổng thể và tuổi thọ dự kiến. PSA tăng không đồng nghĩa chắc chắn mắc ung thư, vì chỉ số này cũng có thể thay đổi do phì đại lành tính, viêm tuyến tiền liệt hoặc những nguyên nhân khác."
        ]
      },
      {
        "heading": "Tầm soát ung thư gan không phụ thuộc hoàn toàn vào tuổi",
        "paragraphs": [
          "Khác với ung thư vú hoặc đại trực tràng, tầm soát ung thư gan chủ yếu dựa trên yếu tố nguy cơ, không chỉ dựa vào số tuổi.",
          "Người có thể cần được theo dõi định kỳ gồm:",
          "Người bị xơ gan.",
          "Người mắc viêm gan B mạn thuộc nhóm nguy cơ.",
          "Một số người mắc bệnh gan mạn tính hoặc đã có tổn thương gan tiến triển.",
          "Người có tiền sử gia đình ung thư gan cần được bác sĩ đánh giá.",
          "Phương pháp theo dõi thường được cân nhắc là siêu âm gan kết hợp hoặc không kết hợp AFP, thực hiện khoảng sáu tháng một lần ở nhóm phù hợp. Đây không phải lịch kiểm tra chung cho tất cả mọi người.",
          "Người mắc viêm gan B, viêm gan C hoặc xơ gan không nên chờ đến khi đau vùng gan, vàng da hay sụt cân mới đi kiểm tra. Ung thư gan giai đoạn đầu có thể chưa gây triệu chứng rõ ràng.",
          "Ung thư dạ dày có mốc tuổi tầm soát cố định không?",
          "Hiện không có một mốc tuổi tầm soát ung thư dạ dày được áp dụng giống nhau cho toàn bộ dân số. Bác sĩ thường cân nhắc nội soi sớm hơn ở người có:",
          "Người thân trực hệ mắc ung thư dạ dày.",
          "Nhiễm vi khuẩn Helicobacter pylori.",
          "Viêm teo niêm mạc hoặc dị sản ruột.",
          "Tiền sử polyp hoặc tổn thương tiền ung thư dạ dày.",
          "Đau thượng vị, đầy bụng, ăn nhanh no hoặc khó tiêu kéo dài.",
          "Thiếu máu không rõ nguyên nhân, nôn ra máu, đi ngoài phân đen hoặc sụt cân.",
          "Khi đã có triệu chứng, nội soi được thực hiện nhằm tìm nguyên nhân và chẩn đoán bệnh, không còn đơn thuần là tầm soát.",
          "Có cần tầm soát tất cả các loại ung thư không?",
          "Không. Hiện nay, không phải loại ung thư nào cũng có phương pháp tầm soát đã được chứng minh mang lại lợi ích cho người có nguy cơ trung bình.",
          "Chẳng hạn, tầm soát ung thư tụy thường quy không được khuyến nghị cho người khỏe mạnh, không có triệu chứng và không thuộc nhóm nguy cơ di truyền cao. Việc kiểm tra tràn lan có thể tạo ra kết quả dương tính giả và dẫn đến các thủ thuật không cần thiết.",
          "Tương tự, không nên xem siêu âm toàn thân, CT toàn thân hoặc một bộ xét nghiệm dấu ấn ung thư là cách có thể phát hiện mọi loại ung thư.",
          "Xét nghiệm dấu ấn ung thư có thay thế tầm soát được không?",
          "Các chỉ số như AFP, CEA, CA 19-9, CA 125 hay PSA thường được gọi là dấu ấn ung thư. Tuy nhiên, phần lớn những xét nghiệm này không đủ để tự xác định một người có hay không có ung thư.",
          "Chỉ số có thể tăng trong bệnh lành tính, viêm nhiễm hoặc một số tình trạng không phải ung thư. Ngược lại, người mắc ung thư giai đoạn sớm vẫn có thể có kết quả trong giới hạn bình thường.",
          "Dấu ấn ung thư thường được sử dụng để hỗ trợ chẩn đoán, lựa chọn điều trị hoặc theo dõi người đã được xác định mắc bệnh. Việc sử dụng để tầm soát chỉ phù hợp trong một số hoàn cảnh cụ thể và phải kết hợp với thăm khám, chẩn đoán hình ảnh hoặc phương pháp khác.",
          "Những ai cần tầm soát sớm hơn độ tuổi thông thường?",
          "Bạn nên trao đổi sớm với bác sĩ, ngay cả khi còn trẻ, nếu có một trong các yếu tố sau:",
          "Cha mẹ, anh chị em ruột hoặc con mắc ung thư, đặc biệt khi mắc ở tuổi trẻ.",
          "Nhiều thành viên trong gia đình mắc cùng một loại ung thư hoặc các ung thư có liên quan.",
          "Đã phát hiện đột biến gene làm tăng nguy cơ ung thư.",
          "Từng mắc ung thư hoặc tổn thương tiền ung thư.",
          "Viêm gan B, viêm gan C, xơ gan hoặc bệnh gan mạn tính.",
          "Hút thuốc trong thời gian dài.",
          "Polyp đại tràng, bệnh viêm ruột mạn tính.",
          "Từng chiếu xạ vùng ngực hoặc tiếp xúc nghề nghiệp với chất gây ung thư.",
          "Kết quả tầm soát trước đây bất thường.",
          "Trong những trường hợp này, bác sĩ có thể đề nghị bắt đầu sớm hơn, kiểm tra thường xuyên hơn hoặc sử dụng thêm những phương pháp chuyên sâu."
        ]
      },
      {
        "heading": "Có triệu chứng thì không nên chờ đến tuổi tầm soát",
        "paragraphs": [
          "Tuổi tầm soát chỉ áp dụng cho người chưa có biểu hiện bất thường. Người bệnh nên đi khám sớm khi xuất hiện:",
          "Sờ thấy khối u hoặc hạch bất thường.",
          "Chảy máu âm đạo ngoài kỳ kinh hoặc sau mãn kinh.",
          "Có máu trong phân, nước tiểu hoặc đờm.",
          "Ho, khàn tiếng hoặc khó nuốt kéo dài.",
          "Thay đổi thói quen đi tiêu kéo dài.",
          "Sụt cân không chủ ý.",
          "Mệt mỏi, thiếu máu hoặc sốt kéo dài không rõ nguyên nhân.",
          "Nốt ruồi thay đổi màu sắc, kích thước hoặc dễ chảy máu.",
          "Đau dai dẳng hoặc ngày càng tăng.",
          "Những biểu hiện này có thể do nhiều bệnh lành tính gây ra, nhưng cần được kiểm tra để xác định nguyên nhân. Kết quả tầm soát bình thường trước đó cũng không phải lý do để bỏ qua một triệu chứng mới xuất hiện.",
          "Cần chuẩn bị gì trước khi tầm soát ung thư?",
          "Trước buổi khám, bạn nên chuẩn bị:",
          "Danh sách bệnh đang điều trị và thuốc đang sử dụng.",
          "Kết quả xét nghiệm, chẩn đoán hình ảnh hoặc nội soi trước đây.",
          "Thông tin về người thân từng mắc ung thư và độ tuổi được chẩn đoán.",
          "Tiền sử hút thuốc, uống rượu và môi trường làm việc.",
          "Những triệu chứng bất thường gần đây, dù có vẻ không nghiêm trọng.",
          "Bác sĩ sẽ dựa trên các thông tin này để xây dựng danh mục kiểm tra phù hợp. Một người 35 tuổi có tiền sử gia đình ung thư có thể cần kế hoạch khác hoàn toàn với một người 55 tuổi không có yếu tố nguy cơ."
        ]
      },
      {
        "heading": "Tầm soát ung thư tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Người có nhu cầu chủ động kiểm tra sức khỏe có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ khai thác tiền sử cá nhân, tiền sử gia đình và đánh giá các yếu tố nguy cơ.",
          "Tùy từng trường hợp, bác sĩ có thể tư vấn các phương pháp như xét nghiệm, siêu âm, chụp nhũ ảnh, CT liều thấp, nội soi hoặc thăm khám chuyên khoa. Mục tiêu không phải là thực hiện thật nhiều xét nghiệm, mà là lựa chọn những kiểm tra có giá trị và phù hợp với từng người.",
          "Nếu đã có triệu chứng hoặc kết quả kiểm tra bất thường, người bệnh sẽ được định hướng thực hiện các bước chẩn đoán cần thiết thay vì tiếp tục tầm soát một cách dàn trải."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp về độ tuổi tầm soát ung thư",
        "paragraphs": [
          "Dưới 30 tuổi có cần tầm soát ung thư không?",
          "Phần lớn người dưới 30 tuổi không cần tầm soát nhiều loại ung thư cùng lúc. Tuy nhiên, tầm soát ung thư cổ tử cung có thể bắt đầu từ 21–25 tuổi. Người có yếu tố di truyền, tiền sử gia đình hoặc bệnh nền đặc biệt có thể cần kiểm tra sớm hơn.",
          "Không có người thân mắc ung thư thì có cần tầm soát không?",
          "Có. Phần lớn ung thư không nhất thiết phải xuất hiện trong một gia đình có nhiều người mắc bệnh. Khi đến mốc tuổi khuyến nghị, người có nguy cơ trung bình vẫn nên thực hiện các chương trình tầm soát phù hợp.",
          "Xét nghiệm máu bình thường có loại trừ ung thư không?",
          "Không. Xét nghiệm máu bình thường không thể loại trừ tất cả các loại ung thư. Một số ung thư giai đoạn sớm không làm thay đổi rõ rệt công thức máu hoặc dấu ấn ung thư.",
          "Mỗi năm có cần tầm soát ung thư toàn thân không?",
          "Không nhất thiết. Tần suất phụ thuộc vào loại ung thư, phương pháp kiểm tra, kết quả lần trước và nguy cơ cá nhân. Có xét nghiệm cần thực hiện hằng năm, nhưng cũng có phương pháp chỉ cần lặp lại sau vài năm nếu kết quả bình thường.",
          "Người trên 75 tuổi có cần tiếp tục tầm soát không?",
          "Không có câu trả lời giống nhau cho tất cả mọi người. Bác sĩ sẽ cân nhắc sức khỏe tổng thể, bệnh nền, khả năng điều trị nếu phát hiện bệnh, kết quả tầm soát trước đây và mong muốn của người bệnh.",
          "Kết luận",
          "Tầm soát ung thư không bắt đầu từ một độ tuổi duy nhất. Với người có nguy cơ trung bình, những mốc đáng chú ý thường gồm 21–25 tuổi đối với ung thư cổ tử cung, 40 tuổi đối với ung thư vú, 45 tuổi đối với ung thư đại trực tràng và 50 tuổi đối với một số chương trình tầm soát ung thư phổi hoặc tuyến tiền liệt.",
          "Tuy nhiên, độ tuổi chỉ là một phần của kế hoạch. Tiền sử gia đình, thói quen hút thuốc, bệnh gan mạn tính, kết quả xét nghiệm trước đây và tình trạng sức khỏe mới là những yếu tố quyết định một người cần kiểm tra gì và kiểm tra khi nào.",
          "Thay vì lựa chọn một gói xét nghiệm thật rộng, bạn nên được bác sĩ đánh giá nguy cơ trước. Tầm soát đúng không phải là làm nhiều nhất, mà là thực hiện đúng phương pháp vào đúng thời điểm.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "cac-dau-hieu-canh-bao-ung-thu-khong-nen-bo-qua": {
    "sourceFile": "14.Các dấu hiệu cảnh báo ung thư không nên bỏ qua.docx",
    "title": "Các dấu hiệu cảnh báo ung thư không nên bỏ qua",
    "excerpt": "Mệt mỏi, sụt cân, nổi hạch hay đau bụng đều là những biểu hiện khá quen thuộc và phần lớn không liên quan đến ung thư. Tuy nhiên, khi một thay đổi mới xuất hiện, kéo dài, ngày càng rõ hoặc không giải thích được, cơ thể có thể đang phát tín hiệu cần được kiểm tra.",
    "intro": [
      "Mệt mỏi, sụt cân, nổi hạch hay đau bụng đều là những biểu hiện khá quen thuộc và phần lớn không liên quan đến ung thư. Tuy nhiên, khi một thay đổi mới xuất hiện, kéo dài, ngày càng rõ hoặc không giải thích được, cơ thể có thể đang phát tín hiệu cần được kiểm tra.",
      "Nhận biết sớm các dấu hiệu cảnh báo ung thư không có nghĩa là tự kết luận mình mắc bệnh. Điều quan trọng là biết khi nào có thể tiếp tục theo dõi và khi nào nên đi khám để tìm nguyên nhân.",
      "Có dấu hiệu cảnh báo đồng nghĩa với mắc ung thư không?",
      "Không. Những biểu hiện có thể gặp ở người mắc ung thư cũng thường xuất hiện trong nhiều tình trạng lành tính như nhiễm trùng, viêm, rối loạn nội tiết, thiếu máu, bệnh tiêu hóa hoặc tác dụng của thuốc.",
      "Chẳng hạn, hạch nổi ở cổ có thể xuất hiện khi viêm họng; có máu trong phân có thể liên quan đến bệnh trĩ; mệt mỏi kéo dài có thể do thiếu ngủ hoặc thiếu máu. Dù vậy, người bệnh vẫn nên đi khám nếu triệu chứng không cải thiện sau vài tuần, thường xuyên tái phát hoặc ngày càng nặng hơn. Nhiều loại ung thư ở giai đoạn đầu cũng không gây đau, vì vậy không nên chờ đến khi đau nhiều mới kiểm tra.",
      "1. Sụt cân không rõ nguyên nhân",
      "Cân nặng có thể giảm khi bạn thay đổi chế độ ăn, tăng cường vận động hoặc trải qua một giai đoạn căng thẳng. Điều đáng chú ý là cân nặng giảm dần dù thói quen ăn uống và sinh hoạt không thay đổi.",
      "Sụt cân không chủ ý có thể đi kèm:",
      "Chán ăn hoặc nhanh no.",
      "Cơ thể yếu hơn bình thường.",
      "Quần áo rộng lên rõ rệt.",
      "Đau bụng, khó nuốt hoặc rối loạn tiêu hóa.",
      "Sốt, đổ mồ hôi về đêm hoặc nổi hạch.",
      "Sụt cân không rõ nguyên nhân có thể liên quan đến nhiều bệnh lý chuyển hóa, nội tiết, tiêu hóa hoặc ung thư. Thay vì chỉ cố gắng ăn nhiều hơn để lấy lại cân, người bệnh nên khám để xác định nguyên nhân nếu cân nặng tiếp tục giảm.",
      "2. Mệt mỏi kéo dài dù đã nghỉ ngơi",
      "Ai cũng có lúc mệt sau một ngày làm việc bận rộn hoặc vài đêm thiếu ngủ. Nhưng nếu cảm giác kiệt sức xuất hiện liên tục, không cải thiện sau khi ngủ đủ và bắt đầu ảnh hưởng đến sinh hoạt hằng ngày, bạn không nên bỏ qua.",
      "Mệt mỏi kéo dài có thể liên quan đến thiếu máu, bệnh tuyến giáp, nhiễm trùng, rối loạn giấc ngủ, bệnh mạn tính hoặc một số loại ung thư. Dấu hiệu đáng lưu ý hơn khi tình trạng mệt đi kèm da xanh, chóng mặt, khó thở khi vận động nhẹ, sốt, bầm tím, chảy máu bất thường hoặc sụt cân.",
      "3. Xuất hiện khối u hoặc hạch bất thường",
      "Khối u hoặc vùng sưng có thể xuất hiện ở cổ, nách, bẹn, vú, tinh hoàn, bụng hoặc bất kỳ vị trí nào trên cơ thể. Phần lớn các khối này không phải ung thư, nhưng cần được kiểm tra nếu có đặc điểm bất thường.",
      "Bạn nên chú ý khi khối u:",
      "Mới xuất hiện và không biến mất.",
      "Tăng kích thước theo thời gian.",
      "Cứng, ít di động hoặc có bờ không đều.",
      "Không đau nhưng tồn tại kéo dài.",
      "Đi kèm sốt, đổ mồ hôi đêm hoặc sụt cân.",
      "Làm thay đổi hình dạng của vùng cơ thể liên quan.",
      "Không nên tự xoa bóp, đắp thuốc hoặc chờ khối u đau mới đi khám. Bác sĩ có thể cần thăm khám, siêu âm, chụp hình hoặc sinh thiết tùy đặc điểm của tổn thương.",
      "4. Chảy máu hoặc bầm tím bất thường",
      "Máu xuất hiện ở vị trí không bình thường luôn là dấu hiệu cần được quan tâm, dù lượng máu ít và chưa gây đau.",
      "Các biểu hiện có thể gồm:",
      "Ho hoặc khạc ra máu.",
      "Nôn ra máu.",
      "Đi ngoài ra máu hoặc phân đen.",
      "Có máu trong nước tiểu.",
      "Chảy máu âm đạo ngoài kỳ kinh.",
      "Chảy máu sau quan hệ tình dục.",
      "Chảy máu âm đạo sau mãn kinh.",
      "Dễ bầm tím hoặc chảy máu không rõ nguyên nhân.",
      "Chảy máu có thể do viêm, loét, bệnh trĩ, sỏi, rối loạn đông máu hoặc nhiều nguyên nhân khác, không chỉ ung thư. Tuy nhiên, người bệnh không nên tự cho rằng đó là “nóng trong”, bệnh trĩ hay rối loạn kinh nguyệt mà không được kiểm tra.",
      "Cần đến cơ sở cấp cứu nếu ho hoặc nôn ra nhiều máu, chảy máu không cầm, khó thở, đau ngực, tim đập nhanh, choáng váng, da tái lạnh hoặc có dấu hiệu mất ý thức.",
      "5. Thay đổi thói quen đi tiêu",
      "Thỉnh thoảng bị táo bón hoặc tiêu chảy sau khi thay đổi chế độ ăn không phải điều hiếm gặp. Nhưng nếu thói quen đi tiêu thay đổi kéo dài hoặc khác rõ rệt so với bình thường, người bệnh nên đi khám.",
      "Những biểu hiện cần lưu ý gồm:",
      "Tiêu chảy hoặc táo bón dai dẳng.",
      "Đi tiêu nhiều hoặc ít hơn bình thường.",
      "Phân có máu, màu đen hoặc hình dạng thay đổi.",
      "Luôn có cảm giác muốn đi tiêu dù vừa đi xong.",
      "Đau quặn bụng, đầy bụng kéo dài.",
      "Thiếu máu hoặc mệt mỏi không rõ nguyên nhân.",
      "Sụt cân kèm rối loạn tiêu hóa.",
      "Các triệu chứng này có thể liên quan đến chế độ ăn, nhiễm trùng, hội chứng ruột kích thích, bệnh viêm ruột, trĩ hoặc tổn thương ở đại trực tràng. Khám sớm giúp xác định nguyên nhân thay vì tự dùng thuốc tiêu chảy hoặc thuốc nhuận tràng kéo dài.",
      "6. Thay đổi việc đi tiểu",
      "Những thay đổi ở đường tiểu không chỉ xuất hiện ở người lớn tuổi. Người bệnh nên kiểm tra nếu gặp:",
      "Tiểu khó hoặc phải rặn.",
      "Dòng tiểu yếu, ngắt quãng.",
      "Đi tiểu nhiều lần bất thường.",
      "Đau hoặc nóng rát khi tiểu.",
      "Cảm giác tiểu không hết.",
      "Có máu trong nước tiểu.",
      "Đau vùng thắt lưng, hông hoặc vùng chậu kéo dài.",
      "Nhiễm trùng đường tiểu, sỏi, phì đại tuyến tiền liệt và nhiều bệnh lành tính khác cũng có thể gây các biểu hiện tương tự. Dù vậy, có máu trong nước tiểu hoặc tình trạng tiểu tiện thay đổi kéo dài vẫn cần được bác sĩ đánh giá.",
      "7. Ho hoặc khàn tiếng kéo dài",
      "Ho thường gặp khi cảm lạnh, viêm họng, dị ứng hoặc trào ngược dạ dày. Tuy nhiên, ho không giảm sau vài tuần, ho cũ ngày càng nặng hoặc khàn tiếng kéo dài là những thay đổi không nên xem nhẹ.",
      "Đặc biệt cần đi khám sớm khi ho đi kèm:",
      "Khạc ra máu.",
      "Khó thở hoặc thở khò khè.",
      "Đau ngực khi thở hoặc khi ho.",
      "Nhiễm trùng hô hấp thường xuyên tái phát.",
      "Mệt mỏi, chán ăn hoặc sụt cân.",
      "Tiền sử hút thuốc hoặc thường xuyên tiếp xúc với khói thuốc.",
      "Những triệu chứng này có thể do bệnh phổi, thanh quản, tim mạch hoặc các nguyên nhân khác. Người có nguy cơ cao không nên chỉ tự mua thuốc ho sử dụng trong thời gian dài.",
      "8. Khó nuốt, chán ăn hoặc nhanh no",
      "Khó nuốt có thể bắt đầu bằng cảm giác thức ăn mắc ở cổ, phải uống nhiều nước mới nuốt được hoặc thường xuyên nghẹn khi ăn. Một số người lại thấy đầy bụng, nhanh no dù ăn ít, chán ăn hoặc khó tiêu kéo dài.",
      "Các biểu hiện cần được kiểm tra gồm:",
      "Nuốt đau hoặc nuốt nghẹn tăng dần.",
      "Hay sặc khi ăn uống.",
      "Ợ nóng hoặc khó tiêu không cải thiện.",
      "Buồn nôn hoặc nôn kéo dài.",
      "Đau bụng dai dẳng.",
      "Nhanh no và sút cân.",
      "Khó nuốt và chán ăn có thể liên quan đến bệnh răng miệng, trào ngược, viêm loét, rối loạn vận động thực quản hoặc các bệnh lý khác. Nếu triệu chứng kéo dài, bác sĩ có thể cần thăm khám chuyên khoa và thực hiện nội soi hoặc chẩn đoán hình ảnh.",
      "9. Vết loét lâu lành hoặc thay đổi bất thường trên da",
      "Một vết thương nhỏ thường sẽ dần lành. Nếu vết loét không cải thiện, liên tục đóng vảy rồi chảy máu trở lại hoặc ngày càng rộng, bạn nên đi khám da liễu.",
      "Với nốt ruồi, có thể ghi nhớ nguyên tắc ABCDE:",
      "A – Asymmetry: Hai nửa nốt ruồi không cân xứng.",
      "B – Border: Bờ không đều, nham nhở.",
      "C – Color: Màu sắc không đồng nhất.",
      "D – Diameter: Kích thước lớn bất thường.",
      "E – Evolving: Nốt ruồi thay đổi về kích thước, màu sắc, hình dạng hoặc cảm giác.",
      "Ngoài ra, một nốt mới xuất hiện, vùng da dày lên, dễ chảy máu hoặc tổn thương lâu lành cũng cần được kiểm tra. Không phải mọi thay đổi trên da đều là ung thư, nhưng quan sát bằng mắt thường không thể thay thế đánh giá chuyên môn.",
      "10. Những thay đổi bất thường ở vú",
      "Khối u ở vú là dấu hiệu được nhiều người biết đến, nhưng ung thư vú không phải lúc nào cũng bắt đầu bằng một khối rõ ràng. Phụ nữ và cả nam giới nên chú ý đến những thay đổi mới xuất hiện ở vú hoặc vùng nách.",
      "Các dấu hiệu cần khám gồm:",
      "Có khối cứng ở vú hoặc nách.",
      "Một vùng vú dày hoặc sưng hơn.",
      "Vú thay đổi kích thước hoặc hình dạng.",
      "Da vú lõm, nhăn hoặc giống vỏ cam.",
      "Núm vú mới bị tụt vào trong.",
      "Da quanh núm vú đỏ, bong vảy hoặc ngứa.",
      "Chảy dịch núm vú, đặc biệt là dịch có máu.",
      "Phần lớn các khối vú lành tính, nhưng không thể phân biệt chính xác chỉ bằng cách sờ. Bác sĩ có thể chỉ định siêu âm, chụp nhũ ảnh hoặc kiểm tra khác tùy độ tuổi và đặc điểm tổn thương.",
      "11. Chảy máu âm đạo, đầy bụng hoặc đau vùng chậu bất thường",
      "Phụ nữ nên đi khám sớm khi có chảy máu ngoài kỳ kinh, kinh nguyệt thay đổi rõ rệt, chảy máu sau quan hệ hoặc bất kỳ hiện tượng chảy máu nào sau mãn kinh.",
      "Một số biểu hiện phụ khoa khác cần chú ý gồm:",
      "Dịch âm đạo bất thường.",
      "Đầy bụng kéo dài.",
      "Nhanh no hoặc khó ăn.",
      "Đau, nặng hoặc có cảm giác đè ép vùng chậu.",
      "Đau bụng hoặc đau lưng không rõ nguyên nhân.",
      "Đi tiểu gấp, tiểu nhiều hoặc táo bón mới xuất hiện.",
      "Ngứa, đau, loét hoặc thay đổi màu sắc vùng âm hộ.",
      "Chảy máu âm đạo bất thường cần được thông báo với bác sĩ sớm; các triệu chứng phụ khoa khác kéo dài từ khoảng hai tuần hoặc không bình thường đối với cơ thể cũng nên được kiểm tra.",
      "12. Thay đổi bất thường trong miệng và vùng cổ",
      "Loét miệng thường có thể xuất hiện do cắn phải niêm mạc, nhiệt miệng hoặc kích ứng. Tuy nhiên, vết loét lâu lành, mảng trắng hoặc đỏ bất thường, chảy máu, tê môi hay nổi khối ở cổ là những dấu hiệu cần lưu ý.",
      "Người bệnh nên đi khám khi có:",
      "Loét miệng kéo dài.",
      "Mảng trắng hoặc đỏ trên lưỡi, lợi hay niêm mạc miệng.",
      "Đau hoặc tê môi, lưỡi.",
      "Khó há miệng, nhai hoặc nuốt.",
      "Khàn tiếng dai dẳng.",
      "Hạch hoặc khối ở cổ.",
      "Chảy máu miệng không rõ nguyên nhân.",
      "Người hút thuốc, sử dụng thuốc lá điện tử, nhai trầu hoặc uống nhiều rượu càng không nên bỏ qua những thay đổi này.",
      "13. Đau kéo dài hoặc triệu chứng thần kinh mới xuất hiện",
      "Đau có thể do chấn thương, thoái hóa, căng cơ hoặc nhiều bệnh lý thông thường. Điều cần quan tâm là cơn đau mới xuất hiện, kéo dài, tăng dần, đánh thức người bệnh về đêm hoặc không giải thích được.",
      "Một số biểu hiện thần kinh cần khám sớm gồm:",
      "Đau đầu mới xuất hiện và thường xuyên tăng lên.",
      "Co giật.",
      "Thay đổi thị lực hoặc thính lực.",
      "Yếu, tê một bên cơ thể.",
      "Mặt bị lệch hoặc sụp xuống.",
      "Thay đổi hành vi, trí nhớ hoặc khả năng nói.",
      "Nôn kèm đau đầu kéo dài.",
      "Những triệu chứng này có thể xuất phát từ nhiều bệnh thần kinh không phải ung thư. Tuy nhiên, yếu liệt đột ngột, méo miệng, nói khó, mất ý thức hoặc cơn co giật đầu tiên cần được xử trí như một tình trạng cấp cứu.",
      "Nên theo dõi triệu chứng trong bao lâu?",
      "Không có một khoảng thời gian áp dụng cho mọi dấu hiệu. Một số triệu chứng nhẹ do nhiễm virus hoặc rối loạn tiêu hóa có thể cải thiện sau vài ngày. Nhưng nếu một thay đổi kéo dài vài tuần, thường xuyên tái phát, ngày càng nặng hoặc khác rõ rệt so với bình thường, người bệnh nên đi khám.",
      "Không cần chờ đủ vài tuần trong những trường hợp sau:",
      "Có khối u mới xuất hiện hoặc lớn nhanh.",
      "Có máu trong đờm, nước tiểu, phân hoặc dịch âm đạo.",
      "Chảy máu âm đạo sau mãn kinh.",
      "Sụt cân nhanh không rõ nguyên nhân.",
      "Khó nuốt tăng dần.",
      "Khó thở, đau ngực hoặc nôn ra máu.",
      "Xuất hiện dấu hiệu thần kinh bất thường.",
      "Có tiền sử cá nhân hoặc gia đình mắc ung thư.",
      "Thời gian kéo dài chỉ là một yếu tố tham khảo. Mức độ bất thường và nguy cơ của từng người cũng rất quan trọng.",
      "Bác sĩ sẽ kiểm tra những gì?",
      "Không có một xét nghiệm duy nhất có thể tìm ra tất cả các loại ung thư. Quy trình kiểm tra thường bắt đầu bằng việc hỏi bệnh, thăm khám và đánh giá yếu tố nguy cơ.",
      "Tùy triệu chứng, bác sĩ có thể chỉ định:",
      "Xét nghiệm máu hoặc nước tiểu.",
      "Siêu âm.",
      "Chụp X-quang, CT hoặc cộng hưởng từ.",
      "Chụp nhũ ảnh.",
      "Nội soi tiêu hóa hoặc hô hấp.",
      "Xét nghiệm tế bào.",
      "Sinh thiết khi phát hiện tổn thương nghi ngờ.",
      "Danh mục kiểm tra cần được lựa chọn dựa trên vị trí và đặc điểm triệu chứng. Thực hiện thật nhiều dấu ấn ung thư hoặc chụp toàn thân không phải lúc nào cũng giúp xác định nguyên nhân chính xác hơn."
    ],
    "sections": [
      {
        "heading": "Khám các dấu hiệu nghi ngờ ung thư tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi có triệu chứng kéo dài hoặc thay đổi bất thường, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám, khai thác tiền sử và đánh giá nguy cơ.",
          "Với mô hình bệnh viện đa khoa quốc tế, người bệnh có thể được phối hợp thăm khám giữa các chuyên khoa như Ung bướu, Nội tổng quát, Tiêu hóa, Hô hấp, Sản phụ khoa, Ngoại khoa và Chẩn đoán hình ảnh. Tùy trường hợp, bác sĩ sẽ tư vấn những xét nghiệm hoặc kỹ thuật kiểm tra phù hợp, tránh bỏ sót dấu hiệu quan trọng nhưng cũng hạn chế thực hiện các kiểm tra không cần thiết.",
          "Kết luận",
          "Các dấu hiệu cảnh báo ung thư thường không đặc hiệu và phần lớn có thể do bệnh lý lành tính gây ra. Điều cần lưu ý không chỉ là bản thân triệu chứng, mà còn là việc triệu chứng mới xuất hiện, kéo dài, tái diễn, tăng dần hoặc không có nguyên nhân rõ ràng.",
          "Đừng quá lo lắng khi cơ thể có một biểu hiện bất thường, nhưng cũng không nên chủ quan hoặc tự điều trị kéo dài. Khám sớm giúp tìm đúng nguyên nhân; ngay cả khi không phải ung thư, nhiều bệnh lý khác cũng cần được phát hiện và xử lý đúng cách.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "noi-soi-tieu-hoa-giup-phat-hien-som-ung-thu-duong-tieu-hoa-ra-sao": {
    "sourceFile": "15.Nội soi tiêu hóa giúp phát hiện sớm ung thư đường tiêu hóa ra sao.docx",
    "title": "Nội soi tiêu hóa giúp phát hiện sớm ung thư đường tiêu hóa ra sao?",
    "excerpt": "Nhiều bệnh lý đường tiêu hóa có biểu hiện khá giống nhau: đau bụng, đầy hơi, khó tiêu, thay đổi đại tiện hoặc chán ăn. Phần lớn những triệu chứng này không phải ung thư, nhưng một số tổn thương ở thực quản, dạ dày và đại trực tràng có thể âm thầm phát triển trong thời gian dài mà chưa gây biểu hiện rõ ràng.",
    "intro": [
      "Nhiều bệnh lý đường tiêu hóa có biểu hiện khá giống nhau: đau bụng, đầy hơi, khó tiêu, thay đổi đại tiện hoặc chán ăn. Phần lớn những triệu chứng này không phải ung thư, nhưng một số tổn thương ở thực quản, dạ dày và đại trực tràng có thể âm thầm phát triển trong thời gian dài mà chưa gây biểu hiện rõ ràng.",
      "Nội soi tiêu hóa giúp bác sĩ quan sát trực tiếp niêm mạc đường tiêu hóa, phát hiện vùng bất thường, lấy mẫu mô để xét nghiệm và trong một số trường hợp có thể loại bỏ tổn thương tiền ung thư ngay trong quá trình nội soi. Đây chính là điểm nối quan trọng giữa việc thăm khám bệnh tiêu hóa thông thường và phát hiện sớm bệnh lý ung bướu.",
      "Nội soi tiêu hóa là gì?",
      "Nội soi tiêu hóa sử dụng một ống mềm, nhỏ, có gắn camera và nguồn sáng để quan sát bên trong đường tiêu hóa. Tùy vị trí cần kiểm tra, bác sĩ có thể chỉ định:"
    ],
    "sections": [
      {
        "heading": "Nội soi tiêu hóa trên",
        "paragraphs": [
          "Ống nội soi được đưa qua miệng để quan sát:",
          "Thực quản.",
          "Dạ dày.",
          "Hành tá tràng và một phần tá tràng.",
          "Phương pháp này có thể giúp phát hiện viêm, loét, chảy máu, polyp, tổn thương tiền ung thư hoặc vùng nghi ngờ ung thư tại thực quản và dạ dày. Khi phát hiện khu vực bất thường, bác sĩ có thể lấy một mẫu mô nhỏ để làm xét nghiệm giải phẫu bệnh."
        ]
      },
      {
        "heading": "Nội soi đại tràng",
        "paragraphs": [
          "Ống nội soi được đưa qua hậu môn để kiểm tra:",
          "Trực tràng.",
          "Đại tràng sigma.",
          "Các đoạn còn lại của đại tràng.",
          "Trong một số trường hợp, phần cuối của ruột non.",
          "Nội soi đại tràng vừa được sử dụng để tìm nguyên nhân của các triệu chứng như đi ngoài ra máu, đau bụng hoặc thay đổi thói quen đại tiện, vừa là một phương pháp tầm soát ung thư đại trực tràng. Phương pháp này đặc biệt có giá trị vì bác sĩ có thể phát hiện và cắt bỏ polyp trước khi một số polyp tiến triển thành ung thư.",
          "Nội soi giúp phát hiện ung thư đường tiêu hóa sớm bằng cách nào?",
          "Nội soi không đơn thuần là “đưa camera vào để nhìn”. Giá trị của phương pháp này nằm ở việc bác sĩ có thể đồng thời quan sát, đánh giá, lấy mẫu và xử lý một số tổn thương trong cùng một quy trình.",
          "1. Quan sát trực tiếp niêm mạc đường tiêu hóa",
          "Các phương pháp như siêu âm, CT hoặc xét nghiệm máu có thể cung cấp nhiều thông tin quan trọng, nhưng không phải lúc nào cũng cho thấy rõ những thay đổi nhỏ trên bề mặt niêm mạc.",
          "Trong khi đó, nội soi cho phép bác sĩ quan sát trực tiếp:",
          "Màu sắc và cấu trúc niêm mạc.",
          "Vùng viêm, loét hoặc chảy máu.",
          "Polyp hoặc khối bất thường.",
          "Khu vực niêm mạc gồ cao, lõm xuống hoặc dễ chảy máu.",
          "Những thay đổi nhỏ về mạch máu và bề mặt tổn thương.",
          "Ung thư đường tiêu hóa giai đoạn sớm đôi khi chỉ biểu hiện bằng một vùng niêm mạc thay đổi nhẹ, chưa tạo thành khối lớn. Nội soi chất lượng cao, kết hợp với việc quan sát kỹ và làm sạch tốt, có thể giúp bác sĩ nhận biết những vùng cần kiểm tra sâu hơn.",
          "Tuy nhiên, không phải bất kỳ vùng đỏ, loét hoặc gồ lên nào cũng là ung thư. Viêm, nhiễm khuẩn và nhiều bệnh lành tính cũng có thể tạo ra hình ảnh tương tự. Vì vậy, quan sát nội soi thường cần được kết hợp với sinh thiết.",
          "2. Phát hiện các tổn thương tiền ung thư",
          "Một số ung thư đường tiêu hóa không xuất hiện đột ngột mà phát triển qua nhiều giai đoạn. Trước khi trở thành ung thư xâm lấn, niêm mạc có thể trải qua những thay đổi được gọi chung là tổn thương tiền ung thư.",
          "Ví dụ:",
          "Một số polyp tuyến ở đại tràng có thể dần tiến triển thành ung thư đại trực tràng.",
          "Dị sản ruột hoặc loạn sản ở dạ dày có thể làm tăng nguy cơ ung thư dạ dày.",
          "Barrett thực quản có thể liên quan đến nguy cơ ung thư biểu mô tuyến thực quản.",
          "Một số vùng loạn sản là nơi tế bào đã trở nên bất thường nhưng chưa xâm lấn sâu.",
          "Nội soi giúp phát hiện các tổn thương này để bác sĩ đánh giá mức độ nguy cơ và xây dựng lịch theo dõi phù hợp. Với người có nguy cơ ung thư dạ dày cao, nội soi được xem là phương pháp quan trọng vì vừa cho phép quan sát trực tiếp niêm mạc, vừa có thể lấy mẫu mô để phân loại nguy cơ.",
          "Không phải tất cả tổn thương tiền ung thư đều sẽ trở thành ung thư. Việc có cần điều trị hoặc theo dõi thường xuyên hay không phụ thuộc vào loại tổn thương, mức độ biến đổi tế bào, phạm vi tổn thương và các yếu tố nguy cơ đi kèm.",
          "3. Cắt bỏ polyp trước khi polyp tiến triển",
          "Đây là một trong những ưu điểm nổi bật nhất của nội soi đại tràng.",
          "Ung thư đại trực tràng thường có thể bắt đầu từ một khối phát triển trên niêm mạc gọi là polyp. Phần lớn polyp không phải ung thư và không phải polyp nào cũng sẽ chuyển thành ung thư. Tuy nhiên, một số loại polyp có khả năng tiến triển theo thời gian.",
          "Khi phát hiện polyp phù hợp, bác sĩ có thể sử dụng dụng cụ đi qua ống nội soi để:",
          "Cắt bỏ toàn bộ polyp.",
          "Lấy một phần tổn thương để xét nghiệm.",
          "Cầm máu sau khi cắt.",
          "Đánh dấu vị trí cần theo dõi hoặc can thiệp tiếp theo.",
          "Việc phát hiện và loại bỏ polyp tiền ung thư có thể giúp phòng ngừa một số trường hợp ung thư đại trực tràng, thay vì chờ đến khi ung thư đã hình thành mới điều trị.",
          "Polyp sau khi cắt sẽ được gửi đến phòng giải phẫu bệnh. Kết quả này giúp xác định loại polyp, mức độ loạn sản, polyp đã được lấy hết hay chưa và người bệnh cần nội soi lại sau bao lâu.",
          "4. Sinh thiết để xác định bản chất tổn thương",
          "Hình ảnh nội soi có thể khiến bác sĩ nghi ngờ một tổn thương, nhưng thường không đủ để kết luận chắc chắn đó là ung thư.",
          "Sinh thiết là việc lấy một mẫu mô nhỏ từ vùng bất thường. Mẫu mô được chuyển đến bác sĩ giải phẫu bệnh để quan sát tế bào dưới kính hiển vi. Kết quả có thể cho biết tổn thương là:",
          "Viêm hoặc loét lành tính.",
          "Nhiễm vi khuẩn, chẳng hạn Helicobacter pylori.",
          "Dị sản hoặc loạn sản.",
          "Polyp lành tính hoặc polyp có nguy cơ.",
          "Tế bào ung thư.",
          "Một loại u khác cần đánh giá chuyên sâu.",
          "Đối với ung thư dạ dày và thực quản, nội soi kèm sinh thiết là bước quan trọng để xác nhận chẩn đoán. Sinh thiết cũng có thể phát hiện những thay đổi tế bào chưa phải ung thư nhưng có khả năng tiến triển trong tương lai.",
          "Người bệnh không nên quá hoang mang khi bác sĩ đề nghị sinh thiết. Việc lấy mẫu không đồng nghĩa bác sĩ đã xác định có ung thư; đây là cách giúp làm rõ bản chất của tổn thương.",
          "5. Đánh giá kỹ hơn tổn thương bằng công nghệ nội soi",
          "Các hệ thống nội soi hiện đại có thể hỗ trợ bác sĩ đánh giá bề mặt niêm mạc rõ hơn thông qua:",
          "Hình ảnh có độ phân giải cao.",
          "Phóng đại vùng nghi ngờ.",
          "Các chế độ tăng cường màu sắc hoặc làm nổi bật mạch máu.",
          "Nhuộm màu niêm mạc trong một số trường hợp.",
          "Siêu âm nội soi khi cần đánh giá độ sâu hoặc cấu trúc bên dưới niêm mạc.",
          "Những công nghệ này không thay thế kinh nghiệm của bác sĩ và kết quả giải phẫu bệnh, nhưng có thể giúp xác định rõ hơn ranh giới tổn thương, lựa chọn vị trí sinh thiết và đánh giá khả năng can thiệp qua nội soi.",
          "6. Loại bỏ một số tổn thương ung thư giai đoạn rất sớm",
          "Trước đây, nhiều tổn thương ung thư đường tiêu hóa thường phải điều trị bằng phẫu thuật. Hiện nay, trong một số trường hợp được lựa chọn kỹ, tổn thương còn khu trú ở lớp nông của niêm mạc có thể được cắt qua nội soi bằng các kỹ thuật như:",
          "Cắt niêm mạc qua nội soi.",
          "Cắt tách dưới niêm mạc qua nội soi.",
          "Cắt polyp có chứa tế bào ung thư giai đoạn sớm.",
          "Khả năng can thiệp phụ thuộc vào kích thước, hình dạng, vị trí, mức độ xâm lấn và kết quả mô bệnh học. Không phải tổn thương ung thư nào cũng có thể điều trị bằng nội soi. Nếu có dấu hiệu xâm lấn sâu hoặc lan rộng, người bệnh có thể cần phẫu thuật, hóa trị, xạ trị hoặc phương pháp điều trị khác do hội đồng chuyên môn đánh giá. Các hướng dẫn chuyên ngành hiện công nhận vai trò của kỹ thuật cắt qua nội soi đối với một số ung thư thực quản và dạ dày giai đoạn sớm được lựa chọn phù hợp.",
          "Nội soi có thể phát hiện những loại ung thư nào?",
          "Nội soi tiêu hóa thông thường có vai trò rõ nhất trong phát hiện các bệnh ung thư xuất phát từ bề mặt niêm mạc mà ống nội soi có thể tiếp cận."
        ]
      },
      {
        "heading": "Ung thư thực quản",
        "paragraphs": [
          "Nội soi có thể phát hiện vùng hẹp, loét, khối u hoặc biến đổi niêm mạc ở thực quản. Người có khó nuốt tăng dần, nuốt đau, sụt cân, nôn hoặc đau sau xương ức cần được khám sớm.",
          "Người bị trào ngược kéo dài kèm nhiều yếu tố nguy cơ có thể được bác sĩ đánh giá về Barrett thực quản. Tuy nhiên, không phải tất cả người bị trào ngược đều cần nội soi định kỳ để tầm soát ung thư."
        ]
      },
      {
        "heading": "Ung thư dạ dày",
        "paragraphs": [
          "Nội soi dạ dày có thể giúp phát hiện:",
          "Vết loét có đặc điểm bất thường.",
          "Vùng niêm mạc dễ chảy máu.",
          "Polyp hoặc khối trong dạ dày.",
          "Dị sản ruột, teo niêm mạc hoặc loạn sản qua sinh thiết.",
          "Ung thư dạ dày ở giai đoạn sớm hoặc tiến triển.",
          "Không có một lịch nội soi dạ dày chung phù hợp với tất cả mọi người. Việc tầm soát hoặc theo dõi nên dựa trên nguy cơ cá nhân, tiền sử gia đình, tổn thương đã phát hiện, tình trạng nhiễm H. pylori và đánh giá của bác sĩ. Các hướng dẫn hiện nay ưu tiên nội soi cho những người có nguy cơ ung thư dạ dày tăng cao thay vì áp dụng giống nhau cho toàn bộ dân số."
        ]
      },
      {
        "heading": "Ung thư đại trực tràng",
        "paragraphs": [
          "Nội soi đại tràng giúp phát hiện:",
          "Polyp đại trực tràng.",
          "Tổn thương phẳng hoặc vùng niêm mạc bất thường.",
          "Khối u ở đại tràng và trực tràng.",
          "Vị trí chảy máu.",
          "Tình trạng viêm mạn tính làm tăng nguy cơ ung thư.",
          "Với người có nguy cơ trung bình và chưa có triệu chứng, nhiều hướng dẫn quốc tế khuyến nghị bắt đầu tầm soát ung thư đại trực tràng từ khoảng 45 tuổi và tiếp tục đến 75 tuổi. Từ 76 đến 85 tuổi, quyết định tầm soát thường được cá nhân hóa dựa trên sức khỏe và lịch sử kiểm tra trước đó. Nội soi đại tràng là một trong nhiều lựa chọn tầm soát; người bệnh cũng có thể được tư vấn xét nghiệm phân hoặc phương pháp khác tùy trường hợp.",
          "Người có tiền sử gia đình, polyp đại tràng, bệnh viêm ruột mạn tính hoặc hội chứng ung thư di truyền có thể cần kiểm tra sớm và thường xuyên hơn."
        ]
      },
      {
        "heading": "Nội soi không phát hiện được tất cả ung thư đường tiêu hóa",
        "paragraphs": [
          "Đây là điểm người bệnh cần hiểu rõ để tránh kỳ vọng quá mức.",
          "Nội soi dạ dày chủ yếu quan sát thực quản, dạ dày và phần đầu tá tràng. Nội soi đại tràng kiểm tra trực tràng và đại tràng. Hai phương pháp này không trực tiếp khảo sát đầy đủ:",
          "Gan.",
          "Đường mật.",
          "Tụy.",
          "Phần lớn ruột non.",
          "Các hạch hoặc cơ quan nằm ngoài thành ống tiêu hóa.",
          "Vì vậy, tùy triệu chứng, bác sĩ có thể cần phối hợp siêu âm, CT, cộng hưởng từ, siêu âm nội soi, xét nghiệm máu hoặc các kỹ thuật khác. Một kết quả nội soi bình thường không đồng nghĩa đã loại trừ mọi loại ung thư trong ổ bụng.",
          "Khi nào nên nội soi để kiểm tra sớm?",
          "Người bệnh không nên tự đặt lịch nội soi liên tục chỉ vì lo sợ ung thư. Tuy nhiên, nên đi khám để được đánh giá khả năng nội soi khi có các biểu hiện như:",
          "Nuốt nghẹn hoặc nuốt đau.",
          "Nôn kéo dài hoặc nôn ra máu.",
          "Đi ngoài phân đen hoặc có máu trong phân.",
          "Đau thượng vị, đau bụng hoặc khó tiêu kéo dài.",
          "Sụt cân không chủ ý.",
          "Chán ăn hoặc nhanh no.",
          "Thiếu máu thiếu sắt không rõ nguyên nhân.",
          "Thay đổi thói quen đại tiện kéo dài.",
          "Táo bón hoặc tiêu chảy mới xuất hiện và không cải thiện.",
          "Phân thay đổi hình dạng kéo dài.",
          "Kết quả xét nghiệm máu ẩn trong phân bất thường.",
          "Có khối bất thường trong ổ bụng.",
          "Tiền sử gia đình mắc ung thư dạ dày hoặc đại trực tràng.",
          "Các triệu chứng này có thể xuất hiện trong nhiều bệnh lành tính. Mục đích của việc đi khám là tìm đúng nguyên nhân, không phải tự kết luận mình mắc ung thư.",
          "Cần đến cơ sở y tế ngay nếu người bệnh nôn ra nhiều máu, đi ngoài ra máu lượng lớn, phân đen kèm choáng váng, đau bụng dữ dội, bụng cứng, khó thở hoặc có dấu hiệu mất ý thức.",
          "Không có triệu chứng có cần nội soi không?",
          "Có thể cần, tùy tuổi và nguy cơ.",
          "Ung thư đường tiêu hóa giai đoạn đầu có thể chưa gây triệu chứng. Vì vậy, nội soi không chỉ dành cho người đang đau bụng hoặc đi ngoài ra máu.",
          "Bác sĩ có thể cân nhắc nội soi khi người bệnh:",
          "Đến tuổi tầm soát ung thư đại trực tràng.",
          "Có người thân trực hệ mắc ung thư đường tiêu hóa.",
          "Từng có polyp đại tràng.",
          "Từng phát hiện loạn sản, dị sản ruột hoặc Barrett thực quản.",
          "Có bệnh viêm ruột mạn tính.",
          "Mang đột biến gene hoặc hội chứng ung thư di truyền.",
          "Từng có kết quả nội soi hoặc xét nghiệm bất thường.",
          "Thuộc nhóm nguy cơ ung thư dạ dày tăng cao.",
          "Lịch nội soi không nên được sao chép từ người khác. Một người từng có không nên được sao chép từ người khác. Một người từng có nhiều polyp nguy cơ cao có thể cần theo dõi sớm hơn nhiều so với người đã nội soi bình thường và không có yếu tố nguy cơ."
        ]
      },
      {
        "heading": "Chuẩn bị tốt giúp nội soi phát hiện tổn thương chính xác hơn",
        "paragraphs": [
          "Chất lượng nội soi không chỉ phụ thuộc vào thiết bị mà còn liên quan đến quá trình chuẩn bị."
        ]
      },
      {
        "heading": "Trước nội soi dạ dày",
        "paragraphs": [
          "Người bệnh thường cần nhịn ăn và uống theo hướng dẫn để dạ dày trống. Thức ăn còn lại có thể che khuất niêm mạc, làm giảm khả năng quan sát và tăng nguy cơ trong quá trình thực hiện."
        ]
      },
      {
        "heading": "Trước nội soi đại tràng",
        "paragraphs": [
          "Đại tràng cần được làm sạch bằng thuốc và chế độ ăn theo hướng dẫn. Nếu còn nhiều phân, bác sĩ có thể khó quan sát các polyp nhỏ hoặc tổn thương phẳng. Trong một số trường hợp, người bệnh phải nội soi lại vì chất lượng làm sạch chưa đạt yêu cầu.",
          "Người bệnh cần thông báo cho bác sĩ nếu:",
          "Đang dùng thuốc chống đông hoặc thuốc chống kết tập tiểu cầu.",
          "Có bệnh tim, phổi, gan hoặc thận.",
          "Đang mang thai hoặc nghi ngờ mang thai.",
          "Có tiền sử dị ứng thuốc.",
          "Từng gặp vấn đề khi gây mê hoặc an thần.",
          "Đang điều trị tiểu đường.",
          "Không nên tự ý ngừng thuốc trước nội soi, đặc biệt là thuốc tim mạch và thuốc chống đông. Bác sĩ sẽ hướng dẫn cách điều chỉnh phù hợp với từng trường hợp.",
          "Nội soi gây mê có làm giảm độ chính xác không?",
          "Nội soi gây mê hoặc nội soi có an thần giúp người bệnh bớt khó chịu, hạn chế phản xạ nôn và nằm yên hơn trong quá trình thực hiện. Điều này không làm giảm giá trị quan sát nếu quy trình được thực hiện đúng.",
          "Tuy nhiên, người bệnh cần được đánh giá sức khỏe trước khi sử dụng thuốc an thần hoặc gây mê. Sau nội soi, không nên tự lái xe, vận hành máy móc hoặc thực hiện công việc đòi hỏi sự tỉnh táo trong thời gian được nhân viên y tế hướng dẫn.",
          "Nội soi có thể bỏ sót tổn thương không?",
          "Có thể. Không có phương pháp kiểm tra nào chính xác tuyệt đối.",
          "Khả năng phát hiện tổn thương có thể bị ảnh hưởng bởi:",
          "Đại tràng chưa được làm sạch tốt.",
          "Dạ dày còn thức ăn.",
          "Tổn thương quá nhỏ hoặc nằm ở tràng chưa được làm sạch tốt.",
          "Dạ dày còn thức ăn.",
          "Tổn thương quá nhỏ hoặc nằm ở vị trí khó quan sát.",
          "Tổn thương dạng phẳng, màu sắc gần giống niêm mạc bình thường.",
          "Co thắt, chảy máu hoặc viêm làm che khuất hình ảnh.",
          "Thời gian và mức độ kỹ lưỡng của quá trình quan sát.",
          "Kinh nghiệm của bác sĩ và chất lượng thiết bị.",
          "Vì vậy, nếu triệu chứng tiếp tục kéo dài dù kết quả nội soi trước đó bình thường, người bệnh vẫn nên tái khám. Bác sĩ có thể xem lại hình ảnh, đánh giá chất lượng lần nội soi trước hoặc chỉ định phương pháp kiểm tra khác.",
          "Sau khi nội soi phát hiện tổn thương nghi ngờ, điều gì sẽ xảy ra?",
          "Một tổn thương nghi ngờ trên nội soi chưa đồng nghĩa chắc chắn là ung thư. Quy trình tiếp theo có thể bao gồm:",
          "Lấy mẫu sinh thiết: Mô được gửi làm giải phẫu bệnh.",
          "Đánh giá đặc điểm tổn thương: Vị trí, kích thước, hình dạng và khả năng xâm lấn.",
          "Thực hiện thêm xét nghiệm: Có thể gồm CT, cộng hưởng từ, siêu âm nội soi hoặc xét nghiệm máu.",
          "Xác định giai đoạn nếu là ung thư: Đánh giá bệnh còn khu trú hay đã lan rộng.",
          "Hội chẩn đa chuyên khoa: Lựa chọn giữa cắt qua nội soi, phẫu thuật, hóa trị, xạ trị hoặc phương pháp phối hợp.",
          "Xây dựng kế hoạch theo dõi: Áp dụng cho tổn thương tiền ung thư, polyp hoặc người đã điều trị.",
          "Đây là thời điểm chuyên khoa Tiêu hóa và Ung bướu cần phối hợp chặt chẽ. Bác sĩ Tiêu hóa giúp phát hiện, lấy mẫu và đánh giá tổn thương qua nội soi; bác sĩ Ung bướu cùng các chuyên khoa liên quan tiếp tục xác định giai đoạn và lựa chọn hướng điều trị phù hợp nếu kết quả cho thấy có ung thư."
        ]
      },
      {
        "heading": "Nội soi tiêu hóa tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Người có triệu chứng tiêu hóa kéo dài, thuộc nhóm nguy cơ cao hoặc đến tuổi tầm soát có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ đánh giá trước khi nội soi.",
          "Tại đây, người bệnh được khai thác triệu chứng, tiền sử cá nhân, tiền sử gia đình và các kết quả kiểm tra trước đó. Bác sĩ sẽ tư vấn nên nội soi dạ dày, nội soi đại tràng, kết hợp cả hai hay lựa chọn phương pháp khác.",
          "Khi nội soi phát hiện polyp hoặc vùng niêm mạc bất thường, mẫu mô có thể được chuyển làm giải phẫu bệnh. Nếu có tổn thương tiền ung thư hoặc ung thư, các chuyên khoa Tiêu hóa, Ung bướu, Ngoại khoa, Chẩn đoán hình ảnh và Giải phẫu bệnh có thể phối hợp đánh giá để xây dựng hướng xử trí phù hợp với tình trạng cụ thể.",
          "Mục tiêu không phải là chỉ tìm kiếm ung thư, mà còn giúp người bệnh phát hiện và điều trị đúng các bệnh lý tiêu hóa thường gặp như viêm, loét, nhiễm H. pylori, trào ngược, polyp hoặc viêm đại tràng."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp về nội soi và ung thư đường tiêu hóa",
        "paragraphs": [
          "Nội soi bình thường có loại trừ hoàn toàn ung thư không?",
          "Không. Nội soi bình thường giúp giảm khả năng có tổn thương tại khu vực đã được quan sát, nhưng không loại trừ mọi bệnh ung thư trong cơ thể. Độ tin cậy còn phụ thuộc vào chất lượng chuẩn bị, phạm vi quan sát và đặc điểm tổn thương.",
          "Có thể chỉ xét nghiệm dấu ấn ung thư thay cho nội soi không?",
          "Không nên. Các dấu ấn ung thư có thể bình thường ở người mắc ung thư giai đoạn sớm và cũng có thể tăng do bệnh lành tính. Khi cần quan sát thực quản, dạ dày hoặc đại trực tràng, xét nghiệm máu không thay thế được nội soi và sinh thiết.",
          "Cắt polyp có nghĩa là đã mắc ung thư không?",
          "Không. Phần lớn polyp không phải ung thư. Polyp được cắt để xác định bản chất và phòng ngừa nguy cơ tiến triển trong tương lai. Kết quả giải phẫu bệnh mới giúp bác sĩ đánh giá chính xác.",
          "Nội soi một lần bình thường có cần thực hiện lại không?",
          "Có thể cần, nhưng không phải năm nào cũng phải nội soi. Thời điểm lặp lại phụ thuộc vào loại nội soi, kết quả lần trước, chất lượng chuẩn bị, tuổi, triệu chứng và yếu tố nguy cơ của từng người.",
          "Kết luận",
          "Nội soi tiêu hóa có vai trò quan trọng trong việc phát hiện sớm ung thư thực quản, dạ dày và đại trực tràng. Phương pháp này giúp bác sĩ quan sát trực tiếp niêm mạc, phát hiện tổn thương tiền ung thư, lấy mẫu sinh thiết và loại bỏ một số polyp hoặc tổn thương giai đoạn sớm.",
          "Tuy nhiên, nội soi không phải xét nghiệm tìm được tất cả các loại ung thư và cũng không cần thực hiện tràn lan. Giá trị cao nhất của nội soi đến từ việc đúng người, đúng thời điểm, chuẩn bị đúng và được theo dõi đúng sau khi có kết quả.",
          "Nếu có triệu chứng tiêu hóa kéo dài, tiền sử gia đình mắc ung thư hoặc đã đến tuổi tầm soát, người bệnh nên trao đổi với bác sĩ thay vì chờ đến khi đau nhiều hoặc sụt cân rõ rệt mới kiểm tra. Phát hiện sớm không chỉ mở ra thêm cơ hội điều trị mà trong một số trường hợp còn giúp loại bỏ tổn thương trước khi ung thư hình thành.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đon hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "ung-thu-vu-khi-nao-can-sieu-am-chup-nhu-anh-hoac-sinh-thiet": {
    "sourceFile": "16.Ung thư vú khi nào cần siêu âm, chụp chiếu hoặc sinh thiết.docx",
    "title": "Ung thư vú: Khi nào cần siêu âm, chụp chiếu hoặc sinh thiết?",
    "excerpt": "Phát hiện một khối ở vú thường khiến nhiều phụ nữ lo lắng và muốn làm ngay “tất cả các xét nghiệm”. Tuy nhiên, không phải ai cũng cần siêu âm, chụp nhũ ảnh, cộng hưởng từ và sinh thiết cùng một lúc.",
    "intro": [
      "Phát hiện một khối ở vú thường khiến nhiều phụ nữ lo lắng và muốn làm ngay “tất cả các xét nghiệm”. Tuy nhiên, không phải ai cũng cần siêu âm, chụp nhũ ảnh, cộng hưởng từ và sinh thiết cùng một lúc.",
      "Mỗi phương pháp có một vai trò khác nhau. Siêu âm giúp quan sát cấu trúc khối bất thường, chụp nhũ ảnh có giá trị trong tầm soát và phát hiện những thay đổi nhỏ, còn sinh thiết là bước lấy mô để xác định chính xác tổn thương có phải ung thư hay không. Việc lựa chọn phương pháp nào phụ thuộc vào tuổi, triệu chứng, nguy cơ cá nhân và kết quả kiểm tra trước đó.",
      "Có khối ở vú có đồng nghĩa với ung thư không?",
      "Không. Phần lớn những thay đổi ở vú là lành tính, chẳng hạn như nang chứa dịch, u xơ tuyến, thay đổi mô vú theo nội tiết, viêm hoặc tắc tuyến sữa. Dù vậy, chỉ dựa vào cảm giác khi sờ thường không thể xác định chắc chắn bản chất của khối.",
      "Một khối mềm, di động hoặc đau theo chu kỳ kinh nguyệt thường ít đáng lo hơn một khối cứng, ít di động và ngày càng lớn. Tuy nhiên, những đặc điểm này chỉ có giá trị gợi ý. Người bệnh vẫn cần được bác sĩ khám và lựa chọn phương pháp chẩn đoán hình ảnh phù hợp.",
      "Các tổ chức chuyên môn cũng nhấn mạnh rằng nhiều bệnh lý lành tính có thể gây khối, sưng đau, thay đổi da hoặc tiết dịch núm vú. Vì vậy, phát hiện bất thường không nên dẫn đến tự kết luận ung thư, nhưng cũng không nên chỉ tự theo dõi kéo dài.",
      "Tầm soát và kiểm tra chẩn đoán khác nhau thế nào?",
      "Đây là hai tình huống rất dễ bị nhầm lẫn."
    ],
    "sections": [
      {
        "heading": "Tầm soát ung thư vú",
        "paragraphs": [
          "Tầm soát được thực hiện ở phụ nữ chưa có triệu chứng, nhằm phát hiện ung thư khi tổn thương còn nhỏ và chưa thể sờ thấy.",
          "Với phụ nữ có nguy cơ trung bình, hướng dẫn của Lực lượng Đặc nhiệm Dịch vụ Dự phòng Hoa Kỳ năm 2024 khuyến nghị chụp nhũ ảnh hai năm một lần từ 40 đến 74 tuổi. Các hướng dẫn chuyên môn khác có thể đề xuất khoảng cách hoặc thời điểm khác, vì vậy lịch tầm soát nên được cá nhân hóa theo nguy cơ và tư vấn của bác sĩ."
        ]
      },
      {
        "heading": "Kiểm tra chẩn đoán",
        "paragraphs": [
          "Kiểm tra chẩn đoán được thực hiện khi người bệnh:",
          "Sờ thấy khối ở vú hoặc nách.",
          "Có tiết dịch núm vú bất thường.",
          "Đau khu trú kéo dài.",
          "Núm vú mới bị tụt vào trong.",
          "Da vú lõm, dày hoặc thay đổi màu sắc.",
          "Có kết quả tầm soát cần kiểm tra thêm.",
          "Trong trường hợp này, bác sĩ có thể chỉ định siêu âm khu trú, chụp nhũ ảnh chẩn đoán, chụp cắt lớp vú 3D hoặc phương pháp khác. Đây không còn là một lần tầm soát thông thường.",
          "Khi nào cần siêu âm vú?",
          "Siêu âm vú sử dụng sóng âm để tạo hình ảnh mô bên trong vú. Phương pháp này không sử dụng tia X, không xâm lấn và thường được thực hiện nhanh chóng.",
          "Siêu âm đặc biệt có giá trị trong việc:",
          "Quan sát khối mà người bệnh hoặc bác sĩ sờ thấy.",
          "Phân biệt khối chứa dịch với khối mô đặc.",
          "Đánh giá một vùng bất thường phát hiện trên chụp nhũ ảnh.",
          "Quan sát hạch ở vùng nách.",
          "Hướng dẫn kim khi cần chọc hút hoặc sinh thiết.",
          "Siêu âm có thể giúp mô tả hình dạng, bờ, hướng phát triển và cấu trúc bên trong của tổn thương. Tuy nhiên, hình ảnh siêu âm không phải lúc nào cũng đủ để kết luận chắc chắn lành tính hay ác tính."
        ]
      },
      {
        "heading": "Phụ nữ dưới 30 tuổi sờ thấy khối ở vú",
        "paragraphs": [
          "Ở phụ nữ dưới 30 tuổi có khối sờ thấy, siêu âm thường là phương pháp kiểm tra ban đầu phù hợp. Mô vú ở độ tuổi trẻ thường dày, khiến chụp nhũ ảnh có thể khó quan sát hơn trong một số trường hợp.",
          "Nếu hình ảnh siêu âm hoàn toàn lành tính, bác sĩ có thể hướng dẫn theo dõi. Nếu tổn thương có đặc điểm nghi ngờ, người bệnh có thể được chỉ định chụp nhũ ảnh chẩn đoán hoặc sinh thiết."
        ]
      },
      {
        "heading": "Phụ nữ từ 30 đến 39 tuổi",
        "paragraphs": [
          "Trong nhóm tuổi này, siêu âm và chụp nhũ ảnh chẩn đoán đều có thể được sử dụng để đánh giá khối ở vú. Bác sĩ sẽ lựa chọn phương pháp đầu tiên dựa trên triệu chứng, mô vú, tiền sử gia đình và đặc điểm khi thăm khám. Nhiều trường hợp cần phối hợp cả hai để có thông tin đầy đủ hơn."
        ]
      },
      {
        "heading": "Phụ nữ đang mang thai hoặc cho con bú",
        "paragraphs": [
          "Những thay đổi về nội tiết trong thai kỳ và thời gian cho con bú có thể khiến vú căng, dày hoặc xuất hiện khối do tắc sữa và viêm. Tuy nhiên, khối mới xuất hiện và không giảm vẫn cần được kiểm tra.",
          "Siêu âm thường là phương pháp đầu tiên khi phụ nữ mang thai có khối hoặc đau khu trú ở vú. Nếu cần thêm thông tin, bác sĩ vẫn có thể cân nhắc chụp nhũ ảnh chẩn đoán với quy trình bảo vệ phù hợp. Không nên trì hoãn việc kiểm tra chỉ vì đang mang thai hoặc nuôi con bằng sữa mẹ.",
          "Siêu âm có thay thế được chụp nhũ ảnh không?",
          "Không hoàn toàn.",
          "Siêu âm nhìn rõ nhiều khối mô đặc, nang chứa dịch và vùng mô vú dày, nhưng có thể không phát hiện tốt một số vi vôi hóa nhỏ. Trong khi đó, những cụm vôi hóa bất thường đôi khi là dấu hiệu sớm của ung thư vú và thường được quan sát rõ hơn trên chụp nhũ ảnh.",
          "Vì vậy, phụ nữ trên độ tuổi tầm soát không nên chỉ siêu âm vú hằng năm rồi cho rằng đã thay thế được chụp nhũ ảnh. Hai phương pháp bổ sung cho nhau và được chỉ định theo từng tình huống.",
          "Khi nào cần chụp nhũ ảnh?",
          "Chụp nhũ ảnh sử dụng tia X liều thấp để tạo hình ảnh của mô vú. Phương pháp này có thể phát hiện khối nhỏ, biến dạng cấu trúc hoặc vi vôi hóa trước khi người bệnh sờ thấy bất thường.",
          "Có hai mục đích chụp nhũ ảnh chính."
        ]
      },
      {
        "heading": "Chụp nhũ ảnh tầm soát",
        "paragraphs": [
          "Phương pháp này dành cho phụ nữ chưa có triệu chứng. Lịch chụp phụ thuộc vào tuổi, mức độ nguy cơ, sức khỏe tổng thể và hướng dẫn được áp dụng.",
          "Phụ nữ có nguy cơ trung bình nên bắt đầu trao đổi với bác sĩ về tầm soát từ tuổi 40. Chụp nhũ ảnh kỹ thuật số và chụp cắt lớp vú kỹ thuật số, còn gọi là nhũ ảnh 3D, đều là những phương pháp tầm soát được sử dụng hiện nay."
        ]
      },
      {
        "heading": "Chụp nhũ ảnh chẩn đoán",
        "paragraphs": [
          "Chụp chẩn đoán được thực hiện khi đã có triệu chứng hoặc khi lần tầm soát trước phát hiện vùng cần quan sát kỹ hơn.",
          "Phụ nữ từ 40 tuổi trở lên sờ thấy khối thường được chỉ định chụp nhũ ảnh chẩn đoán hoặc chụp cắt lớp vú 3D trước, sau đó có thể phối hợp siêu âm khu trú. Ngay cả khi hình ảnh chụp nhũ ảnh chưa thấy bất thường rõ, siêu âm vẫn có thể cần thiết để kiểm tra đúng vùng người bệnh đang sờ thấy."
        ]
      },
      {
        "heading": "Khi chụp nhũ ảnh phát hiện vi vôi hóa",
        "paragraphs": [
          "Vôi hóa là những điểm canxi nhỏ trong mô vú. Nhiều dạng vôi hóa là lành tính và xuất hiện do tuổi tác, chấn thương hoặc viêm cũ.",
          "Tuy nhiên, khi các điểm vôi hóa có hình dạng hoặc cách phân bố bất thường, bác sĩ có thể chỉ định chụp phóng đại, theo dõi sau một khoảng thời gian hoặc sinh thiết dưới hướng dẫn của chụp nhũ ảnh.",
          "Chụp nhũ ảnh có đau không?",
          "Trong lúc chụp, vú được ép giữa hai tấm của máy để mô vú trải đều và hình ảnh rõ hơn. Người bệnh có thể cảm thấy căng hoặc khó chịu trong vài giây, nhưng phần lớn vẫn có thể hoàn thành thủ thuật.",
          "Với phụ nữ chưa mãn kinh, có thể lựa chọn thời điểm vú ít căng hơn, thường là sau kỳ kinh, nếu việc chụp không khẩn cấp. Nếu đang có triệu chứng đáng lo, không nên trì hoãn chỉ để chờ đến thời điểm “dễ chịu nhất”.",
          "Khi nào cần chụp cộng hưởng từ vú?",
          "Cộng hưởng từ vú, thường gọi là MRI vú, sử dụng từ trường và sóng vô tuyến để tạo hình ảnh chi tiết. Phương pháp này không sử dụng tia X nhưng thường cần tiêm thuốc tương phản.",
          "MRI vú không phải xét nghiệm tầm soát thường quy dành cho tất cả phụ nữ. Phương pháp này thường được cân nhắc trong các trường hợp:",
          "Người có nguy cơ ung thư vú cao do đột biến gene hoặc tiền sử gia đình đặc biệt.",
          "Người từng xạ trị vùng ngực khi còn trẻ.",
          "Cần đánh giá phạm vi tổn thương sau khi đã chẩn đoán ung thư.",
          "Kết quả siêu âm và chụp nhũ ảnh chưa giải thích đầy đủ bất thường.",
          "Cần kiểm tra tổn thương chỉ nhìn thấy trên MRI.",
          "Đánh giá một số vấn đề liên quan đến túi ngực.",
          "Với phụ nữ có nguy cơ cao, Hiệp hội Ung thư Hoa Kỳ khuyến nghị MRI vú được thực hiện cùng với chụp nhũ ảnh, thường bắt đầu vào khoảng 30 tuổi tùy hoàn cảnh. MRI không thay thế hoàn toàn nhũ ảnh vì mỗi phương pháp có thể phát hiện những loại tổn thương khác nhau.",
          "MRI rất nhạy nhưng cũng có thể phát hiện nhiều vùng bất thường lành tính, dẫn đến việc phải chụp bổ sung hoặc sinh thiết. Vì vậy, không nên tự đăng ký MRI vú chỉ để “kiểm tra cho chắc” khi chưa được đánh giá nguy cơ.",
          "Khi nào cần sinh thiết vú?",
          "Sinh thiết là thủ thuật lấy tế bào hoặc một phần mô từ vùng bất thường để bác sĩ giải phẫu bệnh quan sát dưới kính hiển vi.",
          "Đây là điểm khác biệt quan trọng: siêu âm, chụp nhũ ảnh và MRI có thể cho biết một tổn thương đáng nghi đến mức nào, nhưng sinh thiết mới là phương pháp xác định chắc chắn có ung thư hay không.",
          "Bác sĩ có thể đề nghị sinh thiết khi:",
          "Khối có hình dạng hoặc bờ nghi ngờ trên siêu âm.",
          "Chụp nhũ ảnh thấy cụm vi vôi hóa bất thường.",
          "Kết quả được phân loại BI-RADS 4 hoặc BI-RADS 5.",
          "Khối tăng kích thước trong quá trình theo dõi.",
          "Có bất thường đáng ngờ trên MRI.",
          "Khối sờ thấy có tính chất đáng lo dù một số hình ảnh chưa cho thấy rõ nguyên nhân.",
          "Hạch nách có đặc điểm bất thường.",
          "Da hoặc núm vú có tổn thương kéo dài cần lấy mẫu kiểm tra.",
          "Việc được chỉ định sinh thiết không đồng nghĩa người bệnh chắc chắn mắc ung thư. Sinh thiết được thực hiện chính vì hình ảnh chưa đủ khả năng trả lời câu hỏi này.",
          "Có những loại sinh thiết vú nào?"
        ]
      },
      {
        "heading": "Chọc hút bằng kim nhỏ",
        "paragraphs": [
          "Bác sĩ sử dụng một kim nhỏ để lấy tế bào hoặc hút dịch. Phương pháp này có thể được sử dụng với một số nang hoặc hạch, nhưng lượng mô thu được thường ít hơn sinh thiết kim lõi."
        ]
      },
      {
        "heading": "Sinh thiết kim lõi",
        "paragraphs": [
          "Một kim chuyên dụng lấy ra các mảnh mô nhỏ từ tổn thương. Đây là phương pháp thường được sử dụng khi cần đánh giá cấu trúc mô và xác định bản chất của khối.",
          "Nếu tổn thương nhìn thấy rõ trên siêu âm, bác sĩ có thể thực hiện sinh thiết dưới hướng dẫn siêu âm. Phương pháp này ít xâm lấn hơn phẫu thuật và không sử dụng tia ion hóa."
        ]
      },
      {
        "heading": "Sinh thiết dưới hướng dẫn nhũ ảnh",
        "paragraphs": [
          "Phương pháp này thường được sử dụng khi tổn thương, đặc biệt là vi vôi hóa nhỏ, nhìn thấy trên chụp nhũ ảnh nhưng khó quan sát bằng siêu âm. Máy chụp giúp xác định chính xác vị trí để đưa kim lấy mẫu."
        ]
      },
      {
        "heading": "Sinh thiết dưới hướng dẫn MRI",
        "paragraphs": [
          "Được cân nhắc khi bất thường chỉ nhìn thấy rõ trên MRI mà không xác định được bằng siêu âm hoặc nhũ ảnh."
        ]
      },
      {
        "heading": "Sinh thiết phẫu thuật",
        "paragraphs": [
          "Một phần hoặc toàn bộ khối được lấy ra bằng phẫu thuật. Hiện nay, nhiều tổn thương có thể được chẩn đoán trước bằng sinh thiết kim, vì vậy sinh thiết phẫu thuật không phải lúc nào cũng là bước đầu tiên.",
          "Kết quả BI-RADS có ý nghĩa gì?",
          "BI-RADS là hệ thống được bác sĩ chẩn đoán hình ảnh sử dụng để mô tả mức độ bất thường và đề xuất bước tiếp theo.",
          "Có thể hiểu đơn giản như sau:",
          "BI-RADS 0: Chưa đủ thông tin, cần chụp hoặc kiểm tra bổ sung.",
          "BI-RADS 1: Không thấy bất thường.",
          "BI-RADS 2: Phát hiện lành tính.",
          "BI-RADS 3: Khả năng lành tính rất cao, thường được hẹn theo dõi ngắn hạn.",
          "BI-RADS 4: Có bất thường nghi ngờ, thường cần cân nhắc sinh thiết.",
          "BI-RADS 5: Hình ảnh rất nghi ngờ ác tính, cần sinh thiết để xác định.",
          "BI-RADS 6: Đã có kết quả sinh thiết xác nhận ung thư.",
          "BI-RADS 3 không có nghĩa là “sắp thành ung thư”, mà thường là tổn thương có khả năng lành tính cao nhưng cần theo dõi đúng lịch để bảo đảm không thay đổi. Ngược lại, BI-RADS 4 hoặc 5 vẫn chưa phải chẩn đoán cuối cùng; kết luận cần dựa vào mô bệnh học.",
          "Có thể tóm tắt lựa chọn phương pháp theo độ tuổi không?",
          "Với một khối mới sờ thấy, hướng kiểm tra thường có thể được hình dung như sau:"
        ]
      },
      {
        "heading": "Dưới 30 tuổi",
        "paragraphs": [
          "Siêu âm khu trú thường là lựa chọn ban đầu. Nếu hình ảnh nghi ngờ, bác sĩ có thể chỉ định thêm chụp nhũ ảnh chẩn đoán hoặc sinh thiết."
        ]
      },
      {
        "heading": "Từ 30 đến 39 tuổi",
        "paragraphs": [
          "Siêu âm và chụp nhũ ảnh chẩn đoán đều có thể phù hợp. Phương pháp nào được thực hiện trước phụ thuộc vào đặc điểm của khối và đánh giá của bác sĩ."
        ]
      },
      {
        "heading": "Từ 40 tuổi trở lên",
        "paragraphs": [
          "Chụp nhũ ảnh chẩn đoán hoặc nhũ ảnh 3D thường được thực hiện trước, sau đó phối hợp siêu âm khu trú khi cần."
        ]
      },
      {
        "heading": "Không có triệu chứng",
        "paragraphs": [
          "Phụ nữ nên thực hiện tầm soát bằng chụp nhũ ảnh theo độ tuổi và mức nguy cơ. Siêu âm có thể được bổ sung trong một số trường hợp nhưng không mặc nhiên thay thế nhũ ảnh.",
          "Đây chỉ là sơ đồ tham khảo. Bác sĩ có thể điều chỉnh tùy tiền sử, thai kỳ, cấu trúc mô vú và kết quả kiểm tra trước đó.",
          "Dấu hiệu nào ở vú cần đi khám sớm?",
          "Phụ nữ nên đi khám nếu phát hiện:",
          "Khối mới ở vú hoặc vùng nách.",
          "Một bên vú thay đổi kích thước hoặc hình dạng rõ rệt.",
          "Da vú lõm xuống, nhăn hoặc giống vỏ cam.",
          "Da vú đỏ, sưng, nóng hoặc dày lên kéo dài.",
          "Núm vú mới bị tụt vào trong hoặc đổi hướng.",
          "Tiết dịch núm vú khi không mang thai hoặc cho con bú.",
          "Dịch trong, dịch máu hoặc dịch chỉ chảy từ một bên.",
          "Vùng da quanh núm vú bong vảy, đóng vảy hoặc loét lâu lành.",
          "Đau khu trú kéo dài không liên quan rõ với chu kỳ kinh.",
          "Hạch dưới nách hoặc gần xương đòn.",
          "Một bên vú to nhanh, nặng hoặc nóng đỏ bất thường.",
          "Ung thư vú không phải lúc nào cũng tạo thành một khối rõ ràng. Một số trường hợp có thể biểu hiện chủ yếu bằng thay đổi da, núm vú hoặc tình trạng sưng toàn bộ vú.",
          "Nếu vú đỏ, đau và sốt, nguyên nhân có thể là viêm hoặc áp xe, đặc biệt ở phụ nữ đang cho con bú. Tuy nhiên, khi điều trị viêm không cải thiện như dự kiến, người bệnh cần được đánh giá lại thay vì tiếp tục tự dùng thuốc.",
          "Chụp bình thường nhưng vẫn sờ thấy khối thì phải làm gì?",
          "Một kết quả hình ảnh bình thường là tín hiệu tích cực, nhưng người bệnh không nên bỏ qua một khối vẫn tồn tại hoặc ngày càng rõ.",
          "Bác sĩ cần đối chiếu ba yếu tố:",
          "Vị trí người bệnh sờ thấy.",
          "Đặc điểm khi khám trực tiếp.",
          "Hình ảnh siêu âm hoặc chụp nhũ ảnh.",
          "Nếu ba yếu tố không phù hợp với nhau, bác sĩ có thể yêu cầu siêu âm lại, chụp bổ sung, tái khám sau một thời gian hoặc sinh thiết. Không nên tự kết luận “máy không thấy thì chắc chắn không có gì” khi cơ thể vẫn xuất hiện thay đổi rõ ràng.",
          "Sinh thiết xong cần làm gì?",
          "Sau sinh thiết, người bệnh có thể hơi đau, bầm hoặc sưng nhẹ tại vị trí lấy mẫu. Cần giữ vùng thủ thuật sạch, theo dõi theo hướng dẫn và liên hệ cơ sở y tế nếu chảy máu kéo dài, sưng tăng, đau nhiều, sốt hoặc có dấu hiệu nhiễm trùng.",
          "Kết quả giải phẫu bệnh có thể cho thấy:",
          "Tổn thương lành tính.",
          "Tổn thương có tế bào bất thường hoặc nguy cơ cao.",
          "Ung thư tại chỗ.",
          "Ung thư xâm lấn.",
          "Mẫu chưa đủ để kết luận và cần lấy thêm mô.",
          "Nếu xác định ung thư, mô sinh thiết thường được kiểm tra thêm các đặc điểm như thụ thể nội tiết và HER2. Những thông tin này giúp bác sĩ đánh giá loại ung thư và lựa chọn hướng điều trị phù hợp."
        ]
      },
      {
        "heading": "Khám và kiểm tra bất thường ở vú tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi phát hiện khối, đau khu trú, tiết dịch hoặc thay đổi bất thường ở vú, phụ nữ có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám và đánh giá nguy cơ.",
          "Tùy độ tuổi và triệu chứng, bác sĩ có thể tư vấn siêu âm vú, chụp nhũ ảnh, các phương pháp chẩn đoán hình ảnh bổ sung hoặc sinh thiết khi cần. Kết quả được phối hợp giữa chuyên khoa Ung bướu, Ngoại khoa, Chẩn đoán hình ảnh và Giải phẫu bệnh nhằm xác định đúng bản chất tổn thương.",
          "Mục tiêu của quá trình kiểm tra không phải là thực hiện càng nhiều kỹ thuật càng tốt, mà là chọn đúng phương pháp, đúng trình tự và hạn chế những thủ thuật không cần thiết."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp",
        "paragraphs": [
          "Đau vú có phải là dấu hiệu ung thư không?",
          "Phần lớn đau vú liên quan đến nội tiết, chu kỳ kinh nguyệt, viêm, chấn thương hoặc các nguyên nhân lành tính. Tuy nhiên, đau khu trú tại một điểm, kéo dài, tăng dần hoặc đi kèm khối và thay đổi da vẫn nên được kiểm tra.",
          "Siêu âm thấy u lành có cần sinh thiết không?",
          "Không phải mọi khối lành tính đều cần sinh thiết. Bác sĩ có thể chỉ định theo dõi nếu hình ảnh điển hình và phù hợp với thăm khám. Sinh thiết được cân nhắc khi đặc điểm chưa rõ, khối thay đổi hoặc kết quả hình ảnh không phù hợp với triệu chứng.",
          "BI-RADS 4 có chắc chắn là ung thư không?",
          "Không. BI-RADS 4 nghĩa là tổn thương có mức độ nghi ngờ đủ để cân nhắc sinh thiết. Chỉ kết quả giải phẫu bệnh mới xác định có ung thư hay không.",
          "Có thể làm xét nghiệm máu thay cho sinh thiết không?",
          "Không. Xét nghiệm máu hoặc dấu ấn ung thư không thể thay thế sinh thiết trong chẩn đoán một tổn thương nghi ngờ ở vú.",
          "Sau sinh thiết, khối có cần phẫu thuật không?",
          "Điều này phụ thuộc vào kết quả mô bệnh học. Tổn thương lành tính có thể chỉ cần theo dõi, trong khi tổn thương nguy cơ cao hoặc ung thư cần được bác sĩ tư vấn hướng xử trí tiếp theo.",
          "Kết luận",
          "Siêu âm, chụp nhũ ảnh, MRI và sinh thiết không phải những bước kiểm tra có thể thay thế hoàn toàn cho nhau.",
          "Siêu âm thường được ưu tiên ở phụ nữ trẻ, phụ nữ mang thai hoặc khi cần quan sát một khối cụ thể. Chụp nhũ ảnh đóng vai trò quan trọng trong tầm soát và phát hiện các thay đổi nhỏ như vi vôi hóa. MRI chủ yếu dành cho nhóm nguy cơ cao hoặc một số tình huống chuyên biệt. Sinh thiết được thực hiện khi cần xác định chính xác bản chất của tổn thương.",
          "Điều quan trọng nhất là không tự lựa chọn xét nghiệm dựa trên nỗi lo, cũng không trì hoãn khi cơ thể có thay đổi mới. Một quy trình thăm khám đúng sẽ giúp phần lớn phụ nữ nhận ra rằng tổn thương của mình là lành tính; đồng thời giúp những trường hợp cần điều trị được phát hiện sớm hơn.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "ung-thu-co-tu-cung-va-vai-tro-cua-xet-nghiem-hpv": {
    "sourceFile": "17.Ung thư cổ tử cung và vai trò của xét nghiệm HPV.docx",
    "title": "Ung thư cổ tử cung và vai trò của xét nghiệm HPV: Phụ nữ cần biết gì?",
    "excerpt": "Ung thư cổ tử cung là một trong những bệnh ung thư ở nữ giới có khả năng phòng ngừa và phát hiện sớm khá hiệu quả. Tuy nhiên, bệnh thường tiến triển âm thầm trong giai đoạn đầu nên nhiều phụ nữ chỉ đi khám khi đã xuất hiện chảy máu bất thường, đau vùng chậu hoặc các biểu hiện kéo dài.",
    "intro": [
      "Ung thư cổ tử cung là một trong những bệnh ung thư ở nữ giới có khả năng phòng ngừa và phát hiện sớm khá hiệu quả. Tuy nhiên, bệnh thường tiến triển âm thầm trong giai đoạn đầu nên nhiều phụ nữ chỉ đi khám khi đã xuất hiện chảy máu bất thường, đau vùng chậu hoặc các biểu hiện kéo dài.",
      "Một trong những công cụ quan trọng giúp phòng ngừa ung thư cổ tử cung là xét nghiệm HPV. Xét nghiệm này không trực tiếp khẳng định một người mắc ung thư, mà giúp phát hiện các chủng virus HPV nguy cơ cao có khả năng gây biến đổi tế bào cổ tử cung theo thời gian.",
      "Ung thư cổ tử cung là gì?",
      "Cổ tử cung là phần thấp của tử cung, nằm ở vị trí tiếp nối với âm đạo. Ung thư cổ tử cung xảy ra khi các tế bào tại khu vực này phát triển bất thường, mất kiểm soát và có thể xâm lấn sang các mô xung quanh.",
      "Bệnh thường không xuất hiện ngay lập tức. Ở nhiều trường hợp, quá trình phát triển diễn ra theo trình tự:",
      "Nhiễm HPV nguy cơ cao kéo dài → tế bào cổ tử cung biến đổi bất thường → tổn thương tiền ung thư → ung thư xâm lấn.",
      "Quá trình này thường kéo dài nhiều năm. Đây chính là khoảng thời gian quan trọng để xét nghiệm HPV và các phương pháp tầm soát khác phát hiện nguy cơ trước khi ung thư hình thành.",
      "Gần như tất cả các trường hợp ung thư cổ tử cung đều có liên quan đến nhiễm các chủng HPV gây ung thư. Tuy nhiên, không phải người nhiễm HPV nào cũng sẽ mắc ung thư. Phần lớn trường hợp nhiễm virus được hệ miễn dịch kiểm soát và tự trở về trạng thái không còn phát hiện được. Nguy cơ chủ yếu xuất hiện khi HPV nguy cơ cao tồn tại kéo dài và gây thay đổi tế bào.",
      "HPV là virus gì?",
      "HPV là tên viết tắt của Human Papillomavirus, hay virus gây u nhú ở người. Đây là một nhóm gồm nhiều loại virus khác nhau, có thể lây truyền qua tiếp xúc da và niêm mạc, phổ biến nhất là qua hoạt động tình dục.",
      "HPV thường được chia thành hai nhóm chính:"
    ],
    "sections": [
      {
        "heading": "HPV nguy cơ thấp",
        "paragraphs": [
          "Các chủng thuộc nhóm này thường gây mụn cóc sinh dục hoặc những tổn thương lành tính. Chúng hiếm khi gây ung thư cổ tử cung."
        ]
      },
      {
        "heading": "HPV nguy cơ cao",
        "paragraphs": [
          "Một số chủng HPV nguy cơ cao có thể làm tế bào cổ tử cung biến đổi nếu virus tồn tại lâu trong cơ thể. HPV 16 và HPV 18 là hai chủng đặc biệt được quan tâm vì liên quan đến nhiều trường hợp ung thư cổ tử cung.",
          "Một người có thể nhiễm HPV mà hoàn toàn không có triệu chứng. Vì vậy, không thể dựa vào cảm giác cơ thể, khí hư hay việc có mụn cóc sinh dục để biết mình có nhiễm HPV nguy cơ cao hay không.",
          "Nhiễm HPV có phổ biến không?",
          "HPV rất phổ biến. Phần lớn người đã có quan hệ tình dục có thể tiếp xúc với virus vào một thời điểm nào đó trong đời. Đa số trường hợp không gây triệu chứng và có thể tự được cơ thể kiểm soát trong khoảng một đến hai năm.",
          "Do đó, một kết quả HPV dương tính không đồng nghĩa với:",
          "Đã mắc ung thư cổ tử cung.",
          "Chắc chắn sẽ phát triển thành ung thư.",
          "Vừa mới bị lây nhiễm.",
          "Bạn đời hiện tại không chung thủy.",
          "Người bệnh đã có hành vi tình dục “không an toàn” theo một cách cụ thể nào đó.",
          "HPV có thể tồn tại ở trạng thái không hoạt động trong nhiều năm rồi được phát hiện trở lại. Xét nghiệm không thể xác định chính xác virus xuất hiện từ khi nào hoặc được truyền từ ai.",
          "Xét nghiệm HPV là gì?",
          "Xét nghiệm HPV kiểm tra sự hiện diện của vật liệu di truyền, thường là DNA hoặc RNA, từ các chủng HPV có nguy cơ gây ung thư trong mẫu tế bào lấy ở cổ tử cung.",
          "Xét nghiệm này trả lời câu hỏi:",
          "Có phát hiện chủng HPV nguy cơ cao tại cổ tử cung hay không?",
          "Xét nghiệm HPV không trực tiếp quan sát hình dạng tế bào và cũng không xác định chắc chắn đã có ung thư. Vai trò chính của xét nghiệm là nhận diện những phụ nữ có nguy cơ cần được theo dõi kỹ hơn.",
          "Xét nghiệm HPV giúp phòng ngừa ung thư cổ tử cung như thế nào?"
        ]
      },
      {
        "heading": "Phát hiện nguy cơ trước khi tế bào biến đổi rõ ràng",
        "paragraphs": [
          "HPV nguy cơ cao có thể được phát hiện trước khi những thay đổi bất thường của tế bào cổ tử cung xuất hiện trên xét nghiệm tế bào học.",
          "Điều này giúp bác sĩ nhận diện người cần:",
          "Theo dõi lại sau một khoảng thời gian.",
          "Làm thêm xét nghiệm tế bào cổ tử cung.",
          "Xác định cụ thể chủng HPV.",
          "Soi cổ tử cung.",
          "Sinh thiết nếu phát hiện vùng nghi ngờ."
        ]
      },
      {
        "heading": "Xác định nhóm cần theo dõi sát hơn",
        "paragraphs": [
          "Người có kết quả âm tính với HPV nguy cơ cao thường có nguy cơ phát triển tổn thương tiền ung thư nghiêm trọng trong vài năm tiếp theo thấp hơn. Nhờ đó, khoảng cách giữa các lần tầm soát có thể được kéo dài theo hướng dẫn phù hợp.",
          "Ngược lại, người dương tính với HPV nguy cơ cao cần được phân tầng nguy cơ. Không phải trường hợp nào cũng phải sinh thiết ngay, nhưng việc bỏ theo dõi có thể khiến tổn thương tiền ung thư không được phát hiện đúng lúc."
        ]
      },
      {
        "heading": "Hỗ trợ theo dõi sau điều trị tổn thương tiền ung thư",
        "paragraphs": [
          "Sau khi điều trị tổn thương cổ tử cung mức độ cao, xét nghiệm HPV có thể được sử dụng để đánh giá nguy cơ virus còn tồn tại và hướng dẫn lịch tái khám.",
          "Người từng có tổn thương tiền ung thư mức độ cao thường cần theo dõi lâu dài hơn người có kết quả tầm soát bình thường.",
          "Xét nghiệm HPV và Pap test khác nhau thế nào?",
          "Hai xét nghiệm này đều liên quan đến phòng ngừa ung thư cổ tử cung nhưng tìm kiếm những vấn đề khác nhau."
        ]
      },
      {
        "heading": "Xét nghiệm HPV",
        "paragraphs": [
          "Xét nghiệm HPV tìm các chủng virus nguy cơ cao có khả năng gây biến đổi tế bào cổ tử cung.",
          "Có thể hình dung đây là xét nghiệm tìm yếu tố nguy cơ gây bệnh.",
          "Pap test",
          "Pap test, còn gọi là xét nghiệm tế bào cổ tử cung hoặc phết tế bào cổ tử cung, kiểm tra các tế bào được lấy từ cổ tử cung để phát hiện:",
          "Tế bào bất thường.",
          "Tổn thương tiền ung thư.",
          "Một số thay đổi gợi ý ung thư.",
          "Có thể hình dung Pap test là xét nghiệm tìm hậu quả mà virus hoặc những yếu tố khác đã gây ra trên tế bào."
        ]
      },
      {
        "heading": "Xét nghiệm phối hợp HPV và Pap",
        "paragraphs": [
          "Khi xét nghiệm HPV và Pap được thực hiện cùng lúc trên mẫu tế bào cổ tử cung, phương pháp này được gọi là xét nghiệm phối hợp hoặc co-test.",
          "Việc lựa chọn xét nghiệm HPV đơn thuần, Pap đơn thuần hay phối hợp hai xét nghiệm phụ thuộc vào tuổi, tiền sử tầm soát, nguy cơ cá nhân và hướng dẫn chuyên môn đang được áp dụng.",
          "Phụ nữ nên xét nghiệm HPV từ bao nhiêu tuổi?",
          "Không có một lịch duy nhất được áp dụng giống nhau tại mọi quốc gia. Các chương trình tầm soát có thể khác nhau tùy điều kiện y tế và hướng dẫn chuyên môn.",
          "Một số mốc tham khảo thường gặp gồm:"
        ]
      },
      {
        "heading": "Từ 21 đến 29 tuổi",
        "paragraphs": [
          "Nhiều hướng dẫn khuyến nghị xét nghiệm tế bào cổ tử cung định kỳ khoảng ba năm một lần. Xét nghiệm HPV đơn thuần có thể được cân nhắc từ khoảng 25 tuổi trong một số chương trình, nhưng không phải nơi nào cũng áp dụng giống nhau.",
          "HPV rất phổ biến ở phụ nữ trẻ và phần lớn trường hợp sẽ tự được cơ thể kiểm soát. Việc xét nghiệm không đúng chỉ định có thể phát hiện nhiều nhiễm trùng tạm thời, gây lo lắng và dẫn đến kiểm tra không cần thiết."
        ]
      },
      {
        "heading": "Từ 30 đến 65 tuổi",
        "paragraphs": [
          "Xét nghiệm HPV nguy cơ cao thường đóng vai trò quan trọng hơn trong tầm soát. Tùy hướng dẫn và phương tiện hiện có, phụ nữ có thể được tư vấn một trong các phương án:",
          "Xét nghiệm HPV nguy cơ cao định kỳ.",
          "Pap test định kỳ.",
          "Xét nghiệm phối hợp HPV và Pap.",
          "Một số hướng dẫn chuyên môn sử dụng xét nghiệm HPV nguy cơ cao khoảng năm năm một lần cho người có nguy cơ trung bình. Tổ chức Y tế Thế giới khuyến nghị các chương trình dân số sử dụng xét nghiệm hiệu năng cao, ưu tiên xét nghiệm HPV, bắt đầu từ khoảng 30 tuổi với khoảng cách phù hợp theo chương trình quốc gia."
        ]
      },
      {
        "heading": "Sau 65 tuổi",
        "paragraphs": [
          "Một số phụ nữ có thể ngừng tầm soát nếu đã được kiểm tra đầy đủ trước đó, các kết quả gần đây bình thường và không có tiền sử tổn thương tiền ung thư mức độ cao.",
          "Tuy nhiên, người chưa được tầm soát đầy đủ, từng có kết quả bất thường, suy giảm miễn dịch hoặc có tiền sử tổn thương cổ tử cung vẫn có thể cần tiếp tục kiểm tra.",
          "Không nên tự dừng tầm soát chỉ vì đã mãn kinh hoặc không còn quan hệ tình dục.",
          "Những ai cần được tầm soát sớm hoặc thường xuyên hơn?",
          "Kế hoạch tầm soát cần được cá nhân hóa nếu phụ nữ có:",
          "Nhiễm HIV.",
          "Suy giảm miễn dịch hoặc đang dùng thuốc ức chế miễn dịch.",
          "Tiền sử tổn thương tiền ung thư mức độ cao.",
          "Từng được điều trị tổn thương cổ tử cung.",
          "Kết quả HPV hoặc Pap bất thường trước đây.",
          "Tiền sử ung thư cổ tử cung.",
          "Tiếp xúc với một số thuốc nội tiết đặc biệt từ trong thai kỳ theo đánh giá của bác sĩ.",
          "Chưa từng hoặc rất ít khi được tầm soát.",
          "Theo khuyến nghị của WHO, phụ nữ sống chung với HIV thường bắt đầu tầm soát sớm hơn, từ khoảng 25 tuổi, và có khoảng cách kiểm tra ngắn hơn nhóm dân số chung.",
          "Xét nghiệm HPV được thực hiện như thế nào?",
          "Quá trình lấy mẫu HPV thường tương tự lấy mẫu Pap.",
          "Người bệnh nằm trên bàn khám phụ khoa. Bác sĩ hoặc nhân viên y tế sử dụng dụng cụ chuyên dụng để quan sát cổ tử cung, sau đó dùng một bàn chải nhỏ lấy tế bào tại bề mặt và ống cổ tử cung.",
          "Quá trình lấy mẫu thường diễn ra nhanh. Người bệnh có thể cảm thấy:",
          "Hơi căng tức.",
          "Khó chịu nhẹ.",
          "Một chút đau nếu đang viêm hoặc quá lo lắng.",
          "Ra một ít dịch hồng sau khi lấy mẫu.",
          "Xét nghiệm không lấy mô sâu và không phải sinh thiết. Việc lấy mẫu HPV cũng không làm ảnh hưởng đến khả năng sinh sản.",
          "Cần chuẩn bị gì trước khi xét nghiệm HPV?",
          "Để mẫu xét nghiệm đạt chất lượng tốt, người bệnh nên thực hiện theo hướng dẫn của cơ sở y tế. Một số lưu ý thường gồm:",
          "Thông báo nếu đang mang thai hoặc nghi ngờ mang thai.",
          "Cho bác sĩ biết ngày đầu kỳ kinh gần nhất.",
          "Thông báo các thuốc đặt âm đạo đang sử dụng.",
          "Tránh thụt rửa âm đạo trước khi xét nghiệm.",
          "Tránh đặt thuốc hoặc sử dụng sản phẩm trong âm đạo trong thời gian được hướng dẫn.",
          "Có thể cần tránh quan hệ tình dục trước ngày lấy mẫu.",
          "Hạn chế thực hiện khi đang ra nhiều máu kinh nếu việc kiểm tra không khẩn cấp.",
          "Nếu đang chảy máu âm đạo bất thường, người bệnh không nên tự trì hoãn khám để chờ hết máu. Bác sĩ sẽ đánh giá và quyết định thời điểm hoặc phương pháp kiểm tra phù hợp.",
          "Kết quả HPV âm tính có ý nghĩa gì?",
          "Kết quả âm tính nghĩa là không phát hiện các chủng HPV nguy cơ cao mà xét nghiệm đang kiểm tra.",
          "Đây là kết quả tích cực, cho thấy nguy cơ có tổn thương tiền ung thư nghiêm trọng tại thời điểm đó tương đối thấp. Người bệnh thường được hẹn tầm soát lại theo lịch định kỳ.",
          "Tuy nhiên, HPV âm tính không có nghĩa là:",
          "Không bao giờ có thể nhiễm HPV trong tương lai.",
          "Đã được loại trừ mọi bệnh phụ khoa.",
          "Không cần đi khám khi có triệu chứng.",
          "Không thể mắc bất kỳ loại ung thư phụ khoa nào khác.",
          "Nếu xuất hiện chảy máu sau quan hệ, chảy máu bất thường hoặc khí hư kéo dài, phụ nữ vẫn cần đi khám dù kết quả HPV gần đây âm tính.",
          "Kết quả HPV dương tính có nghĩa là đã mắc ung thư không?",
          "Không.",
          "Kết quả dương tính chỉ cho thấy đã phát hiện một hoặc nhiều chủng HPV nguy cơ cao. Phần lớn phụ nữ có HPV dương tính sẽ không phát triển thành ung thư.",
          "Bước tiếp theo phụ thuộc vào:",
          "Chủng HPV được phát hiện.",
          "Kết quả Pap test.",
          "Tuổi của người bệnh.",
          "Kết quả tầm soát trước đây.",
          "Tiền sử điều trị tổn thương cổ tử cung.",
          "Tình trạng miễn dịch.",
          "Khả năng theo dõi đúng lịch.",
          "Một số trường hợp chỉ cần làm lại xét nghiệm sau một khoảng thời gian. Một số khác cần soi cổ tử cung sớm hơn.",
          "Dương tính với HPV 16 hoặc HPV 18 có đáng lo không?",
          "HPV 16 và HPV 18 là những chủng nguy cơ cao liên quan mạnh đến ung thư cổ tử cung. Khi phát hiện một trong hai chủng này, bác sĩ thường đánh giá kỹ hơn, ngay cả khi xét nghiệm tế bào chưa ghi nhận bất thường rõ.",
          "Tuy nhiên, kết quả dương tính với HPV 16 hoặc HPV 18 vẫn chưa phải chẩn đoán ung thư. Người bệnh cần thực hiện đúng bước kiểm tra tiếp theo thay vì tự tìm thuốc uống hoặc quá hoang mang.",
          "Tùy trường hợp, bác sĩ có thể đề nghị:",
          "Pap test.",
          "Soi cổ tử cung.",
          "Sinh thiết vùng nghi ngờ.",
          "Theo dõi lại theo lịch cụ thể.",
          "Soi cổ tử cung là gì?",
          "Soi cổ tử cung là thủ thuật sử dụng thiết bị phóng đại để quan sát bề mặt cổ tử cung rõ hơn.",
          "Trong quá trình soi, bác sĩ có thể bôi các dung dịch chuyên dụng giúp làm nổi bật vùng tế bào bất thường. Nếu phát hiện khu vực nghi ngờ, bác sĩ có thể lấy một mảnh mô nhỏ để sinh thiết.",
          "Soi cổ tử cung thường được cân nhắc khi:",
          "Dương tính với một số chủng HPV nguy cơ cao.",
          "HPV dương tính kéo dài.",
          "Pap test có tế bào bất thường.",
          "Kết quả HPV và tế bào học cho thấy nguy cơ cao.",
          "Cổ tử cung có tổn thương nghi ngờ khi khám.",
          "Việc được chỉ định soi cổ tử cung không đồng nghĩa người bệnh chắc chắn mắc ung thư.",
          "Sinh thiết cổ tử cung có vai trò gì?",
          "Sinh thiết là bước lấy một mẫu mô nhỏ từ vùng bất thường để kiểm tra dưới kính hiển vi.",
          "Nếu xét nghiệm HPV tìm virus và Pap test tìm tế bào bất thường, sinh thiết giúp bác sĩ xác định rõ:",
          "Có tổn thương tiền ung thư hay không.",
          "Tổn thương ở mức độ nhẹ hay nặng.",
          "Đã xuất hiện ung thư xâm lấn hay chưa.",
          "Người bệnh cần theo dõi hay điều trị.",
          "Chẩn đoán xác định tổn thương tiền ung thư mức độ cao hoặc ung thư thường cần dựa trên mô bệnh học từ sinh thiết hoặc mẫu mô được lấy trong quá trình điều trị.",
          "Có thuốc nào điều trị để HPV âm tính nhanh hơn không?",
          "Hiện không có thuốc uống hoặc thuốc đặt thông thường nào có thể loại bỏ trực tiếp HPV khỏi cơ thể theo kiểu “uống hết liệu trình là âm tính”.",
          "Việc chăm sóc chủ yếu tập trung vào:",
          "Theo dõi đúng lịch.",
          "Phát hiện sớm tế bào bất thường.",
          "Điều trị tổn thương tiền ung thư nếu có.",
          "Ngừng hút thuốc.",
          "Kiểm soát các bệnh ảnh hưởng đến miễn dịch.",
          "Duy trì sức khỏe tổng thể.",
          "Không nên tự mua thuốc, thực phẩm bổ sung hoặc sản phẩm đặt âm đạo được quảng cáo là “đào thải HPV”. Việc xét nghiệm âm tính trở lại thường liên quan đến khả năng kiểm soát virus của hệ miễn dịch, không phải do một sản phẩm đơn lẻ.",
          "Tiêm vaccine HPV rồi có cần xét nghiệm HPV không?",
          "Có.",
          "Vaccine HPV giúp bảo vệ trước những chủng HPV quan trọng, đặc biệt khi được tiêm trước khi tiếp xúc với virus. Tuy nhiên:",
          "Vaccine không bao phủ tuyệt đối mọi chủng HPV nguy cơ cao.",
          "Vaccine không điều trị nhiễm HPV đã có.",
          "Không phải ai cũng hoàn thành đủ lịch tiêm.",
          "Hiệu quả bảo vệ có thể khác tùy độ tuổi và thời điểm tiêm.",
          "Vì vậy, phụ nữ đã tiêm vaccine vẫn cần tầm soát ung thư cổ tử cung theo độ tuổi và hướng dẫn của bác sĩ. WHO cũng nhấn mạnh rằng tiêm chủng, tầm soát và điều trị tổn thương tiền ung thư cần được thực hiện song song để phòng ngừa bệnh hiệu quả.",
          "Đã cắt tử cung có cần xét nghiệm HPV không?",
          "Điều này phụ thuộc vào loại phẫu thuật và lý do thực hiện.",
          "Nếu chỉ cắt thân tử cung nhưng vẫn còn cổ tử cung, người bệnh vẫn cần tầm soát cổ tử cung.",
          "Nếu đã cắt toàn bộ tử cung và cổ tử cung vì bệnh lành tính, đồng thời không có tiền sử tổn thương tiền ung thư mức độ cao hoặc ung thư, bác sĩ có thể cân nhắc ngừng tầm soát.",
          "Người từng có tổn thương cổ tử cung mức độ cao hoặc ung thư vẫn có thể cần theo dõi lâu dài dù đã phẫu thuật. Do đó, người bệnh nên mang theo hồ sơ phẫu thuật và kết quả giải phẫu bệnh khi đi khám.",
          "Mang thai có xét nghiệm HPV được không?",
          "Phụ nữ mang thai vẫn có thể được tầm soát cổ tử cung khi đến hạn hoặc khi có chỉ định. Việc lấy mẫu thường không ảnh hưởng đến thai nhi nếu được thực hiện đúng kỹ thuật.",
          "Nếu kết quả bất thường, kế hoạch soi cổ tử cung, sinh thiết hoặc điều trị sẽ được bác sĩ cân nhắc dựa trên:",
          "Tuổi thai.",
          "Mức độ bất thường.",
          "Nguy cơ có tổn thương nghiêm trọng.",
          "Sự an toàn của mẹ và thai nhi.",
          "Không nên tự trì hoãn mọi kiểm tra cho đến sau sinh, đặc biệt khi có chảy máu bất thường hoặc kết quả nguy cơ cao.",
          "Dấu hiệu nào có thể cảnh báo ung thư cổ tử cung?",
          "Tổn thương tiền ung thư và ung thư cổ tử cung giai đoạn sớm có thể chưa gây triệu chứng. Khi bệnh tiến triển, người bệnh có thể gặp:",
          "Chảy máu sau quan hệ tình dục.",
          "Chảy máu giữa hai kỳ kinh.",
          "Kinh nguyệt kéo dài hoặc nhiều bất thường.",
          "Chảy máu âm đạo sau mãn kinh.",
          "Khí hư nhiều, có mùi hoặc lẫn máu.",
          "Đau khi quan hệ.",
          "Đau vùng chậu hoặc đau lưng kéo dài.",
          "Mệt mỏi, thiếu máu hoặc sụt cân không rõ nguyên nhân.",
          "Những dấu hiệu này cũng có thể xuất hiện trong viêm nhiễm, polyp, rối loạn nội tiết hoặc nhiều bệnh phụ khoa lành tính. Tuy nhiên, phụ nữ không nên tự mua thuốc đặt kéo dài mà không được khám.",
          "Có triệu chứng thì có cần chờ đến lịch tầm soát không?",
          "Không.",
          "Tầm soát được thực hiện ở người chưa có triệu chứng. Khi đã xuất hiện chảy máu, khí hư bất thường hoặc đau vùng chậu, người bệnh cần được khám chẩn đoán.",
          "Bác sĩ có thể chỉ định:",
          "Khám phụ khoa.",
          "Quan sát cổ tử cung.",
          "Xét nghiệm HPV và Pap.",
          "Siêu âm phụ khoa.",
          "Soi cổ tử cung.",
          "Sinh thiết.",
          "Các phương pháp chẩn đoán hình ảnh khác nếu cần.",
          "Một kết quả HPV âm tính hoặc Pap bình thường trước đây không phải lý do để bỏ qua một triệu chứng mới xuất hiện."
        ]
      },
      {
        "heading": "HPV dương tính là do vệ sinh kém",
        "paragraphs": [
          "Không đúng. HPV không phải dấu hiệu cho thấy một người ở bẩn hoặc vệ sinh vùng kín không tốt."
        ]
      },
      {
        "heading": "Chỉ người có nhiều bạn tình mới nhiễm HPV",
        "paragraphs": [
          "Không đúng. HPV có thể lây ngay cả khi một người chỉ có một bạn tình. Số bạn tình có thể ảnh hưởng đến nguy cơ tiếp xúc, nhưng không quyết định tuyệt đối việc nhiễm virus."
        ]
      },
      {
        "heading": "Không có triệu chứng thì không cần tầm soát",
        "paragraphs": [
          "Không đúng. Tổn thương tiền ung thư thường không gây triệu chứng. Tầm soát có giá trị chính vì giúp phát hiện vấn đề khi người bệnh vẫn cảm thấy khỏe mạnh."
        ]
      },
      {
        "heading": "HPV dương tính phải dùng kháng sinh",
        "paragraphs": [
          "Không đúng. HPV là virus, trong khi kháng sinh được sử dụng cho một số bệnh do vi khuẩn. Tự dùng kháng sinh không giúp làm HPV âm tính và có thể gây tác dụng không mong muốn."
        ]
      },
      {
        "heading": "Xét nghiệm HPV có thể chẩn đoán tất cả bệnh lây truyền qua đường tình dục",
        "paragraphs": [
          "Không đúng. Xét nghiệm HPV không thay thế các xét nghiệm dành cho HIV, viêm gan, giang mai, lậu, Chlamydia hoặc những nhiễm trùng khác."
        ]
      },
      {
        "heading": "Tầm soát ung thư cổ tử cung tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Phụ nữ có nhu cầu tầm soát hoặc đang gặp triệu chứng bất thường có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ chuyên khoa Sản phụ khoa thăm khám.",
          "Tùy tuổi, tiền sử sức khỏe và kết quả kiểm tra trước đây, bác sĩ có thể tư vấn:",
          "Xét nghiệm HPV nguy cơ cao.",
          "Pap test.",
          "Xét nghiệm phối hợp HPV và Pap.",
          "Khám và soi cổ tử cung.",
          "Sinh thiết khi có tổn thương nghi ngờ.",
          "Siêu âm và các kiểm tra phụ khoa liên quan.",
          "Nếu phát hiện tổn thương tiền ung thư hoặc ung thư, chuyên khoa Sản phụ khoa có thể phối hợp với Ung bướu, Giải phẫu bệnh, Chẩn đoán hình ảnh và Ngoại khoa để đánh giá mức độ bệnh và xây dựng hướng xử trí phù hợp.",
          "Mục tiêu của tầm soát không chỉ là tìm ung thư. Quan trọng hơn, việc kiểm tra đúng lịch có thể phát hiện và điều trị tổn thương tiền ung thư trước khi chúng có cơ hội tiến triển."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp",
        "paragraphs": [
          "HPV dương tính nhưng Pap bình thường có đáng lo không?",
          "Điều này có nghĩa là đã phát hiện HPV nguy cơ cao nhưng tế bào cổ tử cung chưa ghi nhận thay đổi bất thường rõ. Bác sĩ sẽ dựa vào chủng HPV và tiền sử để quyết định theo dõi lại hay soi cổ tử cung.",
          "HPV âm tính nhưng Pap bất thường thì sao?",
          "Tế bào cổ tử cung có thể thay đổi do nhiều nguyên nhân. Người bệnh vẫn cần được đánh giá theo mức độ bất thường của Pap test, dù HPV âm tính.",
          "Có cần xét nghiệm HPV mỗi năm không?",
          "Phần lớn phụ nữ có nguy cơ trung bình không cần xét nghiệm HPV hằng năm. Khoảng cách kiểm tra phụ thuộc vào tuổi, loại xét nghiệm và kết quả trước đó. Kiểm tra quá thường xuyên không nhất thiết mang lại thêm lợi ích.",
          "Xét nghiệm HPV dương tính có ảnh hưởng đến khả năng mang thai không?",
          "Bản thân nhiễm HPV thường không làm mất khả năng mang thai. Tuy nhiên, một số phương pháp điều trị tổn thương cổ tử cung có thể ảnh hưởng nhất định đến thai kỳ sau này. Bác sĩ sẽ cân nhắc giữa hiệu quả điều trị và kế hoạch sinh con của người bệnh.",
          "Sau bao lâu HPV có thể âm tính trở lại?",
          "Không có mốc thời gian giống nhau cho tất cả mọi người. Phần lớn nhiễm HPV được cơ thể kiểm soát trong khoảng một đến hai năm, nhưng một số trường hợp có thể kéo dài hơn. Điều quan trọng là tái khám đúng lịch, không chỉ chờ kết quả âm tính.",
          "Kết luận",
          "Xét nghiệm HPV giữ vai trò quan trọng trong phòng ngừa ung thư cổ tử cung vì giúp phát hiện các chủng virus nguy cơ cao trước khi bệnh tiến triển đến giai đoạn ung thư.",
          "Tuy nhiên, HPV dương tính không đồng nghĩa với ung thư. Kết quả cần được đánh giá cùng tuổi, chủng virus, Pap test, tiền sử tầm soát và tình trạng sức khỏe của từng người.",
          "Phụ nữ nên chủ động tầm soát đúng lịch, tiêm vaccine HPV khi phù hợp và đi khám sớm nếu có chảy máu âm đạo hoặc khí hư bất thường. Với ung thư cổ tử cung, phát hiện tổn thương từ giai đoạn tiền ung thư có thể tạo ra khác biệt rất lớn trong việc điều trị và bảo vệ sức khỏe sinh sản.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "cham-soc-giam-nhe-trong-ung-thu-hieu-dung-de-nguoi-benh-bot-so-hai": {
    "sourceFile": "18.Chăm sóc giảm nhẹ trong ung thư.docx",
    "title": "Chăm sóc giảm nhẹ trong ung thư: Hiểu đúng để người bệnh bớt sợ hãi",
    "excerpt": "Khi bác sĩ nhắc đến “chăm sóc giảm nhẹ”, nhiều người bệnh và gia đình lập tức nghĩ đến giai đoạn cuối, ngừng điều trị hoặc chuẩn bị cho tình huống xấu nhất. Chính cách hiểu này khiến không ít người từ chối một hình thức chăm sóc có thể giúp họ giảm đau, ăn ngủ tốt hơn và bớt căng thẳng trong suốt hành trình điều trị ung thư.",
    "intro": [
      "Khi bác sĩ nhắc đến “chăm sóc giảm nhẹ”, nhiều người bệnh và gia đình lập tức nghĩ đến giai đoạn cuối, ngừng điều trị hoặc chuẩn bị cho tình huống xấu nhất. Chính cách hiểu này khiến không ít người từ chối một hình thức chăm sóc có thể giúp họ giảm đau, ăn ngủ tốt hơn và bớt căng thẳng trong suốt hành trình điều trị ung thư.",
      "Thực tế, chăm sóc giảm nhẹ không đồng nghĩa với buông xuôi. Người bệnh vẫn có thể hóa trị, xạ trị, phẫu thuật, điều trị đích hoặc miễn dịch trong khi được chăm sóc giảm nhẹ. Mục tiêu là kiểm soát các triệu chứng khó chịu, hỗ trợ tinh thần và giúp người bệnh sống chủ động, dễ chịu hơn theo điều kiện sức khỏe của mình.",
      "Chăm sóc giảm nhẹ trong ung thư là gì?",
      "Chăm sóc giảm nhẹ là phương pháp chăm sóc toàn diện dành cho người đang sống chung với một bệnh lý nghiêm trọng như ung thư. Không chỉ tập trung vào khối u, quá trình chăm sóc còn quan tâm đến những vấn đề mà người bệnh và gia đình đang phải đối mặt, bao gồm:",
      "Đau và các triệu chứng thể chất.",
      "Tác dụng không mong muốn của điều trị.",
      "Lo âu, buồn bã hoặc mất ngủ.",
      "Khó khăn trong ăn uống và vận động.",
      "Áp lực công việc, tài chính và chăm sóc gia đình.",
      "Những băn khoăn về mục tiêu điều trị và tương lai.",
      "Nhu cầu tinh thần, tín ngưỡng hoặc giá trị sống.",
      "Theo Tổ chức Y tế Thế giới, chăm sóc giảm nhẹ giúp nâng cao chất lượng sống của người bệnh và gia đình thông qua việc nhận diện sớm, đánh giá đúng và xử trí đau cùng các vấn đề về thể chất, tâm lý, xã hội và tinh thần.",
      "Nói một cách dễ hiểu, điều trị ung thư tập trung vào kiểm soát bệnh; chăm sóc giảm nhẹ tập trung vào việc giúp con người đang điều trị bệnh cảm thấy dễ chịu và được đồng hành hơn. Hai hướng chăm sóc này không đối lập mà có thể bổ sung cho nhau.",
      "Chăm sóc giảm nhẹ có phải là “hết cách chữa” không?",
      "Không.",
      "Chăm sóc giảm nhẹ có thể được thực hiện từ thời điểm người bệnh mới được chẩn đoán, trong quá trình điều trị và cả sau khi hoàn thành một số phương pháp điều trị. Người bệnh có thể tiếp tục nhận các liệu pháp nhằm chữa khỏi, kiểm soát hoặc làm chậm sự phát triển của ung thư trong khi vẫn được hỗ trợ giảm nhẹ.",
      "Ví dụ:",
      "Người đang hóa trị được kiểm soát buồn nôn, mệt mỏi và mất ngủ.",
      "Người sau phẫu thuật được hỗ trợ giảm đau, vận động và dinh dưỡng.",
      "Người có khối u chèn ép được can thiệp để giảm đau hoặc khó thở.",
      "Người bệnh lo lắng được hỗ trợ tâm lý và giải thích rõ kế hoạch điều trị.",
      "Gia đình được hướng dẫn cách chăm sóc, theo dõi triệu chứng và giao tiếp với người bệnh.",
      "Do đó, được giới thiệu đến chăm sóc giảm nhẹ không có nghĩa bác sĩ đã ngừng cố gắng. Ngược lại, điều này cho thấy đội ngũ điều trị đang quan tâm đầy đủ hơn đến chất lượng sống và những khó khăn thực tế của người bệnh.",
      "Chăm sóc giảm nhẹ khác chăm sóc cuối đời như thế nào?",
      "Hai khái niệm có liên quan nhưng không hoàn toàn giống nhau."
    ],
    "sections": [
      {
        "heading": "Chăm sóc giảm nhẹ",
        "paragraphs": [
          "Có thể bắt đầu ở bất kỳ thời điểm nào trong hành trình ung thư, kể cả khi người bệnh đang điều trị với mục tiêu chữa khỏi hoặc kiểm soát bệnh lâu dài.",
          "Mức độ hỗ trợ có thể thay đổi theo từng giai đoạn. Khi triệu chứng ổn định, người bệnh có thể chỉ cần được theo dõi định kỳ. Khi xuất hiện nhiều vấn đề cùng lúc, đội ngũ chăm sóc sẽ tham gia sâu hơn."
        ]
      },
      {
        "heading": "Chăm sóc cuối đời",
        "paragraphs": [
          "Là một phần của chăm sóc giảm nhẹ, được áp dụng khi bệnh đã tiến triển và mục tiêu chăm sóc chuyển chủ yếu sang sự thoải mái, phẩm giá và mong muốn của người bệnh trong khoảng thời gian còn lại.",
          "Ở giai đoạn này, các quyết định y tế thường tập trung vào câu hỏi: phương pháp nào thực sự đem lại lợi ích và phương pháp nào chỉ làm người bệnh thêm mệt mỏi, đau đớn hoặc phải nằm viện nhiều hơn?",
          "Viện Ung thư Quốc gia Hoa Kỳ phân biệt rằng chăm sóc giảm nhẹ có thể bắt đầu ở mọi giai đoạn, trong khi chăm sóc cuối đời được chú trọng khi điều trị nhằm chữa khỏi không còn là mục tiêu chính.",
          "Khi nào người bệnh ung thư nên được chăm sóc giảm nhẹ?",
          "Không cần chờ đến khi đau dữ dội hoặc sức khỏe suy kiệt. Người bệnh có thể trao đổi với bác sĩ ngay khi xuất hiện những vấn đề ảnh hưởng đến sinh hoạt hoặc chất lượng sống.",
          "Những tình huống thường cần hỗ trợ gồm:",
          "Đau kéo dài hoặc khó kiểm soát.",
          "Buồn nôn, nôn hoặc chán ăn.",
          "Mệt mỏi nhiều, mất sức.",
          "Khó thở, ho hoặc cảm giác ngột ngạt.",
          "Táo bón, tiêu chảy hoặc rối loạn tiêu hóa.",
          "Mất ngủ kéo dài.",
          "Tê bì, đau rát do tổn thương thần kinh.",
          "Phù, cổ trướng hoặc khối u gây chèn ép.",
          "Sụt cân, suy dinh dưỡng.",
          "Lo âu, hoảng sợ hoặc buồn bã kéo dài.",
          "Khó hiểu hoặc khó lựa chọn giữa các phương án điều trị.",
          "Người chăm sóc bị quá tải, kiệt sức.",
          "Hướng dẫn cập nhật năm 2024 của Hiệp hội Ung thư Lâm sàng Hoa Kỳ nhấn mạnh việc tích hợp chăm sóc giảm nhẹ sớm, đặc biệt khi người bệnh có triệu chứng chưa được kiểm soát hoặc chất lượng sống bị ảnh hưởng.",
          "Vì sao nên chăm sóc giảm nhẹ từ sớm?",
          "Chăm sóc giảm nhẹ sớm không làm mất đi cơ hội điều trị ung thư. Mục tiêu là giúp người bệnh có đủ thể lực và tinh thần để đi tiếp trên hành trình điều trị."
        ]
      },
      {
        "heading": "Giúp kiểm soát triệu chứng trước khi trở nên nghiêm trọng",
        "paragraphs": [
          "Một cơn đau nhẹ nếu không được đánh giá đúng có thể tăng dần, làm mất ngủ, giảm vận động và khiến người bệnh kiệt sức. Tương tự, buồn nôn kéo dài có thể dẫn đến ăn uống kém, mất nước và suy dinh dưỡng.",
          "Phát hiện và xử trí sớm giúp hạn chế tình trạng triệu chứng này kéo theo triệu chứng khác."
        ]
      },
      {
        "heading": "Giúp người bệnh dung nạp điều trị tốt hơn",
        "paragraphs": [
          "Khi đau được kiểm soát, ăn uống phù hợp và giấc ngủ cải thiện, người bệnh có thể cảm thấy khỏe hơn để tiếp tục các đợt điều trị.",
          "Tuy nhiên, chăm sóc giảm nhẹ không thể bảo đảm người bệnh sẽ hoàn thành mọi phác đồ. Khả năng điều trị còn phụ thuộc vào loại ung thư, giai đoạn bệnh, chức năng cơ quan và thể trạng của từng người."
        ]
      },
      {
        "heading": "Giảm cảm giác cô đơn và mất kiểm soát",
        "paragraphs": [
          "Ung thư không chỉ gây đau về thể chất. Nhiều người bệnh còn phải đối mặt với nỗi sợ tái phát, sợ trở thành gánh nặng hoặc lo lắng về con cái, công việc và tài chính.",
          "Việc có người lắng nghe, giải thích rõ và cùng lập kế hoạch giúp người bệnh cảm thấy mình vẫn có tiếng nói trong quá trình chăm sóc."
        ]
      },
      {
        "heading": "Hỗ trợ cả người thân",
        "paragraphs": [
          "Người chăm sóc thường phải đảm nhận nhiều vai trò cùng lúc: đưa người bệnh đi khám, quản lý thuốc, chuẩn bị bữa ăn, theo dõi triệu chứng và xử lý những thay đổi bất ngờ.",
          "Nếu không được hỗ trợ, người chăm sóc có thể rơi vào trạng thái mệt mỏi, căng thẳng và kiệt sức. Chăm sóc giảm nhẹ vì thế không chỉ dành cho người bệnh mà còn hướng dẫn và hỗ trợ gia đình.",
          "Chăm sóc giảm nhẹ giúp kiểm soát những triệu chứng nào?"
        ]
      },
      {
        "heading": "Đau do ung thư",
        "paragraphs": [
          "Đau có thể xuất phát từ khối u, tình trạng chèn ép thần kinh, di căn xương, phẫu thuật hoặc tác dụng của điều trị. Mỗi loại đau có đặc điểm khác nhau và cần được đánh giá riêng.",
          "Bác sĩ thường hỏi:",
          "Vị trí đau ở đâu?",
          "Mức độ đau như thế nào?",
          "Đau âm ỉ, nhói, bỏng rát hay như điện giật?",
          "Cơn đau liên tục hay từng đợt?",
          "Yếu tố nào làm đau tăng hoặc giảm?",
          "Đau có ảnh hưởng đến ăn, ngủ và vận động không?",
          "Tùy nguyên nhân, hướng xử trí có thể bao gồm thuốc giảm đau, thuốc hỗ trợ, vật lý trị liệu, xạ trị giảm đau, can thiệp thần kinh hoặc một số thủ thuật khác.",
          "Mục tiêu kiểm soát đau không nhất thiết là đưa cảm giác đau về mức bằng không trong mọi trường hợp, mà là giảm đau đến mức người bệnh có thể nghỉ ngơi, giao tiếp và sinh hoạt dễ chịu hơn. WHO khuyến nghị việc lựa chọn và quản lý thuốc giảm đau ung thư cần được cá nhân hóa, theo dõi hiệu quả và bảo đảm sử dụng an toàn."
        ]
      },
      {
        "heading": "Buồn nôn và nôn",
        "paragraphs": [
          "Buồn nôn có thể do hóa trị, xạ trị, thuốc giảm đau, tắc nghẽn tiêu hóa, rối loạn chuyển hóa hoặc chính bệnh ung thư.",
          "Việc chỉ uống một loại thuốc chống nôn quen thuộc không phải lúc nào cũng hiệu quả. Bác sĩ cần tìm nguyên nhân để lựa chọn thuốc, điều chỉnh chế độ ăn hoặc thực hiện can thiệp cần thiết.",
          "Người bệnh cần liên hệ cơ sở y tế nếu nôn liên tục, không thể uống nước, tiểu ít, chóng mặt, nôn ra máu hoặc đau bụng tăng.",
          "Khó thở",
          "Khó thở có thể liên quan đến tổn thương phổi, tràn dịch, thiếu máu, nhiễm trùng, tắc nghẽn đường thở, huyết khối hoặc lo âu.",
          "Bác sĩ có thể xử trí nguyên nhân, hỗ trợ tư thế thở, oxy khi phù hợp, dẫn lưu dịch hoặc sử dụng thuốc theo tình trạng cụ thể. Không nên tự tăng lượng oxy hoặc tự dùng thuốc an thần khi chưa có hướng dẫn.",
          "Khó thở xuất hiện đột ngột, kèm đau ngực, tím tái, lơ mơ hoặc ho ra máu là tình trạng cần được cấp cứu."
        ]
      },
      {
        "heading": "Mệt mỏi và suy nhược",
        "paragraphs": [
          "Mệt do ung thư khác với cảm giác mệt sau một ngày làm việc. Người bệnh có thể kiệt sức ngay cả khi đã nghỉ ngơi đầy đủ.",
          "Nguyên nhân có thể gồm:",
          "Thiếu máu.",
          "Đau hoặc mất ngủ.",
          "Nhiễm trùng.",
          "Ăn uống không đủ.",
          "Rối loạn điện giải.",
          "Tác dụng của thuốc.",
          "Căng thẳng hoặc trầm cảm.",
          "Bệnh ung thư đang tiến triển.",
          "Điều trị cần dựa trên nguyên nhân. Có người cần điều chỉnh thuốc, có người cần hỗ trợ dinh dưỡng, tập vận động nhẹ hoặc điều trị thiếu máu và nhiễm trùng."
        ]
      },
      {
        "heading": "Chán ăn và sụt cân",
        "paragraphs": [
          "Gia đình thường rất lo khi người bệnh ăn ít và có xu hướng liên tục thúc ép: “Cố ăn thêm một miếng nữa”. Tuy nhiên, việc ăn uống có thể trở thành áp lực nếu người bệnh đang buồn nôn, khô miệng, đau khi nuốt hoặc nhanh no.",
          "Chăm sóc dinh dưỡng cần xem xét khả năng ăn, khẩu vị, tình trạng tiêu hóa và mục tiêu điều trị. Những bữa nhỏ, thức ăn mềm, giàu năng lượng hoặc điều chỉnh mùi vị đôi khi dễ chấp nhận hơn một bữa lớn.",
          "Không nên tự truyền dịch, truyền đạm hoặc sử dụng sản phẩm bổ sung liều cao chỉ vì người bệnh ăn ít. Những biện pháp này không phù hợp với mọi tình trạng và có thể gây thêm gánh nặng cho cơ thể."
        ]
      },
      {
        "heading": "Táo bón và tiêu chảy",
        "paragraphs": [
          "Táo bón có thể liên quan đến thuốc giảm đau, ít vận động, ăn uống kém hoặc mất nước. Tiêu chảy có thể xuất hiện do hóa trị, xạ trị, nhiễm trùng hoặc tổn thương đường tiêu hóa.",
          "Người bệnh nên báo với bác sĩ thay vì tự dùng thuốc kéo dài. Đặc biệt cần khám sớm nếu có đau bụng dữ dội, bụng chướng, không trung tiện được, đi ngoài ra máu, sốt hoặc mất nước.",
          "Mất ngủ",
          "Mất ngủ không chỉ do tâm lý. Đau, khó thở, ngứa, tác dụng của thuốc hoặc đi tiểu nhiều về đêm cũng có thể làm người bệnh không ngủ được.",
          "Điều trị mất ngủ cần kết hợp kiểm soát nguyên nhân, điều chỉnh môi trường ngủ, hỗ trợ tâm lý và sử dụng thuốc khi có chỉ định. Không nên tự dùng thuốc ngủ hoặc dùng lại đơn thuốc cũ của người khác."
        ]
      },
      {
        "heading": "Chăm sóc tinh thần cũng quan trọng như kiểm soát cơn đau",
        "paragraphs": [
          "Có người bệnh không đau nhiều nhưng lại thường xuyên sợ hãi, suy nghĩ tiêu cực hoặc không dám nói chuyện với người thân. Những nỗi lo này có thể làm họ mất ngủ, giảm ăn và thu mình khỏi các hoạt động thường ngày.",
          "Hỗ trợ tâm lý trong chăm sóc giảm nhẹ có thể giúp người bệnh:",
          "Hiểu và gọi tên cảm xúc của mình.",
          "Nói ra điều đang lo lắng.",
          "Thích nghi với thay đổi của cơ thể.",
          "Giao tiếp tốt hơn với gia đình.",
          "Chuẩn bị cho các quyết định điều trị.",
          "Tìm lại những điều còn có ý nghĩa trong cuộc sống.",
          "Buồn bã sau khi nhận chẩn đoán ung thư là phản ứng dễ hiểu. Tuy nhiên, nếu người bệnh tuyệt vọng kéo dài, mất hứng thú với mọi hoạt động, không muốn ăn uống hoặc có ý nghĩ làm hại bản thân, gia đình cần thông báo ngay với bác sĩ để được hỗ trợ chuyên môn.",
          "Chăm sóc tinh thần có phải là tư vấn tôn giáo không?",
          "Không nhất thiết.",
          "Nhu cầu tinh thần có thể liên quan đến tôn giáo, nhưng cũng có thể là mong muốn tìm ý nghĩa, hòa giải một mối quan hệ, hoàn thành một việc còn dang dở hoặc được ở bên người mình yêu thương.",
          "Đội ngũ chăm sóc cần tôn trọng niềm tin và lựa chọn của từng người. Không nên áp đặt quan điểm tôn giáo hoặc ép người bệnh phải “suy nghĩ tích cực” trong khi họ đang đau buồn.",
          "Đôi khi, câu nói nhân văn nhất không phải là “phải mạnh mẽ lên”, mà là:",
          "“Tôi biết những ngày này rất khó khăn. Chúng ta sẽ cùng tìm cách để anh/chị cảm thấy dễ chịu hơn.”",
          "Gia đình nên trò chuyện với người bệnh như thế nào?",
          "Nhiều gia đình muốn giấu hoàn toàn tình trạng bệnh vì sợ người thân suy sụp. Một số khác lại liên tục nói về bệnh, khiến người bệnh cảm thấy mình không còn được nhìn nhận như trước.",
          "Mỗi người có nhu cầu tiếp nhận thông tin khác nhau. Gia đình có thể bắt đầu bằng những câu hỏi nhẹ nhàng:",
          "Người bệnh muốn biết bao nhiêu về tình trạng của mình?",
          "Điều gì đang khiến người bệnh lo nhất?",
          "Người bệnh muốn ai tham gia vào các cuộc trao đổi với bác sĩ?",
          "Mục tiêu quan trọng nhất lúc này là gì?",
          "Triệu chứng nào đang làm người bệnh khó chịu nhất?",
          "Người bệnh mong muốn được chăm sóc ở đâu khi sức khỏe thay đổi?",
          "Việc trò chuyện không phải để lấy đi hy vọng. Mục tiêu là giúp hy vọng trở nên thực tế hơn: hy vọng giảm đau, dự một dịp quan trọng, có thêm thời gian bên gia đình hoặc được chăm sóc đúng với mong muốn của mình.",
          "Có nên nói cho người bệnh biết đầy đủ tình trạng bệnh không?",
          "Không có một cách giao tiếp duy nhất phù hợp với mọi gia đình. Tuy nhiên, người bệnh có quyền được tiếp nhận thông tin phù hợp và tham gia các quyết định liên quan đến cơ thể mình.",
          "Bác sĩ có thể trao đổi theo từng bước, sử dụng ngôn ngữ dễ hiểu và kiểm tra xem người bệnh đã sẵn sàng nghe đến đâu. Gia đình cũng có thể thông báo trước cho bác sĩ về tâm lý, văn hóa và cách giao tiếp quen thuộc của người bệnh.",
          "Giấu thông tin hoàn toàn đôi khi khiến người bệnh cảm nhận có điều bất thường nhưng không được giải thích, từ đó càng thêm lo lắng và cô đơn.",
          "Chăm sóc giảm nhẹ có sử dụng morphine không?",
          "Có thể, nhưng không phải người bệnh nào cũng cần morphine.",
          "Morphine và các thuốc opioid khác có vai trò trong kiểm soát một số cơn đau từ trung bình đến nặng, đồng thời có thể được sử dụng trong một số tình huống khó thở theo chỉ định chuyên môn. WHO xác định opioid là nhóm thuốc thiết yếu trong điều trị đau ung thư nhưng cần được kê đơn, theo dõi và quản lý an toàn.",
          "Người bệnh và gia đình không nên:",
          "Tự mua hoặc tự tăng liều.",
          "Chia sẻ thuốc với người khác.",
          "Uống thêm liều khi chưa rõ hướng dẫn.",
          "Tự ngừng thuốc đột ngột.",
          "Bẻ, nghiền hoặc thay đổi dạng thuốc khi chưa hỏi bác sĩ.",
          "Sử dụng cùng rượu hoặc thuốc an thần một cách tùy ý.",
          "Bác sĩ sẽ đánh giá mức độ đau, chức năng gan thận, các thuốc đang dùng và tác dụng không mong muốn để lựa chọn thuốc phù hợp.",
          "Dùng thuốc giảm đau mạnh có làm người bệnh “nghiện” không?",
          "Đây là nỗi lo phổ biến khiến nhiều người cố chịu đau.",
          "Khi opioid được sử dụng để điều trị đau ung thư theo chỉ định, bác sĩ sẽ cân nhắc lợi ích, nguy cơ và theo dõi thường xuyên. Cơ thể có thể xuất hiện hiện tượng quen thuốc hoặc phụ thuộc thể chất sau một thời gian, nhưng điều này không hoàn toàn giống với rối loạn sử dụng chất gây nghiện.",
          "Người bệnh không nên vì sợ hãi mà giấu mức độ đau hoặc từ chối thuốc cần thiết. Đồng thời, cũng không nên xem opioid là thuốc “càng mạnh càng tốt”. Mọi điều chỉnh cần được thực hiện bởi nhân viên y tế.",
          "Hóa trị, xạ trị và phẫu thuật có thể là điều trị giảm nhẹ không?",
          "Có.",
          "Một phương pháp điều trị ung thư có thể được thực hiện với mục tiêu chữa khỏi, kiểm soát bệnh hoặc giảm triệu chứng, tùy tình trạng cụ thể.",
          "Ví dụ:",
          "Xạ trị làm giảm đau do di căn xương.",
          "Hóa trị hoặc điều trị đích làm khối u nhỏ lại để giảm chèn ép.",
          "Phẫu thuật giải quyết tắc nghẽn hoặc chảy máu.",
          "Đặt stent giúp đường tiêu hóa hoặc đường thở thông thoáng hơn.",
          "Dẫn lưu dịch giúp giảm khó thở hoặc căng tức.",
          "Trong những trường hợp này, phương pháp điều trị vẫn tác động vào khối u nhưng mục tiêu ưu tiên là giúp người bệnh dễ chịu và sinh hoạt tốt hơn.",
          "Ai tham gia vào chăm sóc giảm nhẹ?",
          "Chăm sóc giảm nhẹ thường cần sự phối hợp đa chuyên khoa. Tùy nhu cầu, đội ngũ có thể gồm:",
          "Bác sĩ Ung bướu.",
          "Bác sĩ chăm sóc giảm nhẹ hoặc kiểm soát đau.",
          "Điều dưỡng.",
          "Bác sĩ dinh dưỡng hoặc chuyên gia dinh dưỡng.",
          "Dược sĩ.",
          "Chuyên gia tâm lý.",
          "Nhân viên công tác xã hội.",
          "Kỹ thuật viên phục hồi chức năng.",
          "Chuyên gia hỗ trợ tinh thần hoặc tín ngưỡng.",
          "Người thân và người chăm sóc.",
          "Đội ngũ giảm nhẹ không thay thế bác sĩ đang điều trị ung thư. Hai bên phối hợp để thống nhất mục tiêu, thuốc, kế hoạch theo dõi và cách xử trí khi người bệnh xuất hiện vấn đề mới.",
          "Người bệnh có được tự quyết định mục tiêu chăm sóc không?",
          "Người bệnh có quyền tham gia quyết định sau khi được giải thích rõ về lợi ích, giới hạn và nguy cơ của các phương án.",
          "Mục tiêu chăm sóc có thể thay đổi theo thời gian. Ban đầu, người bệnh có thể ưu tiên điều trị tích cực để kiểm soát khối u. Khi sức khỏe thay đổi, họ có thể chú trọng hơn đến việc giảm đau, ở gần gia đình hoặc hạn chế nhập viện.",
          "Việc thay đổi mục tiêu không phải là thất bại. Đó là quá trình điều chỉnh chăm sóc để phù hợp hơn với tình trạng sức khỏe và giá trị của người bệnh.",
          "Lập kế hoạch chăm sóc trước có ý nghĩa gì?",
          "Lập kế hoạch chăm sóc trước là quá trình trao đổi về mong muốn của người bệnh nếu trong tương lai họ không thể tự nói hoặc tự quyết định.",
          "Nội dung có thể bao gồm:",
          "Ai là người đại diện trao đổi với bác sĩ?",
          "Người bệnh mong muốn được chăm sóc tại đâu?",
          "Những can thiệp nào người bệnh chấp nhận hoặc không mong muốn?",
          "Điều gì được người bệnh xem là chất lượng sống có thể chấp nhận?",
          "Những giá trị văn hóa, tinh thần hoặc gia đình nào cần được tôn trọng?",
          "Cuộc trò chuyện này không chỉ dành cho những ngày cuối đời. Thảo luận sớm giúp gia đình bớt lúng túng nếu có tình huống khẩn cấp và hạn chế việc phải đưa ra quyết định trong trạng thái hoảng loạn.",
          "Chăm sóc tại nhà có phải là chăm sóc giảm nhẹ không?",
          "Chăm sóc giảm nhẹ có thể được thực hiện tại bệnh viện, phòng khám hoặc tại nhà, tùy nhu cầu và nguồn lực.",
          "Tại nhà, gia đình có thể được hướng dẫn:",
          "Cho người bệnh dùng thuốc đúng giờ.",
          "Theo dõi đau và các triệu chứng.",
          "Chăm sóc da, miệng hoặc vết thương.",
          "Hỗ trợ ăn uống và vận động.",
          "Nhận biết dấu hiệu cần liên hệ bác sĩ.",
          "Chuẩn bị phương án khi có tình huống khẩn cấp.",
          "Tuy nhiên, chăm sóc tại nhà không có nghĩa gia đình phải tự xử lý mọi vấn đề. Một số triệu chứng vẫn cần được đánh giá trực tiếp hoặc nhập viện.",
          "Khi nào người bệnh cần đến cơ sở y tế ngay?",
          "Gia đình cần liên hệ bác sĩ hoặc đưa người bệnh đến cơ sở y tế nếu xuất hiện:",
          "Khó thở đột ngột hoặc tăng nhanh.",
          "Đau dữ dội không giảm theo hướng dẫn.",
          "Lơ mơ, co giật hoặc thay đổi ý thức.",
          "Sốt cao, rét run, đặc biệt khi đang hóa trị.",
          "Nôn liên tục, không uống được nước.",
          "Chảy máu nhiều hoặc không cầm.",
          "Ho ra máu, nôn ra máu hoặc đi ngoài phân đen.",
          "Không tiểu được hoặc lượng nước tiểu giảm rõ.",
          "Bụng chướng đau, không đi tiêu và không trung tiện.",
          "Yếu liệt hoặc nói khó mới xuất hiện.",
          "Ngã, chấn thương hoặc nghi ngờ gãy xương.",
          "Người bệnh có ý nghĩ làm hại bản thân.",
          "Không nên cho rằng mọi triệu chứng đều là diễn biến “bình thường của ung thư”. Một số vấn đề có thể điều trị được nếu được phát hiện kịp thời.",
          "Gia đình có thể làm gì để hỗ trợ người bệnh?",
          "Gia đình không cần phải luôn tìm ra lời nói hoàn hảo. Nhiều khi, sự hiện diện bình tĩnh đã là một hình thức hỗ trợ quan trọng.",
          "Một số việc có thể giúp ích:",
          "Lắng nghe mà không vội đưa ra lời khuyên.",
          "Hỏi người bệnh cần gì thay vì tự quyết định mọi việc.",
          "Ghi lại các triệu chứng và thuốc đang dùng.",
          "Đưa người bệnh đi tái khám đúng lịch.",
          "Chia sẻ công việc chăm sóc giữa các thành viên.",
          "Tôn trọng mong muốn nghỉ ngơi hoặc ở một mình.",
          "Duy trì những hoạt động người bệnh còn yêu thích.",
          "Chăm sóc sức khỏe và giấc ngủ của chính người chăm sóc.",
          "Người chăm sóc cần nghỉ ngơi không phải vì ích kỷ, mà để có đủ sức tiếp tục đồng hành lâu dài."
        ]
      },
      {
        "heading": "Những câu nói tưởng động viên nhưng có thể tạo thêm áp lực",
        "paragraphs": [
          "Một số câu quen thuộc có thể khiến người bệnh cảm thấy mình không được phép buồn hoặc sợ:",
          "“Đừng nghĩ nhiều nữa.”",
          "“Phải mạnh mẽ lên.”",
          "“Người khác còn nặng hơn.”",
          "“Cứ vui vẻ là bệnh sẽ khỏi.”",
          "“Đừng nói chuyện xấu.”",
          "“Cố ăn đi, không ăn sao khỏe được?”",
          "Có thể thay bằng:",
          "“Hôm nay điều gì làm anh/chị khó chịu nhất?”",
          "“Anh/chị muốn tôi giúp việc gì?”",
          "“Tôi đang ở đây và sẵn sàng lắng nghe.”",
          "“Chúng ta có thể nói với bác sĩ về vấn đề này.”",
          "“Không sao nếu hôm nay anh/chị cảm thấy mệt.”",
          "Chăm sóc nhân văn không phải là buộc người bệnh luôn tích cực. Đó là cho phép họ được thành thật với cảm xúc và vẫn cảm thấy mình được tôn trọng."
        ]
      },
      {
        "heading": "Chăm sóc giảm nhẹ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Người bệnh ung thư có các triệu chứng ảnh hưởng đến ăn uống, giấc ngủ, vận động hoặc tinh thần có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám và đánh giá toàn diện.",
          "Tùy tình trạng, bác sĩ Ung bướu có thể phối hợp với các chuyên khoa liên quan để:",
          "Kiểm soát đau và triệu chứng.",
          "Đánh giá tác dụng không mong muốn của điều trị.",
          "Hỗ trợ dinh dưỡng và phục hồi thể lực.",
          "Xử trí các bệnh lý đi kèm.",
          "Tư vấn mục tiêu và kế hoạch chăm sóc.",
          "Hướng dẫn gia đình theo dõi người bệnh tại nhà.",
          "Đánh giá khi nào cần can thiệp hoặc nhập viện.",
          "Chăm sóc giảm nhẹ hiệu quả cần dựa trên nhu cầu riêng của mỗi người. Có người cần kiểm soát đau, có người cần hỗ trợ ăn uống, trong khi người khác chỉ mong được giải thích rõ để bớt sợ hãi trước những điều chưa biết."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp về chăm sóc giảm nhẹ trong ung thư",
        "paragraphs": [
          "Người bệnh đang ở giai đoạn sớm có cần chăm sóc giảm nhẹ không?",
          "Có thể. Người bệnh giai đoạn sớm vẫn có thể đau sau phẫu thuật, buồn nôn do hóa trị, mất ngủ hoặc căng thẳng. Chăm sóc giảm nhẹ được thực hiện theo nhu cầu chứ không chỉ dựa vào giai đoạn bệnh.",
          "Tham gia chăm sóc giảm nhẹ có phải ngừng hóa trị không?",
          "Không. Người bệnh có thể tiếp tục điều trị ung thư trong khi được chăm sóc giảm nhẹ. Việc có tiếp tục một phương pháp hay không phụ thuộc vào hiệu quả, tác dụng không mong muốn, thể trạng và mong muốn của người bệnh.",
          "Chăm sóc giảm nhẹ có làm người bệnh sống ngắn hơn không?",
          "Mục tiêu của chăm sóc giảm nhẹ là giảm đau khổ và nâng cao chất lượng sống, không phải làm bệnh tiến triển nhanh hơn. Các quyết định điều trị được cân nhắc dựa trên lợi ích, rủi ro và mong muốn của từng người.",
          "Chỉ bệnh nhân ung thư giai đoạn cuối mới cần giảm đau mạnh phải không?",
          "Không. Thuốc được lựa chọn theo mức độ và nguyên nhân gây đau, không chỉ theo giai đoạn ung thư. Người bệnh không nên cố chịu đau chỉ vì nghĩ mình “chưa đủ nặng” để sử dụng thuốc.",
          "Người nhà có thể yêu cầu tư vấn giảm nhẹ không?",
          "Có. Người bệnh hoặc gia đình có thể chủ động hỏi bác sĩ về kiểm soát đau, dinh dưỡng, giấc ngủ, hỗ trợ tâm lý và kế hoạch chăm sóc tại nhà.",
          "Chăm sóc giảm nhẹ có chữa khỏi ung thư không?",
          "Chăm sóc giảm nhẹ không phải là phương pháp thay thế điều trị ung thư. Một số can thiệp giảm nhẹ có thể tác động vào khối u để giảm triệu chứng, nhưng mục tiêu chính vẫn là nâng cao sự thoải mái và chất lượng sống.",
          "Kết luận",
          "Chăm sóc giảm nhẹ không phải là dấu chấm hết của hành trình điều trị ung thư. Đây là một phần cần thiết của chăm sóc toàn diện, có thể bắt đầu từ sớm và được thực hiện song song với hóa trị, xạ trị, phẫu thuật hoặc những phương pháp điều trị khác.",
          "Người bệnh không cần phải chịu đau, mất ngủ, buồn nôn hay sợ hãi trong im lặng. Báo với bác sĩ về những điều đang làm mình khó chịu không phải là than phiền, mà là bước quan trọng để được chăm sóc đúng mức.",
          "Đôi khi, y học không chỉ được đo bằng việc khối u nhỏ đi bao nhiêu. Y học còn nằm trong một đêm người bệnh ngủ ngon hơn, một bữa ăn bớt buồn nôn, một cơn đau được kiểm soát và cảm giác rằng mình vẫn được lắng nghe, tôn trọng, yêu thương.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "kham-phu-khoa-dinh-ky-gom-nhung-gi": {
    "sourceFile": "19.Khám phụ khoa định kỳ gồm những gì.docx",
    "title": "Khám phụ khoa định kỳ gồm những gì? Những điều phụ nữ nên biết trước khi đi khám",
    "excerpt": "Nhiều phụ nữ chỉ nghĩ đến việc khám phụ khoa khi bị ngứa, ra khí hư, đau bụng dưới hoặc rối loạn kinh nguyệt. Tuy nhiên, không ít bệnh lý phụ khoa có thể phát triển âm thầm trong giai đoạn đầu, khi cơ thể chưa biểu hiện rõ ràng.",
    "intro": [
      "Nhiều phụ nữ chỉ nghĩ đến việc khám phụ khoa khi bị ngứa, ra khí hư, đau bụng dưới hoặc rối loạn kinh nguyệt. Tuy nhiên, không ít bệnh lý phụ khoa có thể phát triển âm thầm trong giai đoạn đầu, khi cơ thể chưa biểu hiện rõ ràng.",
      "Khám phụ khoa định kỳ là dịp để bác sĩ đánh giá sức khỏe sinh sản, phát hiện những thay đổi bất thường và tư vấn các vấn đề như kinh nguyệt, tránh thai, tình dục an toàn, kế hoạch mang thai hoặc mãn kinh. Một buổi khám có thể gồm hỏi bệnh, khám bên ngoài, khám âm đạo – cổ tử cung, xét nghiệm, siêu âm hoặc tầm soát ung thư cổ tử cung tùy từng trường hợp.",
      "Điều quan trọng cần hiểu là: khám phụ khoa định kỳ không đồng nghĩa mỗi lần đều phải làm tất cả các xét nghiệm.",
      "Khám phụ khoa định kỳ là gì?",
      "Khám phụ khoa định kỳ là quá trình kiểm tra sức khỏe của hệ sinh sản nữ, bao gồm âm hộ, âm đạo, cổ tử cung, tử cung, vòi trứng và buồng trứng.",
      "Buổi khám cũng là cơ hội để người bệnh trao đổi với bác sĩ về:",
      "Chu kỳ kinh nguyệt.",
      "Khí hư và vệ sinh vùng kín.",
      "Đời sống tình dục.",
      "Các phương pháp tránh thai.",
      "Tiêm vaccine HPV.",
      "Kế hoạch mang thai.",
      "Sức khỏe giai đoạn tiền mãn kinh và mãn kinh.",
      "Nguy cơ mắc bệnh lây truyền qua đường tình dục.",
      "Tiền sử ung thư phụ khoa trong gia đình.",
      "Theo chuyên môn sản phụ khoa, một lần kiểm tra sức khỏe phụ nữ không chỉ giới hạn ở Pap test, khám vùng chậu hay siêu âm. Từng nội dung được lựa chọn dựa trên tuổi, triệu chứng, tiền sử và nguy cơ của mỗi người; không phải kỹ thuật nào cũng cần lặp lại hằng năm.",
      "Bao lâu nên khám phụ khoa một lần?",
      "Phụ nữ có thể chủ động kiểm tra sức khỏe phụ khoa định kỳ khoảng mỗi năm một lần, ngay cả khi chưa có triệu chứng. Tuy nhiên, đây là khoảng thời gian dành cho một lần đánh giá sức khỏe tổng thể, không có nghĩa tất cả mọi người đều cần siêu âm, xét nghiệm HPV hoặc Pap test mỗi năm.",
      "Lịch khám có thể ngắn hơn nếu người bệnh:",
      "Từng có kết quả Pap hoặc HPV bất thường.",
      "Đang theo dõi u xơ tử cung, u nang buồng trứng hoặc lạc nội mạc tử cung.",
      "Có rối loạn kinh nguyệt kéo dài.",
      "Từng mắc bệnh lây truyền qua đường tình dục.",
      "Đang điều trị vô sinh hoặc chuẩn bị mang thai.",
      "Đã mãn kinh nhưng xuất hiện chảy máu.",
      "Có tiền sử ung thư hoặc tổn thương tiền ung thư phụ khoa.",
      "Bị suy giảm miễn dịch.",
      "Đang sử dụng thuốc hoặc biện pháp tránh thai cần theo dõi.",
      "Ngược lại, người không có triệu chứng, nguy cơ thấp và đã có kết quả kiểm tra bình thường có thể không cần thực hiện một số xét nghiệm thường xuyên như họ vẫn nghĩ.",
      "Khám phụ khoa định kỳ thường gồm những gì?",
      "Nội dung cụ thể không hoàn toàn giống nhau giữa mọi người. Thông thường, quá trình khám có thể bao gồm các bước sau.",
      "1. Trao đổi về triệu chứng và tiền sử sức khỏe",
      "Đây là bước đầu tiên nhưng có ý nghĩa rất quan trọng. Trước khi khám, bác sĩ thường hỏi về:",
      "Tuổi và ngày đầu kỳ kinh gần nhất.",
      "Chu kỳ kinh đều hay không.",
      "Lượng máu kinh và số ngày hành kinh.",
      "Đau bụng kinh hoặc đau vùng chậu.",
      "Tình trạng khí hư.",
      "Ngứa, rát hoặc mùi bất thường vùng kín.",
      "Chảy máu giữa kỳ kinh hoặc sau quan hệ.",
      "Tiền sử mang thai, sinh con, sảy thai hoặc phá thai.",
      "Biện pháp tránh thai đang sử dụng.",
      "Thuốc đang dùng.",
      "Tiền sử phẫu thuật phụ khoa.",
      "Kết quả Pap, HPV hoặc siêu âm trước đây.",
      "Tiền sử ung thư vú, buồng trứng, tử cung hoặc đại trực tràng trong gia đình.",
      "Một số câu hỏi về quan hệ tình dục hoặc nguy cơ lây nhiễm có thể khiến người bệnh ngại ngùng. Tuy nhiên, thông tin trung thực giúp bác sĩ lựa chọn xét nghiệm phù hợp và tránh thực hiện những kiểm tra không cần thiết.",
      "Người bệnh có quyền đề nghị bác sĩ giải thích mục đích của từng bước khám và có thể thông báo ngay nếu cảm thấy đau, lo lắng hoặc không thoải mái.",
      "2. Kiểm tra sức khỏe tổng quát",
      "Khám phụ khoa không tách rời sức khỏe toàn thân. Tùy nhu cầu, nhân viên y tế có thể kiểm tra:",
      "Chiều cao và cân nặng.",
      "Huyết áp.",
      "Mạch.",
      "Chỉ số khối cơ thể.",
      "Dấu hiệu thiếu máu.",
      "Tuyến giáp.",
      "Da, lông tóc hoặc những biểu hiện rối loạn nội tiết.",
      "Các bệnh nền như tăng huyết áp, tiểu đường và rối loạn mỡ máu.",
      "Ví dụ, kinh nguyệt không đều có thể liên quan đến hội chứng buồng trứng đa nang, rối loạn tuyến giáp, thay đổi cân nặng hoặc căng thẳng kéo dài. Vì vậy, bác sĩ không chỉ tập trung vào tử cung và buồng trứng mà còn đánh giá các yếu tố toàn thân có liên quan.",
      "3. Khám vùng bụng",
      "Bác sĩ có thể quan sát và sờ vùng bụng dưới để kiểm tra:",
      "Vị trí đau.",
      "Vùng căng tức hoặc phản ứng bất thường.",
      "Khối lớn trong ổ bụng hoặc vùng chậu.",
      "Dấu hiệu liên quan đến bàng quang, ruột hoặc cơ quan sinh sản.",
      "Khám bụng không thể thay thế siêu âm, nhưng có thể giúp bác sĩ định hướng vị trí và mức độ bất thường.",
      "4. Khám cơ quan sinh dục bên ngoài",
      "Bác sĩ quan sát khu vực âm hộ và vùng xung quanh nhằm phát hiện:",
      "Sưng, đỏ hoặc kích ứng.",
      "Vết loét.",
      "Mụn nước hoặc mụn cóc sinh dục.",
      "Nang hoặc khối bất thường.",
      "Dấu hiệu viêm tuyến Bartholin.",
      "Tổn thương da.",
      "Teo hoặc khô âm hộ ở phụ nữ mãn kinh.",
      "Khí hư xuất hiện ở cửa âm đạo.",
      "Không phải mọi thay đổi bên ngoài đều là bệnh lây truyền qua đường tình dục. Viêm da tiếp xúc, dị ứng dung dịch vệ sinh, cạo lông, mặc quần quá chật hoặc thay đổi nội tiết cũng có thể gây ngứa và đỏ.",
      "5. Khám âm đạo và cổ tử cung bằng van âm đạo",
      "Bác sĩ có thể sử dụng một dụng cụ gọi là van âm đạo, thường được gọi quen là mỏ vịt, để nhẹ nhàng mở thành âm đạo và quan sát bên trong.",
      "Qua bước này, bác sĩ có thể đánh giá:",
      "Niêm mạc âm đạo.",
      "Đặc điểm khí hư.",
      "Tình trạng viêm hoặc tổn thương.",
      "Cổ tử cung.",
      "Polyp cổ tử cung.",
      "Vùng chảy máu.",
      "Dấu hiệu nghi ngờ tổn thương tiền ung thư hoặc ung thư.",
      "Nếu cần làm Pap test, xét nghiệm HPV hoặc lấy mẫu khí hư, mẫu thường được lấy trong bước này.",
      "Khám bằng van âm đạo có thể gây cảm giác căng hoặc khó chịu nhẹ nhưng không nên gây đau dữ dội. Người bệnh nên báo ngay nếu cảm thấy đau để bác sĩ điều chỉnh kích thước dụng cụ, tư thế hoặc dừng thủ thuật khi cần.",
      "Không phải mọi phụ nữ không có triệu chứng đều bắt buộc phải khám vùng chậu bằng dụng cụ ở mỗi lần kiểm tra. Lợi ích của việc thực hiện khám vùng chậu thường quy ở người hoàn toàn không có triệu chứng vẫn cần được cân nhắc theo tuổi, nguy cơ, mục đích khám và mong muốn của người bệnh.",
      "6. Khám bằng tay để đánh giá tử cung và phần phụ",
      "Sau khi khám bằng van âm đạo, bác sĩ có thể thực hiện khám hai tay. Một hoặc hai ngón tay có đeo găng được đặt nhẹ vào âm đạo, trong khi tay còn lại ấn trên bụng dưới.",
      "Bước này giúp bác sĩ đánh giá sơ bộ:",
      "Kích thước và vị trí tử cung.",
      "Tử cung có đau hay không.",
      "Khả năng có khối bất thường.",
      "Đau tại vùng buồng trứng hoặc vòi trứng.",
      "Độ di động của các cơ quan vùng chậu.",
      "Dấu hiệu gợi ý viêm vùng chậu.",
      "Khám bằng tay không thể xác định chính xác loại u hay kích thước tổn thương nhỏ. Nếu phát hiện đau hoặc khối nghi ngờ, bác sĩ có thể chỉ định siêu âm hoặc phương pháp chẩn đoán hình ảnh khác.",
      "7. Pap test và xét nghiệm HPV",
      "Pap test và xét nghiệm HPV là những phương pháp tầm soát ung thư cổ tử cung, nhưng chúng không hoàn toàn giống nhau.",
      "Pap test kiểm tra điều gì?",
      "Pap test lấy một số tế bào trên bề mặt cổ tử cung để tìm những thay đổi bất thường, bao gồm tổn thương tiền ung thư.",
      "Xét nghiệm HPV kiểm tra điều gì?",
      "Xét nghiệm HPV tìm các chủng HPV nguy cơ cao có khả năng gây biến đổi tế bào cổ tử cung.",
      "Một số trường hợp được thực hiện riêng Pap test, riêng xét nghiệm HPV hoặc kết hợp hai phương pháp.",
      "Lịch tầm soát phụ thuộc vào tuổi, loại xét nghiệm, kết quả trước đây và hướng dẫn được áp dụng. Theo một số hướng dẫn quốc tế cập nhật:",
      "Người từ 21–29 tuổi có nguy cơ trung bình có thể được tầm soát bằng Pap test định kỳ.",
      "Từ 30–65 tuổi, xét nghiệm HPV nguy cơ cao thường được ưu tiên; Pap test đơn thuần hoặc xét nghiệm phối hợp vẫn có thể được sử dụng tùy điều kiện.",
      "Người có tiền sử tổn thương tiền ung thư, suy giảm miễn dịch hoặc kết quả bất thường cần lịch riêng.",
      "Các mốc này chỉ mang tính tham khảo quốc tế. Người bệnh nên thực hiện theo hướng dẫn chuyên môn, chương trình tầm soát tại nơi sinh sống và đánh giá cá nhân của bác sĩ.",
      "Không cần làm Pap test mỗi năm nếu người bệnh có nguy cơ trung bình và kết quả trước đây bình thường. Tuy nhiên, vẫn nên khám sức khỏe phụ khoa định kỳ để trao đổi các vấn đề khác.",
      "8. Xét nghiệm khí hư khi có dấu hiệu viêm nhiễm",
      "Nếu người bệnh bị ngứa, rát, đau khi quan hệ, khí hư thay đổi hoặc có mùi bất thường, bác sĩ có thể lấy mẫu dịch âm đạo để kiểm tra.",
      "Mẫu dịch giúp tìm những nguyên nhân như:",
      "Nấm Candida.",
      "Rối loạn hệ vi khuẩn âm đạo.",
      "Trùng roi.",
      "Một số loại vi khuẩn hoặc tác nhân lây truyền qua đường tình dục.",
      "Đặc điểm khí hư chỉ có thể gợi ý nguyên nhân. Ví dụ, khí hư trắng đặc có thể gặp khi nhiễm nấm, nhưng cũng có thể xuất hiện trong tình trạng khác. Vì vậy, không nên nhìn màu khí hư rồi tự mua thuốc đặt.",
      "Việc dùng thuốc đặt trước khi khám có thể làm thay đổi mẫu dịch và khiến kết quả khó đánh giá hơn.",
      "9. Xét nghiệm bệnh lây truyền qua đường tình dục",
      "Xét nghiệm bệnh lây truyền qua đường tình dục không mặc nhiên được thực hiện cho tất cả mọi người trong mỗi lần khám phụ khoa.",
      "Bác sĩ sẽ cân nhắc dựa trên:",
      "Tuổi.",
      "Triệu chứng.",
      "Tiền sử quan hệ tình dục.",
      "Số lượng và tình trạng bạn tình.",
      "Việc sử dụng bao cao su.",
      "Tiền sử nhiễm bệnh trước đây.",
      "Tình trạng mang thai.",
      "Nguy cơ của bạn tình.",
      "Tùy trường hợp, mẫu xét nghiệm có thể là máu, nước tiểu hoặc dịch lấy từ âm đạo, cổ tử cung, họng hay trực tràng.",
      "Theo CDC, nhiều bệnh lây truyền qua đường tình dục không gây triệu chứng. Phụ nữ đang hoạt động tình dục dưới 25 tuổi thường được khuyến nghị kiểm tra Chlamydia và lậu định kỳ; người từ 25 tuổi trở lên có nguy cơ tăng cũng có thể cần xét nghiệm. Phụ nữ mang thai cần được đánh giá thêm một số nhiễm trùng có khả năng ảnh hưởng đến thai kỳ.",
      "10. Siêu âm phụ khoa",
      "Siêu âm sử dụng sóng âm để tạo hình ảnh của tử cung, nội mạc tử cung, buồng trứng và các cấu trúc vùng chậu.",
      "Có hai hình thức thường gặp."
    ],
    "sections": [
      {
        "heading": "Siêu âm qua đường bụng",
        "paragraphs": [
          "Đầu dò được di chuyển trên thành bụng dưới. Người bệnh thường được yêu cầu nhịn tiểu để bàng quang căng, giúp quan sát các cơ quan vùng chậu rõ hơn.",
          "Phương pháp này có thể được sử dụng khi:",
          "Người bệnh chưa phù hợp với siêu âm đầu dò âm đạo.",
          "Cần quan sát khối lớn.",
          "Đang đánh giá thai kỳ.",
          "Cần khảo sát tổng quát vùng bụng và chậu."
        ]
      },
      {
        "heading": "Siêu âm đầu dò âm đạo",
        "paragraphs": [
          "Một đầu dò nhỏ được đưa nhẹ vào âm đạo để quan sát cơ quan vùng chậu ở khoảng cách gần hơn.",
          "Phương pháp này có thể giúp phát hiện hoặc đánh giá:",
          "U xơ tử cung.",
          "U nang buồng trứng.",
          "Polyp nội mạc tử cung.",
          "Độ dày nội mạc tử cung.",
          "Lạc nội mạc tử cung trong một số trường hợp.",
          "Nguyên nhân đau vùng chậu.",
          "Chảy máu tử cung bất thường.",
          "Vị trí dụng cụ tử cung.",
          "Một số vấn đề trong thai kỳ sớm.",
          "Siêu âm đầu dò có thể cung cấp hình ảnh chi tiết về tử cung, cổ tử cung và buồng trứng, nhưng không phải là xét nghiệm bắt buộc cho mọi phụ nữ khỏe mạnh trong mỗi lần khám. Phương pháp này thường được chỉ định khi có triệu chứng, kết quả khám bất thường hoặc mục tiêu theo dõi cụ thể.",
          "Siêu âm phụ khoa có phát hiện được mọi bệnh không?",
          "Không.",
          "Siêu âm có thể phát hiện nhiều bất thường về cấu trúc nhưng không thể:",
          "Chẩn đoán chính xác mọi loại viêm âm đạo.",
          "Thay thế Pap test hoặc xét nghiệm HPV.",
          "Khẳng định chắc chắn một khối là lành tính hay ung thư.",
          "Phát hiện tất cả tổn thương nhỏ ở cổ tử cung.",
          "Đánh giá đầy đủ chức năng sinh sản chỉ bằng một lần chụp.",
          "Loại trừ hoàn toàn ung thư buồng trứng.",
          "Đặc biệt, siêu âm đầu dò và xét nghiệm CA 125 không được xem là bộ xét nghiệm tầm soát ung thư buồng trứng thường quy cho mọi phụ nữ không có triệu chứng và có nguy cơ trung bình.",
          "Vì vậy, kết quả siêu âm “bình thường” không thay thế cho tầm soát cổ tử cung hoặc việc đi khám khi xuất hiện triệu chứng mới.",
          "11. Kiểm tra thai và tư vấn kế hoạch sinh sản",
          "Nếu bị trễ kinh, chảy máu bất thường hoặc có khả năng mang thai, bác sĩ có thể đề nghị xét nghiệm thai bằng nước tiểu hoặc máu.",
          "Với người đang có kế hoạch sinh con, buổi khám còn có thể bao gồm:",
          "Đánh giá chu kỳ kinh.",
          "Tư vấn thời điểm dễ thụ thai.",
          "Kiểm tra thuốc đang sử dụng.",
          "Tư vấn vaccine.",
          "Bổ sung acid folic.",
          "Đánh giá bệnh nền.",
          "Tư vấn xét nghiệm trước mang thai.",
          "Xem xét nguy cơ bệnh di truyền khi cần.",
          "Một lần khám phụ khoa thông thường không thể kết luận toàn bộ khả năng sinh sản. Nếu hai vợ chồng gặp khó khăn trong việc có thai, cần đánh giá cả người vợ và người chồng theo quy trình chuyên biệt.",
          "12. Tư vấn tránh thai và sức khỏe tình dục",
          "Bác sĩ sản phụ khoa có thể tư vấn các phương pháp tránh thai như:",
          "Bao cao su.",
          "Thuốc tránh thai hằng ngày.",
          "Thuốc tiêm tránh thai.",
          "Que cấy tránh thai.",
          "Dụng cụ tử cung.",
          "Các phương pháp theo dõi chu kỳ.",
          "Triệt sản khi phù hợp.",
          "Không có phương pháp nào phù hợp với tất cả mọi người. Việc lựa chọn cần dựa trên tuổi, bệnh nền, chu kỳ kinh, nguy cơ huyết khối, kế hoạch sinh con và khả năng sử dụng đúng.",
          "Người bệnh cũng có thể trao đổi về đau khi quan hệ, giảm ham muốn, khô âm đạo hoặc khó đạt khoái cảm. Đây là những vấn đề sức khỏe bình thường cần được trao đổi nghiêm túc, không phải điều đáng xấu hổ.",
          "13. Đánh giá sức khỏe giai đoạn tiền mãn kinh và mãn kinh",
          "Khi bước vào giai đoạn tiền mãn kinh, phụ nữ có thể gặp:",
          "Chu kỳ kinh thay đổi.",
          "Bốc hỏa.",
          "Đổ mồ hôi đêm.",
          "Mất ngủ.",
          "Khô âm đạo.",
          "Đau khi quan hệ.",
          "Tâm trạng thay đổi.",
          "Giảm ham muốn.",
          "Tiểu gấp hoặc tiểu nhiều.",
          "Bác sĩ sẽ đánh giá liệu đây là thay đổi sinh lý hay biểu hiện của bệnh lý khác. Không phải phụ nữ nào cũng cần xét nghiệm hormone để xác định mãn kinh.",
          "Đặc biệt, mọi trường hợp chảy máu âm đạo sau mãn kinh đều cần được kiểm tra, kể cả khi chỉ ra máu một lần hoặc một lượng rất ít.",
          "Có cần khám vú khi đi khám phụ khoa không?",
          "Tùy cơ sở và tình trạng của người bệnh, bác sĩ có thể hỏi hoặc kiểm tra các dấu hiệu bất thường ở vú như:",
          "Khối ở vú hoặc nách.",
          "Tiết dịch núm vú.",
          "Núm vú tụt vào trong mới xuất hiện.",
          "Thay đổi da vú.",
          "Đau khu trú kéo dài.",
          "Tiền sử gia đình mắc ung thư vú.",
          "Khám bằng tay không thay thế siêu âm vú hoặc chụp nhũ ảnh. Phương pháp chẩn đoán hình ảnh được lựa chọn theo tuổi, triệu chứng và nguy cơ.",
          "Khám phụ khoa có đau không?",
          "Phần lớn các bước khám chỉ gây cảm giác căng hoặc hơi khó chịu trong thời gian ngắn. Cảm giác đau có thể rõ hơn khi người bệnh:",
          "Đang viêm.",
          "Bị khô âm đạo.",
          "Quá căng thẳng.",
          "Có co thắt cơ vùng chậu.",
          "Từng trải qua sang chấn tình dục.",
          "Có lạc nội mạc tử cung hoặc bệnh gây đau vùng chậu.",
          "Dụng cụ chưa phù hợp.",
          "Người bệnh có thể đề nghị:",
          "Bác sĩ giải thích trước mỗi bước.",
          "Sử dụng dụng cụ kích thước nhỏ hơn.",
          "Thực hiện chậm hơn.",
          "Tạm dừng khi đau.",
          "Có nhân viên y tế hoặc người hỗ trợ đi cùng nếu quy định cho phép.",
          "Một buổi khám phụ khoa đúng cách cần tôn trọng sự riêng tư, sự đồng thuận và cảm giác an toàn của người bệnh.",
          "Chưa từng quan hệ tình dục có khám phụ khoa được không?",
          "Có.",
          "Phụ nữ chưa từng quan hệ vẫn có thể gặp rối loạn kinh nguyệt, u nang buồng trứng, u xơ tử cung, viêm da âm hộ hoặc nhiều vấn đề phụ khoa khác.",
          "Bác sĩ sẽ lựa chọn cách khám phù hợp, có thể gồm:",
          "Hỏi bệnh.",
          "Khám bụng.",
          "Quan sát cơ quan sinh dục ngoài.",
          "Siêu âm qua đường bụng.",
          "Xét nghiệm máu khi cần.",
          "Không phải trường hợp nào cũng cần khám bằng van âm đạo hoặc siêu âm đầu dò. Người bệnh nên thông báo rõ tiền sử để bác sĩ lựa chọn phương pháp phù hợp và tôn trọng mong muốn cá nhân.",
          "Đang có kinh nguyệt có khám phụ khoa được không?",
          "Có thể khám, đặc biệt khi người bệnh:",
          "Ra máu quá nhiều.",
          "Đau bụng dữ dội.",
          "Choáng, mệt hoặc nghi ngờ thiếu máu.",
          "Chảy máu khi đang mang thai.",
          "Chảy máu sau mãn kinh.",
          "Có tình trạng cần đánh giá khẩn cấp.",
          "Nếu chỉ khám định kỳ và cần lấy Pap, HPV hoặc mẫu khí hư, lượng máu kinh nhiều có thể ảnh hưởng đến chất lượng mẫu. Khi đó, cơ sở y tế có thể hướng dẫn chuyển lịch.",
          "Không nên trì hoãn khám nếu hiện tượng ra máu chính là triệu chứng bất thường cần được kiểm tra.",
          "Cần chuẩn bị gì trước khi khám phụ khoa?",
          "Để buổi khám thuận tiện hơn, người bệnh nên:",
          "Ghi nhớ ngày đầu kỳ kinh gần nhất.",
          "Mang theo kết quả khám, siêu âm, Pap hoặc HPV cũ.",
          "Liệt kê thuốc và thực phẩm bổ sung đang dùng.",
          "Ghi lại các triệu chứng và thời điểm xuất hiện.",
          "Thông báo khả năng mang thai.",
          "Vệ sinh bên ngoài nhẹ nhàng bằng nước sạch.",
          "Mặc trang phục dễ thay.",
          "Đi tiểu trước khi khám, trừ khi được yêu cầu giữ đầy bàng quang để siêu âm.",
          "Nếu dự kiến lấy mẫu cổ tử cung hoặc dịch âm đạo, người bệnh có thể được hướng dẫn tránh trong một khoảng thời gian trước buổi khám:",
          "Quan hệ tình dục.",
          "Thụt rửa âm đạo.",
          "Đặt thuốc âm đạo.",
          "Dùng dung dịch hoặc chất bôi trơn trong âm đạo.",
          "Không cần làm sạch sâu vùng kín. Âm đạo có cơ chế tự làm sạch và việc thụt rửa có thể làm mất cân bằng hệ vi sinh, gây kích ứng hoặc ảnh hưởng đến kết quả xét nghiệm.",
          "Khi nào không nên chờ đến lịch khám định kỳ?",
          "Người bệnh nên đi khám sớm nếu xuất hiện:",
          "Chảy máu âm đạo sau mãn kinh.",
          "Chảy máu sau quan hệ.",
          "Chảy máu giữa hai kỳ kinh.",
          "Kinh nguyệt nhiều bất thường hoặc kéo dài.",
          "Trễ kinh kèm đau bụng hoặc ra máu.",
          "Đau bụng dưới dữ dội.",
          "Đau vùng chậu kéo dài hoặc tăng dần.",
          "Khí hư lẫn máu, có mùi hôi hoặc thay đổi rõ rệt.",
          "Ngứa, rát hoặc loét vùng kín.",
          "Sờ thấy khối ở bụng dưới.",
          "Đau khi quan hệ.",
          "Sốt kèm đau vùng chậu.",
          "Tiểu buốt, tiểu ra máu hoặc đau hông lưng.",
          "Đầy bụng, nhanh no hoặc tăng kích thước vòng bụng kéo dài.",
          "Cần đến cơ sở y tế ngay nếu trễ kinh hoặc thử thai dương tính kèm đau bụng một bên, chảy máu, choáng hoặc ngất vì đây có thể là dấu hiệu của thai ngoài tử cung hoặc tình trạng mất máu."
        ]
      },
      {
        "heading": "Không có triệu chứng thì không cần khám",
        "paragraphs": [
          "Không đúng. Khám định kỳ có thể giúp đánh giá nguy cơ, cập nhật lịch tầm soát và phát hiện những thay đổi mà người bệnh chưa nhận thấy."
        ]
      },
      {
        "heading": "Đi khám phụ khoa là phải siêu âm",
        "paragraphs": [
          "Không đúng. Siêu âm chỉ là một trong nhiều phương pháp và được chỉ định theo tình trạng cụ thể."
        ]
      },
      {
        "heading": "Mỗi năm đều phải làm Pap test",
        "paragraphs": [
          "Không đúng. Lịch Pap và HPV phụ thuộc vào tuổi, loại xét nghiệm, nguy cơ và kết quả trước đó."
        ]
      },
      {
        "heading": "Khám phụ khoa có thể phát hiện tất cả bệnh ung thư nữ giới",
        "paragraphs": [
          "Không đúng. Không có một lần khám hoặc một xét nghiệm duy nhất có thể loại trừ tất cả ung thư cổ tử cung, tử cung, buồng trứng và vú."
        ]
      },
      {
        "heading": "Đã mãn kinh thì không cần khám phụ khoa",
        "paragraphs": [
          "Không đúng. Phụ nữ sau mãn kinh vẫn có thể gặp khô âm đạo, sa cơ quan vùng chậu, polyp, bệnh nội mạc tử cung và ung thư phụ khoa."
        ]
      },
      {
        "heading": "Chỉ phụ nữ đã kết hôn mới cần khám",
        "paragraphs": [
          "Không đúng. Nhu cầu khám phụ thuộc vào tuổi, triệu chứng và sức khỏe, không phụ thuộc tình trạng hôn nhân."
        ]
      },
      {
        "heading": "Khám phụ khoa định kỳ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Phụ nữ có nhu cầu kiểm tra sức khỏe sinh sản hoặc đang gặp triệu chứng bất thường có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ chuyên khoa Sản phụ khoa thăm khám.",
          "Tùy độ tuổi, triệu chứng và tiền sử, bác sĩ có thể tư vấn:",
          "Khám phụ khoa.",
          "Siêu âm qua đường bụng hoặc đầu dò.",
          "Pap test.",
          "Xét nghiệm HPV.",
          "Xét nghiệm khí hư.",
          "Kiểm tra bệnh lây truyền qua đường tình dục.",
          "Tư vấn tránh thai.",
          "Tư vấn trước khi mang thai.",
          "Theo dõi tiền mãn kinh và mãn kinh.",
          "Soi cổ tử cung hoặc sinh thiết khi có chỉ định.",
          "Nếu phát hiện tổn thương cần kiểm tra chuyên sâu, chuyên khoa Sản phụ khoa có thể phối hợp với Ung bướu, Chẩn đoán hình ảnh, Xét nghiệm và Giải phẫu bệnh để xác định nguyên nhân và tư vấn hướng xử trí phù hợp.",
          "Mục tiêu của buổi khám không phải là thực hiện càng nhiều xét nghiệm càng tốt, mà là lựa chọn đúng kiểm tra dựa trên nhu cầu thực tế của từng người."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp về khám phụ khoa định kỳ",
        "paragraphs": [
          "Khám phụ khoa mất bao lâu?",
          "Thời gian phụ thuộc vào nội dung kiểm tra. Một buổi hỏi bệnh và khám cơ bản thường diễn ra khá nhanh, nhưng có thể kéo dài hơn nếu cần siêu âm, lấy mẫu xét nghiệm hoặc tư vấn chuyên sâu.",
          "Có cần nhịn ăn trước khi khám không?",
          "Khám phụ khoa thông thường không yêu cầu nhịn ăn. Tuy nhiên, nếu được chỉ định một số xét nghiệm máu hoặc thủ thuật khác, nhân viên y tế sẽ hướng dẫn riêng.",
          "Siêu âm đầu dò có ảnh hưởng đến khả năng sinh sản không?",
          "Không. Siêu âm sử dụng sóng âm và không gây ảnh hưởng đến khả năng mang thai. Người bệnh có thể cảm thấy hơi căng hoặc khó chịu trong lúc thực hiện.",
          "Đặt thuốc âm đạo rồi có đi khám được không?",
          "Vẫn có thể đi khám, nhưng thuốc có thể ảnh hưởng đến việc quan sát và kết quả mẫu dịch. Người bệnh cần thông báo tên thuốc, số ngày đã sử dụng và thời điểm đặt liều gần nhất.",
          "Khám phụ khoa bình thường có nghĩa là không mắc bệnh không?",
          "Kết quả bình thường giúp giảm khả năng có một số vấn đề tại thời điểm kiểm tra, nhưng không thể bảo đảm cơ thể sẽ không xuất hiện bệnh sau đó. Người bệnh vẫn cần tái khám nếu có triệu chứng mới.",
          "Tiêm vaccine HPV rồi có cần Pap hoặc HPV test không?",
          "Có. Vaccine giúp giảm nguy cơ nhiễm các chủng HPV quan trọng nhưng không bảo vệ tuyệt đối trước mọi chủng nguy cơ cao. Người đã tiêm vẫn cần tầm soát cổ tử cung theo lịch phù hợp.",
          "Kết luận",
          "Khám phụ khoa định kỳ không chỉ là siêu âm hoặc lấy mẫu Pap. Một buổi khám đầy đủ bắt đầu từ việc lắng nghe triệu chứng, khai thác tiền sử và đánh giá nguy cơ, sau đó mới lựa chọn khám, xét nghiệm hay chẩn đoán hình ảnh cần thiết.",
          "Không phải mọi phụ nữ đều cần thực hiện cùng một “gói khám”, và cũng không phải xét nghiệm nào càng làm thường xuyên càng tốt. Điều quan trọng là kiểm tra đúng theo tuổi, triệu chứng, tiền sử và kế hoạch sức khỏe của từng người.",
          "Chủ động khám khi cơ thể vẫn đang ổn định giúp phụ nữ hiểu rõ sức khỏe của mình hơn. Khi xuất hiện chảy máu bất thường, đau vùng chậu, khí hư thay đổi hoặc dấu hiệu đáng lo, người bệnh nên đi khám sớm thay vì tự mua thuốc và chờ triệu chứng tự hết.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "dau-hieu-viem-phu-khoa-can-di-kham-som": {
    "sourceFile": "20.Dấu hiệu viêm phụ khoa cần đi khám sớm.docx",
    "title": "Ngứa vùng kín, khí hư có mùi hoặc đau rát khi đi tiểu là những biểu hiện nhiều phụ nữ từng gặp ít nhất một lần. Một số trường hợp chỉ liên quan đến kích ứng nhẹ, nhưng cũng có trường hợp là dấu hiệu của viêm âm đạo, viêm cổ tử cung hoặc nhiễm khuẩn đường sinh dục.",
    "excerpt": "Điều quan trọng là không nên tự đoán bệnh chỉ dựa vào một triệu chứng. Khi các biểu hiện kéo dài, thường xuyên tái phát hoặc đi kèm đau bụng dưới, sốt, chảy máu bất thường, phụ nữ nên đi khám phụ khoa sớm để tìm đúng nguyên nhân và điều trị phù hợp.",
    "intro": [
      "Điều quan trọng là không nên tự đoán bệnh chỉ dựa vào một triệu chứng. Khi các biểu hiện kéo dài, thường xuyên tái phát hoặc đi kèm đau bụng dưới, sốt, chảy máu bất thường, phụ nữ nên đi khám phụ khoa sớm để tìm đúng nguyên nhân và điều trị phù hợp.",
      "Viêm phụ khoa là gì?",
      "“Viêm phụ khoa” là cách gọi phổ biến của nhiều tình trạng viêm hoặc nhiễm trùng xảy ra tại cơ quan sinh dục nữ, chẳng hạn như âm hộ, âm đạo, cổ tử cung, tử cung hoặc phần phụ.",
      "Tùy vị trí và nguyên nhân, người bệnh có thể gặp các biểu hiện khác nhau. Viêm âm đạo thường gây ngứa, nóng rát, mùi khó chịu hoặc tăng tiết dịch. Trong khi đó, viêm vùng chậu có thể gây đau bụng dưới, sốt, đau khi quan hệ và chảy máu bất thường. khoa có thể xuất hiện ở nhiều độ tuổi. Bệnh không chỉ liên quan đến vệ sinh cá nhân mà còn có thể bắt nguồn từ sự mất cân bằng hệ vi sinh âm đạo, thay đổi nội tiết tố, kích ứng hóa chất hoặc các bệnh lây truyền qua đường tình dục.",
      "Khí hư như thế nào được xem là bất thường?",
      "Âm đạo tiết một lượng dịch nhất định là hiện tượng sinh lý bình thường. Dịch âm đạo thường có màu trắng trong hoặc trắng sữa, không có mùi khó chịu và có thể thay đổi về lượng theo chu kỳ kinh nguyệt.",
      "Bạn nên lưu ý khi khí hư có những thay đổi rõ rệt như:",
      "Ra nhiều hơn bình thường và kéo dài.",
      "Chuyển sang màu vàng, xanh, xám hoặc lẫn máu.",
      "Có dạng đặc, vón cục hoặc nổi bọt.",
      "Xuất hiện mùi tanh, hôi hoặc mùi khác thường.",
      "Đi kèm ngứa, đau rát, sưng đỏ hoặc đau bụng dưới.",
      "Sự thay đổi về màu sắc, mùi và độ đặc của khí hư có thể liên quan đến nhiễm trùng hoặc tình trạng viêm. Tuy nhiên, chỉ quan sát khí hư thường không đủ để xác định chính xác nguyên nhân. dấu hiệu viêm phụ khoa cần đi khám sớm",
      "1. Khí hư có màu hoặc mùi bất thường",
      "Khí hư bất thường là một trong những lý do phổ biến khiến phụ nữ đi khám phụ khoa. Dịch có thể trở nên đặc hơn, loãng hơn, đổi màu hoặc có mùi tanh rõ rệt.",
      "Chẳng hạn, viêm âm đạo do mất cân bằng vi khuẩn có thể gây dịch màu trắng hoặc xám kèm mùi tanh. Nhiễm nấm thường gây ngứa và dịch trắng đặc. Một số bệnh lây truyền qua đường tình dục cũng có thể làm tăng tiết dịch, gây mùi hoặc khiến khí hư đổi màu. Các biểu hiện có thể giống nhau nên không nên tự mua thuốc chỉ dựa vào màu sắc của dịch. gứa, nóng rát hoặc sưng đỏ vùng kín",
      "Ngứa nhẹ thoáng qua đôi khi liên quan đến mồ hôi, quần áo chật hoặc sản phẩm vệ sinh không phù hợp. Tuy nhiên, nếu cảm giác ngứa kéo dài, tăng dần hoặc đi kèm đỏ, sưng, đau rát, nứt da và khí hư bất thường, bạn nên đi khám.",
      "Ngoài nhiễm trùng, ngứa vùng kín còn có thể liên quan đến dị ứng, bệnh da liễu hoặc sự suy giảm nội tiết tố trong giai đoạn tiền mãn kinh và mãn kinh. Vì vậy, việc dùng thuốc chống nấm khi chưa xác định nguyên nhân có thể không mang lại hiệu quả, thậm chí làm triệu chứng kéo dài hơn. au hoặc nóng rát khi đi tiểu",
      "Cảm giác buốt, rát khi tiểu có thể gặp trong viêm âm đạo, nhiễm trùng đường tiết niệu hoặc một số bệnh lây truyền qua đường tình dục.",
      "Nếu triệu chứng xuất hiện cùng khí hư có mùi, đau bụng dưới, tiểu nhiều lần hoặc chảy máu ngoài kỳ kinh, người bệnh nên được kiểm tra sớm. Bác sĩ có thể cần xét nghiệm nước tiểu, dịch âm đạo hoặc thực hiện xét nghiệm tìm tác nhân lây truyền qua đường tình dục để phân biệt nguyên nhân. au khi quan hệ tình dục",
      "Đau khi quan hệ không phải lúc nào cũng là viêm phụ khoa. Tình trạng này có thể liên quan đến khô âm đạo, căng thẳng, tổn thương tại chỗ hoặc một số bệnh lý phụ khoa khác.",
      "Tuy nhiên, nếu đau thường xuyên, đau sâu trong vùng chậu hoặc kèm khí hư bất thường, chảy máu sau quan hệ và đau bụng dưới, bạn không nên tiếp tục chịu đựng hoặc tự cho rằng đây là hiện tượng bình thường. Viêm âm đạo, viêm cổ tử cung và viêm vùng chậu đều có thể gây đau khi quan hệ. au bụng dưới hoặc đau vùng chậu",
      "Đau bụng dưới nhẹ có thể xuất hiện trước hoặc trong kỳ kinh. Tuy nhiên, cơn đau kéo dài ngoài kỳ kinh, đau tăng khi quan hệ hoặc đi kèm sốt và khí hư có mùi cần được thăm khám sớm.",
      "Đây có thể là biểu hiện của viêm vùng chậu – tình trạng nhiễm trùng ảnh hưởng đến cơ quan sinh sản phía trên. Nếu không được phát hiện và điều trị phù hợp, viêm vùng chậu có thể làm tăng nguy cơ đau vùng chậu kéo dài, thai ngoài tử cung hoặc ảnh hưởng đến khả năng sinh sản. hảy máu ngoài kỳ kinh hoặc sau quan hệ",
      "Một chút thay đổi trong chu kỳ đôi khi có thể liên quan đến nội tiết tố, thuốc tránh thai hoặc căng thẳng. Dù vậy, chảy máu giữa hai kỳ kinh, chảy máu sau quan hệ hoặc ra máu sau mãn kinh đều là những biểu hiện cần được kiểm tra.",
      "Chảy máu bất thường có thể liên quan đến viêm cổ tử cung, nhiễm trùng, polyp, rối loạn nội tiết hoặc các bệnh lý khác của đường sinh dục. Đây không phải triệu chứng nên tự theo dõi kéo dài tại nhà. uất hiện mụn nước, vết loét hoặc tổn thương vùng kín",
      "Mụn nước, vết loét, nốt sưng đau hoặc tổn thương kéo dài ở âm hộ có thể liên quan đến nhiễm trùng, bệnh da liễu hoặc bệnh lây truyền qua đường tình dục.",
      "Đặc biệt, các mụn nước đau rát hoặc vết loét tái phát cần được bác sĩ đánh giá. Không nên tự nặn, bôi thuốc không rõ thành phần hoặc dùng các dung dịch có tính sát khuẩn mạnh lên vùng tổn thương. riệu chứng thường xuyên tái phát",
      "Có người cứ thấy ngứa là mua lại loại thuốc đã từng sử dụng. Tuy nhiên, triệu chứng giống nhau chưa chắc xuất phát từ cùng một nguyên nhân.",
      "Tình trạng tái phát nhiều lần có thể do điều trị chưa đúng tác nhân, sử dụng thuốc không đủ liệu trình, mất cân bằng hệ vi sinh, bệnh nền hoặc nguồn lây chưa được xử lý. Người bệnh nên đi khám thay vì tiếp tục dùng lại đơn thuốc cũ.",
      "Khi nào cần đến cơ sở y tế ngay?",
      "Phụ nữ cần đi khám ngay hoặc đến cơ sở y tế gần nhất khi xuất hiện một trong những dấu hiệu sau:",
      "Đau bụng dưới hoặc đau vùng chậu dữ dội.",
      "Sốt, rét run, mệt lả hoặc choáng váng.",
      "Buồn nôn, nôn nhiều kèm đau bụng.",
      "Chảy máu âm đạo nhiều bất thường.",
      "Khí hư có mùi hôi kèm sốt và đau bụng dưới.",
      "Đang mang thai hoặc nghi ngờ mang thai nhưng có đau bụng, ra máu hay khí hư bất thường.",
      "Có triệu chứng bất thường sau sinh, sau thủ thuật phụ khoa hoặc sau đặt dụng cụ tử cung.",
      "Đang sử dụng tampon và đột ngột sốt cao, phát ban, nôn, tiêu chảy, đau mỏi toàn thân hoặc lú lẫn.",
      "Đau bụng dưới, sốt, khí hư có mùi, đau hoặc chảy máu khi quan hệ là những biểu hiện có thể gặp trong viêm vùng chậu và cần được đánh giá sớm. nguyên nhân thường gặp gây viêm phụ khoa",
      "Các triệu chứng phụ khoa có thể bắt nguồn từ nhiều nguyên nhân, phổ biến gồm:",
      "Sự phát triển quá mức của nấm men.",
      "Mất cân bằng vi khuẩn trong âm đạo.",
      "Nhiễm ký sinh trùng Trichomonas.",
      "Các bệnh lây truyền qua đường tình dục như lậu hoặc Chlamydia.",
      "Kích ứng bởi dung dịch vệ sinh, xà phòng thơm, chất bôi trơn hoặc nước hoa vùng kín.",
      "Thói quen thụt rửa sâu trong âm đạo.",
      "Thay đổi nội tiết tố trong thời kỳ mang thai, sau sinh, tiền mãn kinh hoặc mãn kinh.",
      "Một số bệnh da liễu tại vùng âm hộ.",
      "Dị vật bị bỏ quên trong âm đạo.",
      "Không phải mọi trường hợp viêm phụ khoa đều do quan hệ tình dục hoặc vệ sinh kém. Vì vậy, người bệnh không nên cảm thấy xấu hổ hoặc trì hoãn thăm khám.",
      "Bác sĩ chẩn đoán viêm phụ khoa như thế nào?",
      "Trước tiên, bác sĩ sẽ hỏi về thời điểm xuất hiện triệu chứng, đặc điểm khí hư, chu kỳ kinh nguyệt, thuốc đang sử dụng và một số yếu tố liên quan.",
      "Tùy trường hợp, quá trình kiểm tra có thể bao gồm:",
      "Khám bên ngoài vùng âm hộ.",
      "Khám âm đạo và cổ tử cung.",
      "Lấy mẫu dịch để soi hoặc xét nghiệm.",
      "Xét nghiệm nước tiểu.",
      "Xét nghiệm các bệnh lây truyền qua đường tình dục.",
      "Thử thai khi cần thiết.",
      "Siêu âm phụ khoa nếu có đau bụng dưới hoặc chảy máu bất thường.",
      "Việc điều trị sẽ phụ thuộc vào nguyên nhân. Thuốc trị nấm không điều trị được viêm do vi khuẩn, trong khi kháng sinh cũng không phù hợp với mọi trường hợp ngứa hoặc ra khí hư.",
      "Nên làm gì khi có dấu hiệu viêm phụ khoa?",
      "Trong thời gian chờ đi khám, bạn có thể giữ vùng kín sạch và khô, thay quần lót khi ẩm, mặc trang phục thoáng và chỉ vệ sinh nhẹ nhàng bên ngoài bằng nước sạch hoặc sản phẩm dịu nhẹ phù hợp.",
      "Bên cạnh đó, nên tránh:",
      "Thụt rửa sâu trong âm đạo.",
      "Dùng nước hoa, chất khử mùi hoặc dung dịch sát khuẩn mạnh.",
      "Tự mua thuốc đặt, thuốc uống hoặc thuốc bôi khi chưa rõ nguyên nhân.",
      "Dùng lại đơn thuốc cũ hoặc thuốc của người khác.",
      "Quan hệ tình dục khi đang đau rát hoặc có tổn thương chưa rõ nguyên nhân.",
      "Nếu có nguy cơ mắc bệnh lây truyền qua đường tình dục, người bệnh nên chủ động thông báo với bác sĩ. Trong một số trường hợp, bạn tình cũng cần được kiểm tra hoặc điều trị để hạn chế tái nhiễm.",
      "Làm thế nào để hạn chế viêm phụ khoa tái phát?",
      "Một số thói quen đơn giản có thể giúp bảo vệ sức khỏe vùng kín:",
      "Vệ sinh nhẹ nhàng từ trước ra sau.",
      "Không thụt rửa âm đạo.",
      "Giữ quần áo và đồ lót khô thoáng.",
      "Thay băng vệ sinh đều đặn trong kỳ kinh.",
      "Tránh sử dụng sản phẩm có hương liệu khi cơ thể dễ kích ứng.",
      "Sử dụng bao cao su để giảm nguy cơ lây truyền bệnh qua đường tình dục.",
      "Khám phụ khoa định kỳ hoặc khi xuất hiện triệu chứng bất thường.",
      "Tuân thủ đúng hướng dẫn điều trị và không tự ngừng thuốc khi vừa thấy đỡ."
    ],
    "sections": [
      {
        "heading": "Khám phụ khoa tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Những vấn đề ở vùng kín thường khiến phụ nữ ngại chia sẻ, nhưng trì hoãn thăm khám có thể làm triệu chứng kéo dài và khiến việc điều trị phức tạp hơn.",
          "Khi có khí hư bất thường, ngứa rát, đau khi quan hệ, đau bụng dưới hoặc chảy máu ngoài kỳ kinh, phụ nữ có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám và tư vấn. Tùy tình trạng cụ thể, bác sĩ sẽ chỉ định xét nghiệm, siêu âm hoặc các phương pháp kiểm tra cần thiết nhằm xác định nguyên nhân và lựa chọn hướng xử trí phù hợp.",
          "Viêm phụ khoa là vấn đề phổ biến và phần lớn có thể được kiểm soát tốt khi phát hiện đúng nguyên nhân. Đừng quá lo lắng, nhưng cũng không nên âm thầm chịu đựng hoặc tự dùng thuốc kéo dài. Khám sớm là cách giúp bạn bớt bất an và chủ động bảo vệ sức khỏe sinh sản.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "pap-smear-va-hpv-khac-nhau-the-nao-trong-tam-soat-ung-thu-co-tu-cung": {
    "sourceFile": "21.Tầm soát ung thư cổ tử cung Pap smear và HPV khác nhau thế nào.docx",
    "title": "Tầm soát ung thư cổ tử cung: Pap smear và HPV khác nhau thế nào?",
    "excerpt": "Pap smear và xét nghiệm HPV đều được sử dụng trong tầm soát ung thư cổ tử cung. Hai xét nghiệm thường được thực hiện bằng cách lấy mẫu tại cổ tử cung nên nhiều người nghĩ rằng chúng giống nhau. Thực tế, mỗi phương pháp lại tìm kiếm một vấn đề khác nhau.",
    "intro": [
      "Pap smear và xét nghiệm HPV đều được sử dụng trong tầm soát ung thư cổ tử cung. Hai xét nghiệm thường được thực hiện bằng cách lấy mẫu tại cổ tử cung nên nhiều người nghĩ rằng chúng giống nhau. Thực tế, mỗi phương pháp lại tìm kiếm một vấn đề khác nhau.",
      "Nói một cách dễ hiểu, Pap smear tìm những tế bào cổ tử cung đã có dấu hiệu biến đổi, còn xét nghiệm HPV tìm sự hiện diện của các chủng virus HPV nguy cơ cao có thể gây ra những biến đổi đó. Hiểu đúng sự khác biệt sẽ giúp phụ nữ bớt lo lắng khi nhận kết quả và lựa chọn lịch tầm soát phù hợp hơn.",
      "Vì sao cần tầm soát ung thư cổ tử cung?",
      "Ung thư cổ tử cung thường phát triển qua nhiều giai đoạn. Trước khi trở thành ung thư, các tế bào ở cổ tử cung có thể trải qua những biến đổi bất thường gọi là tổn thương tiền ung thư.",
      "Quá trình này thường diễn ra chậm. Vì vậy, tầm soát định kỳ có thể giúp phát hiện virus HPV nguy cơ cao hoặc những tế bào bất thường trước khi bệnh tiến triển thành ung thư xâm lấn. Khi tổn thương tiền ung thư được phát hiện và xử lý đúng lúc, nguy cơ phát triển thành ung thư có thể giảm đáng kể.",
      "Phần lớn các trường hợp ung thư cổ tử cung có liên quan đến tình trạng nhiễm kéo dài một số chủng HPV nguy cơ cao. Tuy nhiên, nhiễm HPV không đồng nghĩa với mắc ung thư. Nhiều trường hợp nhiễm virus có thể tự được cơ thể kiểm soát mà không gây tổn thương nghiêm trọng.",
      "Pap smear là gì?",
      "Pap smear, còn gọi là xét nghiệm Pap hoặc xét nghiệm tế bào học cổ tử cung, là phương pháp kiểm tra hình thái của các tế bào được lấy từ bề mặt cổ tử cung.",
      "Mẫu tế bào sẽ được gửi đến phòng xét nghiệm để quan sát dưới kính hiển vi. Bác sĩ giải phẫu bệnh hoặc chuyên viên xét nghiệm sẽ đánh giá xem tế bào có bình thường hay xuất hiện các biến đổi nghi ngờ tiền ung thư hoặc ung thư hay không.",
      "Có thể hình dung Pap smear giống như việc kiểm tra xem “bề mặt tế bào” đã có dấu hiệu bất thường hay chưa.",
      "Pap smear có thể phát hiện điều gì?",
      "Kết quả Pap smear có thể cho thấy:",
      "Tế bào cổ tử cung bình thường.",
      "Tế bào có biến đổi nhẹ, chưa xác định rõ nguyên nhân.",
      "Tổn thương tế bào mức độ thấp.",
      "Tổn thương tế bào mức độ cao, có nguy cơ tiến triển thành ung thư.",
      "Những tế bào nghi ngờ ung thư.",
      "Một số dấu hiệu viêm hoặc nhiễm trùng.",
      "Pap smear là xét nghiệm tầm soát, không phải xét nghiệm khẳng định ung thư. Khi kết quả bất thường, người bệnh có thể cần xét nghiệm HPV, soi cổ tử cung, sinh thiết hoặc theo dõi lại sau một khoảng thời gian, tùy mức độ nguy cơ."
    ],
    "sections": [
      {
        "heading": "Ưu điểm của Pap smear",
        "paragraphs": [
          "Pap smear đã được sử dụng trong nhiều thập kỷ và góp phần quan trọng trong việc phát hiện sớm tổn thương tiền ung thư cổ tử cung.",
          "Phương pháp này có các ưu điểm như:",
          "Trực tiếp phát hiện những tế bào đã có biến đổi.",
          "Có thể thực hiện tại nhiều cơ sở y tế.",
          "Chi phí thường phù hợp.",
          "Hữu ích khi xét nghiệm HPV chưa sẵn có.",
          "Có thể phát hiện một số biến đổi tế bào không hoàn toàn liên quan đến HPV."
        ]
      },
      {
        "heading": "Hạn chế của Pap smear",
        "paragraphs": [
          "Pap smear không phát hiện trực tiếp virus HPV. Xét nghiệm cũng có thể bỏ sót tổn thương nếu số lượng tế bào lấy được không đủ, vị trí lấy mẫu chưa phù hợp hoặc những biến đổi tế bào còn quá ít.",
          "Do độ nhạy không tuyệt đối, Pap smear đơn thuần thường cần được thực hiện với khoảng cách ngắn hơn xét nghiệm HPV. Kết quả cũng có thể bất thường do viêm, kích ứng hoặc những biến đổi tế bào không tiến triển thành ung thư.",
          "Xét nghiệm HPV là gì?",
          "Xét nghiệm HPV tìm kiếm vật liệu di truyền của các chủng HPV nguy cơ cao trong mẫu tế bào cổ tử cung hoặc âm đạo.",
          "Xét nghiệm này không chủ yếu đánh giá hình dạng tế bào. Thay vào đó, nó giúp xác định người được tầm soát có đang mang loại HPV làm tăng nguy cơ xuất hiện tổn thương tiền ung thư cổ tử cung hay không.",
          "Có thể hình dung xét nghiệm HPV như việc tìm “yếu tố nguy cơ đứng phía sau”, trước cả khi tế bào xuất hiện những thay đổi rõ ràng.",
          "HPV nguy cơ cao là gì?",
          "HPV là một nhóm gồm nhiều loại virus khác nhau. Một số chủng gây mụn cóc sinh dục nhưng ít liên quan đến ung thư. Một số chủng khác được xếp vào nhóm nguy cơ cao vì tình trạng nhiễm kéo dài có thể dẫn đến biến đổi tiền ung thư và ung thư cổ tử cung.",
          "Tùy loại xét nghiệm, phòng xét nghiệm có thể:",
          "Chỉ thông báo âm tính hoặc dương tính với HPV nguy cơ cao.",
          "Xác định riêng HPV type 16 và type 18.",
          "Phân nhóm hoặc định type nhiều chủng HPV nguy cơ cao hơn.",
          "Việc xác định chủng HPV giúp bác sĩ phân tầng nguy cơ và lựa chọn bước theo dõi phù hợp. WHO đã cập nhật hướng dẫn năm 2026 về vai trò của xét nghiệm và định type HPV DNA trong các chương trình phòng ngừa ung thư cổ tử cung."
        ]
      },
      {
        "heading": "Ưu điểm của xét nghiệm HPV",
        "paragraphs": [
          "Xét nghiệm HPV có độ nhạy cao trong việc nhận diện những người có nguy cơ xuất hiện tổn thương tiền ung thư cổ tử cung. Kết quả HPV âm tính giúp bác sĩ đánh giá rằng nguy cơ tổn thương cổ tử cung nghiêm trọng trong những năm tiếp theo tương đối thấp.",
          "Vì vậy, khi xét nghiệm HPV được sử dụng làm phương pháp tầm soát chính và cho kết quả âm tính, khoảng cách giữa hai lần tầm soát thường có thể dài hơn so với Pap smear đơn thuần. Nhiều hướng dẫn hiện nay ưu tiên xét nghiệm HPV nguy cơ cao làm phương pháp tầm soát chính ở nhóm tuổi phù hợp."
        ]
      },
      {
        "heading": "Hạn chế của xét nghiệm HPV",
        "paragraphs": [
          "Xét nghiệm HPV có thể phát hiện cả những trường hợp nhiễm virus tạm thời, vốn có khả năng tự hết và không gây tổn thương tiền ung thư.",
          "Điều này đặc biệt thường gặp ở người trẻ. Nếu thực hiện xét nghiệm HPV quá sớm hoặc không đúng chỉ định, kết quả dương tính có thể dẫn đến lo lắng và thực hiện thêm các thủ thuật chưa thực sự cần thiết.",
          "Xét nghiệm HPV dương tính cũng không cho biết chắc chắn tế bào cổ tử cung đã biến đổi. Người bệnh có thể cần làm thêm Pap smear, định type HPV hoặc soi cổ tử cung để đánh giá chính xác hơn.",
          "Pap smear và HPV khác nhau thế nào?",
          "Điểm dễ nhớ nhất là:",
          "Pap smear kiểm tra tế bào đã thay đổi hay chưa, còn xét nghiệm HPV kiểm tra có virus nguy cơ cao hay không.",
          "Lấy mẫu Pap smear và HPV có khác nhau không?",
          "Khi thực hiện tại cơ sở y tế, quy trình lấy mẫu của hai xét nghiệm khá giống nhau.",
          "Người bệnh nằm trên bàn khám phụ khoa. Bác sĩ hoặc nhân viên y tế nhẹ nhàng đặt mỏ vịt vào âm đạo để quan sát cổ tử cung, sau đó sử dụng một dụng cụ nhỏ dạng chổi hoặc que để lấy tế bào.",
          "Mẫu lấy được có thể dùng để:",
          "Làm Pap smear.",
          "Làm xét nghiệm HPV.",
          "Làm đồng thời cả Pap smear và HPV nếu phù hợp.",
          "Quá trình lấy mẫu thường diễn ra nhanh. Người bệnh có thể cảm thấy hơi căng tức hoặc khó chịu nhưng thường không đau nhiều. Một số người có thể ra một chút máu sau khi lấy mẫu, đặc biệt khi cổ tử cung đang viêm hoặc nhạy cảm.",
          "Co-testing là gì?",
          "Co-testing là phương pháp thực hiện đồng thời Pap smear và xét nghiệm HPV trên cùng một lần lấy mẫu.",
          "Phương pháp này cho biết cả hai thông tin:",
          "Có HPV nguy cơ cao hay không.",
          "Tế bào cổ tử cung đã biến đổi hay chưa.",
          "Co-testing có thể được sử dụng trong một số chương trình tầm soát hoặc khi cần đánh giá nguy cơ kỹ hơn. Tuy nhiên, khi xét nghiệm HPV nguyên phát đạt tiêu chuẩn và được áp dụng đúng, việc làm đồng thời hai xét nghiệm không phải lúc nào cũng mang lại thêm lợi ích đáng kể. Lựa chọn phương pháp phụ thuộc vào độ tuổi, tiền sử tầm soát, nguy cơ cá nhân và điều kiện xét nghiệm tại cơ sở y tế.",
          "Nên làm Pap smear hay xét nghiệm HPV?",
          "Không có một xét nghiệm duy nhất phù hợp với tất cả mọi người. Lựa chọn phụ thuộc nhiều vào độ tuổi và tiền sử sức khỏe.",
          "Các hướng dẫn quốc tế hiện chưa hoàn toàn giống nhau về tuổi bắt đầu và phương pháp ưu tiên. Một số hướng dẫn khuyến nghị:",
          "Từ 21–29 tuổi: tầm soát bằng Pap smear định kỳ.",
          "Từ 30–65 tuổi: ưu tiên xét nghiệm HPV nguy cơ cao nguyên phát; Pap smear hoặc co-testing có thể được sử dụng tùy điều kiện và phác đồ.",
          "Sau 65 tuổi: có thể ngừng tầm soát nếu đã được tầm soát đầy đủ trước đó, kết quả liên tiếp bình thường và không thuộc nhóm nguy cơ cao.",
          "Hướng dẫn ACOG công bố tháng 7 năm 2026 khuyến nghị người 21–29 tuổi làm tế bào học cổ tử cung mỗi 3 năm; nhóm 30–65 tuổi ưu tiên xét nghiệm HPV nguy cơ cao nguyên phát bằng mẫu cổ tử cung do nhân viên y tế lấy mỗi 5 năm.",
          "Tuy nhiên, đây là lịch tham khảo cho người có nguy cơ trung bình. Tại mỗi quốc gia hoặc cơ sở y tế, chương trình tầm soát có thể được điều chỉnh theo hướng dẫn chuyên môn, nguồn lực xét nghiệm và tình trạng của từng người.",
          "Không nên tự chọn xét nghiệm chỉ dựa vào giá hoặc tâm lý muốn “làm càng nhiều càng tốt”. Tầm soát quá dày có thể phát hiện những bất thường nhẹ vốn có khả năng tự hồi phục, dẫn đến lo lắng và can thiệp không cần thiết.",
          "Hiểu kết quả Pap smear và HPV như thế nào?"
        ]
      },
      {
        "heading": "HPV âm tính và Pap smear bình thường",
        "paragraphs": [
          "Đây là kết quả có nguy cơ thấp. Người được tầm soát thường có thể tiếp tục theo lịch định kỳ do bác sĩ hướng dẫn.",
          "Tuy nhiên, kết quả âm tính không có nghĩa là không bao giờ mắc bệnh. Người bệnh vẫn cần quay lại tầm soát đúng thời gian."
        ]
      },
      {
        "heading": "HPV dương tính nhưng Pap smear bình thường",
        "paragraphs": [
          "Kết quả này có nghĩa là đã phát hiện HPV nguy cơ cao nhưng tế bào cổ tử cung chưa có biến đổi rõ ràng.",
          "Tùy chủng HPV và tiền sử xét nghiệm, bác sĩ có thể đề nghị:",
          "Định type HPV 16, HPV 18 hoặc các nhóm nguy cơ cao khác.",
          "Lặp lại xét nghiệm sau một khoảng thời gian.",
          "Làm Pap smear bổ sung.",
          "Soi cổ tử cung nếu nguy cơ được đánh giá cao.",
          "HPV dương tính không đồng nghĩa với ung thư cổ tử cung. Phần lớn kết quả bất thường không phải là ung thư, nhưng cần được theo dõi đúng hẹn để phát hiện những trường hợp nhiễm kéo dài."
        ]
      },
      {
        "heading": "HPV âm tính nhưng Pap smear bất thường",
        "paragraphs": [
          "Trường hợp này có thể xuất hiện khi tế bào thay đổi do viêm, kích ứng hoặc một nguyên nhân không được xét nghiệm HPV phát hiện.",
          "Hướng xử trí phụ thuộc vào mức độ bất thường của tế bào. Một số trường hợp chỉ cần theo dõi lại, trong khi những biến đổi mức độ cao có thể cần soi cổ tử cung và sinh thiết."
        ]
      },
      {
        "heading": "HPV dương tính và Pap smear bất thường",
        "paragraphs": [
          "Khi cả hai xét nghiệm đều bất thường, nguy cơ tổn thương tiền ung thư có thể cao hơn. Người bệnh thường cần được đánh giá thêm thay vì chỉ tiếp tục tầm soát định kỳ.",
          "Bác sĩ có thể chỉ định soi cổ tử cung. Nếu nhìn thấy vùng nghi ngờ, một mẫu mô nhỏ có thể được lấy để sinh thiết. Chỉ kết quả mô bệnh học mới giúp xác định chính xác có tổn thương tiền ung thư hoặc ung thư hay không.",
          "Kết quả bất thường có phải là ung thư không?",
          "Đây là điều khiến nhiều phụ nữ lo lắng nhất, nhưng câu trả lời thường là không.",
          "Pap smear bất thường có thể chỉ là biến đổi tế bào nhẹ. HPV dương tính chỉ cho thấy có sự hiện diện của virus nguy cơ cao. Cả hai kết quả đều cần được đặt trong bối cảnh độ tuổi, chủng HPV, mức độ biến đổi tế bào và tiền sử tầm soát.",
          "Phần lớn người có kết quả tầm soát bất thường không mắc ung thư cổ tử cung. Giá trị của tầm soát chính là phát hiện những thay đổi sớm để theo dõi hoặc điều trị trước khi chúng trở nên nghiêm trọng.",
          "Ai cần kế hoạch tầm soát riêng?",
          "Lịch tầm soát thông thường có thể không phù hợp với người:",
          "Từng có kết quả Pap smear hoặc HPV bất thường.",
          "Từng được chẩn đoán tổn thương tiền ung thư cổ tử cung.",
          "Đã điều trị ung thư cổ tử cung.",
          "Nhiễm HIV hoặc suy giảm miễn dịch.",
          "Đang dùng thuốc ức chế miễn dịch.",
          "Từng ghép tạng hoặc ghép tế bào gốc.",
          "Có tiền sử phơi nhiễm diethylstilbestrol trước khi sinh.",
          "Đã cắt tử cung nhưng không rõ cổ tử cung đã được cắt hay chưa.",
          "Chưa từng tầm soát hoặc tầm soát không đầy đủ.",
          "Những người thuộc nhóm này có thể cần bắt đầu sớm hơn, kiểm tra thường xuyên hơn hoặc tiếp tục tầm soát sau 65 tuổi.",
          "Đã tiêm vaccine HPV có cần tầm soát không?",
          "Có. Vaccine HPV giúp phòng ngừa nhiều chủng HPV nguy cơ cao nhưng không bảo vệ khỏi tất cả các chủng có khả năng gây ung thư cổ tử cung.",
          "Người đã tiêm đủ vaccine vẫn cần tầm soát đúng độ tuổi và lịch được khuyến nghị. Vaccine HPV và tầm soát không thay thế cho nhau mà bổ sung cho nhau trong phòng ngừa ung thư cổ tử cung.",
          "Có triệu chứng bất thường thì có nên chờ đến lịch tầm soát?",
          "Không. Tầm soát được thực hiện cho người chưa có triệu chứng nhằm phát hiện nguy cơ hoặc tổn thương sớm.",
          "Nếu xuất hiện các dấu hiệu như:",
          "Chảy máu âm đạo sau quan hệ.",
          "Chảy máu ngoài kỳ kinh.",
          "Ra máu sau mãn kinh.",
          "Khí hư lẫn máu hoặc có mùi bất thường kéo dài.",
          "Đau vùng chậu.",
          "Đau hoặc chảy máu khi quan hệ.",
          "Người bệnh nên đi khám sớm. Khi đó, bác sĩ sẽ thực hiện quá trình chẩn đoán, có thể bao gồm khám phụ khoa, Pap smear, xét nghiệm HPV, soi cổ tử cung, siêu âm hoặc sinh thiết tùy tình trạng. Không nên đợi đến lịch tầm soát định kỳ.",
          "Cần chuẩn bị gì trước khi lấy mẫu?",
          "Để mẫu xét nghiệm đạt chất lượng tốt, người bệnh nên làm theo hướng dẫn của cơ sở y tế. Thông thường, nên:",
          "Hạn chế lấy mẫu khi đang có kinh nguyệt nhiều.",
          "Tránh quan hệ qua đường âm đạo khoảng 48 giờ trước xét nghiệm.",
          "Không thụt rửa âm đạo.",
          "Không đặt thuốc, dùng kem hoặc gel âm đạo trước ngày lấy mẫu nếu bác sĩ không có chỉ định khác.",
          "Thông báo với bác sĩ nếu đang mang thai, có thể mang thai hoặc đang điều trị viêm phụ khoa.",
          "Mang theo kết quả Pap smear, HPV hoặc soi cổ tử cung trước đây nếu có.",
          "Một số hướng dẫn có thể thay đổi tùy loại xét nghiệm, vì vậy người bệnh nên làm theo thông tin chuẩn bị do cơ sở lấy mẫu cung cấp."
        ]
      },
      {
        "heading": "Tầm soát ung thư cổ tử cung tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Pap smear và xét nghiệm HPV không phải hai phương pháp cạnh tranh để tìm ra xét nghiệm “tốt hơn cho tất cả mọi người”. Mỗi phương pháp cung cấp một loại thông tin khác nhau và có vai trò phù hợp trong từng độ tuổi, hoàn cảnh và mức nguy cơ.",
          "Phụ nữ có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ khai thác tiền sử, đánh giá nguy cơ và tư vấn phương pháp tầm soát phù hợp. Tùy từng trường hợp, bác sĩ có thể chỉ định Pap smear, xét nghiệm HPV, co-testing hoặc các kiểm tra chuyên sâu hơn khi kết quả bất thường.",
          "Điều quan trọng không phải là làm thật nhiều xét nghiệm trong một lần, mà là lựa chọn đúng phương pháp, đúng thời điểm và theo dõi đầy đủ sau tầm soát. Phát hiện sớm những biến đổi tại cổ tử cung giúp người bệnh có thêm cơ hội xử trí kịp thời, nhẹ nhàng và hiệu quả hơn.",
          "Thông tin trong bài viết mang tính chất tham khảo. Tuổi bắt đầu, phương pháp và khoảng cách tầm soát có thể thay đổi theo hướng dẫn chuyên môn, tiền sử sức khỏe và nguy cơ của từng người."
        ]
      }
    ]
  },
  "theo-doi-thai-ky-chuan-quoc-te-gom-nhung-moc-nao": {
    "sourceFile": "22.Theo dõi thai kỳ chuẩn quốc tế gồm những mốc nào.docx",
    "title": "Theo dõi thai kỳ chuẩn quốc tế gồm những mốc nào?",
    "excerpt": "Từ lúc nhìn thấy hai vạch đến ngày em bé chào đời, mẹ bầu sẽ trải qua nhiều lần khám, xét nghiệm và siêu âm khác nhau. Có mốc giúp xác định tuổi thai, có mốc sàng lọc bất thường nhiễm sắc thể, có mốc kiểm tra cấu trúc cơ thể thai nhi và cũng có những lần khám chủ yếu để theo dõi huyết áp, sự phát triển của em bé hoặc chuẩn bị cho cuộc sinh.",
    "intro": [
      "Từ lúc nhìn thấy hai vạch đến ngày em bé chào đời, mẹ bầu sẽ trải qua nhiều lần khám, xét nghiệm và siêu âm khác nhau. Có mốc giúp xác định tuổi thai, có mốc sàng lọc bất thường nhiễm sắc thể, có mốc kiểm tra cấu trúc cơ thể thai nhi và cũng có những lần khám chủ yếu để theo dõi huyết áp, sự phát triển của em bé hoặc chuẩn bị cho cuộc sinh.",
      "Tuy nhiên, theo dõi thai kỳ chuẩn quốc tế không có nghĩa tất cả thai phụ phải thực hiện một danh sách xét nghiệm hoàn toàn giống nhau. Lịch khám cần dựa trên tuổi thai, sức khỏe của mẹ, sự phát triển của thai nhi và những nguy cơ được phát hiện trong quá trình theo dõi.",
      "Theo dõi thai kỳ chuẩn quốc tế được hiểu như thế nào?",
      "Theo dõi thai kỳ, còn gọi là chăm sóc trước sinh hoặc khám thai định kỳ, là quá trình theo dõi sức khỏe của mẹ và thai nhi từ khi xác định mang thai cho đến khi sinh.",
      "Mục tiêu không chỉ là “xem em bé lớn đến đâu”, mà còn bao gồm:",
      "Xác định vị trí và tuổi thai.",
      "Phát hiện sớm thai kỳ có nguy cơ.",
      "Theo dõi huyết áp, cân nặng và sức khỏe của mẹ.",
      "Sàng lọc một số bất thường của thai nhi.",
      "Phát hiện tiểu đường thai kỳ, thiếu máu và nhiễm trùng.",
      "Theo dõi sự phát triển, nước ối và bánh nhau.",
      "Tư vấn dinh dưỡng, vận động và tiêm chủng.",
      "Chuẩn bị kế hoạch sinh và chăm sóc sau sinh.",
      "Hỗ trợ tâm lý trong suốt thai kỳ.",
      "Tổ chức Y tế Thế giới khuyến nghị thai phụ có ít nhất tám lần tiếp xúc có nội dung chuyên môn với nhân viên y tế trong thai kỳ. Các mốc tham khảo gồm trước hoặc vào tuần 12, sau đó ở tuần 20, 26, 30, 34, 36, 38 và 40. Đây là mức tối thiểu dành cho thai kỳ không có biến chứng, không phải giới hạn tối đa.",
      "Các khuyến nghị sản khoa gần đây cũng chuyển dần sang mô hình cá nhân hóa. Thai phụ nguy cơ thấp có thể được sắp xếp lịch phù hợp với nhu cầu, trong khi người có bệnh nền, đa thai hoặc biến chứng cần khám trực tiếp và theo dõi thường xuyên hơn.",
      "Khi nào nên đi khám thai lần đầu?",
      "Thai phụ nên liên hệ cơ sở sản khoa ngay sau khi thử thai dương tính. Lần đánh giá đầu tiên nên được thực hiện trong ba tháng đầu, lý tưởng là trước tuần thứ 10 hoặc trong thời gian sớm phù hợp sau khi phát hiện mang thai.",
      "Không nhất thiết mọi thai phụ đều nhìn thấy tim thai ngay ở lần siêu âm đầu tiên. Nếu thai còn quá sớm, bác sĩ có thể hẹn kiểm tra lại sau một khoảng thời gian thay vì vội kết luận bất thường.",
      "Cần đi khám sớm hơn lịch hẹn nếu có:",
      "Đau bụng dưới, đặc biệt đau lệch một bên.",
      "Ra máu âm đạo.",
      "Choáng, ngất hoặc mệt lả.",
      "Đau vai không rõ nguyên nhân kèm đau bụng.",
      "Tiền sử thai ngoài tử cung.",
      "Đang mang thai khi có dụng cụ tử cung.",
      "Từng sảy thai nhiều lần.",
      "Đang điều trị hiếm muộn hoặc mang thai nhờ hỗ trợ sinh sản.",
      "Những biểu hiện này không chắc chắn đồng nghĩa với thai ngoài tử cung hoặc sảy thai, nhưng cần được đánh giá sớm để bảo đảm an toàn."
    ],
    "sections": [
      {
        "heading": "Mốc trước 10–12 tuần: xác nhận thai và đánh giá sức khỏe ban đầu",
        "paragraphs": [
          "Đây là một trong những mốc quan trọng nhất của thai kỳ. Bác sĩ thường khai thác:",
          "Ngày đầu kỳ kinh cuối.",
          "Chu kỳ kinh nguyệt.",
          "Tiền sử mang thai và sinh con.",
          "Tiền sử sảy thai, sinh non hoặc thai lưu.",
          "Bệnh tim mạch, tiểu đường, tăng huyết áp, tuyến giáp hoặc bệnh thận.",
          "Thuốc và thực phẩm bổ sung đang sử dụng.",
          "Tiền sử phẫu thuật.",
          "Bệnh di truyền trong gia đình.",
          "Thói quen hút thuốc, uống rượu hoặc tiếp xúc hóa chất.",
          "Tình trạng tiêm chủng trước khi mang thai.",
          "Thai phụ thường được đo huyết áp, cân nặng và đánh giá sức khỏe tổng quát. Những thông tin này tạo thành dữ liệu nền để bác sĩ so sánh trong các lần khám tiếp theo.",
          "Siêu âm đầu thai kỳ giúp kiểm tra gì?",
          "Tùy tuổi thai và tình trạng cụ thể, siêu âm có thể giúp:",
          "Xác định túi thai nằm trong tử cung.",
          "Kiểm tra số lượng thai.",
          "Đánh giá hoạt động tim thai khi đến thời điểm phù hợp.",
          "Xác định hoặc điều chỉnh tuổi thai.",
          "Ước tính ngày dự sinh.",
          "Phát hiện một số bất thường sớm.",
          "Siêu âm đo chiều dài đầu–mông trong ba tháng đầu, đến hết 13 tuần 6 ngày, là phương pháp chính xác nhất để xác nhận tuổi thai.",
          "Ngày dự sinh chỉ là mốc ước tính, không phải “cuộc hẹn bắt buộc” em bé phải chào đời đúng ngày."
        ]
      },
      {
        "heading": "Những xét nghiệm ban đầu thường được cân nhắc",
        "paragraphs": [
          "Tùy hướng dẫn tại cơ sở y tế và tình trạng của thai phụ, bác sĩ có thể chỉ định:",
          "Công thức máu để kiểm tra thiếu máu và tiểu cầu.",
          "Nhóm máu ABO và yếu tố Rh.",
          "Sàng lọc kháng thể bất thường.",
          "Xét nghiệm HIV.",
          "Viêm gan B và một số bệnh viêm gan khác khi phù hợp.",
          "Giang mai.",
          "Đánh giá miễn dịch rubella.",
          "Xét nghiệm nước tiểu hoặc cấy nước tiểu.",
          "Đường huyết sớm nếu có nguy cơ tiểu đường.",
          "Xét nghiệm bệnh di truyền hoặc huyết sắc tố khi có chỉ định.",
          "Việc xác định nhóm máu và yếu tố Rh ngay từ lần khám đầu giúp bác sĩ xây dựng kế hoạch theo dõi phù hợp, đặc biệt khi mẹ có Rh âm tính.",
          "Không phải tất cả xét nghiệm đều cần làm lại nhiều lần. Bác sĩ sẽ dựa trên kết quả ban đầu và diễn biến thai kỳ để quyết định."
        ]
      },
      {
        "heading": "Mốc 10–13 tuần: tư vấn sàng lọc bất thường nhiễm sắc thể",
        "paragraphs": [
          "Trong giai đoạn này, thai phụ có thể được tư vấn các phương pháp sàng lọc trước sinh."
        ]
      },
      {
        "heading": "Xét nghiệm NIPT",
        "paragraphs": [
          "NIPT phân tích các đoạn ADN tự do có nguồn gốc từ nhau thai trong máu mẹ. Xét nghiệm có thể được thực hiện từ khoảng tuần thứ 10 và giúp đánh giá nguy cơ một số bất thường nhiễm sắc thể thường gặp.",
          "Cần hiểu rằng:",
          "NIPT là xét nghiệm sàng lọc, không phải chẩn đoán.",
          "Kết quả nguy cơ thấp không loại trừ toàn bộ dị tật.",
          "Kết quả nguy cơ cao không đồng nghĩa thai chắc chắn bất thường.",
          "Kết quả bất thường cần được tư vấn di truyền và xác nhận bằng xét nghiệm chẩn đoán phù hợp trước khi đưa ra quyết định quan trọng."
        ]
      },
      {
        "heading": "Sàng lọc kết hợp trong quý đầu",
        "paragraphs": [
          "Tùy điều kiện và lựa chọn của gia đình, bác sĩ có thể tư vấn siêu âm kết hợp xét nghiệm máu mẹ trong khoảng 10–13 tuần. Phương pháp này giúp ước tính nguy cơ một số bất thường nhiễm sắc thể và đánh giá sớm thai kỳ.",
          "Thai phụ không nên tự làm đồng thời nhiều bộ sàng lọc có cùng mục tiêu mà không được hướng dẫn, vì kết quả có thể gây khó khăn khi diễn giải."
        ]
      },
      {
        "heading": "Mốc 11–14 tuần: siêu âm đánh giá sớm thai nhi",
        "paragraphs": [
          "Trong khoảng cuối quý đầu, siêu âm có thể giúp bác sĩ đánh giá:",
          "Tuổi thai và sự phát triển.",
          "Số lượng thai.",
          "Một số dấu hiệu liên quan bất thường nhiễm sắc thể.",
          "Hình thái sớm của đầu, thân và các chi.",
          "Vị trí bánh nhau.",
          "Một số dị tật lớn có thể xuất hiện sớm.",
          "Siêu âm ở mốc này không thay thế siêu âm khảo sát hình thái ở quý hai. Một số cơ quan của thai nhi lúc này vẫn còn nhỏ hoặc chưa thể đánh giá đầy đủ."
        ]
      },
      {
        "heading": "Mốc khoảng 16 tuần: theo dõi kết quả sàng lọc và sức khỏe của mẹ",
        "paragraphs": [
          "Không phải thai phụ nào cũng cần một xét nghiệm đặc biệt ở đúng tuần 16. Lần khám trong giai đoạn này thường được sử dụng để:",
          "Đo huyết áp và cân nặng.",
          "Kiểm tra triệu chứng bất thường.",
          "Nghe tim thai khi phù hợp.",
          "Xem lại kết quả sàng lọc quý đầu hoặc NIPT.",
          "Tư vấn xét nghiệm tiếp theo nếu kết quả chưa rõ.",
          "Đánh giá nguy cơ tiền sản giật, sinh non hoặc bất thường cổ tử cung.",
          "Chuẩn bị cho siêu âm hình thái.",
          "Một số thai phụ có nguy cơ cao có thể được chỉ định xét nghiệm chẩn đoán hoặc theo dõi chuyên sâu. Không nên so sánh lịch của mình với người khác, bởi hai thai kỳ cùng số tuần vẫn có thể cần những kế hoạch khác nhau."
        ]
      },
      {
        "heading": "Mốc 18–22 tuần: siêu âm khảo sát hình thái thai nhi",
        "paragraphs": [
          "Đây thường được gọi là siêu âm hình thái hoặc siêu âm cấu trúc thai nhi. Các khuyến nghị sản khoa đề xuất thai phụ được tư vấn siêu âm đánh giá cấu trúc trong khoảng 18–22 tuần.",
          "Bác sĩ có thể kiểm tra:",
          "Não và hộp sọ.",
          "Mặt.",
          "Cột sống.",
          "Tim và một số đường thoát của tim.",
          "Thành bụng.",
          "Dạ dày, thận và bàng quang.",
          "Tay, chân và các chi.",
          "Vị trí bánh nhau.",
          "Dây rốn.",
          "Lượng nước ối.",
          "Sự phát triển tương ứng với tuổi thai.",
          "Chiều dài cổ tử cung khi có chỉ định.",
          "Mục tiêu chính của lần siêu âm này là đánh giá cấu trúc, không phải chỉ để biết giới tính.",
          "Siêu âm bình thường là một tín hiệu tích cực nhưng không thể bảo đảm em bé hoàn toàn không có bất thường. Một số bệnh lý rất nhỏ, phát triển muộn hoặc liên quan chức năng không thể nhìn thấy trên siêu âm.",
          "Nếu tư thế thai chưa thuận lợi hoặc một số cơ quan chưa được quan sát đầy đủ, bác sĩ có thể hẹn siêu âm lại. Điều này không có nghĩa thai đã có bất thường."
        ]
      },
      {
        "heading": "Mốc 24–28 tuần: sàng lọc tiểu đường thai kỳ",
        "paragraphs": [
          "Tiểu đường thai kỳ có thể xuất hiện ở người trước đó không mắc tiểu đường và đôi khi không gây triệu chứng rõ ràng. Nếu không có chỉ định kiểm tra sớm hoặc kết quả đầu thai kỳ bình thường, đường huyết thường được sàng lọc trong khoảng 24–28 tuần.",
          "Tùy quy trình của cơ sở y tế, thai phụ có thể được thực hiện nghiệm pháp uống dung dịch glucose. Cần tuân thủ đúng hướng dẫn nhịn ăn, thời gian lấy máu và sinh hoạt trong lúc làm xét nghiệm.",
          "Nếu phát hiện tiểu đường thai kỳ, bác sĩ có thể hướng dẫn:",
          "Điều chỉnh chế độ ăn.",
          "Theo dõi đường huyết.",
          "Vận động phù hợp.",
          "Theo dõi sự phát triển của thai.",
          "Sử dụng thuốc hoặc insulin khi có chỉ định.",
          "Lập kế hoạch sinh phù hợp.",
          "Thai phụ không nên tự cắt bỏ hoàn toàn tinh bột hoặc ăn kiêng quá mức vì có thể ảnh hưởng đến dinh dưỡng của mẹ và thai nhi."
        ]
      },
      {
        "heading": "Những kiểm tra khác ở giai đoạn này",
        "paragraphs": [
          "Bác sĩ có thể cân nhắc:",
          "Công thức máu để đánh giá thiếu máu.",
          "Xét nghiệm kháng thể lại ở người có Rh âm tính.",
          "Tiêm globulin miễn dịch anti-D theo chỉ định.",
          "Đo huyết áp và đánh giá nguy cơ tiền sản giật.",
          "Theo dõi kích thước tử cung và sự phát triển của thai.",
          "Không phải thai phụ nào cũng cần siêu âm ở đúng tuần 24–28 nếu lần siêu âm trước bình thường và không có yếu tố nguy cơ. Việc có siêu âm hay không phụ thuộc vào chỉ định chuyên môn."
        ]
      },
      {
        "heading": "Mốc 27–36 tuần: rà soát kế hoạch tiêm chủng",
        "paragraphs": [
          "Thai kỳ là thời điểm cần xem lại lịch tiêm chủng của người mẹ.",
          "Theo CDC, vaccine Tdap phòng uốn ván, bạch hầu và ho gà được khuyến nghị trong mỗi thai kỳ, thường vào khoảng 27–36 tuần, ưu tiên phần đầu của khoảng thời gian này để tăng truyền kháng thể cho em bé.",
          "Vaccine cúm bất hoạt có thể được sử dụng ở bất kỳ giai đoạn nào của thai kỳ trong mùa cúm. Một số vaccine khác được cân nhắc theo bệnh nền, nguy cơ tiếp xúc, dịch tễ và chương trình tại từng quốc gia. Vaccine sống như MMR và thủy đậu thường không được tiêm trong lúc mang thai.",
          "Lịch vaccine tại Việt Nam có thể không hoàn toàn giống Hoa Kỳ hoặc các quốc gia khác. Thai phụ nên mang theo sổ tiêm và trao đổi trực tiếp với bác sĩ, không tự tiêm hoặc trì hoãn vaccine chỉ dựa trên thông tin truyền miệng."
        ]
      },
      {
        "heading": "Mốc 28–32 tuần: theo dõi sự phát triển và hướng dẫn đếm cử động thai",
        "paragraphs": [
          "Từ quý ba, các lần khám thường tập trung nhiều hơn vào:",
          "Huyết áp của mẹ.",
          "Dấu hiệu tiền sản giật.",
          "Cân nặng và tình trạng phù.",
          "Nhịp tim thai.",
          "Kích thước tử cung.",
          "Cử động thai.",
          "Dấu hiệu chuyển dạ sinh non.",
          "Sự phát triển của thai nếu cần siêu âm.",
          "Không phải thai phụ nguy cơ thấp nào cũng cần siêu âm nhiều lần trong quý ba. Siêu âm tăng trưởng thường được chỉ định khi bác sĩ nghi ngờ thai nhỏ, thai lớn, lượng nước ối bất thường, mẹ có bệnh nền, đa thai hoặc có vấn đề ở bánh nhau.",
          "Thai phụ sẽ được hướng dẫn nhận biết nhịp cử động quen thuộc của em bé. Không có một kiểu cử động giống nhau cho mọi thai nhi. Điều cần lưu ý là em bé cử động ít hơn rõ rệt so với thường ngày hoặc người mẹ không cảm nhận được cử động như trước.",
          "Khi thấy cử động thai giảm, mẹ không nên chờ đến ngày hôm sau hoặc chỉ cố uống nước ngọt để “đánh thức” em bé. Hãy liên hệ cơ sở sản khoa để được hướng dẫn và kiểm tra. Các phương pháp đánh giá có thể gồm theo dõi cử động, đo tim thai không gắng sức hoặc siêu âm hồ sơ sinh vật lý tùy trường hợp."
        ]
      },
      {
        "heading": "Mốc 32–34 tuần: đánh giá sức khỏe mẹ, thai và chuẩn bị kế hoạch sinh",
        "paragraphs": [
          "Ở giai đoạn này, bụng đã lớn nhanh và nhiều thai phụ bắt đầu cảm thấy nặng nề hơn. Bác sĩ có thể đánh giá:",
          "Thai có phát triển phù hợp không.",
          "Ngôi thai và vị trí của thai.",
          "Bánh nhau và nước ối khi có chỉ định.",
          "Huyết áp và nguy cơ tiền sản giật.",
          "Dấu hiệu sinh non.",
          "Tình trạng thiếu máu.",
          "Việc kiểm soát tiểu đường hoặc bệnh nền.",
          "Dự kiến nơi sinh.",
          "Các phương án giảm đau khi sinh.",
          "Mong muốn nuôi con bằng sữa mẹ.",
          "Người hỗ trợ khi chuyển dạ.",
          "Đây cũng là lúc gia đình nên bắt đầu chuẩn bị hồ sơ, phương tiện di chuyển và phương án đến bệnh viện nếu chuyển dạ vào ban đêm.",
          "Không nên đợi đến khi có cơn đau dồn dập mới tìm hiểu đường đến nơi sinh."
        ]
      },
      {
        "heading": "Mốc 36–37 tuần: xét nghiệm liên cầu khuẩn nhóm B",
        "paragraphs": [
          "Liên cầu khuẩn nhóm B, thường viết tắt là GBS, có thể sống tự nhiên trong đường tiêu hóa hoặc đường sinh dục mà không gây triệu chứng cho người mẹ. Tuy nhiên, vi khuẩn có thể truyền sang trẻ trong khi sinh và gây nhiễm trùng nặng ở một số trẻ sơ sinh.",
          "CDC khuyến nghị lấy mẫu GBS ở tuần 36 hoặc 37 của mỗi thai kỳ. Mẫu được lấy bằng que phết tại âm đạo và trực tràng; thủ thuật thường nhanh và không đau đáng kể.",
          "Kết quả GBS dương tính không có nghĩa người mẹ mắc bệnh lây truyền qua đường tình dục hoặc vệ sinh không tốt. Trong nhiều trường hợp, kháng sinh được sử dụng trong lúc chuyển dạ để giảm nguy cơ lây sang em bé, thay vì điều trị dài ngày ngay khi nhận kết quả.",
          "Quy trình sàng lọc GBS có thể khác theo hướng dẫn tại từng quốc gia và cơ sở sản khoa."
        ]
      },
      {
        "heading": "Những nội dung khác ở mốc 36 tuần",
        "paragraphs": [
          "Bác sĩ có thể:",
          "Xác định ngôi thai.",
          "Đánh giá khả năng thai ngôi mông hoặc ngôi ngang.",
          "Rà soát vị trí bánh nhau.",
          "Tư vấn dấu hiệu chuyển dạ.",
          "Kiểm tra huyết áp.",
          "Trao đổi kế hoạch sinh.",
          "Hướng dẫn khi nào cần nhập viện.",
          "Kiểm tra lại các kết quả còn thiếu.",
          "Nếu thai chưa quay đầu, bác sĩ sẽ giải thích các lựa chọn dựa trên tuổi thai, số lần sinh, lượng nước ối, vị trí bánh nhau và sức khỏe của mẹ – bé. Không nên tự thực hiện các động tác xoay thai theo video trên mạng."
        ]
      },
      {
        "heading": "Mốc 38–40 tuần: theo dõi sát và chờ chuyển dạ",
        "paragraphs": [
          "Khi thai đã đủ tháng, lịch khám thường gần nhau hơn. Mỗi lần khám có thể gồm:",
          "Đo huyết áp.",
          "Hỏi về cử động thai.",
          "Nghe tim thai.",
          "Đánh giá cơn gò.",
          "Kiểm tra tình trạng ra dịch hoặc rỉ ối.",
          "Xác định ngôi thai.",
          "Đánh giá cổ tử cung khi có chỉ định.",
          "Thảo luận kế hoạch sinh nếu quá ngày dự sinh.",
          "Khám âm đạo không nhất thiết phải thực hiện ở mọi lần khám. Việc cổ tử cung đã mở hay chưa cũng không thể dự đoán chính xác thời điểm chuyển dạ.",
          "Nếu thai phụ chưa chuyển dạ vào ngày dự sinh, bác sĩ sẽ đánh giá sức khỏe của mẹ và em bé, kiểm tra tuổi thai đã được xác định chính xác hay chưa và tư vấn thời điểm theo dõi hoặc khởi phát chuyển dạ phù hợp. Thai quá ngày có thể cần theo dõi tim thai và nước ối chặt chẽ hơn.",
          "Mỗi lần khám thai thường kiểm tra những gì?",
          "Dù mỗi mốc có mục tiêu riêng, những lần khám thai thông thường có thể bao gồm:",
          "Hỏi các triệu chứng mới xuất hiện.",
          "Đo huyết áp.",
          "Theo dõi cân nặng.",
          "Đánh giá đau đầu, phù hoặc rối loạn thị giác.",
          "Kiểm tra nhịp tim thai khi đến tuổi thai phù hợp.",
          "Đo chiều cao tử cung trong giai đoạn sau.",
          "Hỏi về cử động thai.",
          "Tư vấn ăn uống, vận động và sử dụng thuốc.",
          "Kiểm tra kết quả xét nghiệm.",
          "Cập nhật kế hoạch theo dõi và sinh.",
          "“Chuẩn quốc tế” không nằm ở số lượng siêu âm càng nhiều càng tốt. Điều quan trọng hơn là mỗi lần khám đều có mục tiêu, kết quả được theo dõi liên tục và bất thường được xử trí đúng thời điểm.",
          "WHO khuyến nghị ít nhất một lần siêu âm trước 24 tuần để xác định tuổi thai, hỗ trợ phát hiện đa thai và một số bất thường của thai nhi. Các lần siêu âm bổ sung cần dựa trên tình trạng thực tế.",
          "Những thai kỳ nào cần theo dõi thường xuyên hơn?",
          "Lịch tám lần tiếp xúc là khung tham khảo tối thiểu cho thai kỳ không biến chứng. Thai phụ có thể được hẹn khám dày hơn nếu:",
          "Mang song thai hoặc đa thai.",
          "Từ 35 tuổi trở lên khi sinh.",
          "Có tăng huyết áp, tiểu đường, bệnh tim hoặc bệnh thận.",
          "Bị bệnh tuyến giáp hoặc bệnh tự miễn.",
          "Có tiền sử tiền sản giật.",
          "Từng sinh non, thai lưu hoặc thai chậm tăng trưởng.",
          "Mang thai nhờ hỗ trợ sinh sản.",
          "Có bất thường bánh nhau.",
          "Thiếu hoặc thừa nước ối.",
          "Thai phát triển không phù hợp tuổi thai.",
          "Có kết quả sàng lọc bất thường.",
          "Mẹ có nhóm máu hoặc kháng thể cần theo dõi.",
          "Xuất hiện ra máu, cơn gò hoặc cổ tử cung ngắn.",
          "Thai giảm cử động.",
          "Đa thai thường cần siêu âm và theo dõi thường xuyên hơn vì nguy cơ biến chứng cao hơn thai đơn.",
          "Việc được xếp vào nhóm thai kỳ nguy cơ cao không có nghĩa chắc chắn sẽ xảy ra biến chứng. Điều đó chỉ cho thấy mẹ và bé cần một kế hoạch theo dõi chặt chẽ hơn.",
          "Khi nào mẹ bầu cần đi khám ngay, không chờ đến lịch hẹn?",
          "Thai phụ cần liên hệ cơ sở sản khoa hoặc đến bệnh viện nếu xuất hiện:",
          "Ra máu âm đạo.",
          "Đau bụng dữ dội hoặc đau tăng dần.",
          "Rỉ nước hoặc nghi ngờ vỡ ối.",
          "Cơn gò đều khi thai chưa đủ tháng.",
          "Thai giảm cử động rõ rệt.",
          "Sốt cao hoặc rét run.",
          "Nôn liên tục, không uống được nước.",
          "Đau đầu dữ dội không giảm.",
          "Nhìn mờ, thấy chớp sáng hoặc mất thị lực tạm thời.",
          "Đau vùng thượng vị hoặc dưới sườn phải.",
          "Phù mặt, tay xuất hiện nhanh.",
          "Khó thở, đau ngực hoặc tim đập bất thường.",
          "Co giật, lơ mơ hoặc ngất.",
          "Chấn thương vùng bụng.",
          "Có cảm giác “có điều gì đó không ổn”.",
          "Tiền sản giật có thể biểu hiện bằng tăng huyết áp, đau đầu nặng, rối loạn thị giác, đau bụng trên hoặc khó thở; một số trường hợp được phát hiện qua khám định kỳ trước khi người mẹ nhận thấy triệu chứng rõ.",
          "Không nên tự đoán rằng ra máu ít, phù chân hoặc đau đầu chỉ là thay đổi bình thường của thai kỳ.",
          "Mẹ bầu cần chuẩn bị gì trước mỗi lần khám?",
          "Để việc theo dõi thuận tiện hơn, thai phụ nên:",
          "Mang theo sổ khám thai và các kết quả trước đó.",
          "Ghi lại thuốc, vitamin và thực phẩm bổ sung đang sử dụng.",
          "Ghi nhớ ngày xuất hiện triệu chứng.",
          "Theo dõi cử động thai khi đã được hướng dẫn.",
          "Chuẩn bị những câu hỏi cần trao đổi.",
          "Thông báo nếu từng khám hoặc cấp cứu tại cơ sở khác.",
          "Hỏi rõ có cần nhịn ăn hoặc giữ đầy bàng quang không.",
          "Mang theo sổ tiêm chủng.",
          "Đi cùng người thân ở những mốc cần tư vấn quan trọng nếu có thể.",
          "Không tự ngừng thuốc điều trị bệnh nền khi biết mình mang thai. Một số thuốc cần được đổi hoặc điều chỉnh, nhưng việc dừng đột ngột cũng có thể gây nguy hiểm. Hãy liên hệ bác sĩ đã kê thuốc và bác sĩ sản khoa để được hướng dẫn."
        ]
      },
      {
        "heading": "Theo dõi thai kỳ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Thai phụ có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ chuyên khoa Sản phụ khoa đánh giá từ đầu thai kỳ và xây dựng lịch theo dõi phù hợp.",
          "Tùy tuổi thai và mức độ nguy cơ, quá trình chăm sóc có thể bao gồm:",
          "Khám thai định kỳ.",
          "Siêu âm sản khoa.",
          "Sàng lọc trước sinh.",
          "Xét nghiệm máu và nước tiểu.",
          "Sàng lọc tiểu đường thai kỳ.",
          "Theo dõi huyết áp và tiền sản giật.",
          "Đánh giá sự phát triển của thai.",
          "Theo dõi tim thai khi có chỉ định.",
          "Tư vấn tiêm chủng và dinh dưỡng.",
          "Lập kế hoạch sinh.",
          "Phối hợp các chuyên khoa khi mẹ có bệnh nền.",
          "Với những thai kỳ có tăng huyết áp, tiểu đường, bệnh tim, bệnh nội tiết hoặc bất thường của thai nhi, bác sĩ Sản khoa có thể phối hợp cùng Nội khoa, Tim mạch, Nội tiết, Nhi khoa, Xét nghiệm và Chẩn đoán hình ảnh để theo dõi toàn diện hơn.",
          "Mục tiêu không chỉ là thực hiện đủ các mốc, mà còn giúp người mẹ hiểu mỗi lần khám đang kiểm tra điều gì và biết cách xử trí khi có dấu hiệu bất thường."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp về các mốc khám thai",
        "paragraphs": [
          "Có phải thai kỳ nào cũng cần siêu âm mỗi tháng?",
          "Không. Số lần siêu âm phụ thuộc vào tuổi thai, kết quả trước đó và mức độ nguy cơ. Thai kỳ có biến chứng có thể cần siêu âm thường xuyên hơn; thai kỳ nguy cơ thấp không nhất thiết phải siêu âm ở mọi lần khám.",
          "NIPT bình thường có cần siêu âm hình thái không?",
          "Có. NIPT chủ yếu sàng lọc một số bất thường nhiễm sắc thể, trong khi siêu âm hình thái đánh giá cấu trúc các cơ quan. Hai phương pháp không thay thế nhau.",
          "Siêu âm hình thái bình thường có nghĩa em bé hoàn toàn khỏe mạnh không?",
          "Không thể khẳng định tuyệt đối. Siêu âm có thể phát hiện nhiều bất thường cấu trúc nhưng không phát hiện được mọi bệnh di truyền, rối loạn chuyển hóa hoặc vấn đề phát triển xuất hiện muộn.",
          "Thai phụ khỏe mạnh có cần làm nghiệm pháp đường huyết không?",
          "Thông thường vẫn cần được đánh giá theo hướng dẫn sản khoa, vì tiểu đường thai kỳ có thể xuất hiện mà không gây triệu chứng và không chỉ xảy ra ở người thừa cân.",
          "Đã sinh con khỏe mạnh trước đây có cần khám thai đầy đủ ở lần mang thai sau không?",
          "Có. Mỗi thai kỳ là một hành trình mới. Tuổi của mẹ, sức khỏe hiện tại, vị trí bánh nhau và sự phát triển của thai có thể khác hoàn toàn lần trước.",
          "Bỏ lỡ một mốc khám thai có sao không?",
          "Không nên hoảng sợ, nhưng cần liên hệ bác sĩ sớm để được sắp xếp lại. Một số xét nghiệm chỉ có giá trị tốt nhất trong một khoảng tuổi thai nhất định, trong khi những kiểm tra khác vẫn có thể thực hiện muộn hơn.",
          "Kết luận",
          "Theo dõi thai kỳ chuẩn quốc tế không phải là một danh sách siêu âm và xét nghiệm càng nhiều càng tốt. Đó là quá trình chăm sóc liên tục, trong đó mỗi lần khám đều có mục tiêu rõ ràng và lịch theo dõi được điều chỉnh theo sức khỏe thực tế của mẹ và em bé.",
          "Với thai kỳ nguy cơ thấp, các mốc đáng chú ý thường gồm:",
          "Trước 10–12 tuần: xác định thai, tuổi thai và sức khỏe ban đầu.",
          "Khoảng 10–13 tuần: tư vấn sàng lọc bất thường nhiễm sắc thể.",
          "18–22 tuần: siêu âm khảo sát hình thái.",
          "24–28 tuần: sàng lọc tiểu đường thai kỳ.",
          "27–36 tuần: rà soát tiêm chủng phù hợp.",
          "28–34 tuần: theo dõi tăng trưởng và cử động thai.",
          "36–37 tuần: đánh giá ngôi thai và xét nghiệm GBS khi áp dụng.",
          "38–40 tuần: theo dõi sát, chuẩn bị chuyển dạ và sinh.",
          "Bên cạnh việc đi khám đúng lịch, mẹ bầu cần lắng nghe cơ thể và liên hệ bác sĩ khi thấy bất thường. Một thai kỳ được theo dõi tốt không chỉ dựa vào thiết bị hay số lượng xét nghiệm, mà còn đến từ sự phối hợp, trao đổi và tin tưởng giữa gia đình với đội ngũ sản khoa.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc theo dõi trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "sang-loc-truoc-sinh-nhung-xet-nghiem-quan-trong-me-bau-nen-biet": {
    "sourceFile": "23.Sàng lọc trước sinh những xét nghiệm quan trọng mẹ bầu nên biết.docx",
    "title": "Sàng lọc trước sinh: Những xét nghiệm quan trọng mẹ bầu nên biết",
    "excerpt": "Mang thai là hành trình nhiều niềm vui nhưng cũng đi kèm không ít băn khoăn. Thai nhi có phát triển bình thường không? Mẹ có nguy cơ tiểu đường thai kỳ hay thiếu máu không? Nên làm NIPT, Double test hay chỉ cần siêu âm?",
    "intro": [
      "Mang thai là hành trình nhiều niềm vui nhưng cũng đi kèm không ít băn khoăn. Thai nhi có phát triển bình thường không? Mẹ có nguy cơ tiểu đường thai kỳ hay thiếu máu không? Nên làm NIPT, Double test hay chỉ cần siêu âm?",
      "Sàng lọc trước sinh giúp bác sĩ đánh giá sức khỏe của mẹ, theo dõi sự phát triển của thai nhi và phát hiện sớm một số nguy cơ bất thường. Tuy nhiên, không phải mẹ bầu nào cũng cần thực hiện tất cả các xét nghiệm đang có trên thị trường. Mỗi xét nghiệm có mục đích, thời điểm và giới hạn riêng.",
      "Hiểu rõ từng mốc sàng lọc sẽ giúp mẹ bầu chủ động hơn, tránh bỏ lỡ “thời điểm vàng” nhưng cũng không quá lo lắng hoặc làm xét nghiệm trùng lặp không cần thiết.",
      "Sàng lọc trước sinh là gì?",
      "Sàng lọc trước sinh là quá trình sử dụng xét nghiệm máu, siêu âm và một số phương pháp kiểm tra khác để đánh giá nguy cơ bất thường trong thai kỳ.",
      "Các xét nghiệm này thường hướng đến hai mục tiêu chính:",
      "Đánh giá nguy cơ thai nhi mắc bất thường nhiễm sắc thể, dị tật bẩm sinh hoặc một số bệnh di truyền.",
      "Phát hiện những vấn đề sức khỏe của mẹ có thể ảnh hưởng đến thai kỳ như thiếu máu, tiểu đường thai kỳ, bất đồng nhóm máu Rh hoặc một số bệnh truyền nhiễm.",
      "Điểm quan trọng cần hiểu là sàng lọc không đồng nghĩa với chẩn đoán. Kết quả sàng lọc chỉ cho biết thai kỳ thuộc nhóm nguy cơ thấp hay nguy cơ cao hơn đối với một tình trạng nhất định.",
      "Nếu kết quả nguy cơ cao, bác sĩ có thể tư vấn thực hiện xét nghiệm chẩn đoán như sinh thiết gai nhau hoặc chọc ối để có thông tin chính xác hơn. Các lựa chọn sàng lọc và chẩn đoán di truyền trước sinh nên được trao đổi với tất cả thai phụ, không chỉ riêng người mang thai từ 35 tuổi trở lên.",
      "Sàng lọc và chẩn đoán trước sinh khác nhau thế nào?",
      "Đây là điểm khiến nhiều mẹ bầu dễ nhầm lẫn."
    ],
    "sections": [
      {
        "heading": "Xét nghiệm sàng lọc",
        "paragraphs": [
          "Xét nghiệm sàng lọc giúp ước tính khả năng thai nhi có một bất thường nào đó. Những phương pháp thường gặp gồm:",
          "Double test.",
          "Triple test hoặc Quad test.",
          "Xét nghiệm NIPT.",
          "Đo độ mờ da gáy.",
          "Siêu âm hình thái thai nhi.",
          "Kết quả nguy cơ thấp không bảo đảm thai nhi hoàn toàn không có bất thường. Ngược lại, kết quả nguy cơ cao cũng chưa có nghĩa thai nhi chắc chắn mắc bệnh."
        ]
      },
      {
        "heading": "Xét nghiệm chẩn đoán",
        "paragraphs": [
          "Xét nghiệm chẩn đoán giúp xác định với độ chắc chắn cao hơn thai nhi có mắc một bất thường nhiễm sắc thể hoặc bệnh di truyền cụ thể hay không.",
          "Hai phương pháp thường được nhắc đến là:",
          "Sinh thiết gai nhau: lấy một mẫu nhỏ từ mô nhau thai, thường được thực hiện trong giai đoạn sớm của thai kỳ.",
          "Chọc ối: lấy một lượng nhỏ nước ối để xét nghiệm tế bào thai nhi, thường được thực hiện từ khoảng tuần 15–20.",
          "Đây là các thủ thuật xâm lấn nên chỉ được thực hiện khi có chỉ định, sau khi mẹ bầu đã được tư vấn về lợi ích và rủi ro."
        ]
      },
      {
        "heading": "Những xét nghiệm quan trọng trong ba tháng đầu thai kỳ",
        "paragraphs": [
          "Ba tháng đầu là giai đoạn quan trọng để xác định tuổi thai, vị trí thai, số lượng thai và đánh giá một số nguy cơ bất thường sớm."
        ]
      },
      {
        "heading": "Xét nghiệm máu và nước tiểu ban đầu",
        "paragraphs": [
          "Ở lần khám thai đầu tiên, mẹ bầu có thể được chỉ định một số xét nghiệm cơ bản như:",
          "Công thức máu để kiểm tra thiếu máu, số lượng tiểu cầu và một số bất thường về tế bào máu.",
          "Nhóm máu ABO và yếu tố Rh.",
          "Đường huyết khi có nguy cơ tiểu đường.",
          "Tổng phân tích nước tiểu.",
          "Xét nghiệm viêm gan B, viêm gan C, HIV và giang mai.",
          "Một số xét nghiệm miễn dịch hoặc bệnh truyền nhiễm khác theo tiền sử và nguy cơ.",
          "Xét nghiệm sàng lọc bệnh tuyến giáp khi có chỉ định.",
          "Việc phát hiện sớm các bệnh truyền nhiễm giúp bác sĩ có kế hoạch theo dõi, điều trị và giảm nguy cơ lây truyền từ mẹ sang con. CDC khuyến nghị phụ nữ mang thai được xét nghiệm HIV, viêm gan B, viêm gan C và giang mai trong mỗi thai kỳ; một số trường hợp có nguy cơ có thể cần xét nghiệm bổ sung hoặc lặp lại ở giai đoạn sau."
        ]
      },
      {
        "heading": "Siêu âm thai sớm",
        "paragraphs": [
          "Siêu âm trong giai đoạn đầu có thể giúp:",
          "Xác nhận thai nằm trong tử cung.",
          "Kiểm tra tim thai.",
          "Xác định số lượng thai.",
          "Ước tính tuổi thai và ngày dự sinh.",
          "Phát hiện một số bất thường sớm.",
          "Đánh giá tình trạng tử cung, buồng trứng khi cần.",
          "Siêu âm ba tháng đầu đặc biệt hữu ích với người không nhớ rõ ngày kinh cuối, kinh nguyệt không đều, đau bụng, ra máu hoặc mang thai nhờ hỗ trợ sinh sản.",
          "WHO khuyến nghị thai phụ được siêu âm ít nhất một lần trước tuần 24 nhằm xác định tuổi thai, phát hiện đa thai và hỗ trợ nhận diện một số bất thường của thai nhi."
        ]
      },
      {
        "heading": "Đo độ mờ da gáy",
        "paragraphs": [
          "Độ mờ da gáy là khoảng dịch phía sau vùng cổ thai nhi, được đo bằng siêu âm trong một khoảng tuổi thai nhất định, thường vào cuối ba tháng đầu.",
          "Kết quả đo độ mờ da gáy có thể được kết hợp với:",
          "Tuổi của mẹ.",
          "Tuổi thai.",
          "Xét nghiệm máu Double test.",
          "Một số đặc điểm siêu âm khác.",
          "Sự gia tăng độ mờ da gáy có thể liên quan đến nguy cơ bất thường nhiễm sắc thể, dị tật tim hoặc một số hội chứng di truyền. Tuy nhiên, chỉ số cao không đồng nghĩa thai nhi chắc chắn bất thường. Mẹ bầu cần được tư vấn thêm thay vì tự đọc kết quả rồi quá lo lắng.",
          "Double test là gì?",
          "Double test là xét nghiệm máu thường được thực hiện trong ba tháng đầu, kết hợp với độ mờ da gáy và một số thông tin của mẹ để ước tính nguy cơ thai nhi mắc:",
          "Hội chứng Down, còn gọi là trisomy 21.",
          "Hội chứng Edwards, còn gọi là trisomy 18.",
          "Một số bất thường nhiễm sắc thể khác tùy phần mềm và chương trình sàng lọc.",
          "Double test không xét nghiệm trực tiếp nhiễm sắc thể của thai nhi. Kết quả thường được thể hiện dưới dạng tỷ lệ nguy cơ, chẳng hạn 1/1.000 hoặc 1/100.",
          "Tỷ lệ nguy cơ cao không phải kết luận thai mắc bệnh. Bác sĩ sẽ xem xét toàn bộ kết quả, tuổi mẹ, siêu âm và tiền sử để tư vấn bước tiếp theo.",
          "NIPT là gì và nên thực hiện khi nào?",
          "NIPT là xét nghiệm sàng lọc trước sinh không xâm lấn, phân tích các đoạn DNA tự do có nguồn gốc chủ yếu từ nhau thai lưu hành trong máu mẹ.",
          "Xét nghiệm có thể được thực hiện từ khoảng tuần thai thứ 10. NIPT có độ nhạy và độ đặc hiệu cao trong sàng lọc một số bất thường nhiễm sắc thể thường gặp, đặc biệt là trisomy 21, 18 và 13. Theo hướng dẫn ACOG cập nhật năm 2026, xét nghiệm DNA tự do là phương pháp sàng lọc có độ nhạy và độ đặc hiệu cao nhất đối với ba bất thường nhiễm sắc thể phổ biến này, đồng thời có thể được cung cấp cho mọi thai phụ sau khi được tư vấn.",
          "NIPT có thể sàng lọc những gì?",
          "Tùy gói xét nghiệm và công nghệ được sử dụng, NIPT có thể sàng lọc:",
          "Trisomy 21 – hội chứng Down.",
          "Trisomy 18 – hội chứng Edwards.",
          "Trisomy 13 – hội chứng Patau.",
          "Một số bất thường nhiễm sắc thể giới tính.",
          "Một số bất thường mất đoạn hoặc vi mất đoạn trong các gói mở rộng.",
          "Không phải mọi hạng mục mở rộng đều có cùng độ chính xác hoặc giá trị lâm sàng. Mẹ bầu nên được tư vấn kỹ trước khi lựa chọn thay vì mặc định gói càng nhiều bệnh thì càng tốt.",
          "NIPT có thay thế chọc ối không?",
          "Không. NIPT vẫn là xét nghiệm sàng lọc, không phải xét nghiệm chẩn đoán.",
          "Nếu NIPT cho kết quả nguy cơ cao, bác sĩ thường sẽ tư vấn xét nghiệm chẩn đoán bằng sinh thiết gai nhau hoặc chọc ối trước khi đưa ra quyết định liên quan đến thai kỳ.",
          "Ngoài ra, NIPT cũng không thay thế siêu âm. Một thai nhi có kết quả NIPT nguy cơ thấp vẫn cần được siêu âm hình thái vì nhiều dị tật cấu trúc không liên quan đến những bất thường nhiễm sắc thể mà NIPT đang khảo sát.",
          "Nên làm Double test hay NIPT?",
          "Không có câu trả lời giống nhau cho tất cả mẹ bầu. Việc lựa chọn phụ thuộc vào:",
          "Tuổi thai.",
          "Tuổi của mẹ.",
          "Kết quả siêu âm.",
          "Tiền sử thai kỳ.",
          "Tiền sử gia đình.",
          "Nguy cơ bệnh di truyền.",
          "Khả năng tài chính.",
          "Phạm vi xét nghiệm đang có tại cơ sở y tế.",
          "NIPT có hiệu quả sàng lọc cao hơn đối với các bất thường nhiễm sắc thể phổ biến. Trong khi đó, Double test vẫn có thể được sử dụng như một phương pháp sàng lọc trong ba tháng đầu ở những nơi NIPT chưa phù hợp hoặc chưa sẵn có.",
          "Mẹ bầu không nên tự làm nhiều xét nghiệm sàng lọc nhiễm sắc thể độc lập trong cùng một thời điểm chỉ với suy nghĩ “làm càng nhiều càng an tâm”. Việc lựa chọn một chiến lược sàng lọc phù hợp và giải thích kết quả thống nhất sẽ hạn chế tình trạng thông tin chồng chéo, gây lo lắng không cần thiết.",
          "Dù lựa chọn Double test hay NIPT, siêu âm thai đúng mốc vẫn có vai trò rất quan trọng.",
          "Triple test hoặc Quad test có còn cần thiết không?",
          "Triple test là xét nghiệm máu thường được thực hiện trong ba tháng giữa thai kỳ. Quad test tương tự nhưng đo thêm một chỉ số trong máu mẹ.",
          "Các xét nghiệm này có thể hỗ trợ đánh giá nguy cơ:",
          "Hội chứng Down.",
          "Hội chứng Edwards.",
          "Dị tật ống thần kinh hở.",
          "Theo ACOG, xét nghiệm Quad test có thể được thực hiện trong khoảng tuần 15–22. Phương pháp này thường được cân nhắc khi mẹ bầu đến khám muộn, đã bỏ qua thời điểm sàng lọc ba tháng đầu hoặc không thực hiện NIPT.",
          "Nếu mẹ đã thực hiện một phương pháp sàng lọc nhiễm sắc thể phù hợp và có kết quả rõ ràng, bác sĩ sẽ cân nhắc xem có cần làm thêm xét nghiệm huyết thanh khác hay không."
        ]
      },
      {
        "heading": "Siêu âm hình thái thai nhi tuần 18–22",
        "paragraphs": [
          "Siêu âm hình thái, đôi khi được gọi quen thuộc là siêu âm khảo sát dị tật, là một trong những mốc kiểm tra quan trọng của thai kỳ.",
          "Trong lần siêu âm này, bác sĩ có thể đánh giá:",
          "Não và cấu trúc vùng đầu.",
          "Khuôn mặt.",
          "Cột sống.",
          "Tim và lồng ngực.",
          "Dạ dày, thận, bàng quang và thành bụng.",
          "Tay, chân và hệ xương.",
          "Nhau thai, dây rốn và lượng nước ối.",
          "Sự phát triển của thai so với tuổi thai.",
          "Siêu âm hình thái thường được thực hiện trong khoảng tuần 18–22. Đây là giai đoạn nhiều cơ quan của thai nhi đã phát triển đủ để quan sát rõ hơn nhưng vẫn còn thời gian để bác sĩ thực hiện thêm các kiểm tra khi cần.",
          "Siêu âm bình thường giúp giảm bớt nhiều lo lắng nhưng không thể loại trừ toàn bộ dị tật. Một số bất thường biểu hiện muộn, rất nhỏ hoặc khó quan sát do tư thế thai, lượng nước ối hay thể trạng của mẹ."
        ]
      },
      {
        "heading": "Xét nghiệm tiểu đường thai kỳ tuần 24–28",
        "paragraphs": [
          "Tiểu đường thai kỳ thường không gây triệu chứng rõ ràng. Vì vậy, mẹ bầu vẫn cần được sàng lọc ngay cả khi cảm thấy hoàn toàn khỏe mạnh.",
          "Xét nghiệm thường được thực hiện trong khoảng tuần 24–28. Người có nguy cơ cao có thể được kiểm tra sớm hơn, chẳng hạn khi:",
          "Từng mắc tiểu đường thai kỳ.",
          "Thừa cân hoặc béo phì.",
          "Có người thân mắc tiểu đường.",
          "Từng sinh con có cân nặng lớn.",
          "Có hội chứng buồng trứng đa nang.",
          "Đường huyết trước mang thai hoặc đầu thai kỳ bất thường.",
          "Nếu kết quả cho thấy tiểu đường thai kỳ, mẹ bầu sẽ được hướng dẫn điều chỉnh dinh dưỡng, vận động, theo dõi đường huyết và dùng thuốc khi bác sĩ chỉ định. Kiểm soát tốt đường huyết giúp giảm nguy cơ thai quá lớn, sinh khó và một số biến chứng cho mẹ và bé. ACOG khuyến nghị sàng lọc đường huyết ở tuần 24–28 nếu thai phụ chưa được xác định có vấn đề đường huyết sớm hơn."
        ]
      },
      {
        "heading": "Xét nghiệm liên cầu khuẩn nhóm B cuối thai kỳ",
        "paragraphs": [
          "Liên cầu khuẩn nhóm B, thường được viết tắt là GBS, là loại vi khuẩn có thể cư trú tại đường tiêu hóa hoặc đường sinh dục mà không gây biểu hiện rõ ở mẹ.",
          "Tuy nhiên, vi khuẩn có thể truyền sang trẻ trong quá trình sinh và gây nhiễm trùng sơ sinh. Vì vậy, tùy hướng dẫn chuyên môn và kế hoạch sinh, mẹ bầu có thể được lấy mẫu dịch âm đạo – trực tràng vào giai đoạn cuối thai kỳ.",
          "Nếu xét nghiệm dương tính, điều này không có nghĩa mẹ mắc bệnh lây truyền qua đường tình dục hoặc vệ sinh không tốt. Bác sĩ có thể chỉ định kháng sinh trong chuyển dạ để giảm nguy cơ lây cho em bé. Mẹ bầu không nên tự mua kháng sinh uống trước vì cách xử trí phụ thuộc vào thời điểm sinh và tình trạng cụ thể.",
          "Có cần xét nghiệm tiền sản giật không?",
          "Tiền sản giật là biến chứng thai kỳ liên quan đến tăng huyết áp và có thể ảnh hưởng đến nhiều cơ quan của mẹ.",
          "Không có một xét nghiệm duy nhất có thể dự đoán chính xác mọi trường hợp. Việc đánh giá nguy cơ thường dựa trên:",
          "Tiền sử sản khoa và bệnh lý.",
          "Huyết áp.",
          "Xét nghiệm nước tiểu.",
          "Một số xét nghiệm máu.",
          "Siêu âm Doppler động mạch tử cung hoặc xét nghiệm chuyên sâu khi có chỉ định.",
          "Mẹ bầu cần đi khám sớm nếu xuất hiện đau đầu dữ dội, nhìn mờ, đau vùng thượng vị, phù tăng nhanh, khó thở hoặc huyết áp cao. Đây không phải những dấu hiệu nên chờ đến lịch khám định kỳ tiếp theo.",
          "Những mẹ bầu nào cần được tư vấn sàng lọc kỹ hơn?",
          "Mọi thai phụ đều nên được tư vấn về sàng lọc trước sinh. Tuy nhiên, một số trường hợp cần được đánh giá kỹ hơn, gồm:",
          "Mẹ từ 35 tuổi trở lên.",
          "Từng mang thai hoặc sinh con có bất thường bẩm sinh.",
          "Kết quả siêu âm có dấu hiệu nghi ngờ.",
          "Kết quả Double test, Triple test hoặc NIPT nguy cơ cao.",
          "Hai vợ chồng có quan hệ huyết thống.",
          "Gia đình có người mắc bệnh di truyền.",
          "Mẹ mắc bệnh mạn tính như tiểu đường, tăng huyết áp hoặc bệnh tự miễn.",
          "Mẹ sử dụng một số thuốc có khả năng ảnh hưởng thai nhi.",
          "Mang đa thai.",
          "Mang thai bằng phương pháp hỗ trợ sinh sản.",
          "Tuy nhiên, tuổi trẻ và sức khỏe tốt không có nghĩa là không cần sàng lọc. Bất thường nhiễm sắc thể hoặc dị tật bẩm sinh vẫn có thể xuất hiện ở thai phụ không có yếu tố nguy cơ rõ ràng.",
          "Kết quả sàng lọc nguy cơ cao thì nên làm gì?",
          "Trước hết, mẹ bầu không nên hoảng sợ. “Nguy cơ cao” chưa phải là chẩn đoán.",
          "Bác sĩ có thể tư vấn một hoặc nhiều bước tiếp theo như:",
          "Kiểm tra lại tuổi thai và thông tin đã dùng để tính nguy cơ.",
          "Siêu âm chuyên sâu.",
          "Tư vấn di truyền.",
          "Thực hiện NIPT nếu trước đó mới làm xét nghiệm huyết thanh và tình huống phù hợp.",
          "Sinh thiết gai nhau hoặc chọc ối để chẩn đoán.",
          "Xét nghiệm nhiễm sắc thể hoặc gene cụ thể tùy nghi ngờ.",
          "Không nên đưa ra quyết định quan trọng về thai kỳ chỉ dựa trên một kết quả sàng lọc dương tính. Kết quả cần được giải thích bởi bác sĩ sản khoa, bác sĩ chẩn đoán trước sinh hoặc chuyên gia di truyền.",
          "Mẹ bầu cần lưu ý gì khi lựa chọn xét nghiệm?",
          "Trước khi thực hiện, mẹ bầu nên hỏi rõ:",
          "Xét nghiệm này sàng lọc bệnh gì?",
          "Có phù hợp với tuổi thai hiện tại không?",
          "Kết quả nguy cơ thấp hoặc cao có ý nghĩa thế nào?",
          "Xét nghiệm có thay thế siêu âm không?",
          "Nếu kết quả bất thường, bước tiếp theo là gì?",
          "Gói xét nghiệm mở rộng có thực sự cần thiết không?",
          "Có yếu tố nào khiến kết quả khó phân tích không?",
          "Mẹ cũng nên lưu giữ đầy đủ kết quả xét nghiệm và siêu âm để bác sĩ theo dõi xuyên suốt thai kỳ. Không nên đổi cơ sở khám liên tục mà không mang theo hồ sơ cũ, vì bác sĩ có thể thiếu dữ liệu để đánh giá sự phát triển của thai theo thời gian."
        ]
      },
      {
        "heading": "Sàng lọc trước sinh tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Một kế hoạch sàng lọc phù hợp cần được xây dựng theo tuổi thai, sức khỏe của mẹ, tiền sử gia đình và kết quả của từng lần khám. Không phải cứ thực hiện gói xét nghiệm lớn nhất là sẽ mang lại nhiều giá trị nhất.",
          "Mẹ bầu có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ sản khoa thăm khám, tư vấn các mốc siêu âm và lựa chọn xét nghiệm sàng lọc trước sinh phù hợp. Khi phát hiện dấu hiệu bất thường, bác sĩ sẽ hướng dẫn kiểm tra chuyên sâu hoặc phối hợp các chuyên khoa cần thiết để đánh giá tình trạng cụ thể.",
          "Sàng lọc trước sinh không nhằm làm mẹ thêm lo lắng. Mục tiêu quan trọng nhất là giúp gia đình có thông tin đúng, theo dõi thai kỳ chủ động và chuẩn bị phương án chăm sóc tốt hơn cho cả mẹ và em bé.",
          "Thông tin trong bài viết mang tính chất tham khảo. Danh mục và thời điểm xét nghiệm có thể được điều chỉnh theo tuổi thai, tiền sử, kết quả khám và hướng dẫn chuyên môn của bác sĩ."
        ]
      }
    ]
  },
  "hiem-muon-vo-sinh-khi-nao-hai-vo-chong-nen-di-kham": {
    "sourceFile": "24. Hiếm muộn vô sinh khi nào hai vợ chồng nên đi khám.docx",
    "title": "Hiếm muộn, vô sinh: Khi nào hai vợ chồng nên đi khám?",
    "excerpt": "Mỗi tháng chờ đợi một tin vui rồi lại thất vọng có thể tạo ra áp lực rất lớn cho cả hai vợ chồng. Nhiều người băn khoăn không biết mình nên kiên nhẫn thêm, thay đổi thời điểm quan hệ hay đi khám ngay để tránh bỏ lỡ cơ hội.",
    "intro": [
      "Mỗi tháng chờ đợi một tin vui rồi lại thất vọng có thể tạo ra áp lực rất lớn cho cả hai vợ chồng. Nhiều người băn khoăn không biết mình nên kiên nhẫn thêm, thay đổi thời điểm quan hệ hay đi khám ngay để tránh bỏ lỡ cơ hội.",
      "Thông thường, hai vợ chồng nên đi khám hiếm muộn khi đã quan hệ đều đặn, không sử dụng biện pháp tránh thai nhưng vẫn chưa có thai sau một khoảng thời gian nhất định. Tuy nhiên, mốc thời gian này còn phụ thuộc vào tuổi của người vợ, chu kỳ kinh nguyệt, tiền sử sức khỏe và những yếu tố có thể ảnh hưởng đến khả năng sinh sản của cả hai.",
      "Quan trọng nhất, khám hiếm muộn là việc của hai vợ chồng, không phải riêng người vợ. Việc đánh giá đồng thời giúp tìm nguyên nhân nhanh hơn và tránh để một người phải chịu toàn bộ áp lực.",
      "Hiếm muộn và vô sinh được hiểu như thế nào?",
      "Tổ chức Y tế Thế giới định nghĩa vô sinh là tình trạng không đạt được thai kỳ sau ít nhất 12 tháng quan hệ tình dục đều đặn, không sử dụng biện pháp tránh thai. Nguyên nhân có thể xuất phát từ người nữ, người nam, kết hợp từ cả hai hoặc đôi khi chưa xác định được nguyên nhân rõ ràng.",
      "Trong giao tiếp hằng ngày, “hiếm muộn” thường được sử dụng với cảm giác nhẹ nhàng hơn “vô sinh”. Về chuyên môn, cả hai cách gọi đều hướng đến tình trạng gặp khó khăn trong việc có thai hoặc sinh con theo mong muốn.",
      "Có thể chia thành:",
      "Hiếm muộn nguyên phát: Hai vợ chồng chưa từng có thai trước đó.",
      "Hiếm muộn thứ phát: Đã từng có thai, kể cả thai kỳ không đi đến sinh sống, nhưng sau đó gặp khó khăn khi muốn có thai lại.",
      "Đã từng sinh con không có nghĩa khả năng sinh sản hiện tại chắc chắn vẫn bình thường. Tuổi tác, bệnh lý phụ khoa, chất lượng tinh trùng, phẫu thuật, nhiễm trùng hoặc những thay đổi sức khỏe sau lần mang thai trước đều có thể ảnh hưởng đến cơ hội có thai tiếp theo.",
      "Khi nào hai vợ chồng nên đi khám hiếm muộn?",
      "Mốc thời gian phổ biến được xác định dựa trên tuổi của người vợ."
    ],
    "sections": [
      {
        "heading": "Người vợ dưới 35 tuổi",
        "paragraphs": [
          "Hai vợ chồng nên đi khám nếu đã quan hệ đều đặn, không tránh thai trong 12 tháng nhưng chưa có thai.",
          "Ở độ tuổi này, nếu không có dấu hiệu bất thường hoặc tiền sử bệnh lý liên quan đến khả năng sinh sản, hai vợ chồng thường có thể thử có thai tự nhiên trong một năm trước khi thực hiện đánh giá chuyên sâu."
        ]
      },
      {
        "heading": "Người vợ từ 35 tuổi trở lên",
        "paragraphs": [
          "Nên đi khám sau 6 tháng cố gắng có thai nhưng chưa thành công.",
          "Khả năng sinh sản của nữ giới giảm dần theo tuổi, đặc biệt rõ hơn từ sau 35 tuổi. Vì vậy, việc chờ đủ một năm có thể làm mất thêm thời gian có giá trị đối với quá trình đánh giá và điều trị. ASRM và ACOG đều khuyến nghị bắt đầu đánh giá sau 6 tháng đối với phụ nữ từ 35 tuổi trở lên."
        ]
      },
      {
        "heading": "Người vợ trên 40 tuổi",
        "paragraphs": [
          "Nên trao đổi với bác sĩ ngay khi có kế hoạch mang thai, không nhất thiết phải chờ 6 tháng.",
          "Đi khám sớm không có nghĩa chắc chắn phải can thiệp hỗ trợ sinh sản. Bác sĩ sẽ đánh giá sức khỏe sinh sản, dự trữ buồng trứng, chu kỳ kinh, tiền sử bệnh và khả năng sinh sản của người chồng để tư vấn cách tiếp cận phù hợp.",
          "Trường hợp nào không nên chờ đủ 6 hoặc 12 tháng?",
          "Mốc thời gian trên áp dụng chủ yếu cho các cặp vợ chồng chưa có biểu hiện bất thường rõ ràng. Nên đi khám sớm hơn nếu một trong hai người có yếu tố nguy cơ ảnh hưởng đến khả năng sinh sản."
        ]
      },
      {
        "heading": "Kinh nguyệt không đều hoặc không có kinh",
        "paragraphs": [
          "Chu kỳ quá dài, quá ngắn, thay đổi thất thường hoặc mất kinh có thể cho thấy quá trình rụng trứng không diễn ra đều đặn.",
          "Các biểu hiện cần chú ý gồm:",
          "Chu kỳ thường xuyên dài hơn khoảng 35 ngày.",
          "Chu kỳ ngắn bất thường.",
          "Nhiều tháng không có kinh.",
          "Kinh nguyệt chỉ xuất hiện vài lần trong năm.",
          "Lượng kinh thay đổi rõ rệt.",
          "Đã có kinh đều nhưng đột ngột trở nên rối loạn.",
          "Rối loạn rụng trứng có thể liên quan đến hội chứng buồng trứng đa nang, thay đổi cân nặng, căng thẳng, tập luyện quá mức, bệnh tuyến giáp, tăng prolactin hoặc nhiều nguyên nhân khác."
        ]
      },
      {
        "heading": "Đau bụng kinh dữ dội hoặc đau vùng chậu kéo dài",
        "paragraphs": [
          "Đau bụng kinh đến mức phải nghỉ học, nghỉ làm, đau khi quan hệ hoặc đau khi đi tiêu trong kỳ kinh có thể liên quan đến lạc nội mạc tử cung hoặc một số bệnh lý vùng chậu.",
          "Không phải người bị đau bụng kinh đều hiếm muộn, nhưng nếu triệu chứng nặng, kéo dài hoặc ngày càng tăng, người bệnh nên được khám trước khi chờ đủ mốc thời gian thông thường."
        ]
      },
      {
        "heading": "Tiền sử viêm nhiễm hoặc bệnh lây truyền qua đường tình dục",
        "paragraphs": [
          "Một số nhiễm trùng ở đường sinh dục có thể gây viêm vùng chậu, làm tổn thương hoặc tắc vòi trứng. Nguy cơ cần được chú ý nếu người vợ từng:",
          "Viêm vùng chậu.",
          "Nhiễm Chlamydia hoặc lậu.",
          "Áp xe phần phụ.",
          "Điều trị nhiễm trùng sinh dục nhiều lần.",
          "Đau vùng chậu kèm sốt và khí hư bất thường trước đây.",
          "Ngay cả khi tình trạng viêm đã hết triệu chứng, tổn thương để lại ở vòi trứng vẫn có thể ảnh hưởng đến khả năng thụ thai."
        ]
      },
      {
        "heading": "Từng phẫu thuật ở vùng bụng hoặc vùng chậu",
        "paragraphs": [
          "Phẫu thuật u nang buồng trứng, lạc nội mạc tử cung, thai ngoài tử cung, viêm ruột thừa biến chứng hoặc các phẫu thuật trong ổ bụng có thể tạo sẹo dính và ảnh hưởng đến vòi trứng hoặc dự trữ buồng trứng.",
          "Người bệnh nên mang theo hồ sơ phẫu thuật và kết quả giải phẫu bệnh nếu có."
        ]
      },
      {
        "heading": "Tiền sử thai ngoài tử cung",
        "paragraphs": [
          "Thai ngoài tử cung có thể liên quan đến tổn thương vòi trứng. Người từng gặp tình trạng này nên trao đổi sớm với bác sĩ khi muốn mang thai lại.",
          "Nếu có thai sau tiền sử thai ngoài tử cung, người bệnh cũng cần khám sớm để xác định vị trí túi thai."
        ]
      },
      {
        "heading": "Từng điều trị ung thư hoặc bệnh lý ảnh hưởng đến buồng trứng",
        "paragraphs": [
          "Hóa trị, xạ trị vùng chậu hoặc một số phẫu thuật có thể ảnh hưởng đến khả năng sinh sản. Người chuẩn bị điều trị bằng phương pháp có nguy cơ làm tổn thương trứng hoặc buồng trứng nên được tư vấn bảo tồn khả năng sinh sản trước khi bắt đầu điều trị khi điều kiện cho phép. ASRM đã cập nhật hướng dẫn bảo tồn khả năng sinh sản cho người phải điều trị có nguy cơ gây độc tuyến sinh dục vào năm 2026."
        ]
      },
      {
        "heading": "Có dấu hiệu suy giảm chức năng buồng trứng sớm",
        "paragraphs": [
          "Nên đi khám nếu phụ nữ dưới 40 tuổi có:",
          "Kinh nguyệt thưa dần hoặc mất kinh.",
          "Bốc hỏa.",
          "Đổ mồ hôi đêm.",
          "Khô âm đạo.",
          "Tiền sử gia đình mãn kinh sớm.",
          "Đã phẫu thuật buồng trứng nhiều lần.",
          "Những biểu hiện này không đủ để tự kết luận suy buồng trứng. Người bệnh cần được khám và làm xét nghiệm phù hợp."
        ]
      },
      {
        "heading": "Những dấu hiệu ở người chồng cần đi khám sớm",
        "paragraphs": [
          "Khả năng sinh sản của người nam có vai trò quan trọng không kém. Người chồng nên được đánh giá sớm nếu có:",
          "Tinh hoàn nhỏ, không đều hoặc từng không xuống bìu.",
          "Đau, sưng hoặc cảm giác nặng ở bìu.",
          "Giãn tĩnh mạch thừng tinh.",
          "Tiền sử viêm tinh hoàn do quai bị.",
          "Từng chấn thương hoặc phẫu thuật vùng bẹn, bìu.",
          "Khó cương, khó xuất tinh hoặc xuất tinh ngược.",
          "Giảm ham muốn rõ rệt.",
          "Ít râu tóc, giảm khối cơ hoặc có dấu hiệu rối loạn nội tiết.",
          "Tiền sử hóa trị, xạ trị.",
          "Đang sử dụng testosterone hoặc chất đồng hóa để tăng cơ.",
          "Từng thắt ống dẫn tinh.",
          "Tiếp xúc thường xuyên với nhiệt độ cao, hóa chất hoặc độc chất nghề nghiệp.",
          "Một số người vẫn có đời sống tình dục bình thường nhưng tinh dịch đồ bất thường. Vì vậy, không thể đánh giá khả năng sinh sản của nam giới chỉ dựa trên khả năng cương hoặc xuất tinh.",
          "Hướng dẫn AUA/ASRM được sửa đổi năm 2024 xác định khai thác tiền sử, khám lâm sàng và xét nghiệm tinh dịch là những phần quan trọng trong đánh giá nam giới của cặp vợ chồng hiếm muộn.",
          "Sảy thai nhiều lần có được xem là hiếm muộn không?",
          "Sảy thai và không thể có thai là hai tình huống khác nhau, nhưng đều cần được quan tâm trong chăm sóc sinh sản.",
          "Hai vợ chồng nên trao đổi với bác sĩ nếu đã có từ hai lần mất thai được xác nhận trở lên. Đánh giá có thể bao gồm yếu tố di truyền, cấu trúc tử cung, nội tiết, bệnh lý toàn thân và những nguyên nhân khác tùy trường hợp. ASRM năm 2026 đề cập việc đánh giá sảy thai liên tiếp sau từ hai lần mất thai.",
          "Không nên tự cho rằng sảy thai là do người mẹ vận động, ăn uống sai hoặc “không giữ được con”. Phần lớn trường hợp không xuất phát từ một hành động đơn lẻ của người phụ nữ.",
          "Quan hệ thế nào được xem là đều đặn?",
          "Để có cơ hội thụ thai, tinh trùng cần có mặt trong đường sinh dục nữ vào khoảng thời gian trứng rụng.",
          "Hai vợ chồng không nhất thiết phải quan hệ mỗi ngày. Quan hệ khoảng mỗi một đến hai ngày trong cửa sổ dễ thụ thai có thể giúp tối ưu cơ hội, nhưng việc duy trì quan hệ đều đặn vài lần mỗi tuần cũng thường bao phủ được khoảng thời gian này.",
          "Cửa sổ dễ thụ thai thường nằm trong những ngày trước và quanh thời điểm rụng trứng. Tuy nhiên, không phải phụ nữ nào cũng rụng trứng vào ngày 14 của chu kỳ.",
          "Nếu chu kỳ đều, hai vợ chồng có thể theo dõi:",
          "Độ dài chu kỳ.",
          "Dịch nhầy cổ tử cung.",
          "Que thử dự đoán rụng trứng.",
          "Biểu đồ theo dõi kinh nguyệt.",
          "Việc theo dõi không nên trở thành một áp lực khiến quan hệ tình dục chỉ còn là “nhiệm vụ”. Nếu đã quan hệ thường xuyên trong thời gian phù hợp nhưng chưa có thai, vấn đề thường không đơn giản chỉ là chưa chọn đúng ngày.",
          "Vì sao hai vợ chồng nên đi khám cùng nhau?",
          "Nguyên nhân hiếm muộn có thể đến từ người vợ, người chồng hoặc kết hợp cả hai. Vì vậy, chỉ kiểm tra người vợ trước rồi chờ rất lâu mới đánh giá người chồng có thể làm mất thời gian.",
          "ASRM khuyến nghị khi bắt đầu đánh giá hiếm muộn, người chồng nên được khai thác tiền sử sinh sản và thực hiện ít nhất một xét nghiệm tinh dịch khi phù hợp.",
          "Đi khám cùng nhau còn giúp:",
          "Hai người hiểu đây là vấn đề sức khỏe chung.",
          "Hạn chế đổ lỗi.",
          "Thống nhất mục tiêu sinh con.",
          "Cùng nghe giải thích về các lựa chọn.",
          "Chuẩn bị tốt hơn cho xét nghiệm hoặc điều trị.",
          "Giảm áp lực tâm lý cho người vợ.",
          "Không nên sử dụng những câu như “lỗi do ai” hoặc “bên nào yếu”. Trong y học sinh sản, mục tiêu không phải tìm người có lỗi mà là xác định những yếu tố đang cản trở quá trình thụ thai.",
          "Buổi khám hiếm muộn đầu tiên gồm những gì?",
          "Buổi khám thường bắt đầu bằng việc hỏi kỹ tiền sử của cả hai người.",
          "Bác sĩ có thể hỏi:",
          "Hai vợ chồng đã cố gắng có thai bao lâu.",
          "Tần suất quan hệ.",
          "Có sử dụng chất bôi trơn hoặc thuốc nào không.",
          "Chu kỳ kinh nguyệt của người vợ.",
          "Tiền sử mang thai, sinh con và sảy thai.",
          "Tiền sử viêm nhiễm, phẫu thuật hoặc bệnh mạn tính.",
          "Thuốc và thực phẩm bổ sung đang sử dụng.",
          "Thói quen hút thuốc, uống rượu.",
          "Môi trường làm việc.",
          "Tiền sử sinh sản trong gia đình.",
          "Những kết quả xét nghiệm đã thực hiện.",
          "Sau đó, bác sĩ xây dựng danh mục kiểm tra dựa trên tuổi, tiền sử và triệu chứng. Không phải cặp vợ chồng nào cũng cần làm toàn bộ các xét nghiệm ngay trong lần đầu.",
          "Người vợ thường được kiểm tra những gì?",
          "Đánh giá khả năng sinh sản ở nữ giới thường tập trung vào ba câu hỏi:",
          "Người vợ có rụng trứng hay không?",
          "Tử cung và vòi trứng có thuận lợi cho việc thụ thai, làm tổ không?",
          "Dự trữ buồng trứng và yếu tố tuổi có ảnh hưởng như thế nào?"
        ]
      },
      {
        "heading": "Đánh giá chu kỳ và sự rụng trứng",
        "paragraphs": [
          "Phụ nữ có chu kỳ đều thường có khả năng rụng trứng đều hơn, nhưng không thể kết luận chỉ dựa vào lịch kinh.",
          "Tùy trường hợp, bác sĩ có thể sử dụng:",
          "Theo dõi chu kỳ.",
          "Que thử rụng trứng.",
          "Xét nghiệm progesterone vào thời điểm phù hợp.",
          "Siêu âm theo dõi nang noãn.",
          "Xét nghiệm nội tiết khi chu kỳ bất thường.",
          "Không phải mọi hormone sinh sản đều cần được xét nghiệm cho tất cả người bệnh."
        ]
      },
      {
        "heading": "Đánh giá dự trữ buồng trứng",
        "paragraphs": [
          "Các phương pháp có thể gồm:",
          "Xét nghiệm AMH.",
          "Đếm nang thứ cấp bằng siêu âm.",
          "Một số hormone được kiểm tra vào thời điểm phù hợp trong chu kỳ.",
          "Dự trữ buồng trứng phản ánh phần nào số lượng nang trứng còn lại và khả năng đáp ứng với kích thích buồng trứng. Kết quả thấp không đồng nghĩa chắc chắn không thể có thai tự nhiên; kết quả cao cũng không bảo đảm chất lượng trứng hoặc khả năng sinh con.",
          "Tuổi của người vợ vẫn là yếu tố rất quan trọng khi diễn giải kết quả."
        ]
      },
      {
        "heading": "Siêu âm phụ khoa",
        "paragraphs": [
          "Siêu âm có thể giúp đánh giá:",
          "Tử cung.",
          "Niêm mạc tử cung.",
          "Buồng trứng.",
          "U xơ tử cung.",
          "U nang.",
          "Một số dấu hiệu của lạc nội mạc tử cung.",
          "Số lượng nang thứ cấp.",
          "Những bất thường cấu trúc khác.",
          "Siêu âm bình thường không đồng nghĩa vòi trứng chắc chắn thông hoặc mọi chức năng sinh sản đều bình thường."
        ]
      },
      {
        "heading": "Kiểm tra tử cung và vòi trứng",
        "paragraphs": [
          "Bác sĩ có thể chỉ định chụp tử cung – vòi trứng bằng thuốc cản quang, còn gọi là HSG, hoặc phương pháp đánh giá khác.",
          "HSG giúp kiểm tra hình dạng buồng tử cung và tìm dấu hiệu tắc, sẹo hoặc bất thường của vòi trứng.",
          "Tùy kết quả, người bệnh có thể cần siêu âm chuyên sâu, nội soi buồng tử cung hoặc những kỹ thuật khác. Không phải ai cũng cần nội soi ổ bụng để kiểm tra hiếm muộn.",
          "Người chồng thường được kiểm tra những gì?"
        ]
      },
      {
        "heading": "Tinh dịch đồ",
        "paragraphs": [
          "Tinh dịch đồ thường là xét nghiệm cơ bản đầu tiên. Mẫu tinh dịch được đánh giá về:",
          "Thể tích.",
          "Mật độ hoặc số lượng tinh trùng.",
          "Khả năng di động.",
          "Hình dạng.",
          "Một số đặc điểm khác của mẫu.",
          "Một kết quả bất thường không phải lúc nào cũng đủ để kết luận. Chất lượng tinh dịch có thể thay đổi do sốt, bệnh cấp tính, thời gian kiêng xuất tinh, thuốc, cách lấy mẫu hoặc nhiều yếu tố khác. Bác sĩ có thể đề nghị xét nghiệm lại đúng điều kiện."
        ]
      },
      {
        "heading": "Khám nam khoa và xét nghiệm bổ sung",
        "paragraphs": [
          "Nếu tinh dịch đồ bất thường hoặc có triệu chứng, người chồng có thể được:",
          "Khám cơ quan sinh dục.",
          "Đánh giá giãn tĩnh mạch thừng tinh.",
          "Xét nghiệm nội tiết.",
          "Siêu âm bìu.",
          "Xét nghiệm di truyền trong một số trường hợp.",
          "Đánh giá tắc nghẽn đường dẫn tinh.",
          "Tư vấn về thuốc và lối sống.",
          "Không nên tự sử dụng testosterone để “tăng sinh lực” khi đang mong con. Testosterone từ bên ngoài có thể làm giảm quá trình sản xuất tinh trùng.",
          "Kết quả bình thường nhưng vẫn chưa có thai là vì sao?",
          "Một số cặp vợ chồng được xác định là hiếm muộn chưa rõ nguyên nhân khi các đánh giá cơ bản chưa tìm thấy bất thường đáng kể.",
          "Điều này không có nghĩa không có nguyên nhân, mà có thể do những yếu tố hiện tại chưa đo lường được đầy đủ, chẳng hạn:",
          "Chất lượng trứng.",
          "Khả năng tinh trùng thụ tinh.",
          "Sự phát triển sớm của phôi.",
          "Quá trình phôi di chuyển và làm tổ.",
          "Những tương tác sinh học tinh tế giữa trứng, tinh trùng và niêm mạc tử cung.",
          "Bác sĩ sẽ cân nhắc tuổi, thời gian hiếm muộn và mong muốn của gia đình để tư vấn tiếp tục thử tự nhiên, điều trị hỗ trợ hoặc áp dụng kỹ thuật sinh sản phù hợp.",
          "Đi khám hiếm muộn có phải sẽ làm IVF không?",
          "Không.",
          "Thụ tinh trong ống nghiệm, thường gọi là IVF, chỉ là một trong nhiều phương pháp điều trị. Hướng xử trí cần dựa trên nguyên nhân, tuổi, thời gian mong con và kết quả đánh giá của cả hai vợ chồng.",
          "Các lựa chọn có thể bao gồm:"
        ]
      },
      {
        "heading": "Điều chỉnh thời điểm quan hệ",
        "paragraphs": [
          "Áp dụng khi các kiểm tra cơ bản chưa ghi nhận bất thường và thời gian mong con chưa quá dài."
        ]
      },
      {
        "heading": "Điều trị rối loạn rụng trứng",
        "paragraphs": [
          "Bác sĩ có thể điều trị bệnh nội tiết liên quan hoặc sử dụng thuốc hỗ trợ rụng trứng theo chỉ định.",
          "Người bệnh không nên tự mua thuốc kích trứng. Thuốc có thể gây quá kích buồng trứng, đa thai hoặc những biến chứng khác nếu sử dụng không đúng và không được theo dõi."
        ]
      },
      {
        "heading": "Điều trị bệnh lý phụ khoa hoặc nam khoa",
        "paragraphs": [
          "Một số trường hợp cần xử trí:",
          "Polyp buồng tử cung.",
          "U xơ ảnh hưởng đến buồng tử cung.",
          "Lạc nội mạc tử cung.",
          "Tắc nghẽn hoặc tổn thương vòi trứng.",
          "Giãn tĩnh mạch thừng tinh.",
          "Rối loạn nội tiết.",
          "Nhiễm trùng đang hoạt động.",
          "Việc phẫu thuật có cần thiết hay không phải được cân nhắc dựa trên lợi ích, nguy cơ và khả năng sinh sản sau điều trị."
        ]
      },
      {
        "heading": "Bơm tinh trùng vào buồng tử cung",
        "paragraphs": [
          "Phương pháp IUI đưa mẫu tinh trùng đã được xử lý vào buồng tử cung vào thời điểm gần rụng trứng.",
          "IUI có thể được cân nhắc trong một số trường hợp như hiếm muộn chưa rõ nguyên nhân, bất thường tinh trùng mức độ phù hợp hoặc khó khăn trong quan hệ. Không phải cặp vợ chồng nào cũng phù hợp với IUI."
        ]
      },
      {
        "heading": "Thụ tinh trong ống nghiệm",
        "paragraphs": [
          "IVF bao gồm quá trình kích thích buồng trứng, lấy trứng, cho trứng thụ tinh với tinh trùng trong phòng thí nghiệm và chuyển phôi vào tử cung.",
          "IVF có thể được cân nhắc khi:",
          "Hai vòi trứng bị tắc hoặc tổn thương nặng.",
          "Yếu tố tinh trùng nghiêm trọng.",
          "Tuổi của người vợ và thời gian mong con khiến việc chờ đợi không còn phù hợp.",
          "Điều trị bằng phương pháp đơn giản hơn chưa thành công.",
          "Có một số bệnh lý hoặc chỉ định di truyền.",
          "Cần sử dụng trứng, tinh trùng hoặc phôi được bảo quản.",
          "Kỹ thuật hỗ trợ sinh sản là nhóm phương pháp có thao tác với trứng hoặc phôi ngoài cơ thể; IVF là phương pháp phổ biến nhất trong nhóm này."
        ]
      },
      {
        "heading": "Tiêm tinh trùng vào bào tương trứng",
        "paragraphs": [
          "ICSI là kỹ thuật đưa một tinh trùng vào bên trong trứng và thường được sử dụng trong một số trường hợp có yếu tố nam hoặc chỉ định chuyên môn khác.",
          "Không phải mọi chu kỳ IVF đều mặc nhiên cần ICSI. Việc lựa chọn cần dựa trên kết quả tinh trùng, tiền sử thụ tinh và đánh giá của bác sĩ.",
          "Hai vợ chồng nên chuẩn bị gì trước buổi khám?",
          "Có thể chuẩn bị:",
          "Giấy tờ và kết quả khám trước đây.",
          "Kết quả siêu âm, phẫu thuật hoặc xét nghiệm.",
          "Lịch kinh trong khoảng 6–12 tháng gần nhất.",
          "Thông tin về các lần mang thai và sảy thai.",
          "Danh sách thuốc đang dùng.",
          "Kết quả tinh dịch đồ cũ nếu có.",
          "Thời gian đã cố gắng có thai.",
          "Tiền sử bệnh lý của cả hai bên gia đình.",
          "Những câu hỏi muốn trao đổi với bác sĩ.",
          "Người chồng cần hỏi trước về cách chuẩn bị lấy mẫu tinh dịch, bao gồm thời gian kiêng xuất tinh và cách vận chuyển mẫu nếu không lấy tại cơ sở y tế.",
          "Không nên tự làm quá nhiều xét nghiệm hormone, gene hoặc dấu ấn không rõ chỉ định trước khi khám. Một kết quả đứng riêng lẻ có thể khó diễn giải và gây thêm lo lắng.",
          "Có cần thay đổi lối sống trước khi điều trị không?",
          "Lối sống lành mạnh hỗ trợ sức khỏe sinh sản nhưng không thể thay thế việc điều trị một nguyên nhân thực thể như tắc vòi trứng hoặc bất thường tinh trùng nghiêm trọng.",
          "Hai vợ chồng nên:",
          "Ngừng hút thuốc và thuốc lá điện tử.",
          "Hạn chế hoặc tránh rượu bia khi chuẩn bị mang thai.",
          "Duy trì cân nặng phù hợp.",
          "Ăn uống cân đối.",
          "Vận động vừa sức.",
          "Ngủ đủ.",
          "Kiểm soát bệnh nền.",
          "Không tự sử dụng hormone hoặc sản phẩm tăng cơ.",
          "Giảm tiếp xúc với nhiệt độ cao và hóa chất độc hại khi có thể.",
          "Người vợ bổ sung acid folic theo hướng dẫn trước khi mang thai.",
          "Không có một món ăn, loại thảo dược hay thực phẩm bổ sung nào được bảo đảm có thể chữa vô sinh cho tất cả mọi người. Một số sản phẩm còn có thể tương tác với thuốc hoặc ảnh hưởng đến gan, thận và nội tiết.",
          "Áp lực tâm lý có làm hai vợ chồng khó có thai hơn không?",
          "Căng thẳng không phải nguyên nhân duy nhất và cũng không nên được dùng để quy trách nhiệm rằng “vì nghĩ nhiều nên chưa có con”.",
          "Tuy nhiên, quá trình chờ đợi, xét nghiệm và điều trị có thể ảnh hưởng rõ rệt đến:",
          "Giấc ngủ.",
          "Ham muốn tình dục.",
          "Quan hệ vợ chồng.",
          "Hiệu quả công việc.",
          "Tâm trạng.",
          "Khả năng tiếp tục điều trị.",
          "WHO nhấn mạnh hiếm muộn có thể gây đau khổ tâm lý, kỳ thị và áp lực tài chính, vì vậy chăm sóc cần hướng đến con người chứ không chỉ tập trung vào kỹ thuật điều trị.",
          "Hai vợ chồng nên thống nhất cách chia sẻ thông tin với gia đình, đặt giới hạn trước những câu hỏi gây áp lực và tìm hỗ trợ tâm lý khi cảm thấy quá tải."
        ]
      },
      {
        "heading": "Khám hiếm muộn tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Hai vợ chồng gặp khó khăn trong việc có thai có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ chuyên khoa Sản phụ khoa thăm khám, khai thác tiền sử và đánh giá những yếu tố ảnh hưởng đến khả năng sinh sản.",
          "Tùy tình trạng, quá trình kiểm tra có thể bao gồm:",
          "Đánh giá chu kỳ kinh và sự rụng trứng.",
          "Siêu âm tử cung, buồng trứng.",
          "Kiểm tra dự trữ buồng trứng khi có chỉ định.",
          "Đánh giá tử cung và vòi trứng.",
          "Xét nghiệm nội tiết phù hợp.",
          "Tinh dịch đồ.",
          "Khám nam khoa khi cần.",
          "Tư vấn sức khỏe trước mang thai.",
          "Theo dõi thời điểm rụng trứng.",
          "Tư vấn các phương pháp hỗ trợ sinh sản.",
          "Nếu cần can thiệp chuyên sâu, bác sĩ sẽ dựa trên kết quả của cả hai vợ chồng để tư vấn lộ trình phù hợp, thay vì mặc nhiên lựa chọn IVF ngay từ đầu.",
          "Mục tiêu của buổi khám là trả lời ba câu hỏi: nguyên nhân có thể nằm ở đâu, phương pháp nào phù hợp nhất và hai vợ chồng nên đi từng bước như thế nào để tránh mất thời gian nhưng cũng không điều trị quá mức."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp về hiếm muộn, vô sinh",
        "paragraphs": [
          "Cưới sáu tháng chưa có thai có cần đi khám không?",
          "Nếu người vợ dưới 35 tuổi, chu kỳ đều và cả hai không có yếu tố nguy cơ, hai vợ chồng thường có thể tiếp tục thử đến 12 tháng. Tuy nhiên, vẫn có thể đi tư vấn sớm nếu lo lắng hoặc chưa rõ cách xác định thời điểm dễ thụ thai.",
          "Nếu người vợ từ 35 tuổi trở lên hoặc một trong hai có dấu hiệu bất thường, nên đi khám sớm hơn.",
          "Người vợ có kinh đều thì có thể bị hiếm muộn không?",
          "Có. Kinh đều thường gợi ý quá trình rụng trứng diễn ra tương đối đều, nhưng người vợ vẫn có thể gặp vấn đề ở vòi trứng, tử cung, lạc nội mạc tử cung hoặc chất lượng trứng. Người chồng cũng có thể có yếu tố ảnh hưởng.",
          "Tinh dịch nhìn bình thường có nghĩa tinh trùng khỏe không?",
          "Không. Màu sắc, độ đặc hoặc lượng tinh dịch quan sát bằng mắt không đủ để đánh giá số lượng, khả năng di động và hình dạng tinh trùng. Cần thực hiện tinh dịch đồ đúng quy trình.",
          "AMH thấp có nghĩa không thể có thai tự nhiên?",
          "Không. AMH thấp có thể gợi ý dự trữ buồng trứng giảm, nhưng không tự xác định một người có thể hay không thể có thai tự nhiên. Kết quả cần được diễn giải cùng tuổi, chu kỳ, siêu âm và những yếu tố khác.",
          "AMH cao có phải khả năng sinh sản rất tốt không?",
          "Không hẳn. AMH cao có thể gặp ở người có nhiều nang trứng, bao gồm một số người mắc hội chứng buồng trứng đa nang. Chỉ số này không phản ánh đầy đủ chất lượng trứng, độ thông vòi trứng hoặc khả năng làm tổ.",
          "Đã có một con thì có thể bị hiếm muộn không?",
          "Có. Đây được gọi là hiếm muộn thứ phát. Hai vợ chồng vẫn nên đi khám theo các mốc tuổi và thời gian cố gắng tương tự.",
          "Khám hiếm muộn có cần đi đúng ngày kinh không?",
          "Không nhất thiết đối với buổi tư vấn đầu tiên. Một số xét nghiệm hoặc siêu âm cần thực hiện vào thời điểm cụ thể của chu kỳ, nhưng bác sĩ sẽ hướng dẫn sau khi đánh giá ban đầu.",
          "Điều trị hiếm muộn có bảo đảm mang thai không?",
          "Không có phương pháp nào bảo đảm thành công trong mọi trường hợp. Cơ hội phụ thuộc vào tuổi, nguyên nhân, chất lượng trứng và tinh trùng, sức khỏe tử cung, phương pháp điều trị và nhiều yếu tố khác.",
          "Kết luận",
          "Hai vợ chồng nên đi khám hiếm muộn khi:",
          "Người vợ dưới 35 tuổi và chưa có thai sau 12 tháng.",
          "Người vợ từ 35 tuổi trở lên và chưa có thai sau 6 tháng.",
          "Người vợ trên 40 tuổi và đang có kế hoạch mang thai.",
          "Một trong hai người có bệnh lý, dấu hiệu hoặc tiền sử có thể ảnh hưởng đến khả năng sinh sản.",
          "Đã có từ hai lần mất thai.",
          "Cả hai cảm thấy lo lắng và cần được tư vấn trước khi tiếp tục chờ đợi.",
          "Đi khám không đồng nghĩa phải thực hiện IVF. Nhiều cặp vợ chồng chỉ cần xác định đúng thời điểm quan hệ, điều trị rối loạn rụng trứng, xử trí bệnh lý phụ khoa hoặc nam khoa, trong khi một số trường hợp cần IUI, IVF hay kỹ thuật chuyên sâu hơn.",
          "Hiếm muộn không phải lỗi của riêng người vợ hay người chồng. Việc cùng nhau đi khám, cùng nghe tư vấn và cùng lựa chọn hướng điều trị là bước đầu tiên để hành trình mong con bớt cô đơn và có định hướng rõ ràng hơn.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "kham-nhi-tong-quat-khi-nao-tre-can-gap-bac-si-chuyen-khoa": {
    "sourceFile": "25.Khám nhi tổng quát khi nào trẻ cần gặp bác sĩ chuyên khoa.docx",
    "title": "Khám nhi tổng quát: Khi nào trẻ cần gặp bác sĩ chuyên khoa?",
    "excerpt": "Trẻ nhỏ không phải là “người lớn phiên bản thu nhỏ”. Cơ thể trẻ liên tục thay đổi, trong khi nhiều vấn đề về dinh dưỡng, tăng trưởng, ngôn ngữ hoặc hành vi lại không biểu hiện bằng những cơn đau rõ ràng.",
    "intro": [
      "Trẻ nhỏ không phải là “người lớn phiên bản thu nhỏ”. Cơ thể trẻ liên tục thay đổi, trong khi nhiều vấn đề về dinh dưỡng, tăng trưởng, ngôn ngữ hoặc hành vi lại không biểu hiện bằng những cơn đau rõ ràng.",
      "Vì vậy, khám nhi tổng quát không chỉ dành cho lúc trẻ sốt, ho hay đau bụng. Đây còn là cơ hội để bác sĩ theo dõi chiều cao, cân nặng, sự phát triển thể chất – tinh thần, lịch tiêm chủng và phát hiện những dấu hiệu cần kiểm tra chuyên sâu.",
      "Phần lớn các vấn đề thông thường có thể được bác sĩ nhi khoa đánh giá và xử trí ban đầu. Khi phát hiện bất thường kéo dài, tái diễn hoặc liên quan đến một cơ quan cụ thể, trẻ có thể được giới thiệu đến bác sĩ chuyên khoa phù hợp.",
      "Khám nhi tổng quát là gì?",
      "Khám nhi tổng quát là quá trình đánh giá toàn diện sức khỏe của trẻ, từ giai đoạn sơ sinh đến tuổi vị thành niên.",
      "Tùy độ tuổi và lý do đến khám, bác sĩ có thể kiểm tra:",
      "Chiều cao, cân nặng và tốc độ tăng trưởng.",
      "Vòng đầu ở trẻ nhỏ.",
      "Thân nhiệt, nhịp tim, nhịp thở và huyết áp khi phù hợp.",
      "Tình trạng dinh dưỡng.",
      "Tim, phổi, tai, mũi, họng và răng miệng.",
      "Bụng, da, xương khớp và hệ thần kinh.",
      "Khả năng vận động, giao tiếp, ngôn ngữ và tương tác xã hội.",
      "Giấc ngủ, ăn uống và thói quen đi vệ sinh.",
      "Tình trạng tiêm chủng.",
      "Sức khỏe tâm lý, học tập và hành vi ở trẻ lớn.",
      "Nói một cách dễ hiểu, bác sĩ không chỉ xem trẻ đang có bệnh gì mà còn đánh giá trẻ có đang lớn lên đúng hướng hay không.",
      "Theo dõi tăng trưởng cần dựa trên nhiều lần đo và đặt các chỉ số lên biểu đồ phù hợp với tuổi, giới tính. Tổ chức Y tế Thế giới có các tiêu chuẩn tăng trưởng dành cho trẻ dưới 5 tuổi và dữ liệu tham chiếu cho trẻ từ 5–19 tuổi. Một số đo đơn lẻ có thể chưa nói lên nhiều điều; xu hướng tăng trưởng theo thời gian mới là thông tin quan trọng.",
      "Trẻ khỏe mạnh có cần khám nhi tổng quát không?",
      "Có. Một trẻ vẫn ăn, ngủ và vui chơi bình thường vẫn có thể cần được kiểm tra sức khỏe định kỳ.",
      "Các lần khám khi trẻ chưa có triệu chứng giúp bác sĩ:",
      "Theo dõi chiều cao và cân nặng qua từng giai đoạn.",
      "Đánh giá các mốc phát triển vận động và ngôn ngữ.",
      "Kiểm tra thị lực, thính lực hoặc răng miệng khi phù hợp.",
      "Tư vấn dinh dưỡng, giấc ngủ và phòng ngừa tai nạn.",
      "Rà soát lịch tiêm chủng.",
      "Trao đổi về hành vi, tâm lý và việc học.",
      "Phát hiện sớm những thay đổi nhỏ mà gia đình có thể chưa nhận thấy.",
      "Viện Hàn lâm Nhi khoa Hoa Kỳ xem các lần khám trẻ khỏe mạnh là một phần quan trọng của chăm sóc dự phòng, từ những ngày đầu sau sinh đến tuổi thanh thiếu niên. Nội dung của mỗi lần khám được điều chỉnh theo độ tuổi và nhu cầu của trẻ.",
      "Lịch khám cụ thể tại Việt Nam có thể khác với lịch tham khảo của các tổ chức quốc tế. Phụ huynh nên làm theo kế hoạch do bác sĩ đang theo dõi trẻ tư vấn.",
      "Khi nào nên đưa trẻ đi khám nhi tổng quát?"
    ],
    "sections": [
      {
        "heading": "Sau khi trẻ chào đời và xuất viện",
        "paragraphs": [
          "Giai đoạn sơ sinh là thời điểm trẻ thích nghi với môi trường bên ngoài. Bác sĩ có thể kiểm tra cân nặng, tình trạng bú, vàng da, rốn, nhịp thở và các phản xạ ban đầu.",
          "Trẻ sinh non, nhẹ cân, từng phải điều trị sau sinh hoặc có bệnh lý bẩm sinh thường cần lịch theo dõi riêng."
        ]
      },
      {
        "heading": "Trong những năm đầu đời",
        "paragraphs": [
          "Hai năm đầu là giai đoạn trẻ tăng trưởng và phát triển nhanh. Đây cũng là lúc các kỹ năng vận động, giao tiếp, ngôn ngữ và tương tác xã hội lần lượt xuất hiện.",
          "Khám định kỳ giúp bác sĩ phát hiện trẻ tăng cân quá chậm, chậm vận động, ít giao tiếp hoặc chưa đạt một số mốc phát triển phù hợp với độ tuổi.",
          "CDC nhấn mạnh rằng cha mẹ nên theo dõi cách trẻ chơi, học, nói, hành động và vận động. Theo khuyến nghị của AAP được CDC dẫn lại, sàng lọc phát triển bằng công cụ chuẩn hóa thường được thực hiện ở các mốc 9, 18 và 30 tháng; sàng lọc rối loạn phổ tự kỷ ở 18 và 24 tháng hoặc bất cứ khi nào gia đình hay nhân viên y tế có lo ngại. Đây là lịch tham khảo quốc tế và bác sĩ có thể điều chỉnh cho từng trẻ."
        ]
      },
      {
        "heading": "Trước khi trẻ đi nhà trẻ hoặc đi học",
        "paragraphs": [
          "Khám trước khi đi học có thể giúp đánh giá:",
          "Thị lực và thính lực.",
          "Tình trạng dinh dưỡng.",
          "Khả năng vận động.",
          "Ngôn ngữ và giao tiếp.",
          "Giấc ngủ và khả năng tập trung.",
          "Lịch tiêm chủng.",
          "Những bệnh cần nhà trường lưu ý như hen, dị ứng hoặc động kinh.",
          "Đây cũng là dịp để phụ huynh trao đổi với bác sĩ nếu trẻ khó hòa nhập, thường xuyên lo âu, chậm nói hoặc gặp khó khăn trong học tập."
        ]
      },
      {
        "heading": "Khi trẻ có triệu chứng kéo dài hoặc tái phát",
        "paragraphs": [
          "Một cơn ho nhẹ hoặc đau bụng thoáng qua có thể không đáng lo. Tuy nhiên, trẻ nên được khám khi triệu chứng:",
          "Kéo dài hơn dự kiến.",
          "Tái diễn nhiều lần.",
          "Ảnh hưởng đến ăn uống, giấc ngủ hoặc học tập.",
          "Không cải thiện sau khi đã được chăm sóc đúng cách.",
          "Đi kèm sụt cân, mệt mỏi hoặc thay đổi hành vi.",
          "Khiến phụ huynh cảm thấy trẻ “khác hẳn mọi ngày”.",
          "Bác sĩ nhi tổng quát thường là người đánh giá ban đầu, xác định mức độ nghiêm trọng và quyết định trẻ có cần xét nghiệm hoặc gặp bác sĩ chuyên khoa hay không."
        ]
      },
      {
        "heading": "Sau một đợt điều trị hoặc nằm viện",
        "paragraphs": [
          "Một số trẻ cần tái khám sau viêm phổi, sốt kéo dài, phẫu thuật, chấn thương hoặc bệnh nặng để bảo đảm quá trình hồi phục diễn ra thuận lợi.",
          "Bác sĩ có thể kiểm tra lại triệu chứng, đánh giá dinh dưỡng, rà soát thuốc và hướng dẫn thời điểm trẻ có thể trở lại trường học hoặc hoạt động thể chất.",
          "Một lần khám nhi tổng quát thường gồm những gì?"
        ]
      },
      {
        "heading": "Hỏi về sức khỏe và sinh hoạt của trẻ",
        "paragraphs": [
          "Bác sĩ có thể hỏi về:",
          "Thời gian xuất hiện triệu chứng.",
          "Khả năng ăn, bú và uống nước.",
          "Giấc ngủ.",
          "Tình trạng đại tiện, tiểu tiện.",
          "Các thuốc hoặc thực phẩm bổ sung đang dùng.",
          "Tiền sử dị ứng.",
          "Tiền sử sinh nở và bệnh trước đây.",
          "Bệnh lý trong gia đình.",
          "Khả năng học tập, giao tiếp và vận động.",
          "Với trẻ nhỏ, những thông tin phụ huynh quan sát được tại nhà rất có giá trị. Một video ghi lại tiếng ho, cơn giật, dáng đi bất thường hoặc hành vi lặp lại đôi khi giúp bác sĩ hiểu rõ hơn vấn đề."
        ]
      },
      {
        "heading": "Đánh giá tăng trưởng và dinh dưỡng",
        "paragraphs": [
          "Bác sĩ sẽ xem xét chiều cao, cân nặng và tốc độ tăng trưởng thay vì chỉ nhìn vào việc trẻ “trông mập hay gầy”.",
          "Hai trẻ cùng tuổi có thể có vóc dáng khác nhau nhưng vẫn phát triển bình thường. Điều đáng chú ý hơn là trẻ đứng cân kéo dài, sụt cân, tăng cân quá nhanh hoặc đường tăng trưởng thay đổi rõ rệt.",
          "Bác sĩ cũng có thể hỏi về khẩu phần ăn, tình trạng biếng ăn, ăn chọn lọc, sử dụng sữa, đồ uống có đường và mức độ vận động của trẻ."
        ]
      },
      {
        "heading": "Khám các cơ quan",
        "paragraphs": [
          "Tùy trường hợp, bác sĩ kiểm tra da, mắt, tai, mũi, họng, tim, phổi, bụng, cơ quan sinh dục ngoài, cột sống, tay chân và hệ thần kinh.",
          "Không phải trẻ nào cũng cần xét nghiệm máu, siêu âm hoặc chụp X-quang. Những kiểm tra này chỉ nên được chỉ định khi bệnh sử và kết quả khám cho thấy có lý do phù hợp."
        ]
      },
      {
        "heading": "Theo dõi tiêm chủng",
        "paragraphs": [
          "Rà soát sổ tiêm chủng giúp phát hiện các mũi đã đến hạn hoặc bị bỏ lỡ. Tiêm chủng cần tuân theo chương trình quốc gia và hướng dẫn chuyên môn phù hợp với tuổi, tiền sử sức khỏe của trẻ.",
          "Chương trình Tiêm chủng mở rộng tại Việt Nam cung cấp vaccine phòng nhiều bệnh truyền nhiễm quan trọng ở trẻ em. Với trẻ tiêm chậm hoặc bỏ lỡ mũi, phụ huynh nên mang sổ tiêm đến cơ sở y tế để được xây dựng lịch tiêm bù phù hợp, thay vì tự bắt đầu lại toàn bộ lịch.",
          "Khi nào trẻ cần gặp bác sĩ chuyên khoa?",
          "Bác sĩ nhi tổng quát có thể xử trí nhiều bệnh thường gặp và đóng vai trò điều phối chăm sóc. Trẻ thường được giới thiệu đến bác sĩ chuyên khoa khi:",
          "Triệu chứng kéo dài hoặc tái phát nhiều lần.",
          "Điều trị ban đầu chưa mang lại kết quả như mong đợi.",
          "Kết quả khám hoặc xét nghiệm có dấu hiệu bất thường.",
          "Trẻ có bệnh mạn tính cần theo dõi lâu dài.",
          "Có nghi ngờ bệnh bẩm sinh, di truyền hoặc hiếm gặp.",
          "Vấn đề liên quan sâu đến một cơ quan cụ thể.",
          "Trẻ có nhiều bệnh cùng lúc và cần phối hợp chăm sóc.",
          "Bác sĩ chuyên khoa nhi được đào tạo sâu hơn trong từng lĩnh vực. Việc chuyển khám không đồng nghĩa trẻ chắc chắn mắc bệnh nặng; đôi khi mục tiêu chỉ là kiểm tra kỹ hơn để loại trừ nguy cơ.",
          "Những dấu hiệu nào gợi ý trẻ cần khám chuyên khoa?",
          "Danh sách dưới đây mang tính định hướng. Phụ huynh nên đưa trẻ đến bác sĩ nhi tổng quát trước hoặc đặt khám đúng chuyên khoa khi đã có chỉ định."
        ]
      },
      {
        "heading": "Trẻ có vấn đề về tăng trưởng hoặc dinh dưỡng",
        "paragraphs": [
          "Trẻ có thể cần gặp bác sĩ dinh dưỡng hoặc nội tiết nhi khi:",
          "Chậm tăng cân hoặc đứng cân kéo dài.",
          "Sụt cân không rõ nguyên nhân.",
          "Chiều cao tăng rất chậm so với trước.",
          "Tăng cân quá nhanh.",
          "Biếng ăn nghiêm trọng hoặc chế độ ăn quá hạn chế.",
          "Khát nhiều, tiểu nhiều và sụt cân.",
          "Có dấu hiệu dậy thì quá sớm hoặc quá muộn.",
          "Kết quả đường huyết, tuyến giáp hoặc hormone bất thường.",
          "Bác sĩ sẽ xem xét tốc độ tăng trưởng, khẩu phần ăn, yếu tố di truyền và các bệnh lý có thể ảnh hưởng đến cân nặng hoặc chiều cao."
        ]
      },
      {
        "heading": "Trẻ ho, khò khè hoặc khó thở tái diễn",
        "paragraphs": [
          "Bác sĩ hô hấp hoặc dị ứng – miễn dịch nhi có thể được chỉ định khi trẻ:",
          "Khò khè nhiều lần.",
          "Ho kéo dài hoặc thường xuyên về đêm.",
          "Khó thở khi vận động.",
          "Viêm phổi tái diễn.",
          "Nghi ngờ hen phế quản.",
          "Có phản ứng dị ứng lặp lại.",
          "Nổi mề đay kéo dài hoặc dị ứng thức ăn nghiêm trọng.",
          "Trẻ khó thở cấp, tím môi hoặc co lõm lồng ngực không nên chờ lịch khám chuyên khoa mà cần được đưa đi cấp cứu."
        ]
      },
      {
        "heading": "Trẻ có dấu hiệu bất thường về tim mạch",
        "paragraphs": [
          "Trẻ có thể cần được khám tim mạch nhi nếu:",
          "Có tiếng tim bất thường được bác sĩ phát hiện.",
          "Dễ mệt, khó thở hoặc ngất khi vận động.",
          "Đau ngực liên quan đến gắng sức.",
          "Trẻ sơ sinh bú kém, thở nhanh, vã mồ hôi khi bú.",
          "Môi hoặc đầu ngón tay tím.",
          "Gia đình có người mắc bệnh tim di truyền hoặc đột tử khi còn trẻ.",
          "Không phải mọi tiếng thổi ở tim đều nguy hiểm. Bác sĩ cần khám và có thể chỉ định điện tim, siêu âm tim hoặc các kiểm tra phù hợp để xác định."
        ]
      },
      {
        "heading": "Trẻ đau bụng, nôn hoặc rối loạn tiêu hóa kéo dài",
        "paragraphs": [
          "Bác sĩ tiêu hóa nhi có thể được cân nhắc khi trẻ:",
          "Đau bụng tái diễn ảnh hưởng đến sinh hoạt.",
          "Nôn thường xuyên hoặc nôn kéo dài.",
          "Khó nuốt hoặc hay nghẹn.",
          "Tiêu chảy kéo dài.",
          "Táo bón không cải thiện.",
          "Đi ngoài ra máu.",
          "Vàng da.",
          "Chậm tăng cân kèm triệu chứng tiêu hóa.",
          "Nghi ngờ dị ứng đạm sữa hoặc bệnh lý hấp thu.",
          "Đau bụng dữ dội, bụng cứng, nôn xanh, nôn ra máu hoặc đi ngoài ra nhiều máu là những dấu hiệu cần được đánh giá khẩn cấp."
        ]
      },
      {
        "heading": "Trẻ chậm nói, chậm vận động hoặc có hành vi khác thường",
        "paragraphs": [
          "Trẻ có thể cần được đánh giá bởi bác sĩ thần kinh nhi, bác sĩ phát triển – hành vi, chuyên gia tâm lý hoặc chuyên viên ngôn ngữ khi:",
          "Không đạt các mốc phát triển phù hợp.",
          "Chậm nói hoặc khó giao tiếp.",
          "Ít đáp ứng khi gọi tên.",
          "Khó tương tác với người khác.",
          "Có hành vi lặp lại rõ rệt.",
          "Khó tập trung, hiếu động quá mức.",
          "Gặp khó khăn đáng kể trong học tập.",
          "Đi không vững, yếu một bên cơ thể hoặc vận động bất thường.",
          "Mất kỹ năng đã từng có.",
          "Mất kỹ năng đã đạt được là dấu hiệu đặc biệt cần lưu ý. CDC khuyến nghị gia đình trao đổi sớm với bác sĩ khi trẻ bỏ lỡ mốc phát triển, mất kỹ năng hoặc có bất kỳ lo ngại nào, thay vì chỉ chờ trẻ “tự lớn sẽ hết”."
        ]
      },
      {
        "heading": "Trẻ co giật, đau đầu hoặc bất tỉnh",
        "paragraphs": [
          "Bác sĩ thần kinh nhi có thể được chỉ định khi trẻ:",
          "Có cơn co giật.",
          "Ngất tái diễn.",
          "Đau đầu thường xuyên hoặc ngày càng tăng.",
          "Đau đầu kèm nôn, nhìn mờ hoặc yếu tay chân.",
          "Có cử động bất thường.",
          "Thay đổi ý thức hoặc hành vi không rõ nguyên nhân.",
          "Được phát hiện bất thường trên điện não đồ hoặc hình ảnh não.",
          "Cơn co giật đầu tiên, co giật kéo dài, trẻ khó đánh thức hoặc không hồi phục như bình thường cần được xử trí cấp cứu."
        ]
      },
      {
        "heading": "Trẻ thường xuyên viêm tai, nghe kém hoặc ngáy lớn",
        "paragraphs": [
          "Trẻ có thể cần khám tai mũi họng hoặc thính học nếu:",
          "Viêm tai tái diễn.",
          "Phản ứng kém với âm thanh.",
          "Nói chậm hoặc phát âm không rõ.",
          "Nghẹt mũi kéo dài.",
          "Ngáy lớn thường xuyên.",
          "Có những khoảng ngừng thở khi ngủ.",
          "Nuốt khó hoặc giọng nói thay đổi kéo dài.",
          "Nghe kém có thể ảnh hưởng đến khả năng học nói và học tập. Vì vậy, chậm nói đôi khi không chỉ là vấn đề ngôn ngữ mà còn cần kiểm tra thính lực."
        ]
      },
      {
        "heading": "Trẻ có biểu hiện bất thường về mắt",
        "paragraphs": [
          "Trẻ có thể cần khám mắt nhi khi:",
          "Hai mắt nhìn không cùng hướng.",
          "Trẻ thường nheo mắt hoặc nghiêng đầu để nhìn.",
          "Hay va vào đồ vật.",
          "Khó nhìn bảng hoặc cầm sách quá gần.",
          "Có đồng tử trắng trong ảnh.",
          "Mắt đỏ, đau hoặc chảy nước mắt kéo dài.",
          "Bác sĩ phát hiện phản xạ ánh sáng bất thường.",
          "Một số vấn đề thị lực nếu phát hiện sớm có thể được can thiệp hiệu quả hơn trước khi ảnh hưởng lâu dài đến khả năng nhìn."
        ]
      },
      {
        "heading": "Trẻ có vấn đề về tiết niệu hoặc cơ quan sinh dục",
        "paragraphs": [
          "Bác sĩ thận – tiết niệu hoặc ngoại nhi có thể được chỉ định khi:",
          "Nhiễm trùng đường tiểu tái diễn.",
          "Tiểu ra máu hoặc protein trong nước tiểu.",
          "Phù mặt, chân.",
          "Huyết áp cao.",
          "Tiểu khó hoặc dòng tiểu bất thường.",
          "Tinh hoàn chưa xuống bìu.",
          "Có khối phồng vùng bẹn hoặc bìu.",
          "Đái dầm kéo dài kèm triệu chứng bất thường.",
          "Được phát hiện dị tật hệ tiết niệu từ trước sinh.",
          "Bác sĩ nhi sẽ đánh giá trước để lựa chọn đúng chuyên khoa và mức độ ưu tiên."
        ]
      },
      {
        "heading": "Trẻ có vấn đề cảm xúc, hành vi hoặc học đường",
        "paragraphs": [
          "Sức khỏe tâm lý cũng là một phần của khám nhi tổng quát. Trẻ có thể cần chuyên gia tâm lý, tâm thần nhi hoặc bác sĩ phát triển – hành vi khi:",
          "Lo âu kéo dài.",
          "Buồn bã, thu mình hoặc dễ kích động.",
          "Khó ngủ kéo dài.",
          "Từ chối đi học.",
          "Kết quả học tập giảm rõ rệt.",
          "Có hành vi gây tổn thương bản thân.",
          "Nói về cái chết hoặc không muốn sống.",
          "Khó kiểm soát cảm xúc và hành vi.",
          "Các biểu hiện liên quan đến tự làm hại bản thân hoặc ý định tự sát cần được hỗ trợ khẩn cấp, không chờ lịch hẹn thông thường.",
          "Khi nào cần đưa trẻ đi cấp cứu thay vì chờ khám chuyên khoa?",
          "Phụ huynh cần đưa trẻ đến cơ sở y tế ngay nếu trẻ có một trong các dấu hiệu:",
          "Ngừng thở hoặc khó thở rõ rệt.",
          "Thở nhanh, rút lõm vùng dưới xương sườn.",
          "Môi hoặc da tím, tái xám.",
          "Khó đánh thức, lơ mơ hoặc phản ứng bất thường.",
          "Co giật lần đầu hoặc co giật kéo dài.",
          "Phát ban đỏ tím không mất màu khi ấn.",
          "Nôn màu xanh, nôn ra máu.",
          "Không bú, không uống được hoặc tiểu ít rõ rệt.",
          "Phản ứng dị ứng nặng với sưng môi, lưỡi hoặc khó thở.",
          "Chấn thương nặng, ngộ độc hoặc nuốt pin, nam châm và dị vật nguy hiểm.",
          "Đau bụng dữ dội, liên tục.",
          "Chảy máu nhiều hoặc không cầm được.",
          "Đặc biệt, trẻ dưới 3 tháng có nhiệt độ từ 38°C trở lên cần được nhân viên y tế đánh giá khẩn cấp. Trẻ từ 3–6 tháng có nhiệt độ từ 39°C trở lên cũng nên được tư vấn y tế sớm, nhất là khi bỏ bú, mệt hoặc có dấu hiệu bất thường khác.",
          "Có thể ghi nhớ ba câu hỏi đơn giản: trẻ có thở bình thường không, trẻ có tỉnh táo và phản ứng không, trẻ có uống và giữ được nước không? Nếu câu trả lời cho bất kỳ câu nào là “không”, trẻ cần được đánh giá y tế khẩn cấp tùy mức độ.",
          "Có nên tự đưa trẻ đến bác sĩ chuyên khoa ngay không?",
          "Phụ huynh có thể đặt khám chuyên khoa khi trẻ đã có chẩn đoán, giấy giới thiệu hoặc triệu chứng khá đặc hiệu. Tuy nhiên, trong nhiều trường hợp, khám nhi tổng quát trước sẽ thuận lợi hơn.",
          "Một triệu chứng có thể bắt nguồn từ nhiều cơ quan. Chẳng hạn:",
          "Chậm tăng cân có thể liên quan đến dinh dưỡng, tiêu hóa, nội tiết hoặc tim mạch.",
          "Chậm nói có thể liên quan đến thính lực, phát triển ngôn ngữ hoặc tương tác xã hội.",
          "Đau đầu có thể liên quan đến thị lực, giấc ngủ, căng thẳng hoặc thần kinh.",
          "Ho kéo dài có thể liên quan đến đường hô hấp, dị ứng hoặc trào ngược.",
          "Bác sĩ nhi tổng quát sẽ tổng hợp các dấu hiệu, chỉ định kiểm tra ban đầu và hướng trẻ đến đúng chuyên khoa. Điều này giúp hạn chế việc gia đình phải đi qua nhiều nơi nhưng vẫn chưa tìm được nguyên nhân.",
          "Cần chuẩn bị gì khi đưa trẻ đi khám?",
          "Để buổi khám hiệu quả hơn, phụ huynh nên chuẩn bị:",
          "Sổ khám bệnh và sổ tiêm chủng.",
          "Kết quả xét nghiệm, siêu âm hoặc đơn thuốc cũ.",
          "Danh sách thuốc, vitamin và thực phẩm bổ sung trẻ đang dùng.",
          "Thông tin về dị ứng thuốc hoặc thức ăn.",
          "Ghi chú thời điểm triệu chứng xuất hiện.",
          "Nhật ký sốt, ăn uống, đi vệ sinh hoặc giấc ngủ khi cần.",
          "Video hoặc hình ảnh triệu chứng xảy ra tại nhà.",
          "Ba đến năm câu hỏi quan trọng nhất muốn trao đổi với bác sĩ.",
          "Không nên tự cho trẻ dùng lại kháng sinh hoặc đơn thuốc cũ trước khi đi khám. Cùng một biểu hiện sốt, ho hay đau bụng có thể do nhiều nguyên nhân khác nhau và cần cách xử trí khác nhau."
        ]
      },
      {
        "heading": "Khám nhi tổng quát tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khám nhi tổng quát là điểm khởi đầu giúp gia đình hiểu rõ tình trạng sức khỏe của trẻ. Qua thăm khám, bác sĩ có thể đánh giá tăng trưởng, dinh dưỡng, phát triển, lịch tiêm chủng và những triệu chứng mà phụ huynh đang lo lắng.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, trẻ có thể được bác sĩ thăm khám dựa trên tình trạng cụ thể. Khi cần thiết, bác sĩ sẽ chỉ định xét nghiệm, chẩn đoán hình ảnh hoặc phối hợp với chuyên khoa phù hợp để tiếp tục đánh giá.",
          "Không phải biểu hiện bất thường nào cũng đồng nghĩa với bệnh nghiêm trọng. Tuy nhiên, trẻ nhỏ có thể thay đổi nhanh và đôi khi chưa biết cách mô tả cảm giác của mình. Vì vậy, khi triệu chứng kéo dài, tái phát hoặc trẻ có biểu hiện khác thường, phụ huynh không nên chỉ tiếp tục theo dõi tại nhà.",
          "Khám đúng thời điểm giúp phát hiện vấn đề sớm, lựa chọn đúng chuyên khoa và xây dựng kế hoạch chăm sóc phù hợp hơn cho từng giai đoạn phát triển của trẻ.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "sot-o-tre-em-dau-hieu-nao-can-dua-tre-di-vien": {
    "sourceFile": "26.Sốt ở trẻ em dấu hiệu nào cần đưa trẻ đi viện.docx",
    "title": "Sốt ở trẻ em: Dấu hiệu nào cần đưa trẻ đi viện?",
    "excerpt": "Trẻ sốt thường khiến cha mẹ lo lắng, nhất là khi nhiệt độ tăng nhanh vào ban đêm. Tuy nhiên, không phải cứ sốt cao là trẻ mắc bệnh nặng và cũng không nên chỉ nhìn vào con số trên nhiệt kế để đánh giá tình trạng của trẻ.",
    "intro": [
      "Trẻ sốt thường khiến cha mẹ lo lắng, nhất là khi nhiệt độ tăng nhanh vào ban đêm. Tuy nhiên, không phải cứ sốt cao là trẻ mắc bệnh nặng và cũng không nên chỉ nhìn vào con số trên nhiệt kế để đánh giá tình trạng của trẻ.",
      "Điều quan trọng hơn là độ tuổi, khả năng ăn uống, nhịp thở, mức độ tỉnh táo và các triệu chứng đi kèm. Trẻ sốt nhưng vẫn uống được, tương tác và chơi nhẹ thường ít đáng lo hơn trẻ chỉ sốt vừa nhưng khó đánh thức, bỏ bú hoặc thở bất thường.",
      "Bao nhiêu độ được xem là sốt ở trẻ em?",
      "Thông thường, trẻ được xem là sốt khi thân nhiệt đo được từ 38°C trở lên. Nhiệt độ bình thường có thể dao động nhẹ tùy từng trẻ, thời điểm trong ngày và vị trí đo.",
      "Cha mẹ nên sử dụng nhiệt kế điện tử thay vì chỉ sờ trán hoặc quan sát cảm giác nóng. Với trẻ nhỏ, có thể đặt nhiệt kế ở nách theo đúng hướng dẫn của thiết bị.",
      "Nếu trẻ vừa tắm, vừa vận động hoặc được quấn chăn dày, thân nhiệt có thể tăng tạm thời. Hãy để trẻ nghỉ vài phút rồi đo lại.",
      "Sốt ở trẻ có phải lúc nào cũng nguy hiểm không?",
      "Không. Sốt thường là phản ứng của cơ thể khi chống lại nhiễm trùng. Nhiều trẻ bị sốt do cảm lạnh, viêm họng, cúm hoặc các bệnh nhiễm virus và có thể hồi phục sau vài ngày.",
      "Bản thân mức nhiệt độ chưa phản ánh đầy đủ mức độ nặng. Khi đánh giá trẻ sốt, cha mẹ cần quan sát xem trẻ có tỉnh táo, uống được, đi tiểu bình thường, thở dễ dàng và phản ứng với người thân hay không. Việc trẻ chơi hoặc tương tác trở lại sau khi bớt khó chịu là một dấu hiệu tương đối tích cực.",
      "Tuy nhiên, ở trẻ sơ sinh và trẻ nhỏ dưới ba tháng tuổi, ngay cả một cơn sốt không quá cao cũng có thể liên quan đến nhiễm trùng nghiêm trọng. Nhóm tuổi này cần được đánh giá thận trọng hơn."
    ],
    "sections": [
      {
        "heading": "Những dấu hiệu cần đưa trẻ đến cấp cứu ngay",
        "paragraphs": [
          "Cha mẹ cần đưa trẻ đến cơ sở cấp cứu gần nhất hoặc gọi hỗ trợ y tế khẩn cấp nếu trẻ sốt kèm một trong những dấu hiệu dưới đây.",
          "1. Trẻ khó thở hoặc có biểu hiện thiếu oxy",
          "Các dấu hiệu nguy hiểm gồm:",
          "Thở rất nhanh.",
          "Thở rên hoặc phát ra âm thanh bất thường.",
          "Cánh mũi phập phồng.",
          "Lồng ngực hoặc vùng dưới xương sườn lõm vào khi hít thở.",
          "Trẻ phải gắng sức mới thở được.",
          "Môi, lưỡi hoặc mặt chuyển màu xanh, xám hoặc nhợt bất thường.",
          "Trẻ không thể bú hoặc uống vì khó thở.",
          "Khó thở có thể liên quan đến viêm phổi, viêm tiểu phế quản, nhiễm trùng nặng hoặc một vấn đề đường hô hấp cần được xử trí sớm.",
          "Không nên chờ thuốc hạ sốt phát huy tác dụng nếu trẻ đang thở bất thường.",
          "2. Trẻ lơ mơ, khó đánh thức hoặc phản ứng khác thường",
          "Cần đưa trẻ đi viện ngay nếu trẻ:",
          "Ngủ li bì và khó đánh thức.",
          "Không nhìn, không đáp ứng hoặc không nhận ra người thân.",
          "Không quan tâm đến việc bú, uống hoặc hoạt động thường ngày.",
          "Yếu rũ, không thể ngồi hoặc đứng như bình thường.",
          "Kích động dữ dội, bứt rứt hoặc khóc liên tục không thể dỗ.",
          "Có tiếng khóc yếu, rên hoặc khác hẳn mọi ngày.",
          "Đột ngột lú lẫn hoặc có hành vi bất thường.",
          "Mức độ tỉnh táo và khả năng tương tác là những dấu hiệu rất quan trọng. Trẻ không đáp ứng bình thường cần được đánh giá khẩn cấp, kể cả khi nhiệt độ không quá cao.",
          "3. Trẻ co giật",
          "Một số trẻ từ khoảng sáu tháng đến sáu tuổi có thể xuất hiện co giật liên quan đến sốt. Trẻ có thể cứng người, giật tay chân, mất ý thức hoặc không phản ứng trong cơn.",
          "Cần gọi cấp cứu nếu:",
          "Đây là lần đầu tiên trẻ co giật.",
          "Cơn co giật kéo dài trên năm phút.",
          "Trẻ khó thở trong hoặc sau cơn.",
          "Co giật chỉ xảy ra ở một bên cơ thể.",
          "Trẻ có nhiều hơn một cơn trong vòng 24 giờ.",
          "Trẻ vẫn buồn ngủ bất thường hơn một giờ sau khi hết co giật.",
          "Trong lúc trẻ co giật:",
          "Ghi lại thời điểm cơn bắt đầu.",
          "Đặt trẻ nằm ở nơi an toàn, tránh đồ vật cứng hoặc sắc nhọn.",
          "Bảo vệ đầu trẻ bằng vật mềm.",
          "Sau khi cơn dừng, đặt trẻ nằm nghiêng để đường thở thông thoáng.",
          "Không ghì giữ tay chân.",
          "Không cho ngón tay, thìa, đũa hoặc bất kỳ vật gì vào miệng trẻ.",
          "Không cho trẻ uống thuốc, nước hoặc thức ăn khi đang co giật.",
          "4. Trẻ sốt kèm cổ cứng, đau đầu dữ dội hoặc sợ ánh sáng",
          "Trẻ sốt kèm cổ cứng, đau đầu nhiều, sợ ánh sáng, nôn, lơ mơ hoặc co giật có thể liên quan đến viêm màng não hoặc bệnh lý thần kinh nghiêm trọng.",
          "Ở trẻ sơ sinh, dấu hiệu có thể không điển hình. Cha mẹ cần chú ý thêm tình trạng bỏ bú, kích thích bất thường, tiếng khóc cao, thóp phồng hoặc giảm mức độ tỉnh táo.",
          "Không nên cố gập cổ trẻ để tự kiểm tra độ cứng. Hãy đưa trẻ đến cơ sở y tế để được đánh giá.",
          "5. Trẻ có ban không mất màu khi ấn",
          "Một số bệnh nhiễm trùng nghiêm trọng có thể gây các chấm đỏ, tím hoặc mảng xuất huyết không nhạt màu khi ấn lên da.",
          "Có thể kiểm tra sơ bộ bằng cách dùng một chiếc cốc thủy tinh trong ấn nhẹ lên vùng ban. Nếu các chấm hoặc mảng vẫn nhìn thấy rõ qua thành cốc, cần đưa trẻ đi cấp cứu ngay, đặc biệt khi trẻ sốt, lơ mơ, cổ cứng hoặc tay chân lạnh.",
          "Tuy nhiên, không nên mất nhiều thời gian thực hiện thử nghiệm tại nhà nếu trẻ đang có biểu hiện nặng.",
          "6. Trẻ có dấu hiệu mất nước nghiêm trọng",
          "Sốt, nôn và tiêu chảy có thể làm trẻ mất nước nhanh, đặc biệt ở trẻ sơ sinh.",
          "Dấu hiệu cần chú ý gồm:",
          "Trẻ không uống được hoặc liên tục từ chối uống.",
          "Nôn mọi thứ vừa uống.",
          "Tiểu rất ít hoặc không tiểu trong nhiều giờ.",
          "Tã khô lâu hơn bình thường.",
          "Miệng và lưỡi khô.",
          "Khóc không có nước mắt.",
          "Mắt trũng.",
          "Trẻ rất khát nhưng yếu, không thể uống.",
          "Lừ đừ, chóng mặt hoặc tay chân lạnh.",
          "Mất nước ở trẻ nhỏ có thể tiến triển nhanh và cần được bù dịch dưới sự theo dõi của nhân viên y tế.",
          "7. Da trẻ nhợt, tím tái, nổi bông hoặc tay chân lạnh bất thường",
          "Trẻ sốt nhưng da chuyển màu xanh, xám, nhợt hoặc loang lổ, kèm tay chân lạnh, yếu rũ, thở nhanh hoặc khó đánh thức có thể đang gặp vấn đề về tuần hoàn hoặc nhiễm trùng nặng.",
          "Đây không phải tình trạng nên tiếp tục theo dõi tại nhà.",
          "8. Trẻ đau bụng dữ dội, nôn liên tục hoặc chảy máu",
          "Cần đưa trẻ đi viện nếu sốt đi kèm:",
          "Đau bụng nhiều hoặc đau liên tục.",
          "Nôn liên tục, không uống được nước.",
          "Nôn ra máu.",
          "Đi ngoài phân đen hoặc có máu.",
          "Chảy máu mũi, chảy máu chân răng bất thường.",
          "Có nhiều chấm xuất huyết trên da.",
          "Bụng chướng, cứng hoặc rất đau khi chạm vào.",
          "Ở khu vực có lưu hành sốt xuất huyết, cha mẹ cần đặc biệt lưu ý giai đoạn trẻ bắt đầu giảm sốt. Nhiệt độ giảm không phải lúc nào cũng có nghĩa bệnh đang hồi phục. Sốt xuất huyết nặng có thể xuất hiện vào khoảng ngày thứ ba đến ngày thứ bảy với đau bụng dữ dội, nôn kéo dài, chảy máu, thở nhanh, khát nhiều, da lạnh tái, lừ đừ hoặc bứt rứt.",
          "Mốc nhiệt độ nào cần đưa trẻ đi khám?"
        ]
      },
      {
        "heading": "Trẻ dưới ba tháng tuổi",
        "paragraphs": [
          "Trẻ dưới ba tháng có nhiệt độ từ 38°C trở lên cần được đưa đi khám ngay, kể cả khi trẻ vẫn bú và chưa có dấu hiệu bất thường khác.",
          "Ở độ tuổi này, cha mẹ khó có thể tự phân biệt nhiễm virus thông thường với nhiễm khuẩn nghiêm trọng. Không nên tự cho trẻ uống thuốc hạ sốt rồi chờ theo dõi tại nhà."
        ]
      },
      {
        "heading": "Trẻ từ ba đến sáu tháng tuổi",
        "paragraphs": [
          "Trẻ từ ba đến sáu tháng có nhiệt độ từ khoảng 39°C trở lên nên được liên hệ bác sĩ hoặc đưa đi khám trong ngày. Cần khám sớm hơn nếu trẻ bú kém, lừ đừ, khó thở, nôn hoặc có bất kỳ dấu hiệu bất thường nào."
        ]
      },
      {
        "heading": "Trẻ trên sáu tháng tuổi",
        "paragraphs": [
          "Với trẻ lớn hơn, không nên chỉ dựa vào nhiệt độ để quyết định mức độ nguy hiểm. Một trẻ sốt 39°C nhưng vẫn tỉnh, uống được và thở bình thường có thể được theo dõi sát, trong khi một trẻ chỉ sốt 38°C nhưng lơ mơ hoặc khó thở cần đi viện ngay.",
          "Tuy vậy, trẻ có nhiệt độ lặp lại từ 40°C trở lên cần được bác sĩ đánh giá, nhất là khi thuốc hạ sốt không giúp trẻ dễ chịu hơn hoặc tình trạng tiếp tục xấu đi.",
          "Khi nào nên đưa trẻ đi khám trong ngày?",
          "Không phải trường hợp nào cũng cần gọi cấp cứu, nhưng cha mẹ nên đưa trẻ đến bác sĩ trong ngày nếu:",
          "Trẻ không còn hoạt bát như bình thường dù đã hạ sốt.",
          "Trẻ ăn hoặc bú kém rõ rệt.",
          "Trẻ nôn hoặc tiêu chảy nhiều lần.",
          "Trẻ đau tai, đau họng nhiều hoặc ho tăng dần.",
          "Trẻ tiểu buốt, tiểu ít, nước tiểu có mùi lạ hoặc có máu.",
          "Trẻ đau hoặc sưng một khớp, không chịu đi hoặc không sử dụng một tay chân.",
          "Trẻ có bệnh tim, bệnh phổi, bệnh máu, ung thư hoặc suy giảm miễn dịch.",
          "Trẻ đang sử dụng thuốc steroid hoặc thuốc ức chế miễn dịch.",
          "Cha mẹ cảm thấy trẻ khác hẳn mọi ngày hoặc tình trạng đang xấu đi.",
          "Trực giác của người chăm sóc cũng có giá trị. Nếu cha mẹ thấy trẻ “không ổn” dù chưa xác định được một triệu chứng cụ thể, nên đưa trẻ đi kiểm tra.",
          "Trẻ sốt kéo dài bao lâu thì cần đi khám?",
          "Nhiều cơn sốt do nhiễm virus có thể giảm trong vài ngày. Tuy nhiên, trẻ sốt kéo dài cần được tìm nguyên nhân.",
          "Nên đưa trẻ đi khám khi:",
          "Trẻ dưới hai tuổi sốt kéo dài hơn khoảng 24 giờ.",
          "Trẻ từ hai tuổi trở lên sốt kéo dài trên ba ngày.",
          "Sốt kéo dài từ năm ngày trở lên ở bất kỳ độ tuổi nào.",
          "Trẻ đã đỡ sốt nhưng sau đó sốt trở lại và biểu hiện bệnh nặng hơn.",
          "Sốt từ năm ngày trở lên cần được bác sĩ đánh giá, kể cả khi trẻ chưa có dấu hiệu cấp cứu. Một trong những tình trạng cần được nghĩ đến là bệnh Kawasaki.",
          "Trẻ mắc Kawasaki có thể sốt kéo dài kèm mắt đỏ, môi đỏ hoặc nứt, lưỡi đỏ giống quả dâu, phát ban, sưng đỏ bàn tay – bàn chân hoặc nổi hạch ở cổ. Trẻ dưới một tuổi đôi khi không có đầy đủ các biểu hiện này.",
          "Khi nào trẻ sốt có thể được theo dõi tại nhà?",
          "Cha mẹ có thể tiếp tục theo dõi nếu trẻ trên ba tháng tuổi và:",
          "Vẫn tỉnh táo, nhận biết và tương tác bình thường.",
          "Vẫn bú hoặc uống được.",
          "Đi tiểu tương đối bình thường.",
          "Không khó thở.",
          "Không co giật.",
          "Không có ban xuất huyết.",
          "Không đau dữ dội hoặc nôn liên tục.",
          "Không mắc bệnh nền làm tăng nguy cơ.",
          "Biểu hiện bệnh không tiếp tục nặng lên.",
          "Dù vậy, trẻ cần được kiểm tra thường xuyên, kể cả ban đêm. Cha mẹ nên ghi lại nhiệt độ, lượng nước trẻ uống, số lần đi tiểu và các triệu chứng mới xuất hiện.",
          "Chăm sóc trẻ sốt tại nhà như thế nào?"
        ]
      },
      {
        "heading": "Cho trẻ uống đủ nước",
        "paragraphs": [
          "Có thể cho trẻ uống từng lượng nhỏ nhưng thường xuyên. Trẻ đang bú mẹ nên tiếp tục được bú theo nhu cầu.",
          "Nếu trẻ nôn hoặc tiêu chảy, dung dịch bù nước và điện giải có thể được sử dụng theo hướng dẫn của nhân viên y tế hoặc hướng dẫn pha đúng trên bao bì. Không tự ý pha đặc hoặc loãng hơn quy định."
        ]
      },
      {
        "heading": "Không ép trẻ ăn",
        "paragraphs": [
          "Trẻ sốt thường ăn ít hơn bình thường. Cha mẹ có thể cho trẻ ăn thức ăn mềm, dễ tiêu nếu trẻ muốn. Trong thời gian ngắn, việc uống đủ nước thường quan trọng hơn việc cố ép trẻ ăn hết bữa."
        ]
      },
      {
        "heading": "Mặc quần áo thoáng, vừa phải",
        "paragraphs": [
          "Không nên quấn trẻ trong quá nhiều chăn hoặc quần áo dày. Đồng thời, cũng không nên cởi hết quần áo hay lau trẻ bằng nước lạnh để cố kéo nhiệt độ xuống.",
          "Chườm đá, tắm nước lạnh hoặc lau người quá mức có thể làm trẻ run và khó chịu hơn."
        ]
      },
      {
        "heading": "Chỉ dùng thuốc hạ sốt khi phù hợp",
        "paragraphs": [
          "Mục tiêu của thuốc hạ sốt là giúp trẻ bớt đau, bớt khó chịu và uống được tốt hơn, không nhất thiết phải đưa nhiệt độ trở về hoàn toàn bình thường.",
          "Paracetamol hoặc ibuprofen có thể được sử dụng khi phù hợp với tuổi, cân nặng và tình trạng sức khỏe của trẻ. Cần đọc kỹ nồng độ thuốc, sử dụng dụng cụ đong đi kèm và tính liều theo cân nặng hoặc hướng dẫn của bác sĩ.",
          "Cha mẹ cần lưu ý:",
          "Không tự cho trẻ dưới ba tháng uống thuốc rồi trì hoãn việc đi khám.",
          "Không dùng aspirin cho trẻ.",
          "Không tự phối hợp hoặc luân phiên paracetamol và ibuprofen nếu chưa được nhân viên y tế hướng dẫn.",
          "Không sử dụng nhiều loại thuốc cảm có cùng thành phần paracetamol vì có nguy cơ quá liều.",
          "Không tự dùng ibuprofen cho trẻ nhỏ, trẻ mất nước, nôn liên tục hoặc có bệnh lý cần thận trọng mà chưa hỏi bác sĩ."
        ]
      },
      {
        "heading": "Không tự mua kháng sinh",
        "paragraphs": [
          "Kháng sinh không điều trị được các bệnh do virus và không phải loại thuốc dùng chung cho mọi trẻ bị sốt. Việc lựa chọn kháng sinh cần dựa trên thăm khám, nguyên nhân nghi ngờ, tuổi của trẻ và các xét nghiệm khi cần.",
          "Không nên sử dụng lại đơn thuốc cũ hoặc thuốc còn thừa của lần bệnh trước.",
          "Vì sao uống thuốc rồi trẻ vẫn sốt trở lại?",
          "Thuốc hạ sốt chỉ giúp giảm nhiệt độ và khó chịu trong một khoảng thời gian, không loại bỏ ngay nguyên nhân gây sốt. Khi tác dụng của thuốc giảm, nhiệt độ có thể tăng trở lại.",
          "Điều cha mẹ cần quan sát là sau khi thuốc phát huy tác dụng, trẻ có tỉnh hơn, uống được, bớt đau và tương tác tốt hơn hay không. Nếu trẻ vẫn lừ đừ, khó thở, nôn liên tục hoặc biểu hiện ngày càng nặng dù nhiệt độ đã giảm, cần đưa trẻ đi khám.",
          "Trẻ sốt có nhất thiết phải làm xét nghiệm không?",
          "Không phải trẻ sốt nào cũng cần xét nghiệm máu, chụp X-quang hoặc nhập viện. Bác sĩ sẽ quyết định dựa trên:",
          "Tuổi của trẻ.",
          "Thời gian sốt.",
          "Mức độ tỉnh táo.",
          "Nhịp thở và tuần hoàn.",
          "Dấu hiệu mất nước.",
          "Triệu chứng đi kèm.",
          "Tiền sử bệnh.",
          "Kết quả thăm khám.",
          "Trẻ nhỏ dưới ba tháng, trẻ có dấu hiệu nhiễm trùng nặng hoặc không tìm được nguyên nhân rõ ràng có thể cần xét nghiệm máu, nước tiểu hoặc những kiểm tra chuyên sâu hơn.",
          "Không nên tự yêu cầu xét nghiệm tràn lan chỉ để “kiểm tra cho chắc”, nhưng cũng không nên từ chối xét nghiệm khi bác sĩ nhận thấy trẻ có nguy cơ."
        ]
      },
      {
        "heading": "Chỉ nhìn vào con số nhiệt độ",
        "paragraphs": [
          "Mức nhiệt độ là một phần của đánh giá, nhưng trạng thái tỉnh táo, nhịp thở, khả năng uống nước và triệu chứng đi kèm thường quan trọng hơn."
        ]
      },
      {
        "heading": "Cố gắng làm nhiệt độ trở về 37°C",
        "paragraphs": [
          "Thuốc hạ sốt không nhất thiết làm nhiệt độ trở lại hoàn toàn bình thường. Mục tiêu chính là giúp trẻ cảm thấy dễ chịu hơn và hạn chế mất nước."
        ]
      },
      {
        "heading": "Ủ kín để trẻ ra mồ hôi",
        "paragraphs": [
          "Quấn chăn hoặc mặc quá nhiều quần áo có thể khiến trẻ nóng và khó chịu hơn."
        ]
      },
      {
        "heading": "Chườm đá hoặc lau nước lạnh",
        "paragraphs": [
          "Cách làm này có thể khiến trẻ run, quấy khóc và không xử lý được nguyên nhân gây sốt."
        ]
      },
      {
        "heading": "Tự tăng liều hoặc cho thuốc sớm hơn giờ",
        "paragraphs": [
          "Dùng thuốc quá liều hoặc khoảng cách giữa các liều quá ngắn có thể gây ngộ độc. Cha mẹ nên ghi lại tên thuốc, hàm lượng, liều lượng và thời điểm đã cho trẻ uống."
        ]
      },
      {
        "heading": "Thấy trẻ giảm sốt là cho rằng đã khỏi",
        "paragraphs": [
          "Một số bệnh có thể nặng lên khi nhiệt độ bắt đầu giảm, điển hình là sốt xuất huyết. Trẻ giảm sốt nhưng đau bụng, nôn, lừ đừ, chảy máu hoặc tay chân lạnh cần được đưa đi viện ngay."
        ]
      },
      {
        "heading": "Khám và điều trị sốt ở trẻ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi trẻ sốt kéo dài, sốt kèm dấu hiệu bất thường hoặc cha mẹ chưa xác định được mức độ nguy hiểm, có thể đưa trẻ đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám.",
          "Tùy tình trạng, bác sĩ có thể:",
          "Đo nhiệt độ và các dấu hiệu sinh tồn.",
          "Đánh giá nhịp thở, tuần hoàn và mức độ tỉnh táo.",
          "Kiểm tra tình trạng mất nước.",
          "Khám tai, mũi, họng và hô hấp.",
          "Khám bụng, da, thần kinh hoặc hệ tiết niệu.",
          "Chỉ định xét nghiệm máu, nước tiểu hoặc chẩn đoán hình ảnh khi cần.",
          "Hướng dẫn chăm sóc và theo dõi tại nhà.",
          "Nhập viện theo dõi nếu trẻ có nguy cơ.",
          "Với mô hình bệnh viện đa khoa quốc tế, chuyên khoa Nhi có thể phối hợp với Xét nghiệm, Chẩn đoán hình ảnh, Hô hấp, Tiêu hóa và các chuyên khoa liên quan để xác định nguyên nhân, đặc biệt khi trẻ có biểu hiện nhiễm trùng nặng hoặc bệnh nền."
        ]
      },
      {
        "heading": "Câu hỏi thường gặp về sốt ở trẻ em",
        "paragraphs": [
          "Trẻ sốt 39°C nhưng vẫn chơi có cần đi viện không?",
          "Nếu trẻ trên sáu tháng, vẫn tỉnh, uống được, thở bình thường và không có dấu hiệu nguy hiểm, cha mẹ có thể chăm sóc và theo dõi sát. Tuy nhiên, nên đưa trẻ đi khám nếu sốt kéo dài, tái diễn, nhiệt độ tiếp tục tăng hoặc cha mẹ cảm thấy lo lắng.",
          "Trẻ dưới sáu tháng cần được đánh giá thận trọng hơn.",
          "Trẻ ngủ khi đang sốt có cần đánh thức không?",
          "Trẻ có thể ngủ khi mệt, nhưng cha mẹ cần kiểm tra định kỳ xem trẻ có thở bình thường, da môi có màu sắc bình thường và có thể đánh thức được hay không.",
          "Nếu trẻ khó đánh thức, không phản ứng như thường ngày hoặc thở bất thường, cần đưa trẻ đi cấp cứu.",
          "Sốt có gây co giật không?",
          "Một số trẻ từ khoảng sáu tháng đến sáu tuổi có thể bị co giật do sốt. Phần lớn các cơn ngắn không gây hậu quả lâu dài, nhưng trẻ co giật lần đầu hoặc có cơn kéo dài trên năm phút cần được cấp cứu.",
          "Hết sốt rồi có cần tiếp tục theo dõi không?",
          "Có. Cha mẹ nên tiếp tục theo dõi khả năng ăn uống, mức độ tỉnh táo, nhịp thở và lượng nước tiểu. Đặc biệt trong sốt xuất huyết, giai đoạn giảm sốt có thể là lúc các dấu hiệu cảnh báo xuất hiện.",
          "Trẻ sốt sau tiêm vaccine có đáng lo không?",
          "Sốt nhẹ có thể xuất hiện sau một số loại vaccine. Tuy nhiên, trẻ vẫn cần đi khám nếu sốt kèm khó thở, co giật, lơ mơ, phát ban bất thường, bỏ bú hoặc các dấu hiệu nguy hiểm khác.",
          "Với trẻ dưới ba tháng có nhiệt độ từ 38°C trở lên, cha mẹ nên liên hệ bác sĩ để được hướng dẫn, kể cả khi sốt xuất hiện sau tiêm.",
          "Kết luận",
          "Không phải mọi trường hợp sốt ở trẻ đều cần nhập viện. Cha mẹ có thể theo dõi tại nhà nếu trẻ vẫn tỉnh táo, uống được, đi tiểu bình thường, thở dễ dàng và không có dấu hiệu cảnh báo.",
          "Tuy nhiên, cần đưa trẻ đi viện ngay nếu trẻ:",
          "Dưới ba tháng tuổi và sốt từ 38°C.",
          "Khó thở hoặc tím tái.",
          "Lơ mơ, khó đánh thức hoặc không đáp ứng.",
          "Co giật lần đầu hoặc co giật kéo dài.",
          "Cổ cứng, sợ ánh sáng hoặc đau đầu dữ dội.",
          "Có ban không mất màu khi ấn.",
          "Mất nước, không uống được hoặc không tiểu.",
          "Đau bụng dữ dội, nôn liên tục hoặc chảy máu.",
          "Da lạnh, nhợt, loang lổ hoặc tình trạng xấu đi nhanh.",
          "Khi chăm sóc trẻ sốt, đừng chỉ tập trung “đuổi theo” con số trên nhiệt kế. Hãy quan sát toàn bộ biểu hiện của trẻ. Một em bé vẫn nhìn theo cha mẹ, uống được và phản ứng bình thường thường khác rất nhiều với một em bé chỉ sốt nhẹ nhưng lặng đi, thở gấp hoặc không thể đánh thức.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "ho-keo-dai-o-tre-nguyen-nhan-thuong-gap-va-khi-nao-can-kiem-tra": {
    "sourceFile": "27.Ho kéo dài ở trẻ nguyên nhân thường gặp và khi nào cần kiểm tra.docx",
    "title": "Ho kéo dài ở trẻ: Nguyên nhân thường gặp và khi nào cần kiểm tra?",
    "excerpt": "Ho là phản xạ tự nhiên giúp cơ thể làm sạch dịch nhầy, bụi và các tác nhân kích thích trong đường thở. Khi trẻ vừa cảm lạnh, sổ mũi hoặc viêm họng, tiếng ho có thể kéo dài thêm một thời gian dù trẻ đã hết sốt và vui chơi trở lại.",
    "intro": [
      "Ho là phản xạ tự nhiên giúp cơ thể làm sạch dịch nhầy, bụi và các tác nhân kích thích trong đường thở. Khi trẻ vừa cảm lạnh, sổ mũi hoặc viêm họng, tiếng ho có thể kéo dài thêm một thời gian dù trẻ đã hết sốt và vui chơi trở lại.",
      "Tuy nhiên, nếu trẻ ho hằng ngày trong nhiều tuần, đặc biệt là ho có đờm, ho ngày càng tăng hoặc đi kèm khó thở, sốt, sụt cân, phụ huynh không nên chỉ tiếp tục chờ đợi. Việc kiểm tra sớm giúp phân biệt ho sau nhiễm virus thông thường với hen, viêm phế quản kéo dài, ho gà, dị vật đường thở và một số bệnh hô hấp khác.",
      "Ho kéo dài ở trẻ được tính từ bao lâu?",
      "Trong hướng dẫn nhi khoa, ho hằng ngày kéo dài trên 4 tuần thường được xem là ho mạn tính hoặc ho kéo dài và cần được đánh giá nguyên nhân.",
      "Có thể phân chia tương đối như sau:",
      "Ho cấp tính: kéo dài đến khoảng 2 tuần.",
      "Ho cấp kéo dài: từ 2–4 tuần.",
      "Ho mạn tính: ho hằng ngày trên 4 tuần.",
      "Phần lớn các cơn ho do nhiễm virus đường hô hấp sẽ giảm trong vòng 1–3 tuần. Trẻ nhỏ đi nhà trẻ có thể mắc nhiều đợt viêm đường hô hấp trong năm, khiến phụ huynh có cảm giác trẻ “ho mãi không khỏi”. Điều cần phân biệt là trẻ đang ho liên tục do một bệnh kéo dài hay vừa hết đợt này đã mắc thêm một đợt mới.",
      "Ho kéo dài có phải lúc nào cũng nguy hiểm?",
      "Không. Nhiều trẻ ho lâu sau cảm lạnh nhưng vẫn ăn uống, ngủ và vui chơi bình thường. Cơn ho có thể giảm dần mà không cần điều trị đặc hiệu.",
      "Tuy nhiên, thời gian ho không phải yếu tố duy nhất cần quan tâm. Bác sĩ còn đánh giá:",
      "Trẻ ho khan hay ho có đờm.",
      "Ho xuất hiện cả ngày hay chủ yếu về đêm.",
      "Ho khi chạy nhảy, thay đổi thời tiết hoặc tiếp xúc với khói bụi.",
      "Trẻ có khò khè, khó thở, sốt hay không.",
      "Ho xuất hiện đột ngột sau một lần sặc, hóc.",
      "Trẻ có chậm tăng cân hoặc viêm phổi tái diễn không.",
      "Một trẻ mới ho hai tuần nhưng khó thở vẫn cần được khám ngay. Ngược lại, một trẻ ho nhẹ sau cảm lạnh, không có dấu hiệu cảnh báo, có thể được theo dõi theo hướng dẫn của bác sĩ."
    ],
    "sections": [
      {
        "heading": "Những nguyên nhân thường gặp khiến trẻ ho kéo dài",
        "paragraphs": [
          "1. Ho sau nhiễm virus đường hô hấp",
          "Đây là một trong những nguyên nhân phổ biến nhất. Sau cảm lạnh, cúm hoặc một đợt viêm hô hấp, niêm mạc đường thở có thể còn nhạy cảm trong một thời gian. Trẻ vì thế tiếp tục ho dù những biểu hiện như sốt, nghẹt mũi hoặc đau họng đã giảm.",
          "Ho sau nhiễm virus thường có xu hướng nhẹ dần. Trẻ vẫn sinh hoạt tương đối bình thường và không xuất hiện các dấu hiệu như thở gắng sức, ho ra máu hoặc sụt cân. Nếu cơn ho không cải thiện sau bốn tuần, bác sĩ cần đánh giá để loại trừ nguyên nhân khác.",
          "2. Trẻ mắc liên tiếp nhiều đợt viêm đường hô hấp",
          "Trẻ nhỏ có thể mắc từ 6–12 đợt nhiễm trùng đường hô hấp mỗi năm, đặc biệt khi mới đi nhà trẻ hoặc thường xuyên tiếp xúc với nhiều trẻ khác. Một đợt ho chưa dứt hẳn thì trẻ lại sổ mũi, sốt và ho tiếp, khiến triệu chứng trông như kéo dài liên tục.",
          "Phụ huynh nên ghi lại thời điểm trẻ sốt, sổ mũi và mức độ ho. Những khoảng thời gian trẻ hoàn toàn khỏe giữa các đợt bệnh là thông tin quan trọng giúp bác sĩ phân biệt nhiễm virus tái diễn với ho mạn tính thực sự.",
          "3. Hen phế quản",
          "Hen có thể gây ho khan, khò khè, nặng ngực hoặc khó thở. Triệu chứng thường tăng về đêm, sáng sớm, khi chạy nhảy, gặp không khí lạnh hoặc tiếp xúc với khói thuốc, bụi, lông động vật và các yếu tố kích thích khác.",
          "Tuy nhiên, không nên kết luận trẻ mắc hen chỉ vì ho kéo dài. Bác sĩ cần hỏi kỹ triệu chứng, khám phổi và có thể thực hiện đo chức năng hô hấp nếu trẻ đủ lớn và phối hợp được.",
          "4. Viêm phế quản do vi khuẩn kéo dài",
          "Viêm phế quản do vi khuẩn kéo dài, còn gọi là PBB, là một nguyên nhân thường gặp của ho ướt hoặc ho có đờm kéo dài ở trẻ.",
          "Trẻ thường ho ướt hằng ngày, có thể rõ hơn vào buổi sáng nhưng nhìn chung vẫn chơi và ăn uống tương đối bình thường. Nếu không được đánh giá và điều trị đúng, tình trạng có thể tái phát hoặc cần kiểm tra thêm để loại trừ bệnh phổi mạn tính.",
          "Phụ huynh không nên tự mua kháng sinh. Việc lựa chọn thuốc và thời gian điều trị phải do bác sĩ quyết định sau khi khám, vì ho có đờm không phải lúc nào cũng do vi khuẩn.",
          "5. Viêm mũi dị ứng hoặc viêm mũi xoang",
          "Trẻ bị viêm mũi dị ứng có thể hắt hơi, ngứa mũi, nghẹt mũi, chảy nước mũi và ho. Ho thường tăng khi nằm do dịch từ vùng mũi họng chảy xuống, đồng thời trẻ có thể thường xuyên khịt mũi hoặc hắng giọng.",
          "Những triệu chứng tăng khi tiếp xúc với bụi nhà, nấm mốc, lông thú hoặc thay đổi thời tiết có thể gợi ý yếu tố dị ứng. Dù vậy, phụ huynh không nên tự dùng thuốc dị ứng kéo dài khi chưa xác định nguyên nhân.",
          "6. Ho gà",
          "Ho gà có thể bắt đầu giống một đợt cảm lạnh thông thường với sổ mũi, sốt nhẹ và ho ít. Sau khoảng một đến hai tuần, trẻ có thể xuất hiện những cơn ho dồn dập, khó kiểm soát, đỏ mặt, nôn sau ho hoặc phát ra tiếng rít khi hít vào.",
          "Ở trẻ sơ sinh và trẻ nhỏ, biểu hiện đôi khi không điển hình. Trẻ có thể ngừng thở, tím tái hoặc khó thở mà không ho nhiều. Ho gà có thể kéo dài nhiều tuần và đặc biệt nguy hiểm với trẻ nhỏ chưa được tiêm chủng đầy đủ.",
          "Trẻ ho thành cơn dữ dội, nôn sau ho hoặc có tiếp xúc với người bị ho kéo dài nên được đưa đi khám sớm.",
          "7. Dị vật đường thở",
          "Dị vật cần được nghĩ đến khi trẻ đột ngột ho sặc, khó thở hoặc khò khè trong lúc ăn, chơi với đồ vật nhỏ hay cho đồ vật vào miệng.",
          "Sau cơn sặc ban đầu, trẻ có thể tạm ổn nhưng vẫn ho hoặc khò khè kéo dài. Một số trường hợp bị nhầm với viêm phế quản hoặc hen trong nhiều ngày. Khởi phát đột ngột mà trước đó trẻ không bị cảm lạnh là dấu hiệu rất quan trọng cần kể với bác sĩ.",
          "8. Trẻ bị sặc hoặc hít thức ăn vào đường thở",
          "Ho trong hoặc ngay sau khi bú, ăn, uống nước có thể liên quan đến rối loạn nuốt hoặc tình trạng thức ăn đi nhầm vào đường thở.",
          "Nguyên nhân này cần được lưu ý ở trẻ sinh non, trẻ có bệnh thần kinh, bất thường đường thở hoặc thường xuyên viêm phổi. Bác sĩ có thể phối hợp chuyên khoa hô hấp, tiêu hóa, tai mũi họng hoặc phục hồi chức năng để đánh giá khả năng nuốt.",
          "9. Thói quen ho hoặc tic",
          "Một số trẻ xuất hiện tiếng ho khan, hắng giọng hoặc ho thành tiếng lớn sau một đợt viêm hô hấp. Cơn ho có thể tăng khi trẻ căng thẳng hoặc được chú ý nhưng giảm khi trẻ tập trung vào hoạt động khác và thường biến mất lúc ngủ.",
          "Bác sĩ chỉ xem xét ho thói quen hoặc tic sau khi đã đánh giá, loại trừ các nguyên nhân thực thể phù hợp. Phụ huynh không nên trách mắng hoặc liên tục nhắc trẻ ngừng ho vì điều đó có thể khiến trẻ căng thẳng hơn.",
          "10. Một số nguyên nhân ít gặp hơn",
          "Ho kéo dài đôi khi liên quan đến:",
          "Lao phổi hoặc nhiễm trùng mạn tính.",
          "Giãn phế quản.",
          "Bệnh xơ nang.",
          "Bất thường bẩm sinh đường thở.",
          "Suy giảm miễn dịch.",
          "Bệnh phổi kẽ.",
          "Bệnh tim hoặc thần kinh ảnh hưởng đến hô hấp và nuốt.",
          "Những nguyên nhân này ít phổ biến hơn nhưng cần được xem xét khi trẻ chậm tăng trưởng, viêm phổi nhiều lần, ho ra máu, ngón tay dùi trống hoặc có bệnh nền.",
          "Ho khan và ho có đờm khác nhau thế nào?",
          "Mô tả tiếng ho giúp bác sĩ định hướng nguyên nhân.",
          "Ho khan không tạo cảm giác có dịch trong đường thở. Ho khan kéo dài có thể gặp sau nhiễm virus, trong hen, khi tiếp xúc chất kích thích hoặc ở trẻ có tic.",
          "Ho ướt nghe như có dịch nhầy trong ngực hoặc cổ họng. Trẻ nhỏ thường nuốt đờm nên phụ huynh không nhất thiết nhìn thấy đờm được khạc ra. Ho ướt hằng ngày trên bốn tuần cần được kiểm tra vì có thể liên quan đến viêm phế quản do vi khuẩn kéo dài hoặc bệnh phổi sinh mủ.",
          "Phụ huynh có thể quay một đoạn video ngắn khi trẻ ho để bác sĩ nghe tiếng ho, nhất là khi trẻ không ho trong lúc khám.",
          "Dấu hiệu nào cho thấy trẻ cần được kiểm tra sớm?",
          "Phụ huynh nên đưa trẻ đi khám khi:",
          "Ho hằng ngày kéo dài trên 4 tuần.",
          "Ho ướt hoặc có đờm kéo dài.",
          "Ho ngày càng tăng thay vì giảm dần.",
          "Ho tái phát nhiều lần trong năm.",
          "Ho về đêm hoặc khi vận động kèm khò khè.",
          "Ho thành cơn, nôn sau ho hoặc nghi ngờ ho gà.",
          "Ho xuất hiện đột ngột sau một lần sặc hoặc hóc.",
          "Trẻ thường ho, sặc trong lúc ăn uống.",
          "Trẻ sốt kéo dài hoặc sốt tái diễn.",
          "Trẻ mệt, biếng ăn, sụt cân hoặc chậm lớn.",
          "Trẻ từng bị viêm phổi nhiều lần.",
          "Ho ảnh hưởng rõ rệt đến giấc ngủ và sinh hoạt.",
          "Các dấu hiệu như khó thở, đau ngực, ho ra máu, chậm tăng trưởng, tiếng thở bất thường, khó ăn hoặc bất thường trên phim phổi đều được xem là những tín hiệu cần đánh giá kỹ hơn.",
          "Khi nào cần đưa trẻ đi cấp cứu?",
          "Không nên chờ đủ bốn tuần nếu trẻ có dấu hiệu nguy hiểm. Hãy đưa trẻ đến cơ sở y tế ngay khi xuất hiện:",
          "Khó thở, thở rút lõm lồng ngực hoặc thở gắng sức.",
          "Môi, lưỡi hoặc da tím tái.",
          "Trẻ lơ mơ, khó đánh thức hoặc phản ứng kém.",
          "Có những khoảng ngừng thở.",
          "Ho sặc đột ngột và không thể nói, khóc hoặc hít thở bình thường.",
          "Ho ra máu nhiều.",
          "Đau ngực dữ dội.",
          "Co giật.",
          "Không uống được, nôn liên tục hoặc có dấu hiệu mất nước.",
          "Trẻ sơ sinh ho kèm bỏ bú, khó thở hoặc tím tái.",
          "Đặc biệt với ho gà, trẻ sơ sinh có thể ngừng thở và tím tái thay vì xuất hiện tiếng ho điển hình. Khó thở sau các cơn ho dữ dội cũng là lý do cần được chăm sóc ngay.",
          "Bác sĩ sẽ kiểm tra những gì khi trẻ ho kéo dài?",
          "Trước tiên, bác sĩ sẽ hỏi về thời điểm bắt đầu ho, đặc điểm tiếng ho, triệu chứng đi kèm, lịch tiêm chủng và các yếu tố có thể kích hoạt cơn ho.",
          "Phụ huynh nên cho bác sĩ biết:",
          "Trẻ ho khan hay ho ướt.",
          "Ho nhiều vào thời điểm nào.",
          "Có sốt, khò khè, nôn hoặc khó thở không.",
          "Có từng sặc thức ăn hoặc đồ vật nhỏ không.",
          "Trẻ có tiếp xúc với khói thuốc, bụi hoặc người mắc bệnh hô hấp không.",
          "Trẻ có chậm tăng cân hoặc từng viêm phổi không.",
          "Các thuốc trẻ đã sử dụng.",
          "Bác sĩ sẽ khám đường thở, tai mũi họng, tim phổi và đánh giá tăng trưởng. Với ho hằng ngày trên bốn tuần, trẻ có thể được chỉ định chụp X-quang ngực và đo chức năng hô hấp nếu đủ khả năng phối hợp. Các xét nghiệm chuyên sâu hơn chỉ được lựa chọn khi bệnh sử hoặc kết quả khám gợi ý một nguyên nhân cụ thể.",
          "Phụ huynh nên chăm sóc trẻ như thế nào tại nhà?",
          "Khi trẻ không có dấu hiệu nguy hiểm, gia đình có thể:",
          "Cho trẻ uống đủ nước và tiếp tục ăn uống phù hợp.",
          "Giữ phòng ở thông thoáng.",
          "Vệ sinh mũi bằng phương pháp phù hợp nếu trẻ nghẹt mũi.",
          "Tránh khói thuốc lá, thuốc lá điện tử, mùi hóa chất và không khí ô nhiễm.",
          "Theo dõi nhiệt độ, nhịp thở, mức độ ăn uống và giấc ngủ.",
          "Ghi lại thời gian, hoàn cảnh xuất hiện cơn ho.",
          "Đưa trẻ tái khám nếu ho chuyển thành hằng ngày và kéo dài trên bốn tuần.",
          "Thuốc ho và thuốc thông mũi không kê đơn không được khuyến nghị dùng tùy tiện cho trẻ vì hiệu quả hạn chế và có thể gây tác dụng không mong muốn. Gia đình cũng không nên tự cho trẻ dùng kháng sinh, corticoid, thuốc hen hoặc thuốc chống trào ngược khi chưa có chỉ định.",
          "Mật ong không được dùng cho trẻ dưới 12 tháng tuổi vì nguy cơ ngộ độc botulinum. Với trẻ lớn hơn, phụ huynh vẫn nên hỏi nhân viên y tế trước khi sử dụng nếu trẻ có bệnh nền hoặc dễ sặc.",
          "Làm thế nào giúp bác sĩ xác định nguyên nhân nhanh hơn?",
          "Trước khi đưa trẻ đi khám, phụ huynh có thể chuẩn bị:",
          "Video ghi lại tiếng ho hoặc tiếng thở bất thường.",
          "Nhật ký sốt và số lần ho trong ngày.",
          "Danh sách thuốc trẻ đã dùng.",
          "Sổ tiêm chủng.",
          "Kết quả khám, xét nghiệm hoặc phim chụp trước đây.",
          "Thông tin về người trong gia đình đang ho kéo dài.",
          "Ghi chú về lần trẻ từng hóc, sặc hoặc nuốt dị vật.",
          "Không nên cố yêu cầu chụp phim, xét nghiệm máu hoặc dùng kháng sinh ngay từ đầu. Bác sĩ sẽ lựa chọn kiểm tra dựa trên đặc điểm cơn ho và dấu hiệu đi kèm để tránh những xét nghiệm không cần thiết."
        ]
      },
      {
        "heading": "Khám ho kéo dài ở trẻ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Ho sau cảm lạnh là tình trạng thường gặp và nhiều trường hợp có thể tự giảm. Tuy nhiên, trẻ ho hằng ngày trên bốn tuần, ho ướt kéo dài, khò khè tái diễn hoặc ho kèm sốt, khó thở và chậm tăng cân cần được kiểm tra.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, trẻ có thể được bác sĩ thăm khám, đánh giá đặc điểm cơn ho và tình trạng hô hấp. Tùy từng trường hợp, bác sĩ sẽ chỉ định xét nghiệm, chụp X-quang, đo chức năng hô hấp hoặc phối hợp với chuyên khoa Nhi, Hô hấp, Tai Mũi Họng và các chuyên khoa liên quan.",
          "Điều quan trọng không phải là tìm cách cắt cơn ho bằng mọi giá. Ho là một triệu chứng và chỉ cải thiện bền vững khi nguyên nhân phía sau được xác định, xử trí đúng cách.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "dinh-duong-cho-tre-sau-om-cha-me-nen-luu-y-gi": {
    "sourceFile": "28.Dinh dưỡng cho trẻ sau ốm cha mẹ nên lưu ý gì.docx",
    "title": "Dinh dưỡng cho trẻ sau ốm: Cha mẹ nên lưu ý gì để con hồi phục tốt?",
    "excerpt": "Sau một đợt sốt, viêm đường hô hấp, rối loạn tiêu hóa hoặc điều trị bệnh, trẻ thường mệt mỏi, ăn ít và chưa thể trở lại nhịp sinh hoạt bình thường ngay lập tức. Đây là lúc nhiều cha mẹ sốt ruột, tìm đủ món “bồi bổ” với mong muốn con nhanh lấy lại cân nặng.",
    "intro": [
      "Sau một đợt sốt, viêm đường hô hấp, rối loạn tiêu hóa hoặc điều trị bệnh, trẻ thường mệt mỏi, ăn ít và chưa thể trở lại nhịp sinh hoạt bình thường ngay lập tức. Đây là lúc nhiều cha mẹ sốt ruột, tìm đủ món “bồi bổ” với mong muốn con nhanh lấy lại cân nặng.",
      "Tuy nhiên, dinh dưỡng cho trẻ sau ốm không đơn giản là cho trẻ ăn thật nhiều. Điều quan trọng hơn là bù đủ nước, lựa chọn thực phẩm phù hợp, tăng khẩu phần từ từ và theo dõi khả năng dung nạp của trẻ.",
      "Vì sao trẻ thường biếng ăn sau khi ốm?",
      "Trong thời gian mắc bệnh, cơ thể trẻ phải sử dụng nhiều năng lượng để chống lại tác nhân gây bệnh và phục hồi các mô bị tổn thương. Sốt, ho, đau họng, nghẹt mũi, buồn nôn, tiêu chảy hoặc tác dụng không mong muốn của thuốc đều có thể khiến trẻ giảm cảm giác ngon miệng.",
      "Ngay cả khi các triệu chứng chính đã hết, trẻ vẫn có thể:",
      "Mệt, ít vận động và ngủ nhiều hơn.",
      "Ăn chậm hoặc ăn ít hơn bình thường.",
      "Nhạy cảm với mùi thức ăn.",
      "Dễ buồn nôn khi ăn quá nhiều.",
      "Thích món mềm, lỏng và dễ nuốt.",
      "Sụt một ít cân sau đợt bệnh.",
      "Tình trạng giảm ăn trong thời gian ngắn thường không quá đáng ngại nếu trẻ vẫn uống được, đi tiểu bình thường, tỉnh táo và mức độ ăn uống cải thiện dần. Sau khi khỏi bệnh, trẻ có thể cần được cung cấp thêm thức ăn để bù lại phần năng lượng và dinh dưỡng đã mất, nhưng việc tăng khẩu phần nên diễn ra nhẹ nhàng, không ép buộc."
    ],
    "sections": [
      {
        "heading": "Ưu tiên bù đủ nước cho trẻ",
        "paragraphs": [
          "Sau ốm, đặc biệt là sau sốt, nôn hoặc tiêu chảy, bù nước thường quan trọng hơn việc cố gắng cho trẻ ăn thật nhiều trong một bữa.",
          "Cha mẹ có thể cho trẻ uống từng ngụm nhỏ và chia nhiều lần trong ngày. Tùy độ tuổi và tình trạng sức khỏe, nguồn chất lỏng có thể gồm:",
          "Sữa mẹ hoặc sữa trẻ đang sử dụng.",
          "Nước lọc.",
          "Canh, súp hoặc cháo có độ lỏng phù hợp.",
          "Dung dịch bù nước và điện giải theo hướng dẫn của nhân viên y tế.",
          "Nước từ trái cây mềm, phù hợp với độ tuổi.",
          "Với trẻ đang bú mẹ, nên tiếp tục cho trẻ bú theo nhu cầu. Trẻ dưới 6 tháng tuổi không nên tự ý uống thêm nước hoặc sử dụng thực phẩm khác nếu chưa được bác sĩ tư vấn. Tổ chức Y tế Thế giới khuyến nghị trẻ được bú mẹ hoàn toàn trong 6 tháng đầu và tiếp tục bú mẹ cùng chế độ ăn bổ sung phù hợp sau đó.",
          "Nếu trẻ bị tiêu chảy, cha mẹ không nên tự ý ngừng cho ăn. Dung dịch oresol cần được pha đúng lượng nước ghi trên bao bì và sử dụng theo chỉ dẫn; pha quá đặc hoặc quá loãng đều có thể không an toàn. WHO khuyến nghị tiếp tục cho trẻ ăn, bú mẹ và sử dụng dung dịch bù nước đường uống trong điều trị tiêu chảy."
        ]
      },
      {
        "heading": "Chia nhỏ bữa ăn, không ép trẻ ăn hết",
        "paragraphs": [
          "Dạ dày của trẻ sau ốm đôi khi chưa sẵn sàng tiếp nhận một bữa lớn. Thay vì đặt trước mặt con một bát đầy và bắt ăn hết, cha mẹ nên chia khẩu phần thành nhiều bữa nhỏ.",
          "Có thể áp dụng nguyên tắc:",
          "Cho trẻ ăn lượng ít trong mỗi lần.",
          "Tăng số bữa chính và bữa phụ phù hợp.",
          "Để khoảng cách giữa các bữa đủ để trẻ cảm thấy đói.",
          "Tăng dần khẩu phần khi trẻ ăn tốt hơn.",
          "Dừng lại khi trẻ có biểu hiện no, buồn nôn hoặc khó chịu.",
          "Không nên vừa dọa, vừa ép hoặc cho trẻ xem điện thoại để “ăn cho xong”. Việc ép ăn có thể khiến trẻ căng thẳng, sợ bữa ăn và làm tình trạng biếng ăn kéo dài hơn.",
          "Một bữa trẻ chỉ ăn được vài thìa chưa chắc đã đáng lo. Hãy nhìn vào tổng lượng thức ăn, nước uống và trạng thái của trẻ trong cả ngày thay vì đánh giá dựa trên một bữa riêng lẻ.",
          "Bữa ăn của trẻ sau ốm cần có những nhóm chất nào?",
          "Trẻ không cần một loại thực phẩm đặc biệt để “hồi sức thần tốc”. Một chế độ ăn đa dạng, đủ năng lượng và phù hợp với độ tuổi thường có giá trị hơn các món bồi bổ đắt tiền."
        ]
      },
      {
        "heading": "Chất bột đường cung cấp năng lượng",
        "paragraphs": [
          "Cơm, cháo, mì, bún, khoai, bánh mì hoặc ngũ cốc giúp cung cấp năng lượng cho trẻ vận động và phục hồi.",
          "Nếu trẻ còn mệt hoặc đau họng, cha mẹ có thể chế biến mềm hơn bình thường. Khi trẻ khỏe dần, nên chuyển từ cháo loãng sang cháo đặc, cơm mềm và thức ăn gần với chế độ ăn hằng ngày để tránh kéo dài thói quen chỉ ăn đồ xay nhuyễn."
        ]
      },
      {
        "heading": "Chất đạm hỗ trợ phục hồi cơ thể",
        "paragraphs": [
          "Thịt, cá, trứng, sữa, đậu phụ và các loại đậu là nguồn cung cấp protein. Chất đạm tham gia vào quá trình tạo mô, duy trì khối cơ và hỗ trợ hoạt động của hệ miễn dịch.",
          "Cha mẹ nên lựa chọn thực phẩm trẻ đã từng ăn và dung nạp tốt. Không cần cho trẻ ăn quá nhiều thịt hoặc trứng trong một bữa vì quan niệm càng nhiều đạm thì càng nhanh khỏe."
        ]
      },
      {
        "heading": "Chất béo giúp tăng năng lượng cho khẩu phần",
        "paragraphs": [
          "Một lượng dầu hoặc chất béo phù hợp có thể giúp bữa ăn giàu năng lượng hơn mà không làm tăng quá nhiều thể tích thức ăn. Điều này khá hữu ích với trẻ đang ăn ít.",
          "Tuy nhiên, không nên cho quá nhiều dầu mỡ, món chiên rán hoặc thức ăn nhiều chất béo trong cùng một bữa, nhất là khi trẻ còn buồn nôn, đầy bụng hoặc vừa bị rối loạn tiêu hóa."
        ]
      },
      {
        "heading": "Rau củ và trái cây cung cấp vitamin, khoáng chất",
        "paragraphs": [
          "Rau củ và trái cây giúp bổ sung vitamin, khoáng chất và chất xơ. Cha mẹ có thể lựa chọn loại mềm, chín, dễ ăn như chuối, đu đủ, bơ, xoài chín hoặc rau củ nấu mềm.",
          "Không nên chỉ cho trẻ uống nước ép thay cho việc ăn trái cây. Nước ép thường chứa ít chất xơ và trẻ có thể uống quá nhiều đường mà vẫn không nhận đủ các nhóm dinh dưỡng khác.",
          "Một chế độ ăn lành mạnh nên đa dạng thực phẩm, cân đối giữa nguồn tinh bột, chất đạm, chất béo, rau củ và trái cây thay vì phụ thuộc vào một món duy nhất."
        ]
      },
      {
        "heading": "Lựa chọn món ăn theo triệu chứng còn lại của trẻ",
        "paragraphs": [
          "Không có một thực đơn chung phù hợp với tất cả trẻ sau ốm. Cha mẹ nên dựa vào triệu chứng còn lại và khả năng ăn uống thực tế của con."
        ]
      },
      {
        "heading": "Trẻ còn đau họng hoặc ho",
        "paragraphs": [
          "Nên ưu tiên thức ăn mềm, ấm vừa phải và dễ nuốt như cháo đặc, súp, mì mềm, trứng hấp hoặc khoai nghiền. Tránh đồ quá nóng, quá cay, quá chua hoặc cứng, giòn nếu khiến trẻ đau khi nuốt."
        ]
      },
      {
        "heading": "Trẻ vừa nôn",
        "paragraphs": [
          "Cho trẻ uống từng ngụm nhỏ, tránh uống một lượng lớn cùng lúc. Khi trẻ đã giữ được nước và không tiếp tục nôn, có thể thử một lượng nhỏ thức ăn mềm, ít dầu mỡ rồi tăng dần.",
          "Nếu trẻ nôn liên tục, nôn ra dịch xanh, nôn có máu, đau bụng nhiều hoặc không giữ được bất kỳ lượng nước nào, cần đưa trẻ đi khám."
        ]
      },
      {
        "heading": "Trẻ vừa bị tiêu chảy",
        "paragraphs": [
          "Tiếp tục cho trẻ bú và ăn theo khả năng. Có thể lựa chọn cơm, cháo, khoai, thịt nạc, trứng, chuối hoặc thực phẩm quen thuộc được nấu chín kỹ.",
          "Không nên bắt trẻ nhịn ăn hoặc chỉ uống nước cháo kéo dài vì điều này có thể khiến trẻ thiếu năng lượng và chậm phục hồi. Việc sử dụng kẽm, men vi sinh hoặc thuốc điều trị cần tuân theo tư vấn của bác sĩ, không tự dùng theo đơn cũ."
        ]
      },
      {
        "heading": "Trẻ vừa phẫu thuật hoặc điều trị bệnh đặc biệt",
        "paragraphs": [
          "Trẻ sau phẫu thuật, trẻ có bệnh gan, thận, tim mạch, rối loạn chuyển hóa, dị ứng thực phẩm hoặc suy dinh dưỡng có thể cần chế độ ăn riêng. Cha mẹ nên ưu tiên hướng dẫn trong giấy ra viện và tư vấn của bác sĩ điều trị thay vì áp dụng thực đơn truyền miệng."
        ]
      },
      {
        "heading": "Gợi ý một ngày ăn uống cho trẻ trên 1 tuổi",
        "paragraphs": [
          "Thực đơn cần được điều chỉnh theo tuổi, khẩu vị, khả năng nhai nuốt, tiền sử dị ứng và hướng dẫn của bác sĩ. Cha mẹ có thể tham khảo cách sắp xếp:",
          "Bữa sáng: Cháo thịt hoặc trứng, kèm rau củ nấu mềm.",
          "Bữa phụ: Sữa, sữa chua hoặc trái cây mềm.",
          "Bữa trưa: Cơm mềm, cá hoặc thịt, rau và canh.",
          "Bữa phụ chiều: Khoai, bánh mềm, sữa hoặc trái cây.",
          "Bữa tối: Cơm, mì hoặc cháo đặc cùng nguồn đạm và rau.",
          "Trước khi ngủ: Sữa nếu phù hợp với thói quen và nhu cầu của trẻ.",
          "Không nhất thiết ngày nào cũng phải đủ đúng các món trên. Cha mẹ có thể thay đổi nguyên liệu để bữa ăn đa dạng và sử dụng thực phẩm sẵn có trong gia đình."
        ]
      },
      {
        "heading": "Cố gắng “bù cân” trong vài ngày",
        "paragraphs": [
          "Tăng khẩu phần quá nhanh có thể khiến trẻ đầy bụng, nôn hoặc càng sợ ăn. Cân nặng cần thời gian để phục hồi, không nên biến mỗi bữa ăn thành một cuộc kiểm tra."
        ]
      },
      {
        "heading": "Chỉ cho trẻ ăn cháo loãng",
        "paragraphs": [
          "Cháo quá loãng chứa nhiều nước nhưng có thể không cung cấp đủ năng lượng. Khi trẻ đã ăn được, nên tăng dần độ đặc và bổ sung thịt, cá, trứng, rau cùng lượng dầu phù hợp."
        ]
      },
      {
        "heading": "Cho uống quá nhiều sữa thay bữa chính",
        "paragraphs": [
          "Sữa là một phần của chế độ ăn nhưng không nên thay thế hoàn toàn các bữa ăn đối với trẻ đã đến tuổi ăn đa dạng. Uống quá nhiều sữa trước bữa có thể làm trẻ no và từ chối thức ăn."
        ]
      },
      {
        "heading": "Tự ý bổ sung vitamin hoặc thuốc “kích ăn”",
        "paragraphs": [
          "Không phải trẻ nào sau ốm cũng cần dùng vitamin tổng hợp, kẽm, sắt, men vi sinh hoặc thuốc kích thích ăn uống. Việc bổ sung không đúng loại hoặc sai liều có thể gây tác dụng không mong muốn và che lấp nguyên nhân thật sự của tình trạng biếng ăn."
        ]
      },
      {
        "heading": "Dùng lại đơn thuốc cũ",
        "paragraphs": [
          "Không nên tự cho trẻ uống lại kháng sinh, thuốc tiêu hóa hoặc thuốc từ lần bệnh trước. Cùng một biểu hiện nhưng nguyên nhân ở mỗi lần mắc bệnh có thể khác nhau.",
          "Cha mẹ nên theo dõi những gì trong giai đoạn hồi phục?",
          "Thay vì chỉ quan tâm đến số cân, cha mẹ nên theo dõi toàn diện:",
          "Trẻ có uống được không?",
          "Số lần đi tiểu có bình thường không?",
          "Trẻ có tỉnh táo và tương tác tốt không?",
          "Mức độ ăn có tăng dần không?",
          "Trẻ có tiếp tục sốt, nôn hoặc tiêu chảy không?",
          "Giấc ngủ và hoạt động có dần trở lại bình thường không?",
          "Cân nặng có tiếp tục giảm không?",
          "Có thể ghi lại lượng ăn uống, số lần nôn, số lần đi ngoài và nhiệt độ nếu trẻ vừa trải qua một đợt bệnh nặng. Những thông tin này sẽ giúp bác sĩ đánh giá thuận lợi hơn khi trẻ cần tái khám.",
          "Khi nào cần đưa trẻ đi khám?",
          "Cha mẹ nên đưa trẻ đến cơ sở y tế sớm nếu tình trạng ăn uống không cải thiện, trẻ tiếp tục sút cân hoặc có biểu hiện khác thường.",
          "Đặc biệt, cần đi khám ngay khi trẻ:",
          "Không uống được hoặc nôn mọi thứ vừa uống.",
          "Tiểu ít rõ rệt hoặc tã khô lâu hơn bình thường.",
          "Khô môi, khô miệng, khóc không có nước mắt.",
          "Mắt trũng hoặc thóp trũng ở trẻ nhỏ.",
          "Lừ đừ, khó đánh thức hoặc kích thích bất thường.",
          "Thở nhanh, khó thở, rút lõm lồng ngực hoặc tím tái.",
          "Co giật hoặc có biểu hiện rối loạn ý thức.",
          "Sốt tái phát hoặc sốt kéo dài.",
          "Đau bụng nhiều, đi ngoài có máu hoặc nôn ra máu.",
          "Tiếp tục tiêu chảy, nôn nhiều hoặc có dấu hiệu bệnh nặng trở lại.",
          "Tiểu ít, không có nước mắt khi khóc, mắt trũng, buồn ngủ bất thường hoặc thở nhanh có thể là dấu hiệu mất nước nghiêm trọng và cần được đánh giá y tế kịp thời."
        ]
      },
      {
        "heading": "Chăm sóc dinh dưỡng cho trẻ sau ốm tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Phần lớn trẻ sẽ ăn uống và sinh hoạt tốt dần sau khi bệnh được kiểm soát. Tuy nhiên, nếu trẻ biếng ăn kéo dài, chậm tăng cân, thường xuyên mắc bệnh hoặc có dấu hiệu thiếu dinh dưỡng, cha mẹ không nên chỉ tiếp tục đổi món tại nhà.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, trẻ có thể được bác sĩ chuyên khoa Nhi thăm khám, đánh giá tình trạng hiện tại, kiểm tra tăng trưởng và tìm nguyên nhân khiến trẻ ăn kém. Tùy từng trường hợp, bác sĩ có thể chỉ định xét nghiệm hoặc phối hợp tư vấn dinh dưỡng để xây dựng chế độ chăm sóc phù hợp hơn.",
          "Dinh dưỡng sau ốm nên được thực hiện theo nguyên tắc đủ nước, đủ chất, chia nhỏ bữa và tăng dần theo khả năng của trẻ. Cha mẹ không cần quá sốt ruột khi con chưa ăn khỏe ngay, nhưng cũng không nên chủ quan nếu trẻ mệt hơn, tiếp tục sút cân hoặc xuất hiện dấu hiệu mất nước và bệnh nặng.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "tiem-chung-cho-tre-lich-tiem-va-nhung-dieu-can-chuan-bi": {
    "sourceFile": "29. Tiêm chủng cho trẻ lịch tiêm và những điều cần chuẩn bị.docx",
    "title": "Tiêm chủng cho trẻ: Lịch tiêm và những điều cha mẹ cần chuẩn bị",
    "excerpt": "Từ khi mới chào đời, trẻ đã bắt đầu hành trình làm quen với thế giới bên ngoài – nơi có không ít virus và vi khuẩn gây bệnh. Tiêm chủng giúp cơ thể trẻ “tập nhận diện” một số tác nhân truyền nhiễm, từ đó chủ động tạo miễn dịch bảo vệ.",
    "intro": [
      "Từ khi mới chào đời, trẻ đã bắt đầu hành trình làm quen với thế giới bên ngoài – nơi có không ít virus và vi khuẩn gây bệnh. Tiêm chủng giúp cơ thể trẻ “tập nhận diện” một số tác nhân truyền nhiễm, từ đó chủ động tạo miễn dịch bảo vệ.",
      "Tuy nhiên, lịch tiêm của trẻ có khá nhiều mốc. Chỉ cần bận rộn một chút, cha mẹ có thể quên mất con đã tiêm mũi nào, còn thiếu mũi nào hoặc có cần tiêm bù hay không. Việc hiểu lịch tiêm cơ bản, chuẩn bị đầy đủ trước khi đến cơ sở y tế và theo dõi đúng cách sau tiêm sẽ giúp buổi tiêm chủng diễn ra thuận lợi hơn.",
      "Vì sao trẻ cần được tiêm chủng đầy đủ và đúng lịch?",
      "Trẻ nhỏ có hệ miễn dịch chưa hoàn thiện nên dễ mắc bệnh truyền nhiễm và có nguy cơ gặp biến chứng nặng hơn người lớn. Vắc xin giúp hệ miễn dịch nhận biết tác nhân gây bệnh trước khi trẻ thực sự tiếp xúc với chúng.",
      "Mỗi loại vắc xin có số liều, khoảng cách giữa các liều và thời điểm tiêm khác nhau. Một số loại cần nhiều mũi cơ bản để hình thành miễn dịch, sau đó cần thêm mũi nhắc để duy trì khả năng bảo vệ. Tiêm chậm có thể khiến trẻ chưa có đủ miễn dịch trong giai đoạn nguy cơ mắc bệnh cao.",
      "Tiêm đúng lịch không có nghĩa là cha mẹ phải tự ghi nhớ tất cả các mốc. Điều quan trọng là giữ đầy đủ sổ hoặc phiếu tiêm chủng và đưa trẻ đến cơ sở y tế để được rà soát lịch định kỳ."
    ],
    "sections": [
      {
        "heading": "Lịch tiêm chủng cơ bản cho trẻ theo từng độ tuổi",
        "paragraphs": [
          "Bảng dưới đây là lịch tham khảo theo Chương trình Tiêm chủng mở rộng tại Việt Nam. Lịch thực tế có thể được điều chỉnh tùy theo loại vắc xin, tiền sử tiêm chủng, tình trạng sức khỏe, hướng dẫn của nhà sản xuất và kế hoạch triển khai tại từng địa phương.",
          "Lịch tiêm cơ bản hiện hành gồm viêm gan B và BCG ở giai đoạn sơ sinh; ba liều vắc xin phối hợp và bại liệt uống khi trẻ 2, 3 và 4 tháng; bại liệt tiêm lúc 5 và 9 tháng; sởi lúc 9 tháng; viêm não Nhật Bản từ 12 tháng; các mũi nhắc ở 18 tháng và 7 tuổi.",
          "Từ năm 2026, vắc xin Rota được triển khai trong Chương trình Tiêm chủng mở rộng trên toàn quốc. Lịch của vắc xin Rota trong chương trình gồm hai liều, bắt đầu khi trẻ đủ 2 tháng tuổi, liều sau cách liều đầu ít nhất một tháng và cần hoàn thành trước khi trẻ đủ 6 tháng tuổi.",
          "Vắc xin phế cầu đã được bổ sung vào danh mục của Chương trình Tiêm chủng mở rộng từ năm 2026. Tuy nhiên, phạm vi triển khai được mở rộng dần tùy theo địa phương và nguồn lực thực tế. Vì vậy, cha mẹ nên liên hệ cơ sở tiêm chủng để kiểm tra con có thuộc nhóm được tiếp nhận vắc xin này tại thời điểm đăng ký hay không.",
          "Ngoài lịch tiêm chủng mở rộng, trẻ có thể cần những vắc xin nào?",
          "Bên cạnh các vắc xin trong Chương trình Tiêm chủng mở rộng, trẻ có thể được tư vấn thêm một số vắc xin dịch vụ tùy theo độ tuổi, nguy cơ mắc bệnh và tiền sử tiêm trước đó, chẳng hạn:",
          "Vắc xin phối hợp 6 trong 1.",
          "Vắc xin phế cầu.",
          "Vắc xin cúm mùa.",
          "Vắc xin thủy đậu.",
          "Vắc xin sởi – quai bị – rubella.",
          "Vắc xin viêm gan A.",
          "Vắc xin não mô cầu.",
          "Vắc xin thương hàn trong trường hợp phù hợp.",
          "Vắc xin HPV khi trẻ đến độ tuổi được khuyến cáo.",
          "Vắc xin 6 trong 1 được sử dụng tại các cơ sở tiêm chủng dịch vụ, giúp phòng bạch hầu, ho gà, uốn ván, viêm gan B, bệnh do vi khuẩn Hib và bại liệt trong cùng một mũi tiêm. Lịch cụ thể phụ thuộc vào loại vắc xin và hướng dẫn của nhà sản xuất; thông thường gồm các liều cơ bản trong năm đầu đời và một liều nhắc trong năm tuổi thứ hai.",
          "Không phải trẻ nào cũng cần cùng một danh sách vắc xin. Cha mẹ không nên tự ghép lịch từ nhiều nguồn trên mạng vì mỗi sản phẩm có thể có giới hạn tuổi, số liều và khoảng cách tiêm khác nhau.",
          "Tiêm chủng mở rộng và tiêm chủng dịch vụ khác nhau như thế nào?",
          "Tiêm chủng mở rộng là chương trình do Nhà nước triển khai nhằm cung cấp miễn phí các vắc xin cơ bản theo lịch quốc gia. Tiêm chủng dịch vụ giúp gia đình có thêm lựa chọn về loại vắc xin, vắc xin phối hợp hoặc những bệnh chưa được triển khai rộng rãi trong chương trình miễn phí.",
          "Hai hình thức này không đối lập với nhau. Cha mẹ có thể sử dụng lịch tiêm chủng mở rộng, lịch dịch vụ hoặc phối hợp cả hai, miễn là hồ sơ được theo dõi thống nhất và trẻ được tiêm đủ thành phần cần thiết.",
          "Điều nên tránh là tự ý đổi qua lại giữa các loại vắc xin mà không cung cấp đầy đủ lịch sử tiêm cho bác sĩ. Trước mỗi mũi tiêm, nhân viên y tế cần biết chính xác tên vắc xin, ngày tiêm và phản ứng sau những lần tiêm trước.",
          "Trước khi đưa trẻ đi tiêm, cha mẹ cần chuẩn bị gì?"
        ]
      },
      {
        "heading": "Mang theo đầy đủ hồ sơ tiêm chủng",
        "paragraphs": [
          "Cha mẹ nên chuẩn bị:",
          "Sổ hoặc phiếu tiêm chủng của trẻ.",
          "Giấy ra viện hoặc hồ sơ sơ sinh nếu trẻ còn nhỏ.",
          "Đơn thuốc và hồ sơ bệnh lý đang điều trị.",
          "Kết quả khám chuyên khoa gần đây nếu trẻ có bệnh nền.",
          "Thông tin về những mũi tiêm đã thực hiện tại cơ sở khác.",
          "Một tấm ảnh chụp lọ vắc xin hoặc tin nhắn hẹn tiêm đôi khi chưa đủ để xác định đầy đủ thành phần và lịch tiêm. Vì vậy, nên giữ giấy xác nhận sau mỗi lần tiêm."
        ]
      },
      {
        "heading": "Theo dõi sức khỏe của trẻ trước ngày tiêm",
        "paragraphs": [
          "Cha mẹ cần quan sát xem trẻ có sốt, ho nhiều, khó thở, nôn, tiêu chảy, phát ban, bú kém hoặc mệt khác thường hay không. Nếu trẻ đang dùng thuốc, vừa điều trị bệnh, vừa nhập viện hoặc mới sử dụng chế phẩm miễn dịch, cần thông báo cho bác sĩ.",
          "Không nên tự quyết định rằng trẻ “hơi sổ mũi nên chắc chắn không tiêm được”, nhưng cũng không nên giấu triệu chứng để trẻ được tiêm đúng ngày. Bác sĩ sẽ khám sàng lọc và kết luận trẻ đủ điều kiện, cần tạm hoãn hay cần được đánh giá tại bệnh viện."
        ]
      },
      {
        "heading": "Ghi nhớ tiền sử dị ứng và phản ứng sau tiêm",
        "paragraphs": [
          "Hãy báo với nhân viên y tế nếu trẻ từng:",
          "Phản vệ hoặc có phản ứng nghiêm trọng sau tiêm.",
          "Sốt cao, co giật hoặc khó thở sau một mũi trước đó.",
          "Dị ứng thuốc, thực phẩm, sữa hoặc các dị nguyên khác.",
          "Mắc bệnh tim, phổi, thần kinh, máu, ung thư hoặc suy giảm miễn dịch.",
          "Sinh non, nhẹ cân hoặc có bệnh lý sơ sinh cần theo dõi.",
          "Trẻ có bệnh nền hoặc tiền sử phản ứng đặc biệt có thể cần được khám sàng lọc và tiêm tại bệnh viện để bác sĩ chuyên khoa phối hợp đánh giá khi cần."
        ]
      },
      {
        "heading": "Cho trẻ ăn uống và nghỉ ngơi bình thường",
        "paragraphs": [
          "Trẻ không cần nhịn đói trước khi tiêm chủng. Cha mẹ nên cho con ăn hoặc bú như thường lệ, tránh để trẻ quá đói, quá no hoặc thiếu ngủ.",
          "Nên mặc quần áo rộng, dễ bộc lộ vị trí tiêm. Với trẻ nhỏ, cha mẹ có thể mang theo tã, khăn, sữa và một món đồ chơi quen thuộc để giúp con bớt căng thẳng.",
          "Không nên tự cho trẻ uống thuốc hạ sốt hoặc thuốc chống dị ứng trước tiêm khi chưa có chỉ định của nhân viên y tế.",
          "Quy trình tiêm chủng cho trẻ thường gồm những bước nào?",
          "Một buổi tiêm chủng thường bắt đầu bằng việc tiếp nhận và kiểm tra hồ sơ. Sau đó, trẻ được khám sàng lọc, đo thân nhiệt, khai thác bệnh sử, tiền sử dị ứng và phản ứng sau các mũi trước.",
          "Nếu trẻ đủ điều kiện, nhân viên y tế sẽ tư vấn loại vắc xin, bệnh được phòng ngừa, số liều, phản ứng có thể gặp và thời điểm tiêm tiếp theo. Sau khi tiêm, thông tin cần được ghi lại đầy đủ vào hồ sơ để tiện theo dõi lâu dài.",
          "Tại cơ sở tiêm chủng trong bệnh viện, bác sĩ khám sàng lọc có thể phối hợp với bác sĩ chuyên khoa để đánh giá những trẻ có bệnh nền, suy giảm miễn dịch, tiền sử dị ứng hoặc phản ứng sau tiêm cần thận trọng.",
          "Sau tiêm, trẻ cần được theo dõi như thế nào?",
          "Sau khi tiêm, trẻ cần ở lại điểm tiêm ít nhất 30 phút để được theo dõi. Cha mẹ không nên tranh thủ rời đi sớm dù trẻ đang chơi và chưa có biểu hiện bất thường.",
          "Khi về nhà, nên tiếp tục theo dõi trẻ trong 1–2 ngày đầu, bao gồm:",
          "Tinh thần và mức độ tỉnh táo.",
          "Khả năng bú, ăn và uống.",
          "Nhịp thở và màu da.",
          "Nhiệt độ cơ thể.",
          "Tình trạng phát ban.",
          "Mức độ đau, đỏ hoặc sưng tại vị trí tiêm.",
          "Sốt nhẹ, quấy khóc hoặc sưng đau nhẹ tại chỗ tiêm có thể xuất hiện và thường giảm dần trong thời gian ngắn. Cha mẹ nên đo nhiệt độ, cho trẻ uống đủ nước hoặc bú mẹ và sử dụng thuốc hạ sốt khi có hướng dẫn phù hợp từ nhân viên y tế.",
          "Không đắp lá, chườm nóng, bôi dầu, đắp khoai hoặc thoa thuốc không rõ thành phần lên vị trí tiêm. Không tự ý dùng kháng sinh hoặc thuốc chống viêm vì thấy chỗ tiêm hơi đỏ.",
          "Dấu hiệu nào sau tiêm cần đưa trẻ đến cơ sở y tế ngay?",
          "Cha mẹ cần đưa trẻ đi khám hoặc liên hệ cấp cứu nếu xuất hiện một trong các biểu hiện sau:",
          "Khó thở, thở rít, tím môi hoặc tím tái.",
          "Sưng môi, sưng mặt, sưng lưỡi hoặc nổi ban nhanh toàn thân.",
          "Lừ đừ, khó đánh thức, mệt lả hoặc mất phản ứng.",
          "Sốt từ 39°C trở lên hoặc sốt kèm co giật.",
          "Khóc thét kéo dài, quấy khóc khác thường.",
          "Bú kém, bỏ bú hoặc nôn liên tục.",
          "Co giật, yếu tay chân hoặc có biểu hiện thần kinh bất thường.",
          "Vị trí tiêm sưng đỏ lan rộng, đau tăng dần hoặc chảy dịch.",
          "Bất kỳ biểu hiện nào khiến cha mẹ cảm thấy trẻ khác hẳn bình thường.",
          "Bộ Y tế khuyến cáo trẻ có sốt cao, co giật, tím tái, khó thở, li bì, mệt lả hoặc bỏ bú sau tiêm cần được đưa đến cơ sở y tế để thăm khám và xử trí kịp thời",
          "Trẻ bị lỡ lịch tiêm có phải tiêm lại từ đầu không?",
          "Khi trẻ bị lỡ một hoặc nhiều mũi, cha mẹ không nên tự bỏ luôn phần còn lại, cũng không nên tự kết luận phải tiêm lại toàn bộ từ đầu.",
          "Hãy mang tất cả hồ sơ hiện có đến cơ sở tiêm chủng. Bác sĩ sẽ căn cứ vào:",
          "Tuổi hiện tại của trẻ.",
          "Những vắc xin đã tiêm.",
          "Khoảng cách giữa các mũi.",
          "Loại vắc xin đã sử dụng.",
          "Tình trạng sức khỏe hiện tại.",
          "Giới hạn tuổi của từng sản phẩm.",
          "Từ đó, trẻ sẽ được xây dựng lịch tiêm bù phù hợp. Hướng dẫn hiện hành đã bổ sung lịch tiêm cho những trường hợp tiêm chậm, chưa đủ liều hoặc không rõ tiền sử tiêm chủng.",
          "Khi nào nên lựa chọn tiêm chủng tại bệnh viện?",
          "Tiêm chủng tại bệnh viện có thể phù hợp với trẻ:",
          "Sinh non, nhẹ cân hoặc có tiền sử điều trị sơ sinh.",
          "Đang được theo dõi bệnh mạn tính.",
          "Có bệnh tim, phổi, thần kinh, máu hoặc suy giảm miễn dịch.",
          "Có tiền sử dị ứng nhiều loại thức ăn hoặc thuốc.",
          "Từng có phản ứng bất thường sau tiêm.",
          "Có lịch tiêm phức tạp, thiếu hồ sơ hoặc cần tiêm bù nhiều mũi.",
          "Cần bác sĩ chuyên khoa phối hợp đánh giá trước khi tiêm.",
          "Khám sàng lọc tại bệnh viện giúp bác sĩ đánh giá toàn diện tình trạng sức khỏe, tham vấn chuyên khoa khi cần và quyết định trẻ đủ điều kiện tiêm, cần tạm hoãn hay cần thay đổi kế hoạch."
        ]
      },
      {
        "heading": "Dịch vụ tiêm chủng cho trẻ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi đưa trẻ đến Bệnh viện Đa khoa Hồng Phúc, cha mẹ có thể được hỗ trợ kiểm tra lịch sử tiêm, rà soát các mũi còn thiếu và tư vấn lịch phù hợp với tuổi cũng như tình trạng sức khỏe của trẻ.",
          "Trước khi tiêm, trẻ được khám sàng lọc và cha mẹ cần cung cấp đầy đủ thông tin về bệnh đang mắc, thuốc đang sử dụng, tiền sử dị ứng và phản ứng sau những lần tiêm trước. Với trẻ có bệnh lý đặc biệt, bác sĩ có thể phối hợp đánh giá chuyên khoa trước khi đưa ra chỉ định.",
          "Danh mục và nguồn cung vắc xin có thể thay đổi theo từng thời điểm. Vì vậy, gia đình nên liên hệ trước với Bệnh viện Đa khoa Hồng Phúc để xác nhận loại vắc xin, lịch tiếp nhận và hồ sơ cần mang theo.",
          "Tiêm chủng là một hành trình kéo dài nhiều năm chứ không chỉ gói gọn trong vài mũi đầu đời. Giữ hồ sơ cẩn thận, đưa trẻ đi tiêm đúng lịch và theo dõi sát sau mỗi mũi sẽ giúp cha mẹ chủ động hơn trong việc bảo vệ sức khỏe của con.",
          "Thông tin trong bài viết mang tính chất tham khảo. Lịch tiêm cụ thể cần được bác sĩ hoặc nhân viên y tế điều chỉnh theo độ tuổi, tiền sử tiêm chủng, tình trạng sức khỏe và loại vắc xin sử dụng."
        ]
      }
    ]
  },
  "kham-so-sinh-sau-sinh-nhung-moc-cha-me-khong-nen-bo-lo": {
    "sourceFile": "30.Khám sơ sinh sau sinh những mốc cha mẹ không nên bỏ lỡ.docx",
    "title": "Khám sơ sinh sau sinh: Những mốc cha mẹ không nên bỏ lỡ",
    "excerpt": "Sau khi em bé chào đời, nhiều gia đình thường nghĩ rằng chỉ cần trẻ bú được, ngủ ngoan và không sốt là có thể yên tâm. Tuy nhiên, giai đoạn sơ sinh là thời điểm cơ thể trẻ phải thích nghi nhanh với môi trường bên ngoài, từ hô hấp, tuần hoàn, điều hòa thân nhiệt đến ăn uống và tiêu hóa.",
    "intro": [
      "Sau khi em bé chào đời, nhiều gia đình thường nghĩ rằng chỉ cần trẻ bú được, ngủ ngoan và không sốt là có thể yên tâm. Tuy nhiên, giai đoạn sơ sinh là thời điểm cơ thể trẻ phải thích nghi nhanh với môi trường bên ngoài, từ hô hấp, tuần hoàn, điều hòa thân nhiệt đến ăn uống và tiêu hóa.",
      "Một số vấn đề như vàng da, giảm cân quá mức, bú không hiệu quả, nhiễm trùng, bệnh tim bẩm sinh hoặc rối loạn chuyển hóa có thể chưa biểu hiện rõ ngay sau sinh. Vì vậy, khám sơ sinh đúng mốc giúp bác sĩ đánh giá quá trình thích nghi của trẻ, kiểm tra kết quả sàng lọc và hướng dẫn cha mẹ chăm sóc bé an toàn tại nhà.",
      "Việc theo dõi cũng cần có sự phối hợp giữa Sản khoa và Nhi khoa. Thông tin về thai kỳ, cuộc sinh và sức khỏe của mẹ có thể giúp bác sĩ nhi khoa nhận diện sớm những nguy cơ ảnh hưởng đến em bé.",
      "Khám sơ sinh là gì?",
      "Khám sơ sinh là quá trình bác sĩ kiểm tra sức khỏe của trẻ trong những ngày và tuần đầu sau khi chào đời.",
      "Nội dung khám có thể bao gồm:",
      "Kiểm tra nhịp thở, nhịp tim và thân nhiệt.",
      "Quan sát màu da, mức độ tỉnh táo và phản xạ của trẻ.",
      "Đánh giá khả năng bú và nuốt.",
      "Kiểm tra cân nặng, chiều dài và vòng đầu.",
      "Khám tim, phổi, bụng, da, mắt, tai và miệng.",
      "Kiểm tra rốn, cơ quan sinh dục ngoài và hậu môn.",
      "Đánh giá trương lực cơ, vận động và một số phản xạ sơ sinh.",
      "Theo dõi tình trạng vàng da.",
      "Rà soát tiêm chủng và các xét nghiệm sàng lọc sơ sinh.",
      "Hướng dẫn cha mẹ về bú mẹ, giấc ngủ và chăm sóc tại nhà.",
      "Không phải lần khám nào cũng cần xét nghiệm hoặc chẩn đoán hình ảnh. Bác sĩ sẽ lựa chọn phương pháp kiểm tra dựa trên tuổi của trẻ, tình trạng lúc sinh và các dấu hiệu ghi nhận được khi thăm khám.",
      "Vì sao trẻ cần được theo dõi sát sau sinh?",
      "Những ngày đầu sau sinh là giai đoạn trẻ chuyển từ việc nhận oxy và dinh dưỡng qua nhau thai sang tự thở, bú và duy trì thân nhiệt.",
      "Phần lớn trẻ thích nghi thuận lợi. Tuy nhiên, một số vấn đề chỉ xuất hiện sau vài giờ hoặc vài ngày, chẳng hạn:",
      "Vàng da tăng dần.",
      "Hạ đường huyết.",
      "Bú kém hoặc mất nước.",
      "Nhiễm trùng sơ sinh.",
      "Khó thở.",
      "Dị tật tim bẩm sinh chưa biểu hiện rõ.",
      "Giảm cân nhiều.",
      "Bất thường chuyển hóa hoặc nội tiết.",
      "Khiếm thính bẩm sinh.",
      "Tổ chức Y tế Thế giới khuyến nghị trẻ được chăm sóc sau sinh trong vòng 24 giờ đầu, sau đó có thêm các lần liên hệ hoặc kiểm tra trong khoảng 48–72 giờ, từ 7–14 ngày và vào khoảng tuần thứ sáu sau sinh. Lịch cụ thể có thể được điều chỉnh theo sức khỏe của mẹ và bé."
    ],
    "sections": [
      {
        "heading": "Mốc 1: Khám và theo dõi ngay sau khi trẻ chào đời",
        "paragraphs": [
          "Ngay sau sinh, nhân viên y tế sẽ đánh giá xem trẻ có tự thở tốt không, màu da thế nào, trương lực cơ và phản xạ ra sao. Nếu trẻ cần hỗ trợ hô hấp hoặc hồi sức, các biện pháp phù hợp sẽ được thực hiện ngay.",
          "Với trẻ ổn định, chăm sóc thiết yếu thường bao gồm giữ ấm, da kề da với mẹ và hỗ trợ bú sớm. Bộ Y tế Việt Nam khuyến khích thực hiện da kề da và cho trẻ bú trong giờ đầu sau sinh khi tình trạng của mẹ và bé cho phép.",
          "Bác sĩ kiểm tra những gì trong lần khám đầu tiên?",
          "Trong những giờ đầu, trẻ thường được đánh giá:",
          "Nhịp thở, nhịp tim và thân nhiệt.",
          "Khả năng tự thở và thích nghi tuần hoàn.",
          "Màu sắc da và niêm mạc.",
          "Khả năng vận động tay chân.",
          "Hình dạng đầu, mặt và cột sống.",
          "Tim, phổi và bụng.",
          "Mắt, miệng và vòm miệng.",
          "Cơ quan sinh dục và hậu môn.",
          "Rốn và dây rốn.",
          "Một số dị tật có thể quan sát được.",
          "WHO khuyến nghị trẻ được đánh giá dấu hiệu sinh tồn, tình trạng hoạt động, màu da, nhịp thở và sức khỏe tổng quát trong vòng 24 giờ đầu.",
          "Cha mẹ nên thông báo với bác sĩ nếu trong thai kỳ mẹ từng mắc tiểu đường, tăng huyết áp, bệnh tuyến giáp, bệnh truyền nhiễm, dùng thuốc kéo dài hoặc thai nhi từng được phát hiện bất thường trên siêu âm."
        ]
      },
      {
        "heading": "Mốc 2: Trong 24–48 giờ đầu và trước khi xuất viện",
        "paragraphs": [
          "Khoảng thời gian trước khi xuất viện rất quan trọng vì đây là lúc nhân viên y tế đánh giá khả năng bú, theo dõi vàng da và thực hiện một số chương trình sàng lọc sơ sinh."
        ]
      },
      {
        "heading": "Theo dõi khả năng bú",
        "paragraphs": [
          "Nhân viên y tế sẽ quan sát trẻ có:",
          "Biết tìm vú và ngậm bắt vú đúng hay không.",
          "Mút và nuốt hiệu quả không.",
          "Bị ho, sặc hoặc tím khi bú không.",
          "Ngủ quá nhiều và khó đánh thức để bú không.",
          "Nôn trớ ở mức độ nào.",
          "Đi tiểu và đi ngoài hay chưa.",
          "Bú không hiệu quả có thể khiến trẻ nhận không đủ sữa, mất nước và vàng da tăng. Vì vậy, cha mẹ nên nhờ nhân viên y tế kiểm tra khớp ngậm và tư thế bú thay vì chỉ nhìn vào thời gian trẻ nằm trên ngực mẹ."
        ]
      },
      {
        "heading": "Theo dõi cân nặng",
        "paragraphs": [
          "Trẻ có thể giảm một phần cân nặng trong những ngày đầu do thay đổi lượng dịch trong cơ thể. Tuy nhiên, bác sĩ cần đánh giá mức giảm cân cùng với khả năng bú, số lần đi tiểu, tình trạng vàng da và sức khỏe tổng thể.",
          "Không nên chỉ dựa vào một con số để tự kết luận trẻ thiếu sữa. Xu hướng cân nặng qua các lần kiểm tra mới là thông tin quan trọng."
        ]
      },
      {
        "heading": "Kiểm tra vàng da",
        "paragraphs": [
          "Vàng da khá thường gặp ở trẻ sơ sinh nhưng mức độ nguy hiểm không giống nhau. Trẻ có thể được quan sát màu da, đo bilirubin qua da hoặc xét nghiệm máu khi cần.",
          "Vàng da xuất hiện trong 24 giờ đầu, tăng nhanh, lan xuống lòng bàn tay và lòng bàn chân hoặc đi kèm bú kém, li bì là dấu hiệu cần được đánh giá ngay. WHO xếp vàng da trong ngày đầu và vàng lòng bàn tay, lòng bàn chân ở bất kỳ thời điểm nào vào nhóm dấu hiệu cảnh báo.",
          "Cha mẹ không nên tự phơi nắng để điều trị vàng da. Khi bilirubin tăng đến mức cần can thiệp, trẻ phải được điều trị theo chỉ định chuyên môn.",
          "Sàng lọc sơ sinh gồm những gì?",
          "Sàng lọc sơ sinh nhằm phát hiện sớm một số bệnh có thể chưa gây triệu chứng ngay sau sinh nhưng có nguy cơ ảnh hưởng đến sức khỏe và sự phát triển lâu dài của trẻ.",
          "Danh mục sàng lọc có thể khác nhau tùy chương trình quốc gia, cơ sở y tế và tình trạng cụ thể của trẻ."
        ]
      },
      {
        "heading": "Lấy máu gót chân",
        "paragraphs": [
          "Một vài giọt máu được lấy từ gót chân và thấm lên giấy chuyên dụng để tìm dấu hiệu của một số bệnh bẩm sinh về chuyển hóa, nội tiết hoặc di truyền.",
          "Việc lấy mẫu thường được thực hiện trong khoảng 24–48 giờ sau sinh, khi trẻ đã bắt đầu được nuôi dưỡng. Nếu trẻ xuất viện quá sớm, sinh tại nhà, sinh non, được truyền máu hoặc chưa đủ điều kiện lấy mẫu, bác sĩ có thể sắp xếp thời điểm khác hoặc yêu cầu lấy lại mẫu.",
          "Kết quả sàng lọc bất thường chưa khẳng định trẻ mắc bệnh. Trẻ cần được làm xét nghiệm chẩn đoán để xác định chính xác."
        ]
      },
      {
        "heading": "Sàng lọc thính lực",
        "paragraphs": [
          "Trẻ có thể được kiểm tra thính lực bằng phương pháp đo âm ốc tai hoặc điện thính giác thân não tự động. Quá trình này thường không đau và có thể thực hiện khi trẻ đang ngủ.",
          "Mọi trẻ nên được sàng lọc thính lực trước một tháng tuổi, tốt nhất là trước khi rời bệnh viện. Nếu trẻ không đạt lần sàng lọc đầu tiên, trẻ cần được đánh giá thính lực chuyên sâu trước ba tháng tuổi.",
          "Kết quả “không đạt” không đồng nghĩa trẻ chắc chắn bị khiếm thính. Dịch ối trong tai, tiếng ồn hoặc cử động của trẻ cũng có thể ảnh hưởng đến kết quả, nhưng cha mẹ không nên bỏ qua lịch kiểm tra lại."
        ]
      },
      {
        "heading": "Đo độ bão hòa oxy để sàng lọc tim bẩm sinh",
        "paragraphs": [
          "Một cảm biến nhỏ được đặt lên da để đo lượng oxy trong máu. Kết quả oxy thấp có thể gợi ý một số bệnh tim bẩm sinh nghiêm trọng hoặc vấn đề hô hấp cần được kiểm tra thêm.",
          "Đây là phương pháp không xâm lấn, không gây đau và thường chỉ mất vài phút. Sàng lọc có thể giúp phát hiện một số bệnh tim bẩm sinh nặng trước khi trẻ xuất hiện triệu chứng rõ rệt.",
          "Kết quả bất thường không phải lúc nào cũng do bệnh tim. Bác sĩ có thể đo lại, khám kỹ hơn hoặc chỉ định siêu âm tim tùy trường hợp."
        ]
      },
      {
        "heading": "Tiêm chủng trong giai đoạn sơ sinh",
        "paragraphs": [
          "Trẻ cần được tiêm chủng theo chương trình quốc gia và hướng dẫn của bác sĩ.",
          "Vaccine viêm gan B liều sơ sinh được khuyến nghị tiêm càng sớm càng tốt, ưu tiên trong vòng 24 giờ sau sinh. Liều vaccine này có vai trò đặc biệt quan trọng trong giảm nguy cơ lây truyền virus viêm gan B từ mẹ sang con.",
          "Nếu mẹ có kết quả viêm gan B dương tính, em bé có thể cần thêm biện pháp dự phòng theo phác đồ. Bác sĩ Sản khoa và Nhi khoa cần phối hợp để chuẩn bị vaccine và các thuốc cần thiết ngay từ trước cuộc sinh.",
          "Vaccine phòng lao BCG được thực hiện theo lịch tiêm chủng và tình trạng sức khỏe của trẻ. Chương trình Tiêm chủng mở rộng tại Việt Nam hiện bao gồm vaccine phòng lao, viêm gan B và nhiều bệnh truyền nhiễm quan trọng khác.",
          "Trẻ sinh non, đang điều trị bệnh hoặc có chống chỉ định tạm thời sẽ được bác sĩ tư vấn thời điểm tiêm phù hợp."
        ]
      },
      {
        "heading": "Mốc 3: Khám trong khoảng 48–72 giờ hoặc vài ngày đầu sau xuất viện",
        "paragraphs": [
          "Sau khi về nhà, trẻ cần được kiểm tra lại sớm, đặc biệt nếu xuất viện khi chưa đủ 72 giờ tuổi.",
          "Nhiều hướng dẫn nhi khoa sử dụng mốc khám trong khoảng 3–5 ngày sau sinh hoặc trong vòng một vài ngày sau khi trẻ rời bệnh viện. Đây cũng là thời điểm nồng độ bilirubin có thể tăng rõ hơn và các khó khăn trong việc bú bắt đầu bộc lộ.",
          "Lần khám này thường đánh giá gì?",
          "Bác sĩ có thể kiểm tra:",
          "Cân nặng và mức giảm cân so với lúc sinh.",
          "Khả năng bú mẹ hoặc bú bình.",
          "Số lần đi tiểu và đi ngoài.",
          "Tình trạng vàng da.",
          "Thân nhiệt và nhịp thở.",
          "Rốn và vùng da quanh rốn.",
          "Da, mắt và miệng.",
          "Kết quả sàng lọc đã thực hiện tại bệnh viện.",
          "Những loại vaccine đã được tiêm.",
          "Giấc ngủ và cách đặt trẻ ngủ.",
          "Tâm lý, sức khỏe và khả năng chăm con của mẹ.",
          "Nếu trẻ sinh non, nhẹ cân, bú yếu hoặc từng điều trị vàng da, lần khám có thể được sắp xếp sớm hơn."
        ]
      },
      {
        "heading": "Mốc 4: Khám khi trẻ được 7–14 ngày tuổi",
        "paragraphs": [
          "Trong tuần thứ hai, bác sĩ tiếp tục theo dõi khả năng bú, cân nặng, vàng da và tình trạng rốn.",
          "Phần lớn trẻ bắt đầu tăng cân đều sau những ngày đầu và thường trở lại mức cân nặng lúc sinh vào khoảng hai tuần tuổi. Tuy nhiên, tốc độ tăng cân có thể khác nhau tùy tuổi thai, cân nặng lúc sinh, cách nuôi dưỡng và bệnh lý đi kèm."
        ]
      },
      {
        "heading": "Những nội dung nên được kiểm tra",
        "paragraphs": [
          "Ở mốc này, bác sĩ có thể đánh giá:",
          "Trẻ đã tăng cân trở lại chưa.",
          "Trẻ có tỉnh táo và bú chủ động không.",
          "Khớp ngậm vú có hiệu quả không.",
          "Vàng da có giảm hay vẫn kéo dài.",
          "Rốn đã khô và rụng chưa.",
          "Vùng rốn có đỏ, sưng hoặc chảy dịch không.",
          "Trẻ có phản ứng với tiếng động không.",
          "Kết quả lấy máu gót chân đã có chưa.",
          "Có cần lấy lại mẫu sàng lọc không.",
          "Lịch tiêm chủng tiếp theo.",
          "Vàng da kéo dài không phải lúc nào cũng nguy hiểm, đặc biệt ở trẻ bú mẹ. Tuy nhiên, bác sĩ cần đánh giá để phân biệt vàng da sinh lý với bệnh gan mật, tan máu, nhiễm trùng hoặc các nguyên nhân khác.",
          "Cha mẹ không nên tự ngừng sữa mẹ khi trẻ vàng da. Phần lớn trẻ vàng da vẫn có thể tiếp tục bú mẹ; việc bổ sung sữa hoặc điều chỉnh cách nuôi dưỡng phải dựa trên từng trường hợp."
        ]
      },
      {
        "heading": "Mốc 5: Khám khi trẻ được khoảng 1 tháng đến 6 tuần",
        "paragraphs": [
          "Cuối tháng đầu là thời điểm phù hợp để bác sĩ đánh giá lại toàn diện quá trình thích nghi và phát triển của trẻ.",
          "Nội dung khám có thể gồm:",
          "Cân nặng, chiều dài và vòng đầu.",
          "Tốc độ tăng trưởng.",
          "Khả năng bú và tiêu hóa.",
          "Trương lực cơ và vận động hai bên cơ thể.",
          "Khả năng nhìn theo khuôn mặt hoặc ánh sáng.",
          "Phản ứng với âm thanh.",
          "Tim, phổi và bụng.",
          "Da, mắt, miệng và rốn.",
          "Các vấn đề như trào ngược, quấy khóc hoặc khó ngủ.",
          "Lịch tiêm chủng trong những tháng tiếp theo.",
          "An toàn khi ngủ và phòng tránh tai nạn.",
          "Lịch khám trẻ khỏe mạnh của Viện Hàn lâm Nhi khoa Hoa Kỳ có mốc kiểm tra trong tuần đầu và khi trẻ khoảng một tháng tuổi. WHO khuyến nghị thêm một lần chăm sóc sau sinh vào khoảng tuần thứ sáu.",
          "Đây cũng thường gần với thời điểm mẹ tái khám hậu sản. Vì vậy, gia đình có thể kết hợp kiểm tra sức khỏe của cả mẹ và bé, giúp quá trình chăm sóc sau sinh được liên tục hơn.",
          "Vì sao cần phối hợp giữa Sản khoa và Nhi khoa?",
          "Sức khỏe của trẻ sơ sinh có liên quan chặt chẽ đến quá trình mang thai và sinh nở.",
          "Bác sĩ nhi khoa cần biết các thông tin như:",
          "Tuổi thai khi sinh.",
          "Trẻ sinh thường hay sinh mổ.",
          "Cân nặng và tình trạng lúc chào đời.",
          "Thời gian vỡ ối.",
          "Mẹ có sốt hoặc nhiễm trùng khi sinh không.",
          "Nhóm máu của mẹ và bé.",
          "Mẹ có viêm gan B, HIV, giang mai hoặc bệnh truyền nhiễm khác không.",
          "Mẹ có tiểu đường thai kỳ hoặc tiền sản giật không.",
          "Thai nhi có bất thường trên siêu âm không.",
          "Trẻ có cần hồi sức hoặc chăm sóc đặc biệt sau sinh không.",
          "Ngược lại, những vấn đề của em bé như khó bú, vàng da hoặc phải nhập viện cũng có thể ảnh hưởng đến sức khỏe thể chất và tinh thần của mẹ.",
          "Mô hình phối hợp Sản – Nhi giúp thông tin từ thai kỳ, cuộc sinh và giai đoạn sau sinh không bị gián đoạn. Nhờ đó, trẻ có thể được dự phòng, sàng lọc và theo dõi phù hợp ngay từ những giờ đầu.",
          "Trẻ nào cần lịch khám dày hơn?",
          "Không phải trẻ sơ sinh nào cũng áp dụng cùng một lịch theo dõi. Bác sĩ có thể yêu cầu tái khám sớm hoặc thường xuyên hơn nếu trẻ:",
          "Sinh non.",
          "Có cân nặng thấp khi sinh.",
          "Sinh đôi hoặc đa thai.",
          "Từng nằm đơn vị hồi sức sơ sinh.",
          "Bú yếu hoặc khó tăng cân.",
          "Bị vàng da cần điều trị.",
          "Có kết quả sàng lọc bất thường.",
          "Có dị tật bẩm sinh.",
          "Có bệnh tim, phổi hoặc thần kinh.",
          "Có nguy cơ nhiễm trùng.",
          "Là con của mẹ mắc tiểu đường.",
          "Mẹ nhiễm viêm gan B hoặc bệnh có khả năng truyền sang con.",
          "Được phát hiện bất thường trong thai kỳ.",
          "Cha mẹ cần thực hiện đúng lịch hẹn, ngay cả khi thấy trẻ đã bú và ngủ tốt hơn."
        ]
      },
      {
        "heading": "Những dấu hiệu cần đưa trẻ đi khám ngay",
        "paragraphs": [
          "Trẻ sơ sinh có thể trở nặng nhanh và đôi khi không biểu hiện rầm rộ. Cha mẹ cần đưa trẻ đến cơ sở y tế ngay nếu xuất hiện:",
          "Sốt từ 38°C trở lên.",
          "Thân nhiệt thấp bất thường hoặc trẻ lạnh dù đã được giữ ấm.",
          "Bú kém rõ rệt hoặc bỏ bú.",
          "Khó đánh thức, li bì hoặc phản ứng yếu.",
          "Thở nhanh, khó thở hoặc rút lõm lồng ngực.",
          "Tím môi, lưỡi hoặc toàn thân.",
          "Có cơn ngừng thở.",
          "Co giật.",
          "Vàng da xuất hiện trong 24 giờ đầu.",
          "Vàng da lan xuống lòng bàn tay hoặc lòng bàn chân.",
          "Nôn liên tục, nôn màu xanh hoặc có máu.",
          "Bụng chướng rõ.",
          "Không đi tiểu hoặc lượng nước tiểu giảm nhiều.",
          "Rốn đỏ lan ra xung quanh, sưng, chảy mủ hoặc có mùi hôi.",
          "Trẻ khóc yếu, khóc thét bất thường hoặc đột ngột ít vận động.",
          "WHO khuyến cáo gia đình tìm hỗ trợ y tế sớm khi trẻ bú kém, giảm hoạt động, khó thở, sốt, co giật, vàng da nguy hiểm hoặc cơ thể lạnh.",
          "Với trẻ dưới ba tháng tuổi, nhiệt độ từ 38°C trở lên cần được nhân viên y tế đánh giá ngay, không nên tự dùng thuốc hạ sốt rồi tiếp tục theo dõi tại nhà.",
          "Cha mẹ cần chuẩn bị gì khi đưa trẻ đi khám?",
          "Gia đình nên mang theo:",
          "Giấy ra viện của mẹ và bé.",
          "Sổ khám thai của mẹ.",
          "Hồ sơ cuộc sinh.",
          "Sổ tiêm chủng.",
          "Phiếu lấy máu gót chân và kết quả sàng lọc.",
          "Kết quả đo thính lực hoặc độ bão hòa oxy.",
          "Danh sách thuốc hoặc vitamin trẻ đang sử dụng.",
          "Thông tin về số lần bú, đi tiểu và đi ngoài.",
          "Nhật ký cân nặng nếu gia đình có theo dõi.",
          "Hình ảnh hoặc video dấu hiệu bất thường.",
          "Cha mẹ cũng có thể ghi sẵn những câu hỏi về bú mẹ, vàng da, giấc ngủ, chăm sóc rốn và tiêm chủng để tránh bỏ sót khi gặp bác sĩ.",
          "Khám sơ sinh khác với sàng lọc sơ sinh như thế nào?",
          "Khám sơ sinh là quá trình bác sĩ đánh giá toàn diện cơ thể và tình trạng sức khỏe của trẻ.",
          "Sàng lọc sơ sinh là các xét nghiệm hoặc phép đo nhằm tìm nguy cơ của một số bệnh cụ thể trước khi trẻ có biểu hiện rõ.",
          "Hai hoạt động này bổ sung cho nhau nhưng không thay thế nhau. Trẻ có kết quả sàng lọc bình thường vẫn cần được khám định kỳ. Ngược lại, một lần khám bình thường không đồng nghĩa trẻ có thể bỏ qua các xét nghiệm sàng lọc phù hợp.",
          "Trẻ trông khỏe mạnh có cần khám đúng mốc không?",
          "Có. Nhiều vấn đề trong giai đoạn sơ sinh không dễ nhận biết bằng quan sát thông thường.",
          "Bác sĩ có thể nhận ra trẻ tăng cân chưa phù hợp, bú chưa hiệu quả, vàng da kéo dài, có tiếng tim bất thường hoặc chưa hoàn thành các xét nghiệm cần thiết dù trẻ vẫn ngủ ngoan và ít quấy khóc.",
          "Khám đúng mốc không phải để tìm bệnh bằng mọi giá. Mục tiêu là xác nhận trẻ đang thích nghi và phát triển thuận lợi, đồng thời xử lý sớm nếu có dấu hiệu cần lưu ý."
        ]
      },
      {
        "heading": "Khám và theo dõi trẻ sơ sinh tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Từ khi mẹ chuyển dạ đến những tuần đầu sau sinh, việc phối hợp giữa Sản khoa và Nhi khoa giúp bảo đảm quá trình chăm sóc mẹ và bé được liên tục.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, trẻ sơ sinh có thể được bác sĩ thăm khám, đánh giá khả năng thích nghi sau sinh, theo dõi bú, cân nặng, vàng da và tư vấn các chương trình sàng lọc phù hợp. Những trường hợp có yếu tố nguy cơ sẽ được xây dựng lịch kiểm tra riêng hoặc phối hợp với các chuyên khoa cần thiết.",
          "Cha mẹ không cần quá căng thẳng trước từng thay đổi nhỏ của em bé. Tuy nhiên, cũng không nên bỏ qua lịch tái khám chỉ vì trẻ có vẻ đang ngủ và bú bình thường.",
          "Những mốc khám trong 24 giờ đầu, vài ngày sau xuất viện, từ 7–14 ngày và khoảng một tháng đến sáu tuần giúp bác sĩ theo dõi trọn vẹn giai đoạn thích nghi quan trọng của trẻ. Khám đúng thời điểm là bước khởi đầu để em bé được chăm sóc an toàn và phát triển khỏe mạnh hơn.",
          "Thông tin trong bài viết mang tính chất tham khảo. Lịch khám, tiêm chủng và sàng lọc có thể được điều chỉnh theo tuổi thai, tình trạng lúc sinh, sức khỏe của mẹ và hướng dẫn trực tiếp của bác sĩ."
        ]
      }
    ]
  },
  "noi-soi-tieu-hoa-co-dau-khong-va-can-chuan-bi-gi": {
    "sourceFile": "31.Nội soi tiêu hóa có đau không và cần chuẩn bị gì.docx",
    "title": "Nội soi tiêu hóa có đau không và cần chuẩn bị gì?",
    "excerpt": "Nhắc đến nội soi tiêu hóa, nhiều người chưa kịp hỏi bác sĩ đã bắt đầu lo: “Đưa một chiếc ống vào cơ thể như vậy có đau không?”, “Có phải nhịn ăn cả ngày không?” hay “Nội soi gây mê có an toàn không?”. Đây đều là những băn khoăn rất bình thường, đặc biệt với người lần đầu thực hiện.",
    "intro": [
      "Nhắc đến nội soi tiêu hóa, nhiều người chưa kịp hỏi bác sĩ đã bắt đầu lo: “Đưa một chiếc ống vào cơ thể như vậy có đau không?”, “Có phải nhịn ăn cả ngày không?” hay “Nội soi gây mê có an toàn không?”. Đây đều là những băn khoăn rất bình thường, đặc biệt với người lần đầu thực hiện.",
      "Trên thực tế, cảm giác khi nội soi phụ thuộc vào vị trí cần kiểm tra, phương pháp nội soi và khả năng chịu đựng của mỗi người. Việc chuẩn bị đúng hướng dẫn cũng giúp quá trình nội soi diễn ra thuận lợi, hạn chế khó chịu và tăng độ chính xác của kết quả.",
      "Nội soi tiêu hóa là gì?",
      "Nội soi tiêu hóa là phương pháp sử dụng một ống mềm, nhỏ, có gắn camera và nguồn sáng ở đầu để quan sát trực tiếp bên trong đường tiêu hóa.",
      "Tùy khu vực cần kiểm tra, bác sĩ có thể chỉ định:",
      "Nội soi tiêu hóa trên, thường gọi là nội soi dạ dày, giúp quan sát thực quản, dạ dày và phần đầu của ruột non là tá tràng.",
      "Nội soi tiêu hóa dưới, thường gọi là nội soi đại tràng, giúp kiểm tra trực tràng và đại tràng.",
      "Nội soi kết hợp dạ dày – đại tràng trong cùng một buổi khi người bệnh có chỉ định và đáp ứng điều kiện sức khỏe.",
      "Không chỉ quan sát hình ảnh, trong quá trình nội soi, bác sĩ còn có thể lấy một mẫu mô nhỏ để xét nghiệm, kiểm tra tổn thương hoặc thực hiện một số thủ thuật như cầm máu, cắt polyp khi phù hợp. Việc lấy mẫu mô qua nội soi thường không gây cảm giác đau rõ rệt.",
      "Nội soi tiêu hóa có đau không?",
      "Câu trả lời không hoàn toàn giống nhau đối với mọi người. Phần lớn trường hợp không đau dữ dội, nhưng người bệnh có thể cảm thấy khó chịu, buồn nôn, đầy bụng hoặc căng tức trong một khoảng thời gian ngắn.",
      "Nội soi dạ dày thường gây cảm giác gì?",
      "Khi nội soi dạ dày không sử dụng thuốc an thần, ống nội soi được đưa qua miệng, xuống thực quản, dạ dày và tá tràng. Người bệnh có thể gặp một số cảm giác như:",
      "Vướng hoặc nghẹn nhẹ ở cổ họng.",
      "Buồn nôn, muốn nôn khi ống đi qua vùng hầu họng.",
      "Đầy bụng hoặc ợ hơi do khí được đưa vào để bác sĩ quan sát rõ niêm mạc.",
      "Hơi đau hoặc rát họng sau nội soi.",
      "Ống nội soi không đi vào đường thở nên thông thường không cản trở việc hô hấp. Nội soi dạ dày nhìn chung không được xem là một thủ thuật gây đau, nhưng phản xạ buồn nôn có thể khiến một số người cảm thấy khá khó chịu. Thuốc xịt gây tê họng và thuốc an thần có thể giúp quá trình này dễ chịu hơn.",
      "Nội soi đại tràng có đau không?",
      "Trong nội soi đại tràng, ống nội soi được đưa từ hậu môn vào bên trong đại tràng. Khi ống đi qua các đoạn ruột cong hoặc khi bác sĩ bơm khí để mở lòng ruột, người bệnh có thể cảm thấy:",
      "Căng tức bụng.",
      "Đầy hơi.",
      "Đau quặn hoặc co thắt nhẹ.",
      "Có cảm giác muốn đi đại tiện.",
      "Mức độ khó chịu phụ thuộc vào cấu trúc đại tràng, tiền sử phẫu thuật vùng bụng, mức độ lo lắng, khả năng chịu đau và phương pháp an thần. Phần lớn các ca nội soi đại tràng hiện nay được thực hiện với thuốc an thần hoặc gây mê ngắn để giảm đau và giúp người bệnh thư giãn hơn.",
      "Nội soi không đau là như thế nào?",
      "“Nội soi không đau” là cách gọi phổ biến của phương pháp nội soi có sử dụng thuốc an thần hoặc thuốc gây mê đường tĩnh mạch. Tùy tình trạng sức khỏe và quy trình của cơ sở y tế, người bệnh có thể ở trạng thái thư giãn, buồn ngủ hoặc ngủ trong thời gian thực hiện thủ thuật.",
      "Khi nội soi có an thần hoặc gây mê ngắn:",
      "Người bệnh thường ít cảm nhận cảm giác buồn nôn, căng tức hoặc đau quặn.",
      "Cơ thể thư giãn hơn, giúp bác sĩ quan sát thuận lợi.",
      "Nhiều người không nhớ rõ quá trình nội soi.",
      "Sau thủ thuật cần nằm theo dõi cho đến khi tỉnh táo và các chỉ số ổn định.",
      "Thuốc an thần và thuốc gây mê vẫn có những nguy cơ nhất định, chẳng hạn ảnh hưởng đến nhịp thở, huyết áp hoặc gây phản ứng không mong muốn. Vì vậy, trước khi thực hiện, người bệnh cần được khai thác tiền sử bệnh, tiền sử dị ứng và đánh giá khả năng sử dụng thuốc phù hợp. Trong quá trình nội soi, các chỉ số như nhịp tim, huyết áp và nồng độ oxy thường được theo dõi.",
      "Người cao tuổi, phụ nữ đang mang thai, người mắc bệnh tim, bệnh phổi, rối loạn đông máu hoặc từng có phản ứng bất thường với thuốc gây mê cần thông báo đầy đủ với bác sĩ.",
      "Nên chọn nội soi thường hay nội soi không đau?",
      "Mỗi phương pháp có ưu điểm riêng và không có một lựa chọn phù hợp cho tất cả mọi người."
    ],
    "sections": [
      {
        "heading": "Nội soi thường",
        "paragraphs": [
          "Phương pháp này có thể phù hợp với người:",
          "Có khả năng hợp tác tốt.",
          "Không có phản xạ buồn nôn quá mạnh.",
          "Muốn tỉnh táo hoàn toàn trong quá trình thực hiện.",
          "Không phù hợp hoặc không muốn sử dụng thuốc an thần.",
          "Sau nội soi thường, người bệnh có thể hồi phục nhanh hơn và không chịu ảnh hưởng của thuốc an thần. Tuy nhiên, cảm giác vướng họng, buồn nôn hoặc căng tức có thể rõ hơn."
        ]
      },
      {
        "heading": "Nội soi có an thần hoặc gây mê ngắn",
        "paragraphs": [
          "Phương pháp này thường được cân nhắc cho người:",
          "Lo lắng nhiều hoặc sợ nội soi.",
          "Có phản xạ buồn nôn mạnh.",
          "Khó chịu đau hoặc khó phối hợp.",
          "Cần nội soi đồng thời dạ dày và đại tràng.",
          "Dự kiến cần thực hiện thêm thủ thuật trong quá trình nội soi.",
          "Lựa chọn cuối cùng cần dựa trên chỉ định, sức khỏe tổng thể và đánh giá của bác sĩ. Người bệnh không nên chỉ chọn phương pháp theo cảm giác “sợ đau” mà bỏ qua các yếu tố an toàn liên quan đến thuốc an thần hoặc gây mê.",
          "Cần chuẩn bị gì trước khi nội soi tiêu hóa?",
          "Chuẩn bị đúng là một phần rất quan trọng của nội soi. Dạ dày còn thức ăn hoặc đại tràng chưa được làm sạch có thể che khuất tổn thương, khiến thủ thuật phải tạm dừng hoặc thực hiện lại.",
          "1. Cung cấp đầy đủ thông tin sức khỏe",
          "Trước khi nội soi, hãy thông báo với bác sĩ nếu bạn:",
          "Đang mang thai hoặc nghi ngờ có thai.",
          "Có bệnh tim mạch, hô hấp, thận, gan hoặc đái tháo đường.",
          "Có rối loạn đông máu.",
          "Từng dị ứng với thuốc.",
          "Từng gặp biến cố khi gây mê hoặc an thần.",
          "Đang có răng giả tháo lắp, răng lung lay.",
          "Đang sốt, ho nhiều, khó thở hoặc có nhiễm trùng cấp tính.",
          "Từng phẫu thuật vùng bụng hoặc đường tiêu hóa.",
          "Những thông tin này giúp bác sĩ đánh giá nguy cơ và lựa chọn phương án nội soi phù hợp hơn.",
          "2. Mang theo danh sách thuốc đang sử dụng",
          "Người bệnh nên cung cấp đầy đủ tên và liều lượng của thuốc kê đơn, thuốc không kê đơn, vitamin và thực phẩm bổ sung đang dùng.",
          "Đặc biệt cần báo cho bác sĩ nếu đang sử dụng:",
          "Thuốc chống đông hoặc thuốc chống kết tập tiểu cầu.",
          "Aspirin và một số thuốc giảm đau kháng viêm.",
          "Thuốc điều trị đái tháo đường hoặc insulin.",
          "Thuốc điều trị tim mạch, huyết áp.",
          "Thuốc hoặc viên bổ sung sắt.",
          "Thuốc có thể gây táo bón.",
          "Một số thuốc có thể cần điều chỉnh trước nội soi, nhất là khi dự kiến sinh thiết hoặc cắt polyp. Tuy nhiên, người bệnh không được tự ý ngừng thuốc chống đông, thuốc tim mạch hoặc thuốc đái tháo đường. Việc thay đổi thuốc phải do bác sĩ hướng dẫn vì tự ngừng thuốc cũng có thể gây nguy hiểm.",
          "3. Nhịn ăn, uống trước nội soi dạ dày",
          "Dạ dày cần đủ rỗng để bác sĩ quan sát rõ niêm mạc và giảm nguy cơ thức ăn hoặc dịch dạ dày trào ngược vào đường thở khi sử dụng thuốc an thần.",
          "Thông thường, người bệnh được yêu cầu ngừng ăn thức ăn đặc ít nhất khoảng 6 giờ trước nội soi. Một số trường hợp có thể được uống lượng nhỏ nước lọc đến một thời điểm nhất định trước thủ thuật. Tuy nhiên, thời gian cụ thể phụ thuộc vào giờ nội soi, loại thức ăn, phương pháp gây mê và tình trạng sức khỏe.",
          "Người bệnh cần tuân thủ đúng hướng dẫn riêng của bệnh viện, không nên tự áp dụng lịch nhịn ăn của người khác. Nếu lỡ ăn hoặc uống ngoài hướng dẫn, hãy báo với nhân viên y tế thay vì giấu thông tin.",
          "4. Làm sạch ruột trước nội soi đại tràng",
          "Đây thường là phần khiến nhiều người “ngại” nhất, nhưng cũng là bước quyết định chất lượng của cuộc nội soi.",
          "Tùy loại thuốc làm sạch ruột và giờ hẹn, người bệnh có thể được hướng dẫn:",
          "Ăn chế độ ít chất xơ hoặc ít cặn trong vài ngày trước nội soi.",
          "Tránh ngũ cốc nguyên hạt, các loại hạt, rau sống và trái cây có nhiều hạt theo hướng dẫn.",
          "Chuyển sang dùng chất lỏng trong vào ngày trước thủ thuật.",
          "Uống thuốc làm sạch ruột theo đúng liều và thời gian quy định.",
          "Uống đủ nước trong giới hạn được phép để hạn chế mất nước.",
          "Nhiều phác đồ chia thuốc làm sạch ruột thành hai lần uống, thường gồm một phần vào buổi tối hôm trước và phần còn lại gần thời điểm nội soi. Người bệnh cần hoàn thành đủ lượng thuốc được chỉ định, kể cả khi dịch đại tiện đã gần trong. Nếu đại tràng không sạch, bác sĩ có thể khó quan sát niêm mạc, bỏ sót tổn thương hoặc phải hẹn nội soi lại.",
          "Sau khi uống thuốc, bạn sẽ đi ngoài nhiều lần, phân dần chuyển thành dạng lỏng và trong hơn. Nên ở gần nhà vệ sinh, mặc quần áo thoải mái và chuẩn bị giấy mềm hoặc kem bảo vệ da nếu vùng hậu môn bị kích ứng.",
          "Nếu không thể uống hết thuốc, nôn liên tục, không uống được nước, chóng mặt nhiều hoặc đau bụng dữ dội, hãy liên hệ cơ sở nội soi để được hướng dẫn.",
          "5. Sắp xếp người đưa về nếu có sử dụng thuốc an thần",
          "Sau nội soi có an thần hoặc gây mê, khả năng phản xạ và phán đoán có thể bị ảnh hưởng dù người bệnh cảm thấy mình đã khá tỉnh táo.",
          "Vì vậy, bạn nên:",
          "Có người trưởng thành đưa về.",
          "Không tự lái xe hoặc đi xe máy.",
          "Không vận hành máy móc.",
          "Không uống rượu bia.",
          "Không ký giấy tờ quan trọng hoặc đưa ra quyết định lớn trong ít nhất 24 giờ.",
          "Nghỉ ngơi và làm theo hướng dẫn của nhân viên y tế.",
          "Nhiều cơ sở y tế yêu cầu người nhà đến đón mới cho người bệnh xuất viện sau an thần.",
          "6. Chuẩn bị giấy tờ và kết quả khám cũ",
          "Khi đến nội soi, người bệnh nên mang theo:",
          "Giấy tờ tùy thân và thông tin bảo hiểm nếu có.",
          "Phiếu chỉ định nội soi.",
          "Kết quả nội soi, xét nghiệm hoặc chẩn đoán hình ảnh trước đây.",
          "Danh sách thuốc đang sử dụng.",
          "Thông tin về dị ứng và bệnh nền.",
          "Người thân đi cùng nếu thực hiện nội soi không đau.",
          "Quy trình nội soi tiêu hóa thường diễn ra như thế nào?",
          "Trước thủ thuật, nhân viên y tế sẽ kiểm tra thông tin, khai thác tiền sử, giải thích quy trình và hướng dẫn ký cam kết đồng ý thực hiện.",
          "Nếu nội soi dạ dày không gây mê, người bệnh có thể được xịt thuốc tê vùng họng. Nếu nội soi không đau, thuốc an thần hoặc gây mê ngắn thường được truyền qua đường tĩnh mạch.",
          "Trong lúc nội soi, người bệnh thường nằm nghiêng sang trái. Bác sĩ đưa ống nội soi mềm vào đường tiêu hóa, quan sát hình ảnh trên màn hình và lấy mẫu mô hoặc xử lý tổn thương khi có chỉ định.",
          "Bản thân thủ thuật thường không kéo dài quá lâu, nhưng tổng thời gian tại bệnh viện có thể dài hơn do cần làm thủ tục, chuẩn bị, theo dõi và hồi tỉnh sau an thần.",
          "Sau nội soi, cơ thể có thể khó chịu gì?",
          "Một số biểu hiện nhẹ có thể xuất hiện trong thời gian ngắn:",
          "Khô, rát hoặc hơi đau họng sau nội soi dạ dày.",
          "Đầy bụng, ợ hơi.",
          "Co thắt hoặc đau bụng nhẹ sau nội soi đại tràng.",
          "Buồn ngủ, hơi chóng mặt sau dùng thuốc an thần.",
          "Một ít máu khi đi ngoài nếu có sinh thiết hoặc cắt polyp.",
          "Các biểu hiện này thường giảm dần. Người bệnh chỉ nên ăn uống khi cảm giác tê họng đã hết và khả năng nuốt trở lại bình thường. Nếu bác sĩ thực hiện cắt polyp, sinh thiết hoặc can thiệp khác, chế độ ăn và sinh hoạt có thể cần điều chỉnh riêng.",
          "Dấu hiệu nào cần đi khám ngay sau nội soi?",
          "Nội soi tiêu hóa nhìn chung là thủ thuật an toàn, nhưng người bệnh cần đến cơ sở y tế ngay nếu xuất hiện:",
          "Đau bụng hoặc đau ngực dữ dội, kéo dài hay tăng dần.",
          "Khó thở.",
          "Khó nuốt hoặc đau họng ngày càng nặng.",
          "Sốt hoặc rét run.",
          "Nôn liên tục.",
          "Nôn ra máu hoặc dịch giống bã cà phê.",
          "Đi ngoài phân đen như hắc ín.",
          "Đi ngoài ra nhiều máu đỏ hoặc có cục máu.",
          "Chóng mặt, ngất, mệt lả bất thường.",
          "Đây có thể là dấu hiệu của chảy máu, thủng đường tiêu hóa hoặc phản ứng liên quan đến thuốc an thần và cần được đánh giá sớm."
        ]
      },
      {
        "heading": "Nội soi tiêu hóa tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi có triệu chứng tiêu hóa kéo dài hoặc được chỉ định nội soi, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám và đánh giá trước thủ thuật.",
          "Tùy tình trạng cụ thể, bác sĩ sẽ tư vấn phương pháp nội soi dạ dày, nội soi đại tràng hoặc nội soi kết hợp; đồng thời hướng dẫn chế độ ăn, thời gian nhịn ăn, cách dùng thuốc làm sạch ruột và các lưu ý về thuốc đang sử dụng.",
          "Việc tuân thủ đúng quy trình chuẩn bị không chỉ giúp người bệnh bớt lo lắng mà còn hỗ trợ bác sĩ quan sát đường tiêu hóa rõ hơn, từ đó phát hiện và xử lý tổn thương phù hợp."
        ]
      },
      {
        "heading": "Nội soi tiêu hóa không đáng sợ như nhiều người nghĩ",
        "paragraphs": [
          "Nội soi tiêu hóa có thể gây cảm giác khó chịu, nhưng phần lớn trường hợp không đau dữ dội. Với phương pháp nội soi có an thần hoặc gây mê ngắn, người bệnh thường trải qua thủ thuật nhẹ nhàng hơn.",
          "Điều quan trọng nhất là trao đổi trung thực về sức khỏe, thuốc đang dùng và tuân thủ đầy đủ hướng dẫn nhịn ăn hoặc làm sạch đại tràng. Nếu đang gặp các biểu hiện như đau bụng kéo dài, nuốt nghẹn, nôn ra máu, đi ngoài phân đen, chảy máu hậu môn hoặc thay đổi thói quen đại tiện bất thường, bạn không nên trì hoãn việc thăm khám.",
          "Nội dung bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "dau-da-day-keo-dai-khi-nao-can-noi-soi": {
    "sourceFile": "32.Đau dạ dày kéo dài khi nào cần nội soi.docx",
    "title": "Đau dạ dày kéo dài: khi nào cần nội soi?",
    "excerpt": "Đau vùng trên rốn, nóng rát, đầy bụng hoặc khó chịu sau khi ăn thường được gọi chung là “đau dạ dày”. Có người chỉ đau vài hôm rồi hết, nhưng cũng có trường hợp triệu chứng lặp đi lặp lại nhiều tuần, uống thuốc đỡ một thời gian rồi lại tái phát.",
    "intro": [
      "Đau vùng trên rốn, nóng rát, đầy bụng hoặc khó chịu sau khi ăn thường được gọi chung là “đau dạ dày”. Có người chỉ đau vài hôm rồi hết, nhưng cũng có trường hợp triệu chứng lặp đi lặp lại nhiều tuần, uống thuốc đỡ một thời gian rồi lại tái phát.",
      "Đau dạ dày kéo dài không đồng nghĩa với bệnh nguy hiểm, nhưng cũng không nên chỉ âm thầm chịu đựng hoặc tự mua thuốc dùng liên tục. Trong một số trường hợp, bác sĩ có thể chỉ định nội soi để quan sát trực tiếp thực quản, dạ dày và tá tràng, từ đó xác định nguyên nhân chính xác hơn.",
      "Đau dạ dày kéo dài được hiểu như thế nào?",
      "“Đau dạ dày” là cách gọi phổ biến, không phải tên của một bệnh cụ thể. Người bệnh thường dùng cụm từ này để mô tả cảm giác:",
      "Đau âm ỉ hoặc nóng rát ở vùng thượng vị, tức khu vực trên rốn và dưới xương ức.",
      "Đầy bụng, chậm tiêu.",
      "Nhanh no dù mới ăn một lượng nhỏ.",
      "No lâu, khó chịu sau bữa ăn.",
      "Ợ hơi, ợ chua.",
      "Buồn nôn hoặc nôn.",
      "Đau khi đói hoặc đau sau khi ăn.",
      "Trong y khoa, nhóm biểu hiện đau hoặc khó chịu ở vùng bụng trên, nhanh no và đầy bụng sau ăn thường được gọi là khó tiêu. Triệu chứng có thể xuất hiện từng đợt hoặc kéo dài dai dẳng.",
      "Không có một mốc thời gian duy nhất áp dụng cho tất cả mọi người. Tuy nhiên, nếu cơn đau kéo dài vài tuần, thường xuyên tái phát hoặc ảnh hưởng rõ đến ăn uống và sinh hoạt, người bệnh nên đi khám thay vì tiếp tục tự theo dõi.",
      "Vì sao đau dạ dày có thể kéo dài?",
      "Đau vùng thượng vị có thể xuất phát từ nhiều nguyên nhân khác nhau. Có trường hợp liên quan trực tiếp đến dạ dày, nhưng cũng có trường hợp bắt nguồn từ thực quản, túi mật, tuyến tụy hoặc cơ quan khác."
    ],
    "sections": [
      {
        "heading": "Viêm dạ dày",
        "paragraphs": [
          "Niêm mạc dạ dày bị viêm hoặc kích ứng có thể gây đau, nóng rát vùng bụng trên, buồn nôn, chán ăn, nhanh no hoặc đầy bụng sau bữa ăn.",
          "Viêm dạ dày có thể liên quan đến vi khuẩn Helicobacter pylori – thường gọi là H. pylori hoặc HP, sử dụng thuốc giảm đau kháng viêm kéo dài, rượu bia và một số yếu tố khác."
        ]
      },
      {
        "heading": "Loét dạ dày – tá tràng",
        "paragraphs": [
          "Vết loét có thể hình thành tại niêm mạc dạ dày hoặc tá tràng. Người bệnh có thể đau âm ỉ hoặc nóng rát vùng thượng vị, đôi khi đau rõ khi đói, ban đêm hoặc sau ăn.",
          "H. pylori và việc sử dụng một số thuốc giảm đau kháng viêm là những yếu tố quan trọng liên quan đến loét dạ dày – tá tràng. Vết loét có thể gây chảy máu hoặc, hiếm gặp hơn, thủng đường tiêu hóa."
        ]
      },
      {
        "heading": "Trào ngược dạ dày – thực quản",
        "paragraphs": [
          "Nếu cảm giác khó chịu đi kèm ợ chua, nóng rát sau xương ức, đắng miệng hoặc thức ăn trào lên họng, nguyên nhân có thể liên quan đến trào ngược dạ dày – thực quản.",
          "Triệu chứng thường rõ hơn sau bữa ăn, khi nằm hoặc cúi người. Trào ngược kéo dài có thể gây viêm và tổn thương niêm mạc thực quản."
        ]
      },
      {
        "heading": "Khó tiêu chức năng",
        "paragraphs": [
          "Nhiều người có biểu hiện đau thượng vị, nhanh no và đầy bụng kéo dài nhưng nội soi không phát hiện vết loét hay tổn thương cấu trúc rõ ràng. Tình trạng này được gọi là khó tiêu chức năng.",
          "Dù không phát hiện tổn thương thực thể, triệu chứng vẫn có thật và có thể ảnh hưởng đáng kể đến ăn uống, giấc ngủ cũng như chất lượng cuộc sống."
        ]
      },
      {
        "heading": "Thói quen ăn uống và sinh hoạt",
        "paragraphs": [
          "Đau hoặc khó chịu vùng dạ dày có thể nặng hơn khi:",
          "Ăn quá nhanh hoặc ăn quá no.",
          "Thường xuyên dùng đồ nhiều dầu mỡ, cay nóng.",
          "Uống nhiều cà phê, rượu bia hoặc nước có gas.",
          "Hút thuốc.",
          "Thức khuya, ngủ không đủ giấc.",
          "Căng thẳng kéo dài.",
          "Tự dùng thuốc giảm đau hoặc một số loại thuốc khác không đúng hướng dẫn.",
          "Các yếu tố này không phải lúc nào cũng là nguyên nhân duy nhất, nhưng có thể làm triệu chứng khó tiêu và đau thượng vị rõ hơn."
        ]
      },
      {
        "heading": "Nguyên nhân ngoài dạ dày",
        "paragraphs": [
          "Đau vùng bụng trên còn có thể liên quan đến bệnh túi mật, gan, tuyến tụy hoặc thậm chí bệnh tim mạch. Vì vậy, không nên mặc định mọi cơn đau trên rốn đều là viêm dạ dày.",
          "Đặc biệt, đau dữ dội lan ra lưng, đau ngực, khó thở, vã mồ hôi, vàng da hoặc sốt cần được đánh giá y tế sớm.",
          "Nội soi dạ dày giúp phát hiện những gì?",
          "Nội soi dạ dày, còn gọi là nội soi đường tiêu hóa trên, sử dụng một ống mềm nhỏ có camera đưa qua miệng để quan sát:",
          "Thực quản.",
          "Dạ dày.",
          "Tá tràng, là phần đầu của ruột non.",
          "Thông qua hình ảnh nội soi, bác sĩ có thể phát hiện viêm thực quản, viêm dạ dày, vết loét, vị trí chảy máu, polyp, vùng hẹp hoặc các tổn thương bất thường khác.",
          "Trong quá trình nội soi, bác sĩ còn có thể lấy một mẫu mô nhỏ để xét nghiệm H. pylori hoặc kiểm tra bản chất của vùng niêm mạc bất thường. Việc sinh thiết giúp cung cấp thêm thông tin mà quan sát bằng mắt thường đôi khi chưa thể xác định đầy đủ.",
          "Đau dạ dày kéo dài khi nào cần nội soi?",
          "Không phải cứ đau dạ dày là phải nội soi ngay. Chỉ định phụ thuộc vào độ tuổi, đặc điểm cơn đau, thời gian mắc triệu chứng, bệnh nền, thuốc đang sử dụng và các dấu hiệu đi kèm.",
          "Người bệnh nên đi khám để được cân nhắc nội soi trong những trường hợp sau."
        ]
      },
      {
        "heading": "Đau kéo dài hoặc thường xuyên tái phát",
        "paragraphs": [
          "Bạn nên đi khám nếu đau thượng vị:",
          "Kéo dài nhiều tuần không cải thiện.",
          "Xuất hiện thường xuyên.",
          "Ngày càng đau nhiều hơn.",
          "Làm mất ngủ hoặc đánh thức bạn vào ban đêm.",
          "Ảnh hưởng đến ăn uống, công việc và sinh hoạt.",
          "Giảm trong thời gian ngắn rồi nhanh chóng tái phát.",
          "Nội soi có thể được cân nhắc khi triệu chứng không đáp ứng với biện pháp điều trị ban đầu hoặc bác sĩ cần loại trừ tổn thương tại dạ dày – tá tràng."
        ]
      },
      {
        "heading": "Đau kèm khó nuốt hoặc nuốt đau",
        "paragraphs": [
          "Cảm giác thức ăn mắc ở cổ hoặc sau xương ức, phải uống nước mới nuốt được, nuốt đau hoặc tình trạng nuốt nghẹn tăng dần là dấu hiệu cần được kiểm tra sớm.",
          "Khó nuốt là một trong những dấu hiệu cảnh báo quan trọng. Các hướng dẫn quốc tế khuyến nghị người có triệu chứng khó tiêu hoặc trào ngược kèm khó nuốt cần được đánh giá và thường phải nội soi sớm."
        ]
      },
      {
        "heading": "Sụt cân không rõ nguyên nhân",
        "paragraphs": [
          "Giảm cân dù không ăn kiêng, đặc biệt khi đi kèm đau bụng trên, chán ăn, nhanh no hoặc nôn, cần được thăm khám.",
          "Sụt cân không phải lúc nào cũng liên quan đến bệnh ác tính. Tuy nhiên, đây là dấu hiệu không nên bỏ qua vì có thể xuất hiện khi người bệnh bị loét, hẹp đường tiêu hóa, rối loạn hấp thu hoặc một số bệnh lý nghiêm trọng hơn."
        ]
      },
      {
        "heading": "Nôn kéo dài hoặc nôn tái diễn",
        "paragraphs": [
          "Buồn nôn thoáng qua có thể liên quan đến ăn uống, nhưng nôn nhiều lần, nôn kéo dài hoặc thường xuyên nôn sau khi ăn có thể gợi ý tình trạng viêm nặng, loét, hẹp đường ra của dạ dày hoặc rối loạn vận động tiêu hóa.",
          "Nôn kéo dài đi kèm mất nước, mệt lả, đau tăng dần hoặc không thể ăn uống cần được khám sớm. Nôn và sụt cân nằm trong nhóm dấu hiệu cảnh báo thường được bác sĩ cân nhắc khi quyết định nội soi."
        ]
      },
      {
        "heading": "Thiếu máu hoặc mệt mỏi không rõ nguyên nhân",
        "paragraphs": [
          "Chảy máu tiêu hóa với lượng nhỏ nhưng kéo dài có thể không nhìn thấy bằng mắt thường. Người bệnh đôi khi chỉ nhận thấy:",
          "Da xanh hoặc nhợt nhạt.",
          "Mệt mỏi nhiều.",
          "Chóng mặt.",
          "Hụt hơi khi vận động.",
          "Tim đập nhanh.",
          "Kết quả xét nghiệm cho thấy thiếu máu thiếu sắt.",
          "Khi đau dạ dày kéo dài đi kèm thiếu máu không rõ nguyên nhân, bác sĩ có thể chỉ định nội soi để tìm vị trí chảy máu hoặc tổn thương tiềm ẩn."
        ]
      },
      {
        "heading": "Có tiền sử gia đình mắc ung thư dạ dày",
        "paragraphs": [
          "Người có cha mẹ, anh chị em ruột hoặc người thân gần mắc ung thư dạ dày cần thông báo với bác sĩ, nhất là khi xuất hiện đau thượng vị mới, chán ăn, sụt cân, thiếu máu hoặc khó tiêu kéo dài.",
          "Tiền sử gia đình không có nghĩa người bệnh chắc chắn mắc ung thư, nhưng có thể ảnh hưởng đến thời điểm bác sĩ chỉ định nội soi và kế hoạch theo dõi."
        ]
      },
      {
        "heading": "Sử dụng thuốc giảm đau kháng viêm kéo dài",
        "paragraphs": [
          "Một số thuốc giảm đau kháng viêm có thể gây kích ứng, viêm, loét hoặc chảy máu đường tiêu hóa, đặc biệt khi dùng kéo dài, dùng liều cao hoặc phối hợp với thuốc chống đông.",
          "Người đang dùng aspirin, thuốc chống đông, thuốc chống kết tập tiểu cầu hoặc thuốc giảm đau thường xuyên cần cung cấp đầy đủ thông tin cho bác sĩ. Không được tự ý ngừng thuốc, vì việc dừng thuốc cũng có thể gây ra những nguy cơ khác.",
          "Hướng dẫn của Hội Tiêu hóa Hoa Kỳ xem việc dùng thuốc kháng viêm kéo dài, thiếu máu thiếu sắt, tiền sử loét và tiền sử gia đình ung thư dạ dày là những yếu tố cần được cân nhắc khi đánh giá H. pylori và chỉ định nội soi."
        ]
      },
      {
        "heading": "Triệu chứng mới xuất hiện ở người lớn tuổi",
        "paragraphs": [
          "Nguy cơ phát hiện tổn thương thực thể tăng theo tuổi. Một số hướng dẫn quốc tế thường cân nhắc nội soi ở người từ khoảng 60 tuổi trở lên khi xuất hiện triệu chứng khó tiêu mới, ngay cả khi chưa có dấu hiệu cảnh báo rõ ràng.",
          "Tuy nhiên, tuổi không phải tiêu chí duy nhất. Bác sĩ có thể chỉ định nội soi ở người trẻ hơn khi có yếu tố nguy cơ, triệu chứng bất thường hoặc tiền sử gia đình liên quan.",
          "Dấu hiệu nào cần đến bệnh viện ngay?",
          "Người bệnh không nên chờ đến lịch khám thông thường nếu xuất hiện:",
          "Nôn ra máu đỏ tươi.",
          "Nôn ra dịch màu nâu đen giống bã cà phê.",
          "Đi ngoài phân đen, dính và có mùi bất thường.",
          "Đi ngoài ra máu kèm mệt lả hoặc chóng mặt.",
          "Đau bụng đột ngột, dữ dội và không giảm.",
          "Choáng váng, ngất hoặc tim đập nhanh.",
          "Khó thở, đau ngực hoặc vã mồ hôi.",
          "Bụng cứng, sốt hoặc nôn liên tục.",
          "Những biểu hiện này có thể liên quan đến chảy máu tiêu hóa, thủng ổ loét hoặc một tình trạng cấp cứu khác. Người bệnh cần được đưa đến cơ sở y tế ngay, không nên tự uống thuốc giảm đau rồi tiếp tục theo dõi tại nhà.",
          "Có phải ai đau dạ dày kéo dài cũng cần nội soi?",
          "Không phải tất cả trường hợp đều cần nội soi ngay từ lần khám đầu tiên.",
          "Ở người trẻ, không có dấu hiệu cảnh báo và sức khỏe tổng thể ổn định, bác sĩ có thể khai thác chế độ ăn uống, kiểm tra thuốc đang dùng, thực hiện xét nghiệm H. pylori không xâm lấn hoặc áp dụng một số biện pháp điều trị ban đầu trước khi quyết định nội soi.",
          "Hướng dẫn của Hội Tiêu hóa Hoa Kỳ cho phép cân nhắc xét nghiệm H. pylori không xâm lấn ở người dưới 60 tuổi có triệu chứng khó tiêu nhưng không có dấu hiệu cảnh báo. Khi nội soi được thực hiện, bác sĩ có thể lấy mẫu sinh thiết để kiểm tra H. pylori.",
          "Ngược lại, nội soi thường được ưu tiên hơn khi:",
          "Có dấu hiệu cảnh báo.",
          "Triệu chứng mới xuất hiện ở tuổi cao hơn.",
          "Điều trị ban đầu không hiệu quả.",
          "Đau tái phát nhiều lần.",
          "Có tiền sử loét hoặc chảy máu tiêu hóa.",
          "Đang sử dụng thuốc có nguy cơ gây tổn thương dạ dày.",
          "Bác sĩ nghi ngờ có tổn thương cần sinh thiết.",
          "Quyết định nội soi cần được cá thể hóa. Người bệnh không nên vì sợ nội soi mà trì hoãn kiểm tra, nhưng cũng không cần quá lo lắng và tự yêu cầu thực hiện khi chưa được bác sĩ đánh giá.",
          "Trước khi nội soi dạ dày cần chuẩn bị gì?",
          "Nếu được chỉ định nội soi, người bệnh thường cần nhịn ăn để dạ dày rỗng, giúp bác sĩ quan sát rõ hơn và giảm nguy cơ trào ngược thức ăn vào đường thở.",
          "Bạn cần thông báo với bác sĩ nếu:",
          "Đang mang thai hoặc nghi ngờ có thai.",
          "Có bệnh tim, phổi, gan, thận hoặc đái tháo đường.",
          "Từng dị ứng thuốc hoặc gặp phản ứng khi gây mê.",
          "Có rối loạn đông máu.",
          "Đang dùng thuốc chống đông, aspirin hoặc thuốc điều trị bệnh nền.",
          "Có răng giả tháo lắp hoặc răng lung lay.",
          "Thời gian nhịn ăn và cách sử dụng thuốc trước nội soi có thể khác nhau giữa từng người. Hãy tuân thủ hướng dẫn cụ thể của cơ sở y tế và không tự ý ngừng thuốc đang điều trị.",
          "Người đau dạ dày kéo dài nên làm gì trong thời gian chờ khám?",
          "Trong khi chờ được bác sĩ đánh giá, người bệnh có thể ghi lại:",
          "Vị trí và tính chất cơn đau.",
          "Thời điểm đau liên quan đến bữa ăn.",
          "Những món ăn hoặc đồ uống làm triệu chứng nặng hơn.",
          "Tần suất buồn nôn, nôn, ợ chua hoặc đầy bụng.",
          "Sự thay đổi cân nặng và cảm giác ngon miệng.",
          "Tên các thuốc và thực phẩm bổ sung đang dùng.",
          "Tiền sử nội soi, loét dạ dày hoặc nhiễm H. pylori.",
          "Nên ăn đúng bữa, hạn chế ăn quá no và tránh rượu bia, thuốc lá hoặc những thực phẩm khiến triệu chứng tăng lên. Không nên tự dùng kéo dài thuốc giảm đau, thuốc kháng sinh hay thuốc điều trị dạ dày theo đơn cũ của người khác."
        ]
      },
      {
        "heading": "Khám và nội soi tiêu hóa tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi đau vùng thượng vị kéo dài, thường xuyên tái phát hoặc đi kèm dấu hiệu bất thường, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám.",
          "Dựa trên đặc điểm triệu chứng, tuổi, bệnh nền và thuốc đang sử dụng, bác sĩ sẽ tư vấn các kiểm tra phù hợp như xét nghiệm máu, xét nghiệm H. pylori, siêu âm hoặc nội soi đường tiêu hóa trên.",
          "Trường hợp cần nội soi, người bệnh sẽ được hướng dẫn chuẩn bị và lựa chọn phương pháp phù hợp với tình trạng sức khỏe. Việc thăm khám sớm giúp xác định đau bụng có thực sự xuất phát từ dạ dày hay liên quan đến một cơ quan khác, tránh tình trạng tự điều trị kéo dài nhưng không đúng nguyên nhân."
        ]
      },
      {
        "heading": "Đừng để cơn đau trở thành “chuyện quen rồi bỏ qua”",
        "paragraphs": [
          "Đau dạ dày kéo dài có thể bắt nguồn từ thói quen sinh hoạt, khó tiêu chức năng, viêm hoặc loét dạ dày. Tuy nhiên, chỉ dựa vào vị trí và cảm giác đau thường chưa đủ để xác định nguyên nhân.",
          "Nội soi không phải lúc nào cũng cần thực hiện ngay, nhưng thường được cân nhắc khi triệu chứng kéo dài, tái phát, không đáp ứng điều trị hoặc đi kèm khó nuốt, nôn nhiều, sụt cân, thiếu máu và dấu hiệu xuất huyết tiêu hóa.",
          "Thay vì tự mua thuốc mỗi khi dạ dày “lên tiếng”, người bệnh nên đi khám để được đánh giá đúng và lựa chọn thời điểm nội soi phù hợp.",
          "Nội dung bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "gan-nhiem-mo-nguyen-nhan-xet-nghiem-va-cach-theo-doi": {
    "sourceFile": "33.Gan nhiễm mỡ nguyên nhân, xét nghiệm và cách theo dõi.docx",
    "title": "Gan nhiễm mỡ: Nguyên nhân, xét nghiệm và cách theo dõi",
    "excerpt": "Gan nhiễm mỡ thường được phát hiện khá tình cờ khi khám sức khỏe, làm xét nghiệm men gan hoặc siêu âm bụng. Nhiều người thấy cơ thể vẫn khỏe nên cho rằng đây chỉ là một thay đổi nhỏ, chưa cần quan tâm.",
    "intro": [
      "Gan nhiễm mỡ thường được phát hiện khá tình cờ khi khám sức khỏe, làm xét nghiệm men gan hoặc siêu âm bụng. Nhiều người thấy cơ thể vẫn khỏe nên cho rằng đây chỉ là một thay đổi nhỏ, chưa cần quan tâm.",
      "Thực tế, phần lớn trường hợp gan nhiễm mỡ ở giai đoạn đầu có thể được kiểm soát tốt nếu điều chỉnh lối sống và theo dõi đúng cách. Tuy nhiên, một số người có thể tiến triển thành viêm gan, xơ hóa và xơ gan mà không xuất hiện triệu chứng rõ ràng. Vì vậy, điều quan trọng không chỉ là biết gan có mỡ hay không, mà còn phải đánh giá mức độ tổn thương và các yếu tố nguy cơ đi kèm.",
      "Gan nhiễm mỡ là gì?",
      "Gan nhiễm mỡ là tình trạng lượng mỡ tích tụ trong tế bào gan nhiều hơn bình thường. Hiện nay, thuật ngữ bệnh gan nhiễm mỡ liên quan rối loạn chuyển hóa, viết tắt là MASLD, được sử dụng cho những trường hợp có mỡ trong gan kèm ít nhất một yếu tố nguy cơ tim mạch – chuyển hóa như thừa cân, đường huyết cao, tăng huyết áp hoặc rối loạn mỡ máu.",
      "Có thể hình dung gan giống như một “nhà máy chuyển hóa” của cơ thể. Khi năng lượng được đưa vào quá nhiều nhưng không được sử dụng hết, một phần chất béo có thể tích tụ tại gan.",
      "Gan nhiễm mỡ thường được chia thành hai tình trạng chính:",
      "Gan nhiễm mỡ đơn thuần: Có mỡ tích tụ nhưng chưa có nhiều dấu hiệu viêm hoặc tổn thương tế bào gan.",
      "Viêm gan nhiễm mỡ: Ngoài mỡ còn có tình trạng viêm và tổn thương tế bào gan. Theo thời gian, bệnh có thể gây xơ hóa, xơ gan và làm tăng nguy cơ ung thư gan.",
      "Không phải người nào bị gan nhiễm mỡ cũng tiến triển thành bệnh gan nặng. Tuy nhiên, rất khó đánh giá nguy cơ chỉ dựa vào cảm giác của người bệnh hoặc một kết quả siêu âm đơn lẻ.",
      "Nguyên nhân nào gây gan nhiễm mỡ?",
      "Gan nhiễm mỡ không chỉ xuất hiện ở người uống nhiều rượu bia. Tình trạng này có thể liên quan đến nhiều nguyên nhân khác nhau."
    ],
    "sections": [
      {
        "heading": "Rối loạn chuyển hóa",
        "paragraphs": [
          "Đây là nhóm nguyên nhân rất phổ biến. Những yếu tố làm tăng nguy cơ gồm:",
          "Thừa cân, béo phì, đặc biệt là béo bụng.",
          "Tiền đái tháo đường hoặc đái tháo đường type 2.",
          "Tăng triglyceride hoặc rối loạn cholesterol.",
          "Tăng huyết áp.",
          "Hội chứng chuyển hóa.",
          "Ít vận động.",
          "Chế độ ăn nhiều đường, nước ngọt, tinh bột tinh chế và thực phẩm giàu năng lượng.",
          "Càng có nhiều yếu tố chuyển hóa, nguy cơ viêm gan và xơ hóa gan càng cần được quan tâm. Người không béo vẫn có thể bị gan nhiễm mỡ, nhất là khi có vòng bụng lớn, rối loạn đường huyết hoặc rối loạn mỡ máu."
        ]
      },
      {
        "heading": "Sử dụng rượu bia",
        "paragraphs": [
          "Rượu bia có thể gây tích tụ mỡ, viêm và tổn thương gan. Mức độ ảnh hưởng phụ thuộc vào lượng uống, tần suất, thời gian sử dụng, giới tính, thể trạng và bệnh lý đi kèm.",
          "Rối loạn chuyển hóa và việc sử dụng rượu bia cũng có thể cùng tồn tại. Vì vậy, khi đi khám, người bệnh nên chia sẻ trung thực về lượng rượu bia đang sử dụng để bác sĩ phân loại nguyên nhân và đánh giá nguy cơ phù hợp."
        ]
      },
      {
        "heading": "Thuốc và một số bệnh lý khác",
        "paragraphs": [
          "Một số thuốc có thể liên quan đến tình trạng tích tụ mỡ hoặc tổn thương gan, chẳng hạn corticosteroid, amiodarone, methotrexate, tamoxifen và một số thuốc điều trị khác. Ngoài ra, gan nhiễm mỡ có thể gặp trong suy giáp, hội chứng buồng trứng đa nang, suy dinh dưỡng, giảm cân quá nhanh, viêm gan virus hoặc một số bệnh di truyền hiếm gặp.",
          "Người bệnh không nên tự ngừng thuốc khi phát hiện gan nhiễm mỡ. Bác sĩ cần xem xét lợi ích, nguy cơ và lựa chọn phương án điều chỉnh nếu thực sự cần thiết.",
          "Gan nhiễm mỡ có triệu chứng không?",
          "Gan nhiễm mỡ thường được gọi là một tình trạng “âm thầm” vì nhiều người gần như không có triệu chứng. Ngay cả khi bệnh đã gây tổn thương đáng kể, biểu hiện bên ngoài đôi khi vẫn khá mờ nhạt.",
          "Một số người có thể gặp:",
          "Mệt mỏi kéo dài.",
          "Cảm giác nặng hoặc khó chịu ở vùng bụng trên bên phải.",
          "Ăn uống kém ngon.",
          "Đầy bụng hoặc khó tiêu.",
          "Men gan tăng khi xét nghiệm.",
          "Những biểu hiện này không đặc hiệu và có thể liên quan đến nhiều bệnh lý khác. Vì vậy, không thể chẩn đoán gan nhiễm mỡ chỉ dựa trên triệu chứng.",
          "Gan nhiễm mỡ có nguy hiểm không?",
          "Gan nhiễm mỡ đơn thuần thường chưa gây ảnh hưởng rõ rệt đến chức năng gan. Tuy nhiên, nếu tình trạng tích tụ mỡ đi kèm viêm kéo dài, các tế bào gan có thể bị tổn thương và hình thành mô sẹo.",
          "Quá trình này có thể diễn ra theo các giai đoạn:",
          "Gan nhiễm mỡ → viêm gan nhiễm mỡ → xơ hóa gan → xơ gan.",
          "Không phải người bệnh nào cũng đi qua toàn bộ các giai đoạn trên. Nguy cơ thường cao hơn ở người có đái tháo đường type 2, béo phì, nhiều yếu tố chuyển hóa, men gan tăng kéo dài hoặc sử dụng rượu bia.",
          "Ngoài bệnh gan, người bị gan nhiễm mỡ liên quan chuyển hóa cũng cần được kiểm soát nguy cơ tim mạch. Đường huyết, huyết áp và mỡ máu không chỉ ảnh hưởng đến gan mà còn liên quan trực tiếp đến sức khỏe tim và mạch máu.",
          "Khi nào nên kiểm tra gan nhiễm mỡ?",
          "Bạn nên chủ động trao đổi với bác sĩ khi thuộc một trong các nhóm sau:",
          "Đang thừa cân, béo phì hoặc có vòng bụng lớn.",
          "Mắc đái tháo đường type 2 hoặc tiền đái tháo đường.",
          "Có tăng huyết áp, triglyceride cao hoặc rối loạn cholesterol.",
          "Thường xuyên sử dụng rượu bia.",
          "Men gan tăng không rõ nguyên nhân.",
          "Siêu âm trước đây phát hiện gan nhiễm mỡ.",
          "Đang sử dụng thuốc có khả năng ảnh hưởng đến gan.",
          "Gia đình có người mắc bệnh gan mạn tính.",
          "Việc kiểm tra không chỉ nhằm xác nhận gan có mỡ. Mục tiêu quan trọng hơn là tìm nguyên nhân, phát hiện nguy cơ xơ hóa và đánh giá các bệnh chuyển hóa đi kèm.",
          "Người bị gan nhiễm mỡ cần làm những xét nghiệm nào?",
          "Tùy từng trường hợp, bác sĩ có thể chỉ định một hoặc nhiều nhóm kiểm tra dưới đây."
        ]
      },
      {
        "heading": "Xét nghiệm chức năng gan",
        "paragraphs": [
          "Các chỉ số thường được kiểm tra gồm:",
          "ALT và AST.",
          "GGT.",
          "Bilirubin.",
          "Albumin.",
          "Một số chỉ số đông máu khi cần thiết.",
          "ALT, AST tăng có thể gợi ý tế bào gan đang bị tổn thương. Tuy nhiên, mức men gan không phản ánh đầy đủ lượng mỡ hoặc mức độ xơ hóa. Người có men gan trong giới hạn vẫn có thể cần đánh giá thêm nếu có nhiều yếu tố nguy cơ."
        ]
      },
      {
        "heading": "Công thức máu và tiểu cầu",
        "paragraphs": [
          "Số lượng tiểu cầu có thể được sử dụng cùng tuổi, AST và ALT để tính chỉ số FIB-4. Đây là một công cụ không xâm lấn giúp bác sĩ bước đầu phân loại nguy cơ xơ hóa gan tiến triển.",
          "FIB-4 không phải là xét nghiệm chẩn đoán tuyệt đối. Kết quả cần được diễn giải theo độ tuổi, bệnh nền và tình trạng sức khỏe cụ thể."
        ]
      },
      {
        "heading": "Xét nghiệm đường huyết và mỡ máu",
        "paragraphs": [
          "Người bệnh có thể được kiểm tra:",
          "Đường huyết lúc đói.",
          "HbA1c.",
          "Cholesterol toàn phần.",
          "LDL-cholesterol và HDL-cholesterol.",
          "Triglyceride.",
          "Những xét nghiệm này giúp phát hiện hoặc theo dõi các rối loạn chuyển hóa có liên quan trực tiếp đến gan nhiễm mỡ."
        ]
      },
      {
        "heading": "Xét nghiệm tìm nguyên nhân khác",
        "paragraphs": [
          "Bác sĩ có thể chỉ định xét nghiệm viêm gan B, viêm gan C, chức năng tuyến giáp, chuyển hóa sắt hoặc các xét nghiệm chuyên sâu khác khi có dấu hiệu nghi ngờ.",
          "Mục đích là tránh quy mọi trường hợp men gan tăng hoặc gan có mỡ về một nguyên nhân duy nhất.",
          "Siêu âm có đủ để đánh giá gan nhiễm mỡ không?",
          "Siêu âm bụng là phương pháp phổ biến, không gây đau và có thể phát hiện dấu hiệu mỡ tích tụ trong gan. Kết quả thường được mô tả theo mức độ nhẹ, vừa hoặc nặng, đôi khi được gọi là gan nhiễm mỡ độ 1, độ 2 và độ 3.",
          "Tuy nhiên, siêu âm thông thường có hạn chế: phương pháp này có thể nhận biết mỡ nhưng không đánh giá chính xác tình trạng viêm và mức độ xơ hóa. Vì vậy:",
          "Gan nhiễm mỡ độ 1 không đồng nghĩa chắc chắn gan hoàn toàn an toàn.",
          "Gan nhiễm mỡ độ 3 không tự động có nghĩa người bệnh đã bị xơ gan.",
          "Không nên chỉ theo dõi bằng cách so sánh “độ” trên siêu âm.",
          "Kết quả siêu âm cần được kết hợp với xét nghiệm máu và đánh giá nguy cơ xơ hóa.",
          "Khi nào cần đo độ đàn hồi gan?",
          "Đo độ đàn hồi gan, thường được biết đến qua kỹ thuật FibroScan hoặc các phương pháp siêu âm đàn hồi mô, giúp ước tính độ cứng của gan. Gan càng cứng có thể càng gợi ý nhiều mô xơ, dù kết quả vẫn có thể bị ảnh hưởng bởi một số yếu tố khác.",
          "Bác sĩ có thể đề nghị đo độ đàn hồi gan khi:",
          "FIB-4 không thuộc nhóm nguy cơ thấp.",
          "Men gan tăng kéo dài.",
          "Người bệnh có đái tháo đường, béo phì hoặc nhiều yếu tố chuyển hóa.",
          "Hình ảnh siêu âm gợi ý bệnh gan mạn tính.",
          "Cần đánh giá sâu hơn nguy cơ xơ hóa.",
          "Các hướng dẫn hiện nay khuyến nghị cách tiếp cận theo từng bước: sử dụng chỉ số từ xét nghiệm máu trước, sau đó thực hiện đo độ đàn hồi gan hoặc kiểm tra chuyên sâu khi cần.",
          "Có phải ai cũng cần sinh thiết gan?",
          "Không. Sinh thiết gan là thủ thuật lấy một mẫu mô nhỏ để kiểm tra dưới kính hiển vi. Phương pháp này có thể giúp xác định rõ tình trạng viêm và mức độ xơ hóa, nhưng không được thực hiện thường quy cho tất cả người bị gan nhiễm mỡ.",
          "Sinh thiết thường chỉ được cân nhắc khi các xét nghiệm không xâm lấn chưa cho kết luận rõ, nghi ngờ xơ hóa tiến triển hoặc cần phân biệt với một bệnh gan khác.",
          "Người bị gan nhiễm mỡ nên theo dõi như thế nào?",
          "Không có một lịch tái khám giống nhau cho tất cả mọi người. Tần suất theo dõi phụ thuộc vào mức độ gan nhiễm mỡ, nguy cơ xơ hóa, men gan, tuổi và các bệnh chuyển hóa đi kèm.",
          "Một kế hoạch theo dõi thường tập trung vào những nội dung sau:"
        ]
      },
      {
        "heading": "Theo dõi cân nặng và vòng bụng",
        "paragraphs": [
          "Người bệnh nên ghi nhận sự thay đổi cân nặng theo tuần hoặc theo tháng. Mục tiêu không phải giảm càng nhanh càng tốt mà là giảm từ từ, bền vững và phù hợp với thể trạng."
        ]
      },
      {
        "heading": "Kiểm soát huyết áp, đường huyết và mỡ máu",
        "paragraphs": [
          "Đây là những chỉ số quan trọng vì gan nhiễm mỡ thường nằm trong một “bức tranh chuyển hóa” rộng hơn. Chỉ tập trung vào men gan mà bỏ qua đường huyết hoặc huyết áp sẽ chưa đủ."
        ]
      },
      {
        "heading": "Kiểm tra lại xét nghiệm gan",
        "paragraphs": [
          "Bác sĩ có thể hẹn kiểm tra ALT, AST, tiểu cầu và các chỉ số liên quan sau một thời gian điều chỉnh lối sống hoặc điều trị bệnh nền."
        ]
      },
      {
        "heading": "Đánh giá lại nguy cơ xơ hóa",
        "paragraphs": [
          "Ở người trưởng thành có nguy cơ thấp, việc đánh giá FIB-4 có thể được lặp lại định kỳ. Người có tiền đái tháo đường, đái tháo đường type 2 hoặc nhiều yếu tố chuyển hóa thường cần được kiểm tra sát hơn. Theo hướng dẫn AASLD, khoảng đánh giá lại có thể từ 1–3 năm tùy nhóm nguy cơ, nhưng lịch cụ thể cần do bác sĩ quyết định."
        ]
      },
      {
        "heading": "Không tự theo dõi bằng một chỉ số đơn lẻ",
        "paragraphs": [
          "Men gan giảm là tín hiệu tích cực nhưng chưa đủ để khẳng định mỡ và xơ hóa đã cải thiện hoàn toàn. Ngược lại, một kết quả men gan tăng nhẹ cũng chưa thể nói lên mức độ nặng nếu chưa được đánh giá toàn diện.",
          "Làm gì để cải thiện gan nhiễm mỡ?"
        ]
      },
      {
        "heading": "Giảm cân từ từ nếu đang thừa cân",
        "paragraphs": [
          "Giảm khoảng 3–5% trọng lượng cơ thể có thể giúp giảm lượng mỡ trong gan. Mức giảm khoảng 7–10% có thể mang lại thêm lợi ích đối với viêm và xơ hóa ở một số người. Việc giảm cân nên diễn ra từ từ vì nhịn ăn hoặc giảm cân quá nhanh có thể làm tình trạng gan xấu đi."
        ]
      },
      {
        "heading": "Điều chỉnh chế độ ăn",
        "paragraphs": [
          "Người bệnh nên ưu tiên:",
          "Rau xanh, trái cây nguyên quả với lượng phù hợp.",
          "Cá, thịt nạc, trứng và các nguồn đạm phù hợp.",
          "Ngũ cốc nguyên hạt.",
          "Chất béo không bão hòa từ cá, hạt và dầu thực vật.",
          "Khẩu phần vừa đủ với nhu cầu cơ thể.",
          "Nên hạn chế nước ngọt, trà sữa, bánh kẹo, đồ chiên rán, thực phẩm chế biến sẵn, mỡ động vật và việc ăn quá nhiều tinh bột tinh chế.",
          "Không nhất thiết phải “kiêng sạch” một nhóm thực phẩm. Một chế độ ăn có thể duy trì lâu dài thường hiệu quả hơn chế độ quá nghiêm ngặt nhưng chỉ thực hiện được vài tuần."
        ]
      },
      {
        "heading": "Tăng vận động",
        "paragraphs": [
          "Hoạt động thể chất có thể giúp giảm mỡ trong gan ngay cả khi cân nặng chưa thay đổi nhiều. Người bệnh có thể bắt đầu bằng đi bộ nhanh, đạp xe, bơi hoặc tập sức mạnh với mức độ phù hợp.",
          "Người lớn tuổi, người có bệnh tim mạch, xương khớp hoặc bệnh nền nên trao đổi với bác sĩ trước khi bắt đầu chương trình tập luyện cường độ cao."
        ]
      },
      {
        "heading": "Hạn chế hoặc ngừng rượu bia",
        "paragraphs": [
          "Rượu bia có thể làm tăng gánh nặng cho gan và thúc đẩy tổn thương ở người đã có gan nhiễm mỡ. Người có viêm gan, xơ hóa hoặc bệnh gan khác có thể được khuyến cáo tránh hoàn toàn."
        ]
      },
      {
        "heading": "Không tự dùng thuốc “mát gan” hoặc giải độc gan",
        "paragraphs": [
          "Không phải sản phẩm gắn nhãn thảo dược hoặc bổ gan đều an toàn. Một số thuốc, thực phẩm bổ sung và thảo dược có thể gây tổn thương gan hoặc tương tác với thuốc đang sử dụng.",
          "Việc dùng thuốc điều trị cần dựa trên nguyên nhân, mức độ xơ hóa và bệnh nền. Người bệnh không nên mua thuốc theo lời truyền miệng hoặc dùng lại đơn của người khác.",
          "Dấu hiệu nào cần đi khám sớm?",
          "Người bệnh nên đi khám nếu có một trong những tình trạng sau:",
          "Men gan tăng kéo dài hoặc tăng dần.",
          "Mệt mỏi, chán ăn, sụt cân không rõ nguyên nhân.",
          "Đau hoặc nặng vùng bụng trên bên phải kéo dài.",
          "Phù chân, bụng to nhanh.",
          "Vàng da hoặc vàng mắt.",
          "Dễ bầm tím, chảy máu bất thường.",
          "Nôn ra máu hoặc đi ngoài phân đen.",
          "Lú lẫn, buồn ngủ bất thường.",
          "Đang mắc đái tháo đường, béo phì và đã phát hiện gan nhiễm mỡ nhưng chưa được đánh giá xơ hóa.",
          "Các biểu hiện như nôn ra máu, đi ngoài phân đen, lú lẫn, vàng da tăng nhanh hoặc bụng trướng nhiều cần được kiểm tra tại cơ sở y tế ngay."
        ]
      },
      {
        "heading": "Kiểm tra và theo dõi gan nhiễm mỡ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi phát hiện gan nhiễm mỡ, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ khai thác tiền sử, đánh giá chế độ ăn uống, mức sử dụng rượu bia và các bệnh chuyển hóa đi kèm.",
          "Tùy tình trạng cụ thể, người bệnh có thể được chỉ định xét nghiệm chức năng gan, đường huyết, mỡ máu, viêm gan virus, siêu âm bụng hoặc phương pháp đánh giá xơ hóa phù hợp. Kết quả sẽ giúp bác sĩ xây dựng kế hoạch theo dõi và tư vấn điều chỉnh lối sống thay vì chỉ dựa vào một dòng kết luận “gan nhiễm mỡ” trên phiếu siêu âm."
        ]
      },
      {
        "heading": "Chủ động theo dõi để bảo vệ gan lâu dài",
        "paragraphs": [
          "Gan nhiễm mỡ không phải lúc nào cũng nguy hiểm ngay lập tức, nhưng cũng không nên xem là một phát hiện không đáng quan tâm. Kiểm soát cân nặng, đường huyết, huyết áp, mỡ máu và hạn chế rượu bia có thể giúp giảm gánh nặng cho gan và cải thiện sức khỏe toàn thân.",
          "Nếu đã được chẩn đoán gan nhiễm mỡ, bạn nên theo dõi theo lịch hẹn của bác sĩ, không tự dùng thuốc bổ gan và không chỉ dựa vào triệu chứng để đánh giá bệnh. Phát hiện sớm nguy cơ xơ hóa sẽ giúp việc chăm sóc và điều trị chủ động hơn.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "viem-gan-b-vi-sao-can-kiem-tra-dinh-ky": {
    "sourceFile": "34.Viêm gan B vì sao cần kiểm tra định kỳ.docx",
    "title": "Viêm gan B: Vì sao cần kiểm tra định kỳ ngay cả khi không có triệu chứng?",
    "excerpt": "Viêm gan B thường khiến người bệnh băn khoăn: “Tôi vẫn ăn ngủ bình thường, không đau bụng, không vàng da thì có cần đi khám lại không?”. Đây là suy nghĩ khá phổ biến bởi viêm gan B mạn tính có thể diễn tiến âm thầm trong nhiều năm.",
    "intro": [
      "Viêm gan B thường khiến người bệnh băn khoăn: “Tôi vẫn ăn ngủ bình thường, không đau bụng, không vàng da thì có cần đi khám lại không?”. Đây là suy nghĩ khá phổ biến bởi viêm gan B mạn tính có thể diễn tiến âm thầm trong nhiều năm.",
      "Không có triệu chứng không đồng nghĩa với việc virus đã biến mất hoặc gan hoàn toàn khỏe mạnh. Việc kiểm tra định kỳ giúp bác sĩ theo dõi mức độ hoạt động của virus, đánh giá tổn thương gan, xác định thời điểm cần điều trị và phát hiện sớm các biến chứng như xơ gan hoặc ung thư gan.",
      "Viêm gan B là bệnh gì?",
      "Viêm gan B là bệnh nhiễm trùng gan do virus viêm gan B, còn gọi là HBV, gây ra. Bệnh có thể xuất hiện dưới hai dạng:",
      "Viêm gan B cấp tính: Xảy ra trong khoảng sáu tháng đầu sau khi cơ thể nhiễm virus. Một số người có thể tự loại bỏ virus và hồi phục.",
      "Viêm gan B mạn tính: Virus tồn tại lâu dài trong cơ thể và có khả năng gây tổn thương gan theo thời gian.",
      "Viêm gan B mạn tính có thể dẫn đến viêm gan kéo dài, xơ hóa, xơ gan và ung thư gan. Tuy nhiên, mức độ tiến triển không giống nhau ở tất cả người bệnh. Có người duy trì tình trạng ổn định trong nhiều năm, trong khi người khác có thể xuất hiện tổn thương gan sớm hơn.",
      "Bệnh lây chủ yếu qua máu và một số dịch cơ thể, từ mẹ sang con trong lúc sinh, qua quan hệ tình dục không được bảo vệ hoặc khi dùng chung kim tiêm và những dụng cụ có thể dính máu. Viêm gan B không lây qua ăn uống chung, ôm, bắt tay, ho hoặc hắt hơi.",
      "Vì sao viêm gan B thường khó nhận biết?",
      "Gan có khả năng hoạt động bền bỉ và bù trừ khá tốt. Ngay cả khi một phần tế bào gan đang bị tổn thương, cơ thể vẫn có thể chưa biểu hiện triệu chứng rõ ràng.",
      "Phần lớn người mắc viêm gan B mạn tính không cảm thấy bất thường trong thời gian dài. Một số người chỉ phát hiện bệnh khi khám sức khỏe, xét nghiệm trước khi mang thai, hiến máu hoặc kiểm tra vì một thành viên trong gia đình mắc viêm gan B.",
      "Khi xuất hiện, triệu chứng có thể gồm:",
      "Mệt mỏi kéo dài.",
      "Ăn uống kém ngon.",
      "Buồn nôn hoặc khó chịu vùng bụng trên bên phải.",
      "Nước tiểu sẫm màu.",
      "Da hoặc mắt vàng.",
      "Bụng to, phù chân.",
      "Dễ bầm tím hoặc chảy máu.",
      "Những triệu chứng rõ rệt đôi khi chỉ xuất hiện khi gan đã bị tổn thương đáng kể. Vì vậy, chờ đến lúc cơ thể “lên tiếng” mới đi khám có thể làm mất cơ hội phát hiện bệnh ở giai đoạn sớm."
    ],
    "sections": [
      {
        "heading": "Virus viêm gan B có thể thay đổi mức độ hoạt động",
        "paragraphs": [
          "Viêm gan B mạn tính không phải là một trạng thái cố định. Bệnh có thể trải qua nhiều giai đoạn với tải lượng virus, men gan và mức độ tổn thương gan khác nhau.",
          "Có thời điểm virus hoạt động thấp, men gan bình thường và người bệnh chưa cần dùng thuốc. Tuy nhiên, sau một thời gian, virus có thể hoạt động mạnh trở lại, khiến men gan tăng và thúc đẩy quá trình xơ hóa.",
          "Hướng dẫn chuyên môn hiện nay xem viêm gan B mạn tính là một bệnh có diễn biến động, cần được đánh giá nhiều lần thay vì kết luận từ một kết quả xét nghiệm đơn lẻ.",
          "Điều này giải thích vì sao một người từng được thông báo “virus đang ngủ” hoặc “chưa cần điều trị” vẫn phải tái khám. Kết luận đó chỉ phản ánh tình trạng tại thời điểm kiểm tra, không phải sự bảo đảm rằng bệnh sẽ luôn ổn định."
        ]
      },
      {
        "heading": "Kiểm tra định kỳ giúp phát hiện virus hoạt động trở lại",
        "paragraphs": [
          "Một trong những mục tiêu quan trọng của theo dõi viêm gan B là xác định virus đang nhân lên ở mức độ nào.",
          "Xét nghiệm HBV DNA, thường được gọi là đo tải lượng virus, cho biết lượng virus viêm gan B trong máu. Kết quả này được kết hợp với men gan, tình trạng xơ hóa, tuổi, bệnh nền và một số yếu tố khác để bác sĩ quyết định:",
          "Người bệnh có cần dùng thuốc kháng virus hay chưa.",
          "Trường hợp chưa dùng thuốc có thể tiếp tục theo dõi hay không.",
          "Thuốc đang sử dụng có kiểm soát virus hiệu quả không.",
          "Người bệnh có dấu hiệu kháng thuốc hoặc tuân thủ điều trị chưa tốt không.",
          "Không nên chỉ nhìn vào một kết quả HBV DNA cao hoặc thấp để tự kết luận bệnh nặng hay nhẹ. Tải lượng virus cần được diễn giải trong bối cảnh tổng thể của sức khỏe gan.",
          "Men gan bình thường có nghĩa gan hoàn toàn khỏe mạnh không?",
          "Men gan ALT và AST là những chỉ số thường được sử dụng để đánh giá tổn thương tế bào gan. Khi tế bào gan bị viêm hoặc tổn thương, các chỉ số này có thể tăng.",
          "Tuy nhiên, men gan bình thường không loại trừ hoàn toàn nguy cơ xơ hóa hoặc ung thư gan. Một số người có thể có tải lượng virus đáng kể hoặc đã hình thành xơ gan dù men gan chưa tăng rõ.",
          "Ngược lại, men gan tăng cũng không phải lúc nào cũng chỉ do virus viêm gan B. Tình trạng này có thể liên quan đến gan nhiễm mỡ, rượu bia, thuốc, thực phẩm bổ sung, viêm gan do nguyên nhân khác hoặc hoạt động thể lực cường độ cao.",
          "Vì vậy, bác sĩ thường không dựa vào men gan đơn độc mà kết hợp nhiều xét nghiệm và phương pháp đánh giá khác nhau."
        ]
      },
      {
        "heading": "Theo dõi giúp phát hiện xơ hóa và xơ gan",
        "paragraphs": [
          "Xơ hóa gan là quá trình hình thành mô sẹo sau những đợt tổn thương kéo dài. Nếu quá trình này tiếp tục, người bệnh có thể tiến triển thành xơ gan.",
          "Trong giai đoạn đầu, xơ hóa thường không gây triệu chứng rõ ràng. Người bệnh vẫn có thể sinh hoạt bình thường và chỉ phát hiện bất thường khi kiểm tra chuyên sâu.",
          "Để đánh giá mức độ xơ hóa, bác sĩ có thể sử dụng:",
          "Xét nghiệm máu và số lượng tiểu cầu.",
          "Các chỉ số ước tính xơ hóa từ kết quả xét nghiệm.",
          "Siêu âm ổ bụng.",
          "Đo độ đàn hồi gan.",
          "Các phương pháp chẩn đoán hình ảnh khác khi cần thiết.",
          "Sinh thiết gan trong một số trường hợp đặc biệt.",
          "WHO cho biết xét nghiệm máu, siêu âm và đo độ đàn hồi gan có thể được sử dụng để đánh giá sẹo gan và theo dõi sự tiến triển của bệnh.",
          "Phát hiện xơ hóa sớm có ý nghĩa quan trọng vì bác sĩ có thể điều chỉnh kế hoạch điều trị và theo dõi trước khi gan xuất hiện biến chứng mất bù."
        ]
      },
      {
        "heading": "Viêm gan B làm tăng nguy cơ ung thư gan",
        "paragraphs": [
          "Viêm gan B mạn tính là một trong những yếu tố nguy cơ quan trọng của ung thư biểu mô tế bào gan, dạng ung thư gan nguyên phát phổ biến. Nguy cơ thường cao hơn ở người đã xơ gan, tải lượng virus cao, có tiền sử gia đình mắc ung thư gan hoặc đồng nhiễm một số virus khác.",
          "Đáng lưu ý, viêm gan B có thể làm tăng nguy cơ ung thư gan ngay cả khi người bệnh chưa bị xơ gan. Vì thế, việc theo dõi ung thư gan không chỉ dành cho người đã có xơ gan.",
          "Với những người thuộc nhóm nguy cơ, bác sĩ có thể chỉ định siêu âm gan kết hợp xét nghiệm AFP định kỳ. Các hướng dẫn của AASLD khuyến nghị tầm soát ung thư gan mỗi sáu tháng đối với người bị xơ gan và một số nhóm mắc viêm gan B mạn tính có nguy cơ cao.",
          "Không phải mọi người mang virus viêm gan B đều có cùng lịch tầm soát. Bác sĩ sẽ cân nhắc tuổi, giới tính, tiền sử gia đình, mức độ xơ hóa và các yếu tố nguy cơ cụ thể.",
          "Người đang uống thuốc viêm gan B có cần kiểm tra định kỳ không?",
          "Có. Việc tái khám vẫn rất cần thiết ngay cả khi người bệnh đang uống thuốc đều đặn và tải lượng virus đã giảm.",
          "Thuốc kháng virus có thể ức chế sự nhân lên của HBV, làm chậm quá trình xơ gan, giảm nguy cơ biến chứng và cải thiện khả năng sống lâu dài. Tuy nhiên, thuốc thường không loại bỏ hoàn toàn virus khỏi cơ thể và nhiều người phải điều trị trong thời gian dài.",
          "Trong quá trình điều trị, bác sĩ cần theo dõi:",
          "Mức giảm của HBV DNA.",
          "Sự thay đổi của men gan.",
          "Chức năng gan.",
          "Chức năng thận và một số chỉ số khác tùy loại thuốc.",
          "Khả năng tuân thủ điều trị.",
          "Tác dụng không mong muốn.",
          "Nguy cơ xơ gan và ung thư gan.",
          "Người bệnh không nên tự ngừng thuốc khi thấy xét nghiệm tốt hoặc cảm thấy cơ thể khỏe hơn. Ngừng thuốc không đúng thời điểm có thể khiến virus hoạt động trở lại, gây đợt viêm gan bùng phát và làm tổn thương gan.",
          "Nếu quên thuốc nhiều lần, gặp tác dụng phụ hoặc muốn mang thai, người bệnh nên trao đổi với bác sĩ để được điều chỉnh kế hoạch phù hợp.",
          "Người chưa cần dùng thuốc có thể không tái khám không?",
          "Không cần điều trị ngay không có nghĩa là không cần quản lý bệnh.",
          "Một số người có tải lượng virus thấp, men gan ổn định và chưa có xơ hóa đáng kể có thể được bác sĩ lựa chọn theo dõi thay vì dùng thuốc. Tuy nhiên, các chỉ số này có thể thay đổi theo thời gian.",
          "Việc tái khám giúp phát hiện thời điểm người bệnh chuyển từ giai đoạn theo dõi sang giai đoạn cần điều trị. Nếu bỏ kiểm tra trong nhiều năm, tình trạng viêm hoặc xơ hóa có thể tiến triển mà người bệnh không nhận biết.",
          "Khoảng cách giữa các lần khám không giống nhau cho tất cả mọi người. Người mới được chẩn đoán, men gan không ổn định, tải lượng virus cao, đang mang thai, có xơ hóa hoặc đang bắt đầu dùng thuốc có thể cần theo dõi thường xuyên hơn.",
          "Một lần kiểm tra viêm gan B thường gồm những gì?",
          "Tùy tình trạng cụ thể, bác sĩ có thể chỉ định một số kiểm tra sau:"
        ]
      },
      {
        "heading": "Xét nghiệm men gan và chức năng gan",
        "paragraphs": [
          "Nhóm xét nghiệm này có thể bao gồm ALT, AST, bilirubin, albumin và các chỉ số đông máu. Kết quả giúp đánh giá tình trạng tế bào gan và khả năng hoạt động của gan."
        ]
      },
      {
        "heading": "Đo tải lượng virus HBV DNA",
        "paragraphs": [
          "Đây là xét nghiệm quan trọng để xác định mức độ nhân lên của virus và đánh giá đáp ứng điều trị."
        ]
      },
      {
        "heading": "HBeAg và anti-HBe",
        "paragraphs": [
          "Các chỉ số này giúp bác sĩ hiểu thêm về giai đoạn nhiễm virus, nhưng không nên được sử dụng riêng lẻ để kết luận mức độ bệnh."
        ]
      },
      {
        "heading": "Công thức máu và số lượng tiểu cầu",
        "paragraphs": [
          "Tiểu cầu giảm có thể là một dấu hiệu gợi ý tăng áp lực tĩnh mạch cửa hoặc bệnh gan tiến triển, mặc dù còn nhiều nguyên nhân khác."
        ]
      },
      {
        "heading": "Siêu âm gan",
        "paragraphs": [
          "Siêu âm có thể giúp quan sát cấu trúc gan, phát hiện dấu hiệu xơ gan, khối bất thường, lách to hoặc dịch trong ổ bụng."
        ]
      },
      {
        "heading": "Đo độ đàn hồi gan",
        "paragraphs": [
          "Phương pháp này giúp ước tính mức độ cứng và xơ hóa của gan mà không cần phẫu thuật."
        ]
      },
      {
        "heading": "Kiểm tra các bệnh đồng nhiễm",
        "paragraphs": [
          "Người mắc viêm gan B có thể được tư vấn xét nghiệm viêm gan C, viêm gan D và HIV. Việc đồng nhiễm có thể làm thay đổi nguy cơ biến chứng và kế hoạch điều trị. CDC cũng khuyến nghị người mới được chẩn đoán viêm gan B mạn tính xem xét kiểm tra các bệnh nhiễm trùng này.",
          "Không phải lần tái khám nào cũng cần thực hiện toàn bộ các xét nghiệm trên. Bác sĩ sẽ lựa chọn dựa trên kết quả trước đó và tình trạng hiện tại.",
          "Bao lâu nên kiểm tra viêm gan B một lần?",
          "Không có một lịch kiểm tra cố định áp dụng cho tất cả người bệnh.",
          "Tần suất tái khám phụ thuộc vào:",
          "Virus đang hoạt động ở mức nào.",
          "Men gan có ổn định hay không.",
          "Người bệnh đã dùng thuốc hay chưa.",
          "Có xơ hóa hoặc xơ gan không.",
          "Tuổi và tiền sử gia đình.",
          "Có mang thai hoặc chuẩn bị mang thai không.",
          "Có bệnh thận, gan nhiễm mỡ, đái tháo đường hoặc sử dụng rượu bia không.",
          "Có đồng nhiễm viêm gan C, viêm gan D hoặc HIV không.",
          "Một số người có thể được hẹn kiểm tra sau vài tháng, trong khi người ổn định có thể được theo dõi với khoảng cách dài hơn. Riêng tầm soát ung thư gan ở nhóm nguy cơ thường được thực hiện sáu tháng một lần.",
          "Người bệnh nên tuân thủ lịch hẹn được bác sĩ đưa ra thay vì tự lựa chọn thời điểm xét nghiệm.",
          "Người mắc viêm gan B nên làm gì để bảo vệ gan?",
          "Bên cạnh việc kiểm tra định kỳ, người bệnh nên duy trì những thói quen sau:",
          "Hạn chế hoặc tránh rượu bia.",
          "Duy trì cân nặng phù hợp.",
          "Ăn uống cân đối, hạn chế đồ chiên rán và thực phẩm nhiều đường.",
          "Vận động thường xuyên theo khả năng.",
          "Không dùng chung dao cạo, bàn chải đánh răng hoặc vật dụng có thể dính máu.",
          "Che kín vết thương hở.",
          "Sử dụng bao cao su nếu bạn tình chưa có miễn dịch.",
          "Khuyến khích người sống cùng gia đình và bạn tình xét nghiệm, tiêm vaccine nếu chưa được bảo vệ.",
          "Thông báo với bác sĩ trước khi sử dụng thuốc mới, thuốc đông y, thảo dược hoặc thực phẩm bổ sung.",
          "Vaccine là biện pháp phòng ngừa viêm gan B hiệu quả cho người chưa nhiễm và chưa có miễn dịch. Tuy nhiên, vaccine không phải là thuốc điều trị cho người đã mắc viêm gan B mạn tính.",
          "Khi nào người mắc viêm gan B cần đi khám sớm?",
          "Không nên chờ đến lịch hẹn thông thường nếu xuất hiện các dấu hiệu sau:",
          "Da hoặc mắt vàng rõ.",
          "Nước tiểu sẫm màu kéo dài.",
          "Nôn ói nhiều, ăn uống kém.",
          "Mệt lả hoặc buồn ngủ bất thường.",
          "Bụng to nhanh hoặc phù chân.",
          "Đau bụng nhiều.",
          "Nôn ra máu hoặc đi ngoài phân đen.",
          "Dễ chảy máu, xuất hiện nhiều vết bầm.",
          "Sụt cân không rõ nguyên nhân.",
          "Đang uống thuốc nhưng tự ngừng hoặc bỏ thuốc nhiều ngày.",
          "Nôn ra máu, đi ngoài phân đen, lú lẫn, khó đánh thức hoặc bụng trướng nhanh là những dấu hiệu nghiêm trọng, người bệnh cần đến cơ sở y tế ngay."
        ]
      },
      {
        "heading": "Theo dõi viêm gan B tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Người đã được chẩn đoán viêm gan B có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ đánh giá tình trạng virus, chức năng gan và nguy cơ xơ hóa dựa trên từng trường hợp cụ thể.",
          "Tùy kết quả thăm khám, bác sĩ có thể chỉ định xét nghiệm máu, đo tải lượng HBV DNA, siêu âm, đo độ đàn hồi gan hoặc các phương pháp kiểm tra cần thiết khác. Những người đang điều trị sẽ được theo dõi đáp ứng thuốc, khả năng tuân thủ và các chỉ số an toàn trong quá trình sử dụng.",
          "Việc lưu giữ các kết quả xét nghiệm cũ cũng rất quan trọng. So sánh dữ liệu qua nhiều lần kiểm tra giúp bác sĩ nhận biết xu hướng thay đổi tốt hơn so với việc chỉ xem một kết quả riêng lẻ."
        ]
      },
      {
        "heading": "Kiểm tra đều đặn để chủ động sống khỏe cùng viêm gan B",
        "paragraphs": [
          "Viêm gan B mạn tính là bệnh cần được quản lý lâu dài. Người bệnh có thể không có triệu chứng trong nhiều năm, nhưng virus và tình trạng gan vẫn có khả năng thay đổi.",
          "Tái khám đúng hẹn giúp phát hiện virus hoạt động trở lại, đánh giá xơ hóa, lựa chọn thời điểm điều trị phù hợp và tầm soát sớm ung thư gan. Vì vậy, ngay cả khi cơ thể vẫn khỏe và các xét nghiệm trước đây ổn định, người mắc viêm gan B cũng không nên tự ý ngừng theo dõi hoặc ngừng thuốc.",
          "Hiểu đúng về bệnh và duy trì kiểm tra định kỳ là cách thiết thực để bảo vệ gan, giảm nguy cơ biến chứng và giữ chất lượng cuộc sống lâu dài.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "roi-loan-tieu-hoa-keo-dai-co-the-lien-quan-den-benh-gi": {
    "sourceFile": "35.Rối loạn tiêu hóa kéo dài có thể liên quan đến bệnh gì.docx",
    "title": "Rối loạn tiêu hóa kéo dài có thể liên quan đến bệnh gì?",
    "excerpt": "Đầy bụng, đau bụng, tiêu chảy, táo bón hoặc đi ngoài thất thường là những biểu hiện hầu như ai cũng từng gặp. Nếu chỉ xuất hiện sau một bữa ăn lạ và nhanh chóng cải thiện, tình trạng thường không quá đáng ngại. Tuy nhiên, khi các triệu chứng kéo dài nhiều tuần, thường xuyên tái phát hoặc ngày càng rõ hơn, cơ thể có thể đang phát tín hiệu về một vấn đề cần được kiểm tra.",
    "intro": [
      "Đầy bụng, đau bụng, tiêu chảy, táo bón hoặc đi ngoài thất thường là những biểu hiện hầu như ai cũng từng gặp. Nếu chỉ xuất hiện sau một bữa ăn lạ và nhanh chóng cải thiện, tình trạng thường không quá đáng ngại. Tuy nhiên, khi các triệu chứng kéo dài nhiều tuần, thường xuyên tái phát hoặc ngày càng rõ hơn, cơ thể có thể đang phát tín hiệu về một vấn đề cần được kiểm tra.",
      "“Rối loạn tiêu hóa” không phải tên của một bệnh cụ thể. Đây là cách gọi chung cho nhiều biểu hiện liên quan đến thực quản, dạ dày, ruột, gan, mật hoặc tuyến tụy. Vì vậy, tự mua thuốc tiêu hóa dùng nhiều lần có thể làm triệu chứng tạm lắng nhưng chưa chắc giải quyết đúng nguyên nhân.",
      "Rối loạn tiêu hóa kéo dài là như thế nào?",
      "Rối loạn tiêu hóa có thể biểu hiện dưới nhiều hình thức:",
      "Đau hoặc khó chịu ở vùng bụng.",
      "Đầy hơi, chướng bụng.",
      "Ợ hơi, ợ chua hoặc nóng rát sau xương ức.",
      "Buồn nôn, nhanh no hoặc chán ăn.",
      "Tiêu chảy hoặc đi ngoài phân lỏng.",
      "Táo bón, phân cứng hoặc khó đi ngoài.",
      "Khi tiêu chảy, khi táo bón.",
      "Thay đổi số lần, hình dạng hoặc màu sắc của phân.",
      "Có cảm giác đi ngoài chưa hết.",
      "Phân có nhầy, máu hoặc nhiều dầu mỡ.",
      "Không có một mốc thời gian duy nhất áp dụng cho mọi triệu chứng. Riêng tiêu chảy được xem là kéo dài khi diễn ra từ hai đến dưới bốn tuần và thường được gọi là tiêu chảy mạn tính khi kéo dài ít nhất bốn tuần. Với những biểu hiện khác, người bệnh nên đi khám nếu triệu chứng liên tục trong vài tuần, thường xuyên tái phát hoặc ảnh hưởng rõ đến ăn uống và sinh hoạt.",
      "Rối loạn tiêu hóa kéo dài có thể liên quan đến bệnh gì?",
      "Nguyên nhân có thể nằm ở một đoạn của đường tiêu hóa, nhưng cũng có thể liên quan đến gan, túi mật, tuyến tụy, thuốc đang sử dụng hoặc một số bệnh toàn thân."
    ],
    "sections": [
      {
        "heading": "Hội chứng ruột kích thích",
        "paragraphs": [
          "Hội chứng ruột kích thích là một trong những nguyên nhân phổ biến gây đau bụng và thay đổi thói quen đại tiện kéo dài. Người bệnh có thể bị tiêu chảy, táo bón hoặc luân phiên cả hai.",
          "Các biểu hiện thường gặp gồm:",
          "Đau bụng liên quan đến việc đi ngoài.",
          "Đầy hơi, chướng bụng.",
          "Cảm giác đi ngoài chưa hết.",
          "Phân có một ít chất nhầy.",
          "Triệu chứng tăng khi căng thẳng hoặc thay đổi chế độ ăn.",
          "Hội chứng ruột kích thích thuộc nhóm rối loạn tương tác ruột – não. Nói một cách dễ hiểu, đường ruột trở nên nhạy cảm hơn và hoạt động co bóp có thể thay đổi dù không phát hiện tổn thương rõ ràng trên nội soi. Bệnh không được chẩn đoán chỉ dựa vào một vài triệu chứng; bác sĩ vẫn cần đánh giá để loại trừ những nguyên nhân khác."
        ]
      },
      {
        "heading": "Viêm hoặc loét dạ dày – tá tràng",
        "paragraphs": [
          "Nếu rối loạn tiêu hóa chủ yếu xuất hiện ở vùng bụng trên, nguyên nhân có thể liên quan đến viêm dạ dày, loét dạ dày – tá tràng hoặc nhiễm vi khuẩn Helicobacter pylori, thường gọi là HP.",
          "Người bệnh có thể gặp:",
          "Đau hoặc nóng rát vùng trên rốn.",
          "Đầy bụng, chậm tiêu.",
          "Nhanh no.",
          "Buồn nôn.",
          "Đau khi đói hoặc sau bữa ăn.",
          "Ăn uống kém.",
          "Một số thuốc giảm đau kháng viêm, aspirin, rượu bia và thuốc lá có thể làm tăng nguy cơ kích ứng hoặc tổn thương niêm mạc dạ dày. Khi có phân đen, nôn ra máu, chóng mặt hoặc đau bụng dữ dội, người bệnh cần đến cơ sở y tế ngay vì đây có thể là dấu hiệu chảy máu hoặc biến chứng của ổ loét."
        ]
      },
      {
        "heading": "Trào ngược dạ dày – thực quản",
        "paragraphs": [
          "Trào ngược xảy ra khi dịch từ dạ dày thường xuyên đi ngược lên thực quản. Triệu chứng có thể bao gồm:",
          "Nóng rát phía sau xương ức.",
          "Ợ chua hoặc đắng miệng.",
          "Thức ăn, dịch chua trào lên họng.",
          "Ho hoặc khàn tiếng kéo dài.",
          "Khó chịu tăng sau khi ăn no hoặc khi nằm.",
          "Nuốt vướng hoặc nuốt đau.",
          "Trào ngược kéo dài có thể gây viêm thực quản. Người có khó nuốt tăng dần, sụt cân, nôn, thiếu máu hoặc đau ngực cần được kiểm tra sớm thay vì chỉ tự dùng thuốc dạ dày."
        ]
      },
      {
        "heading": "Không dung nạp một số loại thực phẩm",
        "paragraphs": [
          "Rối loạn tiêu hóa xuất hiện lặp lại sau một nhóm thực phẩm cụ thể có thể liên quan đến tình trạng không dung nạp hoặc kém hấp thu.",
          "Ví dụ, người không dung nạp lactose có thể bị đầy bụng, đau bụng, nhiều hơi hoặc tiêu chảy sau khi uống sữa và sử dụng sản phẩm chứa lactose. Nguyên nhân là ruột non tạo ra không đủ men lactase để tiêu hóa loại đường tự nhiên có trong sữa.",
          "Tuy nhiên, không nên tự loại bỏ hoàn toàn sữa hoặc một nhóm thực phẩm trong thời gian dài khi chưa được đánh giá. Chế độ ăn kiêng quá mức có thể làm cơ thể thiếu protein, vitamin hoặc khoáng chất cần thiết."
        ]
      },
      {
        "heading": "Bệnh celiac và tình trạng kém hấp thu",
        "paragraphs": [
          "Bệnh celiac là một bệnh liên quan đến phản ứng miễn dịch với gluten, một loại protein có trong lúa mì, lúa mạch và một số loại ngũ cốc. Phản ứng này có thể làm tổn thương niêm mạc ruột non và ảnh hưởng đến khả năng hấp thu dinh dưỡng.",
          "Biểu hiện có thể gồm:",
          "Đầy bụng và nhiều hơi.",
          "Tiêu chảy kéo dài.",
          "Táo bón.",
          "Đau bụng.",
          "Phân lỏng, nhiều mỡ hoặc có mùi khó chịu.",
          "Sụt cân.",
          "Thiếu máu hoặc mệt mỏi kéo dài.",
          "Các triệu chứng của bệnh celiac có thể giống hội chứng ruột kích thích hoặc không dung nạp lactose. Người bệnh không nên tự ngừng gluten trước khi làm xét nghiệm, vì việc thay đổi chế độ ăn có thể ảnh hưởng đến kết quả chẩn đoán."
        ]
      },
      {
        "heading": "Bệnh viêm ruột",
        "paragraphs": [
          "Bệnh viêm ruột gồm hai nhóm chính là bệnh Crohn và viêm loét đại tràng. Đây là các bệnh mạn tính có tình trạng viêm tại đường tiêu hóa, khác với hội chứng ruột kích thích vốn thường không gây tổn thương nhìn thấy được.",
          "Các dấu hiệu gợi ý bệnh viêm ruột có thể bao gồm:",
          "Tiêu chảy kéo dài.",
          "Đau hoặc co thắt bụng.",
          "Đi ngoài ra máu.",
          "Sốt hoặc mệt mỏi.",
          "Sụt cân, chán ăn.",
          "Thiếu máu.",
          "Đau khớp, tổn thương da hoặc khó chịu ở mắt.",
          "Bệnh Crohn có thể ảnh hưởng đến nhiều vị trí của đường tiêu hóa, trong khi viêm loét đại tràng chủ yếu gây viêm và loét ở đại tràng. Người bệnh cần được bác sĩ chuyên khoa Tiêu hóa đánh giá bằng xét nghiệm, nội soi hoặc chẩn đoán hình ảnh khi cần thiết."
        ]
      },
      {
        "heading": "Nhiễm trùng hoặc ký sinh trùng đường ruột",
        "paragraphs": [
          "Nhiễm vi khuẩn, virus hoặc ký sinh trùng thường gây rối loạn tiêu hóa cấp tính, nhưng một số trường hợp có thể kéo dài hoặc tái phát.",
          "Nguy cơ có thể tăng khi người bệnh:",
          "Ăn thực phẩm chưa được nấu chín.",
          "Uống nước không bảo đảm vệ sinh.",
          "Vừa đi du lịch hoặc đến vùng có nguy cơ.",
          "Có nhiều người trong gia đình cùng mắc triệu chứng.",
          "Đã dùng kháng sinh gần đây.",
          "Có hệ miễn dịch suy giảm.",
          "Tiêu chảy do nhiễm trùng có thể đi kèm đau bụng, sốt, buồn nôn, phân có máu hoặc nhầy. Người bệnh không nên tự dùng thuốc kháng sinh hoặc thuốc cầm tiêu chảy khi chưa xác định nguyên nhân."
        ]
      },
      {
        "heading": "Táo bón mạn tính",
        "paragraphs": [
          "Táo bón không chỉ được xác định bằng số lần đi ngoài. Người bệnh còn có thể gặp phân cứng, phải rặn nhiều, cảm giác tắc nghẽn hoặc đi ngoài không hết.",
          "Nguyên nhân thường liên quan đến:",
          "Ăn ít chất xơ.",
          "Uống không đủ nước.",
          "Ít vận động.",
          "Thường xuyên nhịn đi ngoài.",
          "Tác dụng không mong muốn của thuốc.",
          "Rối loạn vận động đại tràng.",
          "Rối loạn phối hợp cơ vùng sàn chậu.",
          "Một số bệnh nội tiết hoặc thần kinh.",
          "Nếu táo bón không cải thiện sau khi điều chỉnh sinh hoạt hoặc đi kèm đau bụng liên tục, nôn, sốt, không trung tiện được, có máu trong phân hay sụt cân, người bệnh cần được thăm khám sớm."
        ]
      },
      {
        "heading": "Bệnh lý gan, mật",
        "paragraphs": [
          "Túi mật, đường mật và gan đều tham gia vào quá trình tiêu hóa. Một số bệnh tại những cơ quan này có thể gây cảm giác giống “rối loạn tiêu hóa”, đặc biệt sau bữa ăn nhiều chất béo.",
          "Người bệnh có thể gặp:",
          "Đau vùng bụng trên bên phải.",
          "Đau lan lên vai phải hoặc ra sau lưng.",
          "Buồn nôn, nôn.",
          "Đầy bụng sau khi ăn.",
          "Sốt.",
          "Vàng da, vàng mắt.",
          "Nước tiểu sẫm màu.",
          "Sỏi mật có thể không gây triệu chứng trong thời gian dài. Tuy nhiên, khi viên sỏi làm tắc đường mật, người bệnh có thể xuất hiện cơn đau đột ngột và cần được kiểm tra y tế."
        ]
      },
      {
        "heading": "Bệnh lý tuyến tụy",
        "paragraphs": [
          "Tuyến tụy tạo ra các enzyme giúp tiêu hóa thức ăn. Khi tuyến tụy bị viêm hoặc không sản xuất đủ enzyme, cơ thể có thể không tiêu hóa và hấp thu chất béo bình thường.",
          "Các biểu hiện cần chú ý gồm:",
          "Đau bụng trên lan ra lưng.",
          "Đau tăng sau khi ăn.",
          "Tiêu chảy kéo dài.",
          "Phân lỏng, bóng nhờn, có mùi khó chịu và khó trôi.",
          "Đầy hơi nhiều.",
          "Sụt cân dù không chủ động ăn kiêng.",
          "Suy tụy ngoại tiết có thể gây đau bụng, tiêu chảy, phân mỡ và giảm cân. Viêm tụy cũng có thể gây đau bụng trên lan ra lưng, buồn nôn và nôn. Những trường hợp này cần được đánh giá tại chuyên khoa Tiêu hóa hoặc Gan mật – Tụy."
        ]
      },
      {
        "heading": "Polyp hoặc bệnh lý đại trực tràng",
        "paragraphs": [
          "Thay đổi thói quen đại tiện kéo dài đôi khi có thể liên quan đến polyp, viêm đại trực tràng hoặc các tổn thương khác ở đại tràng.",
          "Người bệnh nên đi khám khi có:",
          "Tiêu chảy hoặc táo bón mới xuất hiện và kéo dài.",
          "Đi ngoài ra máu.",
          "Phân nhỏ hoặc thay đổi hình dạng bất thường.",
          "Đau bụng thường xuyên.",
          "Sụt cân không rõ nguyên nhân.",
          "Mệt mỏi hoặc thiếu máu thiếu sắt.",
          "Tiền sử gia đình mắc polyp hoặc ung thư đại trực tràng.",
          "Các dấu hiệu trên không đồng nghĩa người bệnh chắc chắn mắc ung thư. Tuy nhiên, máu trong phân, thay đổi thói quen đại tiện, đau bụng, giảm cân và mệt mỏi là những biểu hiện cần được bác sĩ đánh giá để loại trừ tổn thương đại trực tràng."
        ]
      },
      {
        "heading": "Tác dụng của thuốc hoặc bệnh ngoài đường tiêu hóa",
        "paragraphs": [
          "Một số thuốc và thực phẩm bổ sung có thể gây đầy bụng, tiêu chảy hoặc táo bón, chẳng hạn:",
          "Thuốc kháng sinh.",
          "Thuốc giảm đau kháng viêm.",
          "Thuốc bổ sung sắt.",
          "Một số thuốc điều trị đái tháo đường.",
          "Thuốc kháng acid chứa một số thành phần nhất định.",
          "Thuốc nhuận tràng khi sử dụng không đúng cách.",
          "Ngoài ra, bệnh tuyến giáp, đái tháo đường, rối loạn thần kinh, căng thẳng kéo dài hoặc tình trạng sau phẫu thuật đường tiêu hóa cũng có thể ảnh hưởng đến hoạt động của ruột.",
          "Người bệnh nên mang theo danh sách thuốc đang sử dụng khi đi khám và không tự ý ngừng thuốc điều trị bệnh nền.",
          "Có thể định hướng chuyên khoa dựa trên triệu chứng không?",
          "Chuyên khoa Tiêu hóa thường là nơi phù hợp để bắt đầu khi triệu chứng kéo dài hoặc nguyên nhân chưa rõ. Sau khi thăm khám, bác sĩ có thể phối hợp hoặc chuyển người bệnh đến chuyên khoa liên quan."
        ]
      },
      {
        "heading": "Nên khám Tiêu hóa khi",
        "paragraphs": [
          "Đau bụng, đầy hơi hoặc khó tiêu kéo dài.",
          "Ợ chua, nóng rát, nuốt nghẹn.",
          "Tiêu chảy hoặc táo bón thường xuyên.",
          "Đi ngoài lúc lỏng, lúc táo.",
          "Có nhầy hoặc máu trong phân.",
          "Nôn, nhanh no hoặc chán ăn.",
          "Sụt cân đi kèm triệu chứng đường ruột.",
          "Đã dùng thuốc nhưng triệu chứng liên tục tái phát."
        ]
      },
      {
        "heading": "Có thể cần khám Gan mật – Tụy khi",
        "paragraphs": [
          "Đau bụng trên bên phải hoặc đau lan ra lưng.",
          "Vàng da, vàng mắt.",
          "Nước tiểu sẫm màu.",
          "Phân bạc màu.",
          "Phân mỡ, sụt cân hoặc nghi ngờ kém hấp thu.",
          "Có tiền sử viêm tụy, sỏi mật hoặc bệnh gan."
        ]
      },
      {
        "heading": "Có thể cần chuyên khoa Ngoại tiêu hóa – Đại trực tràng khi",
        "paragraphs": [
          "Có khối sa ra ngoài hậu môn.",
          "Chảy máu hậu môn tái diễn.",
          "Đau, sưng hoặc chảy dịch vùng hậu môn.",
          "Đã phát hiện polyp, khối u hoặc tổn thương cần can thiệp.",
          "Có biểu hiện tắc ruột hoặc bệnh lý cần đánh giá phẫu thuật."
        ]
      },
      {
        "heading": "Có thể cần chuyên khoa Dinh dưỡng khi",
        "paragraphs": [
          "Triệu chứng liên quan rõ đến một nhóm thực phẩm.",
          "Đang phải kiêng khem nhiều loại thức ăn.",
          "Sụt cân hoặc thiếu chất.",
          "Có bệnh celiac, không dung nạp lactose hoặc tình trạng kém hấp thu.",
          "Cần xây dựng chế độ ăn phù hợp với bệnh tiêu hóa đã được chẩn đoán.",
          "Trong trường hợp chưa biết nên đến chuyên khoa nào, người bệnh có thể khám Nội tổng quát trước. Bác sĩ sẽ đánh giá ban đầu và định hướng chuyên khoa phù hợp.",
          "Khi nào cần đi khám sớm?",
          "Người bệnh nên sắp xếp thăm khám nếu:",
          "Triệu chứng kéo dài vài tuần hoặc tái phát nhiều lần.",
          "Tiêu chảy kéo dài từ hai đến bốn tuần trở lên.",
          "Táo bón không cải thiện sau khi điều chỉnh ăn uống.",
          "Đau bụng ảnh hưởng đến giấc ngủ hoặc sinh hoạt.",
          "Triệu chứng bắt đầu sau khi dùng một loại thuốc mới.",
          "Ăn uống kém, mệt mỏi hoặc giảm cân.",
          "Có người thân mắc bệnh viêm ruột, bệnh celiac hoặc ung thư đường tiêu hóa.",
          "Triệu chứng mới xuất hiện ở người lớn tuổi.",
          "Đã tự điều trị nhiều lần nhưng không cải thiện.",
          "Dấu hiệu nào cần đến bệnh viện ngay?",
          "Không nên chờ đợi hoặc tiếp tục tự theo dõi nếu xuất hiện:",
          "Nôn ra máu hoặc nôn ra dịch giống bã cà phê.",
          "Đi ngoài phân đen như hắc ín.",
          "Đi ngoài ra nhiều máu đỏ hoặc có cục máu.",
          "Đau bụng đột ngột, dữ dội hoặc bụng cứng.",
          "Không thể đi ngoài hoặc trung tiện kèm đau và nôn.",
          "Sốt cao, rét run hoặc mệt lả.",
          "Vàng da kèm đau bụng hoặc sốt.",
          "Chóng mặt, ngất, khó thở hoặc tim đập nhanh.",
          "Nôn liên tục, không thể uống nước.",
          "Khát nhiều, tiểu ít hoặc có biểu hiện mất nước.",
          "Máu đỏ hoặc đen trong phân, nôn ra máu, chóng mặt, ngất và khó thở có thể là biểu hiện của xuất huyết tiêu hóa. Đây là tình trạng cần được đánh giá y tế khẩn cấp.",
          "Người bệnh có thể được kiểm tra những gì?",
          "Không phải ai rối loạn tiêu hóa kéo dài cũng cần nội soi ngay. Bác sĩ sẽ lựa chọn kiểm tra dựa trên triệu chứng, độ tuổi, bệnh nền, tiền sử gia đình và các dấu hiệu cảnh báo.",
          "Các phương pháp có thể được cân nhắc gồm:",
          "Khám bụng và đánh giá toàn trạng.",
          "Xét nghiệm công thức máu để kiểm tra thiếu máu hoặc nhiễm trùng.",
          "Xét nghiệm chức năng gan, thận, tuyến giáp và đường huyết.",
          "Xét nghiệm phân tìm máu ẩn, vi khuẩn hoặc ký sinh trùng.",
          "Xét nghiệm HP.",
          "Xét nghiệm đánh giá bệnh celiac hoặc tình trạng kém hấp thu.",
          "Siêu âm bụng.",
          "Nội soi dạ dày.",
          "Nội soi đại tràng.",
          "Chụp cắt lớp vi tính hoặc cộng hưởng từ khi cần.",
          "Để chẩn đoán các bệnh đường ruột, bác sĩ thường kết hợp khai thác bệnh sử, khám lâm sàng, xét nghiệm và các phương pháp nội soi hoặc chẩn đoán hình ảnh phù hợp. Không có một xét nghiệm duy nhất có thể giải thích mọi trường hợp rối loạn tiêu hóa.",
          "Cần chuẩn bị gì trước khi đi khám?",
          "Để bác sĩ dễ xác định nguyên nhân, người bệnh có thể ghi lại trong vài ngày hoặc vài tuần:",
          "Triệu chứng xuất hiện từ khi nào.",
          "Đau ở vị trí nào và liên quan đến bữa ăn hay việc đi ngoài không.",
          "Số lần đi ngoài mỗi ngày hoặc mỗi tuần.",
          "Đặc điểm, màu sắc và hình dạng của phân.",
          "Thực phẩm khiến triệu chứng tăng lên.",
          "Mức độ thay đổi cân nặng.",
          "Thuốc và thực phẩm bổ sung đang dùng.",
          "Tiền sử phẫu thuật, nội soi hoặc bệnh tiêu hóa.",
          "Tiền sử bệnh trong gia đình.",
          "Việc theo dõi thói quen đại tiện và đặc điểm phân có thể cung cấp thông tin hữu ích cho quá trình đánh giá nguyên nhân táo bón hoặc rối loạn đường ruột kéo dài.",
          "Người bệnh không nên tự dùng kéo dài thuốc kháng sinh, thuốc cầm tiêu chảy, thuốc nhuận tràng hoặc thuốc dạ dày theo đơn cũ. Triệu chứng giống nhau nhưng nguyên nhân có thể hoàn toàn khác nhau."
        ]
      },
      {
        "heading": "Khám rối loạn tiêu hóa tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi rối loạn tiêu hóa kéo dài, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được thăm khám và định hướng chuyên khoa phù hợp.",
          "Dựa trên triệu chứng và tình trạng cụ thể, bác sĩ có thể chỉ định xét nghiệm, siêu âm, nội soi hoặc các phương pháp chẩn đoán hình ảnh cần thiết. Trường hợp vấn đề liên quan đến gan mật, tuyến tụy, dinh dưỡng hoặc cần can thiệp ngoại khoa, người bệnh sẽ được phối hợp đánh giá giữa các chuyên khoa.",
          "Mục tiêu của việc thăm khám không chỉ là làm giảm đầy bụng, đau bụng hay rối loạn đại tiện trước mắt mà còn xác định nguyên nhân và xây dựng hướng theo dõi phù hợp."
        ]
      },
      {
        "heading": "Rối loạn tiêu hóa kéo dài không nên chỉ xử lý bằng “thuốc cho êm bụng”",
        "paragraphs": [
          "Phần lớn triệu chứng tiêu hóa có thể liên quan đến chế độ ăn, sinh hoạt hoặc những rối loạn chức năng lành tính. Tuy nhiên, tình trạng kéo dài cũng có thể xuất hiện trong bệnh viêm ruột, viêm loét dạ dày, kém hấp thu, bệnh gan mật – tuyến tụy hoặc tổn thương đại trực tràng.",
          "Thay vì tiếp tục đổi thuốc hoặc kiêng khem theo kinh nghiệm, người bệnh nên đi khám khi triệu chứng kéo dài, tái phát hoặc đi kèm dấu hiệu bất thường. Việc bắt đầu tại chuyên khoa Tiêu hóa thường giúp xác định đúng hướng kiểm tra và tránh bỏ sót nguyên nhân quan trọng.",
          "Nội dung bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "thoai-hoa-khop-goi-dau-hieu-chan-doan-va-dieu-tri": {
    "sourceFile": "36.Thoái hóa khớp gối dấu hiệu, chẩn đoán và điều trị.docx",
    "title": "Thoái hóa khớp gối: dấu hiệu, chẩn đoán và điều trị",
    "excerpt": "Đau đầu gối khi lên xuống cầu thang, cứng khớp sau khi ngồi lâu hoặc nghe tiếng lạo xạo mỗi khi đứng dậy là những biểu hiện nhiều người thường cho rằng “lớn tuổi thì ai cũng vậy”. Tuy nhiên, đây có thể là dấu hiệu của thoái hóa khớp gối – một bệnh lý cần được theo dõi và điều trị đúng cách để duy trì khả năng vận động.",
    "intro": [
      "Đau đầu gối khi lên xuống cầu thang, cứng khớp sau khi ngồi lâu hoặc nghe tiếng lạo xạo mỗi khi đứng dậy là những biểu hiện nhiều người thường cho rằng “lớn tuổi thì ai cũng vậy”. Tuy nhiên, đây có thể là dấu hiệu của thoái hóa khớp gối – một bệnh lý cần được theo dõi và điều trị đúng cách để duy trì khả năng vận động.",
      "Thoái hóa khớp gối thường tiến triển từ từ. Nếu phát hiện sớm, người bệnh có thể kiểm soát triệu chứng bằng tập luyện, điều chỉnh cân nặng, vật lý trị liệu và thuốc khi cần thiết. Không phải trường hợp nào cũng phải phẫu thuật thay khớp.",
      "Thoái hóa khớp gối là gì?",
      "Khớp gối được tạo thành từ đầu dưới xương đùi, đầu trên xương chày và xương bánh chè. Bề mặt các đầu xương được bao phủ bởi lớp sụn trơn, giúp khớp vận động nhẹ nhàng và hạn chế ma sát.",
      "Thoái hóa khớp gối là tình trạng các mô trong khớp, bao gồm sụn, xương, màng hoạt dịch, dây chằng và sụn chêm, dần bị biến đổi hoặc tổn thương. Vì vậy, bệnh không chỉ đơn giản là “mòn sụn do tuổi già” mà là quá trình ảnh hưởng đến toàn bộ cấu trúc của khớp.",
      "Khi bệnh tiến triển, khớp có thể bị đau, sưng, giảm khả năng vận động và mất dần hình dạng bình thường. Một số người chỉ có triệu chứng nhẹ, nhưng ở người khác, tình trạng này có thể gây khó khăn khi đi bộ, đứng lên, ngồi xuống hoặc thực hiện các công việc hằng ngày.",
      "Ai có nguy cơ bị thoái hóa khớp gối?",
      "Thoái hóa khớp gối thường gặp hơn ở người lớn tuổi, nhưng người trẻ vẫn có thể mắc bệnh, nhất là khi từng chấn thương hoặc thường xuyên tạo áp lực lớn lên khớp.",
      "Những yếu tố làm tăng nguy cơ gồm:",
      "Tuổi ngày càng cao.",
      "Thừa cân hoặc béo phì.",
      "Từng chấn thương vùng gối như đứt dây chằng, tổn thương sụn chêm hoặc gãy xương quanh khớp.",
      "Từng phẫu thuật khớp gối.",
      "Công việc phải quỳ, ngồi xổm, leo cầu thang hoặc mang vác nặng thường xuyên.",
      "Chơi thể thao có động tác đổi hướng, bật nhảy hoặc va chạm lặp lại.",
      "Trục chân bất thường, chẳng hạn chân vòng kiềng hoặc chân chữ X.",
      "Cấu trúc khớp phát triển không bình thường.",
      "Gia đình có người mắc thoái hóa khớp.",
      "Cơ quanh khớp gối yếu, khiến khớp kém ổn định.",
      "Tuổi cao, thừa cân, chấn thương cũ, vận động lặp đi lặp lại và bất thường cấu trúc khớp là những yếu tố nguy cơ đã được ghi nhận. Phụ nữ, đặc biệt sau tuổi 50, cũng có tỷ lệ mắc thoái hóa khớp cao hơn nam giới."
    ],
    "sections": [
      {
        "heading": "Dấu hiệu thoái hóa khớp gối thường gặp",
        "paragraphs": [
          "Triệu chứng thường bắt đầu âm thầm và tăng dần theo thời gian. Người bệnh có thể chỉ đau nhẹ sau một ngày vận động nhiều, sau đó cơn đau xuất hiện thường xuyên hơn."
        ]
      },
      {
        "heading": "Đau đầu gối khi vận động",
        "paragraphs": [
          "Đau là biểu hiện phổ biến nhất. Ban đầu, người bệnh thường đau khi:",
          "Đi bộ đường dài.",
          "Lên xuống cầu thang.",
          "Đứng lên sau khi ngồi lâu.",
          "Ngồi xổm hoặc quỳ.",
          "Mang vật nặng.",
          "Tập thể thao hoặc vận động nhiều.",
          "Cơn đau có thể giảm sau khi nghỉ. Khi bệnh tiến triển, người bệnh có thể đau ngay cả khi vận động nhẹ, đau lúc nghỉ hoặc đau về đêm."
        ]
      },
      {
        "heading": "Cứng khớp sau khi ngủ dậy hoặc ngồi lâu",
        "paragraphs": [
          "Người bệnh có thể cảm thấy đầu gối “khó khởi động” vào buổi sáng hoặc sau khi ngồi lâu. Cảm giác cứng thường giảm sau khi đi lại nhẹ nhàng.",
          "Đối với thoái hóa khớp, tình trạng cứng khớp buổi sáng thường không kéo dài quá 30 phút. Nếu khớp cứng lâu, sưng nóng rõ hoặc đau nhiều khớp cùng lúc, bác sĩ có thể cần kiểm tra thêm các bệnh viêm khớp khác."
        ]
      },
      {
        "heading": "Khớp phát ra tiếng lạo xạo",
        "paragraphs": [
          "Khi co duỗi gối, người bệnh có thể nghe tiếng lục cục, lạo xạo hoặc cảm nhận ma sát trong khớp. Tiếng kêu đơn độc, không đau và không hạn chế vận động chưa chắc là bệnh.",
          "Tuy nhiên, nếu tiếng kêu đi kèm đau, sưng, yếu chân hoặc khó vận động, người bệnh nên đi khám để xác định nguyên nhân."
        ]
      },
      {
        "heading": "Sưng quanh khớp gối",
        "paragraphs": [
          "Khớp có thể sưng nhẹ sau khi đi lại hoặc vận động nhiều. Một số trường hợp có dịch trong khớp khiến đầu gối căng, nặng và khó gập.",
          "Thoái hóa khớp có thể gây sưng, đặc biệt sau khi khớp phải hoạt động nhiều. Tuy nhiên, đầu gối sưng nóng đỏ đột ngột cần được đánh giá sớm vì có thể liên quan đến gout, nhiễm trùng hoặc bệnh viêm khớp khác."
        ]
      },
      {
        "heading": "Hạn chế vận động",
        "paragraphs": [
          "Người bệnh có thể khó duỗi thẳng hoặc gập gối hoàn toàn. Những hoạt động vốn đơn giản như mặc quần, đứng lên khỏi ghế, bước lên xe hoặc đi vệ sinh cũng trở nên bất tiện.",
          "Do đau, người bệnh thường ít vận động hơn. Điều này làm cơ đùi yếu đi, khớp càng kém ổn định và việc đi lại ngày càng khó khăn."
        ]
      },
      {
        "heading": "Cảm giác khớp không vững",
        "paragraphs": [
          "Một số người cảm thấy chân yếu, đầu gối có thể khuỵu xuống hoặc không đủ chắc khi bước đi. Triệu chứng này có thể liên quan đến yếu cơ, tổn thương dây chằng, sụn chêm hoặc tình trạng thoái hóa đã ảnh hưởng đến độ ổn định của khớp."
        ]
      },
      {
        "heading": "Biến dạng khớp gối",
        "paragraphs": [
          "Ở giai đoạn tiến triển, trục chân có thể thay đổi, thường thấy dưới dạng chân vòng kiềng hoặc chân chữ X. Khớp gối cũng có thể to hơn, cứng và giảm đáng kể khả năng vận động.",
          "Biến dạng thường phát triển từ từ. Nếu hình dạng khớp thay đổi nhanh hoặc triệu chứng nặng lên trong thời gian ngắn, người bệnh cần được kiểm tra để loại trừ nguyên nhân khác.",
          "Khi nào đau gối có thể không phải do thoái hóa?",
          "Không phải mọi trường hợp đau đầu gối đều là thoái hóa khớp. Đau có thể liên quan đến chấn thương dây chằng, rách sụn chêm, viêm gân, gout, viêm khớp dạng thấp, nhiễm trùng khớp hoặc bệnh lý ở cột sống và khớp háng.",
          "Người bệnh cần đi khám sớm nếu có một trong các biểu hiện:",
          "Đầu gối sưng, nóng, đỏ rõ.",
          "Sốt hoặc rét run kèm đau khớp.",
          "Đau dữ dội xuất hiện đột ngột.",
          "Không thể đứng hoặc chịu lực lên chân.",
          "Đầu gối biến dạng sau chấn thương.",
          "Khớp bị khóa, không thể gập hoặc duỗi.",
          "Cứng khớp buổi sáng kéo dài.",
          "Đau nhiều khớp cùng lúc.",
          "Triệu chứng tiến triển nhanh.",
          "Sụt cân, mệt mỏi hoặc có biểu hiện toàn thân bất thường.",
          "Khớp nóng sưng, cứng kéo dài, triệu chứng tiến triển nhanh, biến dạng nhanh hoặc có dấu hiệu nhiễm trùng được xem là những đặc điểm không điển hình, cần được đánh giá thay vì mặc định là thoái hóa khớp.",
          "Thoái hóa khớp gối được chẩn đoán như thế nào?",
          "Không có một xét nghiệm đơn lẻ có thể chẩn đoán mọi trường hợp thoái hóa khớp. Bác sĩ thường kết hợp thông tin về triệu chứng, khám trực tiếp và các phương pháp kiểm tra khi cần."
        ]
      },
      {
        "heading": "Khai thác triệu chứng và bệnh sử",
        "paragraphs": [
          "Bác sĩ có thể hỏi:",
          "Đau xuất hiện từ khi nào?",
          "Cơn đau liên quan đến vận động hay xuất hiện cả khi nghỉ?",
          "Khớp cứng vào thời điểm nào và kéo dài bao lâu?",
          "Có sưng, kẹt khớp hoặc khuỵu gối không?",
          "Người bệnh từng chấn thương hoặc phẫu thuật khớp chưa?",
          "Công việc và thói quen vận động như thế nào?",
          "Đang sử dụng thuốc gì?",
          "Có bệnh gout, viêm khớp hoặc bệnh nền khác không?",
          "Những thông tin này giúp phân biệt thoái hóa khớp với các nguyên nhân đau gối khác."
        ]
      },
      {
        "heading": "Khám khớp gối",
        "paragraphs": [
          "Bác sĩ sẽ kiểm tra:",
          "Vị trí đau.",
          "Mức độ sưng.",
          "Biên độ gập và duỗi gối.",
          "Tiếng lạo xạo khi vận động.",
          "Sức mạnh của các nhóm cơ.",
          "Độ vững của dây chằng.",
          "Trục chân.",
          "Dáng đi và khả năng chịu lực.",
          "Bác sĩ cũng có thể kiểm tra khớp háng, cổ chân hoặc cột sống vì đau từ những vị trí này đôi khi lan xuống đầu gối.",
          "Có phải đau gối luôn cần chụp X-quang?",
          "Không phải trường hợp nào cũng cần chụp phim ngay. Theo hướng dẫn NICE, thoái hóa khớp thường có thể được chẩn đoán lâm sàng ở người từ 45 tuổi trở lên khi đau khớp liên quan đến vận động và cứng khớp buổi sáng không quá 30 phút. Chẩn đoán hình ảnh không cần thực hiện thường quy nếu không có biểu hiện bất thường hoặc nghi ngờ một bệnh khác.",
          "Khi cần, X-quang có thể giúp bác sĩ nhận biết:",
          "Khe khớp hẹp.",
          "Gai xương.",
          "Biến đổi hoặc tổn thương xương.",
          "Thay đổi hình dạng khớp.",
          "Tổn thương giai đoạn sớm có thể chưa xuất hiện rõ trên phim X-quang. Mức độ thay đổi trên phim cũng không phải lúc nào tương ứng hoàn toàn với mức độ đau của người bệnh. Việc điều trị chủ yếu được định hướng dựa trên triệu chứng và khả năng vận động, không chỉ dựa vào hình ảnh.",
          "Khi nào cần chụp cộng hưởng từ?",
          "Chụp cộng hưởng từ, hay MRI, không phải kiểm tra thường quy cho thoái hóa khớp gối. Phương pháp này có thể được cân nhắc khi:",
          "Khớp bị khóa hoặc thường xuyên khuỵu.",
          "Nghi ngờ tổn thương sụn chêm hoặc dây chằng.",
          "Triệu chứng không phù hợp với kết quả X-quang.",
          "Đau kéo dài nhưng nguyên nhân chưa rõ.",
          "Bác sĩ cần đánh giá mô mềm quanh khớp.",
          "MRI có khả năng cho thấy tổn thương ở sụn, dây chằng, sụn chêm và các mô mềm mà X-quang không thể hiện rõ."
        ]
      },
      {
        "heading": "Xét nghiệm máu và dịch khớp",
        "paragraphs": [
          "Xét nghiệm máu không dùng để khẳng định thoái hóa khớp, nhưng có thể được chỉ định để loại trừ gout, viêm khớp dạng thấp, nhiễm trùng hoặc các bệnh viêm khác.",
          "Nếu khớp sưng nhiều, bác sĩ có thể lấy dịch khớp để kiểm tra tinh thể urat, dấu hiệu viêm hoặc nhiễm khuẩn.",
          "Thoái hóa khớp gối có chữa khỏi được không?",
          "Hiện nay, điều trị chưa thể đưa một khớp đã thoái hóa trở lại hoàn toàn như ban đầu. Tuy nhiên, phần lớn người bệnh có thể giảm đau, cải thiện vận động và duy trì cuộc sống chủ động nếu được điều trị phù hợp.",
          "Mục tiêu điều trị gồm:",
          "Giảm đau và cứng khớp.",
          "Duy trì hoặc cải thiện khả năng vận động.",
          "Tăng sức mạnh cơ quanh gối.",
          "Hạn chế nguy cơ té ngã.",
          "Giúp người bệnh tiếp tục sinh hoạt và làm việc.",
          "Làm chậm sự suy giảm chức năng.",
          "Nâng cao chất lượng cuộc sống.",
          "Điều trị cần được cá thể hóa theo mức độ đau, khả năng vận động, tuổi, cân nặng, bệnh nền và nhu cầu sinh hoạt của từng người."
        ]
      },
      {
        "heading": "Các phương pháp điều trị thoái hóa khớp gối",
        "paragraphs": [
          "1. Tập luyện và phục hồi chức năng",
          "Tập luyện là phương pháp điều trị nền tảng, không chỉ là lời khuyên phụ. Chương trình phù hợp có thể giúp tăng sức mạnh cơ, giảm cứng khớp, cải thiện thăng bằng và duy trì khả năng đi lại.",
          "Các bài tập thường bao gồm:",
          "Co duỗi khớp nhẹ nhàng để duy trì biên độ vận động.",
          "Tăng sức mạnh cơ đùi trước, cơ đùi sau và cơ mông.",
          "Tập thăng bằng.",
          "Đi bộ ở mức phù hợp.",
          "Đạp xe tại chỗ.",
          "Bơi hoặc tập dưới nước.",
          "Các bài aerobic ít tác động lên khớp.",
          "Người bệnh có thể hơi đau hoặc khó chịu khi mới bắt đầu. Điều này không nhất thiết có nghĩa khớp đang bị “mòn nhanh hơn”. Tập đều đặn, đúng kỹ thuật và tăng cường độ từ từ thường mang lại lợi ích lâu dài hơn so với bất động hoàn toàn.",
          "Nếu đau nhiều, yếu cơ hoặc chưa biết nên tập thế nào, người bệnh nên được bác sĩ phục hồi chức năng hoặc kỹ thuật viên vật lý trị liệu hướng dẫn.",
          "2. Kiểm soát cân nặng",
          "Với người thừa cân hoặc béo phì, giảm cân giúp giảm áp lực lên khớp gối và có thể cải thiện đau cũng như khả năng vận động.",
          "Bất kỳ mức giảm cân hợp lý nào cũng có thể đem lại lợi ích. Theo NICE, giảm khoảng 10% trọng lượng cơ thể có khả năng mang lại hiệu quả tốt hơn so với giảm 5%, nhưng mục tiêu cần thực tế và phù hợp với sức khỏe từng người.",
          "Người bệnh không nên nhịn ăn hoặc sử dụng thuốc giảm cân không rõ nguồn gốc. Kế hoạch giảm cân nên kết hợp dinh dưỡng cân đối và vận động phù hợp với khả năng của khớp.",
          "3. Điều chỉnh sinh hoạt",
          "Người bệnh không cần ngừng vận động hoàn toàn, nhưng nên điều chỉnh những hoạt động làm đau tăng rõ rệt:",
          "Hạn chế ngồi xổm hoặc quỳ lâu.",
          "Tránh mang vật quá nặng.",
          "Giảm leo cầu thang liên tục nếu khớp đang đau.",
          "Xen kẽ thời gian vận động và nghỉ ngơi.",
          "Mang giày vừa chân, có độ ổn định phù hợp.",
          "Khởi động trước khi tập thể dục.",
          "Tránh tăng cường độ tập đột ngột.",
          "Chườm lạnh có thể giúp giảm đau và sưng sau khi vận động. Chườm ấm có thể làm cơ thư giãn và giảm cảm giác cứng khớp. Cần tránh đặt nhiệt độ quá nóng hoặc quá lạnh trực tiếp lên da.",
          "4. Gậy, nẹp và dụng cụ hỗ trợ",
          "Gậy đi bộ có thể giúp giảm tải cho chân đau và tăng độ ổn định. Thông thường, gậy được cầm ở tay đối diện với bên đầu gối bị đau.",
          "Nẹp hoặc dụng cụ chỉnh hình có thể hữu ích khi khớp mất vững hoặc chịu lực bất thường. Tuy nhiên, không phải ai cũng cần mang nẹp. Dụng cụ nên được lựa chọn và điều chỉnh bởi nhân viên chuyên môn để tránh gây khó chịu hoặc làm thay đổi dáng đi không phù hợp.",
          "5. Thuốc giảm đau và kháng viêm",
          "Thuốc có thể giúp giảm triệu chứng để người bệnh vận động và tập phục hồi tốt hơn, nhưng không thay thế tập luyện và quản lý cân nặng.",
          "Thuốc kháng viêm không steroid dạng bôi thường được cân nhắc cho thoái hóa khớp gối. Nếu thuốc bôi không hiệu quả hoặc không phù hợp, bác sĩ có thể xem xét thuốc uống sau khi đánh giá nguy cơ đối với dạ dày, thận, gan và tim mạch. Thuốc nên được sử dụng với liều thấp nhất có hiệu quả trong thời gian ngắn phù hợp.",
          "Người bệnh không nên tự dùng nhiều loại thuốc giảm đau cùng lúc hoặc dùng thuốc kháng viêm kéo dài. Cần đặc biệt thận trọng nếu có:",
          "Viêm loét hoặc xuất huyết dạ dày.",
          "Bệnh thận.",
          "Bệnh gan.",
          "Tăng huyết áp hoặc bệnh tim mạch.",
          "Đang sử dụng thuốc chống đông.",
          "Đang mang thai.",
          "Dị ứng thuốc giảm đau.",
          "Paracetamol không còn được khuyến nghị sử dụng thường quy cho mọi trường hợp thoái hóa khớp vì hiệu quả có thể hạn chế. Thuốc opioid mạnh và glucosamine cũng không được NICE khuyến nghị dùng để điều trị thường quy.",
          "Người bệnh không nên dùng thuốc theo đơn cũ hoặc đơn của người khác. Bác sĩ cần cân nhắc bệnh nền và các thuốc đang sử dụng trước khi lựa chọn phương án giảm đau.",
          "6. Tiêm thuốc vào khớp",
          "Tiêm corticosteroid vào khớp có thể được cân nhắc khi những phương pháp khác không hiệu quả, không phù hợp hoặc người bệnh cần giảm đau tạm thời để tham gia tập phục hồi chức năng.",
          "Hiệu quả thường mang tính ngắn hạn, khoảng vài tuần. Việc tiêm cần được bác sĩ chỉ định, thực hiện trong điều kiện vô khuẩn và không nên lặp lại tùy tiện.",
          "Đối với tiêm axit hyaluronic, bằng chứng về hiệu quả chưa thống nhất và NICE không khuyến nghị sử dụng thường quy trong điều trị thoái hóa khớp. Các phương pháp như huyết tương giàu tiểu cầu hoặc tế bào gốc cũng không nên được xem là giải pháp chắc chắn tái tạo khớp; người bệnh cần tìm hiểu kỹ về bằng chứng, chi phí và nguy cơ trước khi quyết định.",
          "7. Phẫu thuật bảo tồn khớp",
          "Ở một số người còn trẻ, thoái hóa chỉ tập trung tại một khoang khớp và có biến dạng trục chân, bác sĩ có thể cân nhắc phẫu thuật chỉnh trục xương. Mục đích là phân bố lại lực chịu tải và giảm áp lực lên vùng khớp bị tổn thương.",
          "Phương pháp này chỉ phù hợp với một số trường hợp nhất định và cần được bác sĩ chấn thương chỉnh hình đánh giá kỹ.",
          "Nội soi rửa hoặc làm sạch khớp không được khuyến nghị thực hiện thường quy chỉ để điều trị thoái hóa khớp gối.",
          "8. Thay khớp gối",
          "Thay khớp gối có thể được cân nhắc khi:",
          "Đau nhiều, kéo dài.",
          "Đau ảnh hưởng rõ đến giấc ngủ và sinh hoạt.",
          "Đi lại, đứng lên hoặc lên cầu thang rất khó khăn.",
          "Khớp biến dạng tiến triển.",
          "Các phương pháp không phẫu thuật không còn hiệu quả hoặc không phù hợp.",
          "Tùy mức độ tổn thương, người bệnh có thể được thay một phần hoặc toàn bộ khớp gối. Phẫu thuật nhằm giảm đau và cải thiện khả năng vận động, nhưng vẫn cần quá trình tập phục hồi sau mổ.",
          "Quyết định thay khớp không nên chỉ dựa vào tuổi hoặc một con số trên phim X-quang. Bác sĩ cần đánh giá mức độ ảnh hưởng đến chất lượng cuộc sống, hiệu quả điều trị trước đó, bệnh nền và mong muốn của người bệnh.",
          "Người thoái hóa khớp gối nên tập hay nên nghỉ?",
          "Khi khớp đau và sưng nhiều, người bệnh có thể giảm tạm thời những hoạt động làm đau tăng, nhưng không nên bất động kéo dài. Nghỉ quá lâu khiến cơ yếu, khớp cứng và khả năng vận động giảm nhanh hơn.",
          "Một chương trình hợp lý thường kết hợp:",
          "Vận động nhẹ hằng ngày.",
          "Bài tập tăng sức mạnh cơ.",
          "Bài tập duy trì độ mềm dẻo của khớp.",
          "Nghỉ ngắn khi đau tăng.",
          "Điều chỉnh cường độ theo phản ứng của cơ thể.",
          "Nếu đau tăng mạnh, sưng kéo dài hoặc khớp mất vững sau khi tập, cần giảm cường độ và trao đổi với bác sĩ hoặc chuyên viên phục hồi chức năng.",
          "Có thể phòng ngừa thoái hóa khớp gối không?",
          "Không thể ngăn ngừa hoàn toàn mọi trường hợp, nhưng có thể giảm một số yếu tố nguy cơ bằng cách:",
          "Duy trì cân nặng phù hợp.",
          "Tập thể dục đều đặn.",
          "Tăng sức mạnh cơ đùi và cơ mông.",
          "Khởi động kỹ trước khi chơi thể thao.",
          "Điều trị và phục hồi đúng sau chấn thương.",
          "Sử dụng kỹ thuật nâng, mang và vận động phù hợp.",
          "Tránh lặp lại các động tác gây quá tải khớp trong thời gian dài.",
          "Không tự chịu đau sau chấn thương mà bỏ qua việc kiểm tra.",
          "Thoái hóa khớp không phải là hậu quả không thể tránh khỏi của tuổi tác. Việc duy trì cơ khỏe, cân nặng hợp lý và xử lý chấn thương đúng cách có thể giúp bảo vệ chức năng khớp lâu dài.",
          "Khi nào nên đi khám Cơ xương khớp?",
          "Người bệnh nên đi khám nếu:",
          "Đau gối kéo dài trên vài tuần.",
          "Cơn đau tái phát nhiều lần.",
          "Đau ảnh hưởng đến đi lại hoặc giấc ngủ.",
          "Khớp thường xuyên sưng.",
          "Không thể gập hoặc duỗi gối như trước.",
          "Đầu gối yếu, khuỵu hoặc mất vững.",
          "Triệu chứng không cải thiện sau khi nghỉ ngơi và điều chỉnh vận động.",
          "Đã tự dùng thuốc nhiều lần.",
          "Có tiền sử chấn thương hoặc phẫu thuật khớp.",
          "Khớp bắt đầu biến dạng.",
          "Đi khám sớm giúp xác định đúng nguyên nhân, tránh tự điều trị kéo dài và xây dựng chương trình phục hồi phù hợp trước khi khả năng vận động suy giảm đáng kể."
        ]
      },
      {
        "heading": "Khám và điều trị thoái hóa khớp gối tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi có biểu hiện đau, cứng, sưng hoặc hạn chế vận động đầu gối, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được thăm khám và đánh giá.",
          "Tùy tình trạng cụ thể, bác sĩ có thể chỉ định X-quang, xét nghiệm, siêu âm, cộng hưởng từ hoặc kiểm tra dịch khớp khi cần. Sau khi xác định nguyên nhân, người bệnh sẽ được tư vấn kế hoạch điều trị phù hợp, có thể bao gồm thuốc, phục hồi chức năng, kiểm soát cân nặng, dụng cụ hỗ trợ hoặc can thiệp ngoại khoa.",
          "Sự phối hợp giữa chuyên khoa Cơ xương khớp, Chấn thương chỉnh hình, Chẩn đoán hình ảnh và Phục hồi chức năng giúp quá trình chăm sóc tập trung không chỉ vào giảm đau trước mắt mà còn vào việc duy trì khả năng vận động lâu dài."
        ]
      },
      {
        "heading": "Chủ động vận động đúng để bảo vệ khớp gối",
        "paragraphs": [
          "Thoái hóa khớp gối là bệnh tiến triển theo thời gian, nhưng không đồng nghĩa người bệnh phải ngừng vận động hoặc chắc chắn sẽ phải thay khớp. Tập luyện đúng, kiểm soát cân nặng và sử dụng thuốc an toàn có thể giúp nhiều người duy trì sinh hoạt trong thời gian dài.",
          "Nếu đau gối kéo dài, khớp thường xuyên sưng, cứng hoặc đi lại ngày càng khó khăn, người bệnh không nên chỉ xoa bóp hoặc tự mua thuốc giảm đau. Thăm khám sớm sẽ giúp xác định đúng nguyên nhân và lựa chọn phương pháp điều trị phù hợp với từng giai đoạn.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "dau-lung-keo-dai-khi-nao-can-chup-mri": {
    "sourceFile": "37.Đau lưng kéo dài khi nào cần chụp MRI.docx",
    "title": "Đau lưng kéo dài: Khi nào cần chụp MRI?",
    "excerpt": "Đau lưng có thể xuất hiện sau một ngày ngồi làm việc quá lâu, mang vật nặng, vận động sai tư thế hoặc ngủ trên chiếc đệm không phù hợp. Phần lớn các trường hợp đau lưng thông thường có thể cải thiện khi nghỉ ngơi hợp lý, vận động nhẹ và điều chỉnh thói quen sinh hoạt.",
    "intro": [
      "Đau lưng có thể xuất hiện sau một ngày ngồi làm việc quá lâu, mang vật nặng, vận động sai tư thế hoặc ngủ trên chiếc đệm không phù hợp. Phần lớn các trường hợp đau lưng thông thường có thể cải thiện khi nghỉ ngơi hợp lý, vận động nhẹ và điều chỉnh thói quen sinh hoạt.",
      "Tuy nhiên, khi cơn đau kéo dài, tái diễn nhiều lần hoặc lan xuống chân, nhiều người bắt đầu lo lắng và muốn chụp MRI để “xem bên trong có vấn đề gì”. MRI là phương pháp chẩn đoán hình ảnh có giá trị cao, nhưng không phải trường hợp đau lưng nào cũng cần thực hiện ngay.",
      "Điều quan trọng là người bệnh cần được thăm khám trước để bác sĩ xác định liệu kết quả MRI có giúp thay đổi hướng điều trị hay không.",
      "Đau lưng kéo dài được hiểu như thế nào?",
      "Đau lưng có thể xuất hiện ở vùng lưng trên, lưng giữa hoặc thắt lưng. Trong đó, đau vùng thắt lưng là tình trạng phổ biến nhất vì khu vực này phải chịu nhiều trọng lượng và tham gia vào hầu hết các hoạt động như đứng, ngồi, cúi, xoay người và nâng vật.",
      "Dựa vào thời gian, đau lưng thường được chia thành:",
      "Đau cấp tính: Kéo dài dưới khoảng 4 tuần.",
      "Đau bán cấp: Kéo dài khoảng 4–12 tuần.",
      "Đau mạn tính: Kéo dài từ 12 tuần trở lên.",
      "Cách phân chia này chỉ mang tính định hướng. Một cơn đau mới xuất hiện nhưng đi kèm yếu chân hoặc rối loạn tiểu tiện có thể nguy hiểm hơn nhiều so với cơn đau đã kéo dài vài tháng nhưng không có dấu hiệu bất thường.",
      "Vì vậy, thời gian đau không phải yếu tố duy nhất quyết định người bệnh có cần chụp MRI hay không."
    ],
    "sections": [
      {
        "heading": "Những nguyên nhân thường gặp gây đau lưng",
        "paragraphs": [
          "Đau lưng có thể liên quan đến cơ, dây chằng, đĩa đệm, khớp, đốt sống hoặc hệ thần kinh. Một số nguyên nhân thường gặp gồm:",
          "Ngồi lâu, ngồi sai tư thế.",
          "Mang vác vật nặng không đúng cách.",
          "Căng cơ hoặc bong gân vùng lưng.",
          "Ít vận động khiến cơ bụng và cơ lưng yếu.",
          "Thừa cân, béo phì.",
          "Thoái hóa cột sống.",
          "Thoát vị đĩa đệm.",
          "Hẹp ống sống.",
          "Trượt đốt sống.",
          "Loãng xương hoặc xẹp đốt sống.",
          "Viêm khớp hoặc bệnh lý viêm cột sống.",
          "Không phải cơn đau nào ở vùng lưng cũng bắt nguồn từ cột sống. Một số bệnh của thận, đường tiết niệu, cơ quan tiêu hóa hoặc phụ khoa cũng có thể gây đau lan ra phía sau lưng.",
          "Do đó, bác sĩ cần hỏi kỹ vị trí đau, hoàn cảnh khởi phát, hướng lan, yếu tố làm tăng hoặc giảm đau và các triệu chứng đi kèm trước khi lựa chọn phương pháp kiểm tra.",
          "Chụp MRI cột sống là gì?",
          "MRI, hay chụp cộng hưởng từ, sử dụng từ trường, sóng vô tuyến và hệ thống máy tính để tạo ra hình ảnh chi tiết của các cấu trúc bên trong cơ thể. MRI không sử dụng tia X nên không gây phơi nhiễm bức xạ ion hóa.",
          "MRI cột sống có khả năng quan sát tương đối rõ:",
          "Đĩa đệm.",
          "Tủy sống.",
          "Rễ thần kinh.",
          "Ống sống.",
          "Dây chằng.",
          "Mô mềm quanh cột sống.",
          "Tình trạng viêm, nhiễm trùng hoặc khối bất thường.",
          "Một số tổn thương của thân đốt sống và tủy xương.",
          "Nhờ đó, MRI thường có giá trị khi bác sĩ nghi ngờ thoát vị đĩa đệm chèn ép thần kinh, hẹp ống sống, tổn thương tủy sống, nhiễm trùng, khối u hoặc một số bệnh lý cột sống phức tạp.",
          "Tuy nhiên, hình ảnh chi tiết không có nghĩa MRI luôn cần thiết ngay từ đầu.",
          "Vì sao đau lưng không phải lúc nào cũng cần chụp MRI?",
          "Nhiều trường hợp đau lưng bắt nguồn từ căng cơ, quá tải vận động hoặc thay đổi thoái hóa thông thường. Những tình trạng này thường có thể được nhận biết bước đầu thông qua hỏi bệnh và khám lâm sàng.",
          "Hướng dẫn của NICE không khuyến cáo chụp hình ảnh thường quy đối với đau thắt lưng không đặc hiệu tại cơ sở khám ban đầu. Chẩn đoán hình ảnh chỉ nên được cân nhắc khi kết quả có khả năng làm thay đổi kế hoạch điều trị.",
          "Tiêu chuẩn của Hội Điện quang Hoa Kỳ cũng đánh giá MRI, CT và X-quang thường không phù hợp như phương pháp kiểm tra ban đầu đối với đau thắt lưng không có dấu hiệu cảnh báo và chưa trải qua điều trị bảo tồn.",
          "Một lý do khác là MRI có thể phát hiện các thay đổi thoái hóa, phình hoặc lồi đĩa đệm ở cả những người không hề đau lưng. Nếu chỉ nhìn hình ảnh mà không đối chiếu với triệu chứng và khám lâm sàng, người bệnh có thể lo lắng quá mức hoặc tiếp nhận những phương pháp điều trị chưa thực sự cần thiết.",
          "Nói một cách dễ hiểu, MRI có thể cho thấy “cột sống trông như thế nào”, nhưng bác sĩ vẫn phải xác định thay đổi nào thực sự gây ra triệu chứng.",
          "Khi nào đau lưng kéo dài có thể cần chụp MRI?",
          "Bác sĩ có thể cân nhắc MRI trong một số tình huống dưới đây."
        ]
      },
      {
        "heading": "Đau không cải thiện sau một thời gian điều trị phù hợp",
        "paragraphs": [
          "Người bệnh có thể cần được đánh giá bằng MRI nếu đau kéo dài hoặc tăng dần dù đã:",
          "Điều chỉnh tư thế và hoạt động.",
          "Vận động, tập phục hồi chức năng theo hướng dẫn.",
          "Sử dụng thuốc theo chỉ định.",
          "Kiểm soát cân nặng và các yếu tố làm đau nặng hơn.",
          "Theo tiêu chuẩn của Hội Điện quang Hoa Kỳ, MRI cột sống thắt lưng thường phù hợp ở người có triệu chứng dai dẳng hoặc tiến triển sau khoảng sáu tuần điều trị tối ưu, đặc biệt khi đang được cân nhắc can thiệp hoặc phẫu thuật.",
          "Mốc sáu tuần không phải quy tắc áp dụng cứng nhắc cho mọi người. Bác sĩ có thể chỉ định sớm hơn nếu có dấu hiệu nguy hiểm hoặc trì hoãn nếu tình trạng đang cải thiện rõ."
        ]
      },
      {
        "heading": "Đau lan xuống chân kèm tê hoặc yếu cơ",
        "paragraphs": [
          "Đau từ thắt lưng lan qua mông, xuống đùi, cẳng chân hoặc bàn chân có thể liên quan đến kích thích hay chèn ép rễ thần kinh. Người bệnh đôi khi mô tả cơn đau giống như điện giật, bỏng rát hoặc kéo căng dọc theo chân.",
          "MRI có thể được cân nhắc khi:",
          "Đau lan xuống chân kéo dài.",
          "Tê bì không cải thiện.",
          "Sức cơ chân giảm.",
          "Khó nhấc bàn chân hoặc thường xuyên vấp ngã.",
          "Triệu chứng ảnh hưởng đáng kể đến đi lại và sinh hoạt.",
          "Bác sĩ đang cân nhắc tiêm ngoài màng cứng hoặc phẫu thuật.",
          "Với đau rễ thần kinh dai dẳng, MRI thường được ưu tiên khi người bệnh có khả năng cần can thiệp, thay vì chụp chỉ để xác nhận có thoát vị đĩa đệm hay không."
        ]
      },
      {
        "heading": "Nghi ngờ hội chứng chùm đuôi ngựa",
        "paragraphs": [
          "Hội chứng chùm đuôi ngựa xảy ra khi bó rễ thần kinh ở vùng thấp của cột sống bị chèn ép nghiêm trọng. Đây là tình trạng hiếm gặp nhưng có thể gây tổn thương thần kinh lâu dài nếu không được xử lý kịp thời.",
          "Các dấu hiệu cảnh báo gồm:",
          "Bí tiểu hoặc tiểu không tự chủ mới xuất hiện.",
          "Đại tiện không tự chủ.",
          "Mất hoặc giảm cảm giác vùng quanh hậu môn, bộ phận sinh dục và mặt trong hai đùi.",
          "Yếu một hoặc cả hai chân.",
          "Đau thần kinh tọa hai bên.",
          "Triệu chứng thần kinh tiến triển nhanh.",
          "Khi nghi ngờ hội chứng này, người bệnh cần được đánh giá cấp cứu và chụp MRI khẩn cấp, không nên chờ theo dõi tại nhà. NICE xác định đây là tình trạng chèn ép thần kinh nghiêm trọng, cần quy trình đánh giá và chẩn đoán hình ảnh khẩn trương."
        ]
      },
      {
        "heading": "Nghi ngờ nhiễm trùng cột sống",
        "paragraphs": [
          "Nhiễm trùng đốt sống, đĩa đệm hoặc khoang ngoài màng cứng có thể gây đau lưng liên tục và tiến triển. Bác sĩ có thể nghi ngờ khi đau đi kèm:",
          "Sốt hoặc rét run.",
          "Đau nhiều về đêm.",
          "Suy giảm miễn dịch.",
          "Tiền sử dùng thuốc tiêm tĩnh mạch.",
          "Vừa trải qua thủ thuật hoặc phẫu thuật cột sống.",
          "Có ổ nhiễm trùng ở vị trí khác.",
          "Xét nghiệm viêm tăng bất thường.",
          "Trong trường hợp nghi ngờ nhiễm trùng, MRI thường là phương pháp có giá trị cao để đánh giá đĩa đệm, thân đốt sống, tủy sống và mô mềm xung quanh. MRI có tiêm thuốc tương phản có thể được chỉ định tùy tình huống."
        ]
      },
      {
        "heading": "Có tiền sử ung thư hoặc nghi ngờ khối u",
        "paragraphs": [
          "Đau lưng cần được đánh giá kỹ hơn nếu người bệnh có:",
          "Tiền sử mắc ung thư.",
          "Sụt cân không chủ ý.",
          "Đau tăng về đêm hoặc khi nằm nghỉ.",
          "Cơn đau liên tục, không liên quan rõ đến vận động.",
          "Mệt mỏi, thiếu máu hoặc các biểu hiện toàn thân bất thường.",
          "Những dấu hiệu này không đồng nghĩa chắc chắn có ung thư cột sống. Tuy nhiên, bác sĩ có thể chỉ định MRI và các xét nghiệm khác để loại trừ tổn thương nghiêm trọng. MRI không tiêm hoặc có tiêm thuốc tương phản đều có thể được cân nhắc khi nghi ngờ ung thư, nhiễm trùng hoặc người bệnh bị suy giảm miễn dịch."
        ]
      },
      {
        "heading": "Chấn thương hoặc nguy cơ gãy đốt sống",
        "paragraphs": [
          "Không phải trường hợp chấn thương nào cũng chụp MRI đầu tiên. X-quang hoặc CT thường hữu ích hơn để đánh giá cấu trúc xương và đường gãy.",
          "MRI có thể được bổ sung khi cần kiểm tra:",
          "Tủy sống.",
          "Dây chằng.",
          "Đĩa đệm.",
          "Rễ thần kinh.",
          "Phù tủy xương.",
          "Chèn ép thần kinh sau chấn thương.",
          "Người cao tuổi, người bị loãng xương, sử dụng corticosteroid kéo dài hoặc đau xuất hiện sau một va chạm nhẹ cũng cần được bác sĩ đánh giá nguy cơ xẹp, lún hoặc gãy đốt sống."
        ]
      },
      {
        "heading": "Xuất hiện triệu chứng mới sau phẫu thuật cột sống",
        "paragraphs": [
          "Người từng phẫu thuật cột sống có thể cần MRI nếu xuất hiện đau mới, đau tăng, sốt, yếu chân hoặc triệu chứng thần kinh khác.",
          "Trong một số trường hợp, MRI có tiêm thuốc tương phản được dùng để phân biệt mô sẹo sau mổ với thoát vị đĩa đệm tái phát hoặc đánh giá nhiễm trùng và biến chứng khác. Việc lựa chọn có tiêm hay không sẽ do bác sĩ chẩn đoán hình ảnh quyết định dựa trên mục tiêu kiểm tra.",
          "Khi nào chưa cần chụp MRI ngay?",
          "Người bệnh thường chưa cần MRI ngay nếu:",
          "Đau xuất hiện sau khi ngồi lâu, vận động quá sức hoặc nâng vật nặng.",
          "Cơn đau mới xảy ra trong thời gian ngắn.",
          "Không sốt, không sụt cân và không có tiền sử ung thư.",
          "Không yếu chân, mất cảm giác hoặc rối loạn đại tiểu tiện.",
          "Triệu chứng đang cải thiện khi điều chỉnh hoạt động.",
          "Bác sĩ khám chưa phát hiện dấu hiệu gợi ý tổn thương nghiêm trọng.",
          "Trong những trường hợp này, người bệnh có thể được hướng dẫn duy trì hoạt động phù hợp, hạn chế nằm bất động kéo dài, điều chỉnh tư thế, tập phục hồi chức năng và sử dụng thuốc nếu có chỉ định.",
          "Nếu cơn đau không cải thiện, tái phát thường xuyên hoặc xuất hiện triệu chứng mới, bác sĩ sẽ đánh giá lại và cân nhắc chẩn đoán hình ảnh.",
          "MRI, X-quang và CT khác nhau như thế nào?",
          "Mỗi phương pháp có thế mạnh riêng, không phải MRI luôn “cao cấp hơn” và thay thế được tất cả các kỹ thuật khác.",
          "X-quang",
          "X-quang thường giúp quan sát:",
          "Hình dạng và trục cột sống.",
          "Thoái hóa xương.",
          "Trượt đốt sống.",
          "Một số trường hợp gãy hoặc xẹp đốt sống.",
          "Biến dạng cột sống.",
          "Tuy nhiên, X-quang không thể hiện rõ đĩa đệm, tủy sống và rễ thần kinh.",
          "CT",
          "CT cho hình ảnh chi tiết về cấu trúc xương, thường có giá trị trong chấn thương, nghi ngờ gãy đốt sống hoặc khi người bệnh không thể chụp MRI. CT sử dụng tia X, trong khi MRI không sử dụng bức xạ ion hóa.",
          "MRI",
          "MRI nổi bật khi cần đánh giá đĩa đệm, dây thần kinh, tủy sống, dây chằng và mô mềm. Phương pháp này thường được lựa chọn khi nghi ngờ chèn ép thần kinh, nhiễm trùng, khối u hoặc khi kết quả có vai trò trong việc lập kế hoạch can thiệp.",
          "Bác sĩ sẽ lựa chọn kỹ thuật phù hợp dựa trên câu hỏi cần giải đáp, thay vì mặc định mọi trường hợp đau lưng đều phải chụp MRI.",
          "Chụp MRI có cần tiêm thuốc tương phản không?",
          "Phần lớn các trường hợp đánh giá thoát vị đĩa đệm hoặc hẹp ống sống có thể bắt đầu bằng MRI không tiêm thuốc tương phản.",
          "Thuốc tương phản chứa gadolinium có thể được sử dụng khi bác sĩ cần đánh giá rõ hơn:",
          "Khối u.",
          "Nhiễm trùng.",
          "Viêm.",
          "Biến chứng sau phẫu thuật.",
          "Một số tổn thương tủy sống hoặc mô mềm.",
          "Thuốc tương phản không phải lúc nào cũng cần thiết. Trước khi tiêm, nhân viên y tế sẽ khai thác tiền sử dị ứng, bệnh thận, thai kỳ và các yếu tố liên quan để bảo đảm an toàn.",
          "Cần chuẩn bị gì trước khi chụp MRI cột sống?",
          "Trước khi thực hiện, người bệnh nên thông báo cho nhân viên y tế nếu có:",
          "Máy tạo nhịp tim hoặc thiết bị điện tử cấy ghép.",
          "Van tim, kẹp mạch máu hoặc vật liệu kim loại trong cơ thể.",
          "Mảnh kim loại trong mắt hoặc từng làm việc trong môi trường có nguy cơ kim loại bắn vào mắt.",
          "Khớp nhân tạo, nẹp vít hoặc từng phẫu thuật cột sống.",
          "Bệnh thận.",
          "Đang mang thai hoặc nghi ngờ mang thai.",
          "Tiền sử dị ứng thuốc tương phản.",
          "Chứng sợ không gian kín.",
          "Máy MRI tạo ra từ trường mạnh nên mọi thiết bị và vật liệu kim loại cần được kiểm tra khả năng tương thích trước khi chụp. Người bệnh cũng sẽ được yêu cầu tháo trang sức, đồng hồ, thẻ từ và các vật dụng kim loại.",
          "Trong lúc chụp, máy có thể phát ra tiếng động lớn. Người bệnh cần nằm yên để hình ảnh không bị mờ và có thể sử dụng nút liên lạc với kỹ thuật viên nếu cảm thấy khó chịu.",
          "Kết quả MRI có phải là chẩn đoán cuối cùng không?",
          "Kết quả MRI cần được bác sĩ đối chiếu với:",
          "Vị trí và tính chất cơn đau.",
          "Hướng đau lan.",
          "Khám cảm giác và sức cơ.",
          "Phản xạ thần kinh.",
          "Khả năng đi lại và vận động.",
          "Các bệnh nền và kết quả xét nghiệm khác.",
          "Ví dụ, một người có hình ảnh lồi đĩa đệm nhưng không có đau lan, tê hoặc yếu chân có thể chưa cần can thiệp. Trong khi đó, một tổn thương nhỏ nhưng đúng vị trí chèn ép rễ thần kinh lại có thể giải thích rõ triệu chứng.",
          "Vì vậy, người bệnh không nên tự đọc kết quả rồi kết luận mình phải phẫu thuật hoặc bệnh đã ở mức độ nghiêm trọng.",
          "Dấu hiệu nào cần đến cơ sở y tế ngay?",
          "Người bị đau lưng nên được kiểm tra khẩn cấp nếu xuất hiện:",
          "Bí tiểu hoặc mất kiểm soát đại tiểu tiện.",
          "Tê vùng đáy chậu hoặc bộ phận sinh dục.",
          "Yếu chân tăng nhanh.",
          "Không thể đứng hoặc đi lại bình thường.",
          "Đau sau chấn thương mạnh.",
          "Sốt cao kèm đau lưng dữ dội.",
          "Đau lưng ở người có tiền sử ung thư kèm sụt cân hoặc mệt mỏi bất thường.",
          "Đau dữ dội liên tục, không giảm khi nghỉ.",
          "Đau lưng kèm đau ngực, khó thở, choáng hoặc đau bụng dữ dội.",
          "Những tình trạng này cần được đánh giá ngay. Người bệnh không nên tự đặt lịch chụp MRI rồi chờ kết quả mà bỏ qua việc khám cấp cứu."
        ]
      },
      {
        "heading": "Thăm khám và chẩn đoán hình ảnh tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi đau lưng kéo dài hoặc thường xuyên tái phát, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám, đánh giá vận động, sức cơ, cảm giác và các dấu hiệu thần kinh.",
          "Dựa trên tình trạng cụ thể, bác sĩ sẽ cân nhắc phương pháp chẩn đoán hình ảnh phù hợp như X-quang, CT hoặc MRI. Việc chỉ định đúng kỹ thuật giúp tập trung vào nguyên nhân cần tìm, hạn chế kiểm tra không cần thiết và cung cấp thông tin hữu ích cho kế hoạch điều trị.",
          "Người bệnh nên mang theo kết quả chụp, đơn thuốc và hồ sơ khám trước đây. So sánh hình ảnh cũ với tình trạng hiện tại có thể giúp bác sĩ nhận biết sự thay đổi và tránh phải thực hiện lại những kiểm tra chưa cần thiết."
        ]
      },
      {
        "heading": "Không phải đau lâu là phải chụp, nhưng cũng không nên cố chịu đựng",
        "paragraphs": [
          "MRI là công cụ quan trọng trong chẩn đoán các bệnh lý cột sống, đặc biệt khi đau lưng đi kèm triệu chứng thần kinh, dấu hiệu cảnh báo hoặc không cải thiện sau điều trị phù hợp.",
          "Tuy nhiên, quyết định chụp MRI không nên chỉ dựa vào mức độ lo lắng hoặc số ngày bị đau. Thăm khám lâm sàng vẫn là bước đầu tiên để xác định vị trí tổn thương, loại trừ nguyên nhân nguy hiểm và lựa chọn phương pháp kiểm tra cần thiết.",
          "Nếu đau lưng kéo dài, ảnh hưởng đến giấc ngủ, công việc hoặc khả năng đi lại, người bệnh nên chủ động đi khám. Ngược lại, khi xuất hiện yếu chân, tê vùng đáy chậu hoặc rối loạn đại tiểu tiện, cần đến cơ sở y tế ngay thay vì tiếp tục theo dõi tại nhà.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "chan-thuong-the-thao-xu-tri-ban-dau-va-thoi-diem-nen-di-kham": {
    "sourceFile": "38.Chấn thương thể thao xử trí ban đầu và thời điểm nên đi khám.docx",
    "title": "Chấn thương thể thao: xử trí ban đầu và thời điểm nên đi khám",
    "excerpt": "Một pha tiếp đất sai, cú đổi hướng quá nhanh hoặc buổi tập “hăng” hơn bình thường có thể khiến cổ chân, đầu gối, vai hay cơ bắp đau nhói. Khi đó, nhiều người trẻ thường có hai phản ứng: cố chơi tiếp vì nghĩ “chắc chỉ đau nhẹ”, hoặc tự xoa bóp thật mạnh với hy vọng hôm sau sẽ khỏi.",
    "intro": [
      "Một pha tiếp đất sai, cú đổi hướng quá nhanh hoặc buổi tập “hăng” hơn bình thường có thể khiến cổ chân, đầu gối, vai hay cơ bắp đau nhói. Khi đó, nhiều người trẻ thường có hai phản ứng: cố chơi tiếp vì nghĩ “chắc chỉ đau nhẹ”, hoặc tự xoa bóp thật mạnh với hy vọng hôm sau sẽ khỏi.",
      "Không phải chấn thương thể thao nào cũng nghiêm trọng. Tuy nhiên, xử trí không đúng trong những giờ đầu có thể làm tổn thương nặng hơn, kéo dài thời gian hồi phục và tăng nguy cơ tái phát. Điều quan trọng là biết khi nào có thể chăm sóc ban đầu, khi nào cần dừng tập và dấu hiệu nào đòi hỏi phải đến bệnh viện.",
      "Chấn thương thể thao là gì?",
      "Chấn thương thể thao là những tổn thương xảy ra trong quá trình tập luyện, thi đấu hoặc tham gia hoạt động thể chất. Tình trạng này không chỉ gặp ở vận động viên chuyên nghiệp mà còn phổ biến ở người chạy bộ, tập gym, đá bóng phong trào hoặc mới bắt đầu chơi một môn thể thao.",
      "Các chấn thương thường gặp gồm:",
      "Bong gân.",
      "Căng hoặc rách cơ.",
      "Chấn thương dây chằng và sụn chêm.",
      "Viêm hoặc tổn thương gân.",
      "Bầm tím, tụ máu.",
      "Trật khớp.",
      "Nứt hoặc gãy xương.",
      "Vết cắt, trầy xước.",
      "Chấn thương đầu và chấn động não.",
      "Bong gân là tình trạng dây chằng quanh khớp bị kéo giãn hoặc rách. Trong khi đó, căng cơ là tổn thương tại cơ hoặc gân, cấu trúc nối cơ với xương. Cả hai đều có thể gây đau, sưng, bầm tím và hạn chế vận động.",
      "Vì sao người trẻ dễ gặp chấn thương khi chơi thể thao?",
      "Sức khỏe tốt không đồng nghĩa cơ thể có thể chịu được mọi mức vận động. Nhiều chấn thương ở người trẻ không xuất phát từ va chạm mạnh mà liên quan đến việc tăng khối lượng tập luyện quá nhanh.",
      "Những nguyên nhân thường gặp gồm:",
      "Không khởi động hoặc khởi động quá sơ sài.",
      "Tăng quãng đường, mức tạ hoặc cường độ đột ngột.",
      "Thực hiện động tác sai kỹ thuật.",
      "Tiếp đất, xoay người hoặc đổi hướng không đúng.",
      "Tập luyện liên tục nhưng thiếu thời gian phục hồi.",
      "Sử dụng giày hoặc dụng cụ không phù hợp.",
      "Chơi trên mặt sân trơn, cứng hoặc không bằng phẳng.",
      "Mất nước, mệt mỏi hoặc thiếu ngủ.",
      "Cố tập dù cơ thể đang đau.",
      "Quay lại thi đấu khi chấn thương trước chưa hồi phục hoàn toàn.",
      "Mang trang bị phù hợp, uống đủ nước, khởi động và chuẩn bị thể lực trước khi chơi thể thao có thể giúp giảm nguy cơ chấn thương."
    ],
    "sections": [
      {
        "heading": "Việc đầu tiên cần làm khi bị chấn thương",
        "paragraphs": [
          "Khi cảm thấy đau nhói, nghe tiếng “rắc”, khớp mất vững hoặc không thể tiếp tục động tác bình thường, người chơi nên dừng hoạt động ngay.",
          "Đừng cố chạy thêm một vòng, hoàn thành nốt hiệp đấu hoặc “thử xem có chịu được không”. Cảm giác đau là tín hiệu cảnh báo. Việc tiếp tục vận động có thể làm tổn thương cơ, gân, dây chằng hoặc xương trở nên nghiêm trọng hơn.",
          "Sau khi dừng chơi, hãy nhanh chóng kiểm tra:",
          "Người bị thương có tỉnh táo và thở bình thường không?",
          "Có va đập vào đầu, cổ hoặc cột sống không?",
          "Vùng bị thương có biến dạng không?",
          "Có chảy máu nhiều không?",
          "Có thể cử động và chịu lực không?",
          "Bàn tay hoặc bàn chân có tê, lạnh hay đổi màu không?",
          "Nếu có chấn thương đầu, khó thở, mất ý thức, chảy máu nhiều hoặc nghi ngờ tổn thương cột sống, cần gọi hỗ trợ y tế ngay và hạn chế di chuyển người bị thương."
        ]
      },
      {
        "heading": "Xử trí bong gân, căng cơ và bầm tím trong những ngày đầu",
        "paragraphs": [
          "Với chấn thương phần mềm mức độ nhẹ, có thể áp dụng các bước bảo vệ, nghỉ tương đối, chườm lạnh, băng ép và kê cao vùng bị thương."
        ]
      },
      {
        "heading": "Bảo vệ vùng chấn thương",
        "paragraphs": [
          "Ngừng những động tác gây đau và tránh va chạm thêm. Người bị chấn thương ở chân có thể cần nạng hoặc dụng cụ hỗ trợ nếu việc đi lại gây đau rõ rệt.",
          "Không nên “thử lực” liên tục bằng cách chạy, nhảy hoặc xoay khớp để kiểm tra xem chấn thương đã đỡ chưa."
        ]
      },
      {
        "heading": "Nghỉ tương đối",
        "paragraphs": [
          "Trong một đến vài ngày đầu, nên hạn chế hoạt động làm đau tăng. Tuy nhiên, nghỉ không có nghĩa là bất động hoàn toàn trong thời gian dài.",
          "Khi cảm giác đau và sưng bắt đầu giảm, người bệnh thường cần quay lại những vận động nhẹ, trong giới hạn không gây đau rõ rệt, để tránh cứng khớp và yếu cơ. Thời điểm vận động trở lại phụ thuộc vào vị trí và mức độ tổn thương."
        ]
      },
      {
        "heading": "Chườm lạnh đúng cách",
        "paragraphs": [
          "Có thể sử dụng túi đá, túi gel lạnh hoặc thực phẩm đông lạnh được bọc trong khăn mỏng. Không đặt đá trực tiếp lên da vì có thể gây tổn thương do lạnh.",
          "Mỗi lần chườm thường kéo dài khoảng 15–20 phút và có thể lặp lại sau vài giờ trong những ngày đầu, tùy tình trạng. Nếu vùng da tê buốt nhiều, trắng bệch hoặc đau rát, cần dừng chườm."
        ]
      },
      {
        "heading": "Băng ép vừa phải",
        "paragraphs": [
          "Băng thun có thể giúp hỗ trợ vùng tổn thương và hạn chế sưng. Băng nên ôm vừa phải, không quấn quá chặt.",
          "Hãy nới hoặc tháo băng nếu xuất hiện:",
          "Tê hoặc châm chích.",
          "Ngón tay, ngón chân tái hoặc tím.",
          "Vùng phía dưới băng lạnh hơn bên còn lại.",
          "Đau tăng sau khi băng.",
          "Băng ép sai cách có thể ảnh hưởng đến tuần hoàn, vì vậy không nên siết chặt với suy nghĩ “càng chặt càng nhanh khỏi”."
        ]
      },
      {
        "heading": "Kê cao vùng bị thương",
        "paragraphs": [
          "Nếu có thể, hãy kê tay hoặc chân bị thương cao hơn mức tim, đặc biệt khi nằm nghỉ. Biện pháp này có thể hỗ trợ giảm sưng và cảm giác căng tức."
        ]
      },
      {
        "heading": "Những điều nên tránh ngay sau chấn thương",
        "paragraphs": [
          "Trong hai đến ba ngày đầu, người bệnh thường nên tránh các tác động có thể làm sưng hoặc chảy máu trong mô tăng lên, chẳng hạn:",
          "Tắm nước quá nóng hoặc chườm nóng sớm.",
          "Uống nhiều rượu bia.",
          "Xoa bóp mạnh vào vùng đang sưng đau.",
          "Chạy thử, bật nhảy hoặc tập lại quá sớm.",
          "Tự nắn khớp.",
          "Chọc hút hoặc đắp các hỗn hợp không bảo đảm vệ sinh.",
          "Nhiệt nóng và massage mạnh trong giai đoạn đầu có thể khiến vùng tổn thương sưng, đau hoặc bầm nhiều hơn."
        ]
      },
      {
        "heading": "Xử trí khi bị trầy xước hoặc chảy máu",
        "paragraphs": [
          "Với vết trầy xước nhỏ, cần rửa tay, làm sạch vết thương bằng nước sạch, loại bỏ đất cát nhìn thấy được và che bằng gạc hoặc băng sạch.",
          "Nếu vết thương đang chảy máu, có thể dùng gạc sạch ép trực tiếp và liên tục lên vị trí tổn thương. Không nên liên tục nhấc gạc lên để kiểm tra vì có thể làm cục máu đông vừa hình thành bị bong ra.",
          "Vết thương cần được nhân viên y tế kiểm tra nếu:",
          "Máu chảy nhiều hoặc không cầm.",
          "Vết cắt sâu, rộng hoặc há miệng.",
          "Có dị vật cắm trong vết thương.",
          "Vết thương do vật bẩn, gỉ hoặc do người hay động vật cắn.",
          "Mất cảm giác hoặc khó cử động phần bên dưới.",
          "Xuất hiện sưng nóng, đỏ, đau tăng, chảy mủ hoặc sốt.",
          "Không tự rút vật đang cắm sâu trong vết thương. Hãy cố định tương đối vật đó và đưa người bị thương đến cơ sở y tế.",
          "Nghi gãy xương hoặc trật khớp cần làm gì?",
          "Gãy xương và trật khớp đôi khi khó phân biệt bằng mắt thường. Cả hai đều cần được đánh giá y tế, đặc biệt khi vùng chấn thương biến dạng, sưng nhanh hoặc mất khả năng vận động.",
          "Trong lúc chờ hỗ trợ:",
          "Giữ phần bị thương ở tư thế hiện tại.",
          "Hạn chế di chuyển.",
          "Có thể cố định tạm thời nếu biết kỹ thuật.",
          "Tháo nhẫn, vòng hoặc đồ bó sát trước khi vùng tổn thương sưng nhiều.",
          "Không cố kéo, bẻ hoặc nắn xương và khớp trở lại vị trí.",
          "Không bắt người bị thương đứng lên để “thử chân”.",
          "Tự nắn trật khớp có thể làm tổn thương thêm mạch máu, thần kinh, sụn và xương. Khớp trật cần được đưa về đúng vị trí bởi nhân viên y tế trong điều kiện phù hợp."
        ]
      },
      {
        "heading": "Đặc biệt thận trọng với chấn thương đầu",
        "paragraphs": [
          "Chấn động não có thể xảy ra sau một cú va vào đầu hoặc một tác động vào cơ thể khiến đầu và não chuyển động nhanh. Người bị chấn động não không nhất thiết phải bất tỉnh.",
          "Cần nghĩ đến chấn động não nếu sau va chạm, người chơi có:",
          "Đau đầu.",
          "Chóng mặt hoặc mất thăng bằng.",
          "Buồn nôn, nôn.",
          "Nhìn mờ.",
          "Nhạy cảm với ánh sáng hoặc tiếng ồn.",
          "Khó tập trung.",
          "Trả lời chậm.",
          "Quên diễn biến trước hoặc sau va chạm.",
          "Cảm giác lơ mơ, “không tỉnh như bình thường”.",
          "Thay đổi tâm trạng hoặc buồn ngủ bất thường.",
          "Khi nghi ngờ chấn động não, người chơi phải rời sân ngay và không được quay lại thi đấu trong cùng buổi. Việc đánh giá và quyết định quay lại thể thao cần do nhân viên y tế thực hiện."
        ]
      },
      {
        "heading": "Dấu hiệu nguy hiểm sau va đập đầu",
        "paragraphs": [
          "Cần đưa người bị thương đi cấp cứu nếu xuất hiện:",
          "Đau đầu tăng dần và không giảm.",
          "Nôn lặp lại.",
          "Co giật.",
          "Yếu hoặc tê tay chân.",
          "Nói khó, nói ngọng.",
          "Đồng tử hai bên không đều.",
          "Kích động, lú lẫn hoặc hành vi bất thường.",
          "Không nhận ra người hoặc địa điểm.",
          "Ngủ gà, khó đánh thức.",
          "Mất ý thức.",
          "Cổ đau nhiều sau va chạm.",
          "Triệu chứng chấn động não có thể xuất hiện ngay hoặc chỉ được nhận thấy sau vài giờ, thậm chí vài ngày. Vì vậy, người bị va đập đầu cần được theo dõi thay vì chỉ dựa vào việc họ vẫn có thể đứng dậy và nói chuyện.",
          "Khi nào chấn thương thể thao cần đi cấp cứu?",
          "Người bị thương cần được đưa đến cơ sở cấp cứu nếu có một trong các dấu hiệu sau:",
          "Mất ý thức, khó thở hoặc co giật.",
          "Chấn thương đầu kèm lú lẫn, nôn nhiều hoặc yếu tay chân.",
          "Nghi ngờ chấn thương cổ hoặc cột sống.",
          "Chảy máu nhiều, không cầm được.",
          "Xương xuyên qua da.",
          "Tay, chân hoặc khớp biến dạng rõ.",
          "Phần chi phía dưới vị trí chấn thương lạnh, tái, tím hoặc mất cảm giác.",
          "Đau dữ dội hoặc sưng tăng rất nhanh.",
          "Không thể cử động tay chân sau chấn thương.",
          "Không thể đứng hoặc chịu lực.",
          "Đau ngực, đau bụng hoặc khó thở sau va chạm mạnh.",
          "Trong trường hợp nghi ngờ tổn thương đầu, cổ, cột sống, xương chậu hoặc đùi, không nên tự ý kéo người bị thương đứng dậy hay di chuyển, trừ khi khu vực hiện tại có nguy hiểm trực tiếp.",
          "Khi nào nên đặt lịch khám Cơ xương khớp hoặc Chấn thương chỉnh hình?",
          "Một chấn thương không nhất thiết phải cấp cứu vẫn có thể cần khám sớm. Người bệnh nên đến cơ sở y tế nếu:",
          "Không thể đi bộ bình thường hoặc chịu lực rất đau.",
          "Khớp thường xuyên khuỵu, lỏng hoặc mất vững.",
          "Có tiếng “rắc” kèm sưng nhanh.",
          "Khớp bị khóa, không thể gập hoặc duỗi hết.",
          "Sưng, đau hoặc bầm tím ngày càng tăng.",
          "Cử động bị hạn chế rõ so với bên lành.",
          "Cảm giác tê, châm chích hoặc yếu cơ.",
          "Đau không cải thiện sau vài ngày chăm sóc ban đầu.",
          "Triệu chứng kéo dài trên một tuần.",
          "Đau tái diễn mỗi khi quay lại tập.",
          "Chấn thương cũ chưa khỏi hoàn toàn.",
          "Đau ở một vị trí xương rõ rệt khi ấn vào.",
          "Thành tích và khả năng vận động giảm kéo dài.",
          "Không thể chịu lực, khớp yếu hoặc khuỵu, tê lạnh đầu chi và triệu chứng không cải thiện sau chăm sóc ban đầu là những lý do cần được bác sĩ đánh giá.",
          "Bác sĩ có thể kiểm tra những gì?",
          "Khi thăm khám chấn thương thể thao, bác sĩ thường hỏi về cơ chế chấn thương: va đập trực tiếp, xoay người, tiếp đất, tăng mức tập hay đau xuất hiện từ từ.",
          "Sau đó, bác sĩ có thể kiểm tra:",
          "Vị trí đau và mức độ sưng.",
          "Biên độ vận động.",
          "Sức mạnh cơ.",
          "Độ vững của khớp.",
          "Dấu hiệu tổn thương dây chằng, gân hoặc sụn chêm.",
          "Tuần hoàn và cảm giác của tay chân.",
          "Khả năng đi lại hoặc thực hiện động tác thể thao.",
          "Tùy trường hợp, người bệnh có thể được chỉ định X-quang để kiểm tra xương, siêu âm đánh giá cơ và gân, hoặc cộng hưởng từ khi nghi ngờ tổn thương dây chằng, sụn chêm hay mô mềm sâu.",
          "Không phải chấn thương nào cũng cần chụp cộng hưởng từ ngay. Bác sĩ sẽ lựa chọn phương pháp dựa trên vị trí, mức độ tổn thương và kết quả khám.",
          "Khi nào có thể quay lại chơi thể thao?",
          "Hết đau khi ngồi nghỉ chưa có nghĩa cơ thể đã sẵn sàng thi đấu. Quay lại quá sớm có thể khiến tổn thương tái phát hoặc trở nên nặng hơn.",
          "Trước khi quay lại tập, vùng bị thương thường cần đạt được các điều kiện cơ bản:",
          "Không còn sưng đáng kể.",
          "Vận động gần tương đương bên lành.",
          "Sức mạnh và khả năng giữ thăng bằng đã phục hồi.",
          "Có thể chạy, bật nhảy hoặc đổi hướng mà không đau và không mất vững.",
          "Hoàn thành các bài tập đặc thù của môn thể thao.",
          "Được bác sĩ hoặc chuyên viên phục hồi chức năng đồng ý khi chấn thương ở mức độ vừa hoặc nặng.",
          "Với chấn động não, quá trình trở lại thể thao cần thực hiện từng bước, từ hoạt động nhẹ đến tập nặng không va chạm, tập có kiểm soát và cuối cùng mới thi đấu. Chỉ chuyển sang bước tiếp theo khi không xuất hiện triệu chứng, dưới sự hướng dẫn của nhân viên y tế.",
          "Làm thế nào để hạn chế tái phát?",
          "Sau khi cơn đau giảm, người trẻ thường muốn quay lại sân càng nhanh càng tốt. Tuy nhiên, phòng ngừa tái phát cần nhiều hơn việc “nghỉ vài hôm”.",
          "Một số biện pháp hữu ích gồm:",
          "Khởi động trước mỗi buổi tập.",
          "Tăng cường độ và khối lượng theo từng giai đoạn.",
          "Học đúng kỹ thuật với huấn luyện viên.",
          "Tập sức mạnh, độ linh hoạt và khả năng giữ thăng bằng.",
          "Bố trí ngày nghỉ phục hồi.",
          "Thay giày khi đã mòn hoặc mất độ ổn định.",
          "Uống đủ nước và ngủ đủ giấc.",
          "Không dùng thuốc giảm đau để che triệu chứng rồi tiếp tục thi đấu.",
          "Hoàn thành chương trình phục hồi trước khi quay lại cường độ cũ.",
          "Phục hồi đầy đủ không chỉ giúp người chơi đạt phong độ tốt hơn mà còn có ý nghĩa đối với sức khỏe lâu dài của khớp."
        ]
      },
      {
        "heading": "Khám chấn thương thể thao tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Khi bị đau, sưng, hạn chế vận động hoặc mất vững khớp sau tập luyện, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được thăm khám và đánh giá.",
          "Tùy đặc điểm chấn thương, bác sĩ có thể phối hợp giữa chuyên khoa Cơ xương khớp, Chấn thương chỉnh hình, Chẩn đoán hình ảnh và Phục hồi chức năng. Người bệnh sẽ được tư vấn phương pháp điều trị phù hợp, từ chăm sóc bảo tồn, thuốc, nẹp hỗ trợ và vật lý trị liệu đến can thiệp ngoại khoa khi cần.",
          "Việc thăm khám sớm đặc biệt quan trọng khi khớp mất vững, không thể chịu lực, đau tái phát hoặc khả năng vận động không trở lại như trước."
        ]
      },
      {
        "heading": "Đừng để tinh thần “cố thêm chút nữa” làm chấn thương nặng hơn",
        "paragraphs": [
          "Tinh thần thể thao giúp người trẻ vượt qua giới hạn, nhưng đau bất thường không phải là giới hạn cần cố vượt qua. Dừng đúng lúc, xử trí đúng cách và quay lại tập luyện theo từng bước sẽ an toàn hơn nhiều so với cố chơi rồi phải nghỉ dài ngày.",
          "Với chấn thương nhẹ, bảo vệ vùng tổn thương, chườm lạnh, băng ép và kê cao có thể giúp giảm triệu chứng ban đầu. Tuy nhiên, biến dạng, mất khả năng chịu lực, tê lạnh đầu chi, chảy máu nhiều hoặc bất kỳ dấu hiệu bất thường nào sau va đập đầu đều cần được đánh giá y tế sớm.",
          "Nội dung bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "phau-thuat-noi-soi-khop-uu-diem-va-truong-hop-chi-dinh": {
    "sourceFile": "39. Phẫu thuật nội soi khớp ưu điểm và trường hợp chỉ định.docx",
    "title": "Phẫu thuật nội soi khớp: Ưu điểm và những trường hợp được chỉ định",
    "excerpt": "Đau, sưng, kẹt khớp hoặc mất vững khớp có thể ảnh hưởng đáng kể đến khả năng đi lại, làm việc và chơi thể thao. Khi thuốc, vật lý trị liệu và các phương pháp điều trị bảo tồn không mang lại hiệu quả như mong đợi, bác sĩ có thể cân nhắc phẫu thuật để xử lý tổn thương bên trong khớp.",
    "intro": [
      "Đau, sưng, kẹt khớp hoặc mất vững khớp có thể ảnh hưởng đáng kể đến khả năng đi lại, làm việc và chơi thể thao. Khi thuốc, vật lý trị liệu và các phương pháp điều trị bảo tồn không mang lại hiệu quả như mong đợi, bác sĩ có thể cân nhắc phẫu thuật để xử lý tổn thương bên trong khớp.",
      "Một trong những phương pháp được sử dụng phổ biến hiện nay là phẫu thuật nội soi khớp. Kỹ thuật này sử dụng camera nhỏ và các dụng cụ chuyên biệt đưa vào khớp qua những đường rạch nhỏ, giúp bác sĩ quan sát và xử lý tổn thương mà không cần mở rộng toàn bộ khớp.",
      "Mặc dù có nhiều ưu điểm, nội soi khớp không phù hợp với mọi trường hợp đau khớp. Quyết định phẫu thuật cần dựa trên loại tổn thương, mức độ ảnh hưởng đến vận động, kết quả chẩn đoán hình ảnh và khả năng đáp ứng với điều trị không phẫu thuật.",
      "Phẫu thuật nội soi khớp là gì?",
      "Phẫu thuật nội soi khớp là một kỹ thuật ít xâm lấn được sử dụng để quan sát, chẩn đoán và điều trị một số tổn thương nằm bên trong khớp.",
      "Trong quá trình thực hiện, bác sĩ tạo một đường rạch nhỏ trên da để đưa ống nội soi khớp, hay arthroscope, vào bên trong. Dụng cụ này có kích thước nhỏ, được gắn nguồn sáng và camera, truyền hình ảnh phóng đại lên màn hình.",
      "Thông qua một hoặc một số đường rạch nhỏ khác, bác sĩ đưa các dụng cụ phẫu thuật chuyên biệt vào khớp để:",
      "Cắt hoặc sửa chữa mô bị rách.",
      "Khâu lại gân, dây chằng hoặc sụn viền.",
      "Loại bỏ mảnh xương, sụn hoặc dị vật tự do.",
      "Làm sạch mô viêm hoặc mô tổn thương.",
      "Tái tạo dây chằng.",
      "Xử lý một số vùng sụn khớp bị hư hại.",
      "Những khớp thường được nội soi gồm khớp gối, vai, háng, cổ chân, khuỷu tay và cổ tay. Tùy tổn thương, nội soi có thể được thực hiện độc lập hoặc kết hợp với một đường mổ mở nhỏ.",
      "Phẫu thuật nội soi khớp được thực hiện như thế nào?",
      "Trước phẫu thuật, người bệnh được thăm khám, đánh giá sức khỏe tổng thể và thực hiện các kiểm tra cần thiết. Bác sĩ có thể chỉ định X-quang, siêu âm, MRI hoặc CT tùy loại khớp và tổn thương nghi ngờ.",
      "Trong phòng mổ, người bệnh được gây mê toàn thân, gây tê tủy sống, gây tê vùng hoặc áp dụng phương pháp vô cảm phù hợp với vị trí phẫu thuật và tình trạng sức khỏe.",
      "Quy trình cơ bản thường gồm:",
      "Sát khuẩn và chuẩn bị vùng khớp cần phẫu thuật.",
      "Tạo các đường vào khớp có kích thước nhỏ, còn gọi là cổng nội soi.",
      "Đưa camera nội soi vào để quan sát cấu trúc khớp.",
      "Bơm dung dịch vô khuẩn giúp mở rộng khoang khớp và làm rõ hình ảnh.",
      "Đưa dụng cụ qua các đường vào khác để xử lý tổn thương.",
      "Kiểm tra lại khớp, rút dụng cụ và đóng các vết rạch.",
      "Băng vết mổ và chuyển người bệnh sang khu vực hồi tỉnh.",
      "Thời gian phẫu thuật phụ thuộc vào vị trí khớp và mức độ phức tạp. Một thủ thuật loại bỏ mảnh sụn tự do có thể đơn giản hơn nhiều so với khâu sụn chêm, tái tạo dây chằng chéo hoặc sửa chữa gân chóp xoay.",
      "Phẫu thuật nội soi khớp có những ưu điểm gì?"
    ],
    "sections": [
      {
        "heading": "Đường rạch nhỏ hơn so với mổ mở",
        "paragraphs": [
          "Nội soi khớp sử dụng các dụng cụ nhỏ và thường chỉ cần một số đường rạch có kích thước ngắn. Nhờ đó, mô mềm xung quanh khớp có thể ít bị tác động hơn so với việc mở rộng toàn bộ vùng khớp.",
          "Đường rạch nhỏ thường giúp việc chăm sóc vết mổ thuận tiện hơn và hạn chế sẹo lớn. Tuy nhiên, nội soi vẫn là một cuộc phẫu thuật, không phải thủ thuật hoàn toàn không có vết thương."
        ]
      },
      {
        "heading": "Quan sát trực tiếp bên trong khớp",
        "paragraphs": [
          "Camera nội soi cung cấp hình ảnh phóng đại của sụn khớp, dây chằng, gân, sụn viền và các cấu trúc khác. Bác sĩ có thể khảo sát nhiều vùng bên trong khớp và đánh giá tổn thương trong lúc phẫu thuật.",
          "Trong một số trường hợp, tổn thương thực tế có thể khác với dự đoán từ chẩn đoán hình ảnh. Nội soi giúp bác sĩ trực tiếp xác định mức độ tổn thương và xử lý ngay nếu phù hợp."
        ]
      },
      {
        "heading": "Hạn chế tổn thương mô lành xung quanh",
        "paragraphs": [
          "So với đường mổ mở rộng, kỹ thuật nội soi thường giúp bác sĩ tiếp cận tổn thương qua các cổng nhỏ mà không cần bóc tách quá nhiều cơ và mô mềm.",
          "Ưu điểm này có thể góp phần giảm đau sau mổ, giảm cứng khớp và hỗ trợ người bệnh bắt đầu chương trình phục hồi chức năng sớm hơn trong một số loại phẫu thuật."
        ]
      },
      {
        "heading": "Có thể xử lý nhiều tổn thương trong cùng một lần phẫu thuật",
        "paragraphs": [
          "Trong quá trình nội soi, bác sĩ có thể phát hiện nhiều tổn thương cùng tồn tại. Chẳng hạn, một người bị chấn thương gối có thể vừa rách dây chằng, vừa tổn thương sụn chêm hoặc sụn khớp.",
          "Tùy tình trạng, bác sĩ có thể thực hiện nhiều kỹ thuật trong cùng cuộc mổ, chẳng hạn tái tạo dây chằng kết hợp khâu sụn chêm."
        ]
      },
      {
        "heading": "Thời gian nằm viện có thể ngắn hơn",
        "paragraphs": [
          "Nhiều ca nội soi khớp có thể được thực hiện trong ngày hoặc chỉ cần theo dõi tại bệnh viện trong thời gian ngắn. Người bệnh được xuất viện khi tỉnh táo, các chỉ số ổn định, kiểm soát được đau và có khả năng di chuyển an toàn.",
          "Tuy nhiên, thời gian nằm viện còn phụ thuộc vào loại phẫu thuật, phương pháp gây mê, bệnh nền và tình trạng sau mổ. Không nên mặc định tất cả người nội soi khớp đều có thể về nhà ngay."
        ]
      },
      {
        "heading": "Hỗ trợ phục hồi vận động",
        "paragraphs": [
          "Khi tổn thương được xử lý đúng chỉ định và người bệnh tuân thủ phục hồi chức năng, phẫu thuật có thể giúp:",
          "Giảm đau do tổn thương cơ học.",
          "Cải thiện tầm vận động.",
          "Giảm tình trạng kẹt hoặc khóa khớp.",
          "Tăng độ vững của khớp.",
          "Hỗ trợ trở lại sinh hoạt, lao động hoặc thể thao.",
          "Hiệu quả cuối cùng không chỉ phụ thuộc vào kỹ thuật mổ mà còn liên quan đến mức độ tổn thương ban đầu, tuổi, bệnh nền, chất lượng mô và quá trình tập luyện sau phẫu thuật.",
          "Nội soi khớp gối thường được chỉ định khi nào?",
          "Khớp gối là một trong những vị trí được phẫu thuật nội soi phổ biến nhất. Bác sĩ có thể cân nhắc nội soi trong các trường hợp sau."
        ]
      },
      {
        "heading": "Rách sụn chêm",
        "paragraphs": [
          "Sụn chêm là hai cấu trúc sụn có vai trò phân bố lực, giảm chấn và hỗ trợ ổn định khớp gối. Rách sụn chêm có thể xảy ra sau động tác xoay gối đột ngột, chấn thương thể thao hoặc do quá trình thoái hóa.",
          "Không phải mọi vết rách sụn chêm đều phải phẫu thuật. Những vết rách nhỏ, ổn định và không gây triệu chứng cơ học có thể được điều trị bảo tồn.",
          "Nội soi có thể được cân nhắc khi:",
          "Đầu gối thường xuyên bị kẹt hoặc khóa.",
          "Vết rách di lệch làm hạn chế vận động.",
          "Đau và sưng kéo dài dù đã điều trị bảo tồn.",
          "Tổn thương có khả năng khâu phục hồi.",
          "Rách cấp tính ở người trẻ hoặc người vận động nhiều.",
          "Khi phẫu thuật rách sụn chêm cấp tính, mục tiêu thường là bảo tồn tối đa phần sụn còn chức năng. Trong những trường hợp có khả năng lành, khâu sụn chêm có thể được ưu tiên hơn việc cắt bỏ mô sụn."
        ]
      },
      {
        "heading": "Đứt dây chằng chéo trước",
        "paragraphs": [
          "Dây chằng chéo trước, viết tắt là ACL, giúp kiểm soát chuyển động xoay và giữ vững khớp gối. Khi dây chằng bị đứt, người bệnh có thể cảm thấy gối lỏng, mất vững hoặc khuỵu khi đổi hướng.",
          "Phẫu thuật tái tạo ACL thường được cân nhắc ở:",
          "Người chơi thể thao có nhiều động tác xoay, chuyển hướng hoặc tiếp đất.",
          "Người làm công việc lao động thể lực nặng.",
          "Người thường xuyên bị mất vững gối trong sinh hoạt.",
          "Trường hợp có tổn thương phối hợp như rách sụn chêm.",
          "Người có nhu cầu trở lại mức độ vận động cao.",
          "Tuổi không phải yếu tố duy nhất quyết định phẫu thuật. Bác sĩ còn xem xét mức độ hoạt động, triệu chứng mất vững, tổn thương kèm theo và mục tiêu của người bệnh."
        ]
      },
      {
        "heading": "Tổn thương dây chằng chéo sau hoặc nhiều dây chằng",
        "paragraphs": [
          "Một số trường hợp đứt dây chằng chéo sau, tổn thương nhiều dây chằng hoặc mất vững khớp gối kéo dài có thể cần phẫu thuật tái tạo. Kỹ thuật nội soi giúp bác sĩ tạo đường hầm xương và đưa mảnh ghép vào vị trí dây chằng cần phục hồi."
        ]
      },
      {
        "heading": "Mảnh xương hoặc sụn tự do trong khớp",
        "paragraphs": [
          "Mảnh xương hoặc sụn có thể di chuyển trong ổ khớp, gây đau, kẹt hoặc khóa gối đột ngột. Nội soi giúp xác định và loại bỏ các mảnh tự do thông qua đường rạch nhỏ."
        ]
      },
      {
        "heading": "Tổn thương sụn khớp",
        "paragraphs": [
          "Tùy diện tích, vị trí và độ sâu của tổn thương, bác sĩ có thể thực hiện một số kỹ thuật để làm ổn định bề mặt sụn, kích thích tạo mô sửa chữa hoặc cấy ghép mô sụn.",
          "Không phải mọi tổn thương sụn đều có thể phục hồi hoàn toàn. Kế hoạch điều trị cần tính đến tuổi, trục chân, mức độ thoái hóa và nhu cầu vận động của người bệnh."
        ]
      },
      {
        "heading": "Viêm màng hoạt dịch hoặc nhiễm trùng khớp",
        "paragraphs": [
          "Nội soi có thể được sử dụng để lấy bỏ màng hoạt dịch viêm, lấy mẫu xét nghiệm hoặc rửa sạch khớp trong một số trường hợp nhiễm trùng.",
          "Nhiễm trùng khớp là tình trạng cần xử trí sớm. Người bệnh có biểu hiện khớp sưng nóng, đau dữ dội, sốt hoặc không thể vận động khớp cần được đưa đến cơ sở y tế ngay.",
          "Nội soi khớp vai được chỉ định trong trường hợp nào?",
          "Khớp vai có tầm vận động lớn nhưng cũng dễ mất vững và tổn thương các gân, sụn viền xung quanh."
        ]
      },
      {
        "heading": "Rách gân chóp xoay",
        "paragraphs": [
          "Chóp xoay là nhóm gân giúp nâng, xoay và giữ ổn định khớp vai. Khi gân bị rách, người bệnh có thể đau vai, yếu tay, khó giơ tay lên cao hoặc đau tăng về đêm.",
          "Phẫu thuật có thể được cân nhắc nếu:",
          "Đau kéo dài dù đã điều trị bảo tồn.",
          "Vai yếu và mất chức năng rõ.",
          "Vết rách lớn.",
          "Rách do chấn thương cấp tính.",
          "Người bệnh cần sử dụng tay ở mức độ cao trong công việc hoặc thể thao.",
          "Không phải vết rách chóp xoay nào cũng cần mổ. Bác sĩ sẽ đánh giá kích thước vết rách, chất lượng gân, mức độ teo cơ và nhu cầu vận động trước khi đưa ra chỉ định."
        ]
      },
      {
        "heading": "Rách sụn viền vai",
        "paragraphs": [
          "Sụn viền là vòng sụn nằm quanh ổ chảo, giúp tăng độ sâu và ổn định của khớp vai. Tổn thương sụn viền có thể gây đau, cảm giác lục cục, kẹt khớp hoặc mất vững.",
          "Nội soi có thể được sử dụng để cắt lọc phần sụn không ổn định hoặc khâu cố định sụn viền vào xương tùy dạng tổn thương."
        ]
      },
      {
        "heading": "Trật vai tái diễn",
        "paragraphs": [
          "Người từng trật vai có thể bị rách sụn viền hoặc tổn thương các cấu trúc giữ vững khớp. Khi vai liên tục trật hoặc có cảm giác sắp trật trong sinh hoạt, bác sĩ có thể cân nhắc phẫu thuật nội soi để sửa chữa và làm vững khớp."
        ]
      },
      {
        "heading": "Hội chứng chèn ép và tổn thương gân",
        "paragraphs": [
          "Một số người bị đau khi giơ tay do gân và túi hoạt dịch bị kích thích trong không gian dưới mỏm cùng vai. Phần lớn trường hợp được điều trị bằng thuốc, điều chỉnh hoạt động và phục hồi chức năng.",
          "Phẫu thuật chỉ được cân nhắc ở những trường hợp được đánh giá phù hợp và không cải thiện sau điều trị bảo tồn."
        ]
      },
      {
        "heading": "Viêm dính bao khớp vai",
        "paragraphs": [
          "Viêm dính bao khớp, thường gọi là đông cứng khớp vai, chủ yếu được điều trị bằng thuốc, tập phục hồi và một số biện pháp không phẫu thuật khác.",
          "Trong trường hợp cứng vai nặng, kéo dài và không đáp ứng điều trị, bác sĩ có thể sử dụng nội soi để giải phóng phần bao khớp bị co rút.",
          "Khi nào có thể nội soi khớp háng?",
          "Nội soi khớp háng thường được cân nhắc sau khi người bệnh đã điều trị bảo tồn nhưng vẫn còn đau và hạn chế vận động.",
          "Các chỉ định thường gặp gồm:",
          "Hội chứng chèn ép xương đùi – ổ cối.",
          "Rách sụn viền ổ cối.",
          "Mảnh xương hoặc sụn tự do.",
          "Tổn thương sụn khu trú.",
          "Viêm màng hoạt dịch.",
          "Một số bất thường cấu trúc gây va chạm trong khớp.",
          "Trong hội chứng chèn ép xương đùi – ổ cối, xương phát triển bất thường có thể va chạm khi khớp háng vận động, làm tổn thương sụn viền và sụn khớp. Nội soi có thể được sử dụng để sửa sụn viền và tạo hình phần xương gây chèn ép ở người bệnh phù hợp.",
          "Nếu khớp háng đã thoái hóa nặng và mất sụn lan rộng, nội soi có thể không đem lại hiệu quả như mong đợi. Khi đó, bác sĩ cần xem xét những hướng điều trị khác."
        ]
      },
      {
        "heading": "Nội soi khớp cổ chân, khuỷu tay và cổ tay",
        "paragraphs": [
          "Tùy tổn thương, nội soi cũng có thể được thực hiện tại các khớp nhỏ hơn."
        ]
      },
      {
        "heading": "Khớp cổ chân",
        "paragraphs": [
          "Nội soi cổ chân có thể được sử dụng để xử lý:",
          "Mảnh xương hoặc sụn tự do.",
          "Tổn thương sụn xương sên.",
          "Gai xương gây chèn ép.",
          "Viêm màng hoạt dịch.",
          "Một số tổn thương sau bong gân hoặc chấn thương."
        ]
      },
      {
        "heading": "Khớp khuỷu tay",
        "paragraphs": [
          "Các trường hợp có thể được cân nhắc gồm:",
          "Dị vật hoặc mảnh xương tự do.",
          "Cứng khớp do mô sẹo hoặc gai xương.",
          "Viêm màng hoạt dịch.",
          "Một số tổn thương gân và sụn.",
          "Chèn ép thần kinh trong những trường hợp được lựa chọn."
        ]
      },
      {
        "heading": "Khớp cổ tay",
        "paragraphs": [
          "Nội soi cổ tay có thể hỗ trợ chẩn đoán và điều trị tổn thương dây chằng, phức hợp sụn sợi tam giác, viêm màng hoạt dịch hoặc một số gãy xương liên quan đến mặt khớp.",
          "Do không gian trong các khớp này nhỏ và nằm gần nhiều mạch máu, dây thần kinh, kỹ thuật phẫu thuật đòi hỏi đánh giá chỉ định cẩn thận.",
          "Những trường hợp nào không nên mặc định nội soi khớp?"
        ]
      },
      {
        "heading": "Đau khớp nhưng chưa xác định rõ nguyên nhân",
        "paragraphs": [
          "Nội soi không nên được xem là bước kiểm tra đầu tiên cho mọi trường hợp đau khớp. Người bệnh cần được hỏi bệnh, khám lâm sàng và thực hiện chẩn đoán hình ảnh phù hợp trước.",
          "Nhiều tình trạng có thể được chẩn đoán bằng X-quang, siêu âm hoặc MRI mà không cần đưa dụng cụ vào khớp."
        ]
      },
      {
        "heading": "Thoái hóa khớp gối đơn thuần",
        "paragraphs": [
          "Ở người bị thoái hóa khớp gối, nội soi rửa khớp hoặc cắt lọc thường quy không được khuyến cáo nếu chẩn đoán chính chỉ là thoái hóa. Phương pháp này không giải quyết được nguyên nhân mất sụn lan rộng và có thể không mang lại lợi ích lâu dài tương xứng với rủi ro phẫu thuật.",
          "Tuy nhiên, người bị thoái hóa nhẹ hoặc vừa kèm một tổn thương cơ học cụ thể, chẳng hạn mảnh sụn tự do hoặc một số dạng rách sụn chêm, cần được bác sĩ đánh giá riêng."
        ]
      },
      {
        "heading": "Khớp đã hư hỏng nghiêm trọng",
        "paragraphs": [
          "Khi sụn khớp bị mất trên diện rộng, khớp biến dạng nặng hoặc hai mặt xương cọ xát trực tiếp, nội soi thường không thể phục hồi toàn bộ bề mặt khớp.",
          "Trong trường hợp này, người bệnh có thể cần điều trị bảo tồn lâu dài, phẫu thuật chỉnh trục hoặc thay khớp tùy tuổi, triệu chứng và mức độ tổn thương."
        ]
      },
      {
        "heading": "Tổn thương cần mổ mở",
        "paragraphs": [
          "Một số gãy xương, tổn thương nhiều cấu trúc, biến dạng lớn hoặc trường hợp cần thay khớp không thể giải quyết hoàn toàn bằng nội soi.",
          "Đôi khi bác sĩ có thể bắt đầu bằng nội soi nhưng phải kết hợp đường mổ mở để sửa chữa tổn thương một cách an toàn.",
          "Người bệnh được đánh giá như thế nào trước phẫu thuật?",
          "Trước khi đưa ra chỉ định, bác sĩ thường đánh giá:",
          "Vị trí, thời gian và tính chất cơn đau.",
          "Khả năng vận động và mức độ ảnh hưởng đến sinh hoạt.",
          "Cảm giác kẹt, lỏng hoặc mất vững khớp.",
          "Tiền sử chấn thương và phẫu thuật.",
          "Các phương pháp điều trị đã thực hiện.",
          "Bệnh tim mạch, hô hấp, tiểu đường hoặc rối loạn đông máu.",
          "Mục tiêu vận động và công việc của người bệnh.",
          "Các kiểm tra có thể gồm:",
          "X-quang để đánh giá xương, trục khớp và mức độ thoái hóa.",
          "Siêu âm đối với một số tổn thương gân và phần mềm.",
          "MRI để khảo sát sụn, dây chằng, gân và cấu trúc bên trong khớp.",
          "CT khi cần đánh giá chi tiết cấu trúc xương.",
          "Xét nghiệm máu, điện tim hoặc kiểm tra tiền mê.",
          "Quyết định phẫu thuật không nên chỉ dựa vào một dòng kết luận trên phim MRI. Hình ảnh cần phù hợp với triệu chứng, khám lâm sàng và nhu cầu vận động thực tế.",
          "Phẫu thuật nội soi khớp có rủi ro không?",
          "Nội soi khớp ít xâm lấn hơn nhiều loại mổ mở nhưng vẫn có những rủi ro nhất định, gồm:",
          "Nhiễm trùng.",
          "Chảy máu hoặc tụ máu.",
          "Sưng đau kéo dài.",
          "Hình thành cục máu đông trong tĩnh mạch.",
          "Tổn thương mạch máu hoặc dây thần kinh.",
          "Cứng khớp.",
          "Phản ứng với thuốc gây mê hoặc gây tê.",
          "Tổn thương không lành như mong đợi.",
          "Đau hoặc mất vững vẫn còn sau mổ.",
          "Cần thực hiện thêm phẫu thuật.",
          "Các biến chứng nghiêm trọng nhìn chung không phổ biến, nhưng nguy cơ thay đổi tùy vị trí phẫu thuật, tình trạng sức khỏe và độ phức tạp của tổn thương.",
          "Người hút thuốc, người mắc tiểu đường chưa kiểm soát tốt, béo phì hoặc đang có nhiễm trùng có thể cần được tối ưu sức khỏe trước mổ.",
          "Sau nội soi khớp bao lâu có thể vận động?",
          "Thời gian hồi phục rất khác nhau giữa các loại phẫu thuật.",
          "Sau một thủ thuật cắt lọc nhỏ, người bệnh có thể vận động và trở lại một số hoạt động sớm. Ngược lại, sau khâu sụn chêm, tái tạo dây chằng hoặc sửa chữa gân, mô cần thời gian lành nên người bệnh có thể phải hạn chế chịu lực hoặc bất động khớp trong một giai đoạn.",
          "Sau mổ, người bệnh có thể được hướng dẫn:",
          "Dùng nạng, đai hoặc túi treo tay.",
          "Chườm lạnh và kê cao chi.",
          "Chăm sóc vết mổ.",
          "Sử dụng thuốc đúng đơn.",
          "Tập co cơ và vận động theo từng giai đoạn.",
          "Tham gia vật lý trị liệu.",
          "Tái khám đúng lịch.",
          "Dù đường rạch nhỏ, tổn thương được sửa chữa bên trong có thể khá lớn. Một ca sửa gân hoặc tái tạo dây chằng vẫn có thể cần nhiều tháng để phục hồi đầy đủ.",
          "Người bệnh không nên thấy vết mổ đã khô rồi tự tăng cường độ tập hoặc quay lại thể thao sớm. Tải trọng quá mức có thể ảnh hưởng đến mô đang lành.",
          "Dấu hiệu nào cần liên hệ bác sĩ sau phẫu thuật?",
          "Người bệnh nên đi khám sớm nếu xuất hiện:",
          "Sốt hoặc rét run.",
          "Vết mổ đỏ, nóng, chảy dịch hoặc có mùi.",
          "Đau và sưng tăng nhanh.",
          "Chảy máu không kiểm soát.",
          "Tê, yếu hoặc mất cảm giác ở chi.",
          "Bàn tay hoặc bàn chân lạnh, tím tái.",
          "Đau và sưng bắp chân.",
          "Khó thở hoặc đau ngực.",
          "Không thể vận động theo mức đã được bác sĩ hướng dẫn.",
          "Khó thở đột ngột, đau ngực hoặc sưng đau bắp chân có thể liên quan đến huyết khối và cần được kiểm tra ngay."
        ]
      },
      {
        "heading": "Phẫu thuật nội soi khớp tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Người bị đau khớp kéo dài, khớp kẹt, mất vững hoặc hạn chế vận động có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám và đánh giá nguyên nhân.",
          "Tùy từng trường hợp, người bệnh có thể được chỉ định X-quang, siêu âm, MRI, xét nghiệm hoặc các phương pháp kiểm tra cần thiết. Nếu tổn thương phù hợp với phẫu thuật, bác sĩ sẽ trao đổi về:",
          "Mục tiêu của cuộc mổ.",
          "Kỹ thuật dự kiến thực hiện.",
          "Khả năng bảo tồn gân, dây chằng hoặc sụn.",
          "Phương pháp gây mê hoặc gây tê.",
          "Những rủi ro có thể xảy ra.",
          "Thời gian hạn chế vận động.",
          "Kế hoạch phục hồi chức năng.",
          "Thời điểm dự kiến trở lại công việc và thể thao.",
          "Việc tư vấn kỹ trước phẫu thuật giúp người bệnh có kỳ vọng thực tế. Nội soi khớp có thể mang lại lợi ích rõ rệt khi được thực hiện đúng chỉ định, nhưng không phải phương pháp “làm sạch khớp” áp dụng cho tất cả các tình trạng đau hoặc thoái hóa."
        ]
      },
      {
        "heading": "Chỉ định đúng quyết định hiệu quả của phẫu thuật",
        "paragraphs": [
          "Phẫu thuật nội soi khớp có ưu điểm là đường rạch nhỏ, khả năng quan sát trực tiếp và hạn chế tác động lên mô xung quanh. Kỹ thuật này có thể được sử dụng để điều trị nhiều tổn thương của sụn, gân và dây chằng tại khớp gối, vai, háng cùng một số khớp khác.",
          "Tuy nhiên, kết quả điều trị phụ thuộc nhiều vào việc lựa chọn đúng người bệnh. Không phải cứ đau khớp lâu ngày, có thoái hóa hoặc thấy bất thường trên MRI là cần phẫu thuật.",
          "Khi đau khớp kéo dài, khớp thường xuyên bị khóa, mất vững hoặc hạn chế vận động, người bệnh nên đi khám chuyên khoa. Bác sĩ sẽ đánh giá tổn thương, cân nhắc giữa điều trị bảo tồn và phẫu thuật, đồng thời xây dựng kế hoạch phục hồi phù hợp với nhu cầu của từng người.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "loang-xuong-o-nguoi-trung-nien-vi-sao-can-tam-soat-som": {
    "sourceFile": "40. Loãng xương ở người trung niên vì sao cần tầm soát sớm.docx",
    "title": "Loãng xương ở người trung niên: vì sao cần tầm soát sớm?",
    "excerpt": "Nhiều người chỉ nghĩ đến loãng xương khi đã lớn tuổi, đau lưng hoặc chẳng may bị gãy xương. Tuy nhiên, quá trình mất xương có thể bắt đầu từ nhiều năm trước mà cơ thể gần như không phát ra tín hiệu rõ ràng.",
    "intro": [
      "Nhiều người chỉ nghĩ đến loãng xương khi đã lớn tuổi, đau lưng hoặc chẳng may bị gãy xương. Tuy nhiên, quá trình mất xương có thể bắt đầu từ nhiều năm trước mà cơ thể gần như không phát ra tín hiệu rõ ràng.",
      "Tuổi trung niên, đặc biệt giai đoạn phụ nữ bước vào mãn kinh, là thời điểm quan trọng để đánh giá sức khỏe xương. Tầm soát đúng đối tượng có thể giúp phát hiện mật độ xương thấp, nhận biết nguy cơ gãy xương và chủ động điều chỉnh trước khi xảy ra biến chứng.",
      "Loãng xương là gì?",
      "Xương không phải là một cấu trúc “đứng yên”. Trong suốt cuộc đời, mô xương cũ liên tục được loại bỏ và thay thế bằng mô xương mới.",
      "Loãng xương xảy ra khi mật độ và khối lượng xương suy giảm hoặc cấu trúc bên trong của xương bị thay đổi. Khi đó, xương trở nên yếu hơn và dễ gãy hơn, đôi khi chỉ sau một cú ngã nhẹ hoặc một tác động không quá mạnh.",
      "Các vị trí gãy xương thường được quan tâm gồm:",
      "Cột sống.",
      "Cổ xương đùi.",
      "Cổ tay.",
      "Xương cánh tay.",
      "Xương chậu.",
      "Gãy xương do loãng xương không chỉ gây đau. Người bệnh còn có thể giảm khả năng vận động, mất tính độc lập trong sinh hoạt và tăng nguy cơ gặp thêm những lần gãy xương khác.",
      "Vì sao loãng xương thường bị phát hiện muộn?",
      "Loãng xương thường được gọi là một bệnh “âm thầm” vì người bệnh có thể không cảm thấy đau hoặc khó chịu trong giai đoạn mật độ xương đang giảm.",
      "Nhiều trường hợp chỉ được phát hiện sau khi:",
      "Gãy xương do một cú ngã nhẹ.",
      "Đau lưng đột ngột do xẹp hoặc lún đốt sống.",
      "Chiều cao giảm dần.",
      "Lưng còng hơn trước.",
      "Chụp phim vì một lý do khác và tình cờ phát hiện tổn thương xương.",
      "Đây là điểm khác biệt quan trọng giữa loãng xương và nhiều bệnh cơ xương khớp khác. Đau khớp, đau mỏi lưng hoặc tiếng kêu ở khớp không đủ để khẳng định một người bị loãng xương. Ngược lại, không đau cũng không có nghĩa xương vẫn chắc khỏe.",
      "Vì sao tuổi trung niên là thời điểm cần quan tâm đến sức khỏe xương?",
      "Tuổi trung niên có thể được xem là “khoảng thời gian chuẩn bị” cho sức khỏe xương khi về già. Những thay đổi diễn ra trong giai đoạn này có thể ảnh hưởng đáng kể đến nguy cơ loãng xương và gãy xương sau đó."
    ],
    "sections": [
      {
        "heading": "Mật độ xương bắt đầu suy giảm theo tuổi",
        "paragraphs": [
          "Khối lượng xương thường đạt mức cao nhất khi còn trẻ. Sau đó, quá trình tạo xương mới có thể không theo kịp tốc độ mất xương. Càng lớn tuổi, nguy cơ mật độ xương thấp và gãy xương càng tăng.",
          "Nếu một người bước vào tuổi trung niên với khối lượng xương không cao, ít vận động, dinh dưỡng thiếu cân đối hoặc có bệnh nền ảnh hưởng đến xương, nguy cơ loãng xương về sau có thể cao hơn."
        ]
      },
      {
        "heading": "Phụ nữ mất xương nhanh hơn quanh thời kỳ mãn kinh",
        "paragraphs": [
          "Estrogen có vai trò quan trọng đối với quá trình duy trì xương. Khi phụ nữ bước vào giai đoạn tiền mãn kinh và mãn kinh, nồng độ hormone này suy giảm, làm tốc độ mất xương có thể tăng lên.",
          "Theo Viện Quốc gia về Viêm khớp, Cơ xương và Bệnh da Hoa Kỳ, ở nhiều phụ nữ, quá trình loãng xương có thể bắt đầu phát triển từ khoảng một đến hai năm trước mãn kinh.",
          "Phụ nữ mãn kinh sớm, phẫu thuật cắt buồng trứng hoặc phải điều trị làm suy giảm hormone cần được đánh giá nguy cơ xương sớm hơn."
        ]
      },
      {
        "heading": "Nam giới cũng có thể bị loãng xương",
        "paragraphs": [
          "Loãng xương thường được nhắc đến nhiều ở phụ nữ nhưng nam giới không nằm ngoài nguy cơ. Nam giới thường có khối lượng xương ban đầu cao hơn và mất xương chậm hơn, vì vậy bệnh có xu hướng xuất hiện muộn hơn. Tuy nhiên, bệnh vẫn có thể xảy ra sớm khi có yếu tố nguy cơ.",
          "Nam giới trung niên cần lưu ý sức khỏe xương nếu từng gãy xương sau chấn thương nhẹ, thiếu hormone sinh dục, dùng corticosteroid kéo dài, điều trị ung thư tuyến tiền liệt hoặc mắc một số bệnh mạn tính.",
          "Ai ở tuổi trung niên có nguy cơ loãng xương cao hơn?",
          "Không phải mọi người trung niên đều cần đo mật độ xương ngay. Việc tầm soát thường được quyết định dựa trên tuổi, giới tính, tình trạng mãn kinh và các yếu tố nguy cơ.",
          "Những trường hợp nên được bác sĩ đánh giá nguy cơ gồm:",
          "Phụ nữ đã mãn kinh.",
          "Phụ nữ mãn kinh sớm.",
          "Người từng gãy xương sau một cú ngã nhẹ hoặc tác động nhỏ.",
          "Có cha, mẹ từng gãy cổ xương đùi hoặc mắc loãng xương.",
          "Cơ thể nhỏ, nhẹ cân hoặc giảm cân quá mức.",
          "Ít vận động trong thời gian dài.",
          "Hút thuốc.",
          "Uống nhiều rượu bia.",
          "Chế độ ăn thiếu canxi, vitamin D hoặc protein.",
          "Thường xuyên ăn kiêng quá mức.",
          "Mắc chứng rối loạn ăn uống.",
          "Có bệnh gây giảm hấp thu dinh dưỡng.",
          "Thường xuyên bị ngã.",
          "Các yếu tố như ít vận động, nhẹ cân, hút thuốc, uống nhiều rượu, thiếu dinh dưỡng, thiếu canxi hoặc vitamin D và tình trạng kém hấp thu đều có thể làm tăng nguy cơ xương yếu và gãy xương."
        ]
      },
      {
        "heading": "Những bệnh lý có thể ảnh hưởng đến mật độ xương",
        "paragraphs": [
          "Nguy cơ loãng xương có thể tăng ở người mắc:",
          "Viêm khớp dạng thấp và một số bệnh tự miễn.",
          "Cường giáp hoặc rối loạn tuyến giáp.",
          "Cường tuyến cận giáp.",
          "Đái tháo đường.",
          "Bệnh celiac.",
          "Bệnh viêm ruột.",
          "Bệnh gan hoặc bệnh thận mạn tính.",
          "Bệnh gây giảm hấp thu dinh dưỡng.",
          "Một số bệnh lý huyết học.",
          "Tình trạng suy giảm hormone sinh dục.",
          "Những bệnh này không đồng nghĩa người bệnh chắc chắn bị loãng xương, nhưng có thể là lý do để bác sĩ cân nhắc đánh giá sức khỏe xương sớm hơn.",
          "Thuốc nào có thể làm tăng nguy cơ mất xương?",
          "Một số loại thuốc có thể ảnh hưởng đến quá trình tạo và hủy xương, đặc biệt khi dùng liều cao hoặc trong thời gian dài. Nhóm thường được quan tâm là corticosteroid, đôi khi được gọi là thuốc corticoid.",
          "Ngoài ra, nguy cơ còn có thể liên quan đến:",
          "Một số thuốc điều trị ung thư vú hoặc ung thư tuyến tiền liệt.",
          "Một số thuốc chống động kinh.",
          "Một số thuốc ảnh hưởng đến hormone.",
          "Một số phương pháp điều trị bệnh mạn tính khác.",
          "Người bệnh không được tự ý ngừng thuốc vì lo sợ loãng xương. Bác sĩ cần cân bằng giữa lợi ích điều trị bệnh chính và nguy cơ đối với xương, đồng thời cân nhắc tầm soát hoặc biện pháp bảo vệ xương khi cần thiết.",
          "Người trung niên khi nào nên tầm soát loãng xương?",
          "Các khuyến nghị có thể khác nhau giữa từng quốc gia và tổ chức chuyên môn. Vì vậy, tuổi chỉ là một phần của quyết định; nguy cơ gãy xương của từng người cũng rất quan trọng.",
          "Theo khuyến nghị năm 2025 của Lực lượng Đặc nhiệm Dịch vụ Dự phòng Hoa Kỳ:",
          "Phụ nữ từ 65 tuổi trở lên nên được tầm soát loãng xương.",
          "Phụ nữ đã mãn kinh nhưng dưới 65 tuổi nên được tầm soát nếu có yếu tố nguy cơ và được công cụ đánh giá xác định có nguy cơ gãy xương tăng.",
          "Với nam giới, hiện chưa có đủ bằng chứng để đưa ra một khuyến nghị tầm soát đại trà áp dụng cho tất cả mọi người.",
          "Một số tổ chức sức khỏe xương khác khuyến nghị cân nhắc đo mật độ xương ở nam giới từ 70 tuổi, người từng gãy xương sau tuổi 50 hoặc người có yếu tố nguy cơ đáng kể.",
          "Đối với người trung niên, nên trao đổi với bác sĩ về tầm soát sớm nếu:",
          "Đã mãn kinh và có thêm yếu tố nguy cơ.",
          "Mãn kinh trước tuổi thông thường.",
          "Từng gãy xương sau một chấn thương nhẹ.",
          "Đang hoặc từng dùng corticosteroid kéo dài.",
          "Có bệnh nền làm tăng nguy cơ mất xương.",
          "Giảm chiều cao hoặc lưng còng dần.",
          "Đau lưng mới xuất hiện mà không rõ nguyên nhân.",
          "Có tiền sử gia đình gãy cổ xương đùi.",
          "Đang điều trị ung thư có ảnh hưởng đến hormone.",
          "Bị suy dinh dưỡng, nhẹ cân hoặc kém hấp thu kéo dài.",
          "Tầm soát loãng xương được thực hiện như thế nào?",
          "Tầm soát không chỉ là chụp một phim rồi kết luận. Bác sĩ thường kết hợp đánh giá yếu tố nguy cơ, tiền sử gãy xương, thuốc đang sử dụng và đo mật độ xương khi có chỉ định."
        ]
      },
      {
        "heading": "Đánh giá nguy cơ gãy xương",
        "paragraphs": [
          "Bác sĩ có thể hỏi về:",
          "Tuổi và giới tính.",
          "Chiều cao, cân nặng.",
          "Tình trạng mãn kinh.",
          "Tiền sử gãy xương.",
          "Tiền sử gãy xương trong gia đình.",
          "Thói quen hút thuốc, uống rượu.",
          "Bệnh nền.",
          "Việc sử dụng corticosteroid.",
          "Khả năng giữ thăng bằng và nguy cơ té ngã.",
          "Một số công cụ như FRAX có thể kết hợp các yếu tố lâm sàng, có hoặc không có kết quả mật độ xương, để ước tính nguy cơ gãy cổ xương đùi và các loại gãy xương lớn trong vòng 10 năm. Tuy nhiên, kết quả chỉ là công cụ hỗ trợ và cần được bác sĩ diễn giải trong hoàn cảnh cụ thể."
        ]
      },
      {
        "heading": "Đo mật độ xương bằng DXA",
        "paragraphs": [
          "DXA, còn được gọi là DEXA, là phương pháp sử dụng tia X năng lượng kép để đo mật độ khoáng của xương. Vị trí thường được kiểm tra là cột sống thắt lưng và vùng hông.",
          "Đây là phương pháp được sử dụng phổ biến và được xem là tiêu chuẩn để đánh giá mật độ xương, chẩn đoán loãng xương cũng như ước tính nguy cơ gãy xương.",
          "Quá trình đo thường:",
          "Không cần gây mê.",
          "Không tiêm thuốc.",
          "Không gây đau.",
          "Sử dụng lượng tia X thấp.",
          "Được thực hiện trong khoảng 10–30 phút, tùy thiết bị và vùng khảo sát.",
          "Người bệnh nằm trên bàn đo và giữ yên trong lúc máy quét qua vùng cần kiểm tra. Phụ nữ đang mang thai hoặc nghi ngờ mang thai cần thông báo trước với nhân viên y tế.",
          "Kết quả đo mật độ xương có ý nghĩa gì?",
          "Ở phụ nữ sau mãn kinh và nam giới từ 50 tuổi trở lên, kết quả thường được thể hiện bằng chỉ số T-score. Chỉ số này so sánh mật độ xương của người được đo với mật độ xương trung bình của một người trưởng thành trẻ, khỏe mạnh.",
          "Thông thường:",
          "T-score từ -1 trở lên: mật độ xương trong giới hạn bình thường.",
          "T-score từ dưới -1 đến trên -2,5: mật độ xương thấp, thường được gọi là thiếu xương.",
          "T-score từ -2,5 trở xuống: có thể phù hợp với chẩn đoán loãng xương.",
          "Nguy cơ gãy xương không chỉ phụ thuộc vào T-score. Tuổi, tiền sử gãy xương, nguy cơ té ngã, thuốc đang dùng và bệnh nền cũng cần được xem xét. Một người có mật độ xương chưa đến mức loãng xương vẫn có thể có nguy cơ gãy xương cao nếu đi kèm nhiều yếu tố bất lợi.",
          "Ở phụ nữ chưa mãn kinh, nam giới trẻ và một số nhóm đặc biệt, bác sĩ có thể chú ý nhiều hơn đến Z-score, tức kết quả so với những người cùng tuổi và cùng giới.",
          "Có cần làm thêm xét nghiệm sau khi đo mật độ xương không?",
          "Đo mật độ xương giúp đánh giá mức độ chắc khỏe của xương nhưng không phải lúc nào cũng giải thích được nguyên nhân mất xương.",
          "Tùy trường hợp, bác sĩ có thể chỉ định:",
          "Xét nghiệm canxi.",
          "Xét nghiệm vitamin D.",
          "Đánh giá chức năng tuyến giáp.",
          "Xét nghiệm chức năng gan, thận.",
          "Xét nghiệm hormone.",
          "Công thức máu.",
          "Các xét nghiệm tìm bệnh gây giảm hấp thu hoặc rối loạn chuyển hóa xương.",
          "Chụp X-quang hoặc đánh giá đốt sống nếu nghi ngờ xẹp đốt sống.",
          "Việc tìm nguyên nhân đặc biệt quan trọng ở người trung niên, người mất xương nhanh, nam giới hoặc người bị loãng xương sớm hơn dự kiến.",
          "Phát hiện mật độ xương thấp sớm mang lại lợi ích gì?",
          "Tầm soát sớm không nhằm khiến người bệnh lo lắng hay phải dùng thuốc ngay lập tức. Lợi ích quan trọng nhất là xác định nguy cơ trước khi xảy ra gãy xương.",
          "Khi phát hiện sớm, bác sĩ có thể:",
          "Tìm nguyên nhân gây mất xương.",
          "Rà soát các thuốc đang sử dụng.",
          "Hướng dẫn chế độ ăn phù hợp.",
          "Xây dựng chương trình vận động an toàn.",
          "Điều chỉnh các yếu tố làm tăng nguy cơ té ngã.",
          "Theo dõi mật độ xương theo mức độ nguy cơ.",
          "Cân nhắc thuốc điều trị khi lợi ích dự phòng gãy xương lớn hơn nguy cơ.",
          "Không phải người có thiếu xương đều cần dùng thuốc. Quyết định điều trị phụ thuộc vào tổng nguy cơ gãy xương, tiền sử gãy xương, kết quả DXA và tình trạng sức khỏe của từng người.",
          "Người trung niên có thể làm gì để bảo vệ xương?"
        ]
      },
      {
        "heading": "Duy trì vận động chịu trọng lượng",
        "paragraphs": [
          "Các bài tập chịu trọng lượng khiến cơ thể phải nâng đỡ trọng lượng của chính mình, qua đó tạo kích thích lên xương. Một số lựa chọn gồm:",
          "Đi bộ nhanh.",
          "Leo cầu thang.",
          "Khiêu vũ.",
          "Chạy nhẹ nếu cơ xương khớp cho phép.",
          "Các môn thể thao dùng vợt.",
          "Một số bài bật nhảy phù hợp.",
          "Tập kháng lực với tạ, dây đàn hồi hoặc trọng lượng cơ thể giúp tăng sức mạnh cơ và tạo lực lên xương. Bài tập thăng bằng cũng có vai trò quan trọng trong việc hạn chế nguy cơ té ngã.",
          "Người đã có loãng xương, từng gãy xương hoặc đau cột sống nên được hướng dẫn bài tập phù hợp. Không nên tự thực hiện các động tác gập, xoắn mạnh cột sống hoặc tập mức tạ quá cao khi chưa được đánh giá."
        ]
      },
      {
        "heading": "Bổ sung canxi và vitamin D hợp lý",
        "paragraphs": [
          "Canxi là thành phần quan trọng của xương, trong khi vitamin D hỗ trợ cơ thể hấp thu canxi. Chế độ ăn có thể ưu tiên:",
          "Sữa và các sản phẩm từ sữa.",
          "Cá nhỏ ăn được cả xương.",
          "Cá béo.",
          "Đậu phụ có bổ sung canxi.",
          "Rau lá xanh đậm.",
          "Trứng và thực phẩm được tăng cường vitamin D.",
          "Chế độ ăn đủ protein, rau và trái cây.",
          "Nhu cầu canxi và vitamin D thay đổi theo tuổi, giới tính, tình trạng mãn kinh, chế độ ăn và bệnh nền. Người bệnh nên ưu tiên thực phẩm và chỉ dùng viên bổ sung khi cần thiết, theo tư vấn của nhân viên y tế.",
          "Không nên tự uống liều cao canxi hoặc vitamin D với suy nghĩ “càng nhiều càng chắc xương”. Sử dụng không phù hợp có thể gây tác dụng không mong muốn và không thay thế được vận động, dinh dưỡng cân bằng hoặc điều trị loãng xương khi đã có chỉ định."
        ]
      },
      {
        "heading": "Không hút thuốc và hạn chế rượu bia",
        "paragraphs": [
          "Hút thuốc và uống nhiều rượu bia có liên quan đến mất xương và nguy cơ gãy xương. Bỏ thuốc lá và kiểm soát lượng rượu bia là một phần quan trọng trong kế hoạch bảo vệ sức khỏe xương."
        ]
      },
      {
        "heading": "Duy trì cân nặng phù hợp",
        "paragraphs": [
          "Thiếu cân và giảm cân quá nhanh có thể ảnh hưởng đến mật độ xương. Ngược lại, cân nặng quá cao có thể làm tăng nguy cơ té ngã, giảm khả năng vận động và gây áp lực lên khớp.",
          "Mục tiêu không phải càng gầy càng tốt mà là duy trì cân nặng phù hợp, ăn đủ chất và giữ khối cơ khỏe mạnh."
        ]
      },
      {
        "heading": "Phòng ngừa té ngã từ sớm",
        "paragraphs": [
          "Phòng ngừa gãy xương không chỉ tập trung vào mật độ xương. Khả năng thăng bằng, thị lực, sức mạnh cơ và môi trường sống đều ảnh hưởng đến nguy cơ té ngã.",
          "Người trung niên nên:",
          "Kiểm tra thị lực định kỳ.",
          "Điều trị chóng mặt hoặc rối loạn thăng bằng.",
          "Mang giày vừa chân, chống trượt.",
          "Tập sức mạnh chân và khả năng giữ thăng bằng.",
          "Giữ lối đi trong nhà thông thoáng.",
          "Bảo đảm cầu thang và nhà vệ sinh đủ ánh sáng.",
          "Rà soát những thuốc có thể gây buồn ngủ hoặc chóng mặt với bác sĩ.",
          "Khi nào cần đi khám sớm?",
          "Người trung niên nên khám Cơ xương khớp hoặc Nội tiết nếu:",
          "Từng gãy xương sau một cú ngã nhẹ.",
          "Đau lưng đột ngột hoặc kéo dài không rõ nguyên nhân.",
          "Chiều cao giảm hoặc lưng còng dần.",
          "Đã mãn kinh và có nhiều yếu tố nguy cơ.",
          "Mãn kinh sớm.",
          "Đang dùng corticosteroid kéo dài.",
          "Có bệnh tuyến giáp, bệnh tự miễn, bệnh gan, thận hoặc bệnh gây kém hấp thu.",
          "Có người thân từng gãy cổ xương đùi.",
          "Đang điều trị ung thư ảnh hưởng đến hormone.",
          "Kết quả khám sức khỏe gợi ý mật độ xương thấp.",
          "Nếu đau dữ dội sau một cú ngã, không thể đứng hoặc cử động, chân tay biến dạng hay đau cột sống đột ngột, người bệnh cần đến cơ sở y tế sớm để kiểm tra gãy xương."
        ]
      },
      {
        "heading": "Tầm soát loãng xương tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Người trung niên có yếu tố nguy cơ loãng xương có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám và đánh giá sức khỏe xương.",
          "Dựa trên tuổi, giới tính, tình trạng mãn kinh, tiền sử gãy xương, bệnh nền và thuốc đang sử dụng, bác sĩ sẽ tư vấn việc đo mật độ xương hoặc thực hiện các xét nghiệm cần thiết. Nếu phát hiện thiếu xương hay loãng xương, người bệnh sẽ được hướng dẫn dinh dưỡng, vận động, phòng ngừa té ngã và lựa chọn phương pháp điều trị phù hợp.",
          "Việc phối hợp giữa chuyên khoa Cơ xương khớp, Nội tiết, Chẩn đoán hình ảnh, Dinh dưỡng và Phục hồi chức năng giúp chăm sóc người bệnh toàn diện hơn, thay vì chỉ nhìn vào một con số trên kết quả đo mật độ xương."
        ]
      },
      {
        "heading": "Đừng chờ đến khi gãy xương mới quan tâm đến mật độ xương",
        "paragraphs": [
          "Loãng xương có thể tiến triển trong nhiều năm mà không gây triệu chứng rõ ràng. Vì vậy, chờ đến khi đau hoặc gãy xương mới kiểm tra có thể khiến người bệnh bỏ lỡ giai đoạn dự phòng quan trọng.",
          "Không phải mọi người trung niên đều cần đo mật độ xương ngay. Tuy nhiên, phụ nữ đã mãn kinh, người từng gãy xương do chấn thương nhẹ, người sử dụng corticosteroid kéo dài hoặc có bệnh nền ảnh hưởng đến xương nên được đánh giá nguy cơ sớm.",
          "Chủ động tầm soát đúng thời điểm, tập luyện phù hợp và duy trì chế độ dinh dưỡng cân bằng là những bước thiết thực để giữ xương chắc khỏe trong những năm tiếp theo.",
          "Nội dung bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "dai-thao-duong-type-2-dau-hieu-som-va-xet-nghiem-can-lam": {
    "sourceFile": "41.Đái tháo đường type 2 dấu hiệu sớm và xét nghiệm cần làm.docx",
    "title": "Đái tháo đường type 2: Dấu hiệu sớm và những xét nghiệm cần làm",
    "excerpt": "Đái tháo đường type 2 thường không xuất hiện một cách ồn ào. Bệnh có thể phát triển từ từ trong nhiều năm, trong khi người bệnh vẫn ăn uống, làm việc và sinh hoạt gần như bình thường. Một số người chỉ phát hiện đường huyết cao trong lần khám sức khỏe định kỳ hoặc khi đã xuất hiện vấn đề về mắt, thận, thần kinh hay tim mạch.",
    "intro": [
      "Đái tháo đường type 2 thường không xuất hiện một cách ồn ào. Bệnh có thể phát triển từ từ trong nhiều năm, trong khi người bệnh vẫn ăn uống, làm việc và sinh hoạt gần như bình thường. Một số người chỉ phát hiện đường huyết cao trong lần khám sức khỏe định kỳ hoặc khi đã xuất hiện vấn đề về mắt, thận, thần kinh hay tim mạch.",
      "Nhận biết các dấu hiệu sớm và chủ động xét nghiệm khi thuộc nhóm nguy cơ giúp phát hiện bệnh ở giai đoạn sớm hơn. Đây là thời điểm người bệnh có nhiều cơ hội điều chỉnh lối sống, kiểm soát đường huyết và hạn chế các biến chứng lâu dài.",
      "Đái tháo đường type 2 là gì?",
      "Đường glucose là một trong những nguồn năng lượng chính của cơ thể. Sau khi chúng ta ăn, glucose được hấp thu vào máu. Hormone insulin do tuyến tụy sản xuất có nhiệm vụ giúp glucose đi từ máu vào tế bào để được sử dụng làm năng lượng.",
      "Ở người mắc đái tháo đường type 2, cơ thể không sử dụng insulin hiệu quả, tình trạng này được gọi là đề kháng insulin. Theo thời gian, tuyến tụy có thể không sản xuất đủ insulin để duy trì đường huyết trong giới hạn phù hợp. Khi đó, glucose tích tụ trong máu và gây tăng đường huyết kéo dài.",
      "Nói một cách dễ hiểu, cơ thể vẫn có “chìa khóa” insulin nhưng ổ khóa trên tế bào không còn phản hồi tốt như trước. Tuyến tụy phải làm việc nhiều hơn để bù lại. Khi khả năng bù trừ suy giảm, đường huyết bắt đầu tăng rõ và bệnh đái tháo đường được hình thành.",
      "Đái tháo đường type 2 là dạng đái tháo đường phổ biến nhất. Bệnh thường gặp ở người trưởng thành nhưng hiện cũng có thể xuất hiện ở người trẻ, thanh thiếu niên và trẻ em, nhất là khi có thừa cân, ít vận động hoặc tiền sử gia đình.",
      "Vì sao đái tháo đường type 2 thường được phát hiện muộn?",
      "Đường huyết có thể tăng từ từ nên cơ thể dần thích nghi với sự thay đổi. Các biểu hiện ban đầu thường nhẹ, không đặc hiệu và dễ bị cho là do thiếu ngủ, tuổi tác, áp lực công việc hoặc thời tiết.",
      "Nhiều người mắc đái tháo đường type 2 hoàn toàn không nhận thấy triệu chứng. Một số trường hợp chỉ được phát hiện khi kiểm tra vì thị lực giảm, vết thương lâu lành, tê chân tay hoặc xuất hiện bệnh lý tim mạch.",
      "Vì vậy, không nên chờ đến khi có biểu hiện rõ ràng mới kiểm tra đường huyết. Với người thuộc nhóm nguy cơ, xét nghiệm định kỳ có giá trị hơn việc chỉ quan sát triệu chứng."
    ],
    "sections": [
      {
        "heading": "Dấu hiệu sớm của đái tháo đường type 2",
        "paragraphs": [
          "Không phải người bệnh nào cũng có đầy đủ các dấu hiệu dưới đây. Một triệu chứng riêng lẻ cũng chưa đủ để kết luận mắc đái tháo đường vì có thể liên quan đến nhiều nguyên nhân khác."
        ]
      },
      {
        "heading": "Đi tiểu nhiều hơn bình thường",
        "paragraphs": [
          "Khi lượng glucose trong máu tăng cao, thận phải làm việc nhiều hơn để đào thải đường qua nước tiểu. Glucose kéo theo nước khiến người bệnh đi tiểu thường xuyên, lượng nước tiểu nhiều hơn hoặc phải thức dậy đi tiểu nhiều lần trong đêm.",
          "Đi tiểu nhiều cũng có thể liên quan đến việc uống nhiều nước, thuốc lợi tiểu, bệnh đường tiết niệu hoặc một số vấn đề sức khỏe khác. Tuy nhiên, nếu biểu hiện này đi kèm khát nước liên tục, người bệnh nên kiểm tra đường huyết."
        ]
      },
      {
        "heading": "Khát nước liên tục",
        "paragraphs": [
          "Đi tiểu nhiều khiến cơ thể mất nước, từ đó tạo cảm giác khát. Người bệnh có thể uống nước liên tục nhưng vẫn thấy khô miệng hoặc nhanh khát trở lại.",
          "Cảm giác khát bất thường, đặc biệt khi không liên quan đến thời tiết nóng, vận động nhiều hoặc ăn mặn, có thể là một tín hiệu cần được chú ý."
        ]
      },
      {
        "heading": "Nhanh đói hoặc ăn nhiều hơn",
        "paragraphs": [
          "Mặc dù trong máu có nhiều glucose, tế bào lại không nhận và sử dụng glucose hiệu quả. Cơ thể có thể phản ứng bằng cảm giác đói, khiến người bệnh muốn ăn thường xuyên hoặc nhanh đói sau bữa ăn.",
          "Tăng cảm giác đói không chỉ xuất hiện trong đái tháo đường. Thói quen ăn nhiều tinh bột hấp thu nhanh, thiếu ngủ, căng thẳng hoặc một số rối loạn nội tiết khác cũng có thể gây biểu hiện tương tự."
        ]
      },
      {
        "heading": "Mệt mỏi kéo dài",
        "paragraphs": [
          "Khi glucose không được đưa vào tế bào hiệu quả, cơ thể có thể thiếu nguồn năng lượng cần thiết cho hoạt động. Người bệnh dễ cảm thấy mệt, uể oải, buồn ngủ hoặc khó tập trung dù đã nghỉ ngơi.",
          "Mệt mỏi là triệu chứng rất phổ biến và có thể liên quan đến thiếu máu, bệnh tuyến giáp, rối loạn giấc ngủ, căng thẳng hoặc nhiều bệnh lý khác. Nếu tình trạng kéo dài và đi kèm khát nước, tiểu nhiều hoặc sụt cân, nên kiểm tra sớm."
        ]
      },
      {
        "heading": "Nhìn mờ hoặc thị lực thay đổi",
        "paragraphs": [
          "Đường huyết tăng có thể làm thay đổi lượng dịch trong các mô của mắt, khiến khả năng tập trung hình ảnh bị ảnh hưởng. Người bệnh có thể thấy nhìn mờ từng lúc hoặc thị lực dao động.",
          "Nhìn mờ cũng có thể là dấu hiệu của nhiều bệnh về mắt. Người bệnh không nên chỉ thay kính mà bỏ qua việc kiểm tra đường huyết, đặc biệt khi có thêm các yếu tố nguy cơ đái tháo đường."
        ]
      },
      {
        "heading": "Vết thương lâu lành",
        "paragraphs": [
          "Tăng đường huyết kéo dài có thể ảnh hưởng đến tuần hoàn, hệ miễn dịch và quá trình phục hồi mô. Những vết trầy xước nhỏ, vết thương ở bàn chân hoặc vùng da bị viêm có thể lâu lành hơn bình thường.",
          "Vết thương lâu lành cần được kiểm tra trực tiếp, nhất là khi có sưng, nóng, đỏ, đau, chảy dịch hoặc sốt. Người bệnh không nên tự xử lý kéo dài tại nhà."
        ]
      },
      {
        "heading": "Hay bị nhiễm trùng tái phát",
        "paragraphs": [
          "Người có đường huyết cao có thể dễ gặp tình trạng nhiễm trùng da, nhiễm nấm, nhiễm trùng đường tiết niệu hoặc viêm nhiễm tái diễn. Môi trường có lượng glucose cao cùng sự suy giảm khả năng chống nhiễm trùng có thể khiến vi sinh vật phát triển thuận lợi hơn.",
          "Viêm nhiễm tái phát không đồng nghĩa chắc chắn mắc đái tháo đường, nhưng đây là một lý do phù hợp để trao đổi với bác sĩ và kiểm tra đường huyết."
        ]
      },
      {
        "heading": "Tê, châm chích ở bàn tay hoặc bàn chân",
        "paragraphs": [
          "Đường huyết tăng kéo dài có thể làm tổn thương các dây thần kinh ngoại biên. Người bệnh có thể cảm thấy tê bì, kiến bò, châm chích, bỏng rát hoặc giảm cảm giác ở bàn chân và bàn tay.",
          "Tổn thương thần kinh thường liên quan đến bệnh đã tồn tại trong một thời gian, nhưng một số người chỉ phát hiện đái tháo đường khi đi khám vì tê chân. Triệu chứng này cũng có thể do bệnh cột sống, thiếu vitamin hoặc các bệnh lý thần kinh khác."
        ]
      },
      {
        "heading": "Sụt cân không rõ nguyên nhân",
        "paragraphs": [
          "Sụt cân thường được nhắc đến nhiều ở đái tháo đường type 1, nhưng cũng có thể xuất hiện ở người mắc type 2 khi đường huyết tăng đáng kể. Khi tế bào không sử dụng được glucose, cơ thể có thể phân giải mỡ và cơ để tạo năng lượng.",
          "Sụt cân nhanh mà không chủ động ăn kiêng hoặc tăng vận động là biểu hiện cần đi khám, không nên xem là một tín hiệu tích cực.",
          "Ai nên chủ động xét nghiệm đái tháo đường type 2?",
          "Theo tiêu chuẩn chăm sóc của Hiệp hội Đái tháo đường Hoa Kỳ năm 2026, việc sàng lọc nên bắt đầu từ 35 tuổi đối với người trưởng thành, ngay cả khi chưa có triệu chứng. Người có kết quả bình thường thường được kiểm tra lại định kỳ, phổ biến là khoảng ba năm một lần, nhưng khoảng cách có thể ngắn hơn nếu nguy cơ tăng lên.",
          "Người dưới 35 tuổi cũng nên được cân nhắc xét nghiệm sớm nếu đang thừa cân hoặc béo phì và có thêm yếu tố nguy cơ.",
          "Những nhóm nên chủ động trao đổi với bác sĩ gồm:",
          "Có cha, mẹ hoặc anh chị em ruột mắc đái tháo đường.",
          "Đang thừa cân, béo phì hoặc có nhiều mỡ vùng bụng.",
          "Ít vận động.",
          "Đã được chẩn đoán tiền đái tháo đường.",
          "Mắc tăng huyết áp hoặc có nguy cơ tim mạch.",
          "Phụ nữ từng mắc đái tháo đường thai kỳ.",
          "Có tiền sử sinh con với cân nặng lớn.",
          "Có rối loạn mỡ máu hoặc các biểu hiện rối loạn chuyển hóa.",
          "Đang sử dụng một số loại thuốc có thể làm tăng đường huyết.",
          "Có triệu chứng nghi ngờ như tiểu nhiều, khát nhiều, nhìn mờ hoặc sụt cân.",
          "Người có tiền đái tháo đường thường cần kiểm tra lại thường xuyên hơn, phổ biến là mỗi năm. Phụ nữ từng mắc đái tháo đường thai kỳ cũng cần được theo dõi lâu dài vì nguy cơ mắc đái tháo đường type 2 về sau cao hơn.",
          "Những xét nghiệm nào giúp phát hiện đái tháo đường type 2?",
          "Chẩn đoán đái tháo đường cần dựa trên xét nghiệm máu tại cơ sở y tế. Bác sĩ sẽ lựa chọn một hoặc kết hợp nhiều xét nghiệm tùy triệu chứng, tình trạng sức khỏe và hoàn cảnh của người bệnh."
        ]
      },
      {
        "heading": "Xét nghiệm đường huyết lúc đói",
        "paragraphs": [
          "Xét nghiệm đường huyết lúc đói đo lượng glucose trong máu tại một thời điểm sau khi người bệnh đã nhịn ăn ít nhất 8 giờ. Trong thời gian nhịn, người bệnh thường chỉ được uống nước lọc.",
          "Kết quả ở người không mang thai thường được diễn giải như sau:",
          "Bình thường: Dưới 100 mg/dL, tương đương dưới 5,6 mmol/L.",
          "Tiền đái tháo đường: Từ 100–125 mg/dL, tương đương 5,6–6,9 mmol/L.",
          "Đái tháo đường: Từ 126 mg/dL, tương đương 7,0 mmol/L trở lên.",
          "Đây là xét nghiệm phổ biến, dễ thực hiện và thường được lấy máu vào buổi sáng. Tuy nhiên, kết quả có thể bị ảnh hưởng bởi bệnh cấp tính, căng thẳng, thiếu ngủ, thuốc đang sử dụng hoặc việc nhịn ăn chưa đúng."
        ]
      },
      {
        "heading": "Xét nghiệm HbA1c",
        "paragraphs": [
          "HbA1c phản ánh mức đường huyết trung bình trong khoảng hai đến ba tháng gần đây. Xét nghiệm này không yêu cầu nhịn ăn nên khá thuận tiện cho người đi khám.",
          "Kết quả thường được phân loại:",
          "Bình thường: Dưới 5,7%.",
          "Tiền đái tháo đường: Từ 5,7–6,4%.",
          "Đái tháo đường: Từ 6,5% trở lên.",
          "HbA1c giúp bác sĩ nhìn được bức tranh đường huyết trong một khoảng thời gian dài hơn, thay vì chỉ đo tại một thời điểm. Sau khi đã được chẩn đoán, xét nghiệm này còn được sử dụng để theo dõi hiệu quả kiểm soát đường huyết."
        ]
      },
      {
        "heading": "Nghiệm pháp dung nạp glucose đường uống",
        "paragraphs": [
          "Nghiệm pháp này đánh giá khả năng xử lý glucose của cơ thể. Người bệnh được lấy máu khi đói, sau đó uống một dung dịch có lượng glucose được quy định và đo lại đường huyết sau hai giờ.",
          "Kết quả đường huyết hai giờ ở người không mang thai thường được hiểu như sau:",
          "Bình thường: Dưới 140 mg/dL, tương đương dưới 7,8 mmol/L.",
          "Tiền đái tháo đường: Từ 140–199 mg/dL, tương đương 7,8–11,0 mmol/L.",
          "Đái tháo đường: Từ 200 mg/dL, tương đương 11,1 mmol/L trở lên.",
          "Nghiệm pháp dung nạp glucose có thể phát hiện những trường hợp đường huyết lúc đói chưa tăng rõ nhưng cơ thể xử lý đường sau uống kém. Tuy nhiên, xét nghiệm cần nhiều thời gian và yêu cầu người bệnh chuẩn bị đúng hướng dẫn."
        ]
      },
      {
        "heading": "Xét nghiệm đường huyết bất kỳ",
        "paragraphs": [
          "Đường huyết bất kỳ có thể được đo vào bất cứ thời điểm nào, không phụ thuộc vào bữa ăn. Phương pháp này thường được sử dụng khi người bệnh có những triệu chứng điển hình của tăng đường huyết.",
          "Mức đường huyết bất kỳ từ 200 mg/dL, tương đương 11,1 mmol/L trở lên, kết hợp với triệu chứng kinh điển như tiểu nhiều, khát nhiều, sụt cân hoặc biểu hiện tăng đường huyết nghiêm trọng có thể đủ cơ sở để bác sĩ chẩn đoán.",
          "Nếu không có triệu chứng rõ ràng, người bệnh thường cần thêm một kết quả xét nghiệm bất thường để xác nhận.",
          "Một kết quả đường huyết cao đã đủ chẩn đoán chưa?",
          "Trong phần lớn trường hợp không có triệu chứng, kết quả đạt ngưỡng đái tháo đường cần được xác nhận bằng một lần xét nghiệm khác. Bác sĩ có thể lặp lại cùng loại xét nghiệm hoặc sử dụng một phương pháp khác.",
          "Ví dụ, người có HbA1c từ 6,5% trở lên nhưng không có triệu chứng có thể được xét nghiệm HbA1c lại hoặc kiểm tra đường huyết lúc đói. Nếu hai kết quả khác nhau, bác sĩ sẽ xem xét chỉ số nào vượt ngưỡng và có thể theo dõi lại sau một khoảng thời gian phù hợp.",
          "Việc xác nhận giúp hạn chế chẩn đoán sai do biến động tạm thời của đường huyết, bệnh cấp tính hoặc sai số trong quá trình lấy và phân tích mẫu.",
          "Khi nào HbA1c có thể không phản ánh chính xác đường huyết?",
          "HbA1c dựa trên sự gắn kết của glucose với hemoglobin trong tế bào hồng cầu. Vì vậy, những tình trạng làm thay đổi tuổi thọ hồng cầu hoặc cấu trúc hemoglobin có thể khiến kết quả cao hoặc thấp không đúng với đường huyết thực tế.",
          "Bác sĩ cần đặc biệt thận trọng khi người bệnh:",
          "Có thiếu máu thiếu sắt hoặc một số bệnh lý về máu.",
          "Mới mất máu hoặc được truyền máu.",
          "Đang chạy thận.",
          "Có bệnh thận hoặc bệnh gan nặng.",
          "Mang một số biến thể hemoglobin, chẳng hạn thalassemia.",
          "Đang mang thai.",
          "Có kết quả HbA1c không phù hợp với đường huyết đo được.",
          "Trong các trường hợp này, bác sĩ có thể sử dụng đường huyết lúc đói, nghiệm pháp dung nạp glucose hoặc phương pháp đánh giá khác thay cho việc chỉ dựa vào HbA1c.",
          "Có thể dùng máy đo đường huyết tại nhà để tự chẩn đoán không?",
          "Máy đo đường huyết cá nhân rất hữu ích trong việc theo dõi người đã được chẩn đoán đái tháo đường. Tuy nhiên, thiết bị này không được sử dụng để tự khẳng định mình mắc hay không mắc bệnh.",
          "Kết quả tại nhà có thể chịu ảnh hưởng bởi chất lượng que thử, kỹ thuật lấy máu, nhiệt độ, tay còn dính thức ăn hoặc tình trạng của thiết bị. Chẩn đoán chính thức cần dựa trên mẫu máu được xét nghiệm bằng phương pháp phù hợp tại cơ sở y tế.",
          "Nếu máy đo tại nhà nhiều lần cho kết quả cao bất thường, người bệnh nên mang theo nhật ký kết quả và đến khám thay vì tự mua thuốc hạ đường huyết.",
          "Sau khi phát hiện đái tháo đường cần làm thêm những kiểm tra gì?",
          "Chẩn đoán đái tháo đường không chỉ dừng lại ở một con số đường huyết. Bác sĩ cần đánh giá toàn diện để tìm các yếu tố nguy cơ và phát hiện sớm tổn thương cơ quan.",
          "Những kiểm tra có thể được chỉ định gồm:",
          "Xét nghiệm creatinine máu và ước tính mức lọc cầu thận eGFR để đánh giá chức năng thận.",
          "Xét nghiệm tỷ lệ albumin/creatinine trong nước tiểu nhằm phát hiện tổn thương thận sớm.",
          "Xét nghiệm cholesterol toàn phần, LDL-cholesterol, HDL-cholesterol và triglyceride.",
          "Đo huyết áp.",
          "Xét nghiệm chức năng gan khi cần thiết.",
          "Kiểm tra bàn chân, cảm giác và tuần hoàn ngoại biên.",
          "Khám mắt có giãn đồng tử.",
          "Đánh giá cân nặng, vòng bụng và các bệnh lý đi kèm.",
          "Ở người mắc đái tháo đường type 2, kiểm tra thận bằng eGFR và albumin niệu thường được thực hiện định kỳ. Khám mắt toàn diện cũng được khuyến nghị ngay từ thời điểm chẩn đoán vì bệnh có thể đã tồn tại trước khi được phát hiện.",
          "Không phải người bệnh nào cũng cần làm toàn bộ xét nghiệm trong cùng một ngày. Bác sĩ sẽ xây dựng danh mục phù hợp dựa trên tuổi, triệu chứng, bệnh nền và kết quả khám."
        ]
      },
      {
        "heading": "Phân biệt tiền đái tháo đường và đái tháo đường type 2",
        "paragraphs": [
          "Tiền đái tháo đường là tình trạng đường huyết cao hơn bình thường nhưng chưa đạt ngưỡng chẩn đoán đái tháo đường. Giai đoạn này thường không có triệu chứng rõ ràng nhưng cho thấy cơ thể đã bắt đầu gặp khó khăn trong việc điều hòa glucose.",
          "Tiền đái tháo đường không có nghĩa người bệnh chắc chắn sẽ tiến triển thành đái tháo đường. Điều chỉnh chế độ ăn, tăng vận động, giảm cân phù hợp và theo dõi định kỳ có thể giúp làm chậm hoặc ngăn quá trình tiến triển ở nhiều người.",
          "Tuy nhiên, không nên xem tiền đái tháo đường là “chỉ hơi cao một chút”. Đây cũng là dấu hiệu cảnh báo về nguy cơ tim mạch và rối loạn chuyển hóa, cần được quản lý nghiêm túc.",
          "Người bệnh nên chuẩn bị gì trước khi xét nghiệm?",
          "Với xét nghiệm đường huyết lúc đói hoặc nghiệm pháp dung nạp glucose, người bệnh cần nhịn ăn ít nhất 8 giờ theo hướng dẫn. Trong thời gian này, thường có thể uống nước lọc nhưng không uống cà phê, sữa, nước ngọt hoặc nhai kẹo cao su.",
          "Trước khi xét nghiệm, nên thông báo với bác sĩ về:",
          "Các thuốc và thực phẩm bổ sung đang sử dụng.",
          "Tình trạng mang thai.",
          "Bệnh cấp tính, sốt hoặc nhiễm trùng gần đây.",
          "Việc sử dụng corticosteroid hoặc thuốc có thể ảnh hưởng đến đường huyết.",
          "Tiền sử thiếu máu, truyền máu, bệnh thận hoặc bệnh gan.",
          "Kết quả đường huyết và HbA1c trước đây.",
          "Người bệnh không nên tự ngừng thuốc đang sử dụng chỉ để làm xét nghiệm, trừ khi được bác sĩ hướng dẫn.",
          "Khi nào cần đi khám ngay?",
          "Người có biểu hiện nghi ngờ đái tháo đường nên sắp xếp đi khám sớm nếu khát nước, tiểu nhiều, nhìn mờ, sụt cân hoặc mệt mỏi kéo dài.",
          "Cần đến cơ sở y tế ngay khi có các dấu hiệu nghiêm trọng như:",
          "Nôn nhiều, không thể ăn uống.",
          "Khó thở hoặc thở nhanh, sâu.",
          "Khô miệng, mất nước rõ.",
          "Đau bụng nhiều.",
          "Hơi thở có mùi trái cây bất thường.",
          "Lơ mơ, lú lẫn hoặc khó đánh thức.",
          "Suy yếu nhanh.",
          "Đây có thể là biểu hiện của tình trạng tăng đường huyết cấp tính hoặc nhiễm toan ceton. Mặc dù biến chứng này thường gặp hơn ở đái tháo đường type 1, người mắc type 2 vẫn có thể gặp và cần được cấp cứu.",
          "Phát hiện đái tháo đường sớm có ý nghĩa gì?",
          "Đường huyết tăng kéo dài có thể ảnh hưởng đến mạch máu và nhiều cơ quan như tim, não, thận, mắt, dây thần kinh và bàn chân. Tuy nhiên, nguy cơ biến chứng có thể được giảm bớt khi bệnh được phát hiện, kiểm soát và theo dõi đúng cách.",
          "Điều trị đái tháo đường type 2 không chỉ là giảm đường huyết. Người bệnh còn cần kiểm soát huyết áp, mỡ máu, cân nặng, thói quen hút thuốc và các yếu tố nguy cơ tim mạch khác.",
          "Tùy từng trường hợp, kế hoạch chăm sóc có thể gồm điều chỉnh chế độ ăn, vận động, giảm cân, dùng thuốc và theo dõi định kỳ. Người bệnh không nên tự mua thuốc theo kết quả xét nghiệm hoặc dùng đơn của người khác vì lựa chọn điều trị cần dựa trên mức đường huyết, chức năng thận, bệnh tim mạch và nhiều yếu tố cá nhân."
        ]
      },
      {
        "heading": "Thăm khám và xét nghiệm đái tháo đường tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Người có dấu hiệu nghi ngờ hoặc thuộc nhóm nguy cơ có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám và đánh giá tình trạng chuyển hóa.",
          "Tùy từng trường hợp, bác sĩ có thể chỉ định đường huyết lúc đói, HbA1c, nghiệm pháp dung nạp glucose và các xét nghiệm liên quan đến thận, gan, mỡ máu. Người đã được chẩn đoán sẽ được tư vấn kế hoạch kiểm soát đường huyết, dinh dưỡng, vận động và lịch theo dõi phù hợp.",
          "Người bệnh nên mang theo kết quả xét nghiệm, đơn thuốc và hồ sơ khám cũ. Việc so sánh các chỉ số theo thời gian giúp bác sĩ đánh giá diễn biến bệnh chính xác hơn so với chỉ xem một kết quả riêng lẻ."
        ]
      },
      {
        "heading": "Đừng chờ cơ thể “lên tiếng” quá rõ mới kiểm tra",
        "paragraphs": [
          "Đái tháo đường type 2 có thể tiến triển âm thầm và không gây triệu chứng trong thời gian dài. Những biểu hiện như khát nhiều, tiểu nhiều, nhanh đói, mệt mỏi, nhìn mờ hoặc vết thương lâu lành là các tín hiệu nên được kiểm tra, nhưng không phải người bệnh nào cũng có những dấu hiệu này.",
          "Chủ động xét nghiệm khi từ 35 tuổi hoặc khi có yếu tố nguy cơ là cách thiết thực để phát hiện tiền đái tháo đường và đái tháo đường sớm. Một kết quả bất thường không nên khiến người bệnh quá hoảng sợ, nhưng cũng không nên bị bỏ qua hoặc tự xử lý tại nhà.",
          "Phát hiện sớm giúp người bệnh có thêm thời gian để điều chỉnh lối sống, lựa chọn hướng điều trị phù hợp và bảo vệ sức khỏe tim, thận, mắt cùng hệ thần kinh trong dài hạn.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "roi-loan-tuyen-giap-nhung-trieu-chung-de-bi-bo-qua": {
    "sourceFile": "42.Rối loạn tuyến giáp những triệu chứng dễ bị bỏ qua.docx",
    "title": "Rối loạn tuyến giáp: Những triệu chứng dễ bị bỏ qua",
    "excerpt": "Mệt mỏi, tăng cân, khó ngủ, rụng tóc hay tâm trạng thất thường thường được cho là hậu quả của áp lực công việc, tuổi tác hoặc sinh hoạt thiếu điều độ. Tuy nhiên, trong một số trường hợp, đây lại là những tín hiệu liên quan đến rối loạn tuyến giáp.",
    "intro": [
      "Mệt mỏi, tăng cân, khó ngủ, rụng tóc hay tâm trạng thất thường thường được cho là hậu quả của áp lực công việc, tuổi tác hoặc sinh hoạt thiếu điều độ. Tuy nhiên, trong một số trường hợp, đây lại là những tín hiệu liên quan đến rối loạn tuyến giáp.",
      "Các triệu chứng của bệnh tuyến giáp thường xuất hiện từ từ và khá giống với nhiều vấn đề sức khỏe thông thường. Vì vậy, không ít người chỉ phát hiện bệnh khi đi khám sức khỏe, làm xét nghiệm hoặc khi các biểu hiện đã ảnh hưởng rõ rệt đến cuộc sống.",
      "Tuyến giáp có vai trò gì đối với cơ thể?",
      "Tuyến giáp là một tuyến nhỏ có hình dạng gần giống cánh bướm, nằm ở phía trước cổ. Tuy kích thước không lớn, tuyến giáp lại sản xuất hormone tham gia điều hòa cách cơ thể sử dụng năng lượng.",
      "Hormone tuyến giáp có ảnh hưởng đến nhiều hoạt động như:",
      "Nhịp tim.",
      "Nhiệt độ cơ thể.",
      "Cân nặng và quá trình chuyển hóa.",
      "Hoạt động của hệ tiêu hóa.",
      "Chu kỳ kinh nguyệt.",
      "Tâm trạng và khả năng tập trung.",
      "Sức khỏe của da, tóc và cơ bắp.",
      "Có thể hình dung tuyến giáp giống như một “bộ điều chỉnh tốc độ” của cơ thể. Khi hormone tuyến giáp quá ít, nhiều hoạt động có xu hướng chậm lại. Ngược lại, khi lượng hormone quá nhiều, cơ thể có thể hoạt động nhanh hơn bình thường.",
      "Rối loạn tuyến giáp gồm những tình trạng nào?",
      "Rối loạn tuyến giáp không chỉ là một bệnh duy nhất. Một số tình trạng thường gặp gồm:",
      "Suy giáp",
      "Suy giáp xảy ra khi tuyến giáp không sản xuất đủ hormone đáp ứng nhu cầu của cơ thể. Khi đó, quá trình chuyển hóa thường chậm lại, khiến người bệnh dễ mệt, sợ lạnh, tăng cân hoặc táo bón.",
      "Viêm tuyến giáp Hashimoto, một bệnh tự miễn khiến hệ miễn dịch tấn công nhầm tuyến giáp, là nguyên nhân phổ biến của suy giáp.",
      "Cường giáp",
      "Cường giáp là tình trạng tuyến giáp sản xuất nhiều hormone hơn mức cơ thể cần. Người bệnh có thể cảm thấy tim đập nhanh, nóng bức, dễ cáu gắt, run tay hoặc giảm cân dù vẫn ăn uống bình thường.",
      "Bệnh Graves, cũng là một bệnh tự miễn, thường liên quan đến tình trạng cường giáp."
    ],
    "sections": [
      {
        "heading": "Viêm tuyến giáp",
        "paragraphs": [
          "Tuyến giáp bị viêm có thể giải phóng lượng hormone dự trữ vào máu, gây biểu hiện giống cường giáp trong một thời gian. Sau đó, tuyến giáp có thể chuyển sang giai đoạn hoạt động kém và gây suy giáp."
        ]
      },
      {
        "heading": "Bướu giáp và nhân tuyến giáp",
        "paragraphs": [
          "Bướu giáp là tình trạng tuyến giáp tăng kích thước. Nhân tuyến giáp là một hoặc nhiều khối hình thành bên trong tuyến. Phần lớn nhân tuyến giáp không phải ung thư, nhưng vẫn cần được bác sĩ đánh giá để xác định tính chất và hướng theo dõi phù hợp."
        ]
      },
      {
        "heading": "Những triệu chứng rối loạn tuyến giáp dễ bị bỏ qua",
        "paragraphs": [
          "Các biểu hiện của rối loạn tuyến giáp không giống nhau ở tất cả mọi người. Một người có thể xuất hiện nhiều triệu chứng, trong khi người khác chỉ cảm thấy hơi mệt hoặc gần như không có dấu hiệu rõ ràng.",
          "Dưới đây là những biểu hiện thường bị nhầm với căng thẳng, thiếu ngủ hoặc thay đổi tuổi tác."
        ]
      },
      {
        "heading": "Mệt mỏi kéo dài dù đã nghỉ ngơi",
        "paragraphs": [
          "Mệt sau một ngày làm việc bận rộn là điều khá bình thường. Tuy nhiên, nếu bạn thường xuyên cảm thấy kiệt sức, thiếu năng lượng ngay cả khi đã ngủ đủ, đây có thể là dấu hiệu cần được chú ý.",
          "Suy giáp thường làm các hoạt động của cơ thể chậm lại, khiến người bệnh uể oải và buồn ngủ. Cường giáp cũng có thể gây mệt do tim đập nhanh, khó ngủ và cơ thể liên tục ở trạng thái hoạt động quá mức."
        ]
      },
      {
        "heading": "Cân nặng thay đổi không rõ nguyên nhân",
        "paragraphs": [
          "Tăng cân thường được liên hệ với ăn nhiều hoặc ít vận động. Tuy nhiên, suy giáp có thể góp phần làm cân nặng tăng nhẹ, cơ thể giữ nước và khiến việc giảm cân trở nên khó khăn hơn.",
          "Ngược lại, cường giáp có thể khiến người bệnh giảm cân dù khẩu phần ăn không giảm, thậm chí cảm thấy đói và ăn nhiều hơn trước.",
          "Dù vậy, cân nặng thay đổi có thể liên quan đến rất nhiều nguyên nhân khác. Không nên chỉ dựa vào cân nặng để tự kết luận mình mắc bệnh tuyến giáp."
        ]
      },
      {
        "heading": "Khó chịu với nhiệt độ",
        "paragraphs": [
          "Một người bị suy giáp có thể thường xuyên cảm thấy lạnh trong khi những người xung quanh thấy nhiệt độ hoàn toàn bình thường. Tay chân lạnh, khó chịu khi ngồi phòng điều hòa hoặc cần mặc nhiều lớp áo hơn trước là những biểu hiện có thể gặp.",
          "Trong khi đó, cường giáp thường khiến người bệnh dễ nóng, ra nhiều mồ hôi và khó chịu khi thời tiết oi bức."
        ]
      },
      {
        "heading": "Tim đập nhanh hoặc chậm bất thường",
        "paragraphs": [
          "Hormone tuyến giáp có ảnh hưởng trực tiếp đến hoạt động của tim.",
          "Ở người cường giáp, tim có thể đập nhanh, hồi hộp, đánh trống ngực hoặc đôi khi không đều. Một số người cảm thấy tim đập mạnh ngay cả khi đang nghỉ ngơi.",
          "Suy giáp có thể làm nhịp tim chậm hơn. Tuy nhiên, những thay đổi về nhịp tim cũng có thể liên quan đến bệnh tim mạch, lo âu, thiếu máu, sử dụng chất kích thích hoặc nhiều nguyên nhân khác.",
          "Cường giáp không được kiểm soát có thể làm tăng nguy cơ rối loạn nhịp tim, suy tim và ảnh hưởng đến xương."
        ]
      },
      {
        "heading": "Khó ngủ hoặc buồn ngủ quá nhiều",
        "paragraphs": [
          "Cường giáp có thể khiến cơ thể luôn trong trạng thái “tăng tốc”. Người bệnh dễ bồn chồn, trằn trọc, ngủ không sâu hoặc thức giấc nhiều lần.",
          "Ngược lại, người bị suy giáp thường cảm thấy buồn ngủ, chậm chạp và khó tỉnh táo vào ban ngày.",
          "Do khó ngủ và mệt mỏi cũng rất phổ biến trong cuộc sống hiện đại, nhiều người không nghĩ đến việc kiểm tra tuyến giáp."
        ]
      },
      {
        "heading": "Hay cáu gắt, lo âu hoặc buồn bã",
        "paragraphs": [
          "Thay đổi hormone tuyến giáp có thể ảnh hưởng đến tâm trạng. Cường giáp thường liên quan đến cảm giác lo lắng, bồn chồn, dễ kích động hoặc thiếu kiên nhẫn.",
          "Suy giáp có thể khiến người bệnh cảm thấy chậm chạp, thiếu động lực, buồn bã hoặc có biểu hiện giống trầm cảm.",
          "Tuy nhiên, các vấn đề tâm lý và cảm xúc cần được đánh giá toàn diện. Xét nghiệm tuyến giáp chỉ là một phần trong quá trình tìm nguyên nhân khi bác sĩ nhận thấy có dấu hiệu phù hợp."
        ]
      },
      {
        "heading": "Khó tập trung và hay quên",
        "paragraphs": [
          "Nhiều người mô tả cảm giác đầu óc không tỉnh táo, xử lý thông tin chậm, khó nhớ tên hoặc khó tập trung vào công việc. Biểu hiện này đôi khi được gọi là “sương mù não”.",
          "Tình trạng thiếu ngủ, căng thẳng và tuổi tác đều có thể ảnh hưởng đến trí nhớ. Tuy nhiên, suy giáp cũng có thể gây khó tập trung và hay quên, đặc biệt khi đi kèm mệt mỏi, sợ lạnh, táo bón hoặc da khô.",
          "Ở người lớn tuổi, biểu hiện tuyến giáp đôi khi không điển hình và có thể bị nhầm với trầm cảm hoặc suy giảm trí nhớ do tuổi tác."
        ]
      },
      {
        "heading": "Da khô, tóc rụng và móng dễ gãy",
        "paragraphs": [
          "Da khô, tóc thưa hoặc rụng nhiều có thể xuất hiện ở người suy giáp. Người bệnh cũng có thể nhận thấy tóc trở nên khô, xơ hơn hoặc lông mày thưa dần.",
          "Cường giáp cũng có thể gây tóc mỏng, dễ rụng và thay đổi cấu trúc móng.",
          "Những biểu hiện này thường được quy cho mỹ phẩm, thời tiết hoặc chế độ dinh dưỡng. Tuy nhiên, nếu tình trạng kéo dài và xuất hiện cùng các triệu chứng toàn thân khác, bạn nên trao đổi với bác sĩ."
        ]
      },
      {
        "heading": "Táo bón hoặc đi ngoài nhiều lần",
        "paragraphs": [
          "Khi hormone tuyến giáp thấp, hoạt động của đường tiêu hóa có thể chậm lại, dẫn đến táo bón.",
          "Ngược lại, người bị cường giáp có thể đi ngoài nhiều lần hơn bình thường, phân lỏng hoặc cảm thấy đường ruột hoạt động nhanh hơn.",
          "Đây là dấu hiệu khá kín đáo nên người bệnh thường chỉ điều chỉnh chế độ ăn mà không nghĩ đến nguyên nhân nội tiết."
        ]
      },
      {
        "heading": "Chu kỳ kinh nguyệt thay đổi",
        "paragraphs": [
          "Phụ nữ bị rối loạn tuyến giáp có thể gặp tình trạng kinh nguyệt không đều, lượng máu kinh nhiều hoặc ít hơn bình thường.",
          "Suy giáp có thể liên quan đến kinh nguyệt kéo dài, ra nhiều máu hoặc khó thụ thai. Cường giáp cũng có thể làm chu kỳ thưa hơn và ảnh hưởng đến khả năng sinh sản.",
          "Nếu kinh nguyệt thay đổi kéo dài, đặc biệt khi đi kèm mệt mỏi, thay đổi cân nặng, tim đập bất thường hoặc khó mang thai, người bệnh nên được khám sản phụ khoa và đánh giá chức năng tuyến giáp khi cần thiết."
        ]
      },
      {
        "heading": "Đau cơ, yếu cơ hoặc hay bị chuột rút",
        "paragraphs": [
          "Suy giáp có thể gây đau mỏi cơ, cứng khớp hoặc cảm giác nặng nề khi vận động.",
          "Cường giáp thường làm yếu cơ, nhất là các nhóm cơ ở vai, cánh tay, hông và đùi. Người bệnh có thể thấy khó đứng dậy khỏi ghế, leo cầu thang hoặc nâng đồ vật như trước."
        ]
      },
      {
        "heading": "Cổ to, khàn tiếng hoặc khó nuốt",
        "paragraphs": [
          "Bướu giáp hoặc nhân tuyến giáp có thể làm vùng trước cổ to hơn, hai bên cổ không cân đối hoặc xuất hiện một khối di động khi nuốt.",
          "Một số người còn có cảm giác vướng cổ, khàn tiếng, ho kéo dài, khó nuốt hoặc khó thở. Những dấu hiệu này không nên tự theo dõi quá lâu, kể cả khi không gây đau.",
          "Vì sao rối loạn tuyến giáp thường được phát hiện muộn?",
          "Suy giáp thường tiến triển chậm trong nhiều tháng hoặc nhiều năm. Các triệu chứng như mệt mỏi, tăng cân và da khô rất phổ biến, không phải lúc nào cũng do tuyến giáp. Chính vì vậy, người bệnh có thể quen dần với sự thay đổi và cho rằng đó chỉ là hậu quả của công việc hoặc tuổi tác.",
          "Ở phụ nữ sau sinh, mệt mỏi, khó ngủ, thay đổi tâm trạng và giảm khả năng tập trung cũng dễ bị xem là biểu hiện bình thường khi chăm sóc em bé. Tuy nhiên, viêm tuyến giáp sau sinh có thể gây giai đoạn cường giáp, suy giáp hoặc cả hai.",
          "Những ai nên chú ý kiểm tra tuyến giáp?",
          "Bạn nên trao đổi với bác sĩ về việc kiểm tra chức năng tuyến giáp nếu có triệu chứng kéo dài hoặc thuộc một trong các nhóm sau:",
          "Có người thân mắc bệnh tuyến giáp.",
          "Đã từng bị bướu giáp, nhân tuyến giáp hoặc bệnh tuyến giáp khác.",
          "Từng phẫu thuật tuyến giáp hoặc điều trị bằng iod phóng xạ.",
          "Đã xạ trị vùng cổ hoặc ngực.",
          "Mắc bệnh tự miễn như lupus, viêm khớp dạng thấp hoặc bệnh celiac.",
          "Mắc bệnh đái tháo đường.",
          "Đang mang thai, dự định mang thai hoặc mới sinh con.",
          "Đang sử dụng thuốc có thể ảnh hưởng đến chức năng tuyến giáp.",
          "Phụ nữ và người lớn tuổi có nhiều triệu chứng nghi ngờ.",
          "Thuộc nhóm nguy cơ không có nghĩa là chắc chắn mắc bệnh. Bác sĩ sẽ cân nhắc triệu chứng, tiền sử và kết quả khám để quyết định có cần xét nghiệm hay không.",
          "Rối loạn tuyến giáp được kiểm tra như thế nào?"
        ]
      },
      {
        "heading": "Khám lâm sàng",
        "paragraphs": [
          "Bác sĩ có thể hỏi về thay đổi cân nặng, giấc ngủ, nhịp tim, chu kỳ kinh nguyệt, tiền sử gia đình và các loại thuốc đang sử dụng.",
          "Vùng cổ sẽ được kiểm tra để phát hiện tuyến giáp to hoặc có nhân. Bác sĩ cũng có thể đánh giá nhịp tim, phản xạ, tình trạng run tay, da, tóc và mắt."
        ]
      },
      {
        "heading": "Xét nghiệm máu",
        "paragraphs": [
          "Các xét nghiệm thường được sử dụng gồm:",
          "TSH: Thường là xét nghiệm đầu tiên để đánh giá hoạt động của tuyến giáp.",
          "FT4 hoặc T4: Giúp xác định lượng hormone tuyến giáp trong máu.",
          "T3: Có thể được chỉ định khi nghi ngờ cường giáp.",
          "Kháng thể tuyến giáp: Hỗ trợ xác định một số bệnh tuyến giáp tự miễn như Hashimoto hoặc Graves.",
          "Thông thường, TSH tăng gợi ý tuyến giáp hoạt động kém, trong khi TSH thấp có thể gợi ý tuyến giáp hoạt động quá mức. Tuy nhiên, kết quả cần được đọc cùng các xét nghiệm khác, tình trạng mang thai, bệnh nền và thuốc đang sử dụng."
        ]
      },
      {
        "heading": "Siêu âm tuyến giáp",
        "paragraphs": [
          "Siêu âm giúp quan sát kích thước, cấu trúc tuyến giáp và đặc điểm của các nhân. Không phải cứ có nhân tuyến giáp là nguy hiểm hoặc cần phẫu thuật.",
          "Dựa trên hình ảnh siêu âm, bác sĩ có thể đề nghị theo dõi định kỳ hoặc thực hiện thêm các kiểm tra như chọc hút tế bào bằng kim nhỏ khi có chỉ định.",
          "Khi nào cần đi khám sớm?",
          "Bạn nên chủ động đi khám nếu có một hoặc nhiều biểu hiện sau:",
          "Mệt mỏi kéo dài, ảnh hưởng đến sinh hoạt.",
          "Tăng hoặc giảm cân không giải thích được.",
          "Tim thường xuyên đập nhanh, hồi hộp hoặc không đều.",
          "Cổ to, có khối bất thường hoặc cảm giác vướng khi nuốt.",
          "Khàn tiếng kéo dài.",
          "Kinh nguyệt thay đổi hoặc khó mang thai.",
          "Rụng tóc, da khô và táo bón kéo dài.",
          "Run tay, mất ngủ, dễ nóng và ra nhiều mồ hôi.",
          "Có tiền sử gia đình mắc bệnh tuyến giáp.",
          "Triệu chứng xuất hiện trong thời gian mang thai hoặc sau sinh.",
          "Người bệnh cần đến cơ sở y tế ngay nếu tim đập rất nhanh kèm đau ngực, khó thở, choáng hoặc ngất; sốt cao kèm kích động, lú lẫn; hoặc buồn ngủ bất thường, hạ thân nhiệt và phản ứng chậm. Đây có thể là biểu hiện của tình trạng nghiêm trọng cần được xử trí khẩn cấp.",
          "Rối loạn tuyến giáp có điều trị được không?",
          "Phần lớn các rối loạn chức năng tuyến giáp có thể được kiểm soát khi xác định đúng nguyên nhân và theo dõi phù hợp.",
          "Hướng điều trị có thể bao gồm:",
          "Bổ sung hormone tuyến giáp đối với một số trường hợp suy giáp.",
          "Thuốc giúp kiểm soát cường giáp.",
          "Điều trị iod phóng xạ hoặc phẫu thuật trong những trường hợp phù hợp.",
          "Theo dõi định kỳ đối với một số nhân tuyến giáp chưa cần can thiệp.",
          "Điều chỉnh liều thuốc dựa trên xét nghiệm và đáp ứng của người bệnh.",
          "Không nên tự mua thuốc tuyến giáp, tự bổ sung iod liều cao hoặc sử dụng các sản phẩm được quảng cáo là “điều hòa tuyến giáp”. Thừa iod cũng có thể ảnh hưởng đến hoạt động của tuyến giáp ở một số người.",
          "Người đang điều trị không nên tự ngừng thuốc hoặc thay đổi liều khi chưa trao đổi với bác sĩ, ngay cả khi cảm thấy triệu chứng đã cải thiện."
        ]
      },
      {
        "heading": "Chủ động kiểm tra để không bỏ qua tín hiệu của cơ thể",
        "paragraphs": [
          "Rối loạn tuyến giáp có thể biểu hiện bằng những thay đổi rất quen thuộc như mệt mỏi, tăng cân, mất ngủ, rụng tóc hoặc khó tập trung. Một triệu chứng đơn lẻ thường chưa đủ để kết luận bệnh, nhưng nhiều biểu hiện xuất hiện cùng lúc và kéo dài thì không nên chủ quan.",
          "Khi nghi ngờ vấn đề tuyến giáp, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ thăm khám, thực hiện xét nghiệm chức năng tuyến giáp, siêu âm và tư vấn hướng theo dõi phù hợp. Phát hiện đúng nguyên nhân giúp người bệnh tránh tự điều trị sai cách và kiểm soát sức khỏe chủ động hơn.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "kham-suc-khoe-nguoi-cao-tuoi-nen-tap-trung-vao-nhung-hang-muc-nao": {
    "sourceFile": "43.Khám sức khỏe người cao tuổi nên tập trung vào những hạng mục nào.docx",
    "title": "Khám sức khỏe người cao tuổi nên tập trung vào những hạng mục nào?",
    "excerpt": "Tuổi càng cao, cơ thể càng có nhiều thay đổi nhưng không phải lúc nào cũng biểu hiện thành triệu chứng rõ ràng. Một người vẫn ăn uống, sinh hoạt bình thường có thể đang gặp tình trạng tăng huyết áp, rối loạn đường huyết, loãng xương hoặc suy giảm chức năng thận mà chưa nhận ra.",
    "intro": [
      "Tuổi càng cao, cơ thể càng có nhiều thay đổi nhưng không phải lúc nào cũng biểu hiện thành triệu chứng rõ ràng. Một người vẫn ăn uống, sinh hoạt bình thường có thể đang gặp tình trạng tăng huyết áp, rối loạn đường huyết, loãng xương hoặc suy giảm chức năng thận mà chưa nhận ra.",
      "Vì vậy, khám sức khỏe người cao tuổi không chỉ là làm thật nhiều xét nghiệm. Điều quan trọng hơn là đánh giá toàn diện sức khỏe thể chất, tinh thần, khả năng vận động và mức độ tự chủ trong sinh hoạt để lựa chọn hạng mục kiểm tra phù hợp.",
      "Vì sao người cao tuổi cần một gói khám riêng?",
      "Khám sức khỏe cho người lớn tuổi có nhiều điểm khác với khám tổng quát ở người trẻ. Một người cao tuổi có thể đồng thời mắc tăng huyết áp, đái tháo đường, thoái hóa khớp và rối loạn giấc ngủ. Bên cạnh đó, việc sử dụng nhiều loại thuốc cũng có thể làm tăng nguy cơ chóng mặt, té ngã hoặc tương tác thuốc.",
      "Theo cách tiếp cận chăm sóc tích hợp dành cho người cao tuổi của Tổ chức Y tế Thế giới, quá trình đánh giá nên quan tâm đến nhận thức, khả năng vận động, dinh dưỡng, thị lực, thính lực và trạng thái tâm lý, thay vì chỉ tập trung vào từng bệnh riêng lẻ.",
      "Một gói khám phù hợp cần hướng đến ba mục tiêu:",
      "Phát hiện sớm bệnh lý chưa có triệu chứng rõ ràng.",
      "Theo dõi và kiểm soát tốt các bệnh mạn tính đang mắc.",
      "Duy trì khả năng vận động, giao tiếp và tự chăm sóc càng lâu càng tốt.",
      "1. Khám lâm sàng và khai thác tiền sử sức khỏe",
      "Đây là bước đầu tiên và cũng là phần không nên làm qua loa. Bác sĩ cần trao đổi với người bệnh hoặc người thân để nắm được tình trạng sức khỏe tổng thể, thói quen sinh hoạt và những thay đổi xuất hiện gần đây.",
      "Nội dung thường bao gồm:",
      "Đo huyết áp, mạch, nhịp thở, chiều cao, cân nặng và chỉ số khối cơ thể.",
      "Khám tim, phổi, bụng, hệ thần kinh và cơ xương khớp.",
      "Hỏi về tiền sử tăng huyết áp, đái tháo đường, tim mạch, đột quỵ, bệnh thận hoặc ung thư.",
      "Đánh giá khả năng ăn uống, ngủ nghỉ, đi lại và tự chăm sóc.",
      "Ghi nhận tình trạng sụt cân, mệt mỏi, đau kéo dài hoặc giảm trí nhớ.",
      "Tìm hiểu tiền sử té ngã trong thời gian gần đây.",
      "Người cao tuổi nên mang theo danh sách đầy đủ các loại thuốc, thực phẩm bổ sung và thuốc không kê đơn đang sử dụng. Việc rà soát thuốc giúp bác sĩ phát hiện nguy cơ dùng trùng hoạt chất, tương tác thuốc hoặc những loại thuốc có thể liên quan đến buồn ngủ, chóng mặt và suy giảm nhận thức.",
      "2. Kiểm tra tim mạch và huyết áp",
      "Tăng huyết áp và bệnh tim mạch có thể tiến triển âm thầm trong nhiều năm. Không ít trường hợp chỉ được phát hiện khi người bệnh xuất hiện đau ngực, khó thở, phù chân hoặc gặp biến cố tim mạch.",
      "Trong gói khám sức khỏe người cao tuổi, bác sĩ có thể chỉ định:",
      "Đo huyết áp đúng quy trình.",
      "Xét nghiệm mỡ máu.",
      "Đo điện tim.",
      "Siêu âm tim khi có triệu chứng hoặc yếu tố nguy cơ.",
      "Đánh giá nguy cơ xơ vữa động mạch.",
      "Kiểm tra tuần hoàn ngoại vi khi có tê chân, đau chân hoặc vết thương lâu lành.",
      "Viện Lão khoa Quốc gia Hoa Kỳ khuyến nghị người lớn tuổi nên được kiểm tra huyết áp và cholesterol định kỳ, kể cả khi vẫn cảm thấy khỏe mạnh.",
      "Điện tim hoặc siêu âm tim không nhất thiết phải thực hiện giống nhau cho tất cả mọi người. Bác sĩ sẽ cân nhắc dựa trên tuổi, triệu chứng, tiền sử bệnh và kết quả khám ban đầu.",
      "3. Tầm soát đái tháo đường và rối loạn chuyển hóa",
      "Đái tháo đường type 2 thường không gây triệu chứng rõ ở giai đoạn đầu. Khi đường huyết tăng kéo dài, người bệnh có thể gặp biến chứng ở mắt, tim mạch, thận, thần kinh và bàn chân.",
      "Các xét nghiệm thường được cân nhắc gồm:",
      "Đường huyết lúc đói.",
      "HbA1c, phản ánh mức đường huyết trung bình trong vài tháng gần đây.",
      "Mỡ máu gồm cholesterol và triglyceride.",
      "Axit uric khi có nguy cơ bệnh gout.",
      "Điện giải đồ trong một số trường hợp.",
      "Người đang điều trị đái tháo đường cần được kiểm tra thêm chức năng thận, mắt, bàn chân và hiệu quả kiểm soát đường huyết. Mục tiêu điều trị ở người cao tuổi có thể khác người trẻ, tùy theo thể trạng, bệnh nền và nguy cơ hạ đường huyết.",
      "4. Đánh giá chức năng gan, thận và hệ tiết niệu",
      "Gan và thận đảm nhiệm nhiều vai trò quan trọng, trong đó có chuyển hóa và đào thải thuốc. Khi tuổi cao, chức năng của các cơ quan này có thể giảm dần, đặc biệt ở người đang dùng nhiều thuốc hoặc mắc bệnh mạn tính.",
      "Một số hạng mục thường gặp gồm:",
      "Men gan và các chỉ số đánh giá chức năng gan.",
      "Creatinine, mức lọc cầu thận và điện giải.",
      "Tổng phân tích nước tiểu.",
      "Công thức máu.",
      "Siêu âm ổ bụng khi có chỉ định.",
      "Xét nghiệm công thức máu có thể hỗ trợ phát hiện thiếu máu, nhiễm trùng hoặc một số bất thường về tế bào máu. Trong khi đó, xét nghiệm nước tiểu và chức năng thận giúp đánh giá nguy cơ suy thận, nhiễm trùng tiết niệu hoặc biến chứng của tăng huyết áp và đái tháo đường.",
      "Người cao tuổi cũng nên trao đổi với bác sĩ nếu có tiểu đêm nhiều, tiểu buốt, tiểu khó, són tiểu hoặc cảm giác tiểu không hết. Đây không phải lúc nào cũng là “chuyện bình thường do tuổi tác”.",
      "5. Kiểm tra xương khớp, mật độ xương và nguy cơ té ngã",
      "Thoái hóa khớp, giảm khối lượng cơ và loãng xương có thể khiến người cao tuổi đi lại chậm hơn, mất thăng bằng và tăng nguy cơ té ngã. Chỉ một lần ngã tưởng như không nghiêm trọng cũng có thể gây gãy cổ xương đùi, chấn thương đầu hoặc làm giảm khả năng tự sinh hoạt.",
      "Bác sĩ có thể đánh giá:",
      "Dáng đi và khả năng giữ thăng bằng.",
      "Sức cơ tay, chân.",
      "Mức độ đau và giới hạn vận động của các khớp.",
      "Tiền sử té ngã hoặc gãy xương.",
      "Nguy cơ loãng xương.",
      "Mức độ an toàn khi đứng lên, ngồi xuống và di chuyển.",
      "Đo mật độ xương bằng phương pháp DXA có thể được chỉ định cho người thuộc nhóm nguy cơ. Nhiều hướng dẫn quốc tế khuyến nghị tầm soát loãng xương cho phụ nữ từ 65 tuổi và phụ nữ sau mãn kinh trẻ hơn nếu có yếu tố nguy cơ. Đối với nam giới, quyết định đo mật độ xương thường được cá nhân hóa dựa trên thể trạng và tiền sử bệnh.",
      "Với người từ 65 tuổi có nguy cơ té ngã, các bài tập phù hợp nhằm tăng sức cơ và khả năng thăng bằng có thể góp phần phòng ngừa té ngã.",
      "6. Kiểm tra thị lực, thính lực và sức khỏe răng miệng",
      "Mắt nhìn kém hoặc tai nghe không rõ không chỉ gây bất tiện trong giao tiếp. Những vấn đề này còn có thể khiến người cao tuổi dễ vấp ngã, hiểu sai hướng dẫn dùng thuốc, ngại giao tiếp và dần thu mình khỏi các hoạt động gia đình.",
      "Gói khám nên quan tâm đến:",
      "Đo thị lực và kiểm tra các bệnh lý về mắt.",
      "Đánh giá thính lực khi người bệnh thường xuyên nghe nhầm hoặc phải mở âm lượng lớn.",
      "Khám răng, lợi và khả năng nhai.",
      "Kiểm tra tình trạng khô miệng hoặc đau khi ăn.",
      "Đánh giá sự phù hợp của kính mắt, máy trợ thính hoặc răng giả.",
      "Các bệnh thường gặp như đục thủy tinh thể, tăng nhãn áp, bệnh võng mạc do đái tháo đường hoặc giảm thính lực cần được phát hiện và theo dõi đúng chuyên khoa. Việc xử lý tốt các vấn đề về thị giác và thính giác cũng góp phần duy trì nhận thức và giảm nguy cơ tai nạn ở người lớn tuổi.",
      "7. Đánh giá trí nhớ, tâm lý và giấc ngủ",
      "Thỉnh thoảng quên tên một người hoặc quên nơi để đồ chưa chắc là dấu hiệu của sa sút trí tuệ. Tuy nhiên, nếu người cao tuổi thường xuyên quên việc vừa xảy ra, đi lạc ở nơi quen thuộc, dùng thuốc nhầm hoặc thay đổi tính cách rõ rệt thì gia đình nên đưa người bệnh đi kiểm tra.",
      "Bác sĩ có thể đánh giá:",
      "Trí nhớ và khả năng định hướng.",
      "Khả năng thực hiện các công việc hằng ngày.",
      "Biểu hiện trầm cảm, lo âu hoặc cô đơn.",
      "Chất lượng giấc ngủ.",
      "Tình trạng lú lẫn xuất hiện đột ngột.",
      "Những thay đổi về hành vi và cảm xúc.",
      "Suy giảm nhận thức có thể liên quan đến nhiều nguyên nhân như rối loạn giấc ngủ, trầm cảm, tác dụng của thuốc, thiếu vitamin, bệnh tuyến giáp hoặc bệnh lý thần kinh. Vì vậy, không nên vội cho rằng mọi biểu hiện hay quên đều là “lão hóa bình thường”. Việc đánh giá cần kết hợp thông tin từ cả người bệnh và người chăm sóc.",
      "8. Đánh giá dinh dưỡng và khả năng ăn uống",
      "Người cao tuổi có thể ăn ít do giảm vị giác, răng yếu, khó nuốt, bệnh tiêu hóa, tâm trạng buồn chán hoặc tác dụng của thuốc. Tình trạng sụt cân và thiếu dinh dưỡng kéo dài làm giảm sức cơ, giảm miễn dịch và khiến cơ thể hồi phục chậm hơn sau khi ốm.",
      "Trong quá trình khám, bác sĩ có thể kiểm tra:",
      "Cân nặng có giảm bất thường hay không.",
      "Khẩu phần ăn và lượng nước uống hằng ngày.",
      "Khả năng nhai, nuốt.",
      "Tình trạng táo bón hoặc chán ăn.",
      "Nguy cơ thiếu vitamin và khoáng chất.",
      "Mức độ vận động và khối lượng cơ.",
      "Việc bổ sung vitamin hoặc khoáng chất không nên thực hiện theo tâm lý “càng nhiều càng tốt”. Người bệnh chỉ nên bổ sung khi có nhu cầu phù hợp và được bác sĩ tư vấn, nhất là khi đang mắc bệnh thận, gan hoặc sử dụng thuốc chống đông.",
      "9. Tầm soát ung thư theo tuổi và yếu tố nguy cơ",
      "Người cao tuổi có thể được cân nhắc tầm soát một số bệnh ung thư thường gặp như ung thư đại trực tràng, vú, cổ tử cung, phổi, tuyến tiền liệt hoặc gan. Tuy nhiên, không có một danh sách xét nghiệm ung thư áp dụng giống nhau cho tất cả mọi người.",
      "Bác sĩ sẽ dựa trên:",
      "Tuổi và giới tính.",
      "Tiền sử gia đình.",
      "Tiền sử hút thuốc, uống rượu.",
      "Bệnh nền hiện có.",
      "Các kết quả tầm soát trước đó.",
      "Thể trạng và khả năng chịu đựng các bước kiểm tra tiếp theo.",
      "Lợi ích và nguy cơ của từng phương pháp.",
      "Chẳng hạn, người có tiền sử hút thuốc lâu năm có thể cần được đánh giá nguy cơ ung thư phổi. Người mắc viêm gan virus hoặc xơ gan có thể cần theo dõi ung thư gan. Trong khi đó, nội soi tiêu hóa hoặc chụp chiếu chỉ nên thực hiện theo chỉ định phù hợp, không nên làm tràn lan chỉ vì lo lắng.",
      "10. Rà soát lịch tiêm chủng",
      "Miễn dịch thường suy giảm theo tuổi, khiến người cao tuổi dễ gặp biến chứng nặng khi mắc các bệnh truyền nhiễm. Vì vậy, kiểm tra lịch tiêm chủng cũng là một phần cần thiết của khám sức khỏe định kỳ.",
      "Tùy độ tuổi, bệnh nền, lịch sử tiêm trước đây và hướng dẫn hiện hành, bác sĩ có thể tư vấn về các vaccine như:",
      "Cúm mùa.",
      "Phế cầu.",
      "COVID-19.",
      "Zona thần kinh.",
      "Uốn ván, bạch hầu và ho gà.",
      "Một số vaccine khác theo nguy cơ cá nhân.",
      "Lịch tiêm không nên được áp dụng máy móc. Người đang sốt, mắc bệnh cấp tính, suy giảm miễn dịch hoặc có tiền sử phản ứng với vaccine cần được bác sĩ đánh giá trước khi tiêm. Các hướng dẫn tiêm chủng dành cho người lớn cũng nhấn mạnh việc lựa chọn vaccine theo tuổi và tình trạng sức khỏe cụ thể.",
      "Có phải người cao tuổi nào cũng cần làm đầy đủ tất cả xét nghiệm?",
      "Câu trả lời là không.",
      "Một gói khám có quá nhiều xét nghiệm chưa chắc đã phù hợp hơn. Việc kiểm tra không có chỉ định có thể tạo ra kết quả bất thường không đáng kể, khiến người bệnh lo lắng và phải thực hiện thêm nhiều thủ thuật không cần thiết.",
      "Gói khám nên được chia thành hai nhóm:",
      "Hạng mục nền tảng thường gồm khám bác sĩ, đo huyết áp, đánh giá thể trạng, xét nghiệm máu và nước tiểu cơ bản, kiểm tra đường huyết, mỡ máu, chức năng gan và thận.",
      "Hạng mục chuyên sâu như điện tim, siêu âm tim, nội soi, chụp cắt lớp, đo mật độ xương hoặc xét nghiệm dấu ấn ung thư chỉ được lựa chọn khi có triệu chứng, bệnh nền hoặc yếu tố nguy cơ phù hợp.",
      "Nói một cách dễ hiểu, gói khám tốt không phải là gói có danh sách dài nhất mà là gói giúp bác sĩ tìm đúng vấn đề cần quan tâm.",
      "Người cao tuổi nên khám sức khỏe bao lâu một lần?",
      "Phần lớn người cao tuổi nên được khám sức khỏe định kỳ ít nhất mỗi năm một lần. Người đang mắc bệnh mạn tính, sử dụng nhiều thuốc hoặc vừa có thay đổi về sức khỏe có thể cần tái khám thường xuyên hơn theo lịch của bác sĩ.",
      "Không nên chờ đến lịch khám định kỳ nếu xuất hiện các dấu hiệu như:",
      "Đau ngực, khó thở hoặc vã mồ hôi bất thường.",
      "Yếu hoặc tê đột ngột một bên cơ thể.",
      "Nói khó, méo miệng hoặc lú lẫn đột ngột.",
      "Ngất, té ngã hoặc chấn thương đầu.",
      "Sốt cao, lơ mơ hoặc bỏ ăn uống.",
      "Đi ngoài ra máu, nôn ra máu.",
      "Sụt cân nhanh không rõ nguyên nhân.",
      "Đau kéo dài hoặc ngày càng tăng.",
      "Tiểu ít, phù chân hoặc khó thở khi nằm.",
      "Những trường hợp này cần được đưa đến cơ sở y tế sớm, thay vì chờ đến ngày khám tổng quát."
    ],
    "sections": [
      {
        "heading": "Khám sức khỏe người cao tuổi tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, người cao tuổi có thể được thăm khám và đánh giá sức khỏe theo hướng đa chuyên khoa. Tùy vào độ tuổi, bệnh nền, triệu chứng và khả năng vận động, bác sĩ sẽ tư vấn các hạng mục kiểm tra phù hợp thay vì áp dụng một danh sách xét nghiệm giống nhau cho mọi người.",
          "Sự phối hợp giữa khám Nội tổng quát, Tim mạch, Nội tiết, Cơ xương khớp, Mắt, Tai Mũi Họng, Chẩn đoán hình ảnh và Xét nghiệm giúp quá trình kiểm tra được thực hiện thuận tiện hơn. Người bệnh cũng được tư vấn về thuốc đang sử dụng, dinh dưỡng, vận động, tiêm chủng và kế hoạch theo dõi sau khi có kết quả.",
          "Kết luận",
          "Khám sức khỏe người cao tuổi cần nhìn rộng hơn những con số trên phiếu xét nghiệm. Bên cạnh tim mạch, đường huyết, gan và thận, gia đình cũng nên quan tâm đến trí nhớ, tâm trạng, dinh dưỡng, thị lực, thính lực, nguy cơ loãng xương và khả năng tự sinh hoạt của người thân.",
          "Kiểm tra đúng hạng mục và theo dõi đều đặn giúp phát hiện sớm bất thường, kiểm soát bệnh mạn tính và duy trì chất lượng sống. Khi lựa chọn gói khám, gia đình nên cung cấp đầy đủ tiền sử bệnh, danh sách thuốc và những thay đổi gần đây để bác sĩ xây dựng kế hoạch kiểm tra phù hợp nhất.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "met-moi-keo-dai-nen-kiem-tra-nhung-chi-so-nao": {
    "sourceFile": "44. Mệt mỏi kéo dài nên kiểm tra những chỉ số nào.docx",
    "title": "Mệt mỏi kéo dài: Nên kiểm tra những chỉ số nào?",
    "excerpt": "Ai cũng có lúc cảm thấy mệt sau một ngày làm việc căng thẳng, một đêm thiếu ngủ hoặc một tuần lịch trình dày đặc. Thông thường, cơ thể sẽ dần hồi phục sau khi được nghỉ ngơi và ăn uống đầy đủ.",
    "intro": [
      "Ai cũng có lúc cảm thấy mệt sau một ngày làm việc căng thẳng, một đêm thiếu ngủ hoặc một tuần lịch trình dày đặc. Thông thường, cơ thể sẽ dần hồi phục sau khi được nghỉ ngơi và ăn uống đầy đủ.",
      "Tuy nhiên, nếu tình trạng mệt mỏi kéo dài, ngủ đủ vẫn không thấy khỏe, thường xuyên thiếu năng lượng hoặc khó hoàn thành những công việc quen thuộc, bạn không nên chỉ đổ lỗi cho “cơ địa yếu”. Mệt mỏi là một triệu chứng có thể liên quan đến thiếu máu, rối loạn tuyến giáp, bất thường đường huyết, bệnh gan thận, rối loạn giấc ngủ, sức khỏe tinh thần và nhiều nguyên nhân khác.",
      "Khi nào được xem là mệt mỏi kéo dài?",
      "Mệt mỏi không hoàn toàn giống với cảm giác buồn ngủ. Người buồn ngủ thường muốn ngủ và có thể tỉnh táo hơn sau một giấc ngủ. Trong khi đó, người bị mệt mỏi có thể cảm thấy cạn năng lượng, nặng nề, thiếu sức sống hoặc khó tập trung ngay cả khi đã nghỉ ngơi.",
      "Bạn nên chú ý nếu tình trạng mệt mỏi:",
      "Kéo dài nhiều ngày hoặc nhiều tuần.",
      "Không cải thiện rõ sau khi ngủ đủ.",
      "Làm giảm hiệu quả học tập hoặc làm việc.",
      "Khiến bạn không còn muốn vận động hay tham gia các hoạt động thường ngày.",
      "Đi kèm chóng mặt, khó thở, tim đập nhanh hoặc đau đầu.",
      "Đi kèm thay đổi cân nặng, ăn uống, giấc ngủ hoặc tâm trạng.",
      "Xuất hiện sau một đợt nhiễm bệnh và không phục hồi như dự kiến.",
      "Không có một xét nghiệm duy nhất có thể tìm ra tất cả nguyên nhân gây mệt mỏi. Bác sĩ thường cần hỏi kỹ về triệu chứng, thói quen sinh hoạt, thuốc đang sử dụng, tiền sử bệnh và khám trực tiếp trước khi lựa chọn xét nghiệm phù hợp.",
      "Mệt mỏi kéo dài có thể do nguyên nhân nào?",
      "Mệt mỏi đôi khi chỉ liên quan đến việc ngủ không đủ, làm việc quá sức, ăn uống thất thường hoặc căng thẳng kéo dài. Nhưng triệu chứng này cũng có thể xuất hiện khi cơ thể đang gặp một số vấn đề sức khỏe như:",
      "Thiếu máu hoặc thiếu sắt.",
      "Suy giáp hoặc cường giáp.",
      "Đái tháo đường hoặc rối loạn đường huyết.",
      "Bệnh gan, bệnh thận hoặc rối loạn điện giải.",
      "Thiếu vitamin B12, folate hoặc vitamin D.",
      "Nhiễm trùng hoặc tình trạng viêm kéo dài.",
      "Ngưng thở khi ngủ, mất ngủ hoặc chất lượng giấc ngủ kém.",
      "Lo âu, trầm cảm hoặc căng thẳng tâm lý.",
      "Tác dụng không mong muốn của thuốc.",
      "Các bệnh mạn tính về tim, phổi, miễn dịch hoặc tiêu hóa.",
      "Tình trạng hậu nhiễm trùng, bao gồm một số trường hợp hậu COVID-19.",
      "Vì danh sách nguyên nhân khá rộng, việc làm thật nhiều xét nghiệm ngay từ đầu chưa chắc đã cần thiết. Quan trọng hơn là lựa chọn đúng nhóm chỉ số dựa trên biểu hiện cụ thể của mỗi người.",
      "Mệt mỏi kéo dài nên kiểm tra những chỉ số nào?",
      "1. Công thức máu toàn bộ",
      "Công thức máu toàn bộ, thường được ghi là CBC, là một trong những xét nghiệm cơ bản khi đánh giá tình trạng mệt mỏi.",
      "Xét nghiệm này cung cấp thông tin về:",
      "Số lượng hồng cầu.",
      "Hemoglobin, hay huyết sắc tố.",
      "Hematocrit, tỷ lệ thể tích hồng cầu trong máu.",
      "Kích thước và đặc điểm của hồng cầu.",
      "Số lượng bạch cầu.",
      "Số lượng tiểu cầu.",
      "Hemoglobin thấp có thể gợi ý tình trạng thiếu máu. Khi cơ thể không có đủ hồng cầu khỏe mạnh để vận chuyển oxy, người bệnh có thể cảm thấy mệt, chóng mặt, da nhợt, hồi hộp hoặc hụt hơi khi vận động. Công thức máu cũng có thể cung cấp manh mối về nhiễm trùng, bất thường tế bào máu hoặc một số vấn đề sức khỏe khác.",
      "2. Ferritin và các chỉ số đánh giá sắt",
      "Một người có thể thiếu sắt trước khi xuất hiện thiếu máu rõ trên công thức máu. Vì vậy, nếu thường xuyên mệt mỏi, rụng tóc, chóng mặt, da nhợt, chân bồn chồn hoặc có kinh nguyệt nhiều, bác sĩ có thể chỉ định kiểm tra thêm:",
      "Ferritin.",
      "Sắt huyết thanh.",
      "Transferrin hoặc khả năng gắn sắt.",
      "Độ bão hòa transferrin.",
      "Ferritin là protein dự trữ sắt trong cơ thể. Chỉ số này giúp bác sĩ đánh giá lượng sắt dự trữ, nhưng cần được đọc cùng tình trạng viêm và các kết quả xét nghiệm khác vì ferritin có thể thay đổi trong một số bệnh lý.",
      "Không nên tự uống viên sắt chỉ vì cảm thấy mệt. Bổ sung không đúng nguyên nhân có thể không cải thiện triệu chứng và đôi khi gây táo bón, khó chịu tiêu hóa hoặc làm che lấp vấn đề thực sự.",
      "3. Đường huyết và HbA1c",
      "Đường huyết quá cao hoặc quá thấp đều có thể khiến cơ thể mệt mỏi, thiếu năng lượng, khó tập trung hoặc choáng váng.",
      "Tùy từng trường hợp, bác sĩ có thể chỉ định:",
      "Đường huyết lúc đói.",
      "Đường huyết ngẫu nhiên.",
      "HbA1c.",
      "Nghiệm pháp dung nạp glucose khi cần thiết.",
      "HbA1c phản ánh mức đường huyết trung bình trong khoảng ba tháng gần đây. Xét nghiệm này có thể được sử dụng để hỗ trợ phát hiện tiền đái tháo đường, đái tháo đường type 2 hoặc theo dõi người đã được chẩn đoán bệnh.",
      "Những người mệt mỏi kèm khát nước nhiều, tiểu nhiều, sụt cân không chủ ý, nhìn mờ hoặc vết thương lâu lành nên đi khám sớm.",
      "4. Chức năng tuyến giáp",
      "Tuyến giáp tham gia điều hòa quá trình sử dụng năng lượng của cơ thể. Khi tuyến giáp hoạt động quá yếu hoặc quá mạnh, người bệnh đều có thể cảm thấy mệt.",
      "Các xét nghiệm thường được cân nhắc gồm:",
      "TSH.",
      "FT4 hoặc T4.",
      "T3 trong một số trường hợp.",
      "Kháng thể tuyến giáp nếu nghi ngờ bệnh tuyến giáp tự miễn.",
      "Suy giáp thường đi kèm mệt mỏi, sợ lạnh, tăng cân, táo bón, da khô và phản ứng chậm. Cường giáp có thể gây mệt cùng hồi hộp, run tay, mất ngủ, dễ nóng, ra nhiều mồ hôi hoặc giảm cân. Tuy nhiên, không thể chẩn đoán bệnh tuyến giáp chỉ dựa trên triệu chứng; kết quả xét nghiệm cần được bác sĩ đánh giá cùng tiền sử và khám lâm sàng.",
      "5. Chức năng gan",
      "Gan tham gia chuyển hóa dinh dưỡng, thuốc và nhiều chất trong cơ thể. Một số vấn đề về gan có thể biểu hiện khá kín đáo, đôi khi chỉ là mệt mỏi, chán ăn hoặc suy giảm sức khỏe chung.",
      "Nhóm chỉ số chức năng gan có thể bao gồm:",
      "AST.",
      "ALT.",
      "GGT.",
      "Bilirubin.",
      "Albumin.",
      "Phosphatase kiềm, hay ALP.",
      "Kết quả bất thường không tự động đồng nghĩa với một bệnh gan cụ thể. Các chỉ số này có thể bị ảnh hưởng bởi thuốc, rượu bia, bệnh đường mật, tổn thương cơ hoặc nhiều yếu tố khác, vì vậy thường cần được phân tích kết hợp.",
      "Người mệt mỏi kèm vàng da, vàng mắt, nước tiểu sẫm, ngứa nhiều, đau vùng hạ sườn phải hoặc bụng to nên đi khám sớm.",
      "6. Chức năng thận và điện giải",
      "Thận có nhiệm vụ lọc chất thải, điều hòa nước và cân bằng nhiều chất điện giải. Khi chức năng thận suy giảm hoặc nồng độ điện giải bất thường, người bệnh có thể mệt, yếu cơ, buồn nôn, phù hoặc thay đổi lượng nước tiểu.",
      "Một số chỉ số thường được xem xét gồm:",
      "Creatinine.",
      "Ure máu.",
      "Mức lọc cầu thận ước tính, hay eGFR.",
      "Natri.",
      "Kali.",
      "Canxi.",
      "Xét nghiệm nước tiểu.",
      "Albumin hoặc tỷ lệ albumin/creatinine trong nước tiểu khi có nguy cơ bệnh thận.",
      "eGFR được sử dụng để ước tính khả năng lọc máu của thận. Xét nghiệm albumin trong nước tiểu giúp phát hiện protein rò rỉ qua thận, đặc biệt có ý nghĩa ở người mắc đái tháo đường, tăng huyết áp hoặc có nguy cơ bệnh thận.",
      "7. Vitamin B12 và folate",
      "Vitamin B12 và folate cần thiết cho quá trình tạo máu và hoạt động của hệ thần kinh. Thiếu các vitamin này có thể gây mệt mỏi, thiếu máu, khó tập trung, tê bì tay chân hoặc cảm giác mất thăng bằng.",
      "Bác sĩ có thể cân nhắc xét nghiệm vitamin B12 hoặc folate nếu người bệnh:",
      "Ăn chay nghiêm ngặt hoặc chế độ ăn thiếu đa dạng.",
      "Có bệnh lý dạ dày, ruột hoặc kém hấp thu.",
      "Đã phẫu thuật dạ dày.",
      "Đang sử dụng một số thuốc kéo dài.",
      "Có thiếu máu hồng cầu to.",
      "Có tê bì, giảm cảm giác hoặc triệu chứng thần kinh.",
      "Trong một số trường hợp, xét nghiệm methylmalonic acid có thể được sử dụng để hỗ trợ xác định thiếu vitamin B12.",
      "8. Vitamin D",
      "Thiếu vitamin D nặng có thể ảnh hưởng đến xương và cơ, gây đau mỏi hoặc yếu cơ ở một số người. Tuy nhiên, xét nghiệm vitamin D không phải là xét nghiệm bắt buộc cho tất cả trường hợp mệt mỏi.",
      "Bác sĩ thường cân nhắc kiểm tra khi người bệnh có yếu tố nguy cơ, biểu hiện về xương cơ, ít tiếp xúc ánh nắng, kém hấp thu hoặc có bệnh lý ảnh hưởng đến chuyển hóa vitamin D.",
      "9. Chỉ số viêm khi có biểu hiện phù hợp",
      "Nếu mệt mỏi đi kèm sốt kéo dài, đau khớp, sụt cân, nổi ban hoặc các dấu hiệu nghi ngờ viêm và bệnh tự miễn, bác sĩ có thể chỉ định:",
      "CRP.",
      "Tốc độ máu lắng, hay ESR.",
      "Các xét nghiệm miễn dịch chuyên sâu tùy biểu hiện.",
      "CRP và ESR có thể cho biết cơ thể đang có phản ứng viêm, nhưng không xác định chính xác nguyên nhân nằm ở đâu. Vì vậy, đây không phải nhóm xét nghiệm nên tự thực hiện đại trà.",
      "10. Xét nghiệm nước tiểu và thử thai khi cần thiết",
      "Xét nghiệm nước tiểu có thể giúp phát hiện nhiễm trùng đường tiết niệu, bất thường về đường, protein, máu hoặc dấu hiệu liên quan đến bệnh thận.",
      "Đối với phụ nữ trong độ tuổi sinh sản bị chậm kinh hoặc có khả năng mang thai, thử thai cũng có thể là một bước cần thiết. Mệt mỏi là biểu hiện thường gặp trong thai kỳ, nhưng người mang thai vẫn cần được kiểm tra nếu triệu chứng quá mức hoặc đi kèm chóng mặt, khó thở, đau bụng hay ra máu.",
      "Có cần làm tất cả các xét nghiệm cùng lúc không?",
      "Không phải ai mệt mỏi cũng cần kiểm tra toàn bộ các chỉ số kể trên.",
      "Ví dụ:",
      "Người có kinh nguyệt nhiều có thể được ưu tiên kiểm tra công thức máu và sắt.",
      "Người tăng cân, sợ lạnh và táo bón có thể cần đánh giá tuyến giáp.",
      "Người khát nhiều, tiểu nhiều và sụt cân nên kiểm tra đường huyết.",
      "Người ngáy lớn, hay tỉnh giấc và buồn ngủ ban ngày có thể cần đánh giá rối loạn giấc ngủ thay vì chỉ làm xét nghiệm máu.",
      "Người mệt mỏi kèm buồn bã, mất hứng thú hoặc lo âu kéo dài cần được đánh giá cả sức khỏe tinh thần.",
      "Xét nghiệm chỉ là một phần của quá trình chẩn đoán. Một kết quả nằm ngoài khoảng tham chiếu chưa chắc đã đồng nghĩa với bệnh, trong khi một số bệnh vẫn có thể tồn tại dù xét nghiệm cơ bản chưa phát hiện bất thường.",
      "Trước khi đi khám nên chuẩn bị gì?",
      "Để bác sĩ dễ tìm nguyên nhân, bạn có thể ghi lại:",
      "Tình trạng mệt bắt đầu từ khi nào.",
      "Mệt liên tục hay xuất hiện theo từng thời điểm.",
      "Ngủ bao nhiêu giờ mỗi ngày.",
      "Có ngáy, ngưng thở khi ngủ hoặc hay thức giấc không.",
      "Cân nặng và khẩu vị có thay đổi không.",
      "Có sốt, đau, khó thở, hồi hộp hoặc chóng mặt không.",
      "Chu kỳ kinh nguyệt và lượng máu kinh.",
      "Các loại thuốc, thực phẩm bổ sung đang sử dụng.",
      "Tiền sử nhiễm bệnh gần đây.",
      "Mức độ căng thẳng và thay đổi tâm trạng.",
      "Không phải xét nghiệm nào cũng yêu cầu nhịn ăn. Bạn nên hỏi trước cơ sở y tế, đặc biệt khi được chỉ định kiểm tra đường huyết hoặc một nhóm xét nghiệm chuyển hóa.",
      "Khi nào mệt mỏi cần đi khám sớm?",
      "Bạn nên sắp xếp đi khám nếu mệt mỏi kéo dài nhiều ngày hoặc nhiều tuần, thường xuyên tái diễn, ngày càng nặng hoặc ảnh hưởng rõ đến sinh hoạt.",
      "Cần đến cơ sở y tế ngay nếu mệt mỏi đi kèm:",
      "Đau hoặc tức ngực.",
      "Khó thở rõ rệt.",
      "Tim đập rất nhanh hoặc không đều.",
      "Choáng, ngất hoặc lú lẫn.",
      "Yếu liệt một bên cơ thể, méo miệng hoặc nói khó.",
      "Nôn ra máu hoặc đi ngoài phân đen.",
      "Sốt cao kéo dài.",
      "Đau bụng dữ dội.",
      "Sụt cân nhanh không rõ nguyên nhân.",
      "Ý nghĩ làm tổn thương bản thân.",
      "Những biểu hiện này có thể liên quan đến tình trạng cần được đánh giá và xử trí khẩn cấp."
    ],
    "sections": [
      {
        "heading": "Đừng chỉ “nạp thêm cà phê” khi cơ thể liên tục báo mệt",
        "paragraphs": [
          "Một vài ngày mệt mỏi có thể được cải thiện bằng nghỉ ngơi, ngủ đủ, ăn uống đều đặn và giảm căng thẳng. Nhưng khi cơ thể liên tục rơi vào trạng thái thiếu năng lượng, việc cố gắng làm việc nhiều hơn hoặc dùng chất kích thích để tỉnh táo chỉ có thể che lấp triệu chứng tạm thời.",
          "Người bị mệt mỏi kéo dài có thể đến Bệnh viện Đa khoa Hồng Phúc để được bác sĩ khai thác triệu chứng, khám sức khỏe và lựa chọn các xét nghiệm cần thiết. Tùy từng trường hợp, người bệnh có thể được kiểm tra công thức máu, đường huyết, chức năng tuyến giáp, gan, thận, vi chất hoặc các chỉ số chuyên sâu khác.",
          "Xác định đúng nguyên nhân sẽ giúp việc chăm sóc và điều trị đi đúng hướng, thay vì tự bổ sung sắt, vitamin hoặc sử dụng thuốc khi chưa biết cơ thể thực sự đang thiếu gì.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "chup-mri-ct-va-x-quang-khac-nhau-the-nao": {
    "sourceFile": "45. Chụp MRI, CT và X-quang khác nhau thế nào.docx",
    "title": "Chụp MRI, CT và X-quang khác nhau thế nào?",
    "excerpt": "Khi được bác sĩ chỉ định chẩn đoán hình ảnh, nhiều người thường băn khoăn: “Tại sao không chụp MRI cho rõ nhất?”, “CT có phải là X-quang nâng cao không?” hay “Chụp nhiều có ảnh hưởng đến sức khỏe không?”.",
    "intro": [
      "Khi được bác sĩ chỉ định chẩn đoán hình ảnh, nhiều người thường băn khoăn: “Tại sao không chụp MRI cho rõ nhất?”, “CT có phải là X-quang nâng cao không?” hay “Chụp nhiều có ảnh hưởng đến sức khỏe không?”.",
      "Trên thực tế, X-quang, CT và MRI đều giúp quan sát các cấu trúc bên trong cơ thể, nhưng mỗi phương pháp hoạt động theo một nguyên lý khác nhau và có thế mạnh riêng. Không có kỹ thuật nào tốt nhất trong mọi trường hợp. Phương pháp phù hợp phụ thuộc vào bộ phận cần khảo sát, bệnh lý nghi ngờ, mức độ cấp cứu và tình trạng sức khỏe của từng người.",
      "Chẩn đoán hình ảnh là gì?",
      "Chẩn đoán hình ảnh là việc sử dụng các thiết bị chuyên dụng để tạo ra hình ảnh của xương, cơ quan, mô mềm, mạch máu và những cấu trúc khác bên trong cơ thể.",
      "Những hình ảnh này có thể giúp bác sĩ:",
      "Phát hiện tổn thương hoặc bệnh lý.",
      "Xác định vị trí và mức độ bất thường.",
      "Đánh giá chấn thương.",
      "Theo dõi diễn biến của bệnh.",
      "Kiểm tra hiệu quả điều trị.",
      "Hỗ trợ định hướng phẫu thuật hoặc thủ thuật.",
      "Hướng dẫn sinh thiết, dẫn lưu và một số can thiệp khác.",
      "X-quang, chụp cắt lớp vi tính CT và chụp cộng hưởng từ MRI là ba kỹ thuật chẩn đoán hình ảnh phổ biến. Tuy nhiên, hình ảnh do mỗi kỹ thuật tạo ra không giống nhau."
    ],
    "sections": [
      {
        "heading": "So sánh nhanh X-quang, CT và MRI",
        "paragraphs": [
          "Thời gian, chi phí và chất lượng hình ảnh thực tế còn phụ thuộc vào bộ phận khảo sát, loại thiết bị, quy trình chụp và việc có sử dụng thuốc tương phản hay không.",
          "Chụp X-quang là gì?",
          "X-quang, còn gọi là chụp radiography, sử dụng một lượng nhỏ tia X đi qua vùng cơ thể cần khảo sát. Các mô hấp thụ tia X ở mức độ khác nhau, từ đó tạo thành hình ảnh trên đầu thu kỹ thuật số.",
          "Xương hấp thụ tia X nhiều nên thường hiện sáng. Không khí trong phổi hấp thụ ít hơn nên thường hiện tối. Các mô mềm nằm ở mức trung gian và có thể khó phân biệt rõ nếu chúng chồng lên nhau.",
          "X-quang thường tạo ra hình ảnh hai chiều, giống như nhìn một vật thể ba chiều được “ép” lên một mặt phẳng. Vì vậy, các cấu trúc nằm trước và sau nhau có thể chồng hình.",
          "X-quang thường được chỉ định khi nào?",
          "X-quang đặc biệt hữu ích trong việc:",
          "Phát hiện gãy xương hoặc trật khớp.",
          "Đánh giá biến dạng, thoái hóa và một số bất thường của xương.",
          "Chụp ngực khi có ho kéo dài, khó thở, sốt hoặc đau ngực.",
          "Hỗ trợ phát hiện viêm phổi, tràn khí hoặc tràn dịch màng phổi.",
          "Quan sát một số dị vật.",
          "Kiểm tra vị trí của một số ống, dây hoặc thiết bị y tế.",
          "Chụp răng và vùng hàm mặt.",
          "Chụp X-quang xương là một trong những cách nhanh và thuận tiện để đánh giá gãy xương, tổn thương và bất thường khớp. X-quang ngực thường được sử dụng như xét nghiệm hình ảnh ban đầu khi người bệnh có triệu chứng hô hấp hoặc tổn thương vùng ngực."
        ]
      },
      {
        "heading": "Ưu điểm của X-quang",
        "paragraphs": [
          "Thực hiện nhanh.",
          "Phổ biến và dễ tiếp cận.",
          "Phù hợp với nhiều tình huống cấp cứu.",
          "Chi phí thường thấp hơn CT và MRI.",
          "Liều tia thường thấp hơn chụp CT, dù mức độ cụ thể phụ thuộc vùng chụp và kỹ thuật sử dụng.",
          "Một lần chụp X-quang thông thường thường chỉ mất vài phút. Toàn bộ quá trình chụp ngực hoặc bụng, bao gồm chỉnh tư thế và kiểm tra hình ảnh, thường hoàn thành trong khoảng 15 phút."
        ]
      },
      {
        "heading": "Hạn chế của X-quang",
        "paragraphs": [
          "X-quang không thể hiện rõ nhiều loại mô mềm. Những bất thường nhỏ, tổn thương sâu hoặc cấu trúc bị che khuất có thể không được nhìn thấy trên phim thông thường.",
          "Do hình ảnh có hiện tượng chồng lớp, bác sĩ đôi khi cần chụp thêm tư thế khác hoặc chỉ định CT, MRI hay siêu âm để đánh giá kỹ hơn.",
          "Chụp CT là gì?",
          "CT là viết tắt của Computed Tomography, thường được gọi là chụp cắt lớp vi tính. Máy CT cũng sử dụng tia X, nhưng thay vì chỉ chụp một hình chiếu, hệ thống phát tia và đầu thu quay quanh cơ thể để ghi nhận nhiều dữ liệu từ các góc khác nhau.",
          "Máy tính sau đó xử lý dữ liệu và tạo thành những hình ảnh lát cắt. Có thể hình dung CT giống như “cắt” cơ thể thành nhiều lát mỏng để bác sĩ quan sát từng lớp, thay vì nhìn tất cả cấu trúc chồng lên nhau như trên phim X-quang.",
          "CT cho hình ảnh chi tiết hơn X-quang thông thường và có thể quan sát xương, phổi, cơ quan nội tạng, mô mềm và mạch máu trong cùng một lần khảo sát.",
          "CT thường được chỉ định khi nào?",
          "CT có nhiều ứng dụng, đặc biệt trong các tình huống cần hình ảnh nhanh như:",
          "Chấn thương đầu, ngực, bụng hoặc vùng chậu.",
          "Nghi ngờ xuất huyết nội sọ.",
          "Nghi ngờ tổn thương nội tạng hoặc chảy máu trong.",
          "Đánh giá đột quỵ trong một số giai đoạn.",
          "Phát hiện tổn thương phổi hoặc nốt phổi.",
          "Khảo sát sỏi tiết niệu.",
          "Đánh giá viêm ruột thừa và một số nguyên nhân đau bụng cấp.",
          "Khảo sát xương phức tạp.",
          "Đánh giá khối u, hạch hoặc tình trạng di căn.",
          "Chụp mạch máu bằng CT.",
          "Hướng dẫn sinh thiết hoặc dẫn lưu.",
          "Trong cấp cứu, CT có lợi thế lớn nhờ tốc độ nhanh và khả năng phát hiện chấn thương, tổn thương cơ quan hoặc xuất huyết. CT sọ não cũng cung cấp nhiều thông tin hơn X-quang thông thường trong đánh giá chấn thương đầu, đột quỵ và các bệnh lý nội sọ."
        ]
      },
      {
        "heading": "Ưu điểm của CT",
        "paragraphs": [
          "Hình ảnh chi tiết hơn X-quang.",
          "Chụp nhanh, phù hợp với cấp cứu.",
          "Quan sát được xương, phổi, mô mềm và mạch máu.",
          "Ít nhạy với chuyển động hơn MRI.",
          "Có thể tái tạo hình ảnh theo nhiều mặt phẳng.",
          "Phù hợp với người khó nằm yên lâu.",
          "Thiết bị cấy ghép kim loại thường không ngăn cản việc chụp CT.",
          "Thời gian máy thực sự thu nhận hình ảnh có thể rất ngắn. Tùy loại khảo sát và khâu chuẩn bị, toàn bộ quy trình CT thường hoàn thành trong khoảng 30 phút; một lần CT đầu thường mất khoảng 10 phút."
        ]
      },
      {
        "heading": "Hạn chế của CT",
        "paragraphs": [
          "CT sử dụng tia X nên người bệnh có tiếp xúc với tia xạ ion hóa. Liều tia của CT thường cao hơn chụp X-quang thông thường, nhưng thay đổi đáng kể theo vùng chụp, số lần khảo sát, thiết bị và thông số kỹ thuật.",
          "Nguy cơ từ một lần chụp được chỉ định hợp lý thường nhỏ so với lợi ích chẩn đoán. Tuy nhiên, CT không nên được thực hiện chỉ để “kiểm tra cho yên tâm” khi không có chỉ định, nhất là khi người bệnh đã chụp nhiều lần hoặc là trẻ nhỏ.",
          "Một số mô mềm ở não, tủy sống, khớp và các cơ quan vùng chậu có thể được đánh giá rõ hơn bằng MRI. Vì vậy, CT chi tiết hơn X-quang không đồng nghĩa với việc CT luôn thay thế được MRI.",
          "Chụp MRI là gì?",
          "MRI là viết tắt của Magnetic Resonance Imaging, hay chụp cộng hưởng từ.",
          "MRI không sử dụng tia X. Thiết bị dùng từ trường mạnh, năng lượng sóng vô tuyến và hệ thống máy tính để tạo hình ảnh chi tiết của các mô và cơ quan bên trong cơ thể. Hình ảnh có thể được tái tạo theo nhiều mặt phẳng khác nhau.",
          "MRI có khả năng phân biệt tốt giữa các loại mô mềm. Vì vậy, phương pháp này thường được sử dụng khi bác sĩ cần quan sát kỹ não, tủy sống, dây thần kinh, cơ, dây chằng, sụn, gân và nhiều cơ quan nội tạng.",
          "MRI thường được chỉ định khi nào?",
          "MRI có thể được sử dụng để khảo sát:",
          "Não và các dây thần kinh sọ.",
          "Tủy sống và cột sống.",
          "Thoát vị đĩa đệm.",
          "Dây chằng, gân, cơ và sụn khớp.",
          "Chấn thương đầu gối, vai, cổ tay hoặc cổ chân.",
          "Khối u và tổn thương mô mềm.",
          "Gan, mật, tụy và các cơ quan vùng chậu.",
          "Tử cung, buồng trứng và tuyến tiền liệt.",
          "Tim và mạch máu trong một số trường hợp.",
          "Tủy xương.",
          "Một số bệnh viêm, nhiễm trùng hoặc bệnh lý thần kinh.",
          "MRI đặc biệt phù hợp khi cần phân biệt mô lành với mô bất thường hoặc đánh giá những tổn thương quá kín đáo trên X-quang. Não, tủy sống, dây thần kinh, cơ, dây chằng và gân thường được thể hiện rõ hơn trên MRI so với X-quang thông thường và trong nhiều trường hợp so với CT."
        ]
      },
      {
        "heading": "Ưu điểm của MRI",
        "paragraphs": [
          "Không sử dụng tia xạ ion hóa.",
          "Cho hình ảnh mô mềm có độ tương phản cao.",
          "Quan sát được nhiều mặt phẳng.",
          "Phù hợp với nhiều bệnh lý thần kinh và cơ xương khớp.",
          "Có thể đánh giá mạch máu và một số chức năng của mô bằng các kỹ thuật chuyên biệt.",
          "Hữu ích khi cần theo dõi nhiều lần mà muốn hạn chế tiếp xúc với tia X."
        ]
      },
      {
        "heading": "Hạn chế của MRI",
        "paragraphs": [
          "MRI thường mất nhiều thời gian hơn CT và X-quang. Phần lớn khảo sát kéo dài khoảng 15–45 phút; một số quy trình có thể kéo dài 30–60 phút hoặc lâu hơn tùy vùng chụp và số chuỗi hình ảnh cần thực hiện.",
          "Trong thời gian chụp, người bệnh phải nằm tương đối yên. Cử động có thể làm hình ảnh bị mờ và phải chụp lại. Máy phát ra tiếng gõ hoặc tiếng đập khá lớn, nhưng người bệnh sẽ được cung cấp dụng cụ bảo vệ tai.",
          "Khoang máy có thể khiến người sợ không gian kín cảm thấy căng thẳng. Người bệnh nên báo trước nếu từng hoảng sợ khi ở nơi kín, khó nằm yên hoặc đang có đau nhiều để nhân viên y tế có phương án hỗ trợ.",
          "Đặc biệt, từ trường mạnh có thể tương tác với một số vật kim loại hoặc thiết bị cấy ghép. Không phải cứ có vật kim loại trong cơ thể là không được chụp MRI, nhưng mức độ an toàn phải được kiểm tra chính xác trước khi vào phòng chụp.",
          "MRI có phải lúc nào cũng tốt hơn CT và X-quang không?",
          "Không. MRI cho hình ảnh mô mềm rất tốt nhưng không phải lựa chọn tối ưu trong mọi tình huống.",
          "Ví dụ:",
          "Nghi gãy xương đơn giản: X-quang thường là phương pháp đầu tiên.",
          "Chấn thương nặng, cần kiểm tra nhanh: CT thường phù hợp hơn.",
          "Nghi xuất huyết não cấp: CT có thể được ưu tiên nhờ tốc độ.",
          "Tổn thương dây chằng đầu gối: MRI thường cung cấp nhiều thông tin hơn.",
          "Đau ngực, ho hoặc sốt: X-quang ngực có thể là khảo sát ban đầu.",
          "Nghi tổn thương tủy sống hoặc dây thần kinh: MRI thường có ưu thế.",
          "Cần khảo sát phổi chi tiết: CT thường rõ hơn X-quang và thường phù hợp hơn MRI.",
          "Người không thể nằm yên lâu: CT có thể thực tế hơn MRI.",
          "Nói một cách dễ hiểu, phương pháp “mạnh” nhất không nhất thiết là phương pháp “đúng” nhất. Bác sĩ cần lựa chọn kỹ thuật có khả năng trả lời câu hỏi chẩn đoán với mức độ an toàn, thời gian và chi phí hợp lý.",
          "X-quang và CT có nguy hiểm vì sử dụng tia X không?",
          "Tia X và CT đều sử dụng tia xạ ion hóa. Tuy nhiên, mức tia không giống nhau giữa các kỹ thuật và giữa từng vùng cơ thể.",
          "X-quang thông thường thường sử dụng liều thấp hơn CT. CT cần thu nhận nhiều hình ảnh nên liều tia thường cao hơn, đổi lại bác sĩ nhận được thông tin chi tiết hơn. MRI không sử dụng tia xạ ion hóa.",
          "Mục tiêu trong chẩn đoán hình ảnh là sử dụng mức tia thấp nhất có thể nhưng vẫn tạo được hình ảnh đủ chất lượng để chẩn đoán. Khi CT hoặc X-quang được bác sĩ chỉ định hợp lý, lợi ích phát hiện bệnh thường lớn hơn nguy cơ tiềm ẩn từ tia xạ.",
          "Người bệnh không nên tự từ chối một xét nghiệm cần thiết chỉ vì lo ngại tia X. Ngược lại, cũng không nên tự yêu cầu CT toàn thân hoặc chụp lặp lại khi chưa có đánh giá chuyên môn.",
          "Thuốc cản quang và thuốc tương phản có giống nhau không?",
          "Một số lần chụp không cần tiêm thuốc. Trong những trường hợp khác, bác sĩ có thể sử dụng thuốc để làm nổi bật mạch máu, khối u, tình trạng viêm hoặc ranh giới giữa các mô."
        ]
      },
      {
        "heading": "Thuốc cản quang trong CT",
        "paragraphs": [
          "CT thường sử dụng thuốc cản quang chứa iod. Thuốc có thể được tiêm vào tĩnh mạch hoặc sử dụng qua đường uống tùy mục đích khảo sát.",
          "Khi tiêm, người bệnh có thể cảm thấy nóng lan trong người hoặc có vị kim loại trong miệng trong thời gian ngắn. Phản ứng dị ứng nghiêm trọng hiếm gặp, nhưng người bệnh cần khai báo nếu từng phản ứng với thuốc cản quang, có bệnh thận, bệnh tim, đái tháo đường hoặc vấn đề tuyến giáp."
        ]
      },
      {
        "heading": "Thuốc tương phản trong MRI",
        "paragraphs": [
          "MRI thường sử dụng thuốc tương phản chứa gadolinium. Thuốc này khác với thuốc cản quang iod dùng trong CT.",
          "Phản ứng dị ứng nghiêm trọng với gadolinium hiếm gặp. Tuy nhiên, người mắc bệnh thận nặng cần được đánh giá cẩn thận trước khi tiêm. Bác sĩ sẽ cân nhắc lợi ích, chức năng thận, loại thuốc và mức độ cần thiết của việc sử dụng tương phản.",
          "Không phải cứ chụp có tiêm thuốc là hình ảnh luôn tốt hơn. Thuốc chỉ được sử dụng khi có khả năng cung cấp thêm thông tin cần thiết cho việc chẩn đoán.",
          "Những ai cần báo trước khi chụp?",
          "Trước khi chụp X-quang, CT hoặc MRI, người bệnh nên thông báo với nhân viên y tế nếu:",
          "Đang mang thai hoặc có khả năng mang thai.",
          "Từng dị ứng hoặc phản ứng với thuốc cản quang, thuốc tương phản.",
          "Có bệnh thận.",
          "Có bệnh tuyến giáp, đái tháo đường hoặc bệnh tim.",
          "Đang sử dụng thuốc điều trị dài ngày.",
          "Có máy tạo nhịp tim, máy khử rung hoặc thiết bị cấy ghép.",
          "Có van tim nhân tạo, kẹp mạch máu hoặc máy trợ thính cấy ghép.",
          "Từng phẫu thuật có đặt vít, nẹp, khớp nhân tạo hoặc mảnh kim loại.",
          "Có dị vật kim loại trong mắt hoặc từng làm công việc liên quan đến mài, cắt kim loại.",
          "Sợ không gian kín.",
          "Khó nằm yên hoặc đang đau nhiều.",
          "Đang cho con bú.",
          "Trẻ cần chụp nhưng khó phối hợp.",
          "Đối với MRI, người bệnh phải hoàn thành bước sàng lọc an toàn trước khi vào khu vực máy. Tuyệt đối không mang theo điện thoại, chìa khóa, đồng hồ, thẻ từ hoặc đồ vật kim loại khi chưa được phép.",
          "Phụ nữ mang thai có chụp được không?",
          "Người đang mang thai hoặc nghi ngờ có thai cần thông báo trước mọi xét nghiệm hình ảnh.",
          "X-quang và CT có thể vẫn được thực hiện khi thật sự cần thiết, đặc biệt trong tình huống cấp cứu hoặc khi lợi ích chẩn đoán lớn hơn nguy cơ. Bác sĩ và kỹ thuật viên sẽ lựa chọn vùng chụp, kỹ thuật và mức tia phù hợp.",
          "MRI không sử dụng tia xạ ion hóa, nhưng vẫn cần chỉ định chuyên môn. Thuốc gadolinium thường không được sử dụng thường quy trong thai kỳ và chỉ được cân nhắc khi thông tin thu được có ý nghĩa quan trọng, không thể đạt được bằng phương pháp phù hợp khác.",
          "Trẻ em nên chụp phương pháp nào?",
          "Trẻ em nhạy cảm với tia xạ hơn người trưởng thành và còn nhiều năm sống phía trước. Do đó, X-quang và CT ở trẻ cần được chỉ định đúng và điều chỉnh thông số theo kích thước cơ thể.",
          "Điều này không có nghĩa là trẻ không được chụp CT. Trong những tình huống như chấn thương nặng, nghi xuất huyết hoặc cần chẩn đoán nhanh, CT có thể mang lại lợi ích rất lớn. Quan trọng là sử dụng kỹ thuật liều thấp phù hợp và tránh chụp lặp lại không cần thiết.",
          "MRI không sử dụng tia X nhưng mất nhiều thời gian và yêu cầu trẻ nằm yên. Trẻ nhỏ đôi khi cần an thần hoặc gây mê để có hình ảnh đạt chất lượng, vì vậy bác sĩ sẽ cân nhắc giữa lợi ích và các yếu tố an toàn.",
          "Cần chuẩn bị gì trước khi chụp?"
        ]
      },
      {
        "heading": "Trước khi chụp X-quang",
        "paragraphs": [
          "Phần lớn các khảo sát X-quang thông thường không yêu cầu nhịn ăn. Người bệnh có thể được yêu cầu tháo trang sức hoặc vật kim loại ở vùng cần chụp."
        ]
      },
      {
        "heading": "Trước khi chụp CT",
        "paragraphs": [
          "Người bệnh có thể cần:",
          "Nhịn ăn trong vài giờ nếu chụp có tiêm thuốc.",
          "Làm xét nghiệm chức năng thận trong một số trường hợp.",
          "Khai báo tiền sử dị ứng thuốc cản quang.",
          "Uống nước hoặc thuốc cản quang đường uống theo hướng dẫn.",
          "Tháo vật kim loại tại vùng khảo sát."
        ]
      },
      {
        "heading": "Trước khi chụp MRI",
        "paragraphs": [
          "Người bệnh cần:",
          "Khai báo đầy đủ thiết bị cấy ghép và tiền sử phẫu thuật.",
          "Tháo đồ kim loại và thiết bị điện tử.",
          "Nhịn ăn nếu có sử dụng thuốc tương phản, an thần hoặc theo yêu cầu của quy trình.",
          "Thông báo nếu sợ không gian kín.",
          "Mang theo tài liệu về loại thiết bị cấy ghép nếu có.",
          "Nằm yên và làm theo hướng dẫn nín thở trong một số chuỗi chụp.",
          "Yêu cầu chuẩn bị có thể khác nhau giữa từng bộ phận và từng quy trình. Người bệnh nên thực hiện đúng hướng dẫn của cơ sở y tế thay vì tự nhịn ăn hoặc tự ngừng thuốc.",
          "Có cần chụp cả X-quang, CT và MRI không?",
          "Thông thường, người bệnh không cần chụp cả ba phương pháp cùng lúc.",
          "Bác sĩ có thể bắt đầu bằng kỹ thuật đơn giản và phù hợp nhất. Nếu kết quả chưa đủ để kết luận hoặc phát hiện một bất thường cần khảo sát sâu hơn, người bệnh mới được chỉ định thêm phương pháp khác.",
          "Ví dụ, một người đau đầu gối có thể được chụp X-quang để kiểm tra xương. Nếu nghi ngờ tổn thương sụn chêm hoặc dây chằng, bác sĩ có thể chỉ định thêm MRI. Người chấn thương ngực có thể được chụp X-quang ban đầu, sau đó chụp CT nếu cần tìm tổn thương sâu hoặc chảy máu.",
          "Việc chỉ định nhiều phương pháp không nhất thiết có nghĩa là tình trạng nghiêm trọng. Đôi khi, mỗi kỹ thuật chỉ đang trả lời một câu hỏi khác nhau.",
          "Ai là người đọc kết quả chẩn đoán hình ảnh?",
          "Hình ảnh sẽ được phân tích bởi bác sĩ chẩn đoán hình ảnh, là người được đào tạo chuyên sâu về việc lựa chọn, giám sát và diễn giải các kỹ thuật hình ảnh y khoa.",
          "Bác sĩ chẩn đoán hình ảnh sẽ mô tả phát hiện, đưa ra nhận định và gửi báo cáo cho bác sĩ điều trị. Kết quả hình ảnh cần được kết hợp với triệu chứng, khám lâm sàng, xét nghiệm và tiền sử bệnh.",
          "Một dòng bất thường trong kết quả không tự động đồng nghĩa với bệnh nguy hiểm. Ngược lại, kết quả “chưa thấy bất thường” cũng không loại trừ được mọi nguyên nhân gây triệu chứng."
        ]
      },
      {
        "heading": "Chọn đúng phương pháp quan trọng hơn chọn phương pháp đắt nhất",
        "paragraphs": [
          "X-quang nhanh, thuận tiện và phù hợp với nhiều vấn đề về xương, phổi. CT tạo hình ảnh lát cắt chi tiết, có lợi thế lớn trong cấp cứu, chấn thương và khảo sát cơ quan nội tạng. MRI không sử dụng tia X và có khả năng thể hiện mô mềm tốt, đặc biệt ở não, tủy sống, thần kinh và cơ xương khớp.",
          "Điều quan trọng không phải là phương pháp nào hiện đại hoặc đắt tiền hơn, mà là phương pháp nào trả lời đúng câu hỏi chẩn đoán trong từng trường hợp.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, người bệnh có thể được thăm khám, đánh giá triệu chứng và tư vấn phương pháp chẩn đoán hình ảnh phù hợp. Kết quả được phân tích trong mối liên hệ với tình trạng thực tế, giúp hạn chế chụp không cần thiết và hỗ trợ bác sĩ xây dựng hướng theo dõi hoặc điều trị.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc chỉ định trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "xet-nghiem-mau-tong-quat-doc-duoc-nhung-thong-tin-gi": {
    "sourceFile": "46.Xét nghiệm máu tổng quát đọc được những thông tin gì.docx",
    "title": "Xét nghiệm máu tổng quát đọc được những thông tin gì?",
    "excerpt": "Một ống máu nhỏ có thể cung cấp khá nhiều thông tin về tình trạng sức khỏe. Thông qua các chỉ số tế bào máu, đường huyết, mỡ máu, men gan hay chức năng thận, bác sĩ có thể nhận biết những bất thường cần theo dõi và quyết định có cần kiểm tra chuyên sâu hơn hay không.",
    "intro": [
      "Một ống máu nhỏ có thể cung cấp khá nhiều thông tin về tình trạng sức khỏe. Thông qua các chỉ số tế bào máu, đường huyết, mỡ máu, men gan hay chức năng thận, bác sĩ có thể nhận biết những bất thường cần theo dõi và quyết định có cần kiểm tra chuyên sâu hơn hay không.",
      "Tuy nhiên, xét nghiệm máu tổng quát không phải là một xét nghiệm duy nhất có thể “quét” được tất cả bệnh lý. Đây thường là cách gọi chung cho một nhóm xét nghiệm được lựa chọn dựa trên độ tuổi, giới tính, triệu chứng, bệnh nền và mục đích kiểm tra của từng người.",
      "Xét nghiệm máu tổng quát là gì?",
      "Xét nghiệm máu tổng quát là quá trình lấy một lượng máu phù hợp để phân tích các thành phần và chất có trong máu. Tùy từng gói khám hoặc chỉ định của bác sĩ, danh mục có thể bao gồm:",
      "Tổng phân tích tế bào máu.",
      "Đường huyết và HbA1c.",
      "Mỡ máu.",
      "Chức năng gan.",
      "Chức năng thận.",
      "Điện giải và một số khoáng chất.",
      "Axit uric.",
      "Chỉ số viêm.",
      "Xét nghiệm tuyến giáp, viêm gan hoặc các xét nghiệm chuyên sâu khi có chỉ định.",
      "Mỗi nhóm chỉ số trả lời một câu hỏi khác nhau. Có chỉ số phản ánh tình trạng tế bào máu, có chỉ số giúp đánh giá hoạt động của gan, thận hoặc nguy cơ rối loạn chuyển hóa.",
      "Vì vậy, khi lựa chọn dịch vụ xét nghiệm, người bệnh không nên chỉ hỏi “gói này có bao nhiêu chỉ số” mà cần quan tâm các chỉ số đó có phù hợp với tình trạng của mình hay không.",
      "1. Tổng phân tích tế bào máu cho biết điều gì?",
      "Tổng phân tích tế bào máu, thường được gọi là công thức máu hoặc CBC, là một trong những xét nghiệm phổ biến nhất. Xét nghiệm này đo số lượng, kích thước và một số đặc điểm của hồng cầu, bạch cầu và tiểu cầu."
    ],
    "sections": [
      {
        "heading": "Hồng cầu, hemoglobin và hematocrit",
        "paragraphs": [
          "Hồng cầu có nhiệm vụ vận chuyển oxy từ phổi đến các mô trong cơ thể. Các chỉ số thường được quan tâm gồm:",
          "RBC: Số lượng hồng cầu.",
          "Hemoglobin – HGB: Lượng huyết sắc tố có khả năng vận chuyển oxy.",
          "Hematocrit – HCT: Tỷ lệ thể tích hồng cầu trong máu.",
          "MCV: Thể tích trung bình của hồng cầu.",
          "MCH và MCHC: Phản ánh lượng và nồng độ hemoglobin trong hồng cầu.",
          "Khi một số chỉ số hồng cầu, hemoglobin hoặc hematocrit giảm, bác sĩ có thể nghĩ đến khả năng thiếu máu. Tuy nhiên, để tìm nguyên nhân, người bệnh có thể cần làm thêm xét nghiệm sắt, ferritin, vitamin B12, folate hoặc các kiểm tra liên quan.",
          "Ngược lại, chỉ số tăng cũng không đồng nghĩa chắc chắn mắc bệnh. Tình trạng thiếu nước, hút thuốc, sống ở vùng cao hoặc một số bệnh lý tim, phổi và tủy xương đều có thể ảnh hưởng đến kết quả. Vì vậy, một con số bất thường cần được đặt trong bối cảnh cụ thể chứ không nên đọc riêng lẻ.",
          "Bạch cầu",
          "Bạch cầu là một phần của hệ miễn dịch, tham gia bảo vệ cơ thể trước nhiễm trùng và nhiều tác nhân gây bệnh.",
          "Công thức bạch cầu có thể bao gồm:",
          "Bạch cầu trung tính.",
          "Bạch cầu lympho.",
          "Bạch cầu mono.",
          "Bạch cầu ái toan.",
          "Bạch cầu ái kiềm.",
          "Số lượng bạch cầu tăng có thể gặp khi cơ thể đang nhiễm trùng, viêm, chịu căng thẳng hoặc phản ứng với một số loại thuốc. Bạch cầu giảm có thể liên quan đến nhiễm virus, bệnh tự miễn, ảnh hưởng của thuốc hoặc vấn đề tại tủy xương.",
          "Tuy nhiên, bạch cầu tăng không tự động có nghĩa là nhiễm khuẩn và bạch cầu bình thường cũng không loại trừ hoàn toàn bệnh lý. Bác sĩ cần kết hợp với triệu chứng, khám lâm sàng và những xét nghiệm khác.",
          "Tiểu cầu",
          "Tiểu cầu tham gia vào quá trình đông máu và giúp cầm máu khi mạch máu bị tổn thương.",
          "Số lượng tiểu cầu quá thấp có thể làm tăng nguy cơ xuất huyết, dễ bầm tím hoặc chảy máu kéo dài. Tiểu cầu tăng có thể xuất hiện trong phản ứng viêm, thiếu sắt, sau phẫu thuật hoặc một số bệnh lý huyết học.",
          "Nếu tiểu cầu bất thường đáng kể, người bệnh có thể được chỉ định kiểm tra lại, làm phết máu ngoại vi hoặc thăm khám chuyên khoa Huyết học.",
          "2. Xét nghiệm đường huyết phát hiện được gì?",
          "Đường huyết phản ánh lượng glucose có trong máu tại thời điểm lấy mẫu. Glucose là một nguồn năng lượng quan trọng của cơ thể, nhưng nếu duy trì ở mức cao kéo dài có thể liên quan đến tiền đái tháo đường hoặc đái tháo đường.",
          "Một số xét nghiệm thường gặp gồm:"
        ]
      },
      {
        "heading": "Đường huyết lúc đói",
        "paragraphs": [
          "Xét nghiệm này đo lượng glucose sau khi người bệnh đã nhịn ăn theo hướng dẫn. Kết quả có thể hỗ trợ bác sĩ đánh giá nguy cơ rối loạn đường huyết.",
          "Đường huyết có thể bị ảnh hưởng bởi bữa ăn gần nhất, căng thẳng, thiếu ngủ, nhiễm trùng, thuốc đang sử dụng và nhiều yếu tố khác. Vì thế, một kết quả tăng nhẹ chưa đủ để tự kết luận mắc đái tháo đường.",
          "HbA1c",
          "HbA1c phản ánh mức đường huyết trung bình trong khoảng hai đến ba tháng gần đây, thay vì chỉ thể hiện tại một thời điểm. Xét nghiệm này có thể được sử dụng để tầm soát, hỗ trợ chẩn đoán và theo dõi khả năng kiểm soát đường huyết ở người mắc đái tháo đường.",
          "Không phải trường hợp nào HbA1c cũng phản ánh hoàn toàn chính xác. Thiếu máu, bệnh hemoglobin, mất máu, truyền máu hoặc một số tình trạng ảnh hưởng đến vòng đời hồng cầu có thể làm thay đổi kết quả. Bác sĩ sẽ lựa chọn thêm xét nghiệm phù hợp khi cần thiết.",
          "3. Mỡ máu cho biết nguy cơ tim mạch như thế nào?",
          "Xét nghiệm mỡ máu thường gồm:",
          "Cholesterol toàn phần.",
          "LDL-cholesterol.",
          "HDL-cholesterol.",
          "Triglyceride.",
          "LDL thường được gọi đơn giản là cholesterol “xấu” vì khi tăng cao có thể liên quan đến sự tích tụ mảng xơ vữa trong thành động mạch. HDL thường được gọi là cholesterol “tốt” vì tham gia vận chuyển cholesterol về gan để xử lý.",
          "Triglyceride là một dạng chất béo dự trữ năng lượng. Chỉ số này có thể tăng ở người thừa cân, uống nhiều rượu bia, ăn nhiều đường, ít vận động, mắc đái tháo đường hoặc một số bệnh lý chuyển hóa.",
          "Kết quả mỡ máu giúp bác sĩ đánh giá nguy cơ tim mạch, nhưng không nên đọc từng chỉ số một cách tách biệt. Tuổi, huyết áp, thói quen hút thuốc, đái tháo đường, bệnh thận và tiền sử gia đình đều có thể ảnh hưởng đến mức nguy cơ chung. Xét nghiệm cholesterol và triglyceride được sử dụng để hỗ trợ đánh giá nguy cơ bệnh tim mạch và đột quỵ.",
          "4. Xét nghiệm chức năng gan đọc được những thông tin gì?",
          "Gan tham gia chuyển hóa chất dinh dưỡng, tạo protein, xử lý thuốc và đào thải nhiều sản phẩm chuyển hóa. Nhóm xét nghiệm gan thường có:",
          "AST.",
          "ALT.",
          "GGT.",
          "ALP.",
          "Bilirubin.",
          "Albumin.",
          "Protein toàn phần."
        ]
      },
      {
        "heading": "Men gan AST, ALT và GGT",
        "paragraphs": [
          "AST và ALT là các enzyme có trong tế bào. Khi tế bào gan bị tổn thương, nồng độ những enzyme này trong máu có thể tăng.",
          "GGT thường được bác sĩ xem xét cùng các chỉ số khác để đánh giá tình trạng gan và đường mật. Chỉ số này có thể bị ảnh hưởng bởi rượu bia, thuốc và nhiều bệnh lý khác.",
          "Men gan tăng không cho biết ngay nguyên nhân là gan nhiễm mỡ, viêm gan virus, thuốc hay tắc mật. Bác sĩ cần xem xét kiểu tăng của các chỉ số, triệu chứng, tiền sử uống rượu, thuốc đang dùng và kết quả siêu âm hoặc xét nghiệm bổ sung.",
          "Bilirubin",
          "Bilirubin là sản phẩm được hình thành khi cơ thể phân hủy hồng cầu cũ. Gan xử lý bilirubin và đưa chất này ra khỏi cơ thể.",
          "Bilirubin tăng có thể xuất hiện trong các vấn đề liên quan đến gan, đường mật hoặc quá trình phá hủy hồng cầu. Người bệnh đôi khi có biểu hiện vàng da, vàng mắt hoặc nước tiểu sẫm màu."
        ]
      },
      {
        "heading": "Albumin và protein toàn phần",
        "paragraphs": [
          "Albumin là một protein chính trong máu, được sản xuất tại gan. Chỉ số giảm có thể liên quan đến bệnh gan, bệnh thận, thiếu dinh dưỡng, viêm kéo dài hoặc một số tình trạng khác.",
          "Các xét nghiệm gan có thể giúp phát hiện dấu hiệu tổn thương và theo dõi hoạt động của gan, nhưng thường không thể tự xác định chính xác một bệnh lý cụ thể. Khi kết quả bất thường, người bệnh có thể cần thêm siêu âm, xét nghiệm virus viêm gan hoặc những kiểm tra chuyên sâu khác.",
          "5. Các chỉ số nào phản ánh chức năng thận?",
          "Những xét nghiệm máu thường được sử dụng để đánh giá chức năng thận gồm:",
          "Creatinine.",
          "Ure hoặc BUN.",
          "Độ lọc cầu thận ước tính – eGFR.",
          "Điện giải như natri và kali.",
          "Creatinine",
          "Creatinine là sản phẩm được hình thành từ hoạt động chuyển hóa bình thường của cơ. Thận có nhiệm vụ lọc creatinine ra khỏi máu.",
          "Khi khả năng lọc của thận suy giảm, creatinine có thể tăng. Tuy nhiên, chỉ số này còn chịu ảnh hưởng của tuổi, giới tính, khối lượng cơ, chế độ ăn và thể trạng.",
          "Một người có khối lượng cơ thấp vẫn có thể bị suy giảm chức năng thận dù creatinine chưa tăng nhiều. Vì vậy, bác sĩ thường xem xét thêm eGFR thay vì chỉ đọc riêng creatinine.",
          "eGFR",
          "eGFR là độ lọc cầu thận ước tính, được tính toán từ creatinine và một số thông tin của người bệnh. Đây là chỉ số quan trọng giúp đánh giá khả năng lọc của thận.",
          "Một kết quả eGFR thấp chưa chắc đã đủ để kết luận bệnh thận mạn. Bác sĩ có thể yêu cầu kiểm tra lại và kết hợp với xét nghiệm nước tiểu, đặc biệt là albumin niệu, để đánh giá tổn thương thận.",
          "Điều này cũng cho thấy xét nghiệm máu đôi khi cần đi cùng xét nghiệm nước tiểu mới cung cấp được bức tranh đầy đủ hơn về sức khỏe thận.",
          "6. Điện giải và khoáng chất phản ánh điều gì?",
          "Một số gói xét nghiệm có thể bao gồm natri, kali, clo, bicarbonate và canxi. Đây là các chất cần thiết để duy trì cân bằng dịch, hoạt động thần kinh, cơ bắp và tim mạch.",
          "Bất thường điện giải có thể liên quan đến:",
          "Mất nước.",
          "Nôn ói hoặc tiêu chảy kéo dài.",
          "Bệnh thận.",
          "Rối loạn nội tiết.",
          "Suy tim.",
          "Tác dụng của thuốc lợi tiểu hoặc các thuốc khác.",
          "Mức điện giải thay đổi đáng kể có thể ảnh hưởng đến nhịp tim, sức cơ và trạng thái ý thức. Vì thế, người bệnh không nên tự bổ sung kali, natri hay canxi chỉ dựa trên một kết quả xét nghiệm mà chưa được bác sĩ tư vấn.",
          "Một bảng chuyển hóa toàn diện có thể cung cấp thông tin về đường huyết, gan, thận, protein, canxi và sự cân bằng điện giải của cơ thể.",
          "7. Axit uric có phải là xét nghiệm chẩn đoán bệnh gout?",
          "Axit uric là sản phẩm được tạo ra trong quá trình chuyển hóa purin. Nồng độ axit uric tăng có thể liên quan đến khả năng hình thành tinh thể urat và bệnh gout, nhưng không phải ai tăng axit uric cũng có cơn gout.",
          "Ngược lại, trong một số thời điểm, người đang có biểu hiện viêm khớp do gout vẫn có thể có nồng độ axit uric không tăng rõ.",
          "Vì vậy, xét nghiệm axit uric được dùng để hỗ trợ đánh giá và theo dõi, không nên được sử dụng như căn cứ duy nhất để tự chẩn đoán gout hoặc tự mua thuốc hạ axit uric.",
          "Bác sĩ có thể chỉ định xét nghiệm này cho người đau sưng khớp tái diễn, có tiền sử gout, sỏi thận, bệnh thận hoặc đang sử dụng một số loại thuốc.",
          "8. Xét nghiệm viêm có biết cơ thể đang nhiễm trùng không?",
          "Một số xét nghiệm thường được nhắc đến là CRP và tốc độ máu lắng ESR.",
          "CRP là một protein do gan sản xuất và có thể tăng khi cơ thể xảy ra phản ứng viêm. ESR cũng có thể cho biết cơ thể đang có tình trạng viêm, nhưng cả hai đều không chỉ ra chính xác vị trí hoặc nguyên nhân.",
          "Các chỉ số viêm có thể tăng trong:",
          "Nhiễm trùng.",
          "Bệnh tự miễn.",
          "Chấn thương.",
          "Sau phẫu thuật.",
          "Một số bệnh lý mạn tính hoặc ác tính.",
          "Vì vậy, CRP tăng không có nghĩa chắc chắn là nhiễm khuẩn và cũng không phải cứ CRP tăng là cần dùng kháng sinh. Việc điều trị phải dựa trên nguyên nhân được bác sĩ xác định.",
          "9. Có thể kiểm tra tuyến giáp bằng xét nghiệm máu không?",
          "Các xét nghiệm tuyến giáp phổ biến gồm TSH, FT4 và trong một số trường hợp là T3 hoặc kháng thể tuyến giáp.",
          "TSH thường là xét nghiệm ban đầu được sử dụng để đánh giá hoạt động tuyến giáp. Nồng độ TSH quá cao hoặc quá thấp có thể là dấu hiệu gợi ý tuyến giáp đang hoạt động bất thường.",
          "Bác sĩ có thể cân nhắc xét nghiệm tuyến giáp khi người bệnh có các biểu hiện như:",
          "Mệt mỏi kéo dài.",
          "Tăng hoặc giảm cân không rõ nguyên nhân.",
          "Tim đập nhanh.",
          "Run tay.",
          "Dễ nóng hoặc dễ lạnh.",
          "Rụng tóc.",
          "Rối loạn kinh nguyệt.",
          "Cổ to hoặc nghi ngờ có nhân tuyến giáp.",
          "Xét nghiệm tuyến giáp không nhất thiết phải nằm trong mọi gói máu tổng quát. Việc chỉ định nên dựa trên triệu chứng, tiền sử và nhóm nguy cơ.",
          "Xét nghiệm máu có phát hiện được tất cả bệnh không?",
          "Câu trả lời là không.",
          "Xét nghiệm máu có thể cung cấp nhiều “manh mối” quan trọng nhưng không thay thế hoàn toàn việc hỏi bệnh, khám lâm sàng, siêu âm, X-quang, nội soi hoặc những phương pháp chẩn đoán khác.",
          "Ví dụ:",
          "Công thức máu có thể gợi ý thiếu máu nhưng chưa cho biết chính xác nguyên nhân.",
          "Men gan tăng cho thấy gan có thể đang bị ảnh hưởng nhưng chưa xác định được bệnh cụ thể.",
          "CRP tăng gợi ý viêm nhưng không chỉ ra vị trí viêm.",
          "Mỡ máu giúp đánh giá nguy cơ tim mạch nhưng không cho biết động mạch đã hẹp bao nhiêu.",
          "Một số bệnh lý vẫn có thể tồn tại dù các xét nghiệm máu cơ bản chưa xuất hiện bất thường.",
          "Kết quả xét nghiệm cần được đọc cùng triệu chứng, tiền sử sức khỏe, thuốc đang dùng và kết quả thăm khám. Một xét nghiệm riêng lẻ hiếm khi cung cấp toàn bộ bức tranh sức khỏe.",
          "Vì sao chỉ số nằm ngoài khoảng tham chiếu chưa chắc là mắc bệnh?",
          "Mỗi phòng xét nghiệm có thể sử dụng thiết bị, phương pháp và khoảng tham chiếu khác nhau. Kết quả cũng có thể chịu ảnh hưởng bởi:",
          "Tuổi và giới tính.",
          "Thai kỳ hoặc chu kỳ kinh nguyệt.",
          "Thời điểm lấy máu.",
          "Việc ăn uống trước xét nghiệm.",
          "Tình trạng thiếu nước.",
          "Vận động mạnh.",
          "Căng thẳng hoặc thiếu ngủ.",
          "Thuốc và thực phẩm bổ sung.",
          "Một đợt nhiễm trùng vừa xảy ra.",
          "Do đó, một chỉ số hơi cao hoặc thấp chưa đủ để kết luận bệnh. Bác sĩ có thể đề nghị theo dõi, xét nghiệm lại hoặc kiểm tra thêm nếu kết quả thực sự có ý nghĩa.",
          "Người bệnh cũng không nên so sánh kết quả của mình với bảng chỉ số trên mạng mà bỏ qua khoảng tham chiếu được in trên phiếu xét nghiệm.",
          "Khi nào nên thực hiện xét nghiệm máu tổng quát?",
          "Xét nghiệm có thể được cân nhắc trong những trường hợp:",
          "Khám sức khỏe định kỳ.",
          "Mệt mỏi, chóng mặt hoặc da xanh kéo dài.",
          "Sụt cân hoặc tăng cân không rõ nguyên nhân.",
          "Sốt kéo dài hoặc thường xuyên nhiễm trùng.",
          "Dễ bầm tím, chảy máu bất thường.",
          "Khát nhiều, tiểu nhiều hoặc vết thương lâu lành.",
          "Đau sưng khớp tái diễn.",
          "Vàng da, nước tiểu sẫm màu.",
          "Phù chân hoặc tiểu ít.",
          "Theo dõi bệnh gan, thận, đái tháo đường, rối loạn mỡ máu.",
          "Kiểm tra tác dụng và ảnh hưởng của thuốc đang sử dụng.",
          "Chuẩn bị trước phẫu thuật hoặc một số thủ thuật.",
          "Danh mục xét nghiệm nên được bác sĩ hoặc nhân viên y tế tư vấn dựa trên mục đích kiểm tra. Việc tự chọn quá nhiều xét nghiệm không cần thiết có thể gây tốn kém và khiến người bệnh lo lắng trước những bất thường không có ý nghĩa lâm sàng.",
          "Cần chuẩn bị gì trước khi xét nghiệm máu?",
          "Không phải xét nghiệm máu nào cũng yêu cầu nhịn ăn. Riêng công thức máu thường không cần chuẩn bị đặc biệt, nhưng nếu thực hiện cùng đường huyết, mỡ máu hoặc một số xét nghiệm sinh hóa, người bệnh có thể được yêu cầu nhịn ăn theo hướng dẫn.",
          "Để kết quả đáng tin cậy hơn, người đi xét nghiệm nên:",
          "Hỏi rõ có cần nhịn ăn hay không.",
          "Chỉ uống nước lọc nếu đang trong thời gian nhịn ăn.",
          "Hạn chế rượu bia và vận động quá sức trước ngày lấy mẫu.",
          "Nghỉ ngơi, tránh thức khuya nếu có thể.",
          "Thông báo các loại thuốc và thực phẩm bổ sung đang sử dụng.",
          "Không tự ý ngừng thuốc điều trị.",
          "Báo với nhân viên y tế nếu đang mang thai, trong kỳ kinh hoặc vừa mắc bệnh cấp tính.",
          "Mang theo kết quả cũ để bác sĩ so sánh sự thay đổi theo thời gian.",
          "Thức ăn và đồ uống có thể làm thay đổi nồng độ đường, chất béo, protein và một số chất trong máu. Trong thời gian được yêu cầu nhịn ăn, người bệnh không nên uống cà phê, nước ngọt hoặc nước trái cây. Thuốc đang sử dụng chỉ nên tạm ngừng khi có hướng dẫn của bác sĩ."
        ]
      },
      {
        "heading": "Dịch vụ xét nghiệm máu tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Tại Bệnh viện Đa khoa Hồng Phúc, người bệnh có thể được tư vấn lựa chọn danh mục xét nghiệm dựa trên độ tuổi, triệu chứng, bệnh nền và mục tiêu kiểm tra sức khỏe.",
          "Quy trình xét nghiệm được thực hiện theo các bước:",
          "Tiếp nhận thông tin và nhu cầu kiểm tra.",
          "Khám hoặc tư vấn danh mục xét nghiệm phù hợp.",
          "Hướng dẫn chuẩn bị trước khi lấy mẫu.",
          "Lấy và xử lý mẫu xét nghiệm.",
          "Trả kết quả theo thời gian dự kiến.",
          "Bác sĩ đọc kết quả và tư vấn hướng theo dõi khi cần.",
          "Thay vì chỉ nhận một phiếu có nhiều con số, người bệnh nên được giải thích chỉ số nào bình thường, chỉ số nào cần theo dõi và có cần thực hiện thêm kiểm tra hay không.",
          "Sự phối hợp giữa khoa Xét nghiệm và các chuyên khoa tại Bệnh viện Đa khoa Hồng Phúc cũng giúp người bệnh thuận tiện thăm khám tiếp nếu phát hiện bất thường liên quan đến tim mạch, nội tiết, gan mật, thận – tiết niệu hoặc huyết học.",
          "Kết luận",
          "Xét nghiệm máu tổng quát có thể cung cấp thông tin về tế bào máu, đường huyết, mỡ máu, gan, thận, điện giải và một số rối loạn chuyển hóa. Tuy nhiên, xét nghiệm không phải chiếc máy “đọc toàn bộ cơ thể” và một kết quả bất thường cũng chưa đồng nghĩa chắc chắn đang mắc bệnh.",
          "Để kết quả có giá trị, danh mục xét nghiệm cần được lựa chọn đúng mục đích và được bác sĩ giải thích dựa trên tình trạng thực tế. Khi có chỉ số bất thường, người bệnh không nên tự dùng thuốc hoặc tự điều chỉnh chế độ điều trị mà cần được tư vấn về bước kiểm tra tiếp theo.",
          "Thông tin trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, chẩn đoán hoặc điều trị trực tiếp từ bác sĩ."
        ]
      }
    ]
  },
  "cap-cuu-24-7-nguoi-nha-can-chuan-bi-gi-khi-dua-benh-nhan-den-vien": {
    "sourceFile": "47.Cấp cứu 247 người nhà cần chuẩn bị gì khi đưa bệnh nhân đến viện.docx",
    "title": "Cấp cứu 24/7: Người nhà cần chuẩn bị gì khi đưa bệnh nhân đến viện?",
    "excerpt": "Khi người thân bất ngờ đau ngực, khó thở, ngất, co giật hoặc gặp tai nạn, phần lớn gia đình đều rơi vào trạng thái luống cuống. Người đi tìm giấy tờ, người gọi xe, người cố cho bệnh nhân uống thuốc… nhưng lại quên mất những thông tin bác sĩ cần biết nhất.",
    "intro": [
      "Khi người thân bất ngờ đau ngực, khó thở, ngất, co giật hoặc gặp tai nạn, phần lớn gia đình đều rơi vào trạng thái luống cuống. Người đi tìm giấy tờ, người gọi xe, người cố cho bệnh nhân uống thuốc… nhưng lại quên mất những thông tin bác sĩ cần biết nhất.",
      "Trong tình huống cấp cứu, điều quan trọng hàng đầu là đưa bệnh nhân đến cơ sở y tế an toàn và sớm nhất có thể. Giấy tờ, thuốc đang dùng và hồ sơ bệnh cũ rất hữu ích, nhưng không nên trở thành lý do làm chậm việc gọi cấp cứu hoặc đưa người bệnh đến viện.",
      "Khi nào cần gọi cấp cứu ngay?",
      "Không phải trường hợp nào cũng phù hợp để gia đình tự chở bệnh nhân bằng xe máy hoặc ô tô cá nhân. Nếu người bệnh có biểu hiện nghiêm trọng, việc gọi nhân viên cấp cứu giúp bệnh nhân được hỗ trợ trên đường di chuyển và hạn chế những rủi ro do vận chuyển không đúng cách.",
      "Các dấu hiệu cần đặc biệt chú ý gồm:",
      "Khó thở, thở yếu, tím môi hoặc có cảm giác không lấy được hơi.",
      "Mất ý thức, gọi hỏi không đáp ứng hoặc tỉnh lại không hoàn toàn.",
      "Đau ngực dữ dội, đau lan lên hàm, vai hoặc cánh tay.",
      "Méo miệng, nói khó, yếu hoặc tê đột ngột một bên cơ thể.",
      "Co giật kéo dài, co giật liên tiếp hoặc không tỉnh lại bình thường.",
      "Chảy máu nhiều, vết thương sâu hoặc nghi ngờ chảy máu bên trong.",
      "Chấn thương đầu, cổ, cột sống hoặc tai nạn giao thông nghiêm trọng.",
      "Bỏng nặng, điện giật hoặc đuối nước.",
      "Nôn ra máu, ho ra máu hoặc đi ngoài ra nhiều máu.",
      "Phản ứng dị ứng kèm khó thở, sưng môi, lưỡi hoặc vùng họng.",
      "Nghi ngờ uống nhầm thuốc, hóa chất hoặc dùng quá liều.",
      "Đau dữ dội xuất hiện đột ngột hoặc tình trạng xấu đi nhanh chóng.",
      "Khó thở, ngất, lú lẫn đột ngột, chảy máu nặng, đau dữ dội, nôn hoặc ho ra máu đều thuộc những dấu hiệu cần được đánh giá cấp cứu.",
      "Tại Việt Nam, người dân có thể gọi 115 để yêu cầu hỗ trợ cấp cứu y tế. Hệ thống cấp cứu 115 thực hiện tiếp nhận thông tin, xử trí ban đầu và vận chuyển người bệnh trong các trường hợp phù hợp.",
      "Khi bệnh nhân không tỉnh, khó thở, chảy máu nhiều hoặc có dấu hiệu đột quỵ, gia đình không nên để bệnh nhân tự đi lại hoặc tự lái xe đến viện."
    ],
    "sections": [
      {
        "heading": "Việc đầu tiên không phải là tìm giấy tờ",
        "paragraphs": [
          "Trong vài phút đầu, người nhà nên ưu tiên theo thứ tự:",
          "Kiểm tra xem bệnh nhân có tỉnh và còn thở hay không.",
          "Gọi người hỗ trợ và liên hệ cấp cứu khi tình trạng nghiêm trọng.",
          "Thực hiện sơ cứu trong phạm vi mình đã được hướng dẫn.",
          "Chuẩn bị thông tin, thuốc và giấy tờ nếu có thể lấy nhanh.",
          "Đưa bệnh nhân đến cơ sở y tế bằng phương tiện an toàn.",
          "Không nên để một người vừa lái xe vừa theo dõi bệnh nhân. Nếu gia đình tự di chuyển bằng ô tô, nên có ít nhất một người ngồi bên cạnh để quan sát nhịp thở, mức độ tỉnh táo và thông báo ngay nếu tình trạng thay đổi.",
          "Người nhà nên chuẩn bị những giấy tờ nào?",
          "Nếu lấy được nhanh và không làm chậm quá trình cấp cứu, gia đình có thể mang theo:",
          "Căn cước công dân hoặc giấy tờ nhận dạng của bệnh nhân.",
          "Thẻ bảo hiểm y tế hoặc thông tin bảo hiểm liên quan.",
          "Giấy khai sinh đối với trẻ nhỏ nếu thuận tiện.",
          "Sổ khám bệnh.",
          "Hồ sơ bệnh án hoặc giấy ra viện gần nhất.",
          "Kết quả xét nghiệm, nội soi, siêu âm hoặc phim chụp trước đây.",
          "Phiếu hẹn và đơn thuốc đang sử dụng.",
          "Thông tin liên hệ của người thân có thể quyết định các vấn đề cần thiết.",
          "Có thể chụp hồ sơ, đơn thuốc hoặc giấy tờ bằng điện thoại nếu không kịp mang bản gốc.",
          "Tuy nhiên, cần nhớ một nguyên tắc đơn giản: có giấy tờ thì tốt, chưa tìm thấy cũng vẫn phải đi viện. Khoa Cấp cứu ưu tiên đánh giá và xử trí tình trạng người bệnh, không nên trì hoãn thời điểm đến viện chỉ vì thiếu một tờ giấy."
        ]
      },
      {
        "heading": "Danh sách thuốc đang dùng rất quan trọng",
        "paragraphs": [
          "Thông tin về thuốc có thể ảnh hưởng trực tiếp đến quyết định điều trị. Một số loại thuốc làm tăng nguy cơ chảy máu, thay đổi huyết áp, đường huyết, nhịp tim hoặc tương tác với thuốc được sử dụng trong cấp cứu.",
          "Người nhà nên mang theo:",
          "Các loại thuốc bệnh nhân đang uống.",
          "Thuốc tiêm, bút tiêm insulin.",
          "Thuốc xịt hen.",
          "Thuốc nhỏ mắt, thuốc dán hoặc thuốc bôi đang dùng.",
          "Vitamin, thực phẩm bổ sung và thuốc không kê đơn.",
          "Đơn thuốc gần nhất.",
          "Tốt nhất nên để thuốc trong bao bì gốc. Nếu không kịp mang thuốc, gia đình có thể chụp rõ tên thuốc, hàm lượng và hướng dẫn sử dụng trên vỏ hộp.",
          "Danh sách nên ghi được ba thông tin:",
          "Tên thuốc.",
          "Liều lượng.",
          "Thời điểm bệnh nhân dùng liều gần nhất.",
          "Các hướng dẫn an toàn thuốc khuyến nghị người bệnh mang theo đầy đủ thuốc đang sử dụng, bao gồm thuốc kê đơn, thuốc không kê đơn, vitamin và sản phẩm thảo dược khi đến bệnh viện.",
          "Không tự ý cho bệnh nhân uống thêm thuốc cũ hoặc tăng liều vì nghĩ rằng thuốc sẽ giúp cầm cự đến khi đến viện. Việc dùng thêm thuốc có thể làm che lấp triệu chứng, gây tương tác hoặc khiến tình trạng nặng hơn."
        ]
      },
      {
        "heading": "Ghi rõ tiền sử bệnh và dị ứng",
        "paragraphs": [
          "Trong tình huống khẩn cấp, bệnh nhân có thể quá mệt, lú lẫn hoặc không thể tự trả lời. Người nhà nên chuẩn bị thông tin ngắn gọn về:",
          "Tăng huyết áp.",
          "Đái tháo đường.",
          "Bệnh tim, rối loạn nhịp tim hoặc đặt máy tạo nhịp.",
          "Tiền sử đột quỵ.",
          "Hen, bệnh phổi mạn tính.",
          "Bệnh gan, suy thận hoặc đang chạy thận.",
          "Động kinh.",
          "Rối loạn đông máu.",
          "Ung thư.",
          "Phẫu thuật hoặc thủ thuật gần đây.",
          "Tiền sử đang mang thai hoặc có khả năng mang thai.",
          "Dị ứng thuốc, thức ăn, hóa chất hoặc vật liệu y tế.",
          "Nếu bệnh nhân từng dị ứng thuốc, cần nói rõ tên thuốc và biểu hiện đã xảy ra, chẳng hạn nổi mề đay, khó thở, tụt huyết áp hay chỉ buồn nôn. Câu nói “bệnh nhân dị ứng nhiều loại thuốc nhưng không nhớ tên” thường chưa đủ để bác sĩ đánh giá nguy cơ.",
          "Hồ sơ sức khỏe cá nhân nên có danh sách thuốc, liều dùng, bệnh mạn tính, tiền sử phẫu thuật và các loại dị ứng."
        ]
      },
      {
        "heading": "Ghi nhớ thời điểm và diễn biến triệu chứng",
        "paragraphs": [
          "Thông tin về thời gian có thể rất quan trọng, đặc biệt trong các trường hợp nghi ngờ đột quỵ, nhồi máu cơ tim, ngộ độc hoặc chấn thương.",
          "Người nhà nên cố gắng xác định:",
          "Bệnh nhân bắt đầu xuất hiện triệu chứng lúc mấy giờ?",
          "Trước đó bệnh nhân còn bình thường vào thời điểm nào?",
          "Triệu chứng xuất hiện đột ngột hay tăng dần?",
          "Bệnh nhân đang làm gì khi sự việc xảy ra?",
          "Có ngã, va đập đầu hoặc tai nạn hay không?",
          "Có sốt, nôn, tiêu chảy, đau ngực hoặc khó thở trước đó không?",
          "Bệnh nhân đã uống thuốc hay được sơ cứu gì?",
          "Triệu chứng có giảm rồi xuất hiện trở lại không?",
          "Không cần kể quá dài. Người nhà có thể ghi vào điện thoại theo mẫu:",
          "“Khoảng 20 giờ 15 phút, bệnh nhân đang ăn tối thì đột ngột nói khó và yếu tay phải. Trước đó lúc 20 giờ vẫn nói chuyện bình thường. Gia đình chưa cho uống thuốc.”",
          "Việc mô tả triệu chứng, thời điểm xuất hiện, thời gian kéo dài và sự thay đổi của triệu chứng giúp nhân viên y tế tiếp nhận thông tin hiệu quả hơn.",
          "Trường hợp tai nạn cần cung cấp những thông tin gì?",
          "Nếu bệnh nhân bị tai nạn, người chứng kiến nên ghi nhớ:",
          "Thời điểm xảy ra tai nạn.",
          "Cơ chế chấn thương: ngã từ độ cao, va chạm xe, vật nặng đè hoặc bị đánh.",
          "Vị trí cơ thể bị va đập.",
          "Bệnh nhân có đội mũ bảo hiểm hoặc thắt dây an toàn hay không.",
          "Có bất tỉnh sau tai nạn không?",
          "Có nôn, co giật, chảy máu tai mũi hoặc quên sự việc không?",
          "Bệnh nhân đã được di chuyển như thế nào?",
          "Có chảy máu và đã băng ép ở đâu?",
          "Khi nghi ngờ chấn thương đầu, cổ hoặc cột sống, không nên yêu cầu người bệnh tự ngồi dậy, đi lại hoặc xoay cổ. Người bệnh nên được giữ ở tư thế đang nằm, trừ khi bắt buộc phải di chuyển để tránh nguy hiểm, thực hiện hồi sức hoặc kiểm soát chảy máu.",
          "Không tự nắn xương, kéo thẳng tay chân hoặc tháo mũ bảo hiểm của người bị tai nạn nếu không được đào tạo, trừ trường hợp cần thực hiện hồi sức và mũ bảo hiểm cản trở đường thở.",
          "Nếu nghi ngờ ngộ độc, cần mang theo gì?",
          "Khi bệnh nhân có thể đã uống nhầm thuốc, hóa chất hoặc dùng quá liều, người nhà nên mang theo nếu an toàn:",
          "Vỏ thuốc, vỉ thuốc hoặc lọ thuốc.",
          "Bao bì hóa chất.",
          "Nhãn sản phẩm.",
          "Ảnh chụp thành phần trên bao bì.",
          "Thông tin về lượng có thể đã sử dụng.",
          "Thời điểm tiếp xúc hoặc uống phải.",
          "Mẫu chất nghi ngờ nếu nhân viên cấp cứu hướng dẫn.",
          "Không cầm trực tiếp hóa chất bằng tay trần và không để chất độc rò rỉ trong quá trình vận chuyển.",
          "Đặc biệt, không tự gây nôn, không cho uống chanh, giấm, nước muối hoặc một loại “thuốc giải” truyền miệng. Một số chất có thể tiếp tục gây tổn thương đường tiêu hóa khi bị nôn trở lại. Việc gây nôn hoặc trung hòa chất độc chỉ nên thực hiện khi có hướng dẫn của nhân viên y tế.",
          "Có nên cho bệnh nhân ăn uống trước khi đến viện?",
          "Không nên ép bệnh nhân ăn hoặc uống để “lấy sức”, đặc biệt khi người bệnh:",
          "Không tỉnh táo hoàn toàn.",
          "Đang khó thở.",
          "Nôn nhiều.",
          "Vừa co giật.",
          "Có nguy cơ sặc.",
          "Nghi ngờ ngộ độc.",
          "Bị chấn thương nặng.",
          "Có thể cần phẫu thuật hoặc thủ thuật khẩn cấp.",
          "Người đang bất tỉnh không được cho ăn, uống hoặc uống thuốc vì có nguy cơ sặc vào đường thở.",
          "Nếu bệnh nhân hoàn toàn tỉnh táo, trường hợp có được uống nước hay không còn tùy vào tình trạng cụ thể. Gia đình nên làm theo hướng dẫn của nhân viên cấp cứu hoặc cơ sở y tế đang tiếp nhận.",
          "Nếu bệnh nhân co giật, người nhà nên làm gì?",
          "Khi bệnh nhân đang co giật:",
          "Dọn các vật sắc nhọn hoặc cứng ở xung quanh.",
          "Có thể lót vật mềm dưới đầu nhưng không che mũi, miệng.",
          "Nới lỏng quần áo quanh cổ.",
          "Ghi lại thời điểm bắt đầu và thời gian co giật.",
          "Sau khi cơn co giật dừng, theo dõi nhịp thở và mức độ tỉnh táo.",
          "Gọi cấp cứu khi đây là lần co giật đầu tiên, cơn kéo dài, tái diễn, bệnh nhân bị thương hoặc không tỉnh lại bình thường.",
          "Không ghì chặt tay chân, không cố ngăn cơn co giật và không nhét thìa, đũa, khăn hoặc ngón tay vào miệng bệnh nhân. Cũng không cho bệnh nhân uống nước hoặc thuốc cho đến khi cơn co giật kết thúc và người bệnh tỉnh táo hoàn toàn."
        ]
      },
      {
        "heading": "Nên chọn một người đại diện trao đổi với bác sĩ",
        "paragraphs": [
          "Khi đến khoa Cấp cứu, quá nhiều người cùng nói có thể khiến thông tin bị trùng lặp hoặc mâu thuẫn. Gia đình nên chọn một người:",
          "Biết rõ diễn biến của bệnh nhân.",
          "Nắm được bệnh nền và thuốc đang sử dụng.",
          "Có thể trả lời điện thoại.",
          "Bình tĩnh trao đổi với nhân viên y tế.",
          "Có khả năng liên hệ với những thành viên khác trong gia đình.",
          "Người này nên đi cùng bệnh nhân nếu điều kiện cho phép. Các thành viên còn lại có thể hỗ trợ tìm hồ sơ, chuẩn bị vật dụng hoặc liên hệ người thân.",
          "Bàn giao thông tin như thế nào khi đến khoa Cấp cứu?",
          "Người nhà có thể cung cấp thông tin theo thứ tự ngắn gọn:"
        ]
      },
      {
        "heading": "Xử trí trước viện:“Gia đình chưa cho uống thêm thuốc.”",
        "paragraphs": [
          "Tổ chức Y tế Thế giới khuyến nghị quá trình bàn giao cấp cứu cần truyền đạt rõ đánh giá ban đầu, lý do chuyển viện, diễn biến và những xử trí đã thực hiện.",
          "Nếu bệnh nhân đã được sơ cứu, uống thuốc, tiêm thuốc hoặc thực hiện ép tim, người nhà cần nói rõ tên biện pháp và thời điểm thực hiện.",
          "Vì sao có người đến sau nhưng được khám trước?",
          "Sau khi tiếp nhận, nhân viên y tế sẽ phân loại người bệnh dựa trên mức độ nghiêm trọng và tính khẩn cấp. Người có nguy cơ đe dọa tính mạng cần được xử trí trước, trong khi người có tình trạng ổn định hơn có thể phải chờ.",
          "Đây được gọi là phân loại cấp cứu. Thứ tự xử trí không nhất thiết dựa trên ai đến trước mà dựa trên ai cần can thiệp sớm hơn.",
          "Trong thời gian chờ, người nhà cần báo ngay cho nhân viên y tế nếu bệnh nhân:",
          "Đau tăng lên.",
          "Khó thở hơn.",
          "Trở nên lơ mơ.",
          "Xuất hiện co giật.",
          "Chảy máu nhiều hơn.",
          "Nôn liên tục.",
          "Tím môi hoặc vã mồ hôi lạnh.",
          "Có biểu hiện khác rõ rệt so với lúc mới đến.",
          "Không nên im lặng chờ nếu tình trạng đang thay đổi."
        ]
      },
      {
        "heading": "Những sai lầm người nhà nên tránh",
        "paragraphs": [
          "Trong tình huống khẩn cấp, một số hành động tưởng là giúp đỡ lại có thể gây nguy hiểm:",
          "Chờ tìm đủ hồ sơ mới đưa bệnh nhân đi viện.",
          "Chở bệnh nhân nặng bằng xe máy.",
          "Để bệnh nhân khó thở hoặc lơ mơ tự lái xe.",
          "Tự cho uống thêm thuốc kê đơn.",
          "Ép người bệnh ăn uống.",
          "Đánh thức người bất tỉnh bằng cách tát hoặc hắt nước.",
          "Nhét đồ vật vào miệng người đang co giật.",
          "Tự gây nôn khi nghi ngờ ngộ độc.",
          "Tự di chuyển người có thể bị chấn thương cột sống.",
          "Tụ tập quá đông quanh bệnh nhân.",
          "Quay phim, chụp ảnh làm cản trở việc cấp cứu.",
          "Che giấu việc người bệnh đã uống rượu, dùng thuốc hoặc tiếp xúc hóa chất.",
          "Nhân viên y tế cần thông tin chính xác để lựa chọn cách xử trí an toàn. Vì vậy, gia đình nên cung cấp trung thực, kể cả những thông tin được xem là nhạy cảm."
        ]
      },
      {
        "heading": "Checklist nhanh trước khi đưa bệnh nhân đến viện",
        "paragraphs": [
          "Trong điều kiện cho phép, người nhà có thể kiểm tra nhanh:",
          "Đã gọi cấp cứu khi tình trạng nghiêm trọng.",
          "Có người theo dõi bệnh nhân trên đường.",
          "Đã ghi lại thời điểm khởi phát triệu chứng.",
          "Có danh sách thuốc hoặc ảnh chụp thuốc đang dùng.",
          "Đã ghi nhận bệnh nền và dị ứng.",
          "Có giấy tờ tùy thân, bảo hiểm y tế nếu lấy được nhanh.",
          "Có hồ sơ bệnh cũ quan trọng.",
          "Có vỏ thuốc hoặc hóa chất nếu nghi ngờ ngộ độc.",
          "Đã chọn một người đại diện trao đổi với bác sĩ.",
          "Không cho bệnh nhân ăn uống hoặc dùng thêm thuốc tùy tiện.",
          "Danh sách này chỉ nhằm giúp việc bàn giao thuận lợi hơn. Không cần chờ hoàn thành tất cả mới đưa bệnh nhân đi viện."
        ]
      },
      {
        "heading": "Cấp cứu 24/7 tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Bộ phận Cấp cứu tại Bệnh viện Đa khoa Hồng Phúc tiếp nhận người bệnh 24 giờ mỗi ngày, bao gồm các trường hợp bệnh cấp tính, tai nạn và tình trạng sức khỏe diễn biến bất thường.",
          "Khi đến viện, người bệnh được đánh giá ban đầu, phân loại mức độ khẩn cấp và xử trí theo tình trạng thực tế. Khi cần thiết, bác sĩ Cấp cứu sẽ phối hợp với các chuyên khoa, xét nghiệm và chẩn đoán hình ảnh để phục vụ quá trình đánh giá và điều trị.",
          "Người nhà nên cung cấp đầy đủ thời điểm xuất hiện triệu chứng, bệnh nền, thuốc đang dùng, dị ứng và các biện pháp đã thực hiện trước khi đến viện. Những thông tin ngắn gọn nhưng chính xác có thể giúp quá trình tiếp nhận diễn ra thuận lợi hơn.",
          "Kết luận",
          "Khi đưa bệnh nhân đến viện cấp cứu, điều quan trọng nhất không phải là chuẩn bị một chiếc túi thật đầy mà là hành động đúng thứ tự: nhận biết dấu hiệu nguy hiểm, gọi hỗ trợ, vận chuyển an toàn và cung cấp thông tin rõ ràng.",
          "Giấy tờ, hồ sơ bệnh cũ, thuốc đang dùng và thông tin dị ứng đều cần thiết, nhưng không được làm chậm thời điểm cấp cứu. Trong mọi trường hợp, nếu bệnh nhân khó thở, mất ý thức, đau ngực dữ dội, có dấu hiệu đột quỵ, chảy máu nhiều hoặc tình trạng xấu đi nhanh, gia đình nên liên hệ cấp cứu và đưa người bệnh đến cơ sở y tế sớm nhất có thể.",
          "Nội dung trong bài viết mang tính chất hướng dẫn tham khảo, không thay thế hướng dẫn trực tiếp của nhân viên cấp cứu hoặc việc thăm khám, chẩn đoán và điều trị từ bác sĩ."
        ]
      }
    ]
  },
  "kiem-soat-nhiem-khuan-trong-benh-vien-quoc-te-vi-sao-nguoi-benh-nen-quan-tam": {
    "sourceFile": "48.Kiểm soát nhiễm khuẩn trong bệnh viện đa khoa hồng phúc  vì sao người bệnh nên quan tâm.docx",
    "title": "Cấp cứu 24/7: Người nhà cần chuẩn bị gì khi đưa bệnh nhân đến viện?",
    "excerpt": "Khi người thân bất ngờ đau ngực, khó thở, ngất, co giật hoặc gặp tai nạn, phần lớn gia đình đều rơi vào trạng thái luống cuống. Người đi tìm giấy tờ, người gọi xe, người cố cho bệnh nhân uống thuốc… nhưng lại quên mất những thông tin bác sĩ cần biết nhất.",
    "intro": [
      "Khi người thân bất ngờ đau ngực, khó thở, ngất, co giật hoặc gặp tai nạn, phần lớn gia đình đều rơi vào trạng thái luống cuống. Người đi tìm giấy tờ, người gọi xe, người cố cho bệnh nhân uống thuốc… nhưng lại quên mất những thông tin bác sĩ cần biết nhất.",
      "Trong tình huống cấp cứu, điều quan trọng hàng đầu là đưa bệnh nhân đến cơ sở y tế an toàn và sớm nhất có thể. Giấy tờ, thuốc đang dùng và hồ sơ bệnh cũ rất hữu ích, nhưng không nên trở thành lý do làm chậm việc gọi cấp cứu hoặc đưa người bệnh đến viện.",
      "Khi nào cần gọi cấp cứu ngay?",
      "Không phải trường hợp nào cũng phù hợp để gia đình tự chở bệnh nhân bằng xe máy hoặc ô tô cá nhân. Nếu người bệnh có biểu hiện nghiêm trọng, việc gọi nhân viên cấp cứu giúp bệnh nhân được hỗ trợ trên đường di chuyển và hạn chế những rủi ro do vận chuyển không đúng cách.",
      "Các dấu hiệu cần đặc biệt chú ý gồm:",
      "Khó thở, thở yếu, tím môi hoặc có cảm giác không lấy được hơi.",
      "Mất ý thức, gọi hỏi không đáp ứng hoặc tỉnh lại không hoàn toàn.",
      "Đau ngực dữ dội, đau lan lên hàm, vai hoặc cánh tay.",
      "Méo miệng, nói khó, yếu hoặc tê đột ngột một bên cơ thể.",
      "Co giật kéo dài, co giật liên tiếp hoặc không tỉnh lại bình thường.",
      "Chảy máu nhiều, vết thương sâu hoặc nghi ngờ chảy máu bên trong.",
      "Chấn thương đầu, cổ, cột sống hoặc tai nạn giao thông nghiêm trọng.",
      "Bỏng nặng, điện giật hoặc đuối nước.",
      "Nôn ra máu, ho ra máu hoặc đi ngoài ra nhiều máu.",
      "Phản ứng dị ứng kèm khó thở, sưng môi, lưỡi hoặc vùng họng.",
      "Nghi ngờ uống nhầm thuốc, hóa chất hoặc dùng quá liều.",
      "Đau dữ dội xuất hiện đột ngột hoặc tình trạng xấu đi nhanh chóng.",
      "Khó thở, ngất, lú lẫn đột ngột, chảy máu nặng, đau dữ dội, nôn hoặc ho ra máu đều thuộc những dấu hiệu cần được đánh giá cấp cứu.",
      "Tại Việt Nam, người dân có thể gọi 115 để yêu cầu hỗ trợ cấp cứu y tế. Hệ thống cấp cứu 115 thực hiện tiếp nhận thông tin, xử trí ban đầu và vận chuyển người bệnh trong các trường hợp phù hợp.",
      "Khi bệnh nhân không tỉnh, khó thở, chảy máu nhiều hoặc có dấu hiệu đột quỵ, gia đình không nên để bệnh nhân tự đi lại hoặc tự lái xe đến viện."
    ],
    "sections": [
      {
        "heading": "Việc đầu tiên không phải là tìm giấy tờ",
        "paragraphs": [
          "Trong vài phút đầu, người nhà nên ưu tiên theo thứ tự:",
          "Kiểm tra xem bệnh nhân có tỉnh và còn thở hay không.",
          "Gọi người hỗ trợ và liên hệ cấp cứu khi tình trạng nghiêm trọng.",
          "Thực hiện sơ cứu trong phạm vi mình đã được hướng dẫn.",
          "Chuẩn bị thông tin, thuốc và giấy tờ nếu có thể lấy nhanh.",
          "Đưa bệnh nhân đến cơ sở y tế bằng phương tiện an toàn.",
          "Không nên để một người vừa lái xe vừa theo dõi bệnh nhân. Nếu gia đình tự di chuyển bằng ô tô, nên có ít nhất một người ngồi bên cạnh để quan sát nhịp thở, mức độ tỉnh táo và thông báo ngay nếu tình trạng thay đổi.",
          "Người nhà nên chuẩn bị những giấy tờ nào?",
          "Nếu lấy được nhanh và không làm chậm quá trình cấp cứu, gia đình có thể mang theo:",
          "Căn cước công dân hoặc giấy tờ nhận dạng của bệnh nhân.",
          "Thẻ bảo hiểm y tế hoặc thông tin bảo hiểm liên quan.",
          "Giấy khai sinh đối với trẻ nhỏ nếu thuận tiện.",
          "Sổ khám bệnh.",
          "Hồ sơ bệnh án hoặc giấy ra viện gần nhất.",
          "Kết quả xét nghiệm, nội soi, siêu âm hoặc phim chụp trước đây.",
          "Phiếu hẹn và đơn thuốc đang sử dụng.",
          "Thông tin liên hệ của người thân có thể quyết định các vấn đề cần thiết.",
          "Có thể chụp hồ sơ, đơn thuốc hoặc giấy tờ bằng điện thoại nếu không kịp mang bản gốc.",
          "Tuy nhiên, cần nhớ một nguyên tắc đơn giản: có giấy tờ thì tốt, chưa tìm thấy cũng vẫn phải đi viện. Khoa Cấp cứu ưu tiên đánh giá và xử trí tình trạng người bệnh, không nên trì hoãn thời điểm đến viện chỉ vì thiếu một tờ giấy."
        ]
      },
      {
        "heading": "Danh sách thuốc đang dùng rất quan trọng",
        "paragraphs": [
          "Thông tin về thuốc có thể ảnh hưởng trực tiếp đến quyết định điều trị. Một số loại thuốc làm tăng nguy cơ chảy máu, thay đổi huyết áp, đường huyết, nhịp tim hoặc tương tác với thuốc được sử dụng trong cấp cứu.",
          "Người nhà nên mang theo:",
          "Các loại thuốc bệnh nhân đang uống.",
          "Thuốc tiêm, bút tiêm insulin.",
          "Thuốc xịt hen.",
          "Thuốc nhỏ mắt, thuốc dán hoặc thuốc bôi đang dùng.",
          "Vitamin, thực phẩm bổ sung và thuốc không kê đơn.",
          "Đơn thuốc gần nhất.",
          "Tốt nhất nên để thuốc trong bao bì gốc. Nếu không kịp mang thuốc, gia đình có thể chụp rõ tên thuốc, hàm lượng và hướng dẫn sử dụng trên vỏ hộp.",
          "Danh sách nên ghi được ba thông tin:",
          "Tên thuốc.",
          "Liều lượng.",
          "Thời điểm bệnh nhân dùng liều gần nhất.",
          "Các hướng dẫn an toàn thuốc khuyến nghị người bệnh mang theo đầy đủ thuốc đang sử dụng, bao gồm thuốc kê đơn, thuốc không kê đơn, vitamin và sản phẩm thảo dược khi đến bệnh viện.",
          "Không tự ý cho bệnh nhân uống thêm thuốc cũ hoặc tăng liều vì nghĩ rằng thuốc sẽ giúp cầm cự đến khi đến viện. Việc dùng thêm thuốc có thể làm che lấp triệu chứng, gây tương tác hoặc khiến tình trạng nặng hơn."
        ]
      },
      {
        "heading": "Ghi rõ tiền sử bệnh và dị ứng",
        "paragraphs": [
          "Trong tình huống khẩn cấp, bệnh nhân có thể quá mệt, lú lẫn hoặc không thể tự trả lời. Người nhà nên chuẩn bị thông tin ngắn gọn về:",
          "Tăng huyết áp.",
          "Đái tháo đường.",
          "Bệnh tim, rối loạn nhịp tim hoặc đặt máy tạo nhịp.",
          "Tiền sử đột quỵ.",
          "Hen, bệnh phổi mạn tính.",
          "Bệnh gan, suy thận hoặc đang chạy thận.",
          "Động kinh.",
          "Rối loạn đông máu.",
          "Ung thư.",
          "Phẫu thuật hoặc thủ thuật gần đây.",
          "Tiền sử đang mang thai hoặc có khả năng mang thai.",
          "Dị ứng thuốc, thức ăn, hóa chất hoặc vật liệu y tế.",
          "Nếu bệnh nhân từng dị ứng thuốc, cần nói rõ tên thuốc và biểu hiện đã xảy ra, chẳng hạn nổi mề đay, khó thở, tụt huyết áp hay chỉ buồn nôn. Câu nói “bệnh nhân dị ứng nhiều loại thuốc nhưng không nhớ tên” thường chưa đủ để bác sĩ đánh giá nguy cơ.",
          "Hồ sơ sức khỏe cá nhân nên có danh sách thuốc, liều dùng, bệnh mạn tính, tiền sử phẫu thuật và các loại dị ứng."
        ]
      },
      {
        "heading": "Ghi nhớ thời điểm và diễn biến triệu chứng",
        "paragraphs": [
          "Thông tin về thời gian có thể rất quan trọng, đặc biệt trong các trường hợp nghi ngờ đột quỵ, nhồi máu cơ tim, ngộ độc hoặc chấn thương.",
          "Người nhà nên cố gắng xác định:",
          "Bệnh nhân bắt đầu xuất hiện triệu chứng lúc mấy giờ?",
          "Trước đó bệnh nhân còn bình thường vào thời điểm nào?",
          "Triệu chứng xuất hiện đột ngột hay tăng dần?",
          "Bệnh nhân đang làm gì khi sự việc xảy ra?",
          "Có ngã, va đập đầu hoặc tai nạn hay không?",
          "Có sốt, nôn, tiêu chảy, đau ngực hoặc khó thở trước đó không?",
          "Bệnh nhân đã uống thuốc hay được sơ cứu gì?",
          "Triệu chứng có giảm rồi xuất hiện trở lại không?",
          "Không cần kể quá dài. Người nhà có thể ghi vào điện thoại theo mẫu:",
          "“Khoảng 20 giờ 15 phút, bệnh nhân đang ăn tối thì đột ngột nói khó và yếu tay phải. Trước đó lúc 20 giờ vẫn nói chuyện bình thường. Gia đình chưa cho uống thuốc.”",
          "Việc mô tả triệu chứng, thời điểm xuất hiện, thời gian kéo dài và sự thay đổi của triệu chứng giúp nhân viên y tế tiếp nhận thông tin hiệu quả hơn.",
          "Trường hợp tai nạn cần cung cấp những thông tin gì?",
          "Nếu bệnh nhân bị tai nạn, người chứng kiến nên ghi nhớ:",
          "Thời điểm xảy ra tai nạn.",
          "Cơ chế chấn thương: ngã từ độ cao, va chạm xe, vật nặng đè hoặc bị đánh.",
          "Vị trí cơ thể bị va đập.",
          "Bệnh nhân có đội mũ bảo hiểm hoặc thắt dây an toàn hay không.",
          "Có bất tỉnh sau tai nạn không?",
          "Có nôn, co giật, chảy máu tai mũi hoặc quên sự việc không?",
          "Bệnh nhân đã được di chuyển như thế nào?",
          "Có chảy máu và đã băng ép ở đâu?",
          "Khi nghi ngờ chấn thương đầu, cổ hoặc cột sống, không nên yêu cầu người bệnh tự ngồi dậy, đi lại hoặc xoay cổ. Người bệnh nên được giữ ở tư thế đang nằm, trừ khi bắt buộc phải di chuyển để tránh nguy hiểm, thực hiện hồi sức hoặc kiểm soát chảy máu.",
          "Không tự nắn xương, kéo thẳng tay chân hoặc tháo mũ bảo hiểm của người bị tai nạn nếu không được đào tạo, trừ trường hợp cần thực hiện hồi sức và mũ bảo hiểm cản trở đường thở.",
          "Nếu nghi ngờ ngộ độc, cần mang theo gì?",
          "Khi bệnh nhân có thể đã uống nhầm thuốc, hóa chất hoặc dùng quá liều, người nhà nên mang theo nếu an toàn:",
          "Vỏ thuốc, vỉ thuốc hoặc lọ thuốc.",
          "Bao bì hóa chất.",
          "Nhãn sản phẩm.",
          "Ảnh chụp thành phần trên bao bì.",
          "Thông tin về lượng có thể đã sử dụng.",
          "Thời điểm tiếp xúc hoặc uống phải.",
          "Mẫu chất nghi ngờ nếu nhân viên cấp cứu hướng dẫn.",
          "Không cầm trực tiếp hóa chất bằng tay trần và không để chất độc rò rỉ trong quá trình vận chuyển.",
          "Đặc biệt, không tự gây nôn, không cho uống chanh, giấm, nước muối hoặc một loại “thuốc giải” truyền miệng. Một số chất có thể tiếp tục gây tổn thương đường tiêu hóa khi bị nôn trở lại. Việc gây nôn hoặc trung hòa chất độc chỉ nên thực hiện khi có hướng dẫn của nhân viên y tế.",
          "Có nên cho bệnh nhân ăn uống trước khi đến viện?",
          "Không nên ép bệnh nhân ăn hoặc uống để “lấy sức”, đặc biệt khi người bệnh:",
          "Không tỉnh táo hoàn toàn.",
          "Đang khó thở.",
          "Nôn nhiều.",
          "Vừa co giật.",
          "Có nguy cơ sặc.",
          "Nghi ngờ ngộ độc.",
          "Bị chấn thương nặng.",
          "Có thể cần phẫu thuật hoặc thủ thuật khẩn cấp.",
          "Người đang bất tỉnh không được cho ăn, uống hoặc uống thuốc vì có nguy cơ sặc vào đường thở.",
          "Nếu bệnh nhân hoàn toàn tỉnh táo, trường hợp có được uống nước hay không còn tùy vào tình trạng cụ thể. Gia đình nên làm theo hướng dẫn của nhân viên cấp cứu hoặc cơ sở y tế đang tiếp nhận.",
          "Nếu bệnh nhân co giật, người nhà nên làm gì?",
          "Khi bệnh nhân đang co giật:",
          "Dọn các vật sắc nhọn hoặc cứng ở xung quanh.",
          "Có thể lót vật mềm dưới đầu nhưng không che mũi, miệng.",
          "Nới lỏng quần áo quanh cổ.",
          "Ghi lại thời điểm bắt đầu và thời gian co giật.",
          "Sau khi cơn co giật dừng, theo dõi nhịp thở và mức độ tỉnh táo.",
          "Gọi cấp cứu khi đây là lần co giật đầu tiên, cơn kéo dài, tái diễn, bệnh nhân bị thương hoặc không tỉnh lại bình thường.",
          "Không ghì chặt tay chân, không cố ngăn cơn co giật và không nhét thìa, đũa, khăn hoặc ngón tay vào miệng bệnh nhân. Cũng không cho bệnh nhân uống nước hoặc thuốc cho đến khi cơn co giật kết thúc và người bệnh tỉnh táo hoàn toàn."
        ]
      },
      {
        "heading": "Nên chọn một người đại diện trao đổi với bác sĩ",
        "paragraphs": [
          "Khi đến khoa Cấp cứu, quá nhiều người cùng nói có thể khiến thông tin bị trùng lặp hoặc mâu thuẫn. Gia đình nên chọn một người:",
          "Biết rõ diễn biến của bệnh nhân.",
          "Nắm được bệnh nền và thuốc đang sử dụng.",
          "Có thể trả lời điện thoại.",
          "Bình tĩnh trao đổi với nhân viên y tế.",
          "Có khả năng liên hệ với những thành viên khác trong gia đình.",
          "Người này nên đi cùng bệnh nhân nếu điều kiện cho phép. Các thành viên còn lại có thể hỗ trợ tìm hồ sơ, chuẩn bị vật dụng hoặc liên hệ người thân.",
          "Bàn giao thông tin như thế nào khi đến khoa Cấp cứu?",
          "Người nhà có thể cung cấp thông tin theo thứ tự ngắn gọn:"
        ]
      },
      {
        "heading": "Xử trí trước viện:“Gia đình chưa cho uống thêm thuốc.”",
        "paragraphs": [
          "Tổ chức Y tế Thế giới khuyến nghị quá trình bàn giao cấp cứu cần truyền đạt rõ đánh giá ban đầu, lý do chuyển viện, diễn biến và những xử trí đã thực hiện.",
          "Nếu bệnh nhân đã được sơ cứu, uống thuốc, tiêm thuốc hoặc thực hiện ép tim, người nhà cần nói rõ tên biện pháp và thời điểm thực hiện.",
          "Vì sao có người đến sau nhưng được khám trước?",
          "Sau khi tiếp nhận, nhân viên y tế sẽ phân loại người bệnh dựa trên mức độ nghiêm trọng và tính khẩn cấp. Người có nguy cơ đe dọa tính mạng cần được xử trí trước, trong khi người có tình trạng ổn định hơn có thể phải chờ.",
          "Đây được gọi là phân loại cấp cứu. Thứ tự xử trí không nhất thiết dựa trên ai đến trước mà dựa trên ai cần can thiệp sớm hơn.",
          "Trong thời gian chờ, người nhà cần báo ngay cho nhân viên y tế nếu bệnh nhân:",
          "Đau tăng lên.",
          "Khó thở hơn.",
          "Trở nên lơ mơ.",
          "Xuất hiện co giật.",
          "Chảy máu nhiều hơn.",
          "Nôn liên tục.",
          "Tím môi hoặc vã mồ hôi lạnh.",
          "Có biểu hiện khác rõ rệt so với lúc mới đến.",
          "Không nên im lặng chờ nếu tình trạng đang thay đổi."
        ]
      },
      {
        "heading": "Những sai lầm người nhà nên tránh",
        "paragraphs": [
          "Trong tình huống khẩn cấp, một số hành động tưởng là giúp đỡ lại có thể gây nguy hiểm:",
          "Chờ tìm đủ hồ sơ mới đưa bệnh nhân đi viện.",
          "Chở bệnh nhân nặng bằng xe máy.",
          "Để bệnh nhân khó thở hoặc lơ mơ tự lái xe.",
          "Tự cho uống thêm thuốc kê đơn.",
          "Ép người bệnh ăn uống.",
          "Đánh thức người bất tỉnh bằng cách tát hoặc hắt nước.",
          "Nhét đồ vật vào miệng người đang co giật.",
          "Tự gây nôn khi nghi ngờ ngộ độc.",
          "Tự di chuyển người có thể bị chấn thương cột sống.",
          "Tụ tập quá đông quanh bệnh nhân.",
          "Quay phim, chụp ảnh làm cản trở việc cấp cứu.",
          "Che giấu việc người bệnh đã uống rượu, dùng thuốc hoặc tiếp xúc hóa chất.",
          "Nhân viên y tế cần thông tin chính xác để lựa chọn cách xử trí an toàn. Vì vậy, gia đình nên cung cấp trung thực, kể cả những thông tin được xem là nhạy cảm."
        ]
      },
      {
        "heading": "Checklist nhanh trước khi đưa bệnh nhân đến viện",
        "paragraphs": [
          "Trong điều kiện cho phép, người nhà có thể kiểm tra nhanh:",
          "Đã gọi cấp cứu khi tình trạng nghiêm trọng.",
          "Có người theo dõi bệnh nhân trên đường.",
          "Đã ghi lại thời điểm khởi phát triệu chứng.",
          "Có danh sách thuốc hoặc ảnh chụp thuốc đang dùng.",
          "Đã ghi nhận bệnh nền và dị ứng.",
          "Có giấy tờ tùy thân, bảo hiểm y tế nếu lấy được nhanh.",
          "Có hồ sơ bệnh cũ quan trọng.",
          "Có vỏ thuốc hoặc hóa chất nếu nghi ngờ ngộ độc.",
          "Đã chọn một người đại diện trao đổi với bác sĩ.",
          "Không cho bệnh nhân ăn uống hoặc dùng thêm thuốc tùy tiện.",
          "Danh sách này chỉ nhằm giúp việc bàn giao thuận lợi hơn. Không cần chờ hoàn thành tất cả mới đưa bệnh nhân đi viện."
        ]
      },
      {
        "heading": "Cấp cứu 24/7 tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Bộ phận Cấp cứu tại Bệnh viện Đa khoa Hồng Phúc tiếp nhận người bệnh 24 giờ mỗi ngày, bao gồm các trường hợp bệnh cấp tính, tai nạn và tình trạng sức khỏe diễn biến bất thường.",
          "Khi đến viện, người bệnh được đánh giá ban đầu, phân loại mức độ khẩn cấp và xử trí theo tình trạng thực tế. Khi cần thiết, bác sĩ Cấp cứu sẽ phối hợp với các chuyên khoa, xét nghiệm và chẩn đoán hình ảnh để phục vụ quá trình đánh giá và điều trị.",
          "Người nhà nên cung cấp đầy đủ thời điểm xuất hiện triệu chứng, bệnh nền, thuốc đang dùng, dị ứng và các biện pháp đã thực hiện trước khi đến viện. Những thông tin ngắn gọn nhưng chính xác có thể giúp quá trình tiếp nhận diễn ra thuận lợi hơn.",
          "Kết luận",
          "Khi đưa bệnh nhân đến viện cấp cứu, điều quan trọng nhất không phải là chuẩn bị một chiếc túi thật đầy mà là hành động đúng thứ tự: nhận biết dấu hiệu nguy hiểm, gọi hỗ trợ, vận chuyển an toàn và cung cấp thông tin rõ ràng.",
          "Giấy tờ, hồ sơ bệnh cũ, thuốc đang dùng và thông tin dị ứng đều cần thiết, nhưng không được làm chậm thời điểm cấp cứu. Trong mọi trường hợp, nếu bệnh nhân khó thở, mất ý thức, đau ngực dữ dội, có dấu hiệu đột quỵ, chảy máu nhiều hoặc tình trạng xấu đi nhanh, gia đình nên liên hệ cấp cứu và đưa người bệnh đến cơ sở y tế sớm nhất có thể.",
          "Nội dung trong bài viết mang tính chất hướng dẫn tham khảo, không thay thế hướng dẫn trực tiếp của nhân viên cấp cứu hoặc việc thăm khám, chẩn đoán và điều trị từ bác sĩ."
        ]
      }
    ]
  },
  "phau-thuat-tao-hinh-tham-my-an-toan-trong-moi-truong-benh-vien-da-khoa": {
    "sourceFile": "49.Phẫu thuật tạo hình thẩm mỹ an toàn trong môi trường bệnh viện đa khoa hồng phúc.docx",
    "title": "Phẫu thuật tạo hình thẩm mỹ an toàn trong môi trường Bệnh viện Đa khoa Hồng Phúc",
    "excerpt": "Mong muốn cải thiện ngoại hình là nhu cầu chính đáng. Một dáng mũi cân đối hơn, vùng bụng gọn hơn hay vòng ngực phù hợp với vóc dáng có thể giúp nhiều người cảm thấy tự tin hơn trong cuộc sống. Tuy nhiên, khi một phương pháp làm đẹp có sử dụng dao mổ, thuốc gây tê, gây mê hoặc can thiệp vào mô cơ thể, đó không còn đơn thuần là dịch vụ chăm sóc sắc đẹp mà đã trở thành một thủ thuật y khoa cần được kiểm soát chặt chẽ.",
    "intro": [
      "Mong muốn cải thiện ngoại hình là nhu cầu chính đáng. Một dáng mũi cân đối hơn, vùng bụng gọn hơn hay vòng ngực phù hợp với vóc dáng có thể giúp nhiều người cảm thấy tự tin hơn trong cuộc sống. Tuy nhiên, khi một phương pháp làm đẹp có sử dụng dao mổ, thuốc gây tê, gây mê hoặc can thiệp vào mô cơ thể, đó không còn đơn thuần là dịch vụ chăm sóc sắc đẹp mà đã trở thành một thủ thuật y khoa cần được kiểm soát chặt chẽ.",
      "Tại Bệnh viện Đa khoa Hồng Phúc, định hướng phát triển phẫu thuật tạo hình thẩm mỹ không chỉ tập trung vào sự thay đổi về hình thể. Mục tiêu quan trọng hơn là đưa hoạt động thẩm mỹ vào môi trường bệnh viện đa khoa, nơi người thực hiện được thăm khám, đánh giá sức khỏe, phẫu thuật và theo dõi hậu phẫu theo một quy trình y khoa thống nhất.",
      "Nói một cách dễ hiểu, làm đẹp vẫn là đích đến, nhưng an toàn phải là nền móng."
    ],
    "sections": [
      {
        "heading": "Phẫu thuật thẩm mỹ trước hết vẫn là một cuộc phẫu thuật",
        "paragraphs": [
          "Phẫu thuật tạo hình thẩm mỹ có thể bao gồm những can thiệp trên khuôn mặt, ngực, bụng, tay chân hoặc các vùng khác trên cơ thể. Tùy phương pháp, bác sĩ có thể cần bóc tách mô, cắt bỏ da và mỡ thừa, đặt vật liệu cấy ghép, khâu tạo hình hoặc sử dụng thuốc gây mê, gây tê.",
          "Dù mục tiêu là cải thiện thẩm mỹ, người thực hiện vẫn có thể gặp những nguy cơ thường thấy của phẫu thuật như:",
          "Chảy máu hoặc tụ máu.",
          "Nhiễm trùng.",
          "Phản ứng với thuốc gây mê, gây tê.",
          "Sưng đau kéo dài.",
          "Tụ dịch.",
          "Vết thương chậm lành.",
          "Sẹo bất thường.",
          "Tổn thương thần kinh hoặc thay đổi cảm giác.",
          "Hình thể sau mổ không cân đối như mong đợi.",
          "Hình thành cục máu đông trong một số trường hợp.",
          "Cần điều chỉnh hoặc phẫu thuật lại.",
          "Không có cuộc phẫu thuật nào hoàn toàn không có rủi ro. Với một số thủ thuật thẩm mỹ, kết quả thực tế cũng có thể khác với hình dung ban đầu và người bệnh đôi khi cần thêm can thiệp để xử lý biến chứng hoặc điều chỉnh kết quả.",
          "Vì vậy, những lời quảng cáo như “không đau”, “không biến chứng”, “đẹp vĩnh viễn” hoặc “cam kết giống hình mẫu” cần được nhìn nhận thận trọng.",
          "“Nâng chuẩn” thẩm mỹ bắt đầu từ việc chọn đúng môi trường thực hiện",
          "Hình ảnh trước và sau phẫu thuật thường là điều đầu tiên thu hút sự chú ý. Tuy nhiên, một cơ sở thẩm mỹ an toàn cần được đánh giá bằng nhiều tiêu chí hơn một bộ ảnh đẹp.",
          "Những câu hỏi quan trọng nên được đặt ra là:",
          "Người trực tiếp phẫu thuật có đủ chuyên môn và được phép thực hiện kỹ thuật đó không?",
          "Cơ sở có được cấp phép cho phạm vi can thiệp tương ứng không?",
          "Người bệnh có được khám sức khỏe trước mổ không?",
          "Thuốc gây mê, gây tê được sử dụng và theo dõi như thế nào?",
          "Phòng mổ, thiết bị và quy trình kiểm soát nhiễm khuẩn ra sao?",
          "Ai sẽ theo dõi người bệnh sau phẫu thuật?",
          "Nếu xảy ra tình huống bất thường, cơ sở có kế hoạch xử trí như thế nào?",
          "Người bệnh có được tái khám và hỗ trợ sau khi trở về nhà không?",
          "Bộ Y tế đã nhiều lần khuyến cáo người dân chỉ nên thực hiện các can thiệp y tế tại cơ sở được cấp phép và đáp ứng điều kiện chuyên môn. Các tiêu chí về nhân sự, phòng phẫu thuật, thiết bị và năng lực của bác sĩ cũng được các tổ chức chuyên ngành xem là những thành phần quan trọng của an toàn phẫu thuật thẩm mỹ.",
          "Vì sao môi trường bệnh viện đa khoa là một lợi thế?",
          "Một ca phẫu thuật thẩm mỹ không chỉ có bác sĩ tạo hình. Đằng sau quá trình đó còn có thể cần sự tham gia của bác sĩ gây mê hồi sức, điều dưỡng phòng mổ, nhân viên xét nghiệm, chẩn đoán hình ảnh và những chuyên khoa liên quan.",
          "Môi trường bệnh viện đa khoa tạo điều kiện để quá trình chăm sóc được nhìn nhận toàn diện hơn."
        ]
      },
      {
        "heading": "Đánh giá sức khỏe trước khi quyết định phẫu thuật",
        "paragraphs": [
          "Không phải người có mong muốn làm đẹp nào cũng có thể tiến hành phẫu thuật ngay. Trước khi đưa ra quyết định, bác sĩ cần khai thác:",
          "Tiền sử bệnh tim mạch, tăng huyết áp.",
          "Đái tháo đường.",
          "Hen hoặc bệnh phổi.",
          "Bệnh gan, thận.",
          "Rối loạn đông máu.",
          "Tiền sử dị ứng.",
          "Phản ứng với thuốc gây mê hoặc gây tê trước đây.",
          "Phẫu thuật đã từng thực hiện.",
          "Tình trạng mang thai hoặc cho con bú.",
          "Thuốc, thực phẩm bổ sung đang sử dụng.",
          "Thói quen hút thuốc, uống rượu.",
          "Tiền sử hình thành sẹo lồi hoặc vết thương lâu lành.",
          "Tùy loại phẫu thuật và tình trạng sức khỏe, người bệnh có thể được chỉ định xét nghiệm máu, điện tim, chụp X-quang, siêu âm hoặc khám thêm chuyên khoa.",
          "Việc kiểm tra này không phải là một bước thủ tục cho đủ hồ sơ. Mục đích là nhận diện những yếu tố có thể làm tăng nguy cơ chảy máu, nhiễm trùng, biến cố gây mê hoặc chậm lành vết thương."
        ]
      },
      {
        "heading": "Có sự phối hợp của bác sĩ gây mê hồi sức",
        "paragraphs": [
          "Với những can thiệp cần gây mê hoặc an thần, bác sĩ gây mê hồi sức có vai trò đánh giá người bệnh trước phẫu thuật, lựa chọn phương pháp vô cảm phù hợp và theo dõi các chức năng sống trong suốt quá trình thực hiện.",
          "Nhịp tim, huyết áp, nhịp thở, độ bão hòa oxy và mức độ đáp ứng của người bệnh cần được giám sát phù hợp với loại hình gây mê, gây tê. Người bệnh cũng phải được theo dõi trong giai đoạn hồi tỉnh trước khi chuyển sang khu vực chăm sóc tiếp theo hoặc được phép ra về.",
          "Thuốc gây mê nhìn chung được sử dụng an toàn khi có đánh giá và giám sát thích hợp, nhưng vẫn có thể gây ra tác dụng không mong muốn. Vì vậy, người bệnh cần thông báo đầy đủ bệnh nền, thuốc đang dùng và tiền sử phản ứng với gây mê."
        ]
      },
      {
        "heading": "Có điều kiện phối hợp nhiều chuyên khoa",
        "paragraphs": [
          "Một người muốn phẫu thuật tạo hình có thể đồng thời mắc bệnh tuyến giáp, tăng huyết áp, đái tháo đường hoặc thiếu máu. Khi cần, bác sĩ tạo hình có thể phối hợp với chuyên khoa liên quan để đánh giá xem bệnh đã được kiểm soát đủ an toàn cho phẫu thuật hay chưa.",
          "Sự phối hợp này đặc biệt có ý nghĩa với:",
          "Người trung niên hoặc cao tuổi.",
          "Người có bệnh mạn tính.",
          "Người từng gặp biến cố khi phẫu thuật.",
          "Người sử dụng nhiều loại thuốc.",
          "Người muốn thực hiện nhiều vùng trong cùng một lần.",
          "Người cần một cuộc phẫu thuật kéo dài.",
          "Người đến sửa chữa biến chứng sau can thiệp trước đó.",
          "Trong một số trường hợp, quyết định an toàn nhất có thể là trì hoãn phẫu thuật, điều trị ổn định bệnh nền hoặc lựa chọn phương pháp ít xâm lấn hơn."
        ]
      },
      {
        "heading": "Quy trình an toàn cần bắt đầu từ buổi tư vấn đầu tiên",
        "paragraphs": [
          "Một cuộc tư vấn thẩm mỹ đúng nghĩa không chỉ là chọn dáng mũi, kích thước túi ngực hoặc xem hình ảnh mô phỏng. Bác sĩ cần đánh giá cả cấu trúc giải phẫu, sức khỏe và mong muốn thực tế của người bệnh."
        ]
      },
      {
        "heading": "Lắng nghe mục tiêu thay đổi",
        "paragraphs": [
          "Người thực hiện nên nói rõ mình chưa hài lòng ở điểm nào và mong muốn thay đổi ra sao. Bác sĩ sẽ xem xét mong muốn đó có phù hợp với cấu trúc cơ thể, độ tuổi, chất lượng da và tình trạng sức khỏe hay không.",
          "Một kết quả được xem là phù hợp không nhất thiết phải chạy theo một khuôn mẫu duy nhất. Vẻ đẹp cần có sự hài hòa với tổng thể khuôn mặt, vóc dáng và đặc điểm riêng của mỗi người."
        ]
      },
      {
        "heading": "Giải thích giới hạn của phương pháp",
        "paragraphs": [
          "Bác sĩ cần trao đổi rõ:",
          "Phương pháp dự kiến thực hiện.",
          "Vị trí và kích thước đường mổ.",
          "Loại gây mê hoặc gây tê.",
          "Thời gian phẫu thuật dự kiến.",
          "Thời gian theo dõi tại viện.",
          "Mức độ sưng đau thường gặp.",
          "Khoảng thời gian cần nghỉ ngơi.",
          "Vị trí có thể để lại sẹo.",
          "Kết quả có thể đạt được.",
          "Những giới hạn không thể khắc phục hoàn toàn.",
          "Nguy cơ và phương án xử trí khi có bất thường.",
          "Tư vấn trung thực không làm người bệnh sợ hãi. Ngược lại, việc hiểu rõ lợi ích và rủi ro giúp mỗi người đưa ra quyết định phù hợp hơn thay vì lựa chọn chỉ vì cảm xúc nhất thời."
        ]
      },
      {
        "heading": "Đánh giá kỳ vọng và trạng thái tâm lý",
        "paragraphs": [
          "Một số người kỳ vọng phẫu thuật sẽ giải quyết mọi vấn đề trong cuộc sống hoặc giúp mình giống hoàn toàn một người khác. Đây là những mong đợi khó đạt được.",
          "Bác sĩ có thể khuyên người bệnh cân nhắc thêm khi nhận thấy:",
          "Liên tục không hài lòng dù đã thực hiện nhiều thủ thuật.",
          "Mong muốn thay đổi quá mức so với đặc điểm cơ thể.",
          "Quyết định phẫu thuật do bị ép buộc hoặc chịu áp lực từ người khác.",
          "Đang trong giai đoạn khủng hoảng tâm lý.",
          "Không chấp nhận khả năng xuất hiện sẹo, sưng hoặc thời gian hồi phục.",
          "Mong đợi kết quả hoàn hảo tuyệt đối.",
          "Phẫu thuật thẩm mỹ nên là quyết định tự nguyện, được cân nhắc khi người thực hiện có sức khỏe và tâm lý tương đối ổn định."
        ]
      },
      {
        "heading": "An toàn trong phòng mổ không chỉ phụ thuộc vào tay nghề bác sĩ",
        "paragraphs": [
          "Kỹ thuật của phẫu thuật viên rất quan trọng, nhưng một ca mổ an toàn còn phụ thuộc vào hoạt động của cả ê-kíp.",
          "Trước khi bắt đầu phẫu thuật, đội ngũ y tế cần xác nhận đúng người bệnh, đúng phương pháp, đúng vị trí can thiệp, tình trạng dị ứng và các nguy cơ liên quan đến gây mê hoặc chảy máu. Trong ca mổ, dụng cụ, vật tư, thiết bị theo dõi và phương án xử trí tình huống bất thường phải được chuẩn bị phù hợp.",
          "Danh mục kiểm tra an toàn phẫu thuật của Tổ chức Y tế Thế giới được xây dựng để giảm sai sót, tăng khả năng giao tiếp và phối hợp giữa phẫu thuật viên, bác sĩ gây mê và điều dưỡng.",
          "Một quy trình phẫu thuật thẩm mỹ “nâng chuẩn” cần quan tâm đến:",
          "Xác nhận danh tính và hồ sơ người bệnh.",
          "Đánh dấu vị trí phẫu thuật khi cần.",
          "Kiểm tra tiền sử dị ứng.",
          "Rà soát thuốc và nguy cơ chảy máu.",
          "Kiểm tra thiết bị gây mê, cấp cứu và theo dõi.",
          "Kiểm soát vô khuẩn.",
          "Đếm dụng cụ và vật tư trước khi kết thúc.",
          "Bàn giao rõ kế hoạch chăm sóc hậu phẫu.",
          "Đây là những công việc diễn ra phía sau cánh cửa phòng mổ nhưng có ảnh hưởng trực tiếp đến sự an toàn của người bệnh."
        ]
      },
      {
        "heading": "Kiểm soát nhiễm khuẩn là một phần không thể tách rời",
        "paragraphs": [
          "Bất kỳ đường rạch nào trên cơ thể cũng tạo ra nguy cơ vi khuẩn xâm nhập vào vết thương. Nhiễm khuẩn có thể chỉ khu trú ở da nhưng cũng có khả năng lan vào mô sâu và cần thêm thuốc, thủ thuật hoặc phẫu thuật để xử lý.",
          "Để giảm nguy cơ, quy trình cần bao gồm:",
          "Hướng dẫn vệ sinh cơ thể trước mổ.",
          "Chuẩn bị vùng phẫu thuật đúng cách.",
          "Sử dụng dụng cụ và vật tư bảo đảm vô khuẩn.",
          "Tuân thủ vệ sinh tay.",
          "Kiểm soát môi trường phòng mổ.",
          "Sử dụng kháng sinh dự phòng khi có chỉ định.",
          "Chăm sóc và thay băng đúng quy trình.",
          "Hướng dẫn người bệnh nhận biết dấu hiệu nhiễm trùng sau khi về nhà.",
          "Người bệnh không nên tự mua kháng sinh uống trước hoặc sau phẫu thuật. Loại thuốc, liều lượng và thời gian sử dụng cần được bác sĩ quyết định dựa trên kỹ thuật thực hiện và tình trạng cụ thể."
        ]
      },
      {
        "heading": "Theo dõi hậu phẫu là lúc vẻ đẹp bắt đầu thành hình",
        "paragraphs": [
          "Phẫu thuật kết thúc không có nghĩa là quá trình điều trị đã hoàn tất. Cơ thể cần thời gian để giảm sưng, lành vết thương và ổn định mô.",
          "Trong giai đoạn đầu, nhân viên y tế có thể theo dõi:",
          "Mạch, huyết áp, nhịp thở.",
          "Mức độ tỉnh táo.",
          "Tình trạng đau.",
          "Chảy máu hoặc tụ dịch.",
          "Màu sắc và nhiệt độ vùng phẫu thuật.",
          "Khả năng ăn uống, đi lại và tiểu tiện.",
          "Phản ứng với thuốc.",
          "Tình trạng băng, dẫn lưu hoặc trang phục định hình.",
          "Thời gian theo dõi tại viện phụ thuộc vào loại phẫu thuật, phương pháp gây mê, thể trạng và diễn biến sau mổ. Có người có thể về trong ngày, nhưng cũng có trường hợp cần lưu viện lâu hơn.",
          "Việc quyết định ra viện không nên chỉ dựa trên mong muốn về sớm. Người bệnh cần đạt các điều kiện an toàn theo đánh giá của bác sĩ."
        ]
      },
      {
        "heading": "Chăm sóc sau mổ cần được hướng dẫn rõ ràng",
        "paragraphs": [
          "Trước khi ra viện, người bệnh và người chăm sóc cần biết:",
          "Cách sử dụng thuốc.",
          "Cách giữ vết mổ sạch và khô.",
          "Thời điểm được tắm.",
          "Cách đeo trang phục hoặc dụng cụ định hình.",
          "Tư thế nằm và vận động phù hợp.",
          "Những thực phẩm cần lưu ý nếu có.",
          "Thời điểm thay băng, cắt chỉ.",
          "Lịch tái khám.",
          "Số điện thoại cần liên hệ khi có vấn đề.",
          "Những biểu hiện bình thường và dấu hiệu cảnh báo.",
          "Không nên tự tháo băng, nặn dịch, massage mạnh hoặc bôi thuốc dân gian lên vết mổ. Việc đeo nịt, áo định hình hoặc băng ép quá chặt cũng có thể gây khó chịu và ảnh hưởng tuần hoàn nếu không đúng hướng dẫn.",
          "Dấu hiệu nào cần liên hệ bệnh viện ngay?",
          "Sau phẫu thuật, sưng, bầm và đau ở mức độ nhất định có thể xuất hiện. Tuy nhiên, người bệnh cần liên hệ cơ sở y tế hoặc đến viện sớm nếu có:",
          "Khó thở, đau ngực hoặc ngất.",
          "Đau tăng nhanh và không giảm khi dùng thuốc theo đơn.",
          "Vết mổ chảy máu nhiều.",
          "Một bên vùng phẫu thuật sưng căng đột ngột.",
          "Sốt hoặc rét run.",
          "Vết mổ đỏ lan rộng, nóng hoặc chảy dịch có mùi.",
          "Da vùng phẫu thuật tái nhợt, tím hoặc sẫm màu bất thường.",
          "Nôn liên tục, không thể ăn uống.",
          "Sưng đau một bên chân.",
          "Lú lẫn, mệt lả hoặc phản ứng bất thường sau dùng thuốc.",
          "Dẫn lưu ngừng hoạt động hoặc lượng dịch thay đổi đột ngột.",
          "Bất kỳ biểu hiện nào khiến người bệnh cảm thấy tình trạng đang xấu đi.",
          "Sưng, đỏ hoặc đau tăng dần có thể là dấu hiệu cần kiểm tra nhiễm trùng hoặc biến chứng sau mổ. Người bệnh nên quay lại nơi đã thực hiện phẫu thuật để được đánh giá thay vì tự điều trị tại nhà.",
          "Ai cần thận trọng hơn khi phẫu thuật thẩm mỹ?",
          "Không phải mọi yếu tố nguy cơ đều khiến một người hoàn toàn không thể phẫu thuật. Tuy nhiên, một số trường hợp cần được đánh giá kỹ hơn:",
          "Đang mang thai hoặc cho con bú.",
          "Đang mắc bệnh cấp tính hoặc nhiễm trùng.",
          "Đái tháo đường chưa được kiểm soát.",
          "Huyết áp không ổn định.",
          "Bệnh tim, phổi, gan hoặc thận.",
          "Rối loạn đông máu.",
          "Thiếu máu.",
          "Béo phì.",
          "Hút thuốc lá hoặc sử dụng nicotine.",
          "Đang dùng thuốc chống đông, thuốc nội tiết hoặc thuốc giảm cân.",
          "Có tiền sử sẹo lồi.",
          "Đã phẫu thuật nhiều lần tại cùng một vùng.",
          "Có phản ứng bất thường với gây mê.",
          "Muốn kết hợp quá nhiều kỹ thuật trong một lần.",
          "Trong những trường hợp này, bác sĩ có thể yêu cầu điều trị ổn định bệnh nền, ngừng hút thuốc, điều chỉnh một số thuốc theo hướng dẫn hoặc chia kế hoạch thành nhiều giai đoạn.",
          "Người bệnh tuyệt đối không nên tự ngừng thuốc chống đông, thuốc tim mạch, thuốc đái tháo đường hoặc thuốc điều trị mạn tính trước phẫu thuật.",
          "Chuẩn bị gì trước ngày phẫu thuật?",
          "Để quá trình diễn ra thuận lợi, người bệnh nên:",
          "Cung cấp trung thực tiền sử sức khỏe.",
          "Liệt kê tất cả thuốc và thực phẩm bổ sung đang dùng.",
          "Thông báo tiền sử dị ứng và phản ứng với gây mê.",
          "Thực hiện đầy đủ xét nghiệm và khám chuyên khoa được chỉ định.",
          "Không hút thuốc và sử dụng nicotine theo thời gian bác sĩ khuyến cáo.",
          "Hạn chế rượu bia.",
          "Không tự uống aspirin, thuốc giảm đau hoặc thuốc bổ không được hướng dẫn.",
          "Thực hiện đúng yêu cầu nhịn ăn, nhịn uống trước gây mê.",
          "Tắm và vệ sinh cơ thể theo hướng dẫn.",
          "Không tự cạo vùng dự kiến phẫu thuật.",
          "Sắp xếp người thân đưa đón và chăm sóc trong giai đoạn đầu.",
          "Chuẩn bị quần áo rộng, dễ mặc.",
          "Đọc kỹ và hỏi lại những điều chưa hiểu trước khi ký xác nhận đồng ý phẫu thuật.",
          "Nếu xuất hiện sốt, ho, khó thở, tiêu chảy, tổn thương da hoặc kinh nguyệt bất thường trước ngày mổ, người bệnh nên báo lại cho bác sĩ. Đôi khi dời lịch phẫu thuật là lựa chọn an toàn hơn.",
          "Làm sao để chọn một dịch vụ thẩm mỹ đáng tin cậy?",
          "Trước khi quyết định, khách hàng nên trực tiếp hỏi cơ sở y tế:",
          "Kỹ thuật này có nằm trong phạm vi chuyên môn được cấp phép không?",
          "Ai là người trực tiếp phẫu thuật?",
          "Bác sĩ đã được đào tạo về phẫu thuật tạo hình thẩm mỹ như thế nào?",
          "Ca mổ được thực hiện ở đâu?",
          "Ai chịu trách nhiệm gây mê hoặc gây tê?",
          "Tôi cần làm những xét nghiệm nào?",
          "Nguy cơ thường gặp và biến chứng nghiêm trọng là gì?",
          "Tôi cần ở lại theo dõi bao lâu?",
          "Khi có biến chứng, cơ sở xử trí và chuyển tuyến như thế nào?",
          "Tôi sẽ được theo dõi sau mổ trong bao lâu?",
          "Tổng chi phí đã bao gồm thuốc, vật tư, lưu viện và tái khám hay chưa?",
          "Vật liệu cấy ghép, nếu sử dụng, có thông tin nhận diện và nguồn gốc rõ ràng không?",
          "Một cơ sở nghiêm túc sẽ không né tránh những câu hỏi này. Bác sĩ cũng không nên thúc ép khách hàng quyết định ngay trong buổi tư vấn bằng chương trình giảm giá có thời hạn quá ngắn."
        ]
      },
      {
        "heading": "Phẫu thuật tạo hình thẩm mỹ tại Bệnh viện Đa khoa Hồng Phúc",
        "paragraphs": [
          "Phát triển thẩm mỹ trong môi trường bệnh viện không có nghĩa là làm giảm đi sự tinh tế, riêng tư hoặc trải nghiệm của khách hàng. Ngược lại, đây là cách đưa nhu cầu làm đẹp đến gần hơn với những nguyên tắc an toàn của y khoa hiện đại.",
          "Tại Bệnh viện Đa khoa Hồng Phúc, định hướng của dịch vụ phẫu thuật tạo hình thẩm mỹ là kết hợp ba yếu tố:",
          "Cá nhân hóa về thẩm mỹ:Mỗi người được tư vấn dựa trên đặc điểm khuôn mặt, vóc dáng, chất lượng mô và mong muốn thực tế, thay vì áp dụng một hình mẫu giống nhau.",
          "Kiểm soát về y khoa:Quyết định phẫu thuật được cân nhắc dựa trên tình trạng sức khỏe, kết quả thăm khám, yêu cầu gây mê và mức độ xâm lấn của kỹ thuật.",
          "Liên tục trong chăm sóc:Quá trình không dừng lại khi ca mổ kết thúc mà tiếp tục bằng theo dõi hồi tỉnh, chăm sóc vết thương, tái khám và đánh giá kết quả theo từng giai đoạn.",
          "Những kỹ thuật cụ thể chỉ được thực hiện khi phù hợp với nhu cầu, sức khỏe của khách hàng và phạm vi chuyên môn được phê duyệt. Trong một số trường hợp, bác sĩ có thể tư vấn chưa nên phẫu thuật hoặc đề xuất một giải pháp khác an toàn hơn.",
          "Đây không phải là sự từ chối nhu cầu làm đẹp. Đó chính là cách môi trường bệnh viện đặt sự an toàn và lợi ích lâu dài của người bệnh lên trước."
        ]
      },
      {
        "heading": "Đẹp hơn không cần đánh đổi sự an toàn",
        "paragraphs": [
          "Phẫu thuật tạo hình thẩm mỹ có thể mang đến thay đổi tích cực khi được chỉ định đúng, thực hiện đúng và theo dõi đầy đủ. Nhưng kết quả đẹp không nên chỉ được đánh giá qua hình ảnh ngay sau mổ. Một kết quả có giá trị cần đi cùng sức khỏe được bảo vệ, chức năng cơ thể được tôn trọng và quá trình hồi phục được chăm sóc cẩn thận.",
          "Lựa chọn thực hiện thẩm mỹ trong môi trường Bệnh viện Đa khoa Hồng Phúc là lựa chọn cách tiếp cận coi mỗi ca làm đẹp là một quyết định y khoa cần được chuẩn bị nghiêm túc.",
          "Bởi vẻ đẹp có thể là điều người bệnh mong muốn, nhưng an toàn mới là tiêu chuẩn không nên thỏa hiệp.",
          "Thông tin trong bài viết mang tính chất tham khảo. Chỉ định, phương pháp phẫu thuật và kế hoạch chăm sóc cần được bác sĩ tư vấn trực tiếp dựa trên tình trạng sức khỏe và nhu cầu cụ thể của từng người."
        ]
      }
    ]
  },
  "tai-tao-sau-chan-thuong-bong-hoac-phau-thuat-vai-tro-cua-phau-thuat-tao-hinh-hien-dai": {
    "sourceFile": "50.Tái tạo sau chấn thương, bỏng hoặc phẫu thuật vai trò của phẫu thuật tạo hình hiện đại.docx",
    "title": "Tái tạo sau chấn thương, bỏng hoặc phẫu thuật: Vai trò của phẫu thuật tạo hình hiện đại",
    "excerpt": "Khi nhắc đến phẫu thuật tạo hình, nhiều người thường nghĩ ngay đến nâng mũi, căng da hay chỉnh sửa vóc dáng. Tuy nhiên, phía sau hai chữ “tạo hình” còn có một lĩnh vực y khoa quan trọng: tái tạo những vùng cơ thể bị tổn thương do tai nạn, bỏng, bệnh lý hoặc phẫu thuật.",
    "intro": [
      "Khi nhắc đến phẫu thuật tạo hình, nhiều người thường nghĩ ngay đến nâng mũi, căng da hay chỉnh sửa vóc dáng. Tuy nhiên, phía sau hai chữ “tạo hình” còn có một lĩnh vực y khoa quan trọng: tái tạo những vùng cơ thể bị tổn thương do tai nạn, bỏng, bệnh lý hoặc phẫu thuật.",
      "Trong những trường hợp này, mục tiêu không chỉ là giúp vết thương trông đẹp hơn. Phẫu thuật tạo hình hiện đại còn hướng đến việc che phủ tổn khuyết, bảo vệ các cấu trúc quan trọng, phục hồi vận động và giúp người bệnh trở lại cuộc sống thường ngày.",
      "Phẫu thuật tạo hình tái tạo là gì?",
      "Phẫu thuật tạo hình tái tạo là lĩnh vực sử dụng các kỹ thuật ngoại khoa để sửa chữa hoặc tái tạo những bộ phận bị thay đổi về cấu trúc, hình dạng hoặc chức năng.",
      "Các tổn thương có thể xuất phát từ:",
      "Tai nạn giao thông hoặc tai nạn lao động.",
      "Vết cắt sâu, dập nát hoặc mất mô.",
      "Bỏng nhiệt, bỏng điện hoặc bỏng hóa chất.",
      "Phẫu thuật cắt bỏ khối u.",
      "Nhiễm trùng hoặc vết thương khó lành.",
      "Dị tật bẩm sinh.",
      "Sẹo co kéo gây biến dạng và hạn chế vận động.",
      "Biến chứng sau một số cuộc phẫu thuật.",
      "Theo Hiệp hội Bác sĩ Phẫu thuật Tạo hình Hoa Kỳ, phẫu thuật tái tạo được thực hiện khi một bộ phận cơ thể bị ảnh hưởng về hình thể hoặc chức năng do chấn thương, bất thường phát triển hay bệnh lý. Mục tiêu có thể bao gồm cải thiện khả năng hoạt động, hình dáng và chất lượng sống của người bệnh.",
      "Nói một cách dễ hiểu, phẫu thuật tạo hình không chỉ hỏi rằng: “Vùng tổn thương có đẹp hơn không?”, mà còn phải trả lời những câu hỏi quan trọng hơn:",
      "Vết thương có được che phủ an toàn không?",
      "Xương, gân, mạch máu và dây thần kinh có được bảo vệ không?",
      "Người bệnh có thể cử động, cầm nắm, đi lại hoặc biểu cảm bình thường hơn không?",
      "Kết quả có bền vững trong sinh hoạt lâu dài không?",
      "Hình dáng sau điều trị có giúp người bệnh tự tin hơn không?",
      "Phẫu thuật tái tạo và phẫu thuật thẩm mỹ khác nhau thế nào?",
      "Phẫu thuật thẩm mỹ thường được thực hiện trên một cấu trúc cơ thể tương đối bình thường nhằm cải thiện diện mạo theo mong muốn cá nhân.",
      "Trong khi đó, phẫu thuật tái tạo thường bắt đầu từ một tổn thương, biến dạng hoặc mất chức năng cần được sửa chữa. Người bệnh có thể bị thiếu da, mất mô mềm, lộ gân xương, sẹo co kéo hoặc thay đổi hình dạng sau phẫu thuật.",
      "Tuy vậy, ranh giới giữa tái tạo và thẩm mỹ không phải lúc nào cũng tách biệt hoàn toàn.",
      "Ví dụ, khi tái tạo khuôn mặt sau chấn thương, bác sĩ không chỉ cố gắng che kín vết thương mà còn cần quan tâm đến sự cân đối của mắt, mũi, môi và đường nét khuôn mặt. Khi tái tạo bàn tay, mục tiêu chính là phục hồi cầm nắm, nhưng hình dáng ngón tay và vị trí sẹo cũng ảnh hưởng đến sự tự tin của người bệnh.",
      "Vì thế, thẩm mỹ trong phẫu thuật tái tạo không phải là yếu tố phù phiếm. Hình dáng, sự cân đối và vị trí của sẹo có thể ảnh hưởng trực tiếp đến giao tiếp, công việc, tâm lý và khả năng hòa nhập xã hội.",
      "Phẫu thuật tạo hình có vai trò gì sau chấn thương?",
      "Chấn thương có thể làm tổn thương nhiều lớp của cơ thể cùng lúc, từ da, mỡ, cơ đến gân, dây thần kinh, mạch máu và xương.",
      "Một vết thương nhỏ ngoài da đôi khi có thể khâu trực tiếp. Nhưng với tổn thương dập nát, mất một phần mô hoặc lộ cấu trúc sâu, chỉ đóng miệng vết thương thường không đủ."
    ],
    "sections": [
      {
        "heading": "Che phủ và bảo vệ các cấu trúc quan trọng",
        "paragraphs": [
          "Da là hàng rào bảo vệ cơ thể trước tác nhân bên ngoài. Khi da và mô mềm bị mất, xương, khớp, gân hoặc mạch máu có thể bị lộ ra.",
          "Phẫu thuật tạo hình có thể sử dụng da hoặc mô khỏe mạnh để che phủ vùng tổn khuyết. Việc này giúp:",
          "Bảo vệ mô sâu.",
          "Tạo điều kiện để vết thương lành.",
          "Giảm nguy cơ khô, hoại tử hoặc tổn thương thêm.",
          "Chuẩn bị nền mô cho các bước phục hồi tiếp theo.",
          "Hạn chế tình trạng vết thương kéo dài."
        ]
      },
      {
        "heading": "Phục hồi vận động và cảm giác",
        "paragraphs": [
          "Ở bàn tay, một vết cắt có thể đồng thời làm đứt gân, dây thần kinh và mạch máu. Nếu chỉ khâu da bên ngoài, người bệnh vẫn có thể mất khả năng co duỗi ngón hoặc giảm cảm giác.",
          "Tùy tổn thương, quá trình điều trị có thể cần:",
          "Khâu nối gân.",
          "Sửa chữa dây thần kinh.",
          "Nối mạch máu.",
          "Tái tạo phần mềm.",
          "Cố định hoặc phối hợp xử lý tổn thương xương.",
          "Vật lý trị liệu và phục hồi chức năng sau mổ.",
          "Phẫu thuật bàn tay, chấn thương mặt và tổn thương mô mềm các chi là những lĩnh vực thường có sự tham gia của chuyên ngành tạo hình tái tạo."
        ]
      },
      {
        "heading": "Hỗ trợ bảo tồn chi thể",
        "paragraphs": [
          "Trong một số chấn thương nặng, vùng chân hoặc tay có thể bị mất nhiều da và cơ, trong khi xương hoặc vật liệu cố định xương bị lộ.",
          "Việc đưa mô khỏe mạnh có nguồn cấp máu tốt đến vùng tổn thương có thể hỗ trợ che phủ khuyết hổng, kiểm soát vết thương và tạo điều kiện cho quá trình bảo tồn chi thể. Tuy nhiên, khả năng bảo tồn còn phụ thuộc vào mức độ dập nát, tuần hoàn, nhiễm trùng, tình trạng toàn thân và thời điểm điều trị.",
          "Không phải mọi chi thể đều có thể hoặc nên được giữ lại bằng mọi giá. Bác sĩ cần cân nhắc khả năng phục hồi chức năng, nguy cơ phẫu thuật và chất lượng sống lâu dài của người bệnh."
        ]
      },
      {
        "heading": "Vai trò của phẫu thuật tạo hình trong điều trị bỏng",
        "paragraphs": [
          "Bỏng không chỉ gây tổn thương trên bề mặt da. Những vết bỏng sâu có thể phá hủy hàng rào bảo vệ, làm mất dịch, tăng nguy cơ nhiễm khuẩn và để lại sẹo ảnh hưởng đến chức năng.",
          "Phẫu thuật tạo hình có thể tham gia ở cả giai đoạn cấp tính và giai đoạn tái tạo sau khi vết bỏng đã lành."
        ]
      },
      {
        "heading": "Che phủ vết bỏng sâu",
        "paragraphs": [
          "Khi một vùng da bị tổn thương sâu và không có khả năng tự lành thuận lợi, bác sĩ có thể loại bỏ mô hoại tử rồi sử dụng da ghép để che phủ.",
          "Ghép da là kỹ thuật lấy một phần da khỏe mạnh từ vùng khác trên chính cơ thể người bệnh và đặt lên vùng tổn thương. Da ghép thường được sử dụng trong bỏng, chấn thương hoặc những tình trạng cần thay thế vùng da đã mất.",
          "Vùng lấy da được gọi là “nơi cho da”. Sau mổ, cả vùng ghép và vùng cho da đều cần được chăm sóc, theo dõi và bảo vệ theo hướng dẫn."
        ]
      },
      {
        "heading": "Giải phóng sẹo co kéo",
        "paragraphs": [
          "Khi lành lại, sẹo bỏng có thể trở nên dày, cứng và co rút. Nếu sẹo nằm gần khớp, mí mắt, miệng, cổ hoặc bàn tay, sự co kéo có thể gây:",
          "Khó duỗi hoặc gập khớp.",
          "Hạn chế quay cổ.",
          "Khó nhắm mắt.",
          "Kéo lệch môi.",
          "Khó há miệng.",
          "Biến dạng ngón tay.",
          "Đau, ngứa hoặc nứt loét trên bề mặt sẹo.",
          "Sẹo co kéo sau bỏng có thể làm giảm tầm vận động và chức năng. Khi các phương pháp bảo tồn không mang lại kết quả phù hợp, người bệnh có thể cần phẫu thuật giải phóng sẹo và bổ sung mô bằng ghép da hoặc vạt da."
        ]
      },
      {
        "heading": "Cải thiện chất lượng sẹo",
        "paragraphs": [
          "Không phải mọi sẹo bỏng đều cần phẫu thuật. Tùy tính chất của sẹo, bác sĩ có thể phối hợp:",
          "Dưỡng ẩm và massage sẹo.",
          "Miếng dán hoặc gel silicone.",
          "Trang phục tạo áp lực.",
          "Nẹp chỉnh hình.",
          "Vật lý trị liệu.",
          "Tiêm thuốc vào sẹo trong một số trường hợp.",
          "Laser hoặc thủ thuật khác khi có chỉ định.",
          "Phẫu thuật chỉnh sửa sẹo.",
          "Việc chăm sóc sẹo thường kéo dài và cần được cá thể hóa. Sau khi vết bỏng lành, các biện pháp như dưỡng ẩm, massage, silicone và trang phục áp lực có thể được đưa vào kế hoạch kiểm soát sẹo."
        ]
      },
      {
        "heading": "Phẫu thuật tái tạo sau khi cắt bỏ khối u hoặc phẫu thuật lớn",
        "paragraphs": [
          "Một cuộc phẫu thuật điều trị bệnh có thể để lại vùng thiếu hụt da, mô mềm hoặc một phần cơ quan.",
          "Ví dụ:",
          "Cắt bỏ khối u da có thể để lại khuyết hổng ở mặt.",
          "Phẫu thuật ung thư có thể làm thay đổi hình dạng vú, hàm mặt hoặc thành bụng.",
          "Loại bỏ mô nhiễm trùng có thể để lại vết thương sâu.",
          "Vết mổ bị bục hoặc khó lành có thể làm lộ các cấu trúc bên dưới.",
          "Trong những trường hợp này, phẫu thuật tạo hình giúp tìm phương án đóng vết thương phù hợp mà vẫn cố gắng bảo tồn chức năng và hình dạng.",
          "Quá trình tái tạo đôi khi được thực hiện ngay trong cuộc mổ chính. Ở những trường hợp khác, bác sĩ có thể trì hoãn để kiểm soát nhiễm trùng, theo dõi mô sống hoặc hoàn thành các bước điều trị ưu tiên trước.",
          "Những kỹ thuật nào được sử dụng trong phẫu thuật tạo hình hiện đại?",
          "Không phải tổn thương nào cũng cần một cuộc phẫu thuật phức tạp. Bác sĩ thường lựa chọn giải pháp dựa trên kích thước, độ sâu, vị trí vết thương, mô bị thiếu và tình trạng sức khỏe của người bệnh."
        ]
      },
      {
        "heading": "Khâu đóng trực tiếp",
        "paragraphs": [
          "Nếu vết thương không quá lớn và hai bờ có thể đưa lại gần mà không gây căng quá mức, bác sĩ có thể cắt lọc mô tổn thương rồi khâu đóng trực tiếp.",
          "Đây thường là phương án đơn giản nhất, nhưng không phù hợp nếu việc kéo da làm biến dạng cơ quan, ảnh hưởng tuần hoàn hoặc khiến vết mổ dễ bục.",
          "Ghép da",
          "Ghép da sử dụng một lớp da lấy từ vùng khác để che phủ tổn khuyết. Da ghép không mang theo nguồn cấp máu riêng mà phải nhận dưỡng chất và hình thành mạch máu mới từ nền vết thương.",
          "Vì vậy, nền nhận da phải có điều kiện phù hợp. Ghép da thường khó tồn tại nếu đặt trực tiếp lên một số vùng thiếu cấp máu, mô hoại tử hoặc nhiễm khuẩn chưa được kiểm soát."
        ]
      },
      {
        "heading": "Vạt da và vạt mô",
        "paragraphs": [
          "“Vạt” là một phần mô được chuyển đến vùng tổn thương trong khi vẫn duy trì hoặc được nối lại nguồn cấp máu.",
          "Vạt có thể bao gồm:",
          "Da và mô mỡ.",
          "Cân.",
          "Cơ.",
          "Xương.",
          "Hoặc sự kết hợp của nhiều loại mô.",
          "Vạt tại chỗ sử dụng mô nằm gần vết thương. Vạt vùng sử dụng mô từ khu vực lân cận. Những kỹ thuật này giúp đưa mô khỏe mạnh đến che phủ các vùng phức tạp hoặc tái tạo hình dạng ba chiều."
        ]
      },
      {
        "heading": "Vi phẫu và vạt tự do",
        "paragraphs": [
          "Vi phẫu là kỹ thuật sử dụng kính hiển vi phẫu thuật và dụng cụ chuyên biệt để xử lý các cấu trúc rất nhỏ như mạch máu và dây thần kinh.",
          "Trong chuyển vạt tự do, bác sĩ lấy một phần mô cùng mạch máu từ vùng cho, chuyển đến vùng cần tái tạo rồi nối các mạch máu dưới kính hiển vi. Kỹ thuật này có thể được sử dụng khi vùng lân cận không đủ mô hoặc khi cần che phủ một khuyết hổng lớn và phức tạp.",
          "Vi phẫu cũng có thể tham gia vào:",
          "Nối lại một số bộ phận bị đứt rời.",
          "Sửa chữa dây thần kinh.",
          "Tái tạo sau chấn thương hoặc phẫu thuật ung thư.",
          "Chuyển mô sống từ vùng này sang vùng khác.",
          "Đây là kỹ thuật chuyên sâu, không phải trường hợp nào cũng cần hoặc phù hợp.",
          "Giãn mô",
          "Giãn mô sử dụng một túi chuyên dụng đặt dưới vùng da lành, sau đó được bơm tăng dần thể tích để da giãn ra theo thời gian.",
          "Phần da mới tạo thêm có thể được sử dụng để tái tạo khu vực lân cận. Kỹ thuật này có ưu điểm là màu sắc và đặc điểm da thường gần với vùng cần sửa chữa, nhưng cần thời gian và có thể phải trải qua nhiều giai đoạn."
        ]
      },
      {
        "heading": "Chỉnh sửa sẹo",
        "paragraphs": [
          "Chỉnh sửa sẹo có thể bao gồm cắt bỏ một phần sẹo, thay đổi hướng sẹo, giải phóng co kéo hoặc tái phân bố mô.",
          "Mục tiêu thực tế không phải là làm sẹo biến mất hoàn toàn. Bác sĩ cố gắng giúp sẹo:",
          "Ít co kéo hơn.",
          "Mềm và ổn định hơn.",
          "Nằm theo hướng ít bị chú ý.",
          "Ít ảnh hưởng đến vận động.",
          "Hòa hợp hơn với vùng da xung quanh.",
          "Vì sao hình dáng cũng là một phần của kết quả điều trị?",
          "Một vết thương đã kín nhưng kéo lệch mí mắt vẫn chưa thể được xem là kết quả hoàn chỉnh. Một bàn tay lành nhưng các ngón co rút, khó cầm đồ vẫn cần được tiếp tục phục hồi. Tương tự, một vùng mặt mất cân đối rõ có thể ảnh hưởng đến giao tiếp và tâm lý dù chức năng cơ bản đã được bảo tồn.",
          "Trong phẫu thuật tái tạo, hình dáng và chức năng thường hỗ trợ lẫn nhau:",
          "Tái tạo mí mắt vừa bảo vệ giác mạc, vừa duy trì sự cân đối của khuôn mặt.",
          "Tái tạo môi giúp người bệnh ăn uống, phát âm và thể hiện cảm xúc.",
          "Tái tạo mũi liên quan đến cả đường thở và hình dạng trung tâm khuôn mặt.",
          "Tái tạo bàn tay cần cân bằng giữa vận động, cảm giác và diện mạo.",
          "Giải phóng sẹo vùng cổ vừa cải thiện vận động, vừa giảm biến dạng tư thế.",
          "Vì vậy, yếu tố thẩm mỹ trong tạo hình y khoa thường có mục tiêu rất cụ thể: giúp bộ phận được tái tạo trông gần với tự nhiên, hoạt động thuận lợi và ít gây cản trở cho người bệnh.",
          "Có phải chỉ cần một lần phẫu thuật là hoàn thành?",
          "Không phải lúc nào cũng vậy.",
          "Một số tổn thương có thể được giải quyết trong một cuộc phẫu thuật. Nhưng những trường hợp phức tạp có thể cần điều trị theo nhiều giai đoạn:",
          "Cứu sống và ổn định toàn trạng.",
          "Làm sạch vết thương, kiểm soát nhiễm khuẩn.",
          "Sửa chữa mạch máu, xương hoặc các cấu trúc quan trọng.",
          "Che phủ tổn khuyết.",
          "Phục hồi chức năng.",
          "Chỉnh sửa sẹo hoặc cải thiện hình dạng khi mô đã ổn định.",
          "Lộ trình có thể kéo dài nhiều tuần, nhiều tháng hoặc lâu hơn, đặc biệt với bỏng rộng, chấn thương phức tạp và tổn thương nhiều cơ quan.",
          "Người bệnh nên hiểu rằng tái tạo là một quá trình, không chỉ là một cuộc mổ."
        ]
      },
      {
        "heading": "Phục hồi chức năng quan trọng không kém phẫu thuật",
        "paragraphs": [
          "Kết quả phẫu thuật có thể bị hạn chế nếu người bệnh không vận động, chăm sóc sẹo hoặc sử dụng nẹp theo hướng dẫn.",
          "Phục hồi chức năng giúp:",
          "Duy trì hoặc cải thiện tầm vận động.",
          "Hạn chế cứng khớp.",
          "Tăng sức mạnh cơ.",
          "Tập lại thao tác cầm nắm và đi lại.",
          "Giảm phù nề.",
          "Kiểm soát sẹo.",
          "Hỗ trợ trở lại công việc và sinh hoạt.",
          "Tổ chức Y tế Thế giới xác định phục hồi chức năng là nhóm can thiệp nhằm tối ưu khả năng hoạt động và giảm khuyết tật ở người đang hoặc có nguy cơ bị giới hạn chức năng.",
          "Với tổn thương tay, bỏng qua khớp hoặc tái tạo chi thể, vật lý trị liệu và hoạt động trị liệu thường cần được bắt đầu đúng thời điểm. Tự tập quá mạnh có thể gây tổn thương, nhưng bất động kéo dài cũng có thể làm tăng co rút và cứng khớp.",
          "Những yếu tố nào ảnh hưởng đến kết quả tái tạo?",
          "Kết quả không chỉ phụ thuộc vào kỹ thuật mổ. Một số yếu tố quan trọng gồm:",
          "Mức độ và vị trí tổn thương.",
          "Thời gian từ khi bị thương đến lúc điều trị.",
          "Tình trạng tuần hoàn tại vùng tổn thương.",
          "Nhiễm khuẩn.",
          "Tuổi và sức khỏe tổng thể.",
          "Đái tháo đường hoặc bệnh mạch máu.",
          "Tình trạng dinh dưỡng.",
          "Hút thuốc lá và sử dụng nicotine.",
          "Khả năng tuân thủ chăm sóc vết thương.",
          "Quá trình phục hồi chức năng.",
          "Cơ địa hình thành sẹo.",
          "Thuốc lá và các sản phẩm nicotine có thể ảnh hưởng đến tuần hoàn và quá trình lành vết thương. Trước một số cuộc mổ vi phẫu hoặc tái tạo, người bệnh có thể được yêu cầu ngừng hút thuốc, thực hiện xét nghiệm và điều chỉnh một số thuốc đang sử dụng.",
          "Không nên tự ngừng thuốc chống đông, thuốc tim mạch hoặc thuốc điều trị bệnh nền khi chưa có hướng dẫn của bác sĩ.",
          "Phẫu thuật tái tạo có những nguy cơ nào?",
          "Giống các cuộc phẫu thuật khác, tạo hình tái tạo có thể có những nguy cơ như:",
          "Chảy máu.",
          "Nhiễm khuẩn.",
          "Tụ dịch hoặc tụ máu.",
          "Vết mổ chậm lành.",
          "Hoại tử một phần da hoặc mô.",
          "Da ghép không bám hoàn toàn.",
          "Tổn thương thần kinh.",
          "Thay đổi cảm giác.",
          "Sẹo dày hoặc co kéo.",
          "Không cân đối.",
          "Cần phẫu thuật bổ sung.",
          "Biến chứng liên quan đến gây mê.",
          "Đối với vạt mô, đặc biệt là vạt tự do, tình trạng tuần hoàn của vạt cần được theo dõi chặt chẽ sau mổ. Nếu mạch máu bị tắc, người bệnh có thể phải được can thiệp lại sớm.",
          "Bác sĩ sẽ cân nhắc giữa lợi ích dự kiến và nguy cơ, đồng thời giải thích phương án phù hợp với từng tình trạng.",
          "Khi nào nên khám chuyên khoa tạo hình?",
          "Người bệnh nên được đánh giá sớm khi có:",
          "Vết thương sâu hoặc mất nhiều da, mô mềm.",
          "Lộ xương, gân, mạch máu hoặc vật liệu cố định xương.",
          "Vùng da chuyển tím, đen hoặc nghi hoại tử.",
          "Bỏng sâu, bỏng qua khớp, bỏng mặt hoặc bàn tay.",
          "Vết thương lâu lành, tái loét hoặc chảy dịch kéo dài.",
          "Vết mổ bị bục.",
          "Sẹo co kéo gây khó vận động.",
          "Mí mắt không khép kín sau chấn thương hoặc bỏng.",
          "Miệng bị kéo lệch hoặc hạn chế há.",
          "Ngón tay, bàn tay hoặc cổ bị co rút.",
          "Khuyết hổng sau cắt bỏ khối u.",
          "Biến dạng ảnh hưởng rõ đến sinh hoạt và tâm lý.",
          "Cần đến cơ sở y tế ngay nếu vết thương chảy máu không cầm, chi lạnh hoặc tím, mất cảm giác đột ngột, đau tăng nhanh, sốt, chảy mủ, có mùi bất thường hoặc vùng tổn thương sưng đỏ lan rộng.",
          "Người bệnh nên hỏi gì trước khi phẫu thuật?",
          "Trước khi quyết định, người bệnh có thể trao đổi với bác sĩ:",
          "Mục tiêu chính của cuộc mổ là gì?",
          "Chức năng nào có khả năng được cải thiện?",
          "Có những phương án tái tạo nào?",
          "Vì sao bác sĩ lựa chọn ghép da hoặc vạt mô?",
          "Có phải lấy mô từ vùng khác trên cơ thể không?",
          "Vùng cho mô sẽ để lại ảnh hưởng gì?",
          "Có cần thực hiện nhiều giai đoạn không?",
          "Thời gian nằm viện và hồi phục dự kiến ra sao?",
          "Khi nào có thể vận động và trở lại công việc?",
          "Có cần vật lý trị liệu hoặc mang nẹp không?",
          "Sẹo có thể thay đổi như thế nào?",
          "Những dấu hiệu nào cần quay lại bệnh viện ngay?",
          "Mong đợi thực tế và hiểu rõ kế hoạch điều trị giúp người bệnh phối hợp tốt hơn trong suốt quá trình hồi phục."
        ]
      },
      {
        "heading": "Tái tạo không chỉ là khép lại một vết thương",
        "paragraphs": [
          "Một ca phẫu thuật tạo hình thành công không đơn giản là làm cho vùng tổn thương “nhìn đỡ hơn”. Mục tiêu sâu hơn là giúp người bệnh có một bề mặt che phủ bền vững, bảo vệ cấu trúc quan trọng, khôi phục chức năng và giảm những ảnh hưởng lâu dài về hình thể.",
          "Sau chấn thương, bỏng hoặc phẫu thuật lớn, người bệnh có thể đến Bệnh viện Đa khoa Hồng Phúc để được thăm khám, đánh giá tình trạng vết thương và tư vấn hướng xử trí phù hợp. Tùy mức độ tổn thương, quá trình chăm sóc có thể cần sự phối hợp giữa ngoại khoa, chẩn đoán hình ảnh, gây mê hồi sức, kiểm soát nhiễm khuẩn và phục hồi chức năng.",
          "Phẫu thuật tạo hình hiện đại cho thấy thẩm mỹ và y khoa không phải hai mục tiêu đối lập. Khi được chỉ định đúng, việc phục hồi hình dáng cũng chính là một phần của phục hồi chức năng, tâm lý và chất lượng sống.",
          "Nội dung trong bài viết mang tính chất tham khảo, không thay thế cho việc thăm khám, đánh giá vết thương hoặc chỉ định phẫu thuật trực tiếp từ bác sĩ."
        ]
      }
    ]
  }
};

export function getArticleContent(slug: string) {
  return articleDetails[slug];
}
