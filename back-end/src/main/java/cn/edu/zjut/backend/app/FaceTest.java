package cn.edu.zjut.backend.app;

import cn.edu.zjut.backend.util.FaceRec;
import cn.smartjavaai.common.cv.SmartImageFactory;
import cn.smartjavaai.common.entity.R;
import cn.smartjavaai.common.entity.face.LivenessResult;
import cn.smartjavaai.face.config.FaceDetConfig;
import cn.smartjavaai.face.config.FaceRecConfig;
import cn.smartjavaai.face.config.LivenessConfig;
import cn.smartjavaai.face.entity.FaceSearchParams;
import cn.smartjavaai.face.enums.FaceDetModelEnum;
import cn.smartjavaai.face.enums.FaceRecModelEnum;
import cn.smartjavaai.face.enums.IdStrategy;
import cn.smartjavaai.face.enums.LivenessModelEnum;
import cn.smartjavaai.face.factory.FaceDetModelFactory;
import cn.smartjavaai.face.factory.FaceRecModelFactory;
import cn.smartjavaai.face.factory.LivenessModelFactory;
import cn.smartjavaai.face.model.facedect.FaceDetModel;
import cn.smartjavaai.face.model.facerec.FaceRecModel;
import cn.smartjavaai.face.model.liveness.LivenessDetModel;
import cn.smartjavaai.face.vector.config.MilvusConfig;
import com.google.gson.Gson;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

import ai.djl.modality.cv.Image;
import io.milvus.param.MetricType;
import io.milvus.response.*;

import io.milvus.client.MilvusServiceClient;
import io.milvus.param.ConnectParam;

public class FaceTest {

    public static void main(String[] args) throws IOException {

        String base64String = "";

        try {
            // 1. 读取文件的全部字节
            Path path = Paths.get("C:\\Users\\31986\\Desktop\\2.mp4");
            byte[] videoBytes = Files.readAllBytes(path);

            // 2. 转换为 Base64 字符串
            base64String = Base64.getEncoder().encodeToString(videoBytes);

            // 3. (可选) 如果你需要 Data URI 格式（用于前端 video 标签播放）
            // 注意：这里 MIME type 写 video/mp4，如果是其他格式请自行修改

        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

        FaceRec faceRec = FaceRec.getInstance();

//        Image image = SmartImageFactory.getInstance().fromFile(Paths.get("C:\\Users\\31986\\Desktop\\证件\\5032083c6c526f82552cab483fc7a25.jpg"));
        String file = Files.readString(Paths.get("C:\\Users\\31986\\Desktop\\output_base64.txt"));

//        faceRec.faceRegister(file);

        if(faceRec.faceRecognition(base64String)){
            System.out.println("识别成功");
        }else {
            System.out.println("识别失败");
        }
//        faceRec.faceRegister("1", "{测试一下}", image);
    }
}
