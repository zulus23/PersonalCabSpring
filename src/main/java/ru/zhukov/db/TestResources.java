package ru.zhukov.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Created by Gukov on 08.09.2015.
 */
@RestController
public class TestResources {

    @RequestMapping("/testresource")
    public Map<String, Object> home(){
       Map<String,Object> model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Привет от меня");
        return model;
    }
}
